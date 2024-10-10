<?php

namespace Database\Seeders;

use App\Models\SousTraitance;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SousTraitanceSeeder extends Seeder
{
    public function run(): void
    {
        SousTraitance::factory(100)->create();
    }
}
