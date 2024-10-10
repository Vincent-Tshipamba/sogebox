<?php

namespace Database\Seeders;

use App\Models\CongeExamine;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CongeExamineSeeder extends Seeder
{
    public function run(): void
    {
        CongeExamine::factory(100)->create();
    }
}
