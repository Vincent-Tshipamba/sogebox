<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RecetteFactory extends Factory
{
    public function definition(): array
    {
        return [
            'compte_id' => \App\Models\Compte::factory(), // Utilisation de la factory de Compte
            'description' => $this->faker->sentence,
            'montant' => $this->faker->randomFloat(2, 10, 1000), // Montant entre 10 et 1000
            'date_recette' => $this->faker->date(),
            'categorie' => $this->faker->word,
        ];
    }
}
