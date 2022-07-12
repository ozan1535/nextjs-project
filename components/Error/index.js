import classes from "./error.module.css";

export default function Error(props) {
  const { success, infoMessage } = props;

  return (
    <div
      className={classes.container}
      style={{ backgroundColor: success ? "green" : "red" }}
    >
      <h1>{infoMessage}</h1>
    </div>
  );
}
