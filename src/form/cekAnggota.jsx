import React, { useState } from "react";
import members from "../dataKuis.json";

const warnaMember = {
  silver: "bg-gray-200 text-gray-800 border-gray-400",
  gold: "bg-yellow-100 text-yellow-800 border-yellow-500",
  platinum: "bg-blue-100 text-blue-800 border-blue-500",
};

export default function CekAnggota() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [member, setMember] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setMember(null);
    setNotFound(false);

    if (!email.trim()) {
      setError("Email tidak boleh kosong.");
      return;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setError("Email tidak valid.");
      return;
    }

    const found = members.find((m) => m.email.toLowerCase() === email.toLowerCase());
    if (found) {
      setMember(found);
    } else {
      setNotFound(true);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Cek Keanggotaan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Masukkan email Anda"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Cek
        </button>
      </form>

      {member && (
        <div
          className={`mt-6 p-4 border-l-4 rounded ${warnaMember[member.tipe_member]}`}
        >
          <p className="text-lg">
            🧾 <strong>Selamat datang, {member.nama}!</strong>
          </p>
          <p>Anda adalah member <strong>{member.tipe_member.toUpperCase()}</strong>.</p>
        </div>
      )}

      {notFound && (
        <div className="mt-6 p-4 bg-red-100 text-red-800 border-l-4 border-red-500 rounded">
          ❌ Email tidak terdaftar sebagai member.
        </div>
      )}
    </div>
  );
}
