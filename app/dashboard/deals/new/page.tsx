import React from "react";

export default function NewDealPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto w-full">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold">Add New Deal</h1>
      </div>
      <form className="max-w-xl mx-auto bg-card p-6 rounded-lg border space-y-6">
        {/* Minimal form - stub only; full CRUD/workflow in later roadmap */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="deal-name">
            Deal Name
          </label>
          <input id="deal-name" name="name" className="w-full rounded border px-3 py-2" placeholder="Signed SaaS Contract" required />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="deal-value">
            Value (USD)
          </label>
          <input id="deal-value" name="value" type="number" className="w-full rounded border px-3 py-2" placeholder="10000" required />
        </div>
        <button type="submit" className="w-full px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-md shadow hover:bg-primary/90 transition">
          Save Deal
        </button>
      </form>
    </main>
  );
}