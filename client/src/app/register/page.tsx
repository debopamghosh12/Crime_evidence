"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserPlus, User, Mail, Shield, Lock, Loader2, CheckCircle2, ArrowRight, Activity, BadgeCheck, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import fingerprintAnimation from "../../components/Fingerprint Complete.json";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        fullName: "",
        role: "officer", // Default role
        password: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            // Fake delay for animation demo
            await new Promise(resolve => setTimeout(resolve, 800));

            const response = await axios.post("/api/v1/auth/register", formData);

            if (response.data.success) {
                setSuccess(true);
                setTimeout(() => router.push("/login"), 2000);
            }
        } catch (err: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
            setError(
                err.response?.data?.error || "Registration failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    // Staggered animation variants for form fields
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { x: 20, opacity: 0 }, // Changed slide direction for Right-side form
        visible: { x: 0, opacity: 1 }
    };

    const roles = [
        { id: 'officer', label: 'Officer', icon: Shield },
        { id: 'head_officer', label: 'Head Officer', icon: Activity },
        { id: 'lawyer', label: 'Lawyer', icon: User },
        { id: 'judge', label: 'Judge', icon: CheckCircle2 },
    ];

    return (
        <div className="flex min-h-screen bg-[#050505] text-white font-sans overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-900/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
            </div>

            {/* Left Section: Visual (Lottie) - Mirrored Layout */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hidden lg:flex w-1/2 bg-black items-center justify-center relative overflow-hidden order-1"
            >
                {/* Background Glow behind animation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[100px] rounded-full animate-pulse" />

                <div className="relative w-[500px] h-[500px]">
                    <Lottie
                        animationData={fingerprintAnimation}
                        loop={true}
                        className="w-full h-full drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                    />

                    {/* Scanning Line Overlay Effect - Reversed/Different visual cue */}
                    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-full opacity-30">
                        <div className="w-full h-[2px] bg-emerald-500 shadow-[0_0_20px_#10b981] animate-[scan_3s_ease-in-out_infinite_reverse]" />
                    </div>
                </div>
            </motion.div>

            {/* Right Section: Auth Form - Mirrored Layout */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-12 lg:p-24 relative z-10 order-2"
            >
                <div className="w-full max-w-lg mx-auto space-y-8">
                    {/* Header */}
                    <div className="space-y-2 text-right">
                        <div className="flex items-center justify-end gap-3 mb-6">
                            <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                <UserPlus className="h-6 w-6 text-emerald-500" />
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white font-heading">
                            Create Account
                        </h1>
                        <p className="text-slate-400">
                            Sign up to get started.
                        </p>
                    </div>

                    {/* Glass Panel Form */}
                    <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
                        <AnimatePresence mode="wait">
                            {success ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col items-center justify-center space-y-6 py-10 text-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", delay: 0.2 }}
                                        className="h-24 w-24 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                                    >
                                        <FileCheck className="h-12 w-12 text-emerald-500" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white uppercase tracking-wide font-heading">Account Created</h3>
                                        <p className="text-emerald-400 font-mono mt-2">Redirecting to login...</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <motion.div variants={itemVariants}>
                                            <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Username</label>
                                            <div className="relative group">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500 transition-colors group-focus-within:text-emerald-500">
                                                    <User className="h-4 w-4" />
                                                </div>
                                                <input
                                                    name="username"
                                                    type="text"
                                                    required
                                                    value={formData.username}
                                                    onChange={handleChange}
                                                    className="block w-full bg-[#1A1A1A] border-transparent rounded-lg py-3 pl-11 pr-4 text-white placeholder:text-gray-600 focus:border-emerald-500 focus:bg-[#1A1A1A] focus:ring-0 focus:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all font-sans text-sm outline-none"
                                                    placeholder="jdoe"
                                                />
                                            </div>
                                        </motion.div>
                                        <motion.div variants={itemVariants}>
                                            <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                                            <input
                                                name="fullName"
                                                type="text"
                                                required
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className="block w-full bg-[#1A1A1A] border-transparent rounded-lg py-3 px-4 text-white placeholder:text-gray-600 focus:border-emerald-500 focus:bg-[#1A1A1A] focus:ring-0 focus:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all font-sans text-sm outline-none"
                                                placeholder="John Doe"
                                            />
                                        </motion.div>
                                    </div>

                                    <motion.div variants={itemVariants}>
                                        <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Email</label>
                                        <div className="relative group">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500 transition-colors group-focus-within:text-emerald-500">
                                                <Mail className="h-4 w-4" />
                                            </div>
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="block w-full bg-[#1A1A1A] border-transparent rounded-lg py-3 pl-11 pr-4 text-white placeholder:text-gray-600 focus:border-emerald-500 focus:bg-[#1A1A1A] focus:ring-0 focus:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all font-sans text-sm outline-none"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants}>
                                        <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Role</label>
                                        <div className="relative group">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500 transition-colors group-focus-within:text-emerald-500">
                                                <BadgeCheck className="h-4 w-4" />
                                            </div>
                                            <select
                                                name="role"
                                                value={formData.role}
                                                onChange={handleChange}
                                                className="block w-full bg-[#1A1A1A] border-transparent rounded-lg py-3 pl-11 pr-4 text-white placeholder:text-gray-600 focus:border-emerald-500 focus:bg-[#1A1A1A] focus:ring-0 focus:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all font-sans text-sm outline-none appearance-none"
                                            >
                                                {roles.map(role => (
                                                    <option key={role.id} value={role.id} className="bg-[#1A1A1A] text-white">{role.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants}>
                                        <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Password</label>
                                        <div className="relative group">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500 transition-colors group-focus-within:text-emerald-500">
                                                <Lock className="h-4 w-4" />
                                            </div>
                                            <input
                                                name="password"
                                                type="password"
                                                required
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="block w-full bg-[#1A1A1A] border-transparent rounded-lg py-3 pl-11 pr-4 text-white placeholder:text-gray-600 focus:border-emerald-500 focus:bg-[#1A1A1A] focus:ring-0 focus:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all font-sans text-sm outline-none"
                                                placeholder="••••••••"
                                            />
                                        </div>
                                    </motion.div>

                                    {error && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="flex items-center gap-3 rounded bg-red-500/10 border border-red-500/20 p-3 text-xs text-red-500 font-mono">
                                                <Activity className="h-4 w-4 shrink-0" />
                                                <span>{error}</span>
                                            </div>
                                        </motion.div>
                                    )}

                                    <motion.button
                                        variants={itemVariants}
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
                                                    CREATING...
                                                </>
                                            ) : (
                                                <>
                                                    SIGN UP <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </>
                                            )}
                                        </span>
                                    </motion.button>
                                </form>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="text-center">
                        <Link
                            href="/login"
                            className="text-xs font-mono text-slate-500 hover:text-emerald-500 transition-colors"
                        >
                            {"<"} ALREADY HAVE AN ACCOUNT? LOG IN
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
