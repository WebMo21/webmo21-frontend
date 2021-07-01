import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import customVerificationRequest from "./customVerificationRequest";
import Adapters from "next-auth/adapters";

import Models from "../models";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: customVerificationRequest,
    }),
  ],
  /* database: process.env.DATABASE_URL, */
  adapter: Adapters.TypeORM.Adapter(process.env.DATABASE_URL, {
    models: {
      User: Models.User,
    },
  }),
  secret: process.env.SECRET, // A random string used to hash tokens, sign cookies and generate cryptographic keys.
  session: {
    jwt: true, // Use JSON Web Tokens for session instead of database sessions.
    maxAge: 30 * 24 * 60 * 60, // 30 days How long until an idle session expires and is no longer valid.
  },

  jwt: {
    secret: process.env.JWT_SECRET, // A secret to use for signing Key generation
    encryption: false,
  },
  debug: true,
  pages: {
    verifyRequest: "/mailsent",
    error: "/error",
    // newUser: null, // If set, new users will be directed here on first sign in
  },
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      console.log("INSPECT account", account);
      console.log("INSPECT user", user);
      console.log("INSPECT token", token);
      console.log("INSPECT profile", profile);
      console.log("INSPECT isNewUser", isNewUser);
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      if (account?.provider) {
        token.provider = account.provider;
      }
      if (user?.role) {
        token.role = user.role;
      }
      if (user?.gender) {
        token.gender = user.gender;
      }
      if (user?.id) {
        token.id = user.id;
      }
      if (user?.createdAt) {
        token.createdAt = user.createdAt;
      }
      return token;
    },
    async session(session, token) {
      console.log("INSPECT session", session);
      console.log("INSPECT token", token);
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }
      if (token?.provider) {
        session.provider = token.provider;
      }
      if (token?.role) {
        session.user.role = token.role;
      }
      if (token?.gender) {
        session.user.gender = token.gender;
      }
      if (token?.id) {
        session.user.id = token.id;
      }
      if (token?.createdAt) {
        session.user.createdAt = token.createdAt;
      }
      return session;
    },
  },
});
