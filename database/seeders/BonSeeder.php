<?php

namespace Database\Seeders;

use App\Models\Bon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BonSeeder extends Seeder
{
    public function run(): void
    {
        Bon::factory(100)->create();
    }
}
