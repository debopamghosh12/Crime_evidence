"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import {
    LayoutDashboard,
    FileText,
    Activity,
    LogOut,
    User,
    Menu,
    X,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, isAuthenticated, isLoading, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/login");
        }
    }, [isLoading, isAuthenticated, router]);

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-background text-foreground">
                Loading secure environment...
            </div>
        );
    }

    if (!isAuthenticated) return null;

    const navigation = [
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { name: "Evidence", href: "/dashboard/evidence", icon: FileText },
        { name: "Chain of Custody", href: "/dashboard/custody", icon: Activity },
    ];

    return (
        <div className="flex h-screen overflow-hidden bg-background">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-64 transform border-r border-white/10 bg-black transition-transform duration-300 lg:static lg:translate-x-0",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex h-16 items-center justify-between px-6 border-b border-white/10">
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <span className="text-xl font-bold tracking-widest text-primary">DFX</span>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Secure</span>
                    </Link>
                    <button
                        className="lg:hidden text-muted-foreground hover:text-primary"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <nav className="flex-1 space-y-1 px-4 py-6">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "group flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 border-l-2",
                                    isActive
                                        ? "border-primary bg-primary/10 text-primary"
                                        : "border-transparent text-muted-foreground hover:bg-white/5 hover:text-white"
                                )}
                            >
                                <item.icon
                                    className={cn(
                                        "h-5 w-5 transition-colors",
                                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-white"
                                    )}
                                />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* User Profile Snippet */}
                <div className="px-6 py-6 border-b border-white/5 order-first lg:order-none">
                    {/* I'm placing this here to match DFX structure if needed, or keeping it at bottom. 
                      Actually, let's keep the user profile simpler or move it. 
                      The previous footer had user profile. DFX usually has it top or bottom. 
                      Let's stick to the previous structure but styled.
                  */}
                </div>

                <div className="p-4 border-t border-white/10 mt-auto">
                    <div className="mb-4">
                        <div className="flex items-center gap-3 px-2 py-2">
                            <div className="h-8 w-8 bg-white/10 flex items-center justify-center text-primary font-bold border border-white/10">
                                {user?.fullName?.charAt(0) || "U"}
                            </div>
                            <div className="overflow-hidden">
                                <p className="truncate text-sm font-medium text-white">{user?.fullName}</p>
                                <p className="truncate text-xs text-muted-foreground capitalize">{user?.role}</p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={logout}
                        className="flex w-full items-center gap-3 px-4 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors uppercase tracking-wider"
                    >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                <header className="flex h-16 items-center justify-between border-b border-border bg-card px-4 lg:px-6">
                    <button
                        className="rounded-md p-2 text-muted-foreground hover:bg-muted lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                    <div className="flex items-center gap-4">
                        {/* Top bar content can go here (search, notifications) */}
                        <span className="text-sm text-muted-foreground hidden sm:inline-block">
                            Secure Connection Established
                        </span>
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto bg-background p-4 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
