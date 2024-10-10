<?php

namespace Database\Seeders;

use App\Models\RendezVous;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RendezVousSeeder extends Seeder
{
    public function run(): void
    {
        RendezVous::factory(100)->create();
    }
}
