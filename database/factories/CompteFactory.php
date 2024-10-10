<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CompteFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nom_compte' => $this->faker->word(),
            'type_compte' => $this->faker->randomElement(['Épargne', 'Courant', 'Investissement']),
            'solde_initial' => $this->faker->randomFloat(2, 100, 10000), // Solde initial entre 100 et 10,000
            'solde_actuel' => $this->faker->randomFloat(2, 100, 10000), // Solde actuel entre 100 et 10,000
        ];
    }
}
