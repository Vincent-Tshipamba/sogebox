<?php

namespace Database\Factories;

use App\Models\Tache;
use App\Models\Employe;
use Illuminate\Database\Eloquent\Factories\Factory;

class TacheEmployeFactory extends Factory
{
    public function definition(): array
    {
        return [
            'tache_id' => Tache::factory(),
            'employe_id' => Employe::factory()
        ];
    }
}
