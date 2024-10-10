<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nom' => $this->faker->lastName(),
            'postnom' => $this->faker->lastName(),
            'prenom' => $this->faker->firstName(),
            'genre' => $this->faker->randomElement(['Masculin', 'Féminin']),
            'etat_civil' => $this->faker->randomElement(['Célibataire', 'Marié', 'Divorcé']),
            'nationalite' => $this->faker->country(),
            'date_naissance' => $this->faker->date(),
            'adresse_physique' => $this->faker->address(),
            'telephone' => $this->faker->phoneNumber(),
            'date_embauche' => $this->faker->date(),
            'salaire' => $this->faker->randomFloat(2, 1000, 5000), // Salaire entre 1000 et 5000
            'poste' => $this->faker->word(),
            'departement_id' => \App\Models\Departement::factory(), // Utilisation de la factory de Departement
        ];

    }
}
