'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4">DocLang Boba</h3>
            <p className="text-sm text-slate-400">
              Platform lelang negara resmi KPKNL untuk transparansi dan kemudahan masyarakat umum.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/lelang" className="hover:text-white transition-colors">
                  Daftar Lelang
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Bantuan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Panduan Lelang
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Kontak Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@kpknl.go.id</li>
              <li>Telepon: (021) 1234-5678</li>
              <li>Lokasi: Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; {currentYear} DocLang Boba. Semua hak dilindungi.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">
                Twitter
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Facebook
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
