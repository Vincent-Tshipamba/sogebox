<?php

namespace Database\Seeders;

use App\Models\Depense;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepenseSeeder extends Seeder
{
    public function run(): void
    {
        Depense::factory(100)->create();
    }
}
