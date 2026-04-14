import { useState } from "react";

const slides = [
  {
    era: "1940s-1950s",
    contributions: [
      {
        year: "1943-1958",
        title: "Women as 'human computers'",
        text: [
          "Women mathematicians perform critical calculations for aeronautics and early spaceflight",
          "Labour framed as clerical, not scientific"
        ]
      },
      {
        year: "1944",
        title: "End of Women pilot programs",
        text: [
          "Women excluded from military aviation after WASP program ended"
        ]
      },
      {
        year: "1958",
        title: "Creation of NASA",
        text: [
          "NACA renamed NASA",
          "Women already embedded but structurally marginalised",
          "Documentation privileges engineers and astronauts"
        ]
      },
      {
        year: "1959",
        title: "Project Mercury astronaut testing",
        text: [
          "Military pilots selected",
          "Mercury Seven: all white male astronauts"
        ]
      }
    ],
    media: [
      {
        year: "1958",
        title: "Disclosing activities",
        text: [
          "Space Act mandates public dissemination",
          "Early comms in Aviation Weekly ads"
        ]
      }
    ]
  },

  {
    era: "1960s",
    contributions: [
      {
        year: "1961",
        title: "Yuri Gagarin",
        text: ["First human in space (USSR)"]
      },
      {
        year: "1961",
        title: "Alan Shepard",
        text: ["First American in space"]
      },
      {
        year: "1961",
        title: "Mercury 13",
        text: [
          "13 women pass astronaut testing",
          "NASA refuses program access"
        ]
      },
      {
        year: "1963",
        title: "Valentina Tereshkova",
        text: ["First woman in space"]
      },
      {
        year: "1961-1969",
        title: "Apollo Program",
        text: [
          "Women programmers ensure mission success",
          "Labour feminised and under-archived"
        ]
      },
      {
        year: "1969",
        title: "Apollo 11",
        text: ["First Moon landing"]
      }
    ],
    media: [
      {
        year: "1962",
        title: "Gender Discrimination hearings",
        text: [
          "John Glenn claims women unfit",
          "NASA requirements exclude women structurally"
        ]
      },
      {
        year: "1966",
        title: "Affirmative Action",
        text: [
          "Focused primarily on racial inequality",
          "Gender largely unaddressed"
        ]
      },
      {
        year: "1966",
        title: "Star Trek airs",
        text: [
          "Diverse crew representation",
          "Uhura as symbolic breakthrough"
        ]
      }
    ]
  },

  {
    era: "1970s-1980s",
    contributions: [
      {
        year: "1972-1973",
        title: "Ruth Bates Harris",
        text: [
          "Highest-ranking Black woman at NASA",
          "Terminated after discrimination report"
        ]
      },
      {
        year: "1972",
        title: "Equal Employment Act",
        text: [
          "Opens pathway for women",
          "Delayed implementation in practice"
        ]
      },
      {
        year: "1978",
        title: "First women astronauts",
        text: [
          "NASA selects first female cohort",
          "Includes scientists + engineers"
        ]
      },
      {
        year: "1983",
        title: "Sally Ride",
        text: [
          "First American woman in space"
        ]
      }
    ],
    media: [
      {
        year: "1970s",
        title: "NASA Reporting",
        text: [
          "Women minimally documented",
          "Federal Women’s Program marginalised"
        ]
      },
      {
        year: "1972",
        title: "Historical Data Book",
        text: [
          "NASA admits lack of gender tracking"
        ]
      },
      {
        year: "1975-1978",
        title: "Women in Motion Inc.",
        text: [
          "Nichelle Nichols recruits astronauts",
          "Boosts female applicants by 15%"
        ]
      }
    ]
  },

  {
    era: "1990s-2000s",
    contributions: [
      {
        year: "1992",
        title: "Mae Jemison",
        text: ["First Black woman in space"]
      },
      {
        year: "1993",
        title: "Ellen Ochoa",
        text: ["First Hispanic woman in space"]
      },
      {
        year: "1996",
        title: "Shannon Lucid",
        text: ["188-day mission record"]
      },
      {
        year: "1997",
        title: "Kalpana Chawla",
        text: ["First Asian American woman in space"]
      },
      {
        year: "1999",
        title: "Eileen Collins",
        text: ["First woman shuttle commander"]
      },
      {
        year: "2009",
        title: "All-woman spacewalk cancelled",
        text: [
          "Equipment designed for male bodies"
        ]
      }
    ],
    media: []
  },

  {
    era: "2010s",
    contributions: [
      {
        year: "2013",
        title: "50% women astronaut class",
        text: ["Highest proportion in NASA history"]
      },
      {
        year: "2016",
        title: "Kate Rubins",
        text: ["First DNA sequencing in space"]
      },
      {
        year: "2018",
        title: "Holly Ridings",
        text: ["First female flight director"]
      },
      {
        year: "2019",
        title: "All-woman spacewalk",
        text: ["Koch and Meir"]
      }
    ],
    media: [
      {
        year: "2016",
        title: "Hidden Figures",
        text: [
          "Brings hidden labour into public narrative"
        ]
      },
      {
        year: "2019",
        title: "Artemis Program",
        text: [
          "First woman on the Moon becomes policy goal"
        ]
      }
    ]
  },

  {
    era: "2020s",
    contributions: [
      {
        year: "2020",
        title: "Christina Koch",
        text: ["328-day record mission"]
      },
      {
        year: "2023-2024",
        title: "Artemis II",
        text: ["First woman lunar mission planned"]
      }
    ],
    media: [
      {
        year: "2020",
        title: "Mary W. Jackson HQ",
        text: ["NASA renames HQ after Hidden Figures impact"]
      },
      {
        year: "2022–2023",
        title: "Nichelle Nichols tribute",
        text: ["Ashes launched into space"]
      },
      {
        year: "2021",
        title: "Gender Inclusivity Study",
        text: [
          "NASA admits male-biased design history"
        ]
      },
      {
        year: "2024-2025",
        title: "DEI rollback",
        text: [
          "Removal of women-focused archival language"
        ]
      }
    ]
  }
];

// Extract first year from strings like "1943–1958", "1961–1969", etc.
const getYear = (yearStr) => {
  return parseInt(yearStr.split("–")[0].split("-")[0]);
};

// Convert year → % position within era
const getPosition = (year, min, max) => {
  return ((year - min) / (max - min)) * 100;
};

export default function Timeline() {
  const [active, setActive] = useState(null);

  const handleScroll = (era) => {
    setActive(era);

    const el = document.getElementById(`anchor-${era}`);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const eraRanges = {
  "1940s-1950s": [1940, 1959],
  "1960s": [1960, 1969],
  "1970s-1980s": [1970, 1989],
  "1990s-2000s": [1990, 2009],
  "2010s": [2010, 2019],
  "2020s": [2020, 2029],
};

 return (
  <div className="timeline">

    {/* HEADER */}
    <div className="timeline__header">
      <h2 className="timeline__title">Timeline</h2>

      <p className="timeline__desc">
        Human designs for spaceflight emerged not from a neutral desire for discovery, but from a convergence of scientific ambition, militarization, and modernist ideals that pre-defined whose knowledge, bodies, and labour would count.
      </p>

      {/* CONTROLS */}
      <div className="timeline__controls">
        <div className="pillRow">
          {slides.map((s) => (
            <button
              key={s.era}
              className={`pill ${active === s.era ? "active" : ""}`}
              onClick={() => handleScroll(s.era)}
            >
              {s.era}
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* TIMELINES */}
    <div className="timeline__rail">

      {/* LINES */}
      <div className="timeline__line timeline__line--contrib" />
      <div className="timeline__line timeline__line--media" />

      {slides.map((s) => (
        <div
          key={s.era}
          id={`anchor-${s.era}`}
          className="tGroup"
        >

          {/* LABELS */}
          <div className="tLabels">
            <span className="timeline__label timeline__label--contrib">
              Historical Contributions
            </span>
            <span className="timeline__label timeline__label--media">
              Media output and recognition
            </span>
          </div>

          {/* CONTRIBUTIONS */}
          <div className="tRow tRow--contrib">
            {s.contributions?.map((event, i) => {
              const year = getYear(event.year);
              const [min, max] = eraRanges[s.era];
              let left = getPosition(year, min, max);

            
              const minGap = 12;
              if (i > 0) {
                const prevYear = getYear(s.contributions[i - 1].year);
                const prevLeft = getPosition(prevYear, min, max);
                if (left - prevLeft < minGap) left = prevLeft + minGap;
              }

             
              left = Math.max(5, Math.min(left, 95));

              return (
                <div
                  key={event.title}
                  className="tEvent"
                  style={{ left: `${left}%` }}
                >
                  {event.img && (
                    <img src={event.img} alt="" className="tImage" />
                  )}

                  <span className="tDot tDot--contrib" />

                  <div className="tCard">
                    <h4>{event.year} — {event.title}</h4>
                    <ul>
                      {event.text.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* MEDIA */}
          <div className="tRow tRow--media">
            {s.media?.map((event, i) => {
              const year = getYear(event.year);
              const [min, max] = eraRanges[s.era];
              let left = getPosition(year, min, max);

              const minGap = 12;
              if (i > 0) {
                const prevYear = getYear(s.media[i - 1].year);
                const prevLeft = getPosition(prevYear, min, max);
                if (left - prevLeft < minGap) left = prevLeft + minGap;
              }

              left = Math.max(5, Math.min(left, 95));

              return (
                <div
                  key={event.title}
                  className="tEvent"
                  style={{ left: `${left}%` }}
                >
                  <span className="tDot tDot--media" />

                  <div className="tCard">
                    <h4>{event.year} — {event.title}</h4>
                    <ul>
                      {event.text.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      ))}

    </div>

  </div>
);
}