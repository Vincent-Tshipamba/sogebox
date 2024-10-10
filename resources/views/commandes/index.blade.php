<x-app-layout>
    <div class="page-content">
        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="{{ route('dashboard') }}"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Liste des commandes</li>
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


        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
                data-tabs-toggle="#default-tab-content" role="tablist">
                <li class="me-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab"
                        data-tabs-target="#profile" type="button" role="tab" aria-controls="profile"
                        aria-selected="false">
                        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="36" height="36" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-width="2"
                                d="M3 11h18M3 15h18m-9-4v8m-8 0h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                        </svg>
                    </button>
                </li>
                <li class="me-2" role="presentation">
                    <button
                        class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab"
                        aria-controls="dashboard" aria-selected="false">
                        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="36" height="36" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z"
                                clip-rule="evenodd" />
                        </svg>

                    </button>
                </li>
            </ul>
        </div>
        <div id="default-tab-content">
            <div class="hidden p-4 rounded-lg bg-custom-dark" id="profile" role="tabpanel"
                aria-labelledby="profile-tab">
                <x-listcommandes-table :commandes="$commandes"></x-listcommandes-table>
            </div>
            <div class="hidden p-4 rounded-lg" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                <div class="card">
                    <div class="card-body">
                        <div class="d-lg-flex align-items-center mb-4 gap-3">
                            <div class="position-relative">
                                <input type="text" class="form-control bg-bg-chart ps-5 radius-30"
                                    placeholder="Search Order">
                                <span class="position-absolute top-50 product-show translate-middle-y"><i
                                        class="bx bx-search"></i></span>
                            </div>
                            <div class="ms-auto"><a href="javascript:;"
                                    class="btn btn-light radius-30 mt-2 mt-lg-0"><i
                                        class="bx bxs-plus-square"></i>Nouvelle commande</a></div>
                        </div>
                        @foreach ($commandes as $commande)
                            @php
                                $montant_total = 0; // Initialize total for the command
                            @endphp
                            <a href="#!" onclick="changeStatus({{ $commande->id }}, '{{ $commande->statut }}')"
                                class="block transition-all mb-4 p-4 rounded-lg shadow-lg border border-gray-700 bg-bg-chart hover:bg-gray-800">
                                <div class="flex justify-between items-start mb-2">
                                    <div>
                                        <h6 class="text-lg font-semibold text-white">Numéro de
                                            commande: #{{ $commande->numero_commande }}</h6>
                                        <p class="text-sm text-gray-400">Client:
                                            {{ $commande->client->nom }}</p>
                                    </div>
                                    <div>
                                        <span id="statutC{{ $commande->id }}"
                                            class="px-3 py-1 text-xs font-medium rounded-full
                    @if ($commande->statut == 'Livrée') text-white bg-green-400
                    @elseif ($commande->statut == 'En attente')
                        bg-yellow-100 text-yellow-500
                    @elseif ($commande->statut == 'Annulée')
                        text-red-600 bg-red-600/20
                    @else
                        text-gray-500 bg-gray-600/20 @endif">
                                            {{ $commande->statut }}
                                        </span>
                                    </div>
                                </div>

                                <div class="mt-3 mb-4">
                                    <h6 class="text-sm font-medium text-gray-300">Produits
                                        commandés:</h6>
                                    <ul class="list-disc pl-5 mt-2 space-y-1">
                                        @foreach ($commande->produits as $produit)
                                            @php
                                                // Calculate the total for this product
                                                $produit_total =
                                                    $produit->pivot->quantite * $produit->pivot->prix_unitaire_negocie;
                                                // Add to the total command amount
                                                $montant_total += $produit_total;
                                            @endphp
                                            <li class="text-sm text-gray-400">
                                                {{ $produit->produits }} -
                                                <span class="text-xs">Quantité:
                                                    {{ $produit->pivot->quantite }}</span>,
                                                <span class="text-xs">Prix Unitaire:
                                                    {{ number_format($produit->pivot->prix_unitaire_negocie, 2) }}
                                                    $</span>,
                                                <span class="text-xs font-semibold">Total:
                                                    {{ number_format($produit_total, 2) }} $</span>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <div>
                                        <h6 class="text-lg font-semibold text-white">
                                            Montant total: {{ number_format($montant_total, 2) }} $
                                        </h6>
                                    </div>
                                    <p class="text-sm text-gray-400">
                                        <i class="inline-block size-4 ltr:mr-1 rtl:ml-1"
                                            data-lucide="calendar-clock"></i>
                                        Commandé le: {{ $commande->created_at->format('d/m/Y') }}
                                    </p>
                                </div>
                            </a>
                        @endforeach

                    </div>
                </div>
            </div>
        </div>
    </div>

    <x-delete-modal :formId="'remove-commande-form'" :item="' cette commande'"></x-delete-modal>

    @section('script')
        <script>
            function changeStatus(commandeId, currentStatus) {
                Swal.fire({
                    title: 'Changer le statut',
                    input: 'select',
                    inputOptions: {
                        'En attente': 'Mettre en attente',
                        'Livrée': 'Marquer comme livrée',
                        'Annulée': 'Annuler la commande'
                    },
                    inputPlaceholder: 'Sélectionnez un statut',
                    showCancelButton: true,
                    confirmButtonText: 'Valider',
                    cancelButtonText: 'Annuler',
                    inputValidator: (value) => {
                        if (!value) {
                            return 'Vous devez choisir un statut !'
                        }
                    }
                }).then((result) => {
                    if (result.isConfirmed) {
                        let newStatus = result.value;

                        // AJAX request to update status
                        $.ajax({
                            url: '/commandes/' + commandeId + '/update-statut',
                            type: 'PATCH',
                            data: {
                                _token: '{{ csrf_token() }}',
                                id: commandeId,
                                statut: newStatus
                            },
                            success: function(response) {
                                Swal.fire({
                                    title: 'Succès!',
                                    text: 'Le statut a été mis à jour.',
                                    icon: 'success',
                                    confirmButtonText: 'OK'
                                }).then(() => {
                                    // Update the text of the status span
                                    $('#statutC' + commandeId).text(newStatus);

                                    // Remove the old classes
                                    $('#statutC' + commandeId).removeClass(
                                        'bg-green-400 bg-yellow-100 bg-red-600/20 text-white text-yellow-500 text-red-600 text-gray-500 bg-gray-600/20'
                                    );

                                    // Add new classes based on the new status
                                    if (newStatus === 'Livrée') {
                                        $('#statutC' + commandeId).addClass(
                                            'text-white bg-green-400');
                                    } else if (newStatus === 'En attente') {
                                        $('#statutC' + commandeId).addClass(
                                            'bg-yellow-100 text-yellow-500');
                                    } else if (newStatus === 'Annulée') {
                                        $('#statutC' + commandeId).addClass(
                                            'text-red-600 bg-red-600/20');
                                    } else {
                                        $('#statutC' + commandeId).addClass(
                                            'text-gray-500 bg-gray-600/20');
                                    }
                                });

                            },
                            error: function(error) {
                                Swal.fire({
                                    title: 'Erreur!',
                                    text: 'Un problème est survenu lors de la mise à jour.',
                                    icon: 'error',
                                    confirmButtonText: 'OK'
                                });
                            }
                        });
                    }
                });
            }
        </script>

        <script>
            function updateStatut(commandeId, statut) {
                $.ajax({
                    url: '/commandes/' + commandeId + '/update-statut',
                    type: 'PATCH',
                    data: {
                        _token: '{{ csrf_token() }}',
                        statut: statut
                    },
                    success: function(response) {
                        console.log(response.message);

                        // Mettre à jour le statut dans le tableau
                        const statutCell = $('#statut-' + commandeId);
                        statutCell.empty(); // Efface l'ancien contenu

                        // Ajouter le nouveau contenu selon le statut
                        if (response.statut === 'Livrée') {
                            Swal.fire({
                                title: "Opération réussie!",
                                text: "La commande a été signalée comme livrée !",
                                icon: "success"
                            });
                            statutCell.append(`
                    <span class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
                        Livrée
                    </span>
                `);
                        } else if (response.statut === 'En attente') {
                            Swal.fire({
                                title: "Opération réussie!",
                                text: "La commande a été mise en attente avec succès!",
                                icon: "success"
                            });
                            statutCell.append(`
                    <span class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-yellow-100 border-transparent text-yellow-500 dark:bg-yellow-500/20 dark:border-transparent">
                        En attente
                    </span>
                `);
                        } else if (response.statut === 'Annulée') {
                            Swal.fire({
                                title: "Opération réussie!",
                                text: "La commande a été annulée !",
                                icon: "success"
                            });
                            statutCell.append(`
                    <span class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">
                        Annulée
                    </span>
                `);
                        }


                    },
                    error: function(xhr) {
                        alert('Erreur lors de la mise à jour du statut');
                    }
                });
            }
        </script>
        <script>
            function remove(event) {
                event.preventDefault()

                let link = event.target.closest('a').getAttribute("href");

                let form = document.getElementById('remove-commande-form');
                form.setAttribute('action', link);
            }
        </script>
        <script>
            $(document).ready(function() {
                var table = $('#commandesTable').DataTable({
                    lengthChange: false,
                    buttons: ['copy', 'excel', 'pdf', 'print']
                });

                table.buttons().container()
                    .appendTo('#commandesTable_wrapper .col-md-6:eq(0)');
            });
        </script>
        <script>
            $(document).ready(function() {
                $('#commandesTable_filter label input').attr('placeholder', 'Faites une recherche');
                $('#commandesTable_filter label input').addClass('bg-gray-900');
            });
        </script>
    @endsection
</x-app-layout>
