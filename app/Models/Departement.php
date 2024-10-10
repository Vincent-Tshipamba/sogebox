<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Departement extends Model
{
    use HasFactory;

    protected $fillable = [
        '_id',
        'libelle'
    ] ;

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->_id)) {
                $model->_id = (string) Str::uuid(); // Generate UUID for _id
            }
        });
    }

    public function employes(): HasMany
    {
        return $this->hasMany(Employe::class);
    }
}
