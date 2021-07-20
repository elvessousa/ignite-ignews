import { query as q } from 'faunadb';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user',
    }),
  ],
  /* jwt: {
   * To remove [next-auth][warn][jwt_auto_generated_signing_key] warning
    signingKey: process.env.SIGNING_KEY,
  }, */
  callbacks: {
    async signIn(user, _account, _profile) {
      const { email } = user;

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index('user_by_email'), q.Casefold(user.email))
              )
            ),
            q.Create(q.Collection('users'), { data: { email } }),
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(user.email)))
          )
        );

        return true;
      } catch {
        return false;
      }
    },
  },
});
