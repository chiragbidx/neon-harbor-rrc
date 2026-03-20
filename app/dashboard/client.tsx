"use client";

type ClientProps = {
  greeting?: string;
  firstName?: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <main className="p-6 max-w-4xl mx-auto w-full">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold">Welcome to ClientFlow</h1>
        <p className="text-muted-foreground text-lg">
          Manage your customers, deals, and team in one place.
        </p>
      </div>
      <div className="rounded-lg border border-dashed border-secondary py-8 px-6 flex flex-col items-center bg-card/40">
        <p className="mb-4 text-lg text-muted-foreground">
          No customers yet. Start by adding your first customer.
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