import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Optimizing build performance in Next.js
        <em className={styles.em}>You are on the main branch</em>
      </h1>

      <div className={styles.description}>
        <p>
          This demo is the code example for the article written by{" "}
          <Link target="_blank" href="https://blog.timonwa.com">
            Timonwa
          </Link>{" "}
          for LogRocket on{" "}
          <strong>Optimizing build performance in Next.js</strong>. It is a
          simple demonstration of optimizing your build, and I created a repo
          with two branches to show the difference in build time.
        </p>

        <p>
          The <strong>main</strong> branch has the code without any
          optimization, while the <strong>optimized</strong> branch has the code
          with the optimization. You can access the repo on{" "}
          <Link target="_blank" href="">
            Github
          </Link>
          .
        </p>

        <p>
          I have a couple of npm packages installed for this branch that I can
          do without. I also have a couple of fonts imported from Google Fonts,
          a couple of images, and some files that I am not using in the project.
        </p>
      </div>
    </main>
  );
}
