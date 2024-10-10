<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCommandeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'produits.*.produit' => 'required|string|max:255',
            'produits.*.quantite' => 'required|integer|min:1',
            'produits.*.prix_unitaire' => 'required|numeric|min:0',
            'produits.*.prix_negocie' => 'required|numeric|min:0',
            'frais_main_oeuvre' => 'required|numeric|min:0',
            'frais_livraison' => 'required|numeric|min:0',
            'adresse_livraison' => 'nullable|string|max:255',
        ];
    }

    public function messages(): array
    {
        return [
            'produits.*.produit.required' => 'Le nom du produit est requis.',
            'produits.*.quantite.required' => 'La quantité est requise.',
            'produits.*.quantite.integer' => 'La quantité doit être un entier.',
            'produits.*.prix_unitaire.required' => 'Le prix unitaire est requis.',
            'produits.*.prix_unitaire.numeric' => 'Le prix unitaire doit être un nombre.',
            'produits.*.prix_negocie.required' => 'Le prix négocié est requis.',
            'produits.*.prix_negocie.numeric' => 'Le prix négocié doit être un nombre.',
            'frais_main_oeuvre.required' => 'Les frais de main-d’œuvre sont requis.',
            'frais_main_oeuvre.numeric' => 'Les frais de main-d’œuvre doivent être un nombre.',
            'frais_livraison.required' => 'Les frais de livraison sont requis.',
            'frais_livraison.numeric' => 'Les frais de livraison doivent être un nombre.',
            'adresse_livraison.string' => 'L’adresse de livraison doit être une chaîne de caractères.',
        ];
    }
}
