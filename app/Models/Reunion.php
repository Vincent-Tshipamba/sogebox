<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Reunion extends Model
{
    use HasFactory;

    protected $fillable = [
        '_id',
        'date',
        'sujet'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->_id = (string) Str::uuid();
        });
    }

    public function employes(): BelongsToMany
    {
        return $this->belongsToMany(Employe::class, 'participants', 'reunion_id', 'employe_id');
    }
}
