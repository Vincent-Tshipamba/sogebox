<x-app-layout>
    <div class="page-content">
        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="breadcrumb-title pe-3">Sogeref</div>
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Facture N°
                            {{ $facture->numero_facture }}</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!--end breadcrumb-->
        <div class="card">
            <div class="card-body">
                <div id="invoice">
                    <div class="toolbar hidden-print mb-3 flex items-center justify-center space-x-8">
                        <!-- Toggle entre A4 et A5 -->
                        <div class="flex items-center space-x-2">
                            <span class=" text-base">Grand format</span> <!-- Étiquette pour A4 -->
                            <label class="relative cursor-pointer flex items-center">
                                <input type="checkbox" id="formatToggle" value="" class="peer sr-only" />
                                <div
                                    class="peer h-7 w-14 rounded-full bg-gray-400 after:absolute after:top-[3px] after:left-[3px] after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200">
                                </div>
                            </label>
                            <span class=" text-base">Petit format</span> <!-- Étiquette pour A5 -->
                        </div>
                        <div class="text-end">
                            <button type="button" class="btn btn-dark" onclick="window.print()"><i
                                    class="fa fa-print"></i> Imprimer</button>
                            <button type="button" class="btn btn-danger"><i class="fa fa-file-pdf-o"></i>
                                Exporter comme PDF
                            </button>
                        </div>
                    </div>
                    <div class="invoice overflow-auto md:max-w-2xl mx-auto bg-white" id="invoiceContainer">
                        <div>
                            <header>
                                <div class="row">
                                    <div class="col">
                                        <a href="javascript:;">
                                            <img src="{{ asset('img/brand.png') }}" width="100" alt="" />
                                        </a>
                                    </div>
                                    <div class="col company-details">
                                        <h2 class="name">
                                            <a class="text-black" href="javascript:;">
                                                Arboshiki
                                            </a>
                                        </h2>
                                        <div class="text-black">455 Foggy Heights, AZ 85004, US</div>
                                        <div class="text-black">(123) 456-789</div>
                                        <div class="text-black">company@example.com</div>
                                    </div>
                                </div>
                            </header>
                            <main>
                                <div class="row contacts mb-5">
                                    <div class="col invoice-to">
                                        <div class="text-black font-extrabold">FACTURE A :</div>
                                        <h2 class="to text-black">{{ $client->nom }}</h2>
                                        {{-- <div class="address text-black">{{ $client->adresse }}</div> --}}
                                        <div class="email">
                                            <a class="text-black"
                                                href="tel:{{ $client->telephone }}">{{ $client->telephone }}</a>
                                        </div>
                                        <div class="email">
                                            <a href="mailto:{{ $client->email }}"
                                                class="text-black">{{ $client->email }}</a>
                                        </div>
                                    </div>
                                    <div class="col invoice-details">
                                        <h1 class="invoice- w-full text-black">FACTURE #{{ $facture->numero_facture }}
                                        </h1>
                                        <div class="date text-black">Date de la facture: {{ $facture->date_facture }}
                                        </div>
                                        {{-- <div class="date">Due Date: 30/10/2018</div> --}}
                                    </div>
                                </div>
                                <table class="mb-5">
                                    <thead class="text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th class="text-black">#</th>
                                            <th class="text-left text-black">Item</th>
                                            <th class="text-left text-black">Quantite</th>
                                            <th class="text-left text-black">Prix Unitaire</th>
                                            <th class="text-left text-black">TOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($allProducts as $key => $produit)
                                            <tr class="text-black bg-white">
                                                <td class="text-black">{{ $key + 1 }}</td>
                                                <td class="text-left text-black">
                                                    {{ $produit['produit'] }}
                                                </td>
                                                <td class="text-black">{{ $produit['quantite'] }}</td>
                                                <td class="text-black">${{ $produit['prix_negocie'] }}</td>
                                                <td class="text-black">{{ $facture->montant }}</td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                                <div class="notices border-l-2 border-l-black">
                                    <div class="text-black">NOTICE:</div>
                                    <div class="notice text-sm xl:text-base text-black">
                                        Des frais financiers de 1,5 % seront prélevés sur les soldes impayés après
                                        30 jours
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    @section('script')
        <script>
            $(document).ready(function() {
                $('#formatToggle').on('change', function() {
                    if ($(this).is(':checked')) {
                        // Si le checkbox est coché, changer le format en plus petit (A5)
                        $('#invoiceContainer').removeClass('md:max-w-2xl').addClass(
                            'md:max-w-sm'); // Utilisation de max-w-sm pour un format A5
                    } else {
                        // Sinon, revenir au format A4
                        $('#invoiceContainer').removeClass('md:max-w-sm').addClass(
                            'md:max-w-2xl'); // Utilisation de max-w-lg pour un format A4
                    }
                });
            });
        </script>
    @endsection
</x-app-layout>
