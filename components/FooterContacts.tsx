'use client'

import { FaTelegramPlane, FaPhoneAlt, FaViber } from 'react-icons/fa'
import { SiInstagram, SiTiktok } from 'react-icons/si'

const socialLinks = [
  {
    label: 'Telegram',
    url: 'https://t.me/blacklight365',
    Icon: FaTelegramPlane,
    hoverColor: 'hover:bg-purple-500',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/_blacklight365',
    Icon: SiInstagram,
    hoverColor: 'hover:bg-pink-500',
  },
  {
    label: 'TikTok',
    url: 'https://www.tiktok.com/@blacklight365',
    Icon: SiTiktok,
    hoverColor: 'hover:bg-[#EE1D52]',
  },
  {
    label: 'Позвонить',
    url: 'tel:+380689991414',
    Icon: FaPhoneAlt,
    hoverColor: 'hover:bg-blue-600',
  },
  {
    label: 'Viber',
    url: 'viber://chat?number=%2B380689991414',
    Icon: FaViber,
    hoverColor: 'hover:bg-purple-600',
  },
]

export function FooterContacts() {
  return (
    <div className="mt-12 flex justify-center gap-6 relative z-10">
      {socialLinks.map(({ label, url, Icon, hoverColor }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center bg-gray-800 ${hoverColor} text-white p-2 rounded-full transition cursor-pointer hover:scale-110`}
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  )
}
