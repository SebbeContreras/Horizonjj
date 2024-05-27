"use client";

import { addUser } from "../actions/actions";
import { UserDoc } from "../models/userModel";

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
      <form action={handleSignUp} className="register__form">
        <span>
          <label htmlFor="firstname"> Förnamn: </label>
          <input type="text" name="firstname" placeholder="Förnamn" />
          <label htmlFor="Lastname"> Efternamn: </label>
          <input type="text" name="lastname" placeholder="Efternamn" />
        </span>
        <span>
          <label htmlFor="Email"> Mejladress: </label>
          <input type="text" name="email" placeholder="Mejladress" />
          <label htmlFor="Password"> Lösenord: </label>
          <input type="password" name="password" placeholder="Lösenord" />
        </span>
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default SignUp;
