"use client";

import { signIn } from "next-auth/react";

const SignIn = () => {
  async function getUser(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const response = await signIn("credentials", { email, password });
    console.log({ response });
  }

  return (
    <form action={getUser}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};
export default SignIn;
