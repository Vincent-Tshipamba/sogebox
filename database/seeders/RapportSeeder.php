<?php

namespace Database\Seeders;

use App\Models\Rapport;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RapportSeeder extends Seeder
{
    public function run(): void
    {
        Rapport::factory(100)->create();
    }
}
