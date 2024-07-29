import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../ProDevelopment/ProDevelopment.module.scss";
import { SectionHeading } from "../SectionHeading/SectionHeading";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    partialVisibilityGutter: 150,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 150,
  },
  Laptop: {
    breakpoint: { max: 1023, min: 991 },
    items: 1,
    partialVisibilityGutter: 150,
  },
  tablet: {
    breakpoint: { max: 990, min: 768 },
    items: 1,
    partialVisibilityGutter: 100,
  },
  largeMobile: {
    breakpoint: { max: 767, min: 577 },
    items: 1,
    partialVisibilityGutter: 70,
  },
  mobile: {
    breakpoint: { max: 576, min: 320 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};
const EventSlider = () => {
  const images = [
    "/images/khail.png",
    "/images/TkxelFest.png",
    "/images/mango-party.jpg",
    "/images/women-day.jpg",
    "/images/annual-trip.jpg",
  ];

  return (
    <div className="tk-container">
      <SectionHeading
        headwrapper={`${styles.ProHead} slide-head`}
        SecHeading={styles.ProContainer}
        btnhide={false}
        style_p={`${styles.ProDevPara} `}
        heading="Picture Yourself at tkxel"
      />
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        arrows={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        partialVisbile="300px"
        keyBoardControl={true}
        containerClass="carousel-container"
        // dotListClass="react-multi-carousel-dot-list"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="slide-item">
          <div
            className="slide-image"
            style={{ backgroundImage: `url(${images[0]})` }}
          ></div>
          <div className="slide-content">
            <h6>Khail Tamasha - The Ultimate Sports Experience</h6>
            <p>
              An annual sports fiesta organized by tkxel to bring the joys of outdoor entertainment to its employees.
            </p>
          </div>
        </div>
        <div className="slide-item">
          <div
            className="slide-image"
            style={{ backgroundImage: `url(${images[1]})` }}
          ></div>
          <div className="slide-content">
            <h6>Annual Fest x Concert</h6>
            <p>
              A fun-filled event with many entertainment activities to groove with the beat of the music.
            </p>
          </div>
        </div>
        <div className="slide-item">
          <div
            className="slide-image"
            style={{ backgroundImage: `url(${images[2]})` }}
          ></div>
          <div className="slide-content">
            <h6>Qatal-e-Aam - Mango Party</h6>
            <p>
              Amusing and Delightful Mango festival was organized to make summers more exciting and fun by eating and playing around with Mangoes.
            </p>
          </div>
        </div>
        <div className="slide-item">
          <div
            className="slide-image"
            style={{ backgroundImage: `url(${images[3]})` }}
          ></div>
          <div className="slide-content">
            <h6>Women’s Day - Celebrating Women in Tech!</h6>
            <p>
              Celebrating the super-talented women in our workforce and reinforcing a commitment to women&apos;s equality.
            </p>
          </div>
        </div>
        <div className="slide-item">
          <div
            className="slide-image"
            style={{ backgroundImage: `url(${images[4]})` }}
          ></div>
          <div className="slide-content">
            <h6>Annual Trip</h6>
            <p>
              Classy trip of the year powered by multiple power-packed fun activities.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default EventSlider;
