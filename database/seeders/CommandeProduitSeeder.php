<?php

namespace Database\Seeders;

use App\Models\CommandeProduit;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommandeProduitSeeder extends Seeder
{
    public function run(): void
    {
        CommandeProduit::factory(100)->create();
    }
}
