<?php

namespace Database\Seeders;

use App\Models\Livraison;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LivraisonSeeder extends Seeder
{
    public function run(): void
    {
        Livraison::factory(100)->create();
    }
}
