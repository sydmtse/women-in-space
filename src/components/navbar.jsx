const links = [
  { label: "homepage", id: "home" },
  { label: "our mission", id: "mission" },
  { label: "timeline", id: "timeline" },
  { label: "spotlight", id: "spotlight" },
  { label: "join the discussion", id: "discussion" },
  { label: "contact us", id: "footer" }
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  return (
    <header className="nav">
      <nav className="nav__inner">
        {links.map((l) => (
          <button
            key={l.id}
            className="nav__link"
            onClick={() => scrollToId(l.id)}
            type="button"
          >
            {l.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
