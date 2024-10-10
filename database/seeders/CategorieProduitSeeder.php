<?php

namespace Database\Seeders;

use App\Models\CategorieProduit;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorieProduitSeeder extends Seeder
{
    public function run(): void
    {
        CategorieProduit::factory(100)->create();
    }
}
