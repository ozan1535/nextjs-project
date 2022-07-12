import Filter from "../components/Filter";
import FilterDate from "../components/FilterDate";
import classes from "./../styles/home.module.css";
import { useSession } from "next-auth/react";
import Head from "next/head";

export default function Home({ quotes }) {
  const session = useSession();

  return (
    <div className={classes.container}>
      <Head>
        <title>Home</title>
      </Head>

      <div className={classes.filterDate}>
        <FilterDate />
      </div>
      <div className={classes.filter}>
        <Filter quotes={quotes} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/get`);
  const data = await res.json();
  return { props: { quotes: data } };
}
