<?php

namespace Database\Factories;

use App\Models\Projet;
use Illuminate\Database\Eloquent\Factories\Factory;

class SousTraitanceFactory extends Factory
{
    public function definition(): array
    {
        return [
            'projet_id' => Projet::factory(), // Utilisation de la factory de Projet
            'service' => $this->faker->word(), // Service aléatoire
            'fournisseur' => $this->faker->company(), // Fournisseur aléatoire
        ];
    }
}
