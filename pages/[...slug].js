import { useRouter } from "next/router";
import { useMemo } from "react";
import FilteredQuotes from "../components/FilteredQuotes";
import classes from "./../styles/slug.module.css";

export default function DateQuote({ quotes }) {
  const quotesList = quotes.authorquotes;
  const router = useRouter();

  const dateQuote = useMemo(() => {
    return quotesList.filter(
      (quote) => year === quote.year && month === quote.month
    );
  }, [quotes]);

  const filterData = router.query.slug;

  if (!filterData) {
    return <h1>Loading...</h1>;
  }

  const year = filterData[0];
  const month = filterData[1];

  if (dateQuote.length === 0) {
    return <h1>No valid quote</h1>;
  }

  return (
    <div className={classes.container}>
      <FilteredQuotes quoteList={dateQuote} />
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
