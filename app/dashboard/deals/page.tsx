import React from "react";

export default function DealsListPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto w-full">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold">Deals</h1>
      </div>
      <div className="rounded-lg border border-dashed border-secondary py-8 px-6 flex flex-col items-center bg-card/40">
        <p className="mb-4 text-lg text-muted-foreground">
          No deals yet. Track your sales by adding a new deal.
        </p>
        <a
          href="/dashboard/deals/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-md shadow hover:bg-primary/90 transition"
        >
          Add Deal
        </a>
      </div>
    </main>
  );
}