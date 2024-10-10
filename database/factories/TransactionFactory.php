<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TransactionFactory extends Factory
{
    public function definition(): array
    {
        return [
            'id_compte_debit' => \App\Models\Depense::factory(), // Utilisation de la factory de Depense
            'id_compte_credit' => \App\Models\Recette::factory(), // Utilisation de la factory de Recette
            'montant' => $this->faker->randomFloat(2, 10, 1000), // Montant entre 10 et 1000
            'description' => $this->faker->sentence(),
            'date_transaction' => $this->faker->date(),
        ];

    }
}
