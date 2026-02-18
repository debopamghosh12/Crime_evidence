"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import Link from "next/link";
import { Lock, User, AlertCircle, Loader2, ShieldCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();

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
        <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4 overflow-hidden relative font-sans">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-md relative z-10"
            >
                {/* Card Container */}
                <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl overflow-hidden relative group">
                    {/* Glowing Border Effect */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="p-8 sm:p-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 shadow-[0_0_15px_rgba(255,0,60,0.15)] mb-6"
                            >
                                <ShieldCheck className="h-8 w-8 text-primary" />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl font-bold tracking-tight text-white mb-2 uppercase"
                            >
                                Secure Access
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-sm text-gray-400 font-mono"
                            >
                                IDENTIFY YOURSELF.
                            </motion.p>
                        </div>

                        {/* Form */}
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <label className="block text-xs font-mono text-primary uppercase tracking-wider mb-2">Officer ID / User</label>
                                    <div className="relative group/input">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 transition-colors group-focus-within/input:text-primary text-gray-500">
                                            <User className="h-4 w-4" />
                                        </div>
                                        <input
                                            type="text"
                                            required
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="block w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-11 pr-4 text-white placeholder:text-gray-600 focus:border-primary focus:bg-white/10 focus:ring-1 focus:ring-primary focus:outline-none transition-all font-mono text-sm"
                                            placeholder="ENTER ID"
                                            autoComplete="off"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <label className="block text-xs font-mono text-primary uppercase tracking-wider mb-2">Password Protocol</label>
                                    <div className="relative group/input">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 transition-colors group-focus-within/input:text-primary text-gray-500">
                                            <Lock className="h-4 w-4" />
                                        </div>
                                        <input
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="block w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-11 pr-4 text-white placeholder:text-gray-600 focus:border-primary focus:bg-white/10 focus:ring-1 focus:ring-primary focus:outline-none transition-all font-mono text-sm"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </motion.div>
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
                                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255,0,60,0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                type="submit"
                                disabled={loading}
                                className={cn(
                                    "relative w-full overflow-hidden rounded-lg bg-primary py-3.5 text-sm font-bold uppercase tracking-widest text-black shadow-lg transition-all hover:bg-white hover:text-black focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group/btn",
                                    loading && "cursor-wait"
                                )}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {loading ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            AUTHENTICATING...
                                        </>
                                    ) : (
                                        <>
                                            INITIATE SESSION <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                        </>
                                    )}
                                </span>
                            </motion.button>
                        </form>
                    </div>

                    {/* Footer */}
                    <div className="bg-white/5 p-4 text-center border-t border-white/5">
                        <p className="text-xs text-gray-500">
                            NO CREDENTIALS?{" "}
                            <Link
                                href="/register"
                                className="font-bold text-primary hover:text-white transition-colors uppercase tracking-wide hover:underline"
                            >
                                REQUEST ACCESS
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2 }}
                className="absolute bottom-8 text-[10px] text-gray-600 font-mono tracking-[0.2em] select-none"
            >
                SECURE CONNECTION ESTABLISHED :: DFX PROTOCOL V2.4
            </motion.div>
        </div>
    );
}
