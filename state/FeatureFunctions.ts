import { useAtom, useSetAtom } from 'jotai'
import { isLoadingFeaturesAtom, featuresAtom } from './state'
import { getFeatures } from 'api/features'

export const useFeatureFunctions = () => {
  const [features] = useAtom(featuresAtom)
  const setIsLoading = useSetAtom(isLoadingFeaturesAtom)
  const setFeatures = useSetAtom(featuresAtom)

  const init = async () => {
    try {
      setIsLoading(true)
      const featuresData = await getFeatures()
      if (!featuresData) {
        throw new Error('Could not fetch features')
      }
      const features = featuresData.reduce((obj, feature) => {
        obj[feature.feature_name] = feature.feature_value
        return obj
      }, {})
      setFeatures(features)
    } catch (ex) {
      console.error(ex)
    } finally {
      setIsLoading(false)
    }
  }

  const isFeatureEnabled = (name: string) => {
    // TODO reset this to false
    //return true
    return !!features[name]
  }

  return { init, isFeatureEnabled }
}
