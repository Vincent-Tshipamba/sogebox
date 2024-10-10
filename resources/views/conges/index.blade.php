<x-app-layout>
    <div class="page-content">
        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item">
                            <a href="{{ route('dashboard') }}"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Liste des congés</li>
                    </ol>
                </nav>
            </div>

        </div>
        <!--end breadcrumb-->
        <h6 class="mb-4">Consultez la liste de toutes les demandes de congés</h6>
        <hr class="mb-4" />
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
            <div class="card-body">
                <div class="table-responsive">
                    <table id="congesTable" class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Employé</th>
                                <th>Motif</th>
                                <th>Nbre de jours</th>
                                <th>Du</th>
                                <th>Au</th>
                                <th>Examiné par </th>
                                <th>Statut</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($conges as $key => $conge)
                                <tr>
                                    <td>{{ $key + 1 }}</td>
                                    <td>
                                        {{ $conge->employe->prenom }}
                                        {{ $conge->employe->nom }}</td>
                                    </td>
                                    <td>
                                        {{ $conge->motif }}
                                    </td>
                                    <td>
                                        @php
                                            $start = \Carbon\Carbon::parse($conge->date_debut);
                                            $end = \Carbon\Carbon::parse($conge->date_fin);
                                            $nbrjours = $start->diffInDays($end);
                                        @endphp
                                        {{ $nbrjours }}
                                    </td>
                                    <td>
                                        {{ $conge->date_debut }}
                                    </td>
                                    <td>
                                        {{ $conge->date_fin }}
                                    </td>
                                    <td>
                                        @if ($conge->users->IsNotEmpty())
                                            {{ $conge->users->first()->name }}
                                        @else
                                            {{ 'Non examiné' }}
                                        @endif
                                    </td>
                                    <td class="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
                                        id="statut-{{ $conge->id }}">
                                        @if ($conge->statut == 'Approuvé')
                                            <span
                                                class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
                                                Approuvé
                                            </span>
                                        @elseif ($conge->statut == 'En attente')
                                            <span
                                                class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-yellow-100 border-transparent text-yellow-500 dark:bg-yellow-500/20 dark:border-transparent">
                                                En attente
                                            </span>
                                        @elseif ($conge->statut == 'Refusé')
                                            <span
                                                class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">
                                                Rejetté
                                            </span>
                                        @else
                                            Non examiné
                                        @endif
                                    </td>
                                    @if (auth()->user()->hasRole('superadmin') || auth()->user()->hasRole('rh'))
                                        <td class="flex items-center justify-center space-x-2">
                                            @if (auth()->user()->hasRole('superadmin'))
                                                <a href="{{ route('conges.destroy', $conge->id) }}"
                                                    data-modal-target="delete-modal" onclick="remove(event)"
                                                    data-modal-toggle="delete-modal"
                                                    class="flex items-center justify-center transition-all duration-200 ease-linear rounded-md size-8 remove-item-btn ">
                                                    <svg class="w-6 h-6 text-red-500 hover:text-red-300"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" fill="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path fill-rule="evenodd"
                                                            d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </a>
                                                <a href="#attente"
                                                    onclick="updateStatut({{ $conge->id }}, 'En attente')">
                                                    <svg class="w-6 h-6 text-yellow-600 hover:text-yellow-300"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" fill="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path fill-rule="evenodd"
                                                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9-3a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9Zm4 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9Z"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </a>
                                                <a href="#accept"
                                                    onclick="updateStatut({{ $conge->id }}, 'Approuvé')">
                                                    <svg class="w-6 h-6 text-green-500 hover:text-green-300"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" fill="none"
                                                        viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="2"
                                                            d="M5 11.917 9.724 16.5 19 7.5" />
                                                    </svg>
                                                </a>
                                                <a href="#reject"
                                                    onclick="updateStatut({{ $conge->id }}, 'Refusé')">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                        class=" text-red-500 hover:text-red-300" height="16"
                                                        fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                        <path
                                                            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                                    </svg>
                                                </a>
                                            @else
                                                @if ($conge->statut == 'Non examiné')
                                                    <a href="#accept"
                                                        onclick="updateStatut({{ $conge->id }}, 'Approuvé')">
                                                        <svg class="w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="none"
                                                            viewBox="0 0 24 24">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M5 11.917 9.724 16.5 19 7.5" />
                                                        </svg>
                                                    </a>
                                                    <a href="#attente"
                                                        onclick="updateStatut({{ $conge->id }}, 'En attente')">
                                                        <svg class="w-6 h-6 text-gray-800 dark:text-white"
                                                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                            width="24" height="24" fill="currentColor"
                                                            viewBox="0 0 24 24">
                                                            <path fill-rule="evenodd"
                                                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9-3a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9Zm4 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9Z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </a>
                                                    <a href="#reject"
                                                        onclick="updateStatut({{ $conge->id }}, 'Refusé')">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                            class=" text-red-500 hover:text-red-300" height="16"
                                                            fill="currentColor" class="bi bi-x-lg"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                                        </svg>
                                                    </a>
                                                @endif
                                            @endif
                                        </td>
                                    @endif
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    </div>
    <!--end page wrapper -->
    <x-delete-modal :formId="'remove-conge-form'" :item="' ce congé'"></x-delete-modal>
    {{-- <x-edit-conge-modal :employes="$employes"></x-edit-conge-modal> --}}

    @section('script')
        <script>
            function updateStatut(congeId, statut) {
                $.ajax({
                    url: '/conges/' + congeId + '/update-statut',
                    type: 'PATCH',
                    data: {
                        _token: '{{ csrf_token() }}',
                        statut: statut
                    },
                    success: function(response) {
                        console.log(response.message);

                        // Mettre à jour le statut dans le tableau
                        const statutCell = $('#statut-' + congeId);
                        statutCell.empty(); // Efface l'ancien contenu

                        // Ajouter le nouveau contenu selon le statut
                        if (response.statut === 'Approuvé') {
                            Swal.fire({
                                title: "Opération réussie!",
                                text: "La demande de congé a été approuvée!",
                                icon: "success"
                            });
                            statutCell.append(`
                    <span class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
                        Approuvé
                    </span>
                `);
                        } else if (response.statut === 'En attente') {
                            Swal.fire({
                                title: "Opération réussie!",
                                text: "La demande de congé a été mise en attente!",
                                icon: "success"
                            });
                            statutCell.append(`
                    <span class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-yellow-100 border-transparent text-yellow-500 dark:bg-yellow-500/20 dark:border-transparent">
                        En attente
                    </span>
                `);
                        } else if (response.statut === 'Refusé') {
                            Swal.fire({
                                title: "Opération réussie!",
                                text: "La demande de congé a été rejetée!",
                                icon: "success"
                            });
                            statutCell.append(`
                    <span class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">
                        Rejetté
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

                let form = document.getElementById('remove-conge-form');
                form.setAttribute('action', link);
            }
        </script>
        <script>
            $(document).ready(function() {
                var table = $('#congesTable').DataTable({
                    lengthChange: false,
                    buttons: ['copy', 'excel', 'pdf', 'print']
                });

                table.buttons().container()
                    .appendTo('#congesTable_wrapper .col-md-6:eq(0)');
            });
        </script>
        <script>
            $(document).ready(function() {
                $('#congesTable_filter label input').attr('placeholder', 'Faites une recherche');
                $('#congesTable_filter label input').addClass('bg-gray-900');
            });
        </script>
    @endsection
</x-app-layout>
