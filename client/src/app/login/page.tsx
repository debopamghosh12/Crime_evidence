"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { Lock, User, AlertCircle, Loader2, ShieldCheck, ArrowRight, Wallet, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import fingerprintAnimation from "../../components/Fingerprint Complete.json";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login, isAuthenticated, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated && user) {
            router.push(`/dashboard/${user.id}`);
        }
    }, [isAuthenticated, user, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            // Using a minimum delay to show the "cool" loading animation
            const minDelay = new Promise(resolve => setTimeout(resolve, 800));

            const apiCall = axios.post("/api/v1/auth/login", {
                username,
                password,
            });

            const [response] = await Promise.all([apiCall, minDelay]);

            if (response.data.success) {
                login(response.data.token, response.data.user);
            }
        } catch (err: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
            setError(
                err.response?.data?.error || "ACCESS DENIED. Invalid Credentials."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen bg-[#050505] text-white font-sans overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
            </div>

            {/* Left Section: Auth Form */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-12 lg:p-24 relative z-10"
            >
                <div className="w-full max-w-md mx-auto space-y-8">
                    {/* Header */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                <ShieldCheck className="h-6 w-6 text-emerald-500" />
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white font-heading">
                            Welcome Back
                        </h1>
                        <p className="text-slate-400">
                            Enter your details to sign in.
                        </p>
                    </div>

                    {/* Glass Panel Form */}
                    <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Username</label>
                                    <div className="relative group">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500 transition-colors group-focus-within:text-emerald-500">
                                            <BadgeCheck className="h-5 w-5" />
                                        </div>
                                        <input
                                            type="text"
                                            required
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="block w-full bg-[#1A1A1A] border-transparent rounded-lg py-3.5 pl-11 pr-4 text-white placeholder:text-gray-600 focus:border-emerald-500 focus:bg-[#1A1A1A] focus:ring-0 focus:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all font-sans text-sm outline-none"
                                            placeholder="Enter username"
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Password</label>
                                    <div className="relative group">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500 transition-colors group-focus-within:text-emerald-500">
                                            <Lock className="h-5 w-5" />
                                        </div>
                                        <input
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="block w-full bg-[#1A1A1A] border-transparent rounded-lg py-3.5 pl-11 pr-4 text-white placeholder:text-gray-600 focus:border-emerald-500 focus:bg-[#1A1A1A] focus:ring-0 focus:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all font-sans text-sm outline-none"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="flex items-center gap-3 rounded bg-red-500/10 border border-red-500/20 p-3 text-xs text-red-500 font-mono">
                                            <AlertCircle className="h-4 w-4 shrink-0" />
                                            <span>{error}</span>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className={cn(
                                    "w-full rounded-lg bg-emerald-500 py-4 text-sm font-bold uppercase tracking-widest text-black shadow-lg transition-all hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] disabled:opacity-50 disabled:cursor-not-allowed group",
                                    loading && "cursor-wait"
                                )}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    {loading ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            LOGGING IN...
                                        </>
                                    ) : (
                                        <>
                                            LOG IN <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </>
                                    )}
                                </span>
                            </motion.button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-white/10" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-[#0A0A0A] px-2 text-slate-500 font-mono">Or Connect With</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/5 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 group"
                        >
                            <Wallet className="h-5 w-5 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                            <span>Connect Metamask</span>
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-slate-500">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="font-semibold text-emerald-500 hover:text-emerald-400 transition-colors hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Right Section: Visual (Lottie) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hidden lg:flex w-1/2 bg-black items-center justify-center relative overflow-hidden"
            >
                {/* Background Glow behind animation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[100px] rounded-full animate-pulse" />

                <div className="relative w-[500px] h-[500px]">
                    <Lottie
                        animationData={fingerprintAnimation}
                        loop={true}
                        className="w-full h-full drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                    />

                    {/* Scanning Line Overlay Effect */}
                    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-full opacity-30">
                        <div className="w-full h-[2px] bg-emerald-500 shadow-[0_0_20px_#10b981] animate-[scan_3s_ease-in-out_infinite]" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
