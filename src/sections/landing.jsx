export default function Landing() {
  return (
    <div className="landing">
      
      {/* Background */}
      <div className="nebula"></div>
      <div className="stars stars--far"></div>
      <div className="stars stars--mid"></div>
      <div className="stars stars--near"></div>

      <div className="vignette"></div>

      {/* Content */}
      <div className="landing__content">
        <p className="landing__kicker">MAKING</p>
        <h1 className="landing__title">
          SPACE for
          <span className="landing__accent"> WOMEN</span>
        </h1>
        <p className="landing__subtitle">
          A counter archive of women in space exploration for the past, present, and future.
        </p>
      </div>
    </div>
  );
}