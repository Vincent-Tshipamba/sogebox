<?php

namespace App\Models;

use App\Models\Depense;
use App\Models\Recette;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Compte extends Model
{
    use HasFactory;

    protected $fillable = [
        '_id',
        'nom_compte',
        'type_compte',
        'solde_initial',
        'solde_actuel'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->_id = (string) Str::uuid();
        });
    }

    public function depenses(): HasMany
    {
        return $this->hasMany(Depense::class);
    }

    public function recettes(): HasMany
    {
        return $this->hasMany(Recette::class);
    }
}
