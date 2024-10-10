<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Client;
use App\Models\Compte;
use App\Models\Employe;
use App\Models\Commande;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function index()
    {
        $totalCommandes = Commande::count();
        $totalEmployes = Employe::count();
        $totalClients = Client::count();
        $totalUsers = User::count();

        $employesData = Employe::selectRaw("SUM(CASE WHEN employes.genre = 'Masculin' THEN 1 ELSE 0 END) as hommes")
            ->selectRaw("SUM(CASE WHEN employes.genre = 'Féminin' THEN 1 ELSE 0 END) as femmes")
            ->first();

        $employes_hommes = $employesData->hommes;
        $employes_femmes = $employesData->femmes;


        return view('dashboard', compact('totalUsers', 'totalCommandes', 'totalClients', 'totalEmployes', 'employes_hommes', 'employes_femmes'));
    }

    public function getAccounts()
    {
        $soldes = DB::table('comptes')
            ->leftJoin('recettes', 'comptes.id', '=', 'recettes.compte_id')
            ->leftJoin('depenses', 'comptes.id', '=', 'depenses.compte_id')
            ->leftJoin('transactions as t_debit', 'depenses.id', '=', 't_debit.id_compte_debit')
            ->leftJoin('transactions as t_credit', 'recettes.id', '=', 't_credit.id_compte_credit')
            ->select(DB::raw('
            comptes.id,
            comptes.nom_compte,
            comptes.solde_initial +
            COALESCE(SUM(recettes.montant), 0) -
            COALESCE(SUM(depenses.montant), 0) +
            COALESCE(SUM(t_credit.montant), 0) -
            COALESCE(SUM(t_debit.montant), 0) AS solde_actuel
        '))
            ->groupBy('comptes.id', 'comptes.nom_compte', 'comptes.solde_initial')
            ->get()
            ->take(3);

        return response()->json($soldes);
    }

    public function getRecentEmployees()
    {
        $employes = Employe::latest()->take(5)->orderByDesc('created_at')->limit(10)->get();

        return response()->json($employes);
    }
}
