<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ModeLivraison extends Model
{
    use HasFactory;

    protected $fillable = [
        '_id',
        'libelle'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->_id = (string) Str::uuid();
        });
    }

    public function livraisons(): HasMany
    {
        return $this->hasMany(Livraison::class);
    }
}
