'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [lelangCount, setLelangCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/lelang?per_page=1`)
      .then((res) => res.json())
      .then((data) => {
        setLelangCount(data.meta?.total || 0);
      })
      .catch(() => setLelangCount(0))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Platform Lelang Negara KPKNL
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Temukan barang-barang pilihan milik negara dengan harga terjangkau.
              Transparan, aman, dan terpercaya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/lelang"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block text-center"
              >
                Lihat Lelang Sekarang
              </Link>
              <a
                href="#info"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-block text-center"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {loading ? '-' : lelangCount}
              </div>
              <p className="text-slate-600 font-medium">Lelang Tersedia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-slate-600 font-medium">Transparan</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <p className="text-slate-600 font-medium">Akses Mudah</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Mengapa Memilih DocLang Boba?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Pencarian Mudah
              </h3>
              <p className="text-slate-600">
                Temukan lelang yang Anda cari dengan filter lokasi, harga, dan status yang fleksibel.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Aman & Terpercaya
              </h3>
              <p className="text-slate-600">
                Platform resmi KPKNL dengan jaminan keamanan transaksi dan data pribadi Anda.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Akses Kapan Saja
              </h3>
              <p className="text-slate-600">
                Akses dari perangkat apa pun, kapan pun. Responsive dan cepat di semua ukuran layar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Memulai?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Jangan lewatkan kesempatan mendapatkan barang berkualitas dengan harga terbaik.
            Jelajahi lelang kami sekarang.
          </p>
          <Link
            href="/lelang"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Lihat Semua Lelang
          </Link>
        </div>
      </section>
    </div>
  );
}