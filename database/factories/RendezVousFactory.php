<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RendezVousFactory extends Factory
{
    public function definition(): array
    {
        return [
            'client_id' => \App\Models\Client::factory(), // Utilisation de la factory de Client
            'date' => $this->faker->date(),
            'resume' => $this->faker->sentence(),
        ];

    }
}
