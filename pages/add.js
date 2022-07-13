import AddForm from "../components/AddForm";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Add() {
  const session = useSession();

  const router = useRouter();
  useEffect(() => {
    if (!session.data) {
      router.push("/");
    }
  }, [router, session]);

  if (!session.data) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <Head>
        <title>Add</title>
      </Head>
      <AddForm />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
