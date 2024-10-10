<?php

namespace Database\Seeders;

use App\Models\Inventaire;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class InventaireSeeder extends Seeder
{
    public function run(): void
    {
        Inventaire::factory(100)->create();
    }
}
