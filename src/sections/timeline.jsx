import { useMemo, useRef, useState } from "react";

// =============================================================================
// TIMELINE DATA (unchanged from the original)
// =============================================================================
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

// =============================================================================
// SPATIAL CONSTANTS — the rhythm of the timeline.
// =============================================================================
// NODE_GAP: fixed px between adjacent event centres. Because the track lives
// inside an overflow-x scroll container (not a viewport-percentage grid),
// fixed px guarantees the same breathing room no matter how many events
// exist or how far the user has scrolled. Reference suggests 250–300px;
// 280 sits in the middle and keeps 180px-wide cards 100px apart at the
// closest approach (between an above-card and the next below-card).
const NODE_GAP = 280;

// PAD_X: start/end padding inside the track so the first and last events
// don't sit flush against the scroll container edges. Must be >= half the
// card width (=90) to prevent the first/last card from overflowing the
// track bounds. 100 gives 10px of additional slack.
const PAD_X = 100;

// Parse leading year from strings like "1961", "1961-1969", "1943–1958".
const getYear = (yearStr) => parseInt(yearStr.split("–")[0].split("-")[0]);

export default function Timeline() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(null);

  // ---------------------------------------------------------------------------
  // Flatten contributions + media from every era into a single chronological
  // list. Each event keeps its era (for pill-based scroll targeting) and its
  // kind (contrib/media — determines which rail it sits on and its colour).
  // Same-year ties sort contributions first (per user preference).
  //
  // We also precompute:
  //  - eraFirstIndex: first global index belonging to each era → pill scroll.
  //  - railIndex: for every global index, its index WITHIN its rail. The
  //    alternating above/below logic uses rail-local index, not global, so
  //    each rail has its own above/below/above rhythm (otherwise the sparser
  //    media rail would rarely see alternation).
  // ---------------------------------------------------------------------------
  const { events, eraFirstIndex, railIndex } = useMemo(() => {
    const all = [];
    slides.forEach((s) => {
      s.contributions?.forEach((e) =>
        all.push({ ...e, era: s.era, kind: "contrib" })
      );
      s.media?.forEach((e) => all.push({ ...e, era: s.era, kind: "media" }));
    });
    all.sort((a, b) => {
      const ya = getYear(a.year);
      const yb = getYear(b.year);
      if (ya !== yb) return ya - yb;
      if (a.kind !== b.kind) return a.kind === "contrib" ? -1 : 1;
      return 0;
    });

    const railIndex = new Map();
    let contribCount = 0;
    let mediaCount = 0;
    const eraFirstIndex = {};
    all.forEach((e, gi) => {
      if (!(e.era in eraFirstIndex)) eraFirstIndex[e.era] = gi;
      if (e.kind === "contrib") railIndex.set(gi, contribCount++);
      else railIndex.set(gi, mediaCount++);
    });

    return { events: all, eraFirstIndex, railIndex };
  }, []);

  // Explicit track width: PAD_X on each side plus (N-1) gaps between N events.
  // With 39 events × 280 = 10,640 + 200 padding = 10,840px.
  const trackWidth =
    PAD_X * 2 + Math.max(0, events.length - 1) * NODE_GAP;

  // Pill click = "snap on demand": smooth-scroll so the first event of the
  // selected era is centred in the scroll viewport. CSS scroll-snap is OFF
  // so regular mouse/touch scrolling stays free and soft.
  const handlePillClick = (era) => {
    setActive(era);
    const gi = eraFirstIndex[era];
    if (gi == null || !scrollRef.current) return;
    const targetX = PAD_X + gi * NODE_GAP;
    const viewportCentre = scrollRef.current.clientWidth / 2;
    scrollRef.current.scrollTo({
      left: Math.max(0, targetX - viewportCentre),
      behavior: "smooth",
    });
  };

  return (
    <div className="timeline">
      {/* --- Header (title, intro, era pills) --- */}
      <div className="timeline__header">
        <h2 className="timeline__title">Timeline</h2>

        <p className="timeline__desc">
          Human designs for spaceflight emerged not from a neutral desire for
          discovery, but from a convergence of scientific ambition,
          militarization, and modernist ideals that pre-defined whose
          knowledge, bodies, and labour would count.
        </p>

        <div className="timeline__controls">
          <div className="pillRow">
            {slides.map((s) => (
              <button
                key={s.era}
                className={`pill ${active === s.era ? "active" : ""}`}
                onClick={() => handlePillClick(s.era)}
              >
                {s.era}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- Viewport: fixed left gutter (rail labels) + scrollable track --- */}
      <div className="timeline__viewport">
        <aside className="timeline__gutter" aria-hidden="true">
          <span className="timeline__rail-label timeline__rail-label--contrib">
            Historical Contributions
          </span>
          <span className="timeline__rail-label timeline__rail-label--media">
            Media Output &amp; Recognition
          </span>
        </aside>

        <div className="timeline__scroll" ref={scrollRef}>
          <div
            className="timeline__track"
            style={{ width: `${trackWidth}px` }}
          >
            {/* Two thin horizontal rails spanning the full scrollable width */}
            <div className="timeline__rail-line timeline__rail-line--contrib" />
            <div className="timeline__rail-line timeline__rail-line--media" />

            {events.map((event, gi) => {
              const localIdx = railIndex.get(gi);
              // Even rail-index → card above its rail, odd → below.
              // Alternation is per-rail so each rail has its own rhythm.
              const above = localIdx % 2 === 0;
              return (
                <article
                  key={`${event.era}-${event.kind}-${gi}`}
                  className={`tNode tNode--${event.kind} tNode--${
                    above ? "above" : "below"
                  }`}
                  style={{ left: `${PAD_X + gi * NODE_GAP}px` }}
                >
                  {/* Circular anchor — sits centred on the rail line */}
                  <span className="tCircle" aria-hidden="true" />
                  {/* Thin vertical connector between circle and card */}
                  <span className="tConnector" aria-hidden="true" />
                  {/* Compact content block */}
                  <div className="tCard">
                    <span className="tYear">{event.year}</span>
                    <h4 className="tTitle">{event.title}</h4>
                    <ul className="tText">
                      {event.text.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}