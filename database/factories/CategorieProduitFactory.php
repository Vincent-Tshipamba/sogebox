<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CategorieProduitFactory extends Factory
{
    public function definition(): array
    {
        return [
            'libelle' => $this->faker->sentence(3, true)
        ];
    }
}
