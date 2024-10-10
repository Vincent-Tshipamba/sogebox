<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Conge extends Model
{
    use HasFactory;

    protected $fillable = [
        '_id',
        'employe_id',
        'date_debut',
        'date_fin',
        'motif',
        'statut'
    ] ;

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

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'conge_examines', 'conge_id', 'user_id');
    }
}
