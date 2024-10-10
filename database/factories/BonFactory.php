<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BonFactory extends Factory
{
    public function definition(): array
    {
        return [
            'motif' => $this->faker->sentence(),
            'montant' => $this->faker->randomFloat(2, 10, 1000), // Montant entre 10 et 1000
            'employe_id' => \App\Models\Employe::factory(), // Utilisation de la factory de Employe
            'type_bon_id' => \App\Models\TypeBon::factory(), // Utilisation de la factory de TypeBon
        ];

    }
}
