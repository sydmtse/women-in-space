import { useState } from "react";

export default function Discussion() {
  const [openIndex, setOpenIndex] = useState(null);

const sections = [
    {
      title: "digital archives & counter-archives",
      desc: "Community-built and critical archival platforms.",
      links: [
        { name: "Mukurtu CMS", url: "https://mukurtu.org" },
        { name: "Digital Humanities Now", url: "https://digitalhumanitiesnow.org" },
      ],
    },
    {
      title: "feminist archives & advocacy",
      desc: "Projects preserving and amplifying women's histories.",
      links: [
        { name: "Women’s Library", url: "#" },
        { name: "Feminist Archive North", url: "#" },
      ],
    },
    {
      title: "petitions & campaigns",
      desc: "Active movements addressing representation gaps.",
      links: [
        { name: "Change.org", url: "#" },
        { name: "UN Women Campaigns", url: "#" },
      ],
    },
    {
      title: "women in space & STEM",
      desc: "Resources and communities supporting women in STEM.",
      links: [
        { name: "NASA Women", url: "#" },
        { name: "STEM Women", url: "#" },
      ],
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="Discussion">
      
      {/* HEADER */}
      <div className="Discussion__header">
        <h2 className="Discussion__title">Join the Discussion</h2>
        <p>
          This project extends beyond the archive. These platforms, campaigns,
          and communities offer ways to engage, question, and reshape how women’s
          contributions are recorded and valued.
        </p>

      </div>

      {/* LIST */}
      <div className="Discussion__list">
        {sections.map((section, index) => (
          <div key={index} className="row">
            
            <div className="row__left">
              <h3>{section.title}</h3>
            </div>

            <div className="row__right">
              <p>{section.desc}</p>

              <button
                className={`arrowBtn ${openIndex === index ? "open" : ""}`}
                onClick={() => toggle(index)}
              >
                →
              </button>
            </div>

            {/* DROPDOWN */}
            {openIndex === index && (
              <div className="dropdown">
                {section.links.map((link, i) => (
                  <a href={link.url} className="linkUnderline" target="_blank" rel="noreferrer">
  {link.name}
</a>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}