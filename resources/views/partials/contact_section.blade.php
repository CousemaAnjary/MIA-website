<div class=" text-white py-5" style="background-color: #03224c">
    <div class="container">
        <!-- Section Title -->
        <div class="container text-start mb-5">
            <!-- Titre de la section -->
            <h3 class="text-uppercase mb-4">
                <span class="border-bottom fw-bold border-white">Contactez-nous</span>
            </h3>
            <p class="text-white fw-medium fs-5 fst-italic">
                " Votre client mérite votre temps, laissez-nous vous aider avec rigueur et discrétion "
            </p>
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
                            placeholder="Votre nom" required style="background: transparent">
                    </div>

                    <div class="mb-4">
                        <label for="email" class="form-label font-weight-bold">Email</label>
                        <input type="email" class="form-control shadow-sm rounded" id="email" name="email"
                            placeholder="Votre email" required style="background: transparent">
                    </div>

                    <div class="mb-4">
                        <label for="subject" class="form-label font-weight-bold">Objet</label>
                        <input type="text" class="form-control shadow-sm rounded" id="subject" name="subject"
                            placeholder="Objet" required style="background: transparent">
                    </div>

                    <div class="mb-4">
                        <label for="message" class="form-label font-weight-bold">Message</label>
                        <textarea class="form-control shadow-sm rounded" id="message" name="message" rows="4"
                            placeholder="Votre message" required style="background: transparent"></textarea>
                    </div>

                    <button type="submit" class="btn  btn-lg w-100 shadow-sm text-white" style="background-color: #002c69">Envoyer</button>
                </form>
            </div>

            <!-- Contact Information -->
            <div class="col-md-6">
                <div class="row">
                    <!-- Technical Support -->
                    <div class="col-md-6 mb-4">
                        <div class="d-flex align-items-start">
                            <div class=" text-white rounded-circle p-3 shadow-sm" style="background-color: #002c69">
                                <i class="fas fa-phone fa-lg"></i>
                            </div>
                            <div class="ms-3">
                                <p class="mb-1 font-weight-bold">Whatsapp</p>
                                <p class="text-muted">+261 37 64 883 52</p>
                            </div>
                        </div>
                    </div>

                    <!-- Sales Inquiries -->
                    <div class="col-md-6 mb-4">
                        <div class="d-flex align-items-start">
                            <div class=" text-white rounded-circle p-3 shadow-sm" style="background-color: #002c69">
                                <i class="fas fa-envelope fa-lg"></i>
                            </div>
                            <div class="ms-3">
                                <p class="mb-1 font-weight-bold">Adresse email</p>
                                <p class="text-muted">contactmia@mia.fr </p>
                            </div>
                        </div>
                    </div>

                    <!-- Press Inquiries -->
                    
                </div>
            </div>
        </div>
    </div>
</div>
