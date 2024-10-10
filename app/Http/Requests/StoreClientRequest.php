<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use SebastianBergmann\Type\TrueType;

class StoreClientRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nom' => 'required|string|max:255',
            'type_client' => 'required|in:particulier,entreprise,fournisseur',
            'telephone' => 'required',
            'email' => 'required|email|max:255|unique:clients,email',
            'adresse' => 'required|string|max:500',
            'image' => 'nullable|image|max:2048',
        ];
    }

    public function messages()
    {
        return [
            'nom.required' => 'Le nom complet est obligatoire.',
            'nom.string'   => 'Le nom complet doit être une chaîne de caractères.',
            'nom.max'      => 'Le nom complet ne doit pas dépasser 255 caractères.',

            'type_client.required' => 'Le type de client est obligatoire.',
            'type_client.in'       => 'Le type de client doit être soit particulier, soit fournisseur, soit entreprise.',

            'telephone.required' => 'Le numéro de téléphone est obligatoire.',

            'email.required' => 'L\'adresse email est obligatoire.',
            'email.email'    => 'Veuillez fournir une adresse email valide.',
            'email.max'      => 'L\'adresse email ne doit pas dépasser 255 caractères.',
            'email.unique'   => 'Cette adresse email est déjà utilisée.',

            'adresse.required' => 'L\'adresse est obligatoire.',
            'adresse.string'   => 'L\'adresse doit être une chaîne de caractères.',
            'adresse.max'      => 'L\'adresse ne doit pas dépasser 500 caractères.',

            'image.image' => 'Le fichier doit être une image (jpeg, png, bmp, gif, svg, webp).',
            'image.max'   => 'La taille de l\'image ne doit pas dépasser 2 Mo.',
        ];
    }
}
