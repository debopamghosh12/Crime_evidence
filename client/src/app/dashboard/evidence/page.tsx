"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Plus, Search, FileText, Loader2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Evidence {
    id: string;
    caseId: string;
    type: string;
    description: string;
    status: string;
    collectionDate: string;
    collectedBy: { fullName: string };
    currentCustodian: { fullName: string };
}

export default function EvidenceListPage() {
    const [evidence, setEvidence] = useState<Evidence[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });

    const fetchEvidence = async () => {
        setLoading(true);
        try {
            const response = await axios.get("/api/v1/evidence", {
                params: {
                    search: searchTerm,
                    page: pagination.page,
                    limit: 10,
                },
            });
            setEvidence(response.data.evidence);
            setPagination(response.data.pagination);
        } catch (error) {
            console.error("Failed to fetch evidence:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchEvidence();
        }, 500); // Debounce search
        return () => clearTimeout(timer);
    }, [searchTerm, pagination.page]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Evidence Log</h1>
                    <p className="text-muted-foreground">
                        Manage and track chain of custody for all physical and digital evidence.
                    </p>
                </div>
                <Link
                    href="/dashboard/evidence/new"
                    className="flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Register Evidence
                </Link>
            </div>

            <div className="flex items-center rounded-lg border border-input bg-card px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/50">
                <Search className="mr-2 h-4 w-4 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search by Case ID or Description..."
                    className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="rounded-lg border border-border bg-card shadow-sm overflow-hidden">
                {loading ? (
                    <div className="flex h-40 items-center justify-center text-muted-foreground">
                        <Loader2 className="h-6 w-6 animate-spin mr-2" />
                        Loading records...
                    </div>
                ) : evidence.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                        <FileText className="mb-4 h-12 w-12 opacity-20" />
                        <p>No evidence records found.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-muted/50 text-muted-foreground">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Case ID</th>
                                    <th className="px-4 py-3 font-medium">Type</th>
                                    <th className="px-4 py-3 font-medium">Description</th>
                                    <th className="px-4 py-3 font-medium">Status</th>
                                    <th className="px-4 py-3 font-medium">Custodian</th>
                                    <th className="px-4 py-3 font-medium text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {evidence.map((item) => (
                                    <tr key={item.id} className="group hover:bg-muted/50 transition-colors">
                                        <td className="px-4 py-3 font-medium text-foreground">
                                            {item.caseId}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className={cn(
                                                "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground",
                                                item.type === "Physical" && "bg-blue-500/10 text-blue-500",
                                                item.type === "Digital" && "bg-purple-500/10 text-purple-500",
                                                item.type === "Testimonial" && "bg-green-500/10 text-green-500"
                                            )}>
                                                {item.type}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 max-w-xs truncate" title={item.description}>
                                            {item.description}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className="capitalize text-muted-foreground">{item.status}</span>
                                        </td>
                                        <td className="px-4 py-3 text-muted-foreground">
                                            {item.currentCustodian?.fullName || "Unknown"}
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <Link
                                                href={`/dashboard/evidence/${item.id}`}
                                                className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-background hover:text-foreground hover:shadow-sm"
                                            >
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Simple Pagination Controls */}
            <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Page {pagination.page} of {pagination.totalPages}</span>
                <div className="space-x-2">
                    <button
                        disabled={pagination.page <= 1}
                        onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                        className="px-3 py-1 rounded border border-border disabled:opacity-50 hover:bg-muted"
                    >
                        Previous
                    </button>
                    <button
                        disabled={pagination.page >= pagination.totalPages}
                        onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                        className="px-3 py-1 rounded border border-border disabled:opacity-50 hover:bg-muted"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
