import AddForm from "../components/AddForm";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Add({ session }) {
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [router, session]);

  if (!session) {
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
