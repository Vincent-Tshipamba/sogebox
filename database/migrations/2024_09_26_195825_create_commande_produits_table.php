<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('commande_produits', function (Blueprint $table) {
            $table->id();
            $table->uuid('_id')->unique();
            $table->decimal('prix_unitaire_negocie')->nullable();
            $table->integer('quantite');
            $table->foreignId('commande_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('produit_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('commande_produits');
    }
};
