<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ModeLivraison extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'libelle'
    ];

    public function livraisons(): HasMany
    {
        return $this->hasMany(Livraison::class);
    }
}
