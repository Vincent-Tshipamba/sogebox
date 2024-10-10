<?php

namespace Database\Seeders;

use App\Models\Reunion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReunionSeeder extends Seeder
{
    public function run(): void
    {
        Reunion::factory(100)->create();
    }
}
