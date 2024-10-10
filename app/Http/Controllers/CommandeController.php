<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Facture;
use App\Models\Produit;
use App\Models\Commande;
use Barryvdh\DomPDF\PDF;
use Illuminate\Http\Request;
use App\Models\CommandeProduit;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\StoreCommandeRequest;
use App\Http\Requests\UpdateCommandeRequest;

class CommandeController extends Controller
{
    public function index()
    {
        $commandes = Commande::with(['client', 'produits'])->latest()->get();

        return view('commandes.index', compact("commandes"));
    }

    public function updateStatus(Request $request, $id)
    {
        try {
            $commande = Commande::find($id);
            $commande->statut = $request->statut;
            $commande->save();
            return response()->json([
                'message' => 'Statut mis à jour avec succès',
                'statut' => $commande->statut
            ]);
        } catch (\Throwable $th) {
            Log::error('Erreur lors de la mise a jour du statut : ' . $th->getMessage());
            return back()->with('error', 'Une erreur s\'est produite lors de la mise à jour du statut');
        }
    }

    public function invoice()
    {
        return view('commandes.invoice');
    }

    public function create()
    {
        $produits = Produit::latest()->get()->take(10);

        return view('commandes.create', compact('produits'));
    }

    public function store(StoreCommandeRequest $request)
    {
        try {
            $validatedData = $request->validated();

            // 1. Récupérer ou créer le client
            $client = Client::where('email', $request->client_email)->first();

            if ($client) {
                // Si le client existe, on met à jour uniquement le nom et le type de client
                $client->update([
                    'nom' => $request->client_nom,
                    'type_client' => $request->type_client,
                ]);
            } else {
                // Sinon, on crée un nouveau client
                $client = Client::create([
                    'nom' => $request->client_nom,
                    'type_client' => $request->type_client,
                    'email' => $request->client_email
                ]);
            }

            // 2. Créer la commande
            $commande = Commande::firstOrCreate([
                'date_commande' => now(),
                'frais_main_oeuvre' => $validatedData['frais_main_oeuvre'],
                'frais_livraison' => $validatedData['frais_livraison'],
                'client_id' => $client->id,
                'statut' => 'En attente'
            ]);

            $allProducts = $validatedData['produits'] ;

            $total = 0;
            // 3. Enregistrer les produits dans la table relationnelle
            foreach ($validatedData['produits'] as $produitData) {
                // Récupérer le produit dans la base de données via son nom ou créer un nouveau produit
                $produit = Produit::where('produits', $produitData['produit'])->first();
                $pt = $produitData['quantite'] * $produitData['prix_negocie'];
                $total += $pt;
                // Insérer dans la table commande_produits
                $commande_produits = CommandeProduit::firstOrCreate([
                    'quantite' => $produitData['quantite'],
                    'prix_unitaire_negocie' => $produitData['prix_negocie'],
                    'commande_id' => $commande->id,
                    'produit_id' => $produit->id,
                ]);
            }

            $facture = Facture::firstOrCreate([
                'client_id'=> $client->id,
                'commande_id' => $commande->id,
                'montant' => $total,
                'statut' => "Non payée",
                'date_facture' => now()
            ]);
            return view('commandes.invoice', compact('client', 'allProducts', 'facture', 'produit', 'commande', 'commande_produits'))->with('success', 'Commande enregistrée avec succès!');
        } catch (\Throwable $th) {
            Log::error('Erreur lors de l\'enregistrement de la commande : ' . $th->getMessage());
            return back()->withErrors(['Une erreur s\'est produite lors de la creation de la commande.'])->withInput();
        }
    }

    public function show(Commande $commande)
    {
        //
    }

    public function edit(Commande $commande)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCommandeRequest $request, Commande $commande)
    {
        //
    }

    public function destroy(Commande $commande)
    {
        try {
            $commande->delete();

            return back()->with('success', 'Commande supprimée avec succès !');
        } catch (\Throwable $th) {
            Log::error('Erreur lors de la suppression de la commande : ' . $th->getMessage());
            return back()->with('error', 'Une erreur s\'est produite lors de la suppression de la commande');
        }
    }
}
