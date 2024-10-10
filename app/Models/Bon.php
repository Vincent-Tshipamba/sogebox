<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Bon extends Model
{
    use HasFactory;

    protected $fillable = [
        '_id',
        'motif',
        'montant',
        'employe_id',
        'type_bon_id'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->_id = (string) Str::uuid();
        });
    }

    public function type_bon(): BelongsTo
    {
        return $this->belongsTo(TypeBon::class);
    }

    public function employe(): BelongsTo
    {
        return $this->belongsTo(Employe::class);
    }

    public function approbations(): HasMany
    {
        return $this->hasMany(Approbation::class);
    }
}
