import { siteConfig } from 'config/site'

export const Footer = () => {
  return (
    <div className="left-0 bottom-0 w-screen">
      <div className="m-auto flex items-center justify-center px-6 py-4 text-white">
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
