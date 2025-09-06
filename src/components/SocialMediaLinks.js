import React from 'react';

const socialLinks = [
  {
    href: "https://www.instagram.com/mynykaa/?ref=badge",
    alt: "Instagram",
    src: "https://adn-static2.nykaa.com/media/wysiwyg/2020/9sep/SocialInstagram.svg"
  },
  {
    href: "https://www.facebook.com/p/Nykaa-100044142710696/",
    alt: "Facebook",
    src: "https://adn-static2.nykaa.com/media/wysiwyg/2020/9sep/SocialFacebook.svg"
  },
  {
    href: "https://www.youtube.com/channel/UCoaH2UtB1PsV7av17woV1BA",
    alt: "YouTube",
    src: "https://adn-static2.nykaa.com/media/wysiwyg/2020/9sep/SocialYoutube.svg"
  },
  {
    href: "https://twitter.com/MyNykaa",
    alt: "Twitter",
    src: "https://adn-static1.nykaa.com/media/wysiwyg/2020/9sep/SocialTwitter.svg"
  },
  {
    href: "https://www.pinterest.com/mynykaa/",
    alt: "Pinterest",
    src: "https://adn-static2.nykaa.com/media/wysiwyg/2020/9sep/SocialPinterest.svg"
  }
];

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-col items-center my-6 text-center">
      <p className="text-lg font-medium text-gray-700 mb-3">
        Show us some love ❤ on social media
      </p>
      <ul className="flex gap-6">
        {socialLinks.map(({ href, alt, src }, index) => (
          <li key={index}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={src}
                alt={alt}
                className="w-7 h-7"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
