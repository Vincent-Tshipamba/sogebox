<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PaiementFactory extends Factory
{
    public function definition(): array
    {
        return [
            'employe_id' => \App\Models\Employe::factory(), // Utilisation de la factory de Employe
            'date' => $this->faker->date(),
            'resume' => $this->faker->sentence(),
            'motif_paiement_id' => \App\Models\MotifPaiement::factory(), // Utilisation de la factory de MotifPaiement
        ];

    }
}
