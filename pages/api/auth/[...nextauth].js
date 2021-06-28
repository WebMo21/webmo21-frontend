import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import customVerificationRequest from "./customVerificationRequest";

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
  database: process.env.DATABASE_URL,
  secret: process.env.SECRET, // A random string used to hash tokens, sign cookies and generate cryptographic keys.
  session: {
    jwt: true, // Use JSON Web Tokens for session instead of database sessions.
    maxAge: 30 * 24 * 60 * 60, // 30 days How long until an idle session expires and is no longer valid.
  },

  jwt: {
    secret: process.env.JWT_SECRET, // A secret to use for signing Key generation
    encryption: true,
  },
  debug: true,
  pages: {
    verifyRequest: "/mailsent",
    error: "/error",
    // newUser: null, // If set, new users will be directed here on first sign in
  },
});
