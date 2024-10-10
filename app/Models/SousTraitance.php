<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SousTraitance extends Model
{
    use HasFactory;

    protected $fillable = [
        '_id',
        'service',
        'fournisseur',
        'projet_id'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->_id = (string) Str::uuid();
        });
    }

    public function projet(): BelongsTo
    {
        return $this->belongsTo(Projet::class);
    }
}
