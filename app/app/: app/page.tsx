"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-green-700 p-5 text-white">
        <h1 className="text-3xl font-bold">Kerala Mart</h1>
        <p>Buy Local. Sell Easy.</p>
      </header>

      <section className="mx-auto max-w-5xl p-5">
        <input
          className="w-full rounded-xl border p-4"
          placeholder="എന്താണ് തിരയുന്നത്?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <h2 className="my-5 text-xl font-bold">
          കേരളത്തിലെ വാങ്ങലും വിൽപ്പനയും
        </h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {["Cars", "Bikes", "Mobiles", "Electronics", "Furniture", "Property", "Fashion", "Agriculture"].map((item) => (
            <div key={item} className="rounded-xl bg-white p-5 text-center shadow">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold">കേരള മാർട്ടിലേക്ക് സ്വാഗതം!</h2>
          <p className="mt-2 text-gray-600">
            നിങ്ങളുടെ സാധനങ്ങൾ സൗജന്യമായി പരസ്യം ചെയ്യൂ.
          </p>
          <button className="mt-4 rounded-lg bg-green-700 px-6 py-3 text-white">
            Sell Your Item
          </button>
        </div>
      </section>
    </main>
  );
}
