<?php

namespace Database\Factories;

use App\Models\Projet;
use App\Models\ModeLivraison;
use Illuminate\Database\Eloquent\Factories\Factory;

class LivraisonFactory extends Factory
{
    public function definition(): array
    {
        return [
            'projet_id' => Projet::factory(), // Utilisation de la factory de Projet
            'date_debut' => $this->faker->date(),
            'date_echeance' => $this->faker->date(),
            'adresse_livraison' => $this->faker->address(),
            'mode_livraison_id' => ModeLivraison::factory(), // Utilisation de la factory de ModeLivraison
        ];
    }
}
