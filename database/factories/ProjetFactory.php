<?php

namespace Database\Factories;

use App\Models\Commande;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjetFactory extends Factory
{
    public function definition(): array
    {
        return [
            'commande_id' => Commande::factory(), // Utilisation de la factory de Commande
            'temps' => $this->faker->word(), // Temps aléatoire (peut être ajusté selon vos besoins)
            'resume' => $this->faker->text(200), // Résumé aléatoire
            'statut' => $this->faker->randomElement(['en cours', 'terminé', 'annulé']), // Statut aléatoire
            'date_echeance' => $this->faker->date(), // Date d'échéance aléatoire
        ];
    }
}
