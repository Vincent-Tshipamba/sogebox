<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('employes', function (Blueprint $table) {
            $table->id();
            $table->uuid('_id')->unique();
            $table->string('nom');
            $table->string('postnom');
            $table->string('prenom');
            $table->string('genre');
            $table->string('etat_civil');
            $table->string('nationalite');
            $table->date('date_naissance');
            $table->text('adresse_physique');
            $table->string('telephone');
            $table->date('date_embauche');
            $table->string('salaire');
            $table->string('poste');
            $table->boolean('est_chef')->default(false);
            $table->foreignId('departement_id')
                ->constrained()
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('employes');
    }
};
