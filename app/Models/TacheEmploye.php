<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TacheEmploye extends Model
{
    use HasFactory;

    protected $fillable = [
        '_id',
        'employe_id',
        'tache_id',
    ];

    public static function boot()
    {
        parent::boot();
        static::creating(function($model){
            $model->_id = (string) Str::uuid();
        });
    }

    public function employe(): BelongsTo
    {
        return $this->belongsTo(Employe::class);
    }

    public function tache(): BelongsTo
    {
        return $this->belongsTo(Tache::class);
    }
}
