<?php

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RhController;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use Spatie\Permission\Models\Permission;
use App\Http\Controllers\CongeController;
use App\Http\Controllers\AtelieController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\CompteController;
use App\Http\Controllers\EmployeController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CommandeController;
use App\Http\Controllers\ReceptionController;
use App\Http\Controllers\DepartementController;
use App\Http\Controllers\RolePermissionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Dashboard
Route::get('/', [HomeController::class, 'index'])->name('dashboard')->middleware(['auth', 'verified']);

// Users
Route::resource('users', UserController::class)->middleware('checkrole:rh,superadmin');
Route::get('profile-edit', [ProfileController::class, 'edit'])->name('profile.edit');
Route::patch('profile-update', [ProfileController::class, 'update'])->name('profile.update');
Route::delete('profile-destroy', [ProfileController::class, 'destroy'])->name('profile.destroy');
Route::post('/users/roles/update', [UserController::class, 'updateUserRole'])->name('users.roles.update');
Route::delete('/users/roles/delete', [UserController::class, 'deleteUserRole'])->name('users.roles.delete');
Route::delete('/users/delete/{user}', [UserController::class, 'destroyUser'])->name('users.delete');


// Roles and Permissions
Route::get('/roles-permissions', [RolePermissionController::class, 'getRolesPermissions'])->name('roles.permissions.index');
Route::get('/users-roles', [RolePermissionController::class, 'getUsersRoles'])->name('roles.users.index');
Route::post('/roles-permissions/update', [RolePermissionController::class, 'updateRolePermissions'])->name('roles.permissions.update');

// Roles only
Route::post('/roles/create', [RolePermissionController::class, 'createRole'])->name('roles.store');
Route::put('/roles/{role}', [RolePermissionController::class, 'updateRole'])->name('roles.update');
Route::delete('/roles/{role}', [RolePermissionController::class, 'destroyRole'])->name('roles.destroy');

// Permissions only
Route::post('/permissions/create', [RolePermissionController::class, 'createPermission'])->name('permissions.store');
Route::put('/permissions/{permission}', [RolePermissionController::class, 'updatePermission'])->name('permissions.update');
Route::delete('/permissions/{permission}', [RolePermissionController::class, 'destroyPermission'])->name('permissions.destroy');



// Employes
Route::resource('employes', EmployeController::class)->middleware('checkrole:rh,superadmin');
Route::get('search-employes', [EmployeController::class, 'search'])->name('employes.search')->middleware('checkrole:rh,superadmin');

// Conges
Route::resource('conges', CongeController::class)->middleware('checkrole:rh,superadmin');
Route::patch('conges/{conge}/update-statut', [CongeController::class, 'updateStatus'])->name('conges.update-status')->middleware('checkrole:rh,superadmin');

// Departements
Route::resource('departements', DepartementController::class)->middleware('checkrole:rh,superadmin');

// Commandes
Route::resource('commandes', CommandeController::class)->middleware('checkrole:superadmin,atelier,commercial');
Route::patch('commandes/{commande}/update-statut', [CommandeController::class, 'updateStatus'])->name('commandes.update-status')->middleware('checkrole:rh,superadmin');

// Clients
Route::resource('clients', ClientController::class)->middleware('checkrole:rh,superadmin,commercial');
Route::get('search-clients', [ClientController::class, 'search'])->name('clients.search')->middleware('checkrole:rh,superadmin');
Route::get('/clients-contact', [ClientController::class, 'contact'])->name('clients.contact')->middleware('checkrole:rh,superadmin,dga');
Route::get('/client-traffic', [ClientController::class, 'getClientTrafficData']);

// Comptes
Route::resource('comptes', CompteController::class)->middleware('checkrole:commercial,superadmin');

// Produits
Route::get('search-products', [ProduitController::class, 'search'])->name('produits.search')->middleware('checkrole:rh,superadmin,commercial');

// Home
Route::get('/getsoldes', [HomeController::class, 'getAccounts']);
Route::get('/getrecentemployees', [HomeController::class, 'getRecentEmployees']);

// FAQ
Route::get('faq', function () {
    return view('faq.index');
})->name('faq')->middleware(['auth', 'verified']);

// Auth
require __DIR__ . '/auth.php';
