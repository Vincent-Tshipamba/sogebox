<?php

namespace App\Http\Controllers;

use App\Models\CongeExamine;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\StoreCongeExamineRequest;
use App\Http\Requests\UpdateCongeExamineRequest;

class CongeExamineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCongeExamineRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(CongeExamine $congeExamine)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CongeExamine $congeExamine)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCongeExamineRequest $request, CongeExamine $congeExamine)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CongeExamine $congeExamine)
    {
        try {
            $congeExamine->delete();

            return back()->with('success', 'Examen supprimé avec succès !');
        } catch (\Throwable $th) {
            Log::error('Erreur lors de la suppression du departement : ' . $th->getMessage());
            return back()->with('error', 'Une erreur s\'est produite lors de la suppression de l\'examen');
        }
    }
}
