'use client';

import { useEffect, useState } from 'react';
import CardLelang from '../components/CardLelang';

interface Lelang {
  id: number;
  judul: string;
  deskripsi: string;
  lokasi: string;
  harga_awal: number;
  tanggal_lelang: string;
  status: 'upcoming' | 'ongoing' | 'selesai';
}

interface PaginatedResponse {
  data: Lelang[];
  meta: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
  };
}

export default function LelangPage() {
  const [lelangs, setLelangs] = useState<Lelang[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState<'all' | 'upcoming' | 'ongoing' | 'selesai'>('all');

  const fetchLelangs = async (page: number, status: string) => {
    try {
      setLoading(true);
      setError(null);

      let url = `${process.env.NEXT_PUBLIC_API_URL}/lelang?page=${page}&per_page=9`;
      if (status !== 'all') {
        url += `&status=${status}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Gagal memuat data lelang');
      }

      const data: PaginatedResponse = await response.json();
      setLelangs(data.data);
      setTotalPages(data.meta.last_page);
      setCurrentPage(page);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Terjadi kesalahan saat memuat data'
      );
      setLelangs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLelangs(1, statusFilter);
  }, [statusFilter]);

  const handleStatusChange = (status: 'all' | 'upcoming' | 'ongoing' | 'selesai') => {
    setStatusFilter(status);
  };

  const handlePageChange = (page: number) => {
    fetchLelangs(page, statusFilter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Daftar Lelang
          </h1>
          <p className="text-lg text-slate-600">
            Jelajahi semua lelang barang milik negara yang tersedia
          </p>
        </div>

        {/* Filter Status */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {(['all', 'upcoming', 'ongoing', 'selesai'] as const).map((status) => (
              <button
                key={status}
                onClick={() => handleStatusChange(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  statusFilter === status
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {status === 'all' && 'Semua'}
                {status === 'upcoming' && 'Akan Datang'}
                {status === 'ongoing' && 'Berlangsung'}
                {status === 'selesai' && 'Selesai'}
              </button>
            ))}
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <p className="text-red-800 font-medium">⚠️ {error}</p>
            <button
              onClick={() => fetchLelangs(currentPage, statusFilter)}
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Coba Lagi
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden"
              >
                <div className="p-4 space-y-3">
                  <div className="h-6 bg-slate-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-slate-200 rounded animate-pulse w-full"></div>
                  <div className="h-4 bg-slate-200 rounded animate-pulse w-2/3"></div>
                </div>
                <div className="p-4 bg-slate-50 space-y-2">
                  <div className="h-4 bg-slate-200 rounded animate-pulse w-1/2"></div>
                  <div className="h-6 bg-slate-200 rounded animate-pulse w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && lelangs.length === 0 && !error && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Tidak ada lelang ditemukan
            </h2>
            <p className="text-slate-600 mb-6">
              Coba ubah filter atau periksa kembali nanti
            </p>
            <button
              onClick={() => handleStatusChange('all')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Lelang Grid */}
        {!loading && lelangs.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {lelangs.map((lelang) => (
                <CardLelang key={lelang.id} {...lelang} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  ← Sebelumnya
                </button>

                {[...Array(totalPages)].map((_, i) => {
                  const pageNum = i + 1;
                  // Show only nearby pages for better UX
                  if (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          pageNum === currentPage
                            ? 'bg-blue-600 text-white'
                            : 'border border-slate-300 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  } else if (
                    (pageNum === currentPage - 2 && pageNum > 1) ||
                    (pageNum === currentPage + 2 && pageNum < totalPages)
                  ) {
                    return (
                      <span key={pageNum} className="text-slate-500">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Selanjutnya →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
