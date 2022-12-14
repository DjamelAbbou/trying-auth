import NextAuth from "next-auth";
import { MongoDBAdapater } from "@next-auth/mongodb-adapter";
import clientPromise from "@/modules/db";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  adapter: MongoDBAdapater(clientPromise),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
    signOut: "/",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;
        const user = await (await clientPromise)
          .db()
          .collection("users")
          .find({ username, password });

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});
