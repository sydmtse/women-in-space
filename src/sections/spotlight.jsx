import { useState } from "react";

/* ---------------- IMAGE IMPORTS ---------------- */

import mae_jemison from "./profiles/mae_jemison.jpg";
import eileen_collins from "./profiles/eileen_collins.jpg";
import sally_ride from "./profiles/sally_ride.jpeg";
import katherine_johnson from "./profiles/katherine_johnson.jpeg";
import margaret_hamilton from "./profiles/margaret_hamilton.jpeg";
import ruth_bates from "./profiles/ruth_bates.jpg";
import nancy_grace from "./profiles/nancy_grace.jpg";
import nichelle_nichols from "./profiles/nichelle_nichols.jpeg";
import margot_lee from "./profiles/margot_lee.jpeg";
import christina_koch from "./profiles/christina_koch.jpg";

/* ---------------- DATA ---------------- */

const explorers = [
  {
    name: "Mae Jemison",
    field: "Astronaut / Physician / Engineer",
    period: "1987 - 1993",
    did: "Dr. Mae Jemison was the first African-American woman to travel to space when she served as a mission specialist aboard the Space Shuttle Endeavour (STS-47) from September 12-20, 1992, orbiting the Earth 127 times. During her eight-day mission, she conducted experiments on bone cell research, motion sickness, and frog development in microgravity in the Spacelab-J module. Since leaving NASA in 1993, she founded multiple organizations including the Jemison Group - a consulting firm focused on technology and its sociocultural impact, and an international science camp “The Earth We Share”.",
    representation:
      "The publicity from her historic flight gave her a more visible platform. She appeared in a number of publications and media outlets as a symbol of progress. Her incredible outreach and visibility lent to her later success as a scientist and public speaker, encouraging STEM involvement for women and minorities." ,
    img: mae_jemison,
  },
  {
    name: "Eileen Collins",
    field: "Astronaut / Pilot",
    period: "1990 - 2006",
    did: "Selected as an astronaut in 1990, Collins became the first woman pilot of a U.S. space shuttle in February 1995, serving on the orbiter Discovery for a rendezvous and docking mission to the Russian space station Mir. She became the first woman to command a US spacecraft with STS-93, which launched in July 1999 and deployed the Chandra X-Ray Observatory. In 2005 she commanded STS-114, NASA's *return to flight* mission after the Space Shuttle Columbia disaster.",
    representation:
      "Recognised in leadership, but still framed as exception.",
    img: eileen_collins,
  },
  {
    name: "Sally Ride",
    field: "Astronaut / Physicist",
    period: "1980s",
    did: "First American woman in space (1983).",
    representation:
      "Highly visible but often reduced to 'first woman'.",
    img: sally_ride,
  },
  {
    name: "Christina Koch",
    field: "Astronaut / Engineer",
    period: "2010s–2020s",
    did: "Record for longest single spaceflight by a woman.",
    representation:
      "More visibility, but still within selective narratives.",
    img: christina_koch,
  },
];

const behindScenes = [
  {
    name: "Katherine Johnson",
    field: "Mathematician",
    period: "1960s–1980s",
    did: "Calculated orbital mechanics for Apollo missions.",
    representation:
      "Long uncredited; later recognised through Hidden Figures.",
    img: katherine_johnson,
  },
  {
    name: "Margaret Hamilton",
    field: "Computer Scientist",
    period: "1960s",
    did: "Led Apollo flight software development.",
    representation:
      "Critical but historically under-recognised.",
    img: margaret_hamilton,
  },
  {
    name: "Ruth Bates Harris",
    field: "Civil Rights Advocate / NASA Employee",
    period: "1970s",
    did: "Exposed discrimination within NASA hiring practices.",
    representation:
      "Marginalised and silenced within institutions.",
    img: ruth_bates,
  },
  {
    name: "Nancy Grace Roman",
    field: "Astronomer",
    period: "1960s–1980s",
    did: "First Chief of Astronomy at NASA; helped develop Hubble.",
    representation:
      "Called 'Mother of Hubble' but underrepresented.",
    img: nancy_grace,
  },
];

const advocates = [
  {
    name: "Nichelle Nichols",
    field: "Actress / NASA Recruiter",
    period: "1970s–1980s",
    did: "Helped recruit women and people of colour into NASA.",
    representation:
      "Known for Star Trek, under-credited for NASA impact.",
    img: nichelle_nichols,
  },
  {
    name: "Margot Lee Shetterly",
    field: "Author / Researcher",
    period: "2010s",
    did: "Wrote Hidden Figures.",
    representation:
      "Reshaped visibility of Black women in NASA history.",
    img: margot_lee,
  },
];


/* ---------------- COMPONENT ---------------- */

export default function Spotlight() {
  const [active, setActive] = useState(null);
  const [selectedExplorer, setSelectedExplorer] = useState(null);
  const [selectedBehind, setSelectedBehind] = useState(null);
  const [selectedAdvocates, setSelectedAdvocates] = useState(null);

  // Reset all dropdowns when switching tabs
  const handleTabChange = (tab) => {
    setActive(tab);
    setSelectedExplorer(null);
    setSelectedBehind(null);
    setSelectedAdvocates(null);
  };

  return (
    <div className="section">
      <h2 className="section__title">spotlight</h2>

      <p className="intro-text">
        Discover some key female figures that made immense contributions to science, space exploration, and helped make space more accessible and visible to all.
      </p>

      {/* Tabs */}
      <div className="pillRow">
        <button
          className={`pill ${active === "explorers" ? "active" : ""}`}
          onClick={() => handleTabChange("explorers")}
        >
          explorers
        </button>

        <button
          className={`pill ${active === "behind" ? "active" : ""}`}
          onClick={() => handleTabChange("behind")}
        >
          behind the scenes
        </button>

        <button
          className={`pill ${active === "advocates" ? "active" : ""}`}
          onClick={() => handleTabChange("advocates")}
        >
          advocates
        </button>
      </div>

      {/* Sub text */}
      {active && (
        <p className="sub-text">
          {active === "explorers" &&
            "Women who physically journeyed into space and redefined exploration."}

          {active === "behind" &&
            "The minds behind the missions — often unseen but essential."}

          {active === "advocates" &&
            "Voices that pushed for inclusion and reshaped the future of space."}
        </p>
      )}

      {/* -------- EXPLORERS -------- */}
      {active === "explorers" && (
        <Section
          data={explorers}
          selected={selectedExplorer}
          setSelected={setSelectedExplorer}
        />
      )}

      {/* -------- BEHIND THE SCENES -------- */}
      {active === "behind" && (
        <Section
          data={behindScenes}
          selected={selectedBehind}
          setSelected={setSelectedBehind}
        />
      )}

      {/* -------- ADVOCATES -------- */}
      {active === "advocates" && (
        <Section
          data={advocates}
          selected={selectedAdvocates}
          setSelected={setSelectedAdvocates}
        />
      )}
    </div>
  );
}

/* ---------------- REUSABLE SECTION ---------------- */

function Section({ data, selected, setSelected }) {
  return (
    <div className="spotlightSection">
      {/* Row */}
      <div className="circleRow">
        {data.map((person, index) => (
          <div key={person.name} className="circleItem">
            
         <img
  src={person.img}
  alt={person.name}
  className={`circleImg ${selected === index ? "active" : ""}`}
  onClick={() =>
    setSelected(selected === index ? null : index)
  }
/>

            <p className={`circleName ${selected === index ? "active" : ""}`}>
 {person.name}
</p>
          </div>
        ))}
      </div>

      {/* Dropdown */}
      {selected !== null && (
        <div className="dropdownCard">
          <h3>{data[selected].name}</h3>

          <table className="infoTable">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{data[selected].name}</td>
              </tr>
              <tr>
                <td>Field</td>
                <td>{data[selected].field}</td>
              </tr>
              <tr>
                <td>Time Period</td>
                <td>{data[selected].period}</td>
              </tr>
            </tbody>
          </table>

          <h4>What she did</h4>
          <p>{data[selected].did}</p>

          <h4>How she was represented</h4>
          <p>{data[selected].representation}</p>
        </div>
      )}
    </div>
  );
}