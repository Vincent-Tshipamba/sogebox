<?php

namespace Database\Seeders;

use App\Models\MotifPaiement;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MotifPaiementSeeder extends Seeder
{
    public function run(): void
    {
        MotifPaiement::factory(100)->create();
    }
}
