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
    period: "Active at NASA: 1987 - 1993",
    did: "Dr. Mae Jemison was the first African-American woman to travel to space when she served as a mission specialist aboard the Space Shuttle Endeavour (STS-47) from September 12-20, 1992, orbiting the Earth 127 times. During her eight-day mission, she conducted experiments on bone cell research, motion sickness, and frog development in microgravity in the Spacelab-J module. Since leaving NASA in 1993, she founded multiple organizations including the Jemison Group - a consulting firm focused on technology and its sociocultural impact, and an international science camp “The Earth We Share”.",
    representation:
      "The publicity from her historic flight gave her a more visible platform. She appeared in a number of publications and media outlets as a symbol of progress. Her incredible outreach and visibility lent to her later success as a scientist and public speaker, encouraging STEM involvement for women and minorities." ,
    sources: [
  {
    title: "National Women's History Museum",
    url: "https://www.womenshistory.org/education-resources/biographies/mae-jemison"
  },
  {
    title: "Biography",
    url: "https://www.biography.com/scientists/mae-c-jemison"
  },
  {
    title: "NASA",
    url: "https://www.nasa.gov/former-astronaut-mae-c-jemison/"
  },
],
      img: mae_jemison,
  },
  {
    name: "Eileen Collins",
    field: "Astronaut / Military Pilot",
    period: "Active at NASA: 1990-2006",
    did: "Eileen Collins was a NASA astronaut and U.S. Air Force test pilot who played a key role in expanding women's participation in spaceflight leadership. In 1995, she became the first woman to pilot a Space Shuttle (STS-63), a mission that included a rendezvous with the Russian Mir space station and marked an important step in post-Cold War cooperation. In 1999, she became the first woman to command a Space Shuttle mission (STS-93). She later commanded STS-114 in 2005, NASA’s “Return to Flight” mission following the Space Shuttle Columbia disaster, which was central to re-establishing operational confidence in the agency's human spaceflight programme",
    representation:
      "Media coverage of Eileen Collins frequently emphasized her status as the “first woman” to serve as both a Space Shuttle pilot (1995) and commander (1999). Reporting from outlets such as The New York Times and CNN foregrounded this milestone, often introducing her role through the lens of gender before addressing mission-specific or technical responsibilities. Within institutional materials, including NASA press kits and mission briefings, references to these gendered milestones were similarly positioned early in communications, followed by more detailed operational information. Coverage also extended beyond her role within the shuttle programme, with attention given to her personal life, particularly in relation to her role as a mother and the broader context of work–life balance.",
  sources: [
  {
    title: "Smithsonian Magazine 2019",
    url: "https://www.smithsonianmag.com/smithsonian-institution/what-it-was-become-first-woman-pilot-and-command-space-shuttle-180973343/"
  },
  {
    title: "National Archives",
    url: "https://prologue.blogs.archives.gov/2021/03/11/taking-it-to-the-stars-eileen-collins-space-shuttle-commander/"
  },
  {
    title: "NASA",
    url: "https://www.nasa.gov/former-astronaut-eileen-collins/"
  },
],
      img: eileen_collins,
  },
  {
    name: "Sally Ride",
    field: "Astronaut / Physicist",
    period: "Active at NASA: 1978-1987",
    did: "Sally Ride was a physicist and NASA astronaut who became the first American woman in space in 1983 aboard STS-7. During the mission, she operated the shuttle’s robotic arm (Canadarm), deploying and retrieving satellites. She later flew a second mission (STS-41-G), aboard Challenger in 1984; the crew included another woman, Kathryn Sullivan, who became the first American woman to walk in space. Ride played a significant role on the investigative panels for the Challenger disaster and the Columbia disaster becoming the only individual to participate in both inquiries. Her work contributed to the improving safety procedures and accountability within NASA. Her career has since extended beyond flight, including founding the non-profit Sally Ride Science at UC San Diego in 2001 to inspire young students in STEM fields, and authoring children’s books about space.",
    representation:
      "Media coverage of Sally Ride during her 1983 mission provides a well-documented example of gendered framing in science reporting. In pre-launch press conferences archived by NASA, journalists asked questions concerning her emotional responses, physical suitability for spaceflight, and the potential impact of the mission on her reproductive health—lines of questioning not typically directed at male astronauts. Coverage from publications such as The New York Times, Time, and Newsweek consistently positioned. Ride as a cultural milestone, frequently foregrounding her status as 'America’s first woman in space' alongside discussion of her scientific role. Ride did not publicly disclose details of her personal relationships during her lifetime, and media coverage remained focused on her professional role and historic status within the space programme. After her death, she was acknowledged to have had a long-term same-sex partner, a detail that has since been incorporated into retrospective accounts of her life.",
      sources: [
  {
    title: "National Air and Space Museum",
    url: "https://airandspace.si.edu/explore/stories/sally-ride"
  },
  {
    title: "National Women's History Museum",
    url: "https://www.womenshistory.org/education-resources/biographies/sally-ride"
  },
  {
    title: "NASA",
    url: "https://science.nasa.gov/people/sally-ride/#hds-sidebar-nav-1"
  },
],
      img: sally_ride,
  },
  {
    name: "Christina Koch",
    field: "Astronaut / Engineer",
    period: "Active at NASA: 2013-present",
    did: "Christina Koch is an American astronaut and engineer who holds the record for the longest single spaceflight by a woman. She has contributed to International Space Station (ISS) expeditions and completed NASA’s most recent Artemis II mission, which sent astronauts around the Moon. This positions her to be the first woman to travel beyond low Earth orbit. Koch launched to the ISS in March 2019 as part of Expedition 59/60/61, remaining in space for 328 days—setting a record for the longest single spaceflight by a woman. During her mission, she conducted scientific experiments in biology, Earth science, and physics, and completed six spacewalks. Notably, she participated in the first all-female spacewalk alongside Jessica Meir in October 2019, replacing a failed power controller on the station.",
    representation:
      "Koch's role in Artemis II has been widely publicized as part of NASA’s broader narrative of returning humans to the Moon, with a strong emphasis on inclusion and representation. She is often positioned as a symbol of the future of space exploration - used in outreach, interviews, and promotional media to represent progress in gender equity.",
  sources: [
  {
    title: "EBSCO",
    url: "https://www.ebsco.com/research-starters/biography/christina-koch-ogchristina-koch"
  },
  {
    title: "NASA",
    url: "https://www.nasa.gov/people/christina-koch/"
  },
],
      img: christina_koch,
  },
];

const behindScenes = [
  {
    name: "Katherine Johnson",
    field: "Human Computer / Mathematician",
    period: "Active at NASA/NACA: 1953-1986",
    did: "Johnson's work included calculating trajectories, launch windows, and emergency return paths for Project Mercury spaceflights, including those for astronauts Alan Shepard and John Glenn, and rendezvous paths for the Apollo Lunar Module and command module on flights to the Moon. She personally performed the final recalculations of programme computer calculations.",
    representation:
      "There was no documented record of her pivotal role in NASA, along with many other software engineers and mathematicians, she could not claim any authorial credit and therefore there was no official record of her contributions. It was only in the past decade, through the popularization of Margot Lee Shetterly’s book and film adaptation that brought her to the forefront of media. This later followed by  recognition from the Obama administration awarding the Presidential Medal of Freedom in 2015, and the building she once worked in renamed: the Katherine G. Johnson Computational Research Facility in her honour in 2016. ",
  sources: [
  {
    title: "Lives Retold",
    url: "https://static1.squarespace.com/static/5c65dd81af46834afd07e40a/t/60cef48da9202f72b0f283ae/1624175761866/lives+retold+johnson+katherine.pdf"
  },
   {
    title: "Princeton: Centre of Science and Tech",
    url: "https://cst.princeton.edu/people/katherine-johnson"
  },
  {
    title: "NASA",
    url: "https://www.nasa.gov/katherine-johnson/"
  },
],
      img: katherine_johnson,
  },
  {
    name: "Margaret Hamilton",
    field: "Computer Scientist",
    period: "Active at NASA: 1961-1970s",
    did: "Hamilton was the first programmer hired for the Apollo project at MIT and the first female programmer in the project, and later became Director of the Software Engineering Division. She was responsible for the team writing and testing all onboard in-flight software for the Apollo spacecraft's Command and Lunar Module. …",
    representation:
      "Hamilton is hardly mentioned in the literature before 2016 - but in recent years she has received widespread recognition. She received the Presidential Medal of Freedom …",
    sources: [
  {
    title: "Smithsonian Museum",
    url: "https://www.smithsonianmag.com/smithsonian-institution/margaret-hamilton-led-nasa-software-team-landed-astronauts-moon-180971575/"
  },
   {
    title: "Linda Hall Library",
    url: "https://www.lindahall.org/about/news/scientist-of-the-day/margaret-hamilton/"
  },
  {
    title: "NASA Science",
    url: "https://science.nasa.gov/people/margaret-hamilton/"
  },
],
    img: margaret_hamilton,
  },
  {
    name: "Ruth Bates Harris",
    field: "Civil Rights Advocate / NASA Public Affairs Employee",
    period: "Active at NASA: 1971-1976",
    did: "Harris had earned an MBA with an emphasis in personnel administration and had years of experience as the director of Human Relations for the Montgomery County school board in Maryland before being recruited to NASA. She was tasked with reforming the agency's equality programs, but faced systemic resistance - her firing led to Congressional attention and over 200 newspaper articles covering the case. She was rehired in 1973 as Deputy Assistant Administrator for Public Affairs.",
    representation:
      "Ruth Bates Harris remains one of the least publicly known but most structurally significant women in NASA's history. Her case has since been published in sociological, historical, and public management journals as a study in intersectionality and institutional resistance. …",
  sources: [
  {
    title: "Ephemera Journal",
    url: "https://ephemerajournal.org/contribution/intersectionality-work-case-ruth-bates-harris-and-nasa"
  },
   {
    title: "[No dedicated page on NASA for Ruth Bates Harris]",
    url: "https://www.nasa.gov/?search=Ruth+Bates+Harris"
  },
],
      img: ruth_bates,
  },
  {
    name: "Nancy Grace Roman",
    field: "Astronomy / Space Science Administration",
    period: "Active at NASA: 1959–1979",
    did: "The first female executive at NASA, Roman served as NASA's first Chief of Astronomy throughout the 1960s and 1970s, establishing her as one of the 'visionary founders of the US civilian space program'. Roman created NASA's space astronomy program and is known as the 'Mother of Hubble.' She had oversight for the planning and development of programs including the Cosmic Background Explorer and the Hubble Space Telescope. In the mid-1960s, she set up a committee of astronomers and engineers to envision a telescope that could accomplish important scientific goals, and convinced NASA and Congress that it was a priority.",
    representation:
      "Dr. Roman faced many challenges throughout her career; she was discouraged from pursuing astronomy from a young age. She had to use the prefix ‘Dr.’ with her name because 'otherwise, I could not get past the secretaries.' In 2020, NASA administrator Jim Bridenstine announced that the Wide Field Infrared Survey Telescope would be named the Nancy Grace Roman Space Telescope in recognition of her enduring contributions to astronomy.",
    sources: [
  {
    title: "AAUW",
    url: "https://www.aauw.org/resources/faces-of-aauw/nancy-grace-roman-the-life-and-legacy-of-a-nasa-star/"
  },
   {
    title: "ESA Hubble",
    url: "https://esahubble.org/about/history/the-mother-of-hubble/"
  },
  {
    title: "NASA Science",
    url: "https://science.nasa.gov/people/nancy-roman/"
  },
],
      img: nancy_grace,
  },
];

const advocates = [
  {
    name: "Nichelle Nichols",
    field: "Actress / NASA Recruiter",
    period: "Active at NASA: 1977-2015",
    did: "Nichols was an actress and advocate who became a key administrative figure in expanding NASA’s hiring practices. Using the platform her acting career established, Nichols founded Women in Motion - a consultancy firm dedicated to the diversification of the space programs. From 1977 to 2015, she volunteered her time to promote NASA's programs and recruit diverse astronauts. In just four months, Nichols's recruitment efforts aided in transforming NASA's application pool from 1500 to more than 8000 applicants, including 15 times more women and nearly 30 times more minority applicants. Among those recruited were Dr. Sally Ride, the first American female astronaut, and Guion Bluford, the first African-American to go into space.",
    representation:
      "Nichelle Nichols first rose to prominence through her portrayal of Lt. Nyota Uhura in Star Trek, a role widely recognized as significant within 1960s American television, where women of colour were rarely represented in positions of authority, technical expertise, or futurist narratives. Media coverage often framed Nichols through the cultural significance of this role, particularly its challenge to prevailing racial and gender norms in mainstream entertainment. Her legacy has been further reinforced through documentaries and broadcast retrospectives, particularly Woman in Motion (2019/2021), which reframed public understanding of Nichols- showcasing her broader institutional and cultural impact. She later received public acknowledgement, including NASA’s Public Service Award. Her representation evolved from fictional pioneer, to public advocate, to contributor to the history of human spaceflight.",
    sources: [
  {
    title: "NASA",
    url: "https://www.nasa.gov/people-of-nasa/special-observances/nichelle-nichols-helped-nasa-break-boundaries-on-earth-and-in-space/"
  },
   {
    title: "National Air and Space Museum",
    url: "https://www.airandspace.si.edu/stories/editorial/remembering-nichelle-nichols"
  },
  {
    title: "Celestis: Memorial Spaceflights",
    url: "https://www.celestis.com/blog/nichelle-nichols-the-life-and-legacy-of-a-pioneer/"
  },
],
      img: nichelle_nichols,
  },
  {
    name: "Margot Lee Shetterly",
    field: "Author / Researcher",
    period: "Book published in 2016",
    did: "Margot Lee Shetterly is an American nonfiction writer whose first book, Hidden Figures: The American Dream and the Untold Story of the Black Women Who Helped Win the Space Race (2016), is about African-American women mathematicians working at NASA who were instrumental to the success of the United States space program. Shetterly's father was an atmospheric research scientist at NASA Langley, and growing up she was surrounded by Black scientists and engineers - many of them women - which provided her rare insights into the early days of American aeronautics. Through hundreds of interviews and thousands of documents, Shetterly told the stories of Dorothy Vaughan, Katherine Johnson, Mary Jackson, and Christine Darden - women who overcame discrimination to become vital parts of mathematics and engineering history.",
    representation:
      "The film adaptation of her book became the number one movie in America and was nominated for the Academy Award for Best Picture and Best Adapted Screenplay. Her work had direct real-world impact: it led to NASA renaming its headquarters building after Mary W. Jackson, and contributed to Katherine Johnson receiving the Congressional Gold Medal. Shetterly is also the founder of the [Human Computer Project](http://margotleeshetterly.com/the-human-computer-project), a permanent digital archive of the women who worked as NASA's human computers.",
  sources: [
  {
    title: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Margot_Lee_Shetterly"
  },
   {
    title: "Margot Lee Shetterly: Hidden Figures",
    url: "http://margotleeshetterly.com/hidden-figures-nasas-african-american-computers"
  },
],
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
      <h2 className="section__title">Spotlight</h2>

      <p className="intro-text">
        Space exploration was never the work of a single kind of person. The women documented here were explorers, engineers, mathematicians, administrators, and advocates - each indispensable to every mission but not all equally remembered. Browse by category below.
      </p>

      {/* Tabs */}
      <div className="pillRow">
        <button
          className={`pill ${active === "explorers" ? "active" : ""}`}
          onClick={() => handleTabChange("explorers")}
        >
          Explorers
        </button>

        <button
          className={`pill ${active === "behind" ? "active" : ""}`}
          onClick={() => handleTabChange("behind")}
        >
          Behind the Scenes
        </button>

        <button
          className={`pill ${active === "advocates" ? "active" : ""}`}
          onClick={() => handleTabChange("advocates")}
        >
          Advocates
        </button>
      </div>

      {/* Sub text */}
      {active && (
        <p className="sub-text">
          {active === "explorers" &&
            "Women who physically journeyed into space and redefined exploration."}

          {active === "behind" &&
            "The minds behind the missions - often unseen but essential."}

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

          <h4>What She Did</h4>
          <p>{data[selected].did}</p>

          <h4>How She Was Represented</h4>
          <p>{data[selected].representation}</p>

          <SourcePanel sources={data[selected].sources} />
        </div>
      )}
    </div>
  );
}

function SourcePanel({ sources }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="source-panel">
      <button
        className={`source-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        Sources & Archival References
        <span className="arrow">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="source-content">
          <ul className="source-list">
        {sources.map((item, i) => (
         <li key={i}>
        <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="linkUnderline"
        >
      {item.title}
      </a>
  </li>
))}     
      

          </ul>
        </div>
      )}
    </div>
  );
}