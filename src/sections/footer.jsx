import { useState } from "react";
import banner from "../sections/profiles/banner.png";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const citations = {
    academic: [
      { name: "Smith, Women in NASA", url: "#" },
      { name: "Feminist Archive Studies Journal", url: "#" },
    ],
    media: [
      { name: "NYTimes – Women in Space Coverage", url: "#" },
      { name: "BBC – Female Astronaut Profiles", url: "#" },
    ],
    archives: [
      { name: "NASA Image Archive", url: "#" },
      { name: "NASA Oral Histories", url: "#" },
    ],
  };

  return (
    
    <footer className="footer">

      {/* Banner */}
      <div
        className="footer__banner"
        style={{ backgroundImage: `url(${banner})` }}
      />

      {/* Grid content */}
      <div className="footer__grid">

        {/* About */}
        <div>
          <h3>Making Space for Women</h3>
          <p>
            A feminist counter-archive exploring the representation of women
            in space exploration.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4>Contact</h4>
          <a href="mailto:sydneytse7@gmail.com" className="linkUnderline">
            sydneytse7@gmail.com
          </a>
        </div>

        
         {/* Citations */}
        <div>
        <h4>
        <a href="/citations" className="footerLink">
         Citations
        </a>
        </h4>
        <p>
            Click to find the full list of references and images used.
          </p>
         </div>

      </div>

    </footer>
  );
}