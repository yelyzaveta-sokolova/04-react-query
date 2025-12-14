import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return <p className={styles.text}>{text}</p>;
};

export default ErrorMessage;