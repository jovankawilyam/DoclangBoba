'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [lelangs, setLelangs] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/lelang`)
      .then(res => res.json())
      .then(data => setLelangs(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Daftar Lelang</h1>

      {lelangs.map((item: any) => (
        <div key={item.id} style={{ marginBottom: 16 }}>
          <h3>{item.judul}</h3>
          <p>{item.lokasi}</p>
          <p>Rp {item.harga_awal.toLocaleString()}</p>
          <p>Status: {item.status}</p>
        </div>
      ))}
    </div>
  );
}