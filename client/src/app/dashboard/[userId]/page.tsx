"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import { useCrimeBox } from "@/context/CrimeBoxContext";
import CreateCrimeBox from "@/components/crime-box/CreateCrimeBox";
import JoinCrimeBox from "@/components/crime-box/JoinCrimeBox";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function DashboardPage() {
    const { user } = useAuth();
    const { activeBox, permission, leaveBox } = useCrimeBox();
    const [stats, setStats] = useState({
        totalEvidence: 0,
        pendingTransfers: 0,
    });
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const userId = params.userId as string;

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Mock stats if API fails or for demo
                const res = await axios.get("/api/v1/stats").catch(() => ({
                    data: { totalEvidence: 12, pendingTransfers: 3 }
                }));
                setStats(res.data);
            } catch (error) {
                console.error("Failed to fetch dashboard stats", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (activeBox) {
        return (
            <div className="space-y-6">
                <div className="flex items-center justify-between rounded-lg border border-border bg-card p-6 shadow-sm">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">
                            {activeBox.name}
                        </h1>
                        <p className="text-muted-foreground flex items-center gap-2">
                            Case ID: <span className="font-mono text-primary">{activeBox.caseId}</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 uppercase">
                                {permission} Access
                            </span>
                        </p>
                    </div>
                    <button
                        onClick={leaveBox}
                        className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
                    >
                        Exit Box
                    </button>
                </div>

                {/* Evidence Actions */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {permission === "read-write" && (
                        <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="font-semibold text-primary">Add New Evidence</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Register digital or physical evidence to this box.
                                </p>
                            </div>
                            <Link
                                href={`/dashboard/${userId}/evidence/new`}
                                className="mt-4 block w-full text-center rounded-md bg-primary py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                            >
                                Register Evidence
                            </Link>
                        </div>
                    )}

                    <div className="p-6 rounded-xl bg-card border border-border shadow-sm flex flex-col justify-between">
                        <div>
                            <h3 className="font-medium text-foreground">View Evidence Log</h3>
                            <p className="text-sm text-muted-foreground mt-2">
                                Browse all items and history in this box.
                            </p>
                        </div>
                        <Link
                            href={`/dashboard/${userId}/evidence`}
                            className="mt-4 block w-full text-center rounded-md border border-input bg-background py-2 text-sm font-medium hover:bg-muted"
                        >
                            View All Evidence
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <h1 className="text-2xl font-bold text-foreground">
                    Welcome back, {user?.fullName?.split(" ")[0]}
                </h1>
                <p className="text-muted-foreground">
                    Join a Crime Box to access evidence or create a new one.
                </p>
                <div className="mt-2 inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground capitalize">
                    Role: {user?.role?.replace("_", " ")}
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {/* Left Column: Actions */}
                <div className="space-y-6">
                    {user?.role === "head_officer" && <CreateCrimeBox />}
                    <JoinCrimeBox />
                </div>

                {/* Right Column: Stats & Overview */}
                <div className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                            <h3 className="font-medium text-foreground">Pending Transfers</h3>
                            <p className="text-3xl font-bold text-primary mt-2">
                                {loading ? "..." : stats.pendingTransfers}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">Requiring action</p>
                        </div>
                        <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                            <h3 className="font-medium text-foreground">Total Evidence</h3>
                            <p className="text-3xl font-bold text-secondary mt-2">
                                {loading ? "..." : stats.totalEvidence}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">System-wide</p>
                        </div>
                    </div>

                    {/* Placeholder for Recent Activity */}
                    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                        <h3 className="font-medium text-foreground mb-4">Recent System Activity</h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-start gap-3 text-sm">
                                    <div className="mt-0.5 h-2 w-2 rounded-full bg-muted-foreground/50" />
                                    <p className="text-muted-foreground">
                                        <span className="font-medium text-foreground">Officer Chen</span> transferred Case #2024-{100 + i} to <span className="font-medium text-foreground">Storage B</span>.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
