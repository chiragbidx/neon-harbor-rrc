import React from "react";

export default function OverviewPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto w-full">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold">Overview</h1>
        <p className="text-muted-foreground text-lg">
          Get a snapshot of your customers and deals at a glance.
        </p>
      </div>
      {/* Future: metrics, charts, quick stats */}
      <div className="rounded-lg border border-dashed border-secondary py-8 px-6 flex flex-col items-center bg-card/40">
        <p className="mb-3 text-lg text-muted-foreground">
          Coming soon: team and sales metrics!
        </p>
      </div>
    </main>
  );
}