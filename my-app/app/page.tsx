"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [inspiration, setInspiration] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchRandom = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://aos-2025-2-back.vercel.app/random");
      const data = await res.json();
      setRandomNumber(data.number);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchInspiration = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://aos-2025-2-back.vercel.app/inspiration");
      const data = await res.json();
      setInspiration(data.quote ?? "Sem inspiração hoje 😅");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-black flex flex-col items-center justify-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-8"
      >
        🎲 Número Aleatório & Inspiração ✨
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center border border-white/20"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Número Aleatório</h2>
          <p className="text-3xl font-bold text-yellow-300 mb-4">
            {randomNumber !== null ? randomNumber : "—"}
          </p>
          <button
            onClick={fetchRandom}
            disabled={loading}
            className="px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition"
          >
            Gerar Número
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center border border-white/20"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Mensagem Inspiradora</h2>
          <p className="text-lg text-green-300 italic mb-4">
            {inspiration ?? "—"}
          </p>
          <button
            onClick={fetchInspiration}
            disabled={loading}
            className="px-4 py-2 rounded-xl bg-green-400 hover:bg-green-500 text-black font-semibold transition"
          >
            Buscar Inspiração
          </button>
        </motion.div>
      </div>
    </main>
  );
}
