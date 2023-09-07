import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import image1 from "../public/images/image1.jpg";
import image2 from "../public/images/image2.jpg";
import image3 from "../public/images/image3.jpg";
import image4 from "../public/images/image4.jpg";
import image5 from "../public/images/image5.jpg";
import image6 from "../public/images/image6.jpg";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/accordion" className={styles.link}>
            Accordion Page
          </Link>
          <Link href="/form" className={styles.link}>
            Form Page
          </Link>
          <Link href="/carousel" className={styles.link}>
            Carousel Page
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Carousel Page</h1>

        <div>
          <p>
            I am using the{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://swiperjs.com/react">
              Swiperjs
            </Link>{" "}
            package.
          </p>
        </div>

        <div className={styles.description}>
          <Swiper
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide>
              <figure>
                <Image src={image1} alt="" fill placeholder="blur" />
                <figcaption>
                  Photo by{" "}
                  <Link href="https://unsplash.com/@tommykwak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Tommy Kwak
                  </Link>{" "}
                  on{" "}
                  <Link href="https://unsplash.com/photos/LfxHb4J35Co?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                  </Link>
                </figcaption>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <Image src={image2} alt="" fill placeholder="blur" />
                <figcaption>
                  Photo by{" "}
                  <a href="https://unsplash.com/@chrisabney?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Chris Abney
                  </a>{" "}
                  on{" "}
                  <a href="https://unsplash.com/photos/area-covered-with-green-leafed-plants-qLW70Aoo8BE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                  </a>
                </figcaption>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <Image src={image3} alt="" fill placeholder="blur" />
                <figcaption>
                  Photo by{" "}
                  <a href="https://unsplash.com/@craig_bradford?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Craig Bradford
                  </a>{" "}
                  on{" "}
                  <a href="https://unsplash.com/photos/9bUkEBeXUUQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                  </a>
                </figcaption>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <Image src={image4} alt="" fill placeholder="blur" />
                <figcaption>
                  Photo by{" "}
                  <a href="https://unsplash.com/@erikvandijk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Erik van Dijk
                  </a>{" "}
                  on{" "}
                  <a href="https://unsplash.com/photos/4HTktcPr0xI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                  </a>
                </figcaption>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <Image src={image5} alt="" fill placeholder="blur" />
                <figcaption>
                  Photo by{" "}
                  <a href="https://unsplash.com/@lightscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Lightscape
                  </a>{" "}
                  on{" "}
                  <a href="https://unsplash.com/photos/LRQsyNQL1TE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                  </a>
                </figcaption>
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <Image src={image6} alt="" fill placeholder="blur" />
                <figcaption>
                  Photo by{" "}
                  <a href="https://unsplash.com/@somonesummers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Paul Summers
                  </a>{" "}
                  on{" "}
                  <a href="https://unsplash.com/photos/ArtVJ-217Cw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                  </a>
                </figcaption>
              </figure>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Created by{" "}
          <Link target="_blank" href="https://blog.timonwa.com">
            Timonwa
          </Link>
          .
        </p>
      </footer>
    </div>
  );
};

export default Carousel;
