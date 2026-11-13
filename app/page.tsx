
"use client";

import { useState } from "react";
import {
  Search, ShoppingCart, User, Heart,
  Menu, ChevronRight, ShoppingBag
} from "lucide-react";

const categories = [
  "Grocery & Food",
  "Fashion",
  "Mobiles & Electronics",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Footwear",
  "Toys & Gifts",
];

const products = [
  { id: 1, name: "Fresh Grocery Combo", price: 499, category: "Grocery & Food", emoji: "🥦" },
  { id: 2, name: "Men's Casual Shirt", price: 699, category: "Fashion", emoji: "👕" },
  { id: 3, name: "Smartphone", price: 12999, category: "Mobiles & Electronics", emoji: "📱" },
  { id: 4, name: "Kitchen Storage Set", price: 399, category: "Home & Kitchen", emoji: "🍽️" },
  { id: 5, name: "Beauty Care Kit", price: 599, category: "Beauty & Personal Care", emoji: "🧴" },
  { id: 6, name: "Casual Sneakers", price: 899, category: "Footwear", emoji: "👟" },
  { id: 7, name: "Kids Toy Set", price: 299, category: "Toys & Gifts", emoji: "🧸" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");
  const [cart, setCart] = useState<number[]>([]);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (selected === "All" || p.category === selected)
  );

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 pb-10">
      <header className="bg-emerald-800 text-white p-5 rounded-b-3xl">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black">KERALA MART</h1>
            <p className="text-emerald-100 text-sm">
              Your Kerala Shopping Destination
            </p>
          </div>
          <div className="flex gap-4">
            <ShoppingCart />
            <Menu />
          </div>
        </div>

        <div className="mt-6 bg-white rounded-xl flex items-center gap-2 p-3 text-gray-500">
          <Search size={20} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full outline-none text-gray-900"
          />
        </div>
        <p className="text-sm mt-4 text-emerald-100">
          📍 Delivering Across Kerala
        </p>
      </header>

      <section className="p-4">
        <div className="bg-emerald-100 rounded-2xl p-5">
          <p className="text-emerald-800 font-semibold">
            Welcome to Kerala Mart
          </p>
          <h2 className="text-2xl font-black mt-2">
            Shop Everything You Love!
          </h2>
          <p className="text-sm mt-2 text-gray-700">
            Great products. Great prices.
          </p>
          <ShoppingBag className="text-emerald-800 mt-3" size={35} />
        </div>
      </section>

      <section className="px-4">
        <h2 className="font-bold text-lg mb-3">Shop by Category</h2>
        <div className="flex gap-2 overflow-x-auto pb-3">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm ${
                selected === category
                  ? "bg-emerald-700 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Featured Products</h2>
          <span className="text-emerald-700 text-sm">Explore <ChevronRight className="inline" size={16}/></span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {filtered.map((product) => (
            <article key={product.id} className="bg-white rounded-2xl p-3 shadow-sm">
              <div className="h-28 bg-emerald-50 rounded-xl flex items-center justify-center text-5xl">
                {product.emoji}
              </div>
              <p className="font-semibold mt-3 text-sm">{product.name}</p>
              <p className="text-xs text-gray-500 mt-1">{product.category}</p>
              <p className="font-black text-emerald-800 mt-2">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
              <button
                onClick={() => setCart((old) => [...old, product.id])}
                className="w-full mt-3 bg-emerald-700 text-white rounded-lg py-2 text-sm"
              >
                Add to Cart
              </button>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-8">
            No products found.
          </p>
        )}
      </section>

      <footer className="bg-emerald-900 text-white p-6 text-center mt-6">
        <h2 className="font-black text-xl">KERALA MART</h2>
        <p className="text-sm text-emerald-100 mt-2">
          Buy Local. Shop Smart.
        </p>
        <p className="text-xs mt-4">© 2026 Kerala Mart</p>
      </footer>
    </main>
  );
}
