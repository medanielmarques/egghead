import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

export const supabase = createPagesBrowserClient();

export async function signInWithDiscord() {
  await supabase.auth.signInWithOAuth({
    provider: "discord",
  });
}

export async function signInWithGoogle() {
  await supabase.auth.signInWithOAuth({
    provider: "google",
  });
}

export async function signOut() {
  await supabase.auth.signOut();
}

export async function getUserAvatar() {
  const { data } = await supabase.auth.getSession();
  return data.session?.user.user_metadata.avatar_url as string;
}
