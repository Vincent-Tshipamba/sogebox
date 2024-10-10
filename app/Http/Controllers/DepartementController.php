<?php

namespace App\Http\Controllers;

use App\Models\Employe;
use App\Models\Departement;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\StoreDepartementRequest;
use App\Http\Requests\UpdateDepartementRequest;

class DepartementController extends Controller
{
    public function index()
    {
        $departements = Departement::withCount('employes')->with(['employes' => function ($query) {
            $query->where('est_chef', true);
        }])->get();

        $employes = Employe::all();

        return view('departements.index', compact('departements', 'employes'));
    }

    public function create()
    {
        //
    }

    public function store(StoreDepartementRequest $request)
    {
        try {
            // Create the department
            $departement = new Departement();
            $departement->libelle = $request->input('libelle');

            // Save the department to the database
            $departement->save();
            return redirect()->route('departements.index')->with('success', 'Département créé avec succès.');
        } catch (\Throwable $th) {
            Log::error('Erreur lors de la création du departement : ' . $th->getMessage());
            return back()->withErrors(['error', 'Une erreur s\'est produite lors de la creation du departement.'])->withInput();
        }
    }

    public function show(Departement $departement)
    {
        //
    }

    public function edit(Departement $departement)
    {
        //
    }

    public function update(UpdateDepartementRequest $request, Departement $departement)
    {
        //
    }

    public function destroy(Departement $departement)
    {
        try {
            $departement->delete();

            return back()->with('success', 'Département supprimé avec succès !');
        } catch (\Throwable $th) {
            Log::error('Erreur lors de la suppression du departement : ' . $th->getMessage());
            return back()->with('error', 'Une erreur s\'est produite lors de la suppression du département');
        }
    }
}
