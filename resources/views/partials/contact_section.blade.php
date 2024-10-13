<div class=" py-5">
    <div class="container">
        <!-- Section Title -->
        <div class="container text-start mb-5">
            <!-- Titre de la section -->
            <h3 class="text-dark font-weight-bold text-uppercase mb-4">
                <span class="border-bottom border-dark pb-2">Contactez-nous</span>
            </h3>
            <p class="lead">N'hésitez pas à nous contacter pour toute question ou demande de renseignements</p>
        </div>

        <!-- Contact Form and Contact Info -->
        <div class="row">
            <!-- Contact Form -->
            <div class="col-md-6 mb-5">
                <form method="POST" action="/send-email">
                    @csrf <!-- Laravel directive for CSRF protection -->
                    <div class="mb-4">
                        <label for="name" class="form-label font-weight-bold">Nom Complet</label>
                        <input type="text" class="form-control shadow-sm rounded" id="name" name="name"
                            placeholder="Votre nom" required>
                    </div>

                    <div class="mb-4">
                        <label for="email" class="form-label font-weight-bold">Email</label>
                        <input type="email" class="form-control shadow-sm rounded" id="email" name="email"
                            placeholder="Votre email" required>
                    </div>

                    <div class="mb-4">
                        <label for="subject" class="form-label font-weight-bold">Objet</label>
                        <input type="text" class="form-control shadow-sm rounded" id="subject" name="subject"
                            placeholder="Objet" required>
                    </div>

                    <div class="mb-4">
                        <label for="message" class="form-label font-weight-bold">Message</label>
                        <textarea class="form-control shadow-sm rounded" id="message" name="message" rows="4"
                            placeholder="Votre message" required></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary btn-lg w-100 shadow-sm">Envoyer</button>
                </form>
            </div>

            <!-- Contact Information -->
            <div class="col-md-6">
                <div class="row">
                    <!-- Technical Support -->
                    <div class="col-md-6 mb-4">
                        <div class="d-flex align-items-start">
                            <div class="bg-primary text-white rounded-circle p-3 shadow-sm">
                                <i class="fas fa-phone fa-lg"></i>
                            </div>
                            <div class="ms-3">
                                <p class="mb-1 font-weight-bold">Support Technique</p>
                                <p class="text-muted">support@example.com</p>
                                <p class="text-muted">+1 234-567-89</p>
                            </div>
                        </div>
                    </div>

                    <!-- Sales Inquiries -->
                    <div class="col-md-6 mb-4">
                        <div class="d-flex align-items-start">
                            <div class="bg-primary text-white rounded-circle p-3 shadow-sm">
                                <i class="fas fa-envelope fa-lg"></i>
                            </div>
                            <div class="ms-3">
                                <p class="mb-1 font-weight-bold">Questions Commerciales</p>
                                <p class="text-muted">sales@example.com</p>
                                <p class="text-muted">+1 234-567-89</p>
                            </div>
                        </div>
                    </div>

                    <!-- Press Inquiries -->
                    <div class="col-md-6 mb-4">
                        <div class="d-flex align-items-start">
                            <div class="bg-primary text-white rounded-circle p-3 shadow-sm">
                                <i class="fas fa-newspaper fa-lg"></i>
                            </div>
                            <div class="ms-3">
                                <p class="mb-1 font-weight-bold">Inquiries Presse</p>
                                <p class="text-muted">press@example.com</p>
                                <p class="text-muted">+1 234-567-89</p>
                            </div>
                        </div>
                    </div>

                    <!-- Bug Reports -->
                    <div class="col-md-6 mb-4">
                        <div class="d-flex align-items-start">
                            <div class="bg-primary text-white rounded-circle p-3 shadow-sm">
                                <i class="fas fa-bug fa-lg"></i>
                            </div>
                            <div class="ms-3">
                                <p class="mb-1 font-weight-bold">Bug Reports</p>
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
