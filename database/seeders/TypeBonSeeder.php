<?php

namespace Database\Seeders;

use App\Models\TypeBon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypeBonSeeder extends Seeder
{
    public function run(): void
    {
        TypeBon::factory(100)->create();
    }
}
