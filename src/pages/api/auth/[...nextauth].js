import NextAuth from "next-auth";
import dbPromise from "@/modules/db";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapater } from "@next-auth/mongodb-adapter";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { username, password } = credentials;
        const user = await (await dbPromise)
          .db()
          .collection("users")
          .find(user);

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  adapter: MongoDBAdapater(dbPromise),
});
