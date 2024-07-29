import styles from "./footer.module.scss";
import {
  Clutch,
  Facebook,
  GoodFirms,
  Instgram,
  LinkedIn,
  LogoWhite,
  PodCast,
  SoundCloud,
  Tiktok,
} from "../../../public/Svg/Svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.FooterWrapper}>
      <div className={`${styles.CareerFt} tk-container`}>
        <div
          className={`d-flex align-items-center justify-content-between w-100 ${styles.FooterContent}`}
        >
          <div>
            <Link href="/" passHref>
              <a rel="noreferrer">
                <LogoWhite />
              </a>
            </Link>
          </div>
          <ul className={`d-flex align-items-center justify-space-between mb-0 career-pt-32 career-pl-0 ${styles.FootNav}`}>
            <li >
              <Link href="/life-at-tkxel" passHref>
              <a rel="noreferrer" >
                Life at Tkxel
              </a>
              </Link>
            </li>
            <li >
              <Link href="/benefits" passHref>
              <a rel="noreferrer" >
                Benefits
              </a>
              </Link>
            </li>
            <li >
              {" "}
              <Link href="/jobs" passHref>
              <a rel="noreferrer" >
                Jobs
              </a>
              </Link>
            </li>
          </ul>

        </div>
        <ul className={`d-flex align-items-center justify-space-between mb-0 career-pt-32 career-pl-0 ${styles.SocialFoot}`}>
        <li>
              <a rel="noreferrer" href="https://www.instagram.com/tkxelofficial/" target="_blank">
                <Instgram />{" "}
              </a>
            </li>
            <li>
              <a rel="noreferrer" href="https://www.linkedin.com/company/tkxel/" target="_blank">
                <LinkedIn />{" "}
              </a>
            </li>
            <li>
              {" "}
              <a rel="noreferrer" href="https://www.facebook.com/tkxelpakistan" target="_blank">
                <Facebook />
              </a>
            </li>
            <li>
              {" "}
              <a rel="noreferrer" href="https://www.tiktok.com/@tkxel" target="_blank">
                <Tiktok />
              </a>
            </li>
            <li>
              <a href="https://anchor.fm/bettertech" rel="noreferrer" target="_blank">
                {" "}
                <PodCast />{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="https://soundcloud.com/bettertech" rel="noreferrer" target="_blank">
                {" "}
                <SoundCloud />
              </a>{" "}
            </li>
        </ul>
      </div>
    </div>
  );
};
