import ContactForm from "../components/ContactForm";
import classes from "./../styles/contact.module.css";
import { getSession } from "next-auth/react";
import Head from "next/head";

export default function Contact() {
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

  if (!session.user.email) {
    return {
      props: {
        data: "Ali",
      },
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}
