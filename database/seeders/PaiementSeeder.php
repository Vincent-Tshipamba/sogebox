<?php

namespace Database\Seeders;

use App\Models\Paiement;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaiementSeeder extends Seeder
{
    public function run(): void
    {
        Paiement::factory(100)->create();
    }
}
