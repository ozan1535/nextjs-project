import GetMessages from "../components/messages";
import classes from "./../styles/messages.module.css";
import { getSession } from "next-auth/react";
import Head from "next/head";

export default function Messages({ messages }) {
  return (
    <div className={classes.container}>
      <Head>
        <title>Messages</title>
      </Head>
      <GetMessages messages={messages} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const res = await fetch(
    `https://nextjs-project-dnja6jscr-ozanbilgic-nextedycom.vercel.app/api/message`
  );
  const data = await res.json();
  return { props: { messages: data } };
}
