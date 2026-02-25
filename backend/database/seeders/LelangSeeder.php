<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LelangSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('lelangs')->insert([
            [
                'judul' => 'Lelang Rumah Negara di Bandung',
                'deskripsi' => 'Rumah dinas tipe 45 dalam kondisi baik, berlokasi di area komersial dengan fasilitas lengkap. Termasuk garasi dan taman di halaman depan dan belakang.',
                'lokasi' => 'Bandung, Jawa Barat',
                'harga_awal' => 250000000,
                'tanggal_lelang' => now()->addDays(5),
                'status' => 'upcoming',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'judul' => 'Lelang Kendaraan Operasional Pemerintah',
                'deskripsi' => 'Kendaraan operasional milik pemerintah, tipe SUV warna hitam, tahun 2020, mesin terawat, pajak baru. Kilometer rendah sekali, kondisi prima.',
                'lokasi' => 'Jakarta, DKI Jakarta',
                'harga_awal' => 150000000,
                'tanggal_lelang' => now(),
                'status' => 'ongoing',
                'created_at' => now()->subDays(2),
                'updated_at' => now(),
            ],
            [
                'judul' => 'Lelang Peralatan Kantor dan Furniture',
                'deskripsi' => 'Peralatan kantor bekas milik instansi pemerintah, berupa meja kerja, kursi, lemari, dan rak dokumen. Kondisi masih layak pakai untuk kebutuhan kantor modern.',
                'lokasi' => 'Surabaya, Jawa Timur',
                'harga_awal' => 25000000,
                'tanggal_lelang' => now()->subDays(7),
                'status' => 'selesai',
                'created_at' => now()->subDays(10),
                'updated_at' => now()->subDays(1),
            ],
            [
                'judul' => 'Lelang Tanah dan Bangunan Kantor Pemerintah',
                'deskripsi' => 'Tanah dan bangunan kantor pemerintah seluas 1000 m2, berlokasi strategis di pusat bisnis. Fasilitas lengkap dengan parkir, akses mudah dari jalan utama.',
                'lokasi' => 'Medan, Sumatera Utara',
                'harga_awal' => 2500000000,
                'tanggal_lelang' => now()->addDays(10),
                'status' => 'upcoming',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'judul' => 'Lelang Peralatan Laboratorium Bekas',
                'deskripsi' => 'Peralatan laboratorium bekas dari instansi negara, masih dalam kondisi berfungsi dengan baik. Cocok untuk sekolah, kampus, atau penelitian swasta.',
                'lokasi' => 'Yogyakarta, DI Yogyakarta',
                'harga_awal' => 75000000,
                'tanggal_lelang' => now()->addDays(2),
                'status' => 'upcoming',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'judul' => 'Lelang Motor Operasional Dinas',
                'deskripsi' => 'Motor operasional milik dinas, dalam kondisi prima, pajak hidup, mesin terawat. Spesifikasi standar dengan performa handal dan ekonomis.',
                'lokasi' => 'Semarang, Jawa Tengah',
                'harga_awal' => 15000000,
                'tanggal_lelang' => now()->subDays(3),
                'status' => 'ongoing',
                'created_at' => now()->subDays(5),
                'updated_at' => now(),
            ],
        ]);
    }
}