<?php

namespace Database\Factories;

use App\Models\Projet;
use App\Models\Employe;
use Illuminate\Database\Eloquent\Factories\Factory;

class TacheFactory extends Factory
{
    public function definition(): array
    {
        return [
            'employe_id' => Employe::factory(), // Utilisation de la factory de Employe
            'projet_id' => Projet::factory(), // Utilisation de la factory de Projet
            'date' => $this->faker->date(),
            'statut' => $this->faker->randomElement(['en cours', 'terminée', 'à faire']), // Statut aléatoire
            'description' => $this->faker->text(200), // Description de 200 caractères
        ];
    }
}
