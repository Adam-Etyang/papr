import Link from "next/link";
import { getSession } from "~/server/better-auth/server";
import { api, HydrateClient } from "~/trpc/server";

export default async function Navbar() {

    const session = await getSession();
    return (
        <HydrateClient>
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-5xl font-bold">Papr</Link>
                    <div className="hidden gap-6 md:flex">
                        <Link href="/" className="hover:text-[#A51C30] transition">Home</Link>
                        <Link href="/about" className="hover:text-[#A51C30] transition">About</Link>
                        <Link href="/docs" className="hover:text-[#A51C30] transition">Docs</Link>
                    </div>
                </div>
                <div className="flex gap-4">
                    {session ? (
                        <>
                            <Link href="/profile" className="px-4 py-2 rounded-lg hover:bg-white/10 transition">Profile</Link>
                            <Link href="/api/auth/signout" className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition">Sign Out</Link>
                        </>
                    ) : (
                        <>
                            <Link href="/api/auth/signin" className="px-4 py-2 border-[] rounded-full hover:bg-white/10 transition">Sign In</Link>
                        </>
                    )}
                </div>
            </nav>
        </HydrateClient>
    );
}