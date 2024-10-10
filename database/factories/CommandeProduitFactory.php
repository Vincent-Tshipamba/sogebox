<?php

namespace Database\Factories;

use App\Models\Produit;
use App\Models\Commande;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommandeProduitFactory extends Factory
{
    public function definition(): array
    {
        return [
            'quantite' => $this->faker->numberBetween(1, 5000),
            'prix_unitaire_negocie' =>  $this->faker->randomFloat(2, 1000, 10000),
            'commande_id' => Commande::factory(),
            'produit_id' => Produit::factory()
        ];
    }
}
