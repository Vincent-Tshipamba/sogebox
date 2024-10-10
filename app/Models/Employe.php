<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Employe extends Model
{
    use HasFactory;

    protected $fillable = [
        '_id',
        'nom',
        'postnom',
        'prenom',
        'genre',
        'etat_civil',
        'nationalite',
        'date_naissance',
        'adresse_physique',
        'telephone',
        'date_embauche',
        'salaire',
        'poste',
        'est_chef',
        'departement_id'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->_id = (string) Str::uuid();
        });
    }

    public function departement(): BelongsTo
    {
        return $this->belongsTo(Departement::class);
    }

    public function rapports(): HasMany
    {
        return $this->hasMany(Rapport::class);
    }

    public function paiments(): HasMany
    {
        return $this->hasMany(Paiement::class);
    }

    public function pointings(): HasMany
    {
        return $this->hasMany(Pointing::class);
    }

    public function conges(): HasMany
    {
        return $this->hasMany(Conge::class);
    }

    public function reunions(): BelongsToMany
    {
        return $this->belongsToMany(Reunion::class, 'participants', 'employe_id', 'reunion_id');
    }

    public function bons(): HasMany
    {
        return $this->hasMany(Bon::class);
    }

    public function taches(): BelongsToMany
    {
        return $this->belongsToMany(Tache::class, 'tache_employes', 'employe_id', 'tache_id');
    }
}
