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
                        <li class="breadcrumb-item active" aria-current="page">Liste des utilisateurs</li>
                    </ol>
                </nav>
            </div>
            <div class="ms-auto">
                <div class="btn-group">
                    <div class="inline-flex gap-x-2 me-4">
                        <a href="#" data-modal-target="new-departement-modal"
                            data-modal-toggle="new-departement-modal"
                            class="hover:bg-gray-400 hover:text-white py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-300 text-black focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white hover:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                                    clip-rule="evenodd" />
                            </svg>
                            Nouveau departement
                        </a>
                    </div>
                    <button type="button" class="btn btn-light">Parametres</button>
                    <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"> <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end"> <a class="dropdown-item"
                            href="javascript:;">Action</a>
                        <a class="dropdown-item" href="javascript:;">Another action</a>
                        <a class="dropdown-item" href="javascript:;">Something else here</a>
                        <div class="dropdown-divider"></div> <a class="dropdown-item" href="javascript:;">Separated
                            link</a>
                    </div>
                </div>
            </div>
        </div>
        <!--end breadcrumb-->
        <h6 class="mb-4">Consultez la liste de tous les departements</h6>
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
        <div id="alert-success"
            class="hidden items-center p-4 mb-4 text-green-400 border-t-4 border-green-300 bg-gray-900 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
            role="alert">
            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 20">
                <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div class="ms-3 text-sm font-medium" id="div-success">
                {{ Session('success') }}
            </div>
            <button type="button"
                class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                data-dismiss-target="#alert-success" aria-label="Close">
                <span class="sr-only">Dismiss</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>

        <div class="card">
            <div class="card-body">
                <div class="table-responsive">
                    <table id="departementsTable" class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom département</th>
                                <th>Chef du département</th>
                                <th>Numéro de téléphone du chef</th>
                                <th>Employés</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($departements as $key => $departement)
                                <tr>
                                    <td>{{ $key + 1 }}</td>
                                    <td>{{ $departement->libelle }}</td>
                                    <td>
                                        @if ($departement->employes->isNotEmpty())
                                            {{ $departement->employes->first()->nom }}
                                            {{ $departement->employes->first()->prenom }}
                                        @else
                                            Aucun chef assigné
                                        @endif
                                    </td>
                                    <td>
                                        @if ($departement->employes->isNotEmpty())
                                            {{ $departement->employes->first()->telephone }}
                                        @else
                                            Aucun chef assigné
                                        @endif
                                    </td>
                                    <td>{{ $departement->employes_count }}</td>
                                    <td class="flex items-center justify-center space-x-2">
                                        <a href="{{ route('departements.update', $departement->id) }}"
                                            class="flex items-center justify-center transition-all duration-200 ease-linear rounded-md size-8 edit-item-btn ">
                                            <svg class="w-6 h-6 text-white hover:text-gray-400" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2"
                                                    d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                                            </svg>
                                        </a>
                                        <a href="{{ route('departements.destroy', $departement->id) }}"
                                            data-modal-target="delete-modal" onclick="remove(event)"
                                            data-modal-toggle="delete-modal"
                                            class="flex items-center justify-center transition-all duration-200 ease-linear rounded-md size-8 remove-item-btn ">
                                            <svg class="w-6 h-6 text-white hover:text-gray-400" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2"
                                                    d="M16 12h4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    </div>
    <!--end page wrapper -->
    <x-delete-departement-modal></x-delete-departement-modal>
    <x-new-departement-modal></x-new-departement-modal>
    {{-- <x-edit-departement-modal :employes="$employes"></x-edit-departement-modal> --}}

    @section('script')
        <script>
            function remove(event) {
                event.preventDefault()

                let link = event.target.closest('a').getAttribute("href");

                let form = document.getElementById('remove-departement-form');
                form.setAttribute('action', link);
            }

            // function update(event) {
            //     event.preventDefault()

            //     let link = event.target.closest('a').getAttribute("href");
            //     let departementNom = event.target.closest('a').getAttribute("data-departement-nom");
            //     let chefId = event.target.closest('a').getAttribute("data-chef-id");
            //     let chefPhone = event.target.closest('a').getAttribute("data-chef-phonenumber")

            //     let form = document.getElementById('edit-departement-form');
            //     form.setAttribute('action', link);

            //     document.getElementById('departement-nom').value = departementNom;
            //     document.getElementById('chef-id').value = chefId;
            //     document.getElementById('chef-phonenumber').value = chefPhone;
            // }
        </script>
        <script>
            $(document).ready(function() {
                var table = $('#departementsTable').DataTable({
                    lengthChange: false,
                    buttons: ['copy', 'excel', 'pdf', 'print']
                });

                table.buttons().container()
                    .appendTo('#departementsTable_wrapper .col-md-6:eq(0)');
            });
        </script>
        <script>
            $(document).ready(function() {
                $('#departementsTable_filter label input').attr('placeholder', 'Entrer un nom');
                $('#departementsTable_filter label input').addClass('bg-gray-900');
            });
        </script>
    @endsection
</x-app-layout>
