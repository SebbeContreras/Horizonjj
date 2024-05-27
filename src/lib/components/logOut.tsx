"use client";

import { signOut } from "next-auth/react";

export default function LogOut() {
  return <p onClick={() => signOut()}>LOGGA UT</p>;
}
