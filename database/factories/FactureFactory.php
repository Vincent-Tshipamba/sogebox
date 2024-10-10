<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Commande;
use Illuminate\Database\Eloquent\Factories\Factory;

class FactureFactory extends Factory
{
    public function definition(): array
    {
        return [
            'commande_id' => Commande::factory(), // Utilisation de la factory de Commande
            'client_id' => Client::factory(), // Utilisation de la factory de Client
            'montant' => $this->faker->randomFloat(2, 1, 1000), // Montant aléatoire
            'statut' => $this->faker->randomElement(['Payée', 'En attente', 'Annulée']), // Statut aléatoire
            'date_facture' => $this->faker->date(), // Date de paiement aléatoire
        ];
    }
}
