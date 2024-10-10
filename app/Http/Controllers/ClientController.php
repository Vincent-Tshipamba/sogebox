<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Client::latest()->get();
        return view('clients.index', compact('clients'));
    }

    public function search(Request $request)
    {
        $searchTerm = $request->input('search');
        $clients = Client::where('nom', 'LIKE', "%{$searchTerm}%")
            ->orWhere('email', 'LIKE', "%{$searchTerm}")
            ->take(5)
            ->latest()
            ->get();

        return response()->json($clients);
    }

    public function contact()
    {
        $clients = Client::latest()->get();

        return view('clients.contact', compact('clients'));
    }

    public function getClientTrafficData(Request $request)
    {
        $year = $request->input('year');

        // Logique pour récupérer les données des clients par mois pour l'année sélectionnée
        // Exemple : [nombre de clients pour Jan, Feb, Mar, ..., Dec]
        $clientTrafficData = Client::whereYear('created_at', $year)
            ->selectRaw('MONTH(created_at) as month, COUNT(*) as count')
            ->groupBy('month')
            ->orderBy('month')
            ->pluck('count', 'month');

        // S'assurer que tous les mois sont couverts même si aucune donnée n'est disponible pour certains mois
        $trafficByMonth = array_fill(1, 12, 0); // 12 mois, initialisés à 0
        foreach ($clientTrafficData as $month => $count) {
            $trafficByMonth[$month - 1] = $count; // Placer les données au bon index
        }

        return response()->json(['data' => array_values($trafficByMonth)]);
    }


    public function create()
    {
        return view('clients.create');
    }

    public function store(StoreClientRequest $request)
    {
        try {
            // Récupération des données validées
            $validatedData = $request->validated();

            // Traitement de l'image (si elle est présente)
            if ($request->hasFile('images')) {
                $imagePath = $request->file('images')->store('client/images', 'public');
                $validatedData['images'] = $imagePath;
            }

            // Création du client avec les données validées
            $client = Client::firstOrCreate([
                'nom' => $validatedData['nom'],
                'type_client' => $validatedData['type_client'],
                'telephone'   => $validatedData['telephone'],
                'email'       => $validatedData['email'],
                'adresse'     => $validatedData['adresse'],
                'images'       => $validatedData['images'] ?? null, // Assure que l'image soit optionnelle
            ]);

            // Retourner une réponse ou redirection après l'enregistrement
            return redirect()->route('clients.index')->with('success', 'Le client a été enregistré avec succès.');
        } catch (\Throwable $th) {
            Log::error('Erreur lors de la création du client : ' . $th->getMessage());
            return back()->withErrors(['error', 'Une erreur s\'est produite lors de l\'enregistrement du client'])->withInput();
        }
    }

    public function show(Client $client)
    {
        //
    }

    public function edit(Client $client)
    {
        //
    }

    public function update(UpdateClientRequest $request, Client $client)
    {
        //
    }

    public function destroy(Client $client)
    {
        try {
            $client->delete();

            return redirect()->route('clients.index')->with('success', 'Client supprimé avec succès !');
        } catch (\Throwable $th) {
            Log::error('erreur lors de la suppression d\'un client : ' . $th->getMessage());
            return back()->with('error', 'Une erreur s\'est produite lors de la suppression du client !');
        }
    }
}
