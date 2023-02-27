export default interface User {
  login: string | null;
  avatar_url: string | undefined;
  name: string | null;
  company: string | null;
  blog: string;
  location: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number | null;
  followers: number | null;
  following: number | null;
  created_at: string;
}
