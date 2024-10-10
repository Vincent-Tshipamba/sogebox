<?php

namespace App\Http\Controllers;

use App\Models\Conge;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\StoreCongeRequest;
use App\Http\Requests\UpdateCongeRequest;
use App\Models\Employe;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CongeController extends Controller
{
    public function index()
    {
        $conges = Conge::with('users')->latest()->get();

        return view("conges.index", compact("conges"));
    }

    public function create()
    {
        return view('conges.demandes');
    }

    public function updateStatus(Request $request, $id)
    {
        try {
            $conge = Conge::find($id);
            $conge->statut = $request->statut;
            $conge->save();
            return response()->json([
                'message' => 'Statut mis à jour avec succès',
                'statut' => $conge->statut
            ]);
        } catch (\Throwable $th) {
            Log::error('Erreur lors de la mise a jour du statut : ' . $th->getMessage());
            return back()->with('error', 'Une erreur s\'est produite lors de la mise à jour du statut');
        }
    }

    public function store(StoreCongeRequest $request)
    {
        try {
            //$employeId = Employe::pluck('id')->where('prenom', $request->prenom)->where('nom', $request->nom)->where('postnom', $request->postnom)->first();
            $employeId = DB::table('employes')
                ->select('id')
                ->where('prenom', $request->prenom)
                ->where('nom', $request->nom)
                ->where('postnom', $request->postnom)
                ->first();

            if ($employeId) {
                $conge = new Conge();
                $conge->employe_id = $employeId->id;
                $conge->date_debut = $request->date_debut;
                $conge->date_fin = $request->date_fin;
                $conge->motif = $request->motif;

                // Sauvegarde de la demande de congé dans la base de données
                $conge->save();

                return redirect()->route('conges.index')->with('success', 'La demande de congé a été soumise avec succès.');
            } else {
                return back()->with('error', 'Aucun employé trouvé avec ces informations.');
            }
        } catch (\Throwable $th) {
            Log::error('Erreur lors de la création de la demande de congé : ' . $th->getMessage());
            return back()->withErrors(['error', 'Une erreur s\'est produite lors de la creation  de la demande de congé.'])->withInput();
        }
    }

    public function show(Conge $conge)
    {
        //
    }

    public function edit(Conge $conge)
    {
        //
    }

    public function update(UpdateCongeRequest $request, Conge $conge)
    {
        //
    }

    public function destroy(Conge $conge)
    {
        try {
            $conge->delete();

            return back()->with('success', 'Congé supprimé avec succès !');
        } catch (\Throwable $th) {
            Log::error('Erreur lors de la suppression du conge : ' . $th->getMessage());
            return back()->with('error', 'Une erreur s\'est produite lors de la suppression du congé');
        }
    }
}
