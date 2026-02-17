"use client";

import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
    const { user } = useAuth();

    return (
        <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <h1 className="text-2xl font-bold text-foreground">
                    Welcome back, {user?.fullName?.split(" ")[0]}
                </h1>
                <p className="text-muted-foreground">
                    Here is an overview of the current evidence chain status.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Placeholder Cards */}
                <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                    <h3 className="font-medium text-foreground">Pending Transfers</h3>
                    <p className="text-3xl font-bold text-primary mt-2">--</p>
                    <p className="text-xs text-muted-foreground mt-1">Requiring your attention</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                    <h3 className="font-medium text-foreground">Total Evidence</h3>
                    <p className="text-3xl font-bold text-secondary mt-2">--</p>
                    <p className="text-xs text-muted-foreground mt-1">Registered in system</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border shadow-sm">
                    <h3 className="font-medium text-foreground">Recent Activity</h3>
                    <p className="text-sm text-muted-foreground mt-2">System logs unavailable...</p>
                </div>
            </div>
        </div>
    );
}
