<x-app-layout>
    <div class="page-content">
        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="{{ route('dashboard') }}"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item"><a href="{{ route('commandes.index') }}">Commandes</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Nouvelle commande</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!--end breadcrumb-->

        @if ($errors->any())
            @foreach ($errors->all() as $error)
                <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-gray-900 dark:bg-gray-800 dark:text-red-400"
                    role="alert">

                    <span class="font-medium">{{ $error }}</span>

                </div>
            @endforeach
        @endif
        @if (Session('success'))
            {{-- Modal pour l'affichage des messages de success --}}
            <div id="alert-success-session"
                class="flex items-center p-4 mb-4 text-green-400 border-t-4 border-green-300 bg-gray-900 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
                role="alert">
                <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div class="ms-3 text-sm font-medium">
                    {{ Session('success') }}
                </div>
                <button type="button"
                    class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                    data-dismiss-target="#alert-success-session" aria-label="Close">
                    <span class="sr-only">Dismiss</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
        @elseif (session('error'))
            {{-- Modal pour l'affichage des messages d'erreur --}}
            <div id="alert-border-2"
                class="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-gray-900 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
                role="alert">
                <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div class="ms-3 text-sm font-medium">
                    {{ session('error') }}
                </div>
                <button type="button"
                    class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                    data-dismiss-target="#alert-border-2" aria-label="Close">
                    <span class="sr-only">Dismiss</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>
            </div>
        @endif

        <div class="card">
            <div class="card-body p-4">
                <h5 class="card-title">Enregistrer une nouvelle commande</h5>
                <hr />
                <form id="create-cmd-form" action="{{ route('commandes.store') }}" method="POST"
                    class="xl:flex justify-center xl:justify-between">
                    @csrf
                    <div class="form-body mt-4" id="input-container">
                        <div class="col-span-3">
                            <div class="border border-3 p-4 rounded flex items-center justify-between space-x-2">
                                <!-- Sélection des produits -->
                                <div class="relative">
                                    <div class="mb-3">
                                        <label for="inputProduit" class="form-label">Produit</label>

                                        <input id="inputProduit" name="produits[0][produit]"
                                            class="inputProduit py-2.5 ps-2 block w-full form-control border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 bg-bg-chart disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            type="text" placeholder="Nom du produit" required>
                                    </div>
                                    <div class="p-2 absolute top-16 overflow-x-auto flex space-x-1 z-50"
                                        id="resultsContainer">
                                    </div>
                                </div>
                                <!-- Quantité -->
                                <div class="mb-3">
                                    <label for="inputQuantity" class="form-label">Quantité</label>
                                    <input type="number" name="produits[0][quantite]" min="0"
                                        class="inputQuantity form-control border-gray-500 rounded-lg bg-bg-chart"
                                        id="inputQuantity" placeholder="Ex. 25" required>
                                </div>
                                <!-- Prix du depart -->
                                <div class="mb-3">
                                    <label for="inputDefaultPrice" class="form-label">Prix
                                        unitaire</label>
                                    <input type="number" name="produits[0][prix_unitaire]"
                                        class="inputDefaultPrice form-control border-gray-500 rounded-lg bg-bg-chart"
                                        id="inputDefaultPrice" readonly>
                                </div>
                                <!-- Prix unitaire négocié -->
                                <div class="mb-3">
                                    <label for="inputPriceNegotiated" class="form-label">Prix
                                        négocié</label>
                                    <input type="prix" name="produits[0][prix_negocie]"
                                        class="inputPriceNegociated form-control border-gray-500 rounded-lg bg-bg-chart"
                                        id="inputPriceNegotiated" placeholder="Prix négocié" required>
                                </div>
                                <div class="h-full mt-2">
                                    <button type="button" class="add-input ms-2 btn btn-primary">
                                        <svg class="w-6 h-6 text-white" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                                        </svg>

                                    </button>
                                </div>
                                <div class="flex justify-end mt-2">
                                    <button type="button"
                                        class="delete-input text-white bg-slate-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-md p-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-900 inline-flex items-center me-2">
                                        <svg class="w-6 h-6 text-white" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2" d="M5 12h14" />
                                        </svg>

                                        <span class="sr-only">Remove item</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="xl:justify-end justify-center xl:max-w-md max-w-xs">
                        <div class="border border-3 p-4 rounded">
                            <div class="row g-3">
                                <!-- Identite du client -->
                                <div class="relative">
                                    <div class="col-md-12">
                                        <label for="nomClient" class="form-label">
                                            Identite du client</label>
                                        <input type="text" name="client_nom"
                                            class="identite_client form-control border-gray-500 rounded-lg bg-bg-chart"
                                            id="inputNomClient" placeholder="Nom du client" required>

                                    </div>
                                    <div class="p-2 absolute top-16 overflow-x-auto space-x-1 z-50"
                                        id="clientResultsContainer">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <label for="emailClient" class="form-label">
                                        Email du client</label>
                                    <input type="text" name="client_email"
                                        class="email_client form-control border-gray-500 rounded-lg bg-bg-chart"
                                        id="inputEmailClient" placeholder="Email du client" required>

                                </div>
                                <!-- Type de client -->
                                <div class="col-md-12">
                                    <label for="clientType" class="form-label">Type de client</label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class='bx bxs-user-detail'></i></span>
                                        <select id="clientType" name="type_client"
                                            class="form-select border-start-0 bg-custom-dark" required>
                                            <option value="" selected>Type de client</option>
                                            <option value="Particulier">Particulier</option>
                                            <option value="Entreprise">Entreprise</option>
                                            <option value="Fournisseur">Fournisseur</option>
                                        </select>
                                    </div>
                                </div>
                                <!-- Frais de main-d'oeuvre -->
                                <div class="col-md-12">
                                    <label for="inputLaborCost" class="form-label">Frais de
                                        main-d'œuvre</label>
                                    <input type="text" name="frais_main_oeuvre" min="0"
                                        class="frais_main_oeuvre form-control border-gray-500 rounded-lg bg-bg-chart"
                                        id="inputLaborCost" placeholder="Frais de main-d'œuvre" required>
                                </div>
                                <!-- Frais de livraison -->
                                <div class="col-md-12">
                                    <label for="inputDeliveryCost" class="form-label">Frais de
                                        livraison</label>
                                    <input type="text" name="frais_livraison" min="0"
                                        class="frais_livraison form-control border-gray-500 rounded-lg bg-bg-chart"
                                        id="inputDeliveryCost" placeholder="Frais de livraison" required>
                                </div>
                                <!-- Adresse de livraison (si applicable) -->
                                <div class="col-md-12">
                                    <label for="inputDeliveryAddress" class="form-label">Adresse de
                                        livraison</label>
                                    <textarea class="inputDeliveryAddress form-control border-gray-500 rounded-lg bg-bg-chart" name="adresse_livraison"
                                        id="inputDeliveryAddress" rows="2" placeholder="Entrez l'adresse de livraison"></textarea>
                                </div>
                                <!-- Bouton d'enregistrement de la commande -->
                                <div class="col-12">
                                    <div class="d-grid">
                                        <button type="submit" id="submitButton" class="btn btn-primary">Enregistrer
                                            la
                                            commande</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>

    @section('script')
        <script>
            $(document).ready(function() {
                var typingTimer;
                var doneTypingInterval = 500;

                $('#inputProduit').on('keyup', function() {
                    clearTimeout(typingTimer);
                    typingTimer = setTimeout(searchProduits);

                });

                $('#inputProduit').on('keydown', function() {
                    clearTimeout(typingTimer);
                });

                function searchProduits() {
                    var formData = $('#inputProduit').serialize();
                    var searchInput = $('#inputProduit').val()
                        .trim();

                    if (searchInput === '') {

                        $('#resultsContainer').html('<p>Veuillez entrer un terme de recherche.</p>');
                        return;
                    }
                    if (searchInput.length < 2) {

                        $('#resultsContainer').html('<p>Veuillez entrer au moins 2 caractères.</p>');
                        return;
                    }

                    $.ajax({
                        url: "{{ route('produits.search') }}",
                        method: 'GET',
                        data: {
                            search: searchInput
                        },
                        success: function(produits) {
                            var resultsContainer = $('#resultsContainer');
                            resultsContainer.html('');
                            if (produits) {
                                if (produits.length == 0) {
                                    resultsContainer.html(
                                        '<p class=" text-red-500">Aucun résultat trouvé.</p>');
                                } else {
                                    var htmlContent = '';

                                    produits.forEach(produit => {
                                        htmlContent += `
                                        <a href="#" onclick="searchComplete(event, '${produit.produits}', '${produit.prix_unitaire}')"
                                            class="inline-flex items-center justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">

                                            <span class="w-full">${produit.produits}</span>
                                            <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                            <br>
                                            </a>
                                            `;

                                    });
                                    resultsContainer.html(htmlContent);
                                }
                            } else {
                                resultsContainer.html(
                                    '<p class=" text-red-500">Aucun résultat trouvé.</p>');
                            }
                        },
                        error: function(xhr) {
                            console.error('Erreur de la requête AJAX', xhr);
                        }
                    });
                }
            });
        </script>
        <script>
            $(document).ready(function() {
                var i = 0;
                $(document).on('click', '.add-input', function(e) {
                    e.preventDefault();
                    i++;
                    $('#input-container').append(`
                                <div class="col-span-3">
                                    <div
                                        class="border border-3 p-4 rounded flex items-center justify-between space-x-2">
                                        <!-- Sélection des produits -->
                                        <div class="relative">
                                            <div class="mb-3">
                                                <label for="inputProduit${i}" class="form-label">Produit</label>

                                                <input id="inputProduit${i}" name="produits[${i}][produit]"
                                                    class="inputProduit py-2.5 ps-2 block w-full form-control border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 bg-bg-chart disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                    type="text" placeholder="Nom du produit" required>
                                            </div>
                                            <div class="p-2 absolute top-16 overflow-x-auto flex space-x-1 z-auto" id="resultsContainer${i}"></div>
                                        </div>
                                        <!-- Quantité -->
                                        <div class="mb-3">
                                            <label for="inputQuantity${i}" class="form-label">Quantité</label>
                                            <input type="number" name="produits[${i}][quantite]" min="0"
                                                class="inputQuantity form-control border-gray-500 rounded-lg bg-bg-chart"
                                                id="inputQuantity${i}" placeholder="Entrez la quantité" required>
                                        </div>
                                        <!-- Prix du depart -->
                                        <div class="mb-3">
                                            <label for="inputDefaultPrice${i}" class="form-label">Prix unitaire
                                            </label>
                                            <input type="number" name="produits[${i}][prix_unitaire]"
                                                class="inputDefaultPrice form-control border-gray-500 rounded-lg bg-bg-chart"
                                                id="inputDefaultPrice${i}" readonly>
                                        </div>
                                        <!-- Prix unitaire négocié -->
                                        <div class="mb-3">
                                            <label for="inputPriceNegotiated${i}" class="form-label">
                                                Prix négocié
                                            </label>
                                            <input type="number" name="produits[${i}][prix_negocie]"
                                                class="inputPriceNegotiated form-control border-gray-500 rounded-lg bg-bg-chart"
                                                id="inputPriceNegotiated${i}" placeholder="Prix unitaire négocié" required>
                                        </div>
                                        <div class="h-full mt-2">
                                            <button type="button" class="add-input ms-2 btn btn-primary">
                                                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                                                </svg>

                                            </button>
                                        </div>
                                        <div class="flex justify-end mt-2">
                                            <button type="button"
                                                class="delete-input text-white bg-slate-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-md p-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-900 inline-flex items-center me-2">
                                                <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>
                                                </svg>

                                                <span class="sr-only">Icon description</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                    `)


                    // Recherche de produits pour les champs de saisie independants

                    var typingTimer;
                    var doneTypingInterval = 500;

                    $('#inputProduit' + i).on('keyup', function() {
                        clearTimeout(typingTimer);
                        typingTimer = setTimeout(searchProduits);

                    });

                    $('#inputProduit' + i).on('keydown', function() {
                        clearTimeout(typingTimer);
                    });

                    function searchProduits() {
                        var formData = $('#inputProduit' + i).serialize();
                        var searchInput = $('#inputProduit' + i).val()
                            .trim();

                        if (searchInput === '') {

                            $('#resultsContainer' + i).html(
                                '<p>Veuillez entrer un terme de recherche.</p>');
                            return;
                        }
                        if (searchInput.length < 2) {

                            $('#resultsContainer' + i).html(
                                '<p>Veuillez entrer au moins 2 caractères.</p>');
                            return;
                        }

                        $.ajax({
                            url: "{{ route('produits.search') }}",
                            method: 'GET',
                            data: {
                                search: searchInput
                            },
                            success: function(produits) {
                                var resultsContainer = $('#resultsContainer' + i);
                                resultsContainer.html('');
                                if (produits) {
                                    if (produits.length == 0) {
                                        resultsContainer.html(
                                            '<p class=" text-red-500">Aucun résultat trouvé.</p>'
                                        );
                                    } else {
                                        var htmlContent = '';

                                        produits.forEach(produit => {

                                            htmlContent += `
                                        <a href="#" onclick="searchComplete(event, '${produit.produits}',  '${produit.prix_unitaire}', '${i}')"
                                            class="inline-flex items-center justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">

                                            <span class="w-full">${produit.produits}</span>
                                            <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                            <br>
                                            </a>
                                            `;

                                        });
                                        resultsContainer.html(htmlContent);
                                    }
                                } else {
                                    resultsContainer.html(
                                        '<p class=" text-red-500">Aucun résultat trouvé.</p>'
                                    );
                                }
                            },
                            error: function(xhr) {
                                console.error('Erreur de la requête AJAX', xhr);
                            }
                        });
                    }
                })

                $(document).on('click', '.delete-input', function(e) {
                    e.preventDefault();
                    const inputGroups = $('.col-span-3'); // Sélectionne tous les groupes
                    if (inputGroups.length === 1) {
                        // Si c'est le dernier groupe, on vide les champs
                        $('#inputProduit').val('');
                        $('#resultsContainer').html('')
                        $('#inputDefaultPrice').val('');
                        $('#inputQuantity').val('');
                        $('#inputPriceNegotiated').val('');
                    } else {
                        // Sinon, on supprime le groupe contenant ce bouton
                        $(this).closest('.col-span-3').remove();
                    }
                });
            })
        </script>
        <script>
            function searchComplete(event, produit, price = 0, i = null) {
                event.preventDefault()

                if (i !== null) {
                    $('#inputProduit' + i).val(produit);
                    $('#inputDefaultPrice' + i).val(price);
                    $('#resultsContainer' + i).html('')
                } else {
                    $('#inputProduit').val(produit);
                    $('#inputDefaultPrice').val(price);
                    $('#resultsContainer').html('')
                }
            }
        </script>

        <script>
            $(document).ready(function() {
                var typingTimer2;
                var doneTypingInterval = 500;

                $('#inputNomClient').on('keyup', function() {
                    clearTimeout(typingTimer2);
                    typingTimer2 = setTimeout(searchProduits);

                });

                $('#inputNomClient').on('keydown', function() {
                    clearTimeout(typingTimer2);
                });

                function searchProduits() {
                    var formData = $('#inputNomClient').serialize();
                    var searchInput = $('#inputNomClient').val()
                        .trim();

                    if (searchInput === '') {

                        $('#clientResultsContainer').html('<p>Veuillez entrer un terme de recherche.</p>');
                        return;
                    }
                    if (searchInput.length < 2) {

                        $('#clientResultsContainer').html('<p>Veuillez entrer au moins 2 caractères.</p>');
                        return;
                    }

                    $.ajax({
                        url: "{{ route('clients.search') }}",
                        method: 'GET',
                        data: {
                            search: searchInput
                        },
                        success: function(clients) {
                            var clientResultsContainer = $('#clientResultsContainer');
                            clientResultsContainer.html('');
                            if (clients) {
                                if (clients.length == 0) {
                                    clientResultsContainer.html(
                                        '<p class=" text-red-500">Aucun résultat trouvé.</p>');
                                } else {
                                    var htmlContent = '';

                                    clients.forEach(client => {
                                        htmlContent += `
                                        <a href="#" onclick="searchClientComplete(event, '${client.nom}', '${client.email}', '${client.type_client}')"
                                            class="inline-flex items-center justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">

                                            <span class="w-full">${client.nom}</span>
                                            <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                            <br>
                                            </a>
                                            `;

                                    });
                                    clientResultsContainer.html(htmlContent);
                                }
                            } else {
                                clientResultsContainer.html(
                                    '<p class=" text-red-500">Aucun résultat trouvé.</p>');
                            }
                        },
                        error: function(xhr) {
                            console.error('Erreur de la requête AJAX', xhr);
                        }
                    });
                }
            });


            function searchClientComplete(event, nom, email, type) {
                event.preventDefault()
                $('#inputNomClient').val(nom);
                $('#inputEmailClient').val(email);
                $('#clientType option[value="' + type + '"]').prop('selected', true);
                $('#clientResultsContainer').html('')
            }
        </script>
    @endsection
</x-app-layout>
