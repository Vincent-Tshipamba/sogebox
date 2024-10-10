@props(['commandes'])

<div class="card">
    <div class="card-body">
        <div class="d-lg-flex align-items-center mb-4 gap-3">
            <div class="position-relative">
                <input type="text" class="form-control bg-bg-chart ps-5 radius-30" placeholder="Search Order">
                <span class="position-absolute top-50 product-show translate-middle-y"><i class="bx bx-search"></i></span>
            </div>
            <div class="ms-auto"><a href="{{ route('commandes.create') }}" class="btn btn-light radius-30 mt-2 mt-lg-0"><i
                        class="bx bxs-plus-square"></i>Nouvelle commande</a></div>
        </div>
        <div class="table-responsive">
            <table id="commandesTable" class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Client</th>
                        <th>Produit</th>
                        <th>Date de Commande</th>
                        <th>Montant Total</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($commandes as $key => $commande)
                        <tr>
                            @php
                                $total = 0;
                            @endphp
                            <td>{{ $key + 1 }}</td>
                            <td>{{ $commande->client->nom }}</td>
                            <td>
                                @foreach ($commande->produits as $produit)
                                    @php
                                        $pt = $produit->pivot->quantite * $produit->pivot->prix_unitaire_negocie;
                                        $total += $pt;
                                    @endphp
                                    <li>
                                        <div>{{ $produit->produits }} -</div>
                                        <div>Quantité: {{ $produit->pivot->quantite }},</div>
                                        <div>Prix Unitaire: {{ $produit->pivot->prix_unitaire_negocie }} $</div>
                                        <div>Total: ${{ $pt }}</div>
                                    </li><br>
                                @endforeach
                            </td>
                            <td>{{ $commande->date_commande }}</td>
                            <td>
                                @foreach ($commande->produits as $produit)
                                    @php
                                        $pt = $produit->pivot->quantite * $produit->pivot->prix_unitaire_negocie;
                                        $total += $pt;
                                    @endphp
                                    {{ $total }}
                                @endforeach
                            </td>
                            <td class="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
                                id="statut-{{ $commande->id }}">
                                @if ($commande->statut == 'Livrée')
                                    <span
                                        class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
                                        Livrée
                                    </span>
                                @elseif ($commande->statut == 'En attente')
                                    <span
                                        class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-yellow-100 border-transparent text-yellow-500 dark:bg-yellow-500/20 dark:border-transparent">
                                        En attente
                                    </span>
                                @elseif ($commande->statut == 'Annulée')
                                    <span
                                        class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">
                                        Annulée
                                    </span>
                                @endif
                            </td>
                            @if (auth()->user()->hasRole('superadmin') || auth()->user()->hasRole('rh'))
                                <td class="flex items-center justify-center space-x-2">
                                    @if (auth()->user()->hasRole('superadmin'))
                                        <a href="{{ route('commandes.destroy', $commande->id) }}"
                                            data-modal-target="delete-modal" onclick="remove(event)"
                                            data-modal-toggle="delete-modal"
                                            class="flex items-center justify-center transition-all duration-200 ease-linear rounded-md size-8 remove-item-btn ">
                                            <svg class="w-6 h-6 text-red-500 hover:text-red-300" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                    d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href="#attente" onclick="updateStatut({{ $commande->id }}, 'En attente')">
                                            <svg class="w-6 h-6 text-yellow-600 hover:text-yellow-300"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd"
                                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9-3a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9Zm4 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9Z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href="#accept" onclick="updateStatut({{ $commande->id }}, 'Livrée')">
                                            <svg class="w-6 h-6 text-green-500 hover:text-green-300" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2"
                                                    d="M5 11.917 9.724 16.5 19 7.5" />
                                            </svg>
                                        </a>
                                        <a href="#reject" onclick="updateStatut({{ $commande->id }}, 'Annulée')">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                class=" text-red-500 hover:text-red-300" height="16"
                                                fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                <path
                                                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                            </svg>
                                        </a>
                                    @else
                                        @if ($commande->statut == 'Non examiné')
                                            <a href="#accept" onclick="updateStatut({{ $commande->id }}, 'Livrée')">
                                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2"
                                                        d="M5 11.917 9.724 16.5 19 7.5" />
                                                </svg>
                                            </a>
                                            <a href="#attente"
                                                onclick="updateStatut({{ $commande->id }}, 'En attente')">
                                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd"
                                                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9-3a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9Zm4 0a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0V9Z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </a>
                                            <a href="#reject" onclick="updateStatut({{ $commande->id }}, 'Annulée')">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    class=" text-red-500 hover:text-red-300" height="16"
                                                    fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
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
