<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ApprobationFactory extends Factory
{
    public function definition(): array
    {
        return [
            'validation' => $this->faker->word(),
            'date' => $this->faker->date(),
            'bon_id' => \App\Models\Bon::factory(), // Utilisation de la factory de Bon
        ];
    }
}
