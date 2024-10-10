<?php

namespace Database\Seeders;

use App\Models\Conge;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CongeSeeder extends Seeder
{
    public function run(): void
    {
        Conge::factory(100)->create();
    }
}
