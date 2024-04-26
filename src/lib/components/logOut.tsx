import { signOut } from "next-auth/react";

export default function LogOut() {
  return <span onClick={() => signOut}>Log out</span>;
}
