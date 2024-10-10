<?php

namespace Database\Factories;

use App\Models\Commande;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommandeFactory extends Factory
{
    public function definition(): array
    {
        return [
            'date_commande' => $this->faker->date(),
            'statut' => $this->faker->randomElement(['Livrée', 'Annulée', 'En attente']), // Statut aléatoire
            'frais_main_oeuvre' => $this->faker->numberBetween(1, 1000),
            'frais_livraison' => $this->faker->numberBetween(1, 1000),
            'client_id' => \App\Models\Client::factory(), // Utilisation de la factory de Client
        ];
    }
}
