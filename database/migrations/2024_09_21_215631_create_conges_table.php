<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('conges', function (Blueprint $table) {
            $table->id();
            $table->uuid('_id')->unique();
            $table->foreignId('employe_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->date('date_debut');
            $table->date('date_fin');
            $table->text('motif');
            $table->string('statut')->default('Non examiné');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('conges');
    }
};
