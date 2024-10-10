<?php

namespace Database\Factories;

use App\Models\Employe;
use App\Models\Reunion;
use Illuminate\Database\Eloquent\Factories\Factory;

class ParticipantFactory extends Factory
{
    public function definition(): array
    {
        return [
            'employe_id' => Employe::factory(), // Utilisation de la factory de Employe
            'reunion_id' => Reunion::factory(), // Utilisation de la factory de Reunion
        ];
    }
}
