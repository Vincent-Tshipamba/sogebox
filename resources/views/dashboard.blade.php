<x-app-layout>
    <div class="page-content">
        @if (Auth::user()->hasAnyRole('superadmin', 'rh', 'commercial', 'atelier', 'dga'))
            <div class="card bg-bg-chart rounded-lg shadow-lg p-4">
                <div class="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">

                        <a href="{{ route('employes.index') }}">
                            <div class="col bg-custom-dark p-4 rounded-lg shadow hover:bg-gray-900">
                                <div class="flex items-center">
                                    <h5 class="text-white text-lg">{{ $totalEmployes }}</h5>
                                    <div class="ml-auto">
                                        <i class='bx bx-group text-3xl text-white'></i>
                                    </div>
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-1.5 my-3">
                                    <div class="bg-blue-500 h-1.5 rounded-full" style="width: 55%"></div>
                                </div>
                                <div class="flex items-center text-white">
                                    <p class="text-sm">Total employés</p>
                                </div>
                            </div>
                        </a>
                        <a href="{{ route('commandes.index') }}">
                            <div class="col hover:bg-gray-900 p-4 rounded-lg shadow bg-custom-dark">
                                <div class="flex items-center">
                                    <h5 class="text-white text-lg">{{ $totalCommandes }}</h5>
                                    <div class="ml-auto">
                                        <i class='bx bx-dollar text-3xl text-white'></i>
                                    </div>
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-1.5 my-3">
                                    <div class="bg-green-500 h-1.5 rounded-full" style="width: 55%"></div>
                                </div>
                                <div class="flex items-center text-white">
                                    <p class="text-sm">Total commandes</p>
                                </div>
                            </div>
                        </a>
                        <a href="{{ route('clients.index') }}">
                            <div class="col hover:bg-gray-900 p-4 rounded-lg shadow bg-custom-dark">
                                <div class="flex items-center">
                                    <h5 class="text-white text-lg">{{ $totalClients }}</h5>
                                    <div class="ml-auto">
                                        <i class='bx bx-group text-3xl text-white'></i>
                                    </div>
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-1.5 my-3">
                                    <div class="bg-red-500 h-1.5 rounded-full" style="width: 55%"></div>
                                </div>
                                <div class="flex items-center text-white">
                                    <p class="text-sm">Clients</p>
                                </div>
                            </div>
                        </a>
                        <a href="{{ route('users.index') }}">
                            <div class="col hover:bg-gray-900 p-4 rounded-lg shadow bg-custom-dark">
                                <div class="flex items-center">
                                    <h5 class="text-white text-lg">{{ $totalUsers }}</h5>
                                    <div class="ml-auto">
                                        <i class='bx bx-group text-3xl text-white'></i>
                                    </div>
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-1.5 my-3">
                                    <div class="bg-yellow-500 h-1.5 rounded-full" style="width: 55%"></div>
                                </div>
                                <div class="flex items-center text-white">
                                    <p class="text-sm">Utilisateurs</p>
                                </div>
                            </div>
                        </a>
                </div>
            </div>
        @endif

        <div class="row">
            <div class="col-12 col-lg-8 col-xl-8 d-flex">
                <div class="card radius-10 w-100">
                    <div class="card-body">
                        <div>
                            <form class="max-w-sm mx-auto">
                                <div class=" flex items-center gap-4">
                                </div>
                            </form>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <h5 class="mb-3">Clients Traffic</h5>
                            </div>
                            <div>
                                <select id="year-select"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom-dark focus:border-custom-dark block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom-dark dark:focus:border-custom-dark">
                                </select>
                            </div>
                        </div>
                        <div class="chart h-72 items-center justify-center bg-custom-dark">
                            <canvas id="chartClients" class="hover:bg-gray-900"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-4 col-xl-4 flex items-center justify-center gap-5 max-h-full">

                <div class="card radius-10 overflow-hidden w-100 hover:bg-gray-900 bg-custom-dark">
                    <div class="card-body mx-auto">
                        <div class="chart-js-container2">
                            <canvas id="chartEmployes"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--End Row-->


        <div class="bg-bg-chart px-3 pt-2">
            <h5 class="text-lg">Soldes des comptes courants</h5>
            <div class="items-center justify-center pt-4 my-4 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 "
                id="viewSoldes">
            </div>
        </div><!--End Row-->

        <div class="row">
            <div class="card radius-10 w-100">
                <div class="card-header border-bottom bg-transparent">
                    <div class="d-flex align-items-center">
                        <div>
                            <h5 class="mb-0">Employés récemment ajoutés</h5>
                        </div>
                    </div>
                </div>
                <ul class="list-group list-group-flush review-list" id="recentEmployees">

                </ul>
            </div>
        </div><!--End Row-->

        <div class="card radius-10">
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <div>
                        <h5 class="mb-0">Commandes en attente</h5>
                    </div>
                    <div class="dropdown options ms-auto">
                        <div class="dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                            <i class='bx bx-dots-horizontal-rounded'></i>
                        </div>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:;">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:;">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:;">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <hr>
                <div class="table-responsive">
                    <table class="table align-middle mb-0">
                        <thead class="table-light">
                            <tr>
                                <th>Order id</th>
                                <th>Product</th>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#897656</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="recent-product-img">
                                            <img src="assets/images/icons/chair.png" alt="">
                                        </div>
                                        <div class="ms-2">
                                            <h6 class="mb-1 font-14">Light Blue Chair</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>Brooklyn Zeo</td>
                                <td>12 Jul 2020</td>
                                <td>$64.00</td>
                                <td>
                                    <div class="badge rounded-pill bg-light text-white w-100">In Progress</div>
                                </td>
                                <td>
                                    <div class="d-flex order-actions"> <a href="javascript:;" class=""><i
                                                class="bx bx-cog"></i></a>
                                        <a href="javascript:;" class="ms-4"><i
                                                class="bx bx-down-arrow-alt"></i></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#987549</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="recent-product-img">
                                            <img src="assets/images/icons/shoes.png" alt="">
                                        </div>
                                        <div class="ms-2">
                                            <h6 class="mb-1 font-14">Green Sport Shoes</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>Martin Hughes</td>
                                <td>14 Jul 2020</td>
                                <td>$45.00</td>
                                <td>
                                    <div class="badge rounded-pill bg-light text-white w-100">Completed</div>
                                </td>
                                <td>
                                    <div class="d-flex order-actions"> <a href="javascript:;" class=""><i
                                                class="bx bx-cog"></i></a>
                                        <a href="javascript:;" class="ms-4"><i
                                                class="bx bx-down-arrow-alt"></i></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#685749</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="recent-product-img">
                                            <img src="assets/images/icons/headphones.png" alt="">
                                        </div>
                                        <div class="ms-2">
                                            <h6 class="mb-1 font-14">Red Headphone 07</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>Shoan Stephen</td>
                                <td>15 Jul 2020</td>
                                <td>$67.00</td>
                                <td>
                                    <div class="badge rounded-pill bg-light text-white w-100">Cancelled</div>
                                </td>
                                <td>
                                    <div class="d-flex order-actions"> <a href="javascript:;" class=""><i
                                                class="bx bx-cog"></i></a>
                                        <a href="javascript:;" class="ms-4"><i
                                                class="bx bx-down-arrow-alt"></i></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#887459</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="recent-product-img">
                                            <img src="assets/images/icons/idea.png" alt="">
                                        </div>
                                        <div class="ms-2">
                                            <h6 class="mb-1 font-14">Mini Laptop Device</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>Alister Campel</td>
                                <td>18 Jul 2020</td>
                                <td>$87.00</td>
                                <td>
                                    <div class="badge rounded-pill bg-light text-white w-100">Completed</div>
                                </td>
                                <td>
                                    <div class="d-flex order-actions"> <a href="javascript:;" class=""><i
                                                class="bx bx-cog"></i></a>
                                        <a href="javascript:;" class="ms-4"><i
                                                class="bx bx-down-arrow-alt"></i></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#335428</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="recent-product-img">
                                            <img src="assets/images/icons/user-interface.png" alt="">
                                        </div>
                                        <div class="ms-2">
                                            <h6 class="mb-1 font-14">Purple Mobile Phone</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>Keate Medona</td>
                                <td>20 Jul 2020</td>
                                <td>$75.00</td>
                                <td>
                                    <div class="badge rounded-pill bg-light text-white w-100">In Progress</div>
                                </td>
                                <td>
                                    <div class="d-flex order-actions"> <a href="javascript:;" class=""><i
                                                class="bx bx-cog"></i></a>
                                        <a href="javascript:;" class="ms-4"><i
                                                class="bx bx-down-arrow-alt"></i></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#224578</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="recent-product-img">
                                            <img src="assets/images/icons/watch.png" alt="">
                                        </div>
                                        <div class="ms-2">
                                            <h6 class="mb-1 font-14">Smart Hand Watch</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>Winslet Maya</td>
                                <td>22 Jul 2020</td>
                                <td>$80.00</td>
                                <td>
                                    <div class="badge rounded-pill bg-light text-white w-100">Cancelled</div>
                                </td>
                                <td>
                                    <div class="d-flex order-actions"> <a href="javascript:;" class=""><i
                                                class="bx bx-cog"></i></a>
                                        <a href="javascript:;" class="ms-4"><i
                                                class="bx bx-down-arrow-alt"></i></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#447896</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="recent-product-img">
                                            <img src="assets/images/icons/tshirt.png" alt="">
                                        </div>
                                        <div class="ms-2">
                                            <h6 class="mb-1 font-14">T-Shirt Blue</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>Emy Jackson</td>
                                <td>28 Jul 2020</td>
                                <td>$96.00</td>
                                <td>
                                    <div class="badge rounded-pill bg-light text-white w-100">Completed</div>
                                </td>
                                <td>
                                    <div class="d-flex order-actions"> <a href="javascript:;" class=""><i
                                                class="bx bx-cog"></i></a>
                                        <a href="javascript:;" class="ms-4"><i
                                                class="bx bx-down-arrow-alt"></i></a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    @section('script')
        <script>
            $(document).ready(function() {
                $.ajax({
                    type: "get",
                    url: "/getsoldes",
                    dataType: "json",
                    success: function(response) {

                        response.forEach(solde => {
                            $('#viewSoldes').append(
                                `
                                <div class="col">
                                    <div class="card radius-10 p-4 hover:bg-gray-900 bg-custom-dark">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center">
                                                <div>
                                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
                                                    </svg>
                                                </div>
                                                <div class="ms-3">
                                                    <h6 class="mb-2 text-base">Résumé du compte : ${solde.nom_compte}</h6>
                                                    <small class="mb-0 text-base">Solde actuel : ${solde.solde_actuel}</small>
                                                </div>
                                                <div class="ms-auto fs-1 text-white">
                                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `
                            )
                        });
                    }
                });

                $.ajax({
                    type: "get",
                    url: "/getrecentemployees",
                    dataType: "json",
                    success: function(response) {
                        response.forEach(employee => {
                            $('#recentEmployees').append(
                                `
                                <li class="list-group-item bg-transparent">
                                    <div class="d-flex align-items-center">
                                        <img src="{{ asset('img/profil.jpeg') }}" alt="user avatar"
                                            class="rounded-circle" width="55" height="55">
                                        <div class="ms-3">
                                            <h6 class="mb-0">${employee.nom} ${employee.postnom} ${employee.prenom}</h6>
                                            <p class="mb-0 small-font">Occupe le poste de ${employee.poste} et reçoit ${employee.salaire} comme salaire.</p>
                                        </div>
                                        <div class="ms-auto star">
                                            <i class='bx bxs-star text-white'></i>
                                            <i class='bx bxs-star text-white'></i>
                                            <i class='bx bxs-star text-white'></i>
                                            <i class='bx bxs-star text-white'></i>
                                            <i class='bx bxs-star text-white'></i>
                                        </div>
                                    </div>
                                </li>
                                `
                            )
                        });
                    }
                });
            });
        </script>
        <script>
            const data1 = {
                labels: ['Hommes', 'Femmes'],
                datasets: [{
                    label: 'Total employés',
                    data: [
                        {{ $employes_hommes }},
                        {{ $employes_femmes }}
                    ],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            };

            const config1 = {
                type: 'doughnut',
                data: data1,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Participation des Hommes et des Femmes'
                        }
                    }
                },
            };

            const chartEmployes = new Chart(
                document.getElementById('chartEmployes'),
                config1
            );
        </script>
        <script>
            function populateYearSelect() {
                const currentYear = new Date().getFullYear(); // Récupère l'année actuelle
                const yearSelect = $('#year-select'); // Cibler le sélecteur des années
                const numYears = 5; // Nombre d'années à afficher, y compris l'année actuelle

                // Vider le sélecteur avant d'ajouter les nouvelles options
                yearSelect.empty();

                // Générer les options d'années (de l'année actuelle à il y a 5 ans)
                for (let i = 0; i <= numYears; i++) {
                    const year = currentYear - i;
                    yearSelect.append(`<option value="${year}">${year}</option>`);
                }
            }


            function createChart(clientData) {
                const ctx = document.getElementById('chartClients').getContext('2d');

                // Si le graphique existe déjà, le détruire avant de le recréer
                if (window.clientChart) {
                    window.clientChart.destroy();
                }

                window.clientChart = new Chart(ctx, {
                    type: 'scatter',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        datasets: [{
                            type: 'bar',
                            label: 'Nombre de clients',
                            data: clientData,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.2)'
                        }, {
                            type: 'line',
                            label: 'Nombre de clients',
                            data: clientData,
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)'
                            ],

                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        animations: {
                            tension: {
                                duration: 1000,
                                easing: 'linear',
                                from: 1,
                                to: 0,
                                loop: true
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            }


            // Fonction pour récupérer les données via AJAX
            function getClientTrafficData(year) {
                $.ajax({
                    url: '/client-traffic',
                    method: 'GET',
                    data: {
                        year: year
                    },
                    success: function(response) {
                        const clientData = response.data;

                        createChart(clientData);
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });
            }

            // Event listeners pour les sélecteurs d'année et de mois
            $('#year-select').on('change', function() {
                const year = $('#year-select').val();

                // Appeler la fonction pour obtenir les données du trafic des clients
                getClientTrafficData(year);
            });

            // Charger le graphique au chargement initial avec les valeurs par défaut
            $(document).ready(function() {
                populateYearSelect()

                const defaultYear = $('#year-select').val();

                getClientTrafficData(defaultYear);
            });
        </script>
    @endsection
</x-app-layout>
