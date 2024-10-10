<?php

namespace Database\Seeders;

use App\Models\TacheEmploye;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TacheEmployeSeeder extends Seeder
{
    public function run(): void
    {
        TacheEmploye::factory(100)->create();
    }
}
