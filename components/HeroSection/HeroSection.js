import styles from "./HeroSection.module.scss";
import { SearchBar } from "../Search/Search";
const HeroSection = ({ heroclass, heroheading, herospan, herolast }) => {
  return (
    <>
      <div className={styles.videoWrapper}>
        <video autoPlay muted loop poster="/banner-thumbnail.jpg">
          {/* <source src="/main.mp4" type="video/mp4" /> */}
          <source src="/main.webm" type="video/webm" />
          <source src="/main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <section className="tk-container w-100">
          <div className={heroclass}>
            <h1 className={`${styles.HeroHeading}`}>
              {heroheading}
              <br />
              <span className={styles.BlueSpan}>{herospan}</span> {herolast}
            </h1>
            <SearchBar SearchClass={styles.SearchBar} />
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
