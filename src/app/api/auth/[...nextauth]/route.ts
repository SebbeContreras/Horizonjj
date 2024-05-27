import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../lib/models/userModel";

const handler = nextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/LOGIN",
    signOut: "/",
    error: "/LOGIN",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials, req): Promise<any> {
        const user = await User.findOne({ email: credentials?.email });
        console.log(user);

        if (!user) throw new Error("email does not exist.");
        if (user.password !== credentials?.password) return null;
        return user;
      },
    }),
  ],
});
export { handler as GET, handler as POST };
