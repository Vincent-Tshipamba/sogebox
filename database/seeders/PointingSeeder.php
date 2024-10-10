<?php

namespace Database\Seeders;

use App\Models\Pointing;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PointingSeeder extends Seeder
{
    public function run(): void
    {
        Pointing::factory(100)->create();
    }
}
