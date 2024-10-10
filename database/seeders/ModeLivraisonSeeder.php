<?php

namespace Database\Seeders;

use App\Models\ModeLivraison;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ModeLivraisonSeeder extends Seeder
{
    public function run(): void
    {
        ModeLivraison::factory(100)->create();
    }
}
