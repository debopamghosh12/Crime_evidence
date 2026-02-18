"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserPlus, User, Mail, Shield, Lock, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

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
            // Note: Registration usually requires a token with 'user_management' permission
            // For this demo, we might need a public registration endpoint or an initial admin token.
            // Assuming public registration for demo purposes or self-service flow.
            // If the backend requires auth, this might fail without a token.
            // Let's try the endpoint; if it fails 401, we might need to adjust the backend or user flow.

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

    return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
            <div className="w-full max-w-lg space-y-8 rounded-2xl border border-border bg-card p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                        <UserPlus className="h-6 w-6 text-secondary" />
                    </div>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
                        Create Account
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Join the automated chain of custody network
                    </p>
                </div>

                {success ? (
                    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-green-500/10 p-8 text-center text-green-500">
                        <CheckCircle2 className="h-12 w-12" />
                        <h3 className="text-xl font-semibold">Registration Successful!</h3>
                        <p className="text-sm">Redirecting to login...</p>
                    </div>
                ) : (
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-medium text-foreground">Username</label>
                                    <div className="relative mt-1">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <User className="h-4 w-4 text-muted-foreground" />
                                        </div>
                                        <input
                                            name="username"
                                            type="text"
                                            required
                                            value={formData.username}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg border border-input bg-background py-2 pl-9 pr-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/50"
                                            placeholder="jdoe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground">Full Name</label>
                                    <input
                                        name="fullName"
                                        type="text"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border border-input bg-background py-2 px-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/50"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground">Email Address</label>
                                <div className="relative mt-1">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Mail className="h-4 w-4 text-muted-foreground" />
                                    </div>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border border-input bg-background py-2 pl-9 pr-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/50"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground">Role</label>
                                <div className="relative mt-1">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Shield className="h-4 w-4 text-muted-foreground" />
                                    </div>
                                    <select
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border border-input bg-background py-2 pl-9 pr-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/50"
                                    >
                                        <option value="officer">Officer</option>
                                        <option value="analyst">Analyst</option>
                                        <option value="custodian">Custodian</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground">Password</label>
                                <div className="relative mt-1">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Lock className="h-4 w-4 text-muted-foreground" />
                                    </div>
                                    <input
                                        name="password"
                                        type="password"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border border-input bg-background py-2 pl-9 pr-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/50"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                        </div>

                        {error && (
                            <div className="rounded-lg bg-destructive/10 p-3 text-center text-sm text-destructive">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={cn(
                                "w-full flex justify-center rounded-lg bg-secondary py-2.5 text-sm font-semibold text-secondary-foreground shadow-lg hover:bg-secondary/90 disabled:opacity-50",
                                loading && "cursor-wait"
                            )}
                        >
                            {loading ? (
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>
                )}

                <div className="text-center text-sm">
                    <Link
                        href="/login"
                        className="font-medium text-primary hover:text-primary/80 hover:underline"
                    >
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
