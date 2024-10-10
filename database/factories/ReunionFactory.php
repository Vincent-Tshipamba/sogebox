<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ReunionFactory extends Factory
{
    public function definition(): array
    {
        return [
            'date' => $this->faker->date(),
            'sujet' => $this->faker->sentence(),
        ];
    }
}
