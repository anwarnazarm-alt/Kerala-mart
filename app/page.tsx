"use client";

import { useState } from "react";
import {
  Search, MapPin, Car, Bike, Smartphone, Sofa,
  Tv, House, Shirt, Grid, PlusCircle, Heart, User,
  Menu, ChevronDown
} from "lucide-react";

const categories = [
  { name: "Cars", icon: Car },
  { name: "Bikes", icon: Bike },
  { name: "Mobiles", icon: Smartphone },
  { name: "Furniture", icon: Sofa },
  { name: "Electronics", icon: Tv },
  { name: "Property", icon: House },
  { name: "Fashion", icon: Shirt },
  { name: "More", icon: Grid }
];

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 pb-24">
      <header className="bg-emerald-700 text-white p-5 rounded-b-3xl">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black">KERALA MART</h1>
            <p className="text-sm text-emerald-100">
              Buy Local. Sell Easy.
            </p>
          </div>
          <Menu size={28} />
        </div>

        <div className="mt-6 bg-white rounded-xl flex items-center p-3 gap-2 text-gray-500">
          <Search size={20} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search cars, bikes, mobiles..."
            className="w-full outline-none text-gray-900"
          />
        </div>

        <div className="flex items-center gap-2 mt-4 text-sm">
          <MapPin size={18} />
          Kerala · All Districts
          <ChevronDown size={16} />
        </div>
      </header>

      <section className="p-4">
        <h2 className="font-bold text-lg mb-4">Browse Categories</h2>
        <div className="grid grid-cols-4 gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                className="bg-white rounded-2xl p-3 shadow-sm flex flex-col items-center gap-2"
              >
                <Icon size={27} className="text-emerald-700" />
                <span className="text-xs font-semibold">{cat.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="px-4 mt-3">
        <div className="flex justify-between mb-4">
          <h2 className="font-bold text-lg">Latest Listings</h2>
          <span className="text-emerald-700 text-sm">View all</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Used Car", price: "₹3,50,000", place: "Kottayam", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600" },
            { name: "Smartphone", price: "₹12,000", place: "Alappuzha", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600" },
            { name: "Sofa Set", price: "₹8,500", place: "Ernakulam", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600" },
            { name: "Motorcycle", price: "₹45,000", place: "Kollam", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600" }
          ]
          .filter(item => item.name.toLowerCase().includes(search.toLowerCase())) 
          .map((item) => (
            <article key={item.name} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover" />
              <div className="p-3">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-emerald-700 font-bold mt-1">{item.price}</p>
                <p className="text-gray-500 text-xs mt-1">{item.place}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-3">
        <button className="flex flex-col items-center text-emerald-700">
          <House size={22}/><span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center">
          <Search size={22}/><span className="text-xs">Search</span>
        </button>
        <button className="flex flex-col items-center">
          <PlusCircle size={22}/><span className="text-xs">Sell</span>
        </button>
        <button className="flex flex-col items-center">
          <Heart size={22}/><span className="text-xs">Saved</span>
        </button>
        <button className="flex flex-col items-center">
          <User size={22}/><span className="text-xs">Profile</span>
        </button>
      </nav>
    </main>
  );
}
