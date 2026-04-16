import "./styles.css";
import Navbar from "./components/navbar";
import Landing from "./sections/landing";
import Mission from "./sections/mission";
import Timeline from "./sections/timeline";
import Spotlight from "./sections/spotlight";
import Discussion from "./sections/discussion";
import Footer from "./sections/footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="page">
        <section id="home" className="panel">
          <Landing />
        </section>

        <section id="mission" className="panel panel--light">
          <Mission />
        </section>

        <section id="timeline" className="panel panel--dark">
          <Timeline />
        </section>

        <section id="spotlight" className="panel panel--red">
          <Spotlight />
        </section>

        <section id="discussion" className="panel panel--light">
          <Discussion />
        </section>

        <section id="footer" className="panel panel--dark">
          <Footer />
        </section>

      </main>
    </div>
  );
}
