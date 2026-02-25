<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateLelangRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'judul' => 'sometimes|required|string|max:255',
            'deskripsi' => 'sometimes|required|string|min:10',
            'lokasi' => 'sometimes|required|string|max:255',
            'harga_awal' => 'sometimes|required|integer|min:1000',
            'tanggal_lelang' => 'sometimes|required|date|after_or_equal:today',
            'status' => 'sometimes|required|in:upcoming,ongoing,selesai',
        ];
    }

    public function messages(): array
    {
        return [
            'judul.max' => 'Judul tidak boleh lebih dari 255 karakter',
            'deskripsi.min' => 'Deskripsi minimal 10 karakter',
            'harga_awal.min' => 'Harga awal minimal 1000',
            'tanggal_lelang.after_or_equal' => 'Tanggal lelang tidak boleh di masa lalu',
            'status.in' => 'Status harus salah satu dari: upcoming, ongoing, selesai',
        ];
    }
}
