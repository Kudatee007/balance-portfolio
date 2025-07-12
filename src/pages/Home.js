import { useEffect } from "react";
import "./styles/Home.css";
import holdingFlowers from "../assets/holding-flowers.avif";
import pictureBlack from "../assets/PictureBlack.svg";
import MyButton from "../components/MyButton";
import Project from "../components/Project";
import Lenis from "lenis";

const StoryCard = ({ tittle, txt }) => {
  return (
    <div className="story-card">
      <h2 className="story-card-title">{tittle}</h2>
      <p className="story-card-text">{txt}</p>
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="main">
      {/* Hero-section */}
      <section className="hero-section">
        <div className="hero">
          <h1 className="hero-mobile-txt">JOHN TAYLOR</h1>
          <div>
            <p className="hero-short-txt">Digital Designer</p>
            <p className="hero-long-txt">
              I help designers and agencies elevate thier branding with creative
              development support.
            </p>
            <h1 className="hero-desktop-txt">JOHN TAYLOR</h1>
          </div>
        </div>
        <div>
          <img src={holdingFlowers} alt="" className="hero-picture" />
        </div>
      </section>
      <section>
        <img src={holdingFlowers} alt="" className="hero-picture" />
      </section>
      <div>
        <section className="story-section">
          <div className="story-content">
            <img src={pictureBlack} alt="" className="story-image" />
            <p className="story-text">
              I help brands craft meaningful stories and compelling visuals that
              deeply resonate with their audience, foster strong connections,
              build lasting loyalty, and drive sustainable long-term growth.
            </p>
          </div>
          <section>
            <div className="storyCard">
              <hr className="story-liner" />
              <div className="story-cards-wrapper">
                <StoryCard
                  tittle="From A to Z"
                  txt="I manage your entire branding process, from concept to
                execution. Whether it's logo design, messaging, or strategy, I
                ensure everything aligns for a cohesive and impactful brand."
                />
                <StoryCard
                  tittle="Solo or Team"
                  txt="I work both independently and with a trusted team, adapting to
                your project's needs to deliver the best results, whether it's a
                solo vision or a collaborative effort."
                />
              </div>
              <MyButton value="More about me" />
            </div>
          </section>
        </section>
      </div>
      <Project backgroundClass="apex-bg" title="APEX ARCHITECTS" />
      <Project backgroundClass="dionysos-bg" title="DIONYSOS RESORTS" />
      <Project backgroundClass="eyewear-bg" title="ARGUS EYEWEAR" />
      <section className="all-more">
        <MyButton value="All work (6)" />
      </section>
      <section className="contact-section">
        <div className="contact-header">
          <span className="contact-tag">(contact)</span>
          <p className="contact-description">
            Global Presence, global recognition – Contact me to take your next
            step.
          </p>
        </div>
        <h3 className="contact-title">Contact me</h3>
      </section>
    </div>
  );
};

export default Home;
