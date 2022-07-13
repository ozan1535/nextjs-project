import GetMessages from "../components/messages";
import classes from "./../styles/messages.module.css";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Messages({ messages }) {
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    if (!session.data) {
      router.push("/");
    }
  }, [router, session]);

  if (!session.data) {
    return <h1>Loading</h1>;
  }

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
  const session = await getSession(context);

  const res = await fetch(
    `https://nextjs-project-dnja6jscr-ozanbilgic-nextedycom.vercel.app/api/message`
  );
  const data = await res.json();
  return { props: { messages: data, session } };
}
