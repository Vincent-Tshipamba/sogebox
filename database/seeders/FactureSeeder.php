<?php

namespace Database\Seeders;

use App\Models\Facture;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FactureSeeder extends Seeder
{
    public function run(): void
    {
        Facture::factory(100)->create();
    }
}
