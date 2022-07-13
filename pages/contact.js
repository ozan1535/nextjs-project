import ContactForm from "../components/ContactForm";
import classes from "./../styles/contact.module.css";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Contact({ session }) {
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [router, session]);

  if (session) {
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
