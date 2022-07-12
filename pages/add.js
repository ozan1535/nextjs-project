import AddForm from "../components/AddForm";
import { getSession } from "next-auth/react";
import Head from "next/head";

export default function () {
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
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      name: "Ali",
    },
  };
}
