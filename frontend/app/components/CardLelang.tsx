'use client';

import Link from 'next/link';
import { formatRupiah, getStatusColor } from '../lib/utils';

interface CardLelangProps {
  id: number;
  judul: string;
  deskripsi: string;
  lokasi: string;
  harga_awal: number;
  tanggal_lelang: string;
  status: 'upcoming' | 'ongoing' | 'selesai';
}

export default function CardLelang({
  id,
  judul,
  deskripsi,
  lokasi,
  harga_awal,
  tanggal_lelang,
  status,
}: CardLelangProps) {
  const statusColor = getStatusColor(status);
  const truncatedDeskripsi =
    deskripsi.length > 100 ? deskripsi.substring(0, 100) + '...' : deskripsi;

  return (
    <Link href={`/lelang/${id}`}>
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300 cursor-pointer h-full flex flex-col">
        {/* Header dengan Status */}
        <div className="p-4 border-b border-slate-100 flex justify-between items-start">
          <h3 className="text-lg font-bold text-slate-900 flex-1 line-clamp-2">
            {judul}
          </h3>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${statusColor}`}
          >
            {status === 'upcoming' && 'Akan Datang'}
            {status === 'ongoing' && 'Berlangsung'}
            {status === 'selesai' && 'Selesai'}
          </span>
        </div>

        {/* Body */}
        <div className="p-4 flex-1 flex flex-col gap-3">
          {/* Lokasi */}
          <div className="flex items-center gap-2 text-slate-600">
            <span className="text-xl">📍</span>
            <p className="text-sm font-medium">{lokasi}</p>
          </div>

          {/* Deskripsi */}
          <p className="text-sm text-slate-600 line-clamp-2">
            {truncatedDeskripsi}
          </p>

          {/* Tanggal Lelang */}
          <div className="flex items-center gap-2 text-slate-600">
            <span className="text-xl">📅</span>
            <p className="text-sm font-medium">
              {new Date(tanggal_lelang).toLocaleDateString('id-ID', {
                weekday: 'short',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>

        {/* Footer dengan Harga */}
        <div className="p-4 bg-slate-50 border-t border-slate-100">
          <p className="text-xs text-slate-500 mb-1">Harga Awal</p>
          <p className="text-xl font-bold text-blue-600">
            {formatRupiah(harga_awal)}
          </p>
        </div>
      </div>
    </Link>
  );
}
