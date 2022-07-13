import ContactForm from "../components/ContactForm";
import classes from "./../styles/contact.module.css";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Contact() {
  const session = useSession();
  const router = useRouter();
  console.log(session);
  useEffect(() => {
    if (session.data) {
      router.push("/");
    }
  }, [router, session]);

  if (session.data) {
    return <h1>Loading</h1>;
  }

  return (
    <div className={classes.container}>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactForm />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  return {
    props: {
      session,
    },
  };
}
