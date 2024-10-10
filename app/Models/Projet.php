<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Projet extends Model
{

    use HasFactory;
    protected $fillable = [
        '_id',
        'commande_id',
        'temps',
        'resume',
        'statut',
        'date_echeance'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->_id = (string) Str::uuid();
        });
    }

    public function resumes(): HasMany
    {
        return $this->hasMany(Resume::class);
    }

    public function commande(): BelongsTo
    {
        return $this->belongsTo(Commande::class);
    }

    public function livraisons(): HasMany
    {
        return $this->hasMany(Livraison::class);
    }

    public function sous_traitances(): HasMany
    {
        return $this->hasMany(SousTraitance::class);
    }

    public function taches(): HasMany
    {
        return $this->hasMany(Tache::class);
    }

}
