<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            RolesAndPermissionsSeeder::class,
            CompteSeeder::class,
            RecetteSeeder::class,
            DepenseSeeder::class,
            TransactionSeeder::class,
            MotifPaiementSeeder::class,
            DepartementSeeder::class,
            PaiementSeeder::class,
            RapportSeeder::class,
            PointingSeeder::class,
            ClientSeeder::class,
            RendezVousSeeder::class,
            CommandeSeeder::class,
            CongeSeeder::class,
            ReunionSeeder::class,
            ParticipantSeeder::class,
            TypeBonSeeder::class,
            BonSeeder::class,
            ApprobationSeeder::class,
            CategorieProduitSeeder::class,
            ProduitSeeder::class,
            InventaireSeeder::class,
            ProjetSeeder::class,
            ResumeSeeder::class,
            ModeLivraisonSeeder::class,
            LivraisonSeeder::class,
            TacheSeeder::class,
            SousTraitanceSeeder::class,
            TacheSeeder::class,
            ReservationSeeder::class,
            FactureSeeder::class,
            TacheEmployeSeeder::class,
            CongeExamineSeeder::class
        ]);
    }
}
