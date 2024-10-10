<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProduitFactory extends Factory
{
    public function definition(): array
    {
        return [
            'categorie_produit_id' => \App\Models\CategorieProduit::factory(), // Utilisation de la factory de CategorieProduit
            'produits' => $this->faker->word(),
            'quantite_en_stock' => $this->faker->numberBetween(1, 100), // Quantité entre 1 et 100
            'prix_unitaire' => $this->faker->randomFloat(2, 10, 10000),
            'description' => $this->faker->optional()->sentence(), // Description peut être nulle
        ];

    }
}
