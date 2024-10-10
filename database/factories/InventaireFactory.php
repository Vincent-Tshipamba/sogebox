<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class InventaireFactory extends Factory
{
    public function definition(): array
    {
        return [
            'produit_id' => \App\Models\Produit::factory(), // Utilisation de la factory de Produit
            'mouvement' => $this->faker->word(),
            'quantite' => $this->faker->numberBetween(1, 100), // Quantité entre 1 et 100
        ];
    }
}
