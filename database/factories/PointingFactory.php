<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PointingFactory extends Factory
{
    public function definition(): array
    {
        return [
            'employe_id' => \App\Models\Employe::factory(), // Utilisation de la factory de Employe
            'date' => $this->faker->date(),
            'heure_arrivee' => $this->faker->time(),
            'heure_depart' => $this->faker->time(),
            'observation' => $this->faker->optional()->sentence(), // Observation peut être nul
        ];

    }
}
