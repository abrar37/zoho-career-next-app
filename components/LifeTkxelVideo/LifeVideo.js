import React from "react";
import { PauseIcon, PlayIcon } from "../../public/Svg/Svg";
import styles from "./LifeTkxel.module.scss";
import { useRef, useState } from "react";
const LifeVideo = () => {
  const [isPoster, setIsPoster] = useState(true);
  const [play, setPlay] = useState(false);
  const url = play
    ? `https://www.youtube.com/embed/tPoywWNj1oM?autoplay=1&controls=1&loop=1&rel=0`
    : `https://www.youtube.com/embed/tPoywWNj1oM?controls=1&loop=1&rel=0`;

  const posterClickHandler = () => {
    setPlay(true);
    setTimeout(() => {
      setIsPoster(false);
    }, "500");
  };

  return (
    <>
      <div className="tk-container">
        <div className={styles.videoWrapper}>
          {/* <video
            loop
            poster="/images/videoposter.png"
            id="video"
            className="video"
            preload="metadata"
            ref={videoRef}
          >
            <source src="/change-enablers.mp4" type="video/mp4" />
            <source src="/change-enablers.mp4" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.videoTitle}>
            <div className="d-flex">
              {playing ? (
                <button className={`${styles.pauseBtn}`} onClick={() => videoHandler("pause")}>
                  <PauseIcon />
                </button>
              ) : (
                <>
                  <div className={`${styles.videoContentWrapper}`}>
                    <button onClick={() => videoHandler("play")}>
                      <PlayIcon />
                    </button>
                    <div>
                      <h6>Change Enablers</h6>
                      <p>Discovering new dimensions to expansion</p>
                    </div>
                  </div>
                </>
              )}
            </div>

          </div> */}

          <iframe
            width="100%"
            height="610"
            src={url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {isPoster && (
            <div
              className={styles.customThumbnail}
              onClick={posterClickHandler}
            >
              <img src="images/videoposter.png" />
              <div className={styles.playVideo}>
                <div className={`${styles.videoContentWrapper}`}>
                      <PlayIcon />
                    <div>
                      <h6>Change Enablers</h6>
                      <p className="mb-0">Discovering new dimensions to expansion</p>
                    </div>
                  </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LifeVideo;
