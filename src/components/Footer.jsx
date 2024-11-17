import React from "react";

function Footer() {
  const socials = [
    { name: "Github", url: "https://github.com/trisha-thakur" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/trisha-s-thakur" },
  ];

  return (
    <div className=" py-6">
      <footer className="text-center">
        <p className="text-white text-lg mb-4">
          Made with <span className="text-red-500">&#10084;</span> by Trisha
        </p>

        <ul className="flex justify-center space-x-6">
          {socials.map((social, index) => (
            <li key={index}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F1E4C3] text-lg transition-transform transform hover:scale-105 hover:text-[#915eff]"
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
