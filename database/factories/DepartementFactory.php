<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class DepartementFactory extends Factory
{
    public function definition(): array
    {
        return [
            'libelle' => $this->faker->word(),
        ];
    }
}
