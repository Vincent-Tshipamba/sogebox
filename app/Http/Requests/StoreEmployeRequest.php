<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEmployeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nom' => 'required|string|max:255',
            'postnom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'genre' => 'required',
            'etat_civil' => 'required|string',
            'nationalite' => 'required|string|max:255',
            'date_naissance' => 'required|date',
            'adresse_physique' => 'required|string',
            'telephone' => 'required|string|max:20',
            'date_embauche' => 'required|date',
            'salaire' => 'required|numeric',
            'poste' => 'required|string|max:255',
            'departement_id' => 'required|exists:departements,id',
        ];
    }

    public function messages(): array
    {
        return [
            'nom.required' => 'Le nom est requis.',
            'postnom.required' => 'Le postnom est requis.',
            'prenom.required' => 'Le prénom est requis.',
            'genre.required' => 'Le genre est requis.',
            'etat_civil.required' => "L'état civil est requis.",
            'nationalite.required' => 'La nationalité est requise.',
            'date_naissance.required' => 'La date de naissance est requise.',
            'adresse_physique.required' => "L'adresse physique est requise.",
            'telephone.required' => 'Le numéro de téléphone est requis.',
            'date_embauche.required' => "La date d'embauche est requise.",
            'salaire.required' => 'Le salaire est requis.',
            'salaire.numeric' => 'Le salaire doit être un nombre.',
            'poste.required' => 'Le poste est requis.',
            'departement_id.required' => 'Le département est requis.',
            'departement_id.exists' => 'Le département sélectionné est invalide.',
        ];
    }

}
