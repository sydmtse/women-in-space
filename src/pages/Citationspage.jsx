
const references = {
  "Our Mission": [
    {
      author: "The White House",
      year: "2025",
      title: "Ending radical and wasteful government DEI programs and preferencing",
      url: "https://www.whitehouse.gov/presidential-actions/2025/01/ending-radical-and-wasteful-government-dei-programs-and-preferencing/"
    },
    {
      author: "LGBT Foundation",
      year: "n.d.",
      title: "What is a woman?",
      url: "https://lgbt.foundation/help/what-is-a-woman/"
    }
  ],

  "Timeline — Research": [
    {
      author: "Space.com",
      year: "n.d.",
      title: "Women in space firsts gallery",
      url: "https://www.space.com/16143-women-space-firsts-gallery.html"
    },

    {
      author: "University of North Florida",
      year: "n.d.",
      title: "Electronic thesis/dissertation",
      url: "https://digitalcommons.unf.edu/cgi/viewcontent.cgi?article=2189&context=etd"
    },

    {
      author: "NASA",
      year: "n.d.",
      title: "NASA history",
      url: "https://www.nasa.gov/history/"
    },

    {
      author: "National Women’s History Museum",
      year: "n.d.",
      title: "Women at NASA",
      url: "https://www.womenshistory.org/exhibits/women-nasa"
    },

    {
      author: "BBC Future",
      year: "2025",
      title: "The women who broke NASA’s glass ceiling",
      url: "https://www.bbc.co.uk/future/article/20250905-the-women-who-broke-nasas-glass-ceiling"
    },

    {
      author: "Science",
      year: "1973",
      title: "Ruth Bates Harris article",
      url: "https://www.science.org/doi/10.1126/science.182.4114.804.a"
    }
  ],

  "Timeline — Photos": [
    {
      author: "Rare Historical Photos",
      year: "n.d.",
      title: "Human computer women profession",
      url: "https://rarehistoricalphotos.com/human-computer-women-profession/"
    },

    {
      author: "Wikipedia",
      year: "n.d.",
      title: "Mercury 13",
      url: "https://en.wikipedia.org/wiki/Mercury_13"
    },

    {
      author: "National Archives",
      year: "2023",
      title: "Behind the scenes at Kennedy Space Center with Nichelle Nichols",
      url: "https://unwritten-record.blogs.archives.gov/2023/03/07/behind-the-scenes-at-kennedy-space-center-with-nichelle-nichols/"
    },

    {
      author: "Phys.org",
      year: "2024",
      title: "Moon mission Artemis II crew",
      url: "https://phys.org/news/2024-02-moon-nasa-artemis-ii-crew.html"
    }
  ],

  "Spotlight — Explorers": [
    {
      author: "National Women’s History Museum",
      year: "n.d.",
      title: "Mae Jemison",
      url: "https://www.womenshistory.org/education-resources/biographies/mae-jemison"
    },

    {
      author: "NASA",
      year: "n.d.",
      title: "Former astronaut Eileen Collins",
      url: "https://www.nasa.gov/former-astronaut-eileen-collins/"
    },

    {
      author: "NASA",
      year: "n.d.",
      title: "Sally Ride",
      url: "https://science.nasa.gov/people/sally-ride/#hds-sidebar-nav-1"
    },

    {
      author: "NASA",
      year: "n.d.",
      title: "Christina Koch",
      url: "https://www.nasa.gov/people/christina-koch/"
    }
  ],

  "Spotlight — Behind the Scenes": [
    {
      author: "NASA",
      year: "n.d.",
      title: "Katherine Johnson",
      url: "https://www.nasa.gov/katherine-johnson/"
    },

    {
      author: "NASA",
      year: "n.d.",
      title: "Margaret Hamilton",
      url: "https://science.nasa.gov/people/margaret-hamilton/"
    },

    {
      author: "NASA",
      year: "n.d.",
      title: "Nancy Grace Roman",
      url: "https://science.nasa.gov/people/nancy-roman/"
    }
  ],

  "Spotlight — Advocates": [
    {
      author: "NASA",
      year: "n.d.",
      title: "Nichelle Nichols helped NASA break boundaries",
      url: "https://www.nasa.gov/people-of-nasa/special-observances/nichelle-nichols-helped-nasa-break-boundaries-on-earth-and-in-space/"
    },

    {
      author: "Shetterly, M.L.",
      year: "n.d.",
      title: "Hidden Figures: NASA’s African American computers",
      url: "http://margotleeshetterly.com/hidden-figures-nasas-african-american-computers"
    }
  ],

  "Join the Discussion — Recent News": [
    {
      author: "Scientific American",
      year: "n.d.",
      title: "Trump’s DEI purge is hitting NASA hard",
      url: "https://www.scientificamerican.com/article/trumps-dei-purge-is-hitting-nasa-hard/"
    },

    {
      author: "NASA",
      year: "n.d.",
      title: "Artemis",
      url: "https://www.nasa.gov/humans-in-space/artemis/"
    }
  ],

  "Communities & Campaigns": [
    {
      author: "Herstory",
      year: "n.d.",
      title: "Home",
      url: "https://www.herstory.ie/home"
    },

    {
      author: "UNOOSA",
      year: "n.d.",
      title: "Space4Women",
      url: "https://www.unoosa.org/oosa/en/ourwork/topics/spaceforwomen/index.html"
    }
  ],

  "Footer — Banner Photo": [
    {
      author: "NASA",
      year: "n.d.",
      title: "NASA answers your most pressing Artemis II questions",
      url: "https://www.nasa.gov/missions/nasa-answers-your-most-pressing-artemis-ii-questions/"
    },

    {
      author: "NASA",
      year: "n.d.",
      title: "Lunar flyby gallery",
      url: "https://www.nasa.gov/gallery/lunar-flyby/"
    }
  ]
};

export default function CitationsPage() {
  return (
    <div className="citationsPage">
      <h1>Citations</h1>

      {Object.entries(references).map(([section, sources]) => (
        <div key={section} className="citation-section">

          <h2>{section}</h2>

          {sources.map((ref, i) => (
            <p key={i} className="citation-entry">
              {ref.author} ({ref.year}){" "}
              <em>{ref.title}</em>. Available at:{" "}

              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ref.url}
              </a>

              {" "} (Accessed: 20 April 2026).
            </p>
          ))}

        </div>
      ))}
    </div>
  );
}
