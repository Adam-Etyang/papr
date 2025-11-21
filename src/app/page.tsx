import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/better-auth";
import { getSession } from "~/server/better-auth/server";
import { api, HydrateClient } from "~/trpc/server";

import Navbar from "../components/navbar";
import HeroInput from "../components/heroinput";

import { SearchIcon } from "lucide-react";


export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getSession();

  if (session) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="bg-black text-white">
        <div className="min-h-screen">
          <section>
            <header className="">
              <Navbar />

            </header>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] text-center">
              Welcome to <span className="text-[#A51C30]">Papr</span>
            </h1>
            </section>
<div>
            <section>
              <HeroInput />
            </section>
</div>
    
    </div>
      </main >
    </HydrateClient >
  );
}
