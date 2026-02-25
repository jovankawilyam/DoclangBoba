<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lelang extends Model
{
    protected $fillable = [
        'judul',
        'deskripsi',
        'lokasi',
        'harga_awal',
        'tanggal_lelang',
        'status',
    ];

    protected $casts = [
        'tanggal_lelang' => 'date',
        'harga_awal' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}

