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
                        <li class="breadcrumb-item">
                            <a href="{{ route('conges.create') }}">Demandes</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Nouvelle demande de congé</li>
                    </ol>
                </nav>
            </div>

        </div>
        <!--end breadcrumb-->
        <h6 class="mb-4">Enregistrez une nouvelle demande de congé</h6>
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
                <div class="card border-top border-4 border-white">
                    <div class="card-body p-5">
                        <div class="card-title">
                            <div class="flex-grow-1">
                                <div class="position-relative search-bar-box">
                                    <input type="text" id="search" class="form-control search-control bg-black"
                                        placeholder="Saisissez le prénom, le nom ou le postnom de l'employé">
                                    <span class="position-absolute top-50 search-show translate-middle-y"><i
                                            class='bx bx-search'></i></span>
                                    <span class="position-absolute top-50 search-close translate-middle-y"><i
                                            class='bx bx-x'></i></span>
                                </div>
                            </div>
                        </div>
                        <div class="p-2 relative overflow-x-auto" id="resultsContainer">
                        </div>
                        <form class="row g-3" action="{{ route('conges.store') }}" method="POST" id="congeForm">
                            @csrf
                            <div class="col-md-4">
                                <label for="prenom" class="form-label">Prénom</label>
                                <input type="text" class="form-control bg-custom-dark" id="prenom" name="prenom"
                                    readonly>
                            </div>
                            <div class="col-md-4">
                                <label for="nom" class="form-label">Nom</label>
                                <input type="text" class="form-control bg-custom-dark" id="nom" name="nom"
                                    readonly>
                            </div>
                            <div class="col-md-4">
                                <label for="postnom" class="form-label">PostNom</label>
                                <input type="text" class="form-control bg-custom-dark" id="postnom"
                                    name="postnom" readonly>
                            </div>
                            <div class="col-md-6">
                                <label for="inputDateDebut" class="form-label">Date de Début</label>
                                <input type="date" class="form-control bg-custom-dark" id="inputDateDebut"
                                    name="date_debut">
                            </div>
                            <div class="col-md-6">
                                <label for="inputDateFin" class="form-label">Date de Fin</label>
                                <input type="date" class="form-control bg-custom-dark" id="inputDateFin"
                                    name="date_fin">
                            </div>
                            <div class="col-12">
                                <label for="inputMotif" class="form-label">Motif du Congé</label>
                                <textarea class="form-control bg-custom-dark" id="inputMotif" name="motif" placeholder="Motif du congé..."
                                    rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-light px-5">Soumettre la demande</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>

    @section('script')
        <script>
            // Obtenir la date actuelle au format YYYY-MM-DD
            const today = new Date().toISOString().split('T')[0];
            // Fixer la date minimale à aujourd'hui pour le champ "Date de Début"
            document.getElementById('inputDateDebut').setAttribute('min', today);
        </script>
        <script>
            $(document).ready(function() {
                var typingTimer;
                var doneTypingInterval = 500;

                $('#search').on('keyup', function() {
                    clearTimeout(typingTimer);
                    typingTimer = setTimeout(searchEmployees);

                });

                $('#search').on('keydown', function() {
                    clearTimeout(typingTimer);
                });

                function searchEmployees() {
                    var formData = $('#search').serialize();
                    var searchInput = $('#search').val()
                        .trim();

                    if (searchInput === '') {

                        $('#resultsContainer').html('<p>Veuillez entrer un terme de recherche.</p>');
                        return;
                    }
                    if (searchInput.length < 3) {

                        $('#resultsContainer').html('<p>Veuillez entrer au moins 3 caractères.</p>');
                        return;
                    }

                    $.ajax({
                        url: "{{ route('employes.search') }}",
                        method: 'GET',
                        data: {
                            search: searchInput
                        },
                        success: function(employes) {
                            var resultsContainer = $('#resultsContainer');
                            resultsContainer.html('');
                            if (employes) {
                                if (employes.length == 0) {
                                    resultsContainer.html(
                                        '<p class=" text-red-500">Aucun résultat trouvé.</p>');
                                } else {
                                    var htmlContent = '';

                                    employes.forEach(employe => {
                                        htmlContent += `
                                        <a href="#" onclick="searchComplete(event, '${employe.prenom}', '${employe.nom}', '${employe.postnom}')"
                                                        class="inline-flex items-center justify-center p-2 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">

                                                        <span class="w-full">${employe.nom} ${employe.postnom} ${employe.prenom}</span>
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

            function searchComplete(event, prenom, nom, postnom) {
                event.preventDefault();
                $('#prenom').val(prenom);
                $('#nom').val(nom);
                $('#postnom').val(postnom);
                $('#resultsContainer').html('');
            }
        </script>

        <script>
            $(document).ready(function() {
                $("#congeForm").validate({
                    rules: {
                        date_debut: {
                            required: true,
                            date: true,
                            min: new Date().toISOString().split('T')[
                                0] // Vérifie que la date de début est aujourd'hui ou plus tard
                        },
                        date_fin: {
                            required: true,
                            date: true,
                            greaterThan: "#inputDateDebut" // Vérifie que la date de fin est après la date de début
                        },
                        motif: {
                            required: true,
                            minlength: 5
                        }
                    },
                    messages: {
                        date_debut: {
                            required: "Veuillez entrer la date de début.",
                            date: "Veuillez entrer une date valide.",
                            min: "La date de début ne peut pas être antérieure à aujourd'hui."
                        },
                        date_fin: {
                            required: "Veuillez entrer la date de fin.",
                            date: "Veuillez entrer une date valide.",
                            greaterThan: "La date de fin doit être postérieure à la date de début."
                        },
                        motif: {
                            required: "Veuillez entrer un motif pour le congé.",
                            minlength: "Le motif doit contenir au moins 5 caractères."
                        }
                    }
                });

                // Custom method for comparing two date fields
                $.validator.addMethod("greaterThan", function(value, element, param) {
                    return this.optional(element) || new Date(value) > new Date($(param).val());
                }, "La date de fin doit être postérieure à la date de début.");
            });
        </script>
    @endsection

</x-app-layout>
