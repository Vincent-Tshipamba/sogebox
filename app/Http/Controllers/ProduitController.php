<?php

namespace App\Http\Controllers;

use App\Models\Produit;
use Illuminate\Http\Request;
use App\Http\Requests\StoreProduitRequest;
use App\Http\Requests\UpdateProduitRequest;

class ProduitController extends Controller
{
    public function index()
    {
        //
    }

    public function search(Request $request)
    {
        $searchTerm = $request->input('search');
        $produits = Produit::where('produits', 'LIKE', "%{$searchTerm}%")
            ->take(6)
            ->latest()
            ->get();
            
        return response()->json($produits);
    }

    public function create()
    {
        //
    }

    public function store(StoreProduitRequest $request)
    {
        //
    }
    public function show(Produit $produit)
    {
        //
    }
    public function edit(Produit $produit)
    {
        //
    }

    public function update(UpdateProduitRequest $request, Produit $produit)
    {
        //
    }

    public function destroy(Produit $produit)
    {
        //
    }
}
