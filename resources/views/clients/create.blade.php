<x-app-layout>
    <div class="page-content">
        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="{{ route('dashboard') }}"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Formulaire d'ajout de client</li>
                    </ol>
                </nav>
            </div>
            <div class="ms-auto">
                <div class="btn-group">
                    <button type="button" class="btn btn-light">Settings</button>
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
        <div class="row">
            <div class="card border-top border-0 border-white">
                <div class="card-body p-5">
                    <div class="card-title d-flex align-items-center">
                        <div><i class="bx bxs-user me-1 font-22 text-white"></i>
                        </div>
                        <h5 class="mb-0 text-white">Enregistrement d'un client</h5>
                    </div>
                    <hr>
                    <div id="error-message"
                        class="hidden items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-gray-900 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
                        role="alert">
                        <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <div class="ms-3 text-sm font-medium">
                            <p></p>
                        </div>
                        <button type="button"
                            class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                            data-dismiss-target="#error-message" aria-label="Close">
                            <span class="sr-only">Dismiss</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                    @if ($errors->any())
                        @foreach ($errors->all() as $error)
                            <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-gray-900 dark:bg-gray-800 dark:text-red-400"
                                role="alert">

                                <span class="font-medium">{{ $error }}</span>

                            </div>
                        @endforeach
                    @endif
                    <form class="row g-3" enctype="multipart/form-data" method="post" id="jQueryValidationClientForm"
                        action="{{ route('clients.store') }}">
                        @csrf
                        <!-- Nom complet -->
                        <div class="col-md-12">
                            <label for="inputFirstName" class="form-label">Nom complet</label>
                            <div class="input-group">
                                <span class="input-group-text"><i class='bx bxs-user'></i></span>
                                <input type="text" name="nom" class="bg-custom-dark form-control border-start-0"
                                    id="inputFirstName" placeholder="Entrer le nom complet du client" required />
                            </div>
                        </div>

                        <!-- Type de client -->
                        <div class="col-md-12">
                            <label for="clientType" class="form-label">Type de client</label>
                            <div class="input-group">
                                <span class="input-group-text"><i class='bx bxs-user-detail'></i></span>
                                <select id="clientType" name="type_client"
                                    class="form-select border-start-0 bg-custom-dark" required>
                                    <option value="" selected>Choisir le type de client</option>
                                    <option value="particulier">Particulier</option>
                                    <option value="entreprise">Entreprise</option>
                                    <option value="fournisseur">Fournisseur</option>
                                </select>
                            </div>
                        </div>

                        <!-- Téléphone -->
                        <div class="col-md-12">
                            <label for="inputPhoneNo" class="form-label">Numéro de téléphone</label>
                            <div class="input-group">
                                <span class="input-group-text"><i class='bx bxs-phone'></i></span>
                                <input type="texte" name="telephone"
                                    class="form-control bg-custom-dark border-start-0" id="inputPhoneNo"
                                    placeholder="000 000 000 000" required />
                            </div>
                        </div>

                        <!-- Email -->
                        <div class="col-md-12">
                            <label for="inputEmailAddress" class="form-label">Adresse email</label>
                            <div class="input-group">
                                <span class="input-group-text"><i class='bx bxs-envelope'></i></span>
                                <input type="email" name="email"
                                    class="bg-custom-dark form-control border-start-0" id="inputEmailAddress"
                                    placeholder="exemple@domaine.com" required />
                            </div>
                        </div>

                        <!-- Adresse -->
                        <div class="col-md-12">
                            <label for="inputAddress" class="form-label">Adresse complète</label>
                            <textarea name="adresse" class="form-control bg-custom-dark" id="inputAddress" placeholder="Rue, Ville, Quartier"
                                rows="3" required></textarea>
                        </div>

                        <!-- Image (profil ou logo d'entreprise) -->
                        <div id="drop" class="flex items-center justify-center w-full mb-6 h-full">
                            <label for="dropzone-file"
                                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-bg-chart hover:bg-custom-dark dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                            class="font-semibold">Cliquez pour charger</span> une image</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX.
                                        800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" name="images" class="hidden" />
                            </label>
                        </div>


                        <div class="mb-4 rounded-md">
                            <img id="image-preview" src="" alt="Image Preview"
                                class="mt-4 hidden w-full max-h-full rounded-lg shadow-sm" />
                        </div>

                        <!-- Conditions -->
                        <div class="col-12">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck2" required />
                                <label class="form-check-label" for="gridCheck2">Je confirme que les informations
                                    sont correctes.</label>
                            </div>
                        </div>

                        <!-- Soumettre -->
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary px-5">Enregistrer le client</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>

    @section('script')
        <script>
            $(document).ready(function() {
                $("#jQueryValidationClientForm").validate({
                    rules: {
                        nom: {
                            required: true,
                            maxlength: 255
                        },
                        type_client: {
                            required: true,
                            // Valider que le type est soit "Particulier" soit "Entreprise"
                            equalTo: ["Particulier", "Entreprise", "Fournisseur"]
                        },
                        telephone: {
                            required: true,
                            maxlength: 20,
                        },
                        email: {
                            required: true,
                            email: true // Valide que c'est un format email valide
                        },
                        adresse: {
                            required: true,
                            maxlength: 255
                        },
                        images: {
                            accept: "image/*" // Accepter uniquement les fichiers image
                        }
                    },
                    messages: {
                        nom: {
                            required: "Veuillez entrer le nom complet du client.",
                            maxlength: "Le nom ne doit pas dépasser 255 caractères."
                        },
                        type_client: {
                            required: "Veuillez sélectionner le type de client.",
                            equalTo: "Le type de client doit être soit 'Particulier' soit 'Entreprise'."
                        },
                        telephone: {
                            required: "Veuillez entrer un numéro de téléphone.",
                            maxlength: "Le numéro de téléphone ne doit pas dépasser 20 caractères.",
                            regex: "Veuillez entrer un numéro de téléphone valide (ex: +243123456789)"
                        },
                        email: {
                            required: "Veuillez entrer une adresse e-mail.",
                            email: "Veuillez entrer une adresse e-mail valide."
                        },
                        adresse: {
                            required: "Veuillez entrer l'adresse du client.",
                            maxlength: "L'adresse ne doit pas dépasser 255 caractères."
                        },
                        images: {
                            accept: "Veuillez télécharger une image valide (jpg, png, etc.)."
                        }
                    }
                });

            });
        </script>
        <script>
            $(document).ready(function() {
                const fileInput = document.querySelector('#dropzone-file');
                const imagePreview = document.querySelector('#image-preview');
                var errorMessage = document.querySelector('#error-message');
                const maxFileSize = 20 * 1024 * 1024;

                fileInput.addEventListener('change', function() {
                    const file = this.files[0];
                    if (file) {
                        if (!file.type.startsWith('image/')) {
                            showError('Veuillez sélectionner un fichier image.');
                            return;
                        }

                        if (file.size > maxFileSize) {
                            showError('La taille du fichier ne doit pas dépasser 10 Mo.');
                            return;
                        }

                        const img = new Image();
                        img.onload = function() {
                            // No errors, show the image preview
                            errorMessage.classList.add('hidden');
                            const reader = new FileReader();
                            reader.onload = function(e) {
                                imagePreview.src = e.target.result;
                                imagePreview.classList.remove('hidden');
                            };
                            reader.readAsDataURL(file);
                        };
                        img.src = URL.createObjectURL(file);
                    } else {
                        // No file selected
                        imagePreview.src = '';
                        imagePreview.classList.add('hidden');
                        errorMessage.classList.add('hidden');
                    }
                });
            });

            function showError(message) {
                console.log(message);

                $("#error-message p").text(message);
                $("#error-message").removeClass('hidden')
                $("#error-message").addClass('flex')
            }
        </script>
    @endsection
</x-app-layout>
