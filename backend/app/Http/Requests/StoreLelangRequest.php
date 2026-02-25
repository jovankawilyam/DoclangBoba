<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLelangRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string|min:10',
            'lokasi' => 'required|string|max:255',
            'harga_awal' => 'required|integer|min:1000',
            'tanggal_lelang' => 'required|date|after_or_equal:today',
            'status' => 'required|in:upcoming,ongoing,selesai',
        ];
    }

    public function messages(): array
    {
        return [
            'judul.required' => 'Judul lelang harus diisi',
            'judul.max' => 'Judul tidak boleh lebih dari 255 karakter',
            'deskripsi.required' => 'Deskripsi harus diisi',
            'deskripsi.min' => 'Deskripsi minimal 10 karakter',
            'lokasi.required' => 'Lokasi harus diisi',
            'harga_awal.required' => 'Harga awal harus diisi',
            'harga_awal.min' => 'Harga awal minimal 1000',
            'tanggal_lelang.required' => 'Tanggal lelang harus diisi',
            'tanggal_lelang.after_or_equal' => 'Tanggal lelang tidak boleh di masa lalu',
            'status.required' => 'Status harus diisi',
            'status.in' => 'Status harus salah satu dari: upcoming, ongoing, selesai',
        ];
    }
}
