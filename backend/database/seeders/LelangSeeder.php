<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LelangSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('lelangs')->insert([
            'judul' => 'Lelang Rumah Negara',
            'deskripsi' => 'Rumah dinas tipe 45',
            'lokasi' => 'Bandung',
            'harga_awal' => 250000000,
            'tanggal_lelang' => now(),
            'status' => 'dibuka',
        ]);
    }
}