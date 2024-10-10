<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run(): void
    {
        // Créer des permissions spécifiques à chaque type d'utilisateur
        Permission::firstOrCreate(['name' => 'créer des factures']);
        Permission::firstOrCreate(['name' => 'voir les factures']);
        Permission::firstOrCreate(['name' => 'gérer les ventes']);
        Permission::firstOrCreate(['name' => 'accéder aux rapports']);
        Permission::firstOrCreate(['name' => 'gérer l\'atelier']);
        Permission::firstOrCreate(['name' => 'voir les commandes']);
        Permission::firstOrCreate(['name' => 'voir les clients']);
        Permission::firstOrCreate(['name' => 'voir les employés']);
        Permission::firstOrCreate(['name' => 'voir les utilisateurs']);
        Permission::firstOrCreate(['name' => 'supprimer les utilisateurs']);
        Permission::firstOrCreate(['name' => 'modifier les utilisateurs']);
        Permission::firstOrCreate(['name' => 'gérer tout']);

        // Créer des rôles et assigner des permissions
        $comptableRole = Role::firstOrCreate(['name' => 'comptable']);
        $commercialRole = Role::firstOrCreate(['name' => 'commercial']);
        $superadminRole = Role::firstOrCreate(['name' => 'superadmin']);
        $dgaRole = Role::firstOrCreate(['name' => 'dga']);
        $atelierRole = Role::firstOrCreate(['name' => 'atelier']);
        $rhRole = Role::firstOrCreate(['name' => 'rh']);

        // Assigner des permissions aux rôles
        $comptableRole->givePermissionTo(['créer des factures', 'voir les factures', 'voir les commandes']);
        $commercialRole->givePermissionTo(['gérer les ventes', 'voir les commandes', 'voir les clients']);
        $rhRole->givePermissionTo(['voir les utilisateurs', 'supprimer les utilisateurs', 'modifier les utilisateurs', 'voir les employés']);
        $superadminRole->givePermissionTo(Permission::all());  // Le superadmin a toutes les permissions
        $dgaRole->givePermissionTo(['voir les factures', 'accéder aux rapports', 'voir les commandes', 'voir les clients', 'voir les employés', 'voir les utilisateurs']);
        $atelierRole->givePermissionTo(['gérer l\'atelier', 'voir les commandes']);
    }
}
