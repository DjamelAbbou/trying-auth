import NextAuth from "next-auth";
import dbPromise from "@/modules/db";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapater } from "@next-auth/mongodb-adapter";

export default NextAuth({
  adapter: MongoDBAdapater(await dbPromise),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { username, password } = credentials;
        const user = await (await dbPromise)
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
