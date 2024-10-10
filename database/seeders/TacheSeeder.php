<?php

namespace Database\Seeders;

use App\Models\Tache;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TacheSeeder extends Seeder
{
    public function run(): void
    {
        Tache::factory(100)->create();
    }
}
