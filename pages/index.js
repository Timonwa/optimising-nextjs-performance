/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Optimizing build performance in Next.js
        <em className={styles.em}>You are on the optimized branch</em>
      </h1>

      <div className={styles.description}>
        <p>
          This demo is the code example for the article written by{" "}
          <Link target="_blank" href="https://blog.timonwa.com">
            Timonwa
          </Link>{" "}
          for{" "}
          <Link target="_blank" rel="noopener noreferrer" href="#">
            LogRocket
          </Link>{" "}
          on <strong>Optimizing build performance in Next.js</strong>. This
          demonstration shows how optimizing your Next.js app can improve your
          build performance. You can access the repo on{" "}
          <Link
            target="_blank"
            href="https://github.com/Timonwa/optimising-nextjs-performance">
            GitHub
          </Link>
          .
        </p>

        <p>
          I did not focus on optimizing the build performance in the{" "}
          <strong>main</strong> branch. I installed a few unnecessary npm
          packages on this branch, and I wanted to show you how the build
          performance is by default.
        </p>

        <p>
          I have the following packages installed:
          <ul>
            <li>
              react-icons (I only used one icon from this package. I could have
              just used an SVG or UTF-8 character)
            </li>
            <li>
              react-accessible-accordion (Building my accordion would have been
              smaller in size)
            </li>
            <li>
              react-hook-form (my form was simple. I could have used the HTML
              form element)
            </li>
          </ul>
        </p>

        <p>
          I optimized the build performance in the <strong>optimized</strong>{" "}
          branch. I removed the unnecessary packages and built my accordion and
          form. I also used the UTF-8 character for the icon.
        </p>

        <p>
          By running `yarn build` on both branches, one could see a big
          difference in the build size of the pages in the{" "}
          <strong>optimized</strong> branch. The form and accordion pages on the
          optimized branch were reduced significantly.
        </p>
        <figure className={styles.figure}>
          <img
            src="/images/main-branch.png"
            alt="main branch build size"
            fill
          />
          <figcaption>Main branch build size</figcaption>
        </figure>

        <figure className={styles.figure}>
          <img
            src="/images/optimized-branch.png"
            alt="optimized branch build size"
            fill
          />
          <figcaption>Optimized branch build size</figcaption>
        </figure>

        <p>
          The form page went from <strong>8.14kb</strong> to{" "}
          <strong>614b</strong> and the accordion page went from{" "}
          <strong>4.74kb</strong> to <strong>1.09kb</strong>.
        </p>

        <p>
          This demo only demonstrates how using the right packages and building
          your components can improve your build performance. There are other
          ways to optimize your Next.js app. You can{" "}
          <Link target="_blank" rel="noopener noreferrer" href="#">
            read the article on LogRocket
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
