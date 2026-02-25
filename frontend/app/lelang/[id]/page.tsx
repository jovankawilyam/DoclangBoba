'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { formatRupiah, formatDate, getStatusColor } from '../../lib/utils';

interface Lelang {
  id: number;
  judul: string;
  deskripsi: string;
  lokasi: string;
  harga_awal: number;
  tanggal_lelang: string;
  status: 'upcoming' | 'ongoing' | 'selesai';
  created_at: string;
  updated_at: string;
}

export default function DetailLelangPage() {
  const params = useParams();
  const id = params.id as string;

  const [lelang, setLelang] = useState<Lelang | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLelang = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/lelang/${id}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Lelang tidak ditemukan');
          }
          throw new Error('Gagal memuat detail lelang');
        }

        const data = await response.json();
        setLelang(data.data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Terjadi kesalahan saat memuat data'
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchLelang();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button Skeleton */}
          <div className="h-6 bg-slate-200 rounded animate-pulse w-20 mb-8"></div>

          {/* Header Skeleton */}
          <div className="bg-white rounded-lg border border-slate-200 p-8 mb-8">
            <div className="h-8 bg-slate-200 rounded animate-pulse w-3/4 mb-4"></div>
            <div className="h-6 bg-slate-200 rounded animate-pulse w-1/2 mb-4"></div>
            <div className="h-4 bg-slate-200 rounded animate-pulse w-full"></div>
          </div>

          {/* Content Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <div className="h-6 bg-slate-200 rounded animate-pulse w-1/4 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-slate-200 rounded animate-pulse w-full"></div>
                  <div className="h-4 bg-slate-200 rounded animate-pulse w-full"></div>
                  <div className="h-4 bg-slate-200 rounded animate-pulse w-3/4"></div>
                </div>
              </div>
            </div>

            {/* Info Card Skeleton */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 h-fit">
              <div className="h-8 bg-slate-200 rounded animate-pulse w-full mb-4"></div>
              <div className="space-y-3">
                <div className="h-6 bg-slate-200 rounded animate-pulse w-3/4"></div>
                <div className="h-6 bg-slate-200 rounded animate-pulse w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/lelang"
            className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block"
          >
            ← Kembali ke Daftar
          </Link>

          <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
            <div className="text-5xl mb-4">❌</div>
            <h1 className="text-2xl font-bold text-red-900 mb-2">
              {error}
            </h1>
            <p className="text-red-700 mb-6">
              Lelang yang Anda cari tidak dapat ditampilkan atau tidak ditemukan.
            </p>
            <Link
              href="/lelang"
              className="px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors inline-block"
            >
              Lihat Lelang Lainnya
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!lelang) {
    return null;
  }

  const statusColor = getStatusColor(lelang.status);

  return (
    <div className="min-h-screen py-12 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/lelang"
          className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-flex items-center gap-2 transition-colors"
        >
          ← Kembali ke Daftar
        </Link>

        {/* Header Card */}
        <div className="bg-white rounded-lg border border-slate-200 p-8 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h1 className="text-4xl font-bold text-slate-900">{lelang.judul}</h1>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${statusColor}`}>
              {lelang.status === 'upcoming' && 'Akan Datang'}
              {lelang.status === 'ongoing' && 'Berlangsung'}
              {lelang.status === 'selesai' && 'Selesai'}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <span className="text-xl">📍</span>
              <p className="font-medium">{lelang.lokasi}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">📅</span>
              <p className="font-medium">{formatDate(lelang.tanggal_lelang)}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Description */}
          <div className="md:col-span-2 space-y-6">
            {/* Detail Section */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Deskripsi Barang
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-wrap">
                {lelang.deskripsi}
              </p>
            </div>

            {/* Info Grid */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Informasi Lelang
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold mb-2">
                    Status
                  </p>
                  <p className="text-lg font-medium text-slate-900">
                    {lelang.status === 'upcoming' && 'Akan Datang'}
                    {lelang.status === 'ongoing' && 'Berlangsung'}
                    {lelang.status === 'selesai' && 'Selesai'}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold mb-2">
                    Harga Awal
                  </p>
                  <p className="text-lg font-bold text-blue-600">
                    {formatRupiah(lelang.harga_awal)}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold mb-2">
                    Tanggal Lelang
                  </p>
                  <p className="text-lg font-medium text-slate-900">
                    {formatDate(lelang.tanggal_lelang)}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold mb-2">
                    Lokasi
                  </p>
                  <p className="text-lg font-medium text-slate-900">
                    {lelang.lokasi}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold mb-2">
                    Dipublikasikan
                  </p>
                  <p className="text-lg font-medium text-slate-900">
                    {formatDate(lelang.created_at)}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500 uppercase font-semibold mb-2">
                    Terakhir Diupdate
                  </p>
                  <p className="text-lg font-medium text-slate-900">
                    {formatDate(lelang.updated_at)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            {/* Price Card */}
            <div className="bg-linear-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-6 mb-6 sticky top-20">
              <p className="text-sm text-blue-600 uppercase font-semibold mb-2">
                Harga Awal
              </p>
              <p className="text-4xl font-bold text-blue-600 mb-6">
                {formatRupiah(lelang.harga_awal)}
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3">
                Ikuti Lelang
              </button>
              <p className="text-xs text-blue-700 text-center">
                {lelang.status === 'upcoming' && 'Lelang dimulai pada tanggal yang ditentukan'}
                {lelang.status === 'ongoing' && 'Lelang sedang berlangsung, jangan sampai ketinggalan!'}
                {lelang.status === 'selesai' && 'Lelang ini telah selesai'}
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Butuh Bantuan?
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-slate-500 uppercase font-semibold mb-1">
                    Email
                  </p>
                  <p className="text-slate-900 font-medium">info@kpknl.go.id</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-semibold mb-1">
                    Telepon
                  </p>
                  <p className="text-slate-900 font-medium">(021) 1234-5678</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Lelang */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Lelang Lainnya
          </h2>
          <Link
            href="/lelang"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            Lihat Semua Lelang
          </Link>
        </div>
      </div>
    </div>
  );
}