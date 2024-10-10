<?php

namespace App\Models;

use App\Models\Client;
use App\Models\Employe;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Commande extends Model
{
    use HasFactory;

    protected $fillable = [
        '_id',
        'compteur_journalier',
        'numero_commande',
        'date_commande',
        'frais_main_oeuvre',
        'frais_livraison',
        'statut',
        'client_id',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($commande) {
            $commande->_id = (string) Str::uuid();

            $currentDate = date('Ymd');

            // Vérifier s'il existe déjà des commandes pour aujourd'hui
            $lastCommande = Commande::whereDate('date_commande', now())->orderBy('compteur_journalier', 'desc')->first();

            // Si une commande existe, incrémenter le compteur
            if ($lastCommande) {
                $compteurJournalier = $lastCommande->compteur_journalier + 1;
            } else {
                // Sinon, démarrer le compteur à 1
                $compteurJournalier = 1;
            }

            // Affecter la date et le compteur
            $commande->date_commande = now();
            $commande->compteur_journalier = $compteurJournalier;

            // Générer le numéro de commande
            $commande->numero_commande = 'CMD-' . $currentDate . '-' . str_pad($compteurJournalier, 6, '0', STR_PAD_LEFT);
        });
    }


    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    public function projets(): HasMany
    {
        return $this->hasMany(Projet::class);
    }

    public function factures(): HasMany
    {
        return $this->hasMany(Facture::class);
    }

    public function produits(): BelongsToMany
    {
        return $this->belongsToMany(Produit::class, 'commande_produits', 'commande_id', 'produit_id')
            ->withPivot('quantite', 'prix_unitaire_negocie');
    }
}
