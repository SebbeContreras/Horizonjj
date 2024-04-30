import { getServerSession } from "next-auth";
import SignIn from "../../../lib/components/signIn";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <>
      <SignIn />
    </>
  );
}
