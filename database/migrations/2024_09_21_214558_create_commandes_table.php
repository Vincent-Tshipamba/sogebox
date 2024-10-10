<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('commandes', function (Blueprint $table) {
            $table->id();
            $table->uuid('_id')->unique();
            $table->integer('compteur_journalier')->default(1);
            $table->string('numero_commande')->unique();
            $table->date('date_commande');
            $table->decimal('frais_main_oeuvre', 10,2)->default(0);
            $table->decimal('frais_livraison', 10,2)->default(0);
            $table->string('statut')->default('En attente');
            $table->foreignId('client_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('commandes');
    }
};
