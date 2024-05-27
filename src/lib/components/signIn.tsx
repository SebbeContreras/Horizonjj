"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import style from "../../app/(ACADEMY)/page.module.css";

const SignIn = () => {
  async function getUser(formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
    const response = await signIn("credentials", { email, password });
  }

  return (
    <section className={style.form__box}>
      <form action={getUser}>
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Logga in</button>
      </form>
      <p>
        Är du inte medlem? <Link href="/REGISTER">bli medlem här</Link>
      </p>
    </section>
  );
};
export default SignIn;
