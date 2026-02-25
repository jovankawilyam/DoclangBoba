'use client';

import { useEffect, useState } from 'react';

export default function Detail({ params }: { params: { id: string } }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/lelang/${params.id}`)
      .then(res => res.json())
      .then(setData);
  }, [params.id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{data.judul}</h1>
      <p>{data.deskripsi}</p>
      <p>{data.lokasi}</p>
      <p>Rp {data.harga_awal.toLocaleString()}</p>
      <p>Status: {data.status}</p>
      <p>Tanggal: {data.tanggal_lelang}</p>
    </div>
  );
}