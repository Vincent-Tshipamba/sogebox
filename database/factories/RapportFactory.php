<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RapportFactory extends Factory
{
    public function definition(): array
    {
        return [
            'employe_id' => \App\Models\Employe::factory(), // Utilisation de la factory de Employe
            'resume' => $this->faker->paragraph(),
        ];

    }
}
