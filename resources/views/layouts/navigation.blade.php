  <!--sidebar wrapper -->
  <div class="sidebar-wrapper" data-simplebar="true">
      <div class="sidebar-header">
          <div>
              <img src="{{ asset('img/brand.png') }}" class="logo-icon" alt="logo icon">
          </div>
          <div>
              <h4 class="logo-text">Sogebox App</h4>
          </div>
          <div class="toggle-icon ms-auto"><i class='bx bx-arrow-back'></i>
          </div>
      </div>
      <!--navigation-->
      <ul class="metismenu" id="menu">
          <li>
              <a href="{{ route('dashboard') }}">
                  <div class="parent-icon"><i class='bx bx-home-alt'></i>
                  </div>
                  <div class="menu-title">Dashboard</div>
              </a>
          </li>
          <li class="menu-label">Réception</li>
          <li>
              <a href="javascript:;" class="has-arrow">
                  <div class="parent-icon">
                      <i class='bx bx-cart'></i>
                  </div>
                  <div class="menu-title">
                      Commandes
                  </div>
              </a>
              <ul>
                  <li>
                      <a href="{{ route('commandes.index') }}">
                          <div class="parent-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                                  <path fill="currentColor"
                                      d="M4 5v6h6V5zm2 2h2v2H6zm6 0v2h15V7zm-8 6v6h6v-6zm2 2h2v2H6zm6 0v2h15v-2zm-8 6v6h6v-6zm2 2h2v2H6zm6 0v2h15v-2z" />
                              </svg>
                          </div>
                          <div class="menu-title">
                              Liste des Commandes
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="{{ route('commandes.create') }}">
                          <div class="parent-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12">
                                  <path fill="currentColor"
                                      d="M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.75a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.25a.75.75 0 0 0 0-1.5H6.5z" />
                              </svg>
                          </div>
                          <div class="menu-title">
                              Prendre une commande
                          </div>
                      </a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="ecommerce-products-details.html">
                  <div class="parent-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                          <g fill="none" stroke="currentColor" stroke-width="4">
                              <circle cx="24" cy="11" r="7" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4 41c0-8.837 8.059-16 18-16" />
                              <circle cx="34" cy="34" r="9" />
                              <path stroke-linecap="round" stroke-linejoin="round" d="M33 31v4h4" />
                          </g>
                      </svg>

                  </div>
                  <div class="menu-title">Rendez-vous</div>
              </a>
          </li>
          <li>
              <a href="ecommerce-add-new-products.html"></i>
                  <div class="parent-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048">
                          <path fill="currentColor"
                              d="M896 512v128H512V512zM512 896V768h384v128zm0 256v-128h256v128zM384 512v128H256V512zm0 256v128H256V768zm-128 384v-128h128v128zM128 128v1792h640v128H0V0h1115l549 549v219h-128V640h-512V128zm1024 91v293h293zm640 805h256v1024H896V1024h256V896h128v128h384V896h128zm128 896v-512h-896v512zm0-640v-128h-896v128z" />
                      </svg>
                  </div>
                  <div class="menu-title">
                      Réservations
                  </div>
              </a>
          </li>
          <li>
              <a href="javascript:;" class="has-arrow">
                  <div class="parent-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                          <path fill="currentColor"
                              d="M29.755 21.345A1 1 0 0 0 29 21h-2v-2c0-1.102-.897-2-2-2h-4c-1.103 0-2 .898-2 2v2h-2a1 1 0 0 0-.99 1.142l1 7A1 1 0 0 0 18 30h10a1 1 0 0 0 .99-.858l1-7a1 1 0 0 0-.235-.797M21 19h4v2h-4zm6.133 9h-8.266l-.714-5h9.694zM10 20h2v10h-2z" />
                          <path fill="currentColor"
                              d="m16.78 17.875l-1.906-2.384l-1.442-3.605A2.99 2.99 0 0 0 10.646 10H5c-1.654 0-3 1.346-3 3v7c0 1.103.897 2 2 2h1v8h2V20H4v-7a1 1 0 0 1 1-1h5.646c.411 0 .776.247.928.629l1.645 3.996l2 2.5zM4 5c0-2.206 1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4s-4-1.794-4-4m2 0c0 1.103.897 2 2 2s2-.897 2-2s-.897-2-2-2s-2 .897-2 2" />
                      </svg>
                  </div>
                  <div class="menu-title">Clients</div>
              </a>
              <ul>
                  <li>
                      <a href="{{ route('clients.create') }}">
                          <div class="parent-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 12 12">
                                  <path fill="currentColor"
                                      d="M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.75a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.25a.75.75 0 0 0 0-1.5H6.5z" />
                              </svg>
                          </div>
                          <div class="menu-title">
                              Ajouter un nouveau client
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="{{ route('clients.index') }}">
                          <div class="parent-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                                  <path fill="currentColor"
                                      d="M4 5v6h6V5zm2 2h2v2H6zm6 0v2h15V7zm-8 6v6h6v-6zm2 2h2v2H6zm6 0v2h15v-2zm-8 6v6h6v-6zm2 2h2v2H6zm6 0v2h15v-2z" />
                              </svg>
                          </div>
                          <div class="menu-title">
                              Liste des clients
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="{{ route('clients.contact') }}">
                          <div class="parent-i">

                          </div>
                          <div class="menu-title">
                              Contacter un client
                          </div>
                      </a>
                  </li>
              </ul>
          </li>
          <li>
              <a class="has-arrow" href="javascript:;">
                  <div class="parent-icon"><i class='bx bx-bookmark-heart'></i>
                  </div>
                  <div class="menu-title">Documents</div>
              </a>
              <ul>
                  <li> <a href="component-alerts.html"><i class='bx bx-radio-circle'></i>Devis</a>
                  </li>
                  <li> <a href="component-accordions.html"><i class='bx bx-radio-circle'></i>Rapports</a>
                  </li>
              </ul>
          </li>

          <li class="menu-label">Ressources humaines</li>
          <li>
              <a class="has-arrow" href="javascript:;">
                  <div class="parent-icon"><i class='bx bx-message-square-edit'></i>
                  </div>
                  <div class="menu-title">Employés</div>
              </a>
              <ul>
                  <li>
                      <a href="{{ route('employes.index') }}">
                          <div class="parent-i">
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                  viewBox="0 0 32 32">
                                  <path fill="currentColor"
                                      d="M4 5v6h6V5zm2 2h2v2H6zm6 0v2h15V7zm-8 6v6h6v-6zm2 2h2v2H6zm6 0v2h15v-2zm-8 6v6h6v-6zm2 2h2v2H6zm6 0v2h15v-2z" />
                              </svg>
                          </div>
                          <div class="menu-tite">
                              Liste
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="{{ route('employes.create') }}">
                          <div class="parent-icon">

                          </div>
                          <div class="menu-title">
                              Nouvel employé
                          </div>
                      </a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="{{ route('departements.index') }}">
                  <div class="parent-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <g fill="none" fill-rule="evenodd">
                              <path
                                  d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                              <path fill="currentColor"
                                  d="M15 6a3 3 0 0 1-2 2.83V11h3a3 3 0 0 1 3 3v1.17a3.001 3.001 0 1 1-2 0V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1.17a3.001 3.001 0 1 1-2 0V14a3 3 0 0 1 3-3h3V8.83A3.001 3.001 0 1 1 15 6m-3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2" />
                          </g>
                      </svg>
                  </div>
                  <div class="menu-title">Départements</div>
              </a>
          </li>
          @can('voir les utilisateurs')
              <li>
                  <a class="" href="{{ route('users.index') }}">
                      <div class="parent-icon">
                          <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                  d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                          </svg>

                      </div>
                      <div class="menu-title">
                          Gestion des utilisateurs
                      </div>
                  </a>
              </li>
          @endcan


          <li>
              <a href="javascript:;">
                  <div class="parent-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" stroke-width="2"
                              d="M1 23h22V4H1zM18 4V0zM6 4V0zM1 8.5h22zM6 14q.834-2 2.5-2c1.3 0 2 1 2 2s-1 2-2 3l-2 2v.5h5.405m5.08 1L17 12h-.5c-.5 1.5-2 2-2.743 2" />
                      </svg>
                  </div>
                  <div class="menu-title">Horaire de travail</div>
              </a>
          </li>

          <li>
              <a class="has-arrow" href="javascript:;">
                  <div class="parent-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                              <path
                                  d="M7 11.5v2m2.5-3v2m-5-2v2M2.75 4.75a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m8.5.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m-3.186-.861a.83.83 0 0 0-.786-.556h-.645a.744.744 0 0 0-.16 1.47l.983.216a.834.834 0 0 1-.178 1.648h-.556a.83.83 0 0 1-.786-.556M7 2.833V2m0 5v-.833" />
                              <path d="M12.5.5h-11a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1" />
                          </g>
                      </svg>
                  </div>
                  <div class="menu-title">Paiement</div>
              </a>
              <ul>
                  <li>
                      <a href="form-elements.html">
                          <div class="parent-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                  viewBox="0 0 16 16">
                                  <g fill="none" stroke="currentColor" stroke-linecap="round"
                                      stroke-linejoin="round" stroke-width="1.5">
                                      <circle cx="12.5" cy="12.5" r="1.75" />
                                      <circle cx="3.5" cy="12.5" r="1.75" />
                                      <circle cx="3.5" cy="3.5" r="1.75" />
                                      <path d="m9.25 1.75l-1.5 2l1.5 2m3 4.5v-5q0-1.5-1.5-1.5h-2m-5 2v4.5" />
                                  </g>
                              </svg>
                          </div>
                          <div class="menu-title">
                              Demande
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="form-input-group.html"><i class='bx bx-radio-circle'></i>
                          Paiement salaire
                      </a>
                  </li>
                  <li>
                      <a href="form-input-group.html">
                          <i class='bx bx-radio-circle'></i>
                          Paiement prestation
                      </a>
                  </li>
                  <li>
                      <a href="form-input-group.html">
                          <i class='bx bx-radio-circle'></i>
                          Fiche de paie
                      </a>
                  </li>
              </ul>
          </li>

          <li>
              <a class="has-arrow" href="javascript:;">
                  <div class="parent-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <path fill="currentColor"
                              d="M5 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h8v-2h-2V9a2 2 0 0 0-2-2zm0 2h5v3H5zm8 0h4v3h-4zm-3 7a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1" />
                      </svg>
                  </div>
                  <div class="menu-title">Congés</div>
              </a>
              <ul>
                  <li>
                      <a href="{{ route('conges.create') }}">
                          <div class="parent-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                  viewBox="0 0 36 36">
                                  <path fill="currentColor"
                                      d="M18.08 2.34c-8.82 0-16 6.28-16 14s7.18 14 16 14a18 18 0 0 0 4.92-.68l5.53 3.52a1 1 0 0 0 1.38-.3a1 1 0 0 0 .16-.54v-6.73a13 13 0 0 0 4-9.27c.01-7.72-7.17-14-15.99-14m10.29 22.11a1 1 0 0 0-.32.73v5.34l-4.38-2.79a1 1 0 0 0-.83-.11a16 16 0 0 1-4.76.72c-7.72 0-14-5.38-14-12s6.28-12 14-12s14 5.38 14 12a11.1 11.1 0 0 1-3.71 8.11" />
                                  <path fill="currentColor"
                                      d="m31.1 15.82l-.1-.15l-2.5-2.23a3.25 3.25 0 0 0-2.39-.84l-5.38.34l-3.59-3a.8.8 0 0 0-.52-.19h-3.06a.78.78 0 0 0-.69.4a.77.77 0 0 0 0 .79l1.36 2.44l-4.71.29l1.31 1.52l15.39-1a1.65 1.65 0 0 1 1.22.43l2.36 2.13a.1.1 0 0 1 0 .07c0 .06-.09.05-.1.06h-7.88l-.35.37l-5.19 5.53h-1.64l2.73-5.9H8.54l-1.41-2.72L6.51 13a.8.8 0 0 0-1-.2a.81.81 0 0 0-.31 1.1l2 3.94a1.21 1.21 0 0 0 1.08.65h6.57l-1.94 4.18a1.2 1.2 0 0 0 .09 1.16a1.22 1.22 0 0 0 1 .56h2.43a1.17 1.17 0 0 0 .88-.39l5.18-5.51h7.16a1.65 1.65 0 0 0 1.52-.91a1.74 1.74 0 0 0-.07-1.76m-16.18-4.51h1.41l2.09 1.77l-2.42.15Z" />
                              </svg>
                          </div>
                          <div class="menu-title">
                              Nouvelle demande
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="{{ route('conges.index') }}">
                          <div class="parent-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                  viewBox="0 0 32 32">
                                  <path fill="currentColor"
                                      d="M4 5v6h6V5zm2 2h2v2H6zm6 0v2h15V7zm-8 6v6h6v-6zm2 2h2v2H6zm6 0v2h15v-2zm-8 6v6h6v-6zm2 2h2v2H6zm6 0v2h15v-2z" />
                              </svg>
                          </div>
                          <div class="menu-title">
                              Liste congés
                          </div>
                      </a>
                  </li>
              </ul>
          </li>


          <li class="menu-label">Atélier</li>
          <li>
              <a class="has-arrow" href="javascript:;">
                  <div class="parent-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" stroke-width="2"
                              d="M19 7s-5 7-12.5 7c-2 0-5.5 1-5.5 5v4h11v-4c0-2.5 3-1 7-8l-1.5-1.5M3 5V2h20v14h-3M11 1h4v2h-4zM6.5 14a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Z" />
                      </svg>
                  </div>
                  <div class="menu-title">Fabrication</div>
              </a>
              <ul>
                  <li><a href="form-elements.html"><i class='bx bx-radio-circle'></i>Ordres des commandes</a>
                  </li>
                  <li> <a href="form-input-group.html"><i class='bx bx-radio-circle'></i>Ordres de construction</a>
                  </li>
                  <li> <a href="form-input-group.html"><i class='bx bx-radio-circle'></i>Plans de production</a>
                  </li>
                  <li> <a href="form-input-group.html"><i class='bx bx-radio-circle'></i>Sous-traitants</a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="user-profile.html">
                  <div class="parent-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                          <path fill="none" stroke="currentColor" stroke-linejoin="round"
                              d="M7.563 1.545H2.5v10.91h9V5.364M7.563 1.545L11.5 5.364M7.563 1.545v3.819H11.5m-7 9.136h9v-7M4 7.5h6M4 5h2m-2 5h6" />
                      </svg>
                  </div>
                  <div class="menu-title">Rapports</div>
              </a>
          </li>
          <li>
              <a href="timeline.html">
                  <div class="parent-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
                          <path fill="currentColor"
                              d="M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z" />
                      </svg>
                  </div>
                  <div class="menu-title">Documents</div>
              </a>
          </li>

          {{-- <li class="menu-label">Comptabilité</li> --}}

          <li class="menu-label">Autres</li>

          <li>
              <a href="{{ route('faq') }}">
                  <div class="parent-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <path fill="currentColor"
                              d="M18 15H6l-4 4V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1m5-6v14l-4-4H8a1 1 0 0 1-1-1v-1h14V8h1a1 1 0 0 1 1 1M8.19 4c-.87 0-1.57.2-2.11.59c-.52.41-.78.98-.77 1.77l.01.03h1.93c.01-.3.1-.53.28-.69a1 1 0 0 1 .66-.23c.31 0 .57.1.75.28c.18.19.26.45.26.75c0 .32-.07.59-.23.82c-.14.23-.35.43-.61.59c-.51.34-.86.64-1.05.91C7.11 9.08 7 9.5 7 10h2c0-.31.04-.56.13-.74s.26-.36.51-.52c.45-.24.82-.53 1.11-.93s.44-.81.44-1.31c0-.76-.27-1.37-.81-1.82C9.85 4.23 9.12 4 8.19 4M7 11v2h2v-2zm6 2h2v-2h-2zm0-9v6h2V4z" />
                      </svg>
                  </div>
                  <div class="menu-title">FAQ</div>
              </a>
          </li>
          <li>
              <a href="javascript:;">
                  <div class="parent-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                              d="M8.4 6.5v35a2 2 0 0 0 2 2h2.33v-39H10.4a2 2 0 0 0-2 2m4.33-2v39H37.6a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2Z" />
                          <ellipse cx="25.531" cy="33.668" fill="currentColor" rx=".823"
                              ry=".75" />
                          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                              d="M18.301 20.049a6.43 6.43 0 0 1 1.959-4.763a7.27 7.27 0 0 1 5.224-1.786c3.918 0 7.183 2.977 7.183 6.549a6.43 6.43 0 0 1-1.959 4.762c-1.632 1.19-5.224 2.977-5.224 5.656" />
                      </svg>
                  </div>
                  <div class="menu-title">Manuel d'utilisation</div>
              </a>
          </li>
      </ul>
      <!--end navigation-->
  </div>
  <!--end sidebar wrapper -->
  <!--start header -->
  <header>
      <div class="topbar d-flex align-items-center">
          <nav class="navbar navbar-expand gap-3">
              <div class="mobile-toggle-menu"><i class='bx bx-menu'></i>
              </div>
              <div class="search-bar flex-grow-1">
                  <div class="position-relative search-bar-box">
                      <input type="text" class="form-control search-control bg-black"
                          placeholder="Que recherchez-vous?">
                      <span class="position-absolute top-50 search-show translate-middle-y"><i
                              class='bx bx-search'></i></span>
                      <span class="position-absolute top-50 search-close translate-middle-y"><i
                              class='bx bx-x'></i></span>
                  </div>
              </div>
              <div class="top-menu ms-auto">
                  <ul class="navbar-nav align-items-center gap-1">
                      <li class="nav-item mobile-search-icon d-flex d-lg-none" data-bs-toggle="modal"
                          data-bs-target="#SearchModal">
                          <a class="nav-link" href="avascript:;"><i class='bx bx-search'></i>
                          </a>
                      </li>
                      <li class="nav-item dropdown dropdown-laungauge d-none d-sm-flex">
                          <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="avascript:;"
                              data-bs-toggle="dropdown">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                                  viewBox="0 0 64 64">
                                  <path fill="#428bc1"
                                      d="M1.9 32c0 13.1 8.4 24.2 20 28.3V3.7C10.3 7.8 1.9 18.9 1.9 32" />
                                  <path fill="#ed4c5c"
                                      d="M61.9 32c0-13.1-8.3-24.2-20-28.3v56.6c11.7-4.1 20-15.2 20-28.3" />
                                  <path fill="#fff"
                                      d="M21.9 60.3c3.1 1.1 6.5 1.7 10 1.7s6.9-.6 10-1.7V3.7C38.8 2.6 35.5 2 31.9 2s-6.9.6-10 1.7z" />
                              </svg>
                          </a>
                          <ul class="dropdown-menu dropdown-menu-end">
                              <li>
                                  <a class="dropdown-item d-flex align-items-center py-2" href="javascript:;">
                                      <img src="{{ asset('assets/images/county/05.png') }}" width="20"
                                          alt="">
                                      <span class="ms-2">English</span></a>
                              </li>
                              <li>
                                  <a class="dropdown-item d-flex align-items-center py-2" href="javascript:;">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                          viewBox="0 0 64 64">
                                          <path fill="#428bc1"
                                              d="M1.9 32c0 13.1 8.4 24.2 20 28.3V3.7C10.3 7.8 1.9 18.9 1.9 32" />
                                          <path fill="#ed4c5c"
                                              d="M61.9 32c0-13.1-8.3-24.2-20-28.3v56.6c11.7-4.1 20-15.2 20-28.3" />
                                          <path fill="#fff"
                                              d="M21.9 60.3c3.1 1.1 6.5 1.7 10 1.7s6.9-.6 10-1.7V3.7C38.8 2.6 35.5 2 31.9 2s-6.9.6-10 1.7z" />
                                      </svg>
                                      <span class="ms-2">Français</span>
                                  </a>
                              </li>
                          </ul>
                      </li>

                      <li class="nav-item">
                          <button onclick="(() => document.body.classList.toggle('dark'))()"
                              class="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                              <svg class="fill-violet-700 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z">
                                  </path>
                              </svg>
                              <svg class="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                      fill-rule="evenodd" clip-rule="evenodd"></path>
                              </svg>
                          </button>
                      </li>

                      <li class="nav-item dropdown dropdown-app">
                          <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown"
                              href="javascript:;"><i class='bx bx-grid-alt'></i></a>
                          <div class="dropdown-menu dropdown-menu-end p-0">
                              <div class="app-container p-2 my-2">
                                  <div class="row gx-0 gy-2 row-cols-3 justify-content-center p-2">
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/slack.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">Slack</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/behance.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">Behance</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/google-drive.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">Dribble</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/outlook.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">Outlook</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/github.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">GitHub</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/stack-overflow.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">Stack</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/figma.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">Stack</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/twitter.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">Twitter</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/google-calendar.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">Calendar</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/spotify.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">Spotify</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/google-photos.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">Photos</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/pinterest.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">Photos</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/linkedin.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">linkedin</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/dribble.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">Dribble</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/youtube.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">YouTube</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/google.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">News</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/envato.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">Envato</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a href="javascript:;">
                                              <div class="app-box text-center">
                                                  <div class="app-icon">
                                                      <img src="{{ asset('assets/images/app/safari.png') }}"
                                                          width="30" alt="">
                                                  </div>
                                                  <div class="app-name">
                                                      <p class="mb-0 mt-1">Safari</p>
                                                  </div>
                                              </div>
                                          </a>
                                      </div>

                                  </div><!--end row-->

                              </div>
                          </div>
                      </li>

                      <li class="nav-item dropdown dropdown-large">
                          <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#"
                              data-bs-toggle="dropdown"><span class="alert-count">7</span>
                              <i class='bx bx-bell'></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                              <a href="javascript:;">
                                  <div class="msg-header">
                                      <p class="msg-header-title">Notifications</p>
                                      <p class="msg-header-badge">8 New</p>
                                  </div>
                              </a>
                              <div class="header-notifications-list">
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center">
                                          <div class="user-online">
                                              <img src="{{ asset('assets/images/avatars/avatar-1.png') }}"
                                                  class="msg-avatar" alt="user avatar">
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="msg-name">Daisy Anderson<span class="msg-time float-end">5
                                                      sec
                                                      ago</span></h6>
                                              <p class="msg-info">The standard chunk of lorem</p>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center">
                                          <div class="notify bg-light-danger text-danger">dc
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="msg-name">New Orders <span class="msg-time float-end">2 min
                                                      ago</span></h6>
                                              <p class="msg-info">You have recived new orders</p>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center">
                                          <div class="user-online">
                                              <img src="{{ asset('assets/images/avatars/avatar-2.png') }}"
                                                  class="msg-avatar" alt="user avatar">
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="msg-name">Althea Cabardo <span class="msg-time float-end">14
                                                      sec ago</span></h6>
                                              <p class="msg-info">Many desktop publishing packages</p>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center">
                                          <div class="notify bg-light-success text-success">
                                              <img src="{{ asset('assets/images/app/outlook.png') }}" width="25"
                                                  alt="user avatar">
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="msg-name">Account Created<span class="msg-time float-end">28
                                                      min
                                                      ago</span></h6>
                                              <p class="msg-info">Successfully created new email</p>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center">
                                          <div class="notify bg-light-info text-info">Ss
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="msg-name">New Product Approved <span
                                                      class="msg-time float-end">2 hrs ago</span></h6>
                                              <p class="msg-info">Your new product has approved</p>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center">
                                          <div class="user-online">
                                              <img src="{{ asset('assets/images/avatars/avatar-4.png') }}"
                                                  class="msg-avatar" alt="user avatar">
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="msg-name">Katherine Pechon <span
                                                      class="msg-time float-end">15
                                                      min ago</span></h6>
                                              <p class="msg-info">Making this the first true generator</p>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center">
                                          <div class="notify bg-light-success text-success"><i
                                                  class='bx bx-check-square'></i>
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="msg-name">Your item is shipped <span
                                                      class="msg-time float-end">5 hrs
                                                      ago</span></h6>
                                              <p class="msg-info">Successfully shipped your item</p>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center">
                                          <div class="notify bg-light-primary">
                                              <img src="{{ asset('assets/images/app/github.png') }}" width="25"
                                                  alt="user avatar">
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="msg-name">New 24 authors<span class="msg-time float-end">1
                                                      day
                                                      ago</span></h6>
                                              <p class="msg-info">24 new authors joined last week</p>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center">
                                          <div class="user-online">
                                              <img src="{{ asset('assets/images/avatars/avatar-8.png') }}"
                                                  class="msg-avatar" alt="user avatar">
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="msg-name">Peter Costanzo <span class="msg-time float-end">6
                                                      hrs
                                                      ago</span></h6>
                                              <p class="msg-info">It was popularised in the 1960s</p>
                                          </div>
                                      </div>
                                  </a>
                              </div>
                              <a href="javascript:;">
                                  <div class="text-center msg-footer">
                                      <button class="btn btn-light w-100">View All Notifications</button>
                                  </div>
                              </a>
                          </div>
                      </li>
                      <li class="nav-item dropdown dropdown-large">
                          <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#"
                              role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span
                                  class="alert-count">8</span>
                              <i class='bx bx-shopping-bag'></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                              <a href="javascript:;">
                                  <div class="msg-header">
                                      <p class="msg-header-title">My Cart</p>
                                      <p class="msg-header-badge">10 Items</p>
                                  </div>
                              </a>
                              <div class="header-message-list">
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center gap-3">
                                          <div class="position-relative">
                                              <div class="cart-product rounded-circle bg-light">
                                                  <img src="{{ asset('assets/images/products/11.png') }}"
                                                      class="" alt="product image">
                                              </div>
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="cart-product-title mb-0">Men White T-Shirt</h6>
                                              <p class="cart-product-price mb-0">1 X $29.00</p>
                                          </div>
                                          <div class="">
                                              <p class="cart-price mb-0">$250</p>
                                          </div>
                                          <div class="cart-product-cancel"><i class="bx bx-x"></i>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center gap-3">
                                          <div class="position-relative">
                                              <div class="cart-product rounded-circle bg-light">
                                                  <img src="{{ asset('assets/images/products/02.png') }}"
                                                      class="" alt="product image">
                                              </div>
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="cart-product-title mb-0">Men White T-Shirt</h6>
                                              <p class="cart-product-price mb-0">1 X $29.00</p>
                                          </div>
                                          <div class="">
                                              <p class="cart-price mb-0">$250</p>
                                          </div>
                                          <div class="cart-product-cancel"><i class="bx bx-x"></i>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center gap-3">
                                          <div class="position-relative">
                                              <div class="cart-product rounded-circle bg-light">
                                                  <img src="{{ asset('assets/images/products/03.png') }}"
                                                      class="" alt="product image">
                                              </div>
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="cart-product-title mb-0">Men White T-Shirt</h6>
                                              <p class="cart-product-price mb-0">1 X $29.00</p>
                                          </div>
                                          <div class="">
                                              <p class="cart-price mb-0">$250</p>
                                          </div>
                                          <div class="cart-product-cancel"><i class="bx bx-x"></i>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center gap-3">
                                          <div class="position-relative">
                                              <div class="cart-product rounded-circle bg-light">
                                                  <img src="{{ asset('assets/images/products/04.png') }}"
                                                      class="" alt="product image">
                                              </div>
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="cart-product-title mb-0">Men White T-Shirt</h6>
                                              <p class="cart-product-price mb-0">1 X $29.00</p>
                                          </div>
                                          <div class="">
                                              <p class="cart-price mb-0">$250</p>
                                          </div>
                                          <div class="cart-product-cancel"><i class="bx bx-x"></i>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center gap-3">
                                          <div class="position-relative">
                                              <div class="cart-product rounded-circle bg-light">
                                                  <img src="{{ asset('assets/images/products/05.png') }}"
                                                      class="" alt="product image">
                                              </div>
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="cart-product-title mb-0">Men White T-Shirt</h6>
                                              <p class="cart-product-price mb-0">1 X $29.00</p>
                                          </div>
                                          <div class="">
                                              <p class="cart-price mb-0">$250</p>
                                          </div>
                                          <div class="cart-product-cancel"><i class="bx bx-x"></i>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center gap-3">
                                          <div class="position-relative">
                                              <div class="cart-product rounded-circle bg-light">
                                                  <img src="{{ asset('assets/images/products/06.png') }}"
                                                      class="" alt="product image">
                                              </div>
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="cart-product-title mb-0">Men White T-Shirt</h6>
                                              <p class="cart-product-price mb-0">1 X $29.00</p>
                                          </div>
                                          <div class="">
                                              <p class="cart-price mb-0">$250</p>
                                          </div>
                                          <div class="cart-product-cancel"><i class="bx bx-x"></i>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center gap-3">
                                          <div class="position-relative">
                                              <div class="cart-product rounded-circle bg-light">
                                                  <img src="{{ asset('assets/images/products/07.png') }}"
                                                      class="" alt="product image">
                                              </div>
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="cart-product-title mb-0">Men White T-Shirt</h6>
                                              <p class="cart-product-price mb-0">1 X $29.00</p>
                                          </div>
                                          <div class="">
                                              <p class="cart-price mb-0">$250</p>
                                          </div>
                                          <div class="cart-product-cancel"><i class="bx bx-x"></i>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center gap-3">
                                          <div class="position-relative">
                                              <div class="cart-product rounded-circle bg-light">
                                                  <img src="{{ asset('assets/images/products/08.png') }}"
                                                      class="" alt="product image">
                                              </div>
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="cart-product-title mb-0">Men White T-Shirt</h6>
                                              <p class="cart-product-price mb-0">1 X $29.00</p>
                                          </div>
                                          <div class="">
                                              <p class="cart-price mb-0">$250</p>
                                          </div>
                                          <div class="cart-product-cancel"><i class="bx bx-x"></i>
                                          </div>
                                      </div>
                                  </a>
                                  <a class="dropdown-item" href="javascript:;">
                                      <div class="d-flex align-items-center gap-3">
                                          <div class="position-relative">
                                              <div class="cart-product rounded-circle bg-light">
                                                  <img src="{{ asset('assets/images/products/09.png') }}"
                                                      class="" alt="product image">
                                              </div>
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="cart-product-title mb-0">Men White T-Shirt</h6>
                                              <p class="cart-product-price mb-0">1 X $29.00</p>
                                          </div>
                                          <div class="">
                                              <p class="cart-price mb-0">$250</p>
                                          </div>
                                          <div class="cart-product-cancel"><i class="bx bx-x"></i>
                                          </div>
                                      </div>
                                  </a>
                              </div>
                              <a href="javascript:;">
                                  <div class="text-center msg-footer">
                                      <div class="d-flex align-items-center justify-content-between mb-3">
                                          <h5 class="mb-0">Total</h5>
                                          <h5 class="mb-0 ms-auto">$489.00</h5>
                                      </div>
                                      <button class="btn btn-light w-100">Checkout</button>
                                  </div>
                              </a>
                          </div>
                      </li>
                  </ul>
              </div>
              <div class="user-box dropdown px-3">
                  <a class="d-flex align-items-center nav-link dropdown-toggle gap-3 dropdown-toggle-nocaret"
                      href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img class="w-8 h-8 rounded-full user-img" src="{{ asset('img/profil.jpeg') }}"
                          alt="user avatar">
                      <div class="user-info">
                          <p class="user-name mb-0">{{ Auth::user()->name }}</p>
                          <p class="designattion mb-0">{{ Auth::user()->email }}</p>
                      </div>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item d-flex align-items-center" href="{{ route('profile.edit') }}"><i
                                  class="bx bx-user fs-5"></i><span>Profile</span></a>
                      </li>
                      <li><a class="dropdown-item d-flex align-items-center" href="javascript:;"><i
                                  class="bx bx-cog fs-5"></i><span>Paramètres</span></a>
                      </li>
                      <li>
                          <div class="dropdown-divider mb-0"></div>
                      </li>
                      <li>
                          <form action="{{ route('logout') }}" method="post">
                              @csrf
                              <a class="dropdown-item d-flex align-items-center" href="javascript:;"
                                  onclick="event.preventDefault(); this.closest('form').submit();">
                                  <i class="bx bx-log-out-circle"></i><span>Se déconnecter</span>
                              </a>
                          </form>
                      </li>
                  </ul>
              </div>
          </nav>
      </div>
  </header>
  <!--end header -->
