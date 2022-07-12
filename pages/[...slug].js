import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FilteredQuotes from "../components/FilteredQuotes";
import classes from "./../styles/slug.module.css";

export default function DateQuote({ quotes }) {
  const quotesList = quotes.authorquotes;
  const router = useRouter();
  const [singlePost, setSinglePost] = useState();
  const filterData = router.query.slug;

  const year = filterData[0];
  const month = filterData[1];

  useEffect(() => {
    setSinglePost(
      quotesList.filter((quote) => year === quote.year && month === quote.month)
    );
  }, [month, quotesList, year]);

  if (!filterData) {
    return <h1>Loading...</h1>;
  }

  console.log(singlePost);

  if (singlePost?.length === 0) {
    return <h1>No valid quote</h1>;
  }

  return (
    <div className={classes.container}>
      <FilteredQuotes quoteList={singlePost} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://nextjs-project-dnja6jscr-ozanbilgic-nextedycom.vercel.app/api/get`
  );
  const data = await res.json();
  return { props: { quotes: data } };
}
