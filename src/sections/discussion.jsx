import { useState } from "react";

export default function Discussion() {
  const [openIndex, setOpenIndex] = useState(null);

const sections = [
    {
      title: "Recent News",
      desc: "Relevant news articles regarding NASA and the affects of the DEI rollback",
      links: [
        { name: "White House: Ending DEI Programs and Preferencing", url: "https://www.whitehouse.gov/presidential-actions/2025/01/ending-radical-and-wasteful-government-dei-programs-and-preferencing/" },
        { name: "White House: Ensuring American Space Superiority", url: "https://www.whitehouse.gov/presidential-actions/2025/12/ensuring-american-space-superiority/" },
        { name: "Scientific American: Trump's DEI Purge Is Hitting NASA Hard", url: "https://www.scientificamerican.com/article/trumps-dei-purge-is-hitting-nasa-hard/#:~:text=In%20January%202023%2C%20President%20Donald%20Trump%20issued,*%20Halting%20projects%20by%20employee%20affinity%20organizations" },
        { name: "Artemis missions", url: "https://www.nasa.gov/humans-in-space/artemis/" },
      ],
    },
    {
      title: "Women in Space & Feminist Literature",
      desc: "Resources and communities preserving and amplifying women's histories.",
      links: [
        { name: "Herstory: Multi-disciplinary storytelling movement", url: "https://www.herstory.ie/home" },
        { name: "Where are my People? A Historical Analysis on NASA's Equal Opportunity Initiatives", url: "Where are my People_  A Historical Analysis on NASA_s Equal Oppor.pdf" },
        { name: "Gendered Space: Emerging Frames in NASA PR and Mainstream Media Representation, 1958-1986", url: "https://file.notion.so/f/f/f38b2df5-21d1-4a28-b886-baba6083c55f/fffa53b8-ba39-4667-86d3-7ea5e0ea2508/gendered_space_article.pdf?table=block&id=344a8e79-fb8c-80bb-97f4-f92d9ed79e7e&spaceId=f38b2df5-21d1-4a28-b886-baba6083c55f&expirationTimestamp=1776470400000&signature=qMcEfPP5PQ6Uu8qbcgN_QBV9ywdJAhHOvCb1EuLIvTw&downloadName=gendered+space+article.pdf" },
      ],
    },
    {
      title: "Petitions & Campaigns",
      desc: "Active movements addressing representation gaps.",
      links: [
        { name: "Human Computer Project", url: "http://margotleeshetterly.com/the-human-computer-project" },
        { name: "HOWL: History of Women's Liberation", url: "https://howl-uk.org/" },
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
      </div>

       <p className="intro">
        This archive does not exist in isolation. The erasure it documents is ongoing - and so is the resistance. Below are the news stories, literature, and communities that situate this project within a wider fight over who gets to shape the historical record.
        </p>

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