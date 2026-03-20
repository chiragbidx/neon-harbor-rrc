import React from "react";

export default function NewCustomerPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto w-full">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold">Add New Customer</h1>
      </div>
      <form className="max-w-xl mx-auto bg-card p-6 rounded-lg border space-y-6">
        {/* Minimal form - stub only; full CRUD/workflow in later roadmap */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="customer-name">
            Customer Name
          </label>
          <input id="customer-name" name="name" className="w-full rounded border px-3 py-2" placeholder="Acme Corp" required />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="customer-email">
            Email
          </label>
          <input id="customer-email" name="email" type="email" className="w-full rounded border px-3 py-2" placeholder="contact@customer.com" required />
        </div>
        <button type="submit" className="w-full px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-md shadow hover:bg-primary/90 transition">
          Save Customer
        </button>
      </form>
    </main>
  );
}