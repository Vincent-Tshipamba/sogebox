<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Produit extends Model
{
    use HasFactory;
    protected $fillable = [
        '_id',
        'categorie_produit_id',
        'produits',
        'quantite_en_stock',
        'description'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->_id = (string) Str::uuid();
        });
    }
    
    public function categorie_produit(): BelongsTo
    {
        return $this->belongsTo(CategorieProduit::class);
    }

    public function inventaires(): HasMany
    {
        return $this->hasMany(Inventaire::class);
    }

    public function resumes(): HasMany
    {
        return $this->hasMany(related: Resume::class);
    }
}
