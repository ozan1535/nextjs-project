import Filter from "../components/Filter";
import FilterDate from "../components/FilterDate";
import classes from "./../styles/home12.module.css";
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
  const res = await fetch(`https://nextjs-project-ozanbilgic-nextedycom.vercel.app/api/get`);
  const data = await res.json();
  return { props: { quotes: data } };
}
