import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./../styles/singlePost.module.css";
import { getSession } from "next-auth/react";

export default function SinglePost({ quotes }) {
  const router = useRouter();
  const quoteId = router.query.id;
  const quote = quotes.authorquotes;
  const [singleQuote, setSingleQuote] = useState();

  useEffect(() => {
    setSingleQuote(quote.filter((item) => item._id === quoteId)[0]);
  }, [quotes]);

  if (!singleQuote) {
    return <h1>Loading</h1>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.author}>
        <h1>{singleQuote.author}</h1>
      </div>
      <div className={classes.quote}>
        <p>{singleQuote.quote}</p>
      </div>
      <div className={classes.date}>
        <p>
          {singleQuote.year}/{singleQuote.month}/23
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session.user.email) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  const res = await fetch(
    `https://nextjs-project-dnja6jscr-ozanbilgic-nextedycom.vercel.app/api/get`
  );
  const data = await res.json();
  return { props: { quotes: data } };
}
