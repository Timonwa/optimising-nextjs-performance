import styles from "../styles/Home.module.css";
import formStyles from "../styles/form.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";

const FormPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(data.name + ", " + data.email);

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
        <h1 className={styles.title}>Form Page</h1>

        <div>
          <p>
            I am using the{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.npmjs.com/package/react-hook-form">
              react-hook-form
            </Link>{" "}
            package.
          </p>
        </div>

        <div className={styles.description}>
          {/* "handleSubmit" will validate your inputs before invoking "onSubmit"
           */}
          <form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              className={formStyles.input}
              {...register("name", { required: true })}
              placeholder="Name"
            />
            {errors.name && (
              <span className={formStyles.error}>This field is required</span>
            )}

            {/* include validation with required or other standard HTML validation rules */}
            <input
              className={formStyles.input}
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {/* errors will return when field validation fails  */}
            {errors.email && (
              <span className={formStyles.error}>This field is required</span>
            )}

            <input className={formStyles.button} type="submit" />
          </form>
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

export default FormPage;