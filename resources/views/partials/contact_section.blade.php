<div class="bg-light py-5">
    <div class="container">
        <!-- Titre de la section -->
        <div class="mb-5">
            <h3 class="text-uppercase font-weight-bold d-flex align-items-center mb-4">
                <span class="border-bottom border-primary mr-2" style="width: 50px;"></span> 
                Contactez-nous
            </h3>
            <p class="lead">
                Vous avez une question ? Contactez-nous
            </p>
        </div>

        <!-- Formulaire et informations de contact -->
        <div class="row">
            <!-- Formulaire de contact -->
            <div class="col-md-6 mb-5">
                <form method="POST" action="/send-email">
                    @csrf <!-- Laravel directive for CSRF protection -->
                    <div class="mb-4">
                        <label for="name" class="form-label">Nom Complet</label>
                        <input type="text" class="form-control shadow-sm" id="name" name="name" placeholder="Votre nom" required>
                    </div>

                    <div class="mb-4">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control shadow-sm" id="email" name="email" placeholder="Votre email" required>
                    </div>

                    <div class="mb-4">
                        <label for="subject" class="form-label">Objet</label>
                        <input type="text" class="form-control shadow-sm" id="subject" name="subject" placeholder="Objet" required>
                    </div>

                    <div class="mb-4">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control shadow-sm" id="message" name="message" rows="4" placeholder="Votre message" required></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary btn-lg w-100">Envoyer</button>
                </form>
            </div>

            <!-- Informations de contact -->
            <div class="col-md-6">
                <div class="row">
                    <!-- Support technique -->
                    <div class="col-md-6 mb-4">
                        <div class="d-flex align-items-start">
                            <div class="bg-light rounded-circle p-3 text-primary">
                                <i class="fas fa-phone fa-lg"></i>
                            </div>
                            <div class="ms-3">
                                <p class="mb-1 font-weight-bold">Support technique</p>
                                <p class="text-muted">support@example.com</p>
                                <p class="text-muted">+1 234-567-89</p>
                            </div>
                        </div>
                    </div>

                    <!-- Questions commerciales -->
                    <div class="col-md-6 mb-4">
                        <div class="d-flex align-items-start">
                            <div class="bg-light rounded-circle p-3 text-primary">
                                <i class="fas fa-envelope fa-lg"></i>
                            </div>
                            <div class="ms-3">
                                <p class="mb-1 font-weight-bold">Questions commerciales</p>
                                <p class="text-muted">sales@example.com</p>
                                <p class="text-muted">+1 234-567-89</p>
                            </div>
                        </div>
                    </div>

                    <!-- Inquiries Presse -->
                    <div class="col-md-6 mb-4">
                        <div class="d-flex align-items-start">
                            <div class="bg-light rounded-circle p-3 text-primary">
                                <i class="fas fa-newspaper fa-lg"></i>
                            </div>
                            <div class="ms-3">
                                <p class="mb-1 font-weight-bold">Inquiries Presse</p>
                                <p class="text-muted">press@example.com</p>
                                <p class="text-muted">+1 234-567-89</p>
                            </div>
                        </div>
                    </div>

                    <!-- Bug reports -->
                    <div class="col-md-6 mb-4">
                        <div class="d-flex align-items-start">
                            <div class="bg-light rounded-circle p-3 text-primary">
                                <i class="fas fa-bug fa-lg"></i>
                            </div>
                            <div class="ms-3">
                                <p class="mb-1 font-weight-bold">Bug reports</p>
                                <p class="text-muted">bugs@example.com</p>
                                <p class="text-muted">+1 234-567-89</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
