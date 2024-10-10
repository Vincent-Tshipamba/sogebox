<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        '_id',
        'id_compte_debit',
        'id_compte_credit',
        'montant',
        'description',
        'date_transaction'
    ] ;

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->_id = (string) Str::uuid();
        });
    }

    public function depense(): BelongsTo
    {
        return $this->belongsTo(Depense::class, 'id_compte_debit', 'id');
    }

    public function recette(): BelongsTo
    {
        return $this->belongsTo(Recette::class, 'id_compte_credit', 'id');
    }
}
