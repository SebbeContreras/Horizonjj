"use client";

import { addUser } from "../actions/actions";
import { UserDoc } from "../models/model";

function SignUp() {
  async function handleSignUp(formData: FormData) {
    const user = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      active: false,
    } as UserDoc;
    const res = await addUser(user);
  }

  return (
    <>
      <form action={handleSignUp}>
        <input type="text" name="firstname" placeholder="firstname" />
        <input type="text" name="lastname" placeholder="lastname" />
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default SignUp;
