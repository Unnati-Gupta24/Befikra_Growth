import { FaDiscord, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'

const socialLinks = [
  { href: 'https://discord.com', icon: <FaDiscord /> },
  { href: 'https://twitter.com', icon: <FaTwitter /> },
  { href: 'https://youtube.com', icon: <FaYoutube /> },
  { href: 'https://medium.com', icon: <FaLinkedin /> },
]

const Footer = () => {
  return (
    <footer className="w-screen bg-gradient-to-b from-black via-black/80 to-black/60 py-4 text-gray-300 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Befikra Growth X All rights reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition-colors duration-500 ease-in-out hover:text-yellow-300 hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:text-yellow-300 transition-colors duration-500 md:text-right"
        >
          Thanks for Visiting!
        </a>
      </div>
    </footer>
  )
}

export default Footer
