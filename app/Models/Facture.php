<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Facture extends Model
{
    use HasFactory;

    protected $fillable = [
        '_id',
        'compteur_journalier',
        'numero_facture',
        'commande_id',
        'client_id',
        'date_facture',
        'montant',
        'statut'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($facture) {
            $facture->_id = (string) Str::uuid();

            $currentDate = date('Ymd');

            // Vérifier s'il existe déjà des factures pour aujourd'hui
            $lastFacture = Facture::whereDate('date_facture', now())->orderBy('compteur_journalier', 'desc')->first();

            // Si une facture existe, incrémenter le compteur
            if ($lastFacture) {
                $compteurJournalier = $lastFacture->compteur_journalier + 1;
            } else {
                // Sinon, démarrer le compteur à 1
                $compteurJournalier = 1;
            }

            // Affecter la date et le compteur
            $facture->date_facture = now();
            $facture->compteur_journalier = $compteurJournalier;

            // Générer le numéro de facture
            $facture->numero_facture = 'SOG-' . $currentDate . '-' . str_pad($compteurJournalier, 6, '0', STR_PAD_LEFT);
        });
    }

    public function commande(): BelongsTo
    {
        return $this->belongsTo(Facture::class);
    }

    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }
}
