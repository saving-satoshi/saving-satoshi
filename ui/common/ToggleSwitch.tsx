import Text from './Text'

export default function ToggleSwitch({ text, checked, onChange }) {
  return (
    <div className="flex flex-row gap-2.5">
      <div className="toggle-switch">
        <label className="switch">
          <input type="checkbox" checked={checked} onChange={onChange} />
          <span className="slider round"></span>
        </label>
      </div>
      <Text>{text}</Text>
    </div>
  )
}
