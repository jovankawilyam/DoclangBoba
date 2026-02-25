/**
 * Format angka menjadi format Rupiah
 * @param amount - Jumlah uang
 * @returns String format Rupiah
 */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format tanggal ke format Indonesia
 * @param date - Tanggal yang akan diformat
 * @returns String tanggal format Indonesia
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Mendapatkan warna badge status
 * @param status - Status lelang
 * @returns Class Tailwind untuk badge
 */
export function getStatusColor(
  status: 'upcoming' | 'ongoing' | 'selesai'
): string {
  switch (status) {
    case 'upcoming':
      return 'bg-blue-100 text-blue-800';
    case 'ongoing':
      return 'bg-green-100 text-green-800';
    case 'selesai':
      return 'bg-slate-100 text-slate-800';
    default:
      return 'bg-slate-100 text-slate-800';
  }
}

/**
 * Validasi format email
 * @param email - Email yang akan divalidasi
 * @returns Boolean
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Truncate text dengan ellipsis
 * @param text - Teks yang akan dipotong
 * @param length - Panjang maksimal karakter
 * @returns Teks yang sudah dipotong
 */
export function truncateText(text: string, length: number): string {
  return text.length > length ? text.substring(0, length) + '...' : text;
}

/**
 * Delay untuk async/await
 * @param ms - Milliseconds
 * @returns Promise yang resolve setelah delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
