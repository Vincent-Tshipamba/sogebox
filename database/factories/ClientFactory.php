<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ClientFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nom' => $this->faker->company(), // Nom d'une entreprise
            'type_client' => $this->faker->randomElement(['Particulier', 'Entreprise']),
            'telephone' => $this->faker->phoneNumber(),
            'email' => $this->faker->unique()->safeEmail(),
            'adresse' => $this->faker->address(),
            'images' => $this->faker->imageUrl(), // URL d'une image
        ];
    }
}
