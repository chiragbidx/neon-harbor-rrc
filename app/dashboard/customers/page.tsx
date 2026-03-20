import React from "react";

export default function CustomersListPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto w-full">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold">Customers</h1>
      </div>
      <div className="rounded-lg border border-dashed border-secondary py-8 px-6 flex flex-col items-center bg-card/40">
        <p className="mb-4 text-lg text-muted-foreground">
          No customers found. Add your first customer to get started.
        </p>
        <a
          href="/dashboard/customers/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-md shadow hover:bg-primary/90 transition"
        >
          Add Customer
        </a>
      </div>
    </main>
  );
}