<?php

namespace Database\Factories;

use App\Models\Conge;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CongeExamineFactory extends Factory
{
    public function definition(): array
    {
        return [
            'conge_id' => Conge::factory(),
            'user_id' => User::factory(),
        ];
    }
}
