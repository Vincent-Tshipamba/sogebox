<?php

namespace Database\Seeders;

use App\Models\Approbation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ApprobationSeeder extends Seeder
{
    public function run(): void
    {
        Approbation::factory(100)->create();
    }
}
