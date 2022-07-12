import Header from "../components/Header";
import classes from "./layout.module.css";

export default function LayoutDefault(props) {
  const { children } = props;

  return (
    <div>
      <Header />
      <main className={classes.container}>{children}</main>
    </div>
  );
}
