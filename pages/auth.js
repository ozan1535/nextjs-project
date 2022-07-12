import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import AuthForm from "../components/Auth/";
import Head from "next/head";
import StateContext from "../store/state-context";

function AuthPage() {
  const stateCtx = useContext(StateContext);
  const { isLoading, setIsLoading } = stateCtx;

  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Head>
        <title>Auth</title>
      </Head>
      <AuthForm />
    </div>
  );
}

export default AuthPage;
