import AuthForm from "../components/auth/auth-form";
import { getSession } from "next-auth/react";

function AuthPage() {
  return <AuthForm />;
}

export async function getServerSideProps(context) {
  //stugum enq usery login exata te che
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default AuthPage;
