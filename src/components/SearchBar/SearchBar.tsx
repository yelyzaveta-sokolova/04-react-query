import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const schema = Yup.object({
  query: Yup.string().trim().required(),
});

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>

        <Formik
          initialValues={{ query: "" }}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            if (!values.query.trim()) return;
            onSubmit(values.query);
            actions.resetForm();
          }}
        >
          <Form className={styles.form}>
            <Field
              className={styles.input}
              name="query"
              placeholder="Search movies..."
            />
            <button className={styles.button} type="submit">
              Search
            </button>
          </Form>
        </Formik>
      </div>
    </header>
  );
};

export default SearchBar;