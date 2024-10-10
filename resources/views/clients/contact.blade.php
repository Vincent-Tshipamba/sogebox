<x-app-layout>
    <div class="page-content">
        <!--breadcrumb-->
        <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
            <div class="ps-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0 p-0">
                        <li class="breadcrumb-item"><a href="{{ route('dashboard') }}"><i class="bx bx-home-alt"></i></a>
                        </li>
                        <li class="breadcrumb-item"><a href="{{ route('clients.index') }}">Clients</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Page de contact</li>
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
        <h6 class="mb-0 text-uppercase"></h6>
        <hr />
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
            @foreach ($clients as $client)
                <div class="col justify-center items-center">
                    <div class="card radius-15 w-100">
                        <div class="card-body text-center justify-center items-center mx-auto">
                            <div
                                class="p-4 border radius-15 d-flex flex-column justify-content-center align-items-center">
                                <div>
                                    <img loading="lazy" src="{{ asset('img/profil.jpeg') }}" width="110"
                                        height="110" class="rounded-circle shadow" alt="">
                                </div>
                                <h5 class="mb-0 mt-5">{{ $client->nom }}</h5>
                                <p class="mb-3">{{ $client->type_client }}</p>
                                <div class="list-inline contacts-social mt-3 mb-3"> <a href="javascript:;"
                                        class="list-inline-item bg-light text-white border-0"><i
                                            class="bx bxl-facebook"></i></a>
                                    <a href="javascript:;" class="list-inline-item bg-light text-white border-0"><i
                                            class="bx bxl-twitter"></i></a>
                                    <a href="javascript:;" class="list-inline-item bg-light text-white border-0"><i
                                            class="bx bxl-google"></i></a>
                                    <a href="javascript:;" class="list-inline-item bg-light text-white border-0"><i
                                            class="bx bxl-linkedin"></i></a>
                                </div>
                                <div class="d-grid"> <a href="tel:{{ $client->telephone }}"
                                        class="btn btn-light radius-15">Composer le
                                        {{ $client->telephone }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</x-app-layout>
