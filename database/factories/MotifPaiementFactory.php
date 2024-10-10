<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class MotifPaiementFactory extends Factory
{
    public function definition(): array
    {
        return [
            'libelle' => $this->faker->sentence(6, true),
        ];
    }
}
