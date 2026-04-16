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
          <a href="mailto:your@email.com" className="linkUnderline">
            your@email.com
          </a>
        </div>

        {/* Citations */}
        <div>
          <h4 onClick={() => toggle("citations")} className="footer__toggle">
            Citations
          </h4>

          {openSection === "citations" && (
            <div className="footer__citations">

              <div>
                <h5 onClick={() => toggle("academic")}>Academic</h5>
                {openSection === "academic" &&
                  citations.academic.map((c, i) => (
                    <a key={i} href={c.url} target="_blank" rel="noreferrer">
                      {c.name}
                    </a>
                  ))}
              </div>

              <div>
                <h5 onClick={() => toggle("media")}>Media</h5>
                {openSection === "media" &&
                  citations.media.map((c, i) => (
                    <a key={i} href={c.url} target="_blank" rel="noreferrer">
                      {c.name}
                    </a>
                  ))}
              </div>

              <div>
                <h5 onClick={() => toggle("archives")}>Archives</h5>
                {openSection === "archives" &&
                  citations.archives.map((c, i) => (
                    <a key={i} href={c.url} target="_blank" rel="noreferrer">
                      {c.name}
                    </a>
                  ))}
              </div>

            </div>
          )}
        </div>

      </div>

    </footer>
  );
}