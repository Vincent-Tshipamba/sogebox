<?php

namespace Database\Factories;

use App\Models\Produit;
use App\Models\Projet;
use Illuminate\Database\Eloquent\Factories\Factory;

class ResumeFactory extends Factory
{
    public function definition(): array
    {
        return [
            'produit_id' => Produit::factory(),
            'projet_id' => Projet::factory(),
            'quantite' => $this->faker->numberBetween(1, 100)
        ];
    }
}
