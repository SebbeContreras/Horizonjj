import { getServerSession } from "next-auth";
import SignIn from "../../../lib/components/signIn";
import { redirect } from "next/navigation";
import style from "../page.module.css";

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <main className={style.academy__main}>
      <SignIn />
    </main>
  );
}
