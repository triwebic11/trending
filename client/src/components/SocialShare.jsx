import React, { useState } from "react";
import { Mail, Share2, Facebook, Twitter, Send } from "lucide-react";
import { SiWhatsapp, SiPinterest, SiReddit } from "react-icons/si";

const SocialShare = ({
  url = typeof window !== "undefined" ? window.location.href : "",
  title = typeof document !== "undefined" ? document.title : "",
  className = "",
}) => {
  const [open, setOpen] = useState(false);

  const encoded = {
    url: encodeURIComponent(url),
    title: encodeURIComponent(title),
  };

  const links = [
    {
      name: "Email",
      href: `mailto:?subject=${encoded.title}&body=${encoded.url}`,
      bg: "bg-green-600",
      Icon: Mail,
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encoded.title}%20${encoded.url}`,
      bg: "bg-green-500",
      Icon: SiWhatsapp,
    },
    {
      name: "Reddit",
      href: `https://www.reddit.com/submit?title=${encoded.title}&url=${encoded.url}`,
      bg: "bg-orange-500",
      Icon: SiReddit,
    },
    {
      name: "Telegram",
      href: `https://t.me/share/url?url=${encoded.url}&text=${encoded.title}`,
      bg: "bg-sky-500",
      Icon: Send,
    },
    {
      name: "Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encoded.url}&description=${encoded.title}`,
      bg: "bg-red-600",
      Icon: SiPinterest,
    },
    {
      name: "Twitter / X",
      href: `https://x.com/intent/tweet?url=${encoded.url}&text=${encoded.title}`,
      bg: "bg-[#1d9bf0]",
      Icon: Twitter,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded.url}`,
      bg: "bg-[#1877f2]",
      Icon: Facebook,
    },
  ];

  return (
    <div className={className}>
      <div
        className="relative inline-block select-none"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* Share Icon */}
        <button
          aria-label="Share"
          className="w-10 h-10 rounded-full bg-gray-700/70 backdrop-blur flex items-center justify-center text-white hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <Share2 size={18} />
        </button>

        {/* Social Icons */}
        <div
          className={`absolute -left-36 -translate-x-1/2 -top-1 flex space-x-2 pt-2 transition-opacity ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {links.map(({ name, href, Icon, bg }, idx) => {
            const reverseIdx = links.length - 1 - idx;
            return (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                style={{
                  transitionDelay: `${open ? reverseIdx * 80 : 0}ms`,
                }}
                className={`w-8 h-8 rounded-full text-white flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                  open ? "translate-x-0 scale-100" : "translate-x-4 scale-75"
                } ${bg}`}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
