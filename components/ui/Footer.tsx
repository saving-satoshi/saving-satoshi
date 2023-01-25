import { siteConfig } from 'config/site'

export const Footer = () => {
  return (
    <div className="h-auto w-screen">
      <div className="flex flex-col items-center justify-center px-6 py-4 text-white sm:flex-row">
        <p className="p-1">
          An open-source production by the bitcoin community.
        </p>
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer nofollow"
          className="p-1 underline hover:opacity-80"
        >
          Check the code
        </a>
      </div>
    </div>
  )
}
