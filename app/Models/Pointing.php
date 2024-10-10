<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pointing extends Model
{
    use HasFactory;

    protected $fillable = [
        '_id',
        'employe_id',
        'date',
        'heure_arrivee',
        'heure_depart',
        'observation'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->_id = (string) Str::uuid();
        });
    }

    public function employe(): BelongsTo
    {
        return $this->belongsTo(Employe::class);
    }
}
