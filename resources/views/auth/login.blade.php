<x-guest-layout>
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <!--wrapper-->
    <div class="wrapper">
        <div class="section-authentication-cover">
            <div class="">
                <div class="row g-0">
                    <div
                        class="col-12 col-xl-6 col-xxl-7 auth-cover-left align-items-center justify-content-center d-none d-xl-flex">

                        <div class="card bg-transparent shadow-none rounded-0 mb-0">
                            <div class="card-body">
                                <img src="{{ asset('img/brand.png') }}"
                                    class="img-fluid auth-img-cover-login" width="650" alt="" />
                            </div>
                        </div>

                    </div>

                    <div
                        class="col-12 col-xl-6 col-xxl-5 auth-cover-right bg-light align-items-center justify-content-center">
                        <div class="card rounded-0 m-3 shadow-none bg-transparent mb-0">
                            <div class="card-body p-sm-5">
                                <div class="">
                                    <div class="mb-3 text-center">
                                        <img src="{{ asset('img/brand.png') }}" width="100" alt="">
                                    </div>
                                    <div class="text-center mb-4">
                                        <h5 class="fs-2">Sogebox</h5>
                                        <p class="mb-0">Veuillez vous connecter à votre compte</p>
                                    </div>
                                    <div class="form-body">
                                        <form class="row g-3" method="POST" action="{{ route('login') }}">
                                            @csrf
                                            <div class="col-12">
                                                <label for="inputEmailAddress" class="form-label">Adresse e-mail</label>
                                                <input type="email" name="email" class="form-control" id="inputEmailAddress"
                                                    placeholder="jhon@example.com" autocomplete="username">
                                                <x-input-error :messages="$errors->get('email')" class="mt-2" />
                                            </div>
                                            <div class="col-12">
                                                <label for="inputChoosePassword" class="form-label">Mot de passe</label>
                                                <div class="input-group" id="show_hide_password">
                                                    <input type="password" class="form-control border-end-0"
                                                        id="inputChoosePassword" value="12345678" name="password" autocomplete="current-password"
                                                        placeholder="Entrez votre mot de passe"> <a href="javascript:;"
                                                        class="input-group-text bg-transparent"><i
                                                            class="bx bx-hide"></i></a>
                                                </div>
                                            </div>
                                            <div class="col-12 text-end"> <a
                                                    href="auth-cover-forgot-password.html">Mot de passe oublié ?</a>
                                            </div>
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <button type="submit" class="btn btn-light">Connexion</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end row-->
            </div>
        </div>
    </div>
    <!--end wrapper-->
</x-guest-layout>
