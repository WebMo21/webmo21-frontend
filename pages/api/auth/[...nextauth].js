import NextAuth from "next-auth";
import Providers from "next-auth/providers";

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
  /* database: {
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
  }, */
  database: process.env.DATABASE_URL,
  pages: {
    verifyRequest: "/mailsent",
    error: "/error",
    // newUser: null, // If set, new users will be directed here on first sign in
  },
  /*
  secret: process.env.SECRET,

  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    secret: process.env.JWT_SECRET, //use a random secret token here
    encryption: true,
  },

  debug: true, */
});
