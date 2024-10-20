<div class="text-white py-5" style="background-color: #03224c">
    <div class="container">
        <!-- Section Title -->
        <div class="container text-start mb-5" data-aos="fade-right">
            <!-- Titre de la section -->
            <h3 class="text-uppercase mb-4">
                <span class="border-bottom fw-bold border-white">Contactez-nous</span>
            </h3>
            <p class="text-white fw-medium fs-5 fst-italic">
                Votre client mérite votre temps, laissez-nous vous aider avec rigueur et discrétion
            </p>
        </div>

        <!-- Contact Form and Contact Info -->
        <div class="row">
            <!-- Contact Form -->
            <div class="col-md-6 mb-5" data-aos="fade-up" data-aos-delay="100">
                <form method="POST" action="/send-email">
                    @csrf <!-- Laravel directive for CSRF protection -->
                    <div class="mb-4">
                        <label for="name" class="form-label fw-bold">Nom Complet</label>
                        <input type="text" class="form-control shadow-sm rounded text-white" id="name" name="name"
                            placeholder="Votre nom complet" required style="background: transparent">
                    </div>

                    <div class="mb-4">
                        <label for="email" class="form-label fw-bold">Email</label>
                        <input type="email" class="form-control shadow-sm rounded text-white" id="email" name="email"
                            placeholder="Votre email" required style="background: transparent">
                    </div>

                    {{-- <div class="mb-4">
                        <label for="subject" class="form-label fw-bold">Objet</label>
                        <input type="text" class="form-control shadow-sm rounded text-white" id="subject" name="subject"
                            placeholder="Objet" required style="background: transparent">
                    </div> --}}

                    <div class="mb-4">
                        <label for="message" class="form-label fw-bold text-white">Message</label>
                        <textarea class="form-control shadow-sm rounded text-white" id="message" name="message" rows="4"
                            placeholder="Votre message" required style="background: transparent"></textarea>
                    </div>

                    <button type="submit" class="btn btn-lg w-100 shadow-sm text-white fw-bold" style="background-color: #002c69">Envoyer</button>
                </form>
            </div>

            <!-- Contact Information -->
            <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="row">
                    <!-- Technical Support -->
                    <div class="col-md-6 mb-4" data-aos="fade-left" data-aos-delay="300">
                        <div class="d-flex align-items-start">
                            <div class="text-white rounded-circle p-3 shadow-sm" style="background-color: #002c69">
                                <i class="fas fa-phone fa-lg"></i>
                            </div>
                            <div class="ms-3">
                                <p class="mb-1 fw-bold">Whatsapp</p>
                                <p class="text-muted">+261 37 64 883 52</p>
                            </div>
                        </div>
                    </div>

                    <!-- Sales Inquiries -->
                    <div class="col-md-6 mb-4" data-aos="fade-left" data-aos-delay="400">
                        <div class="d-flex align-items-start">
                            <div class="text-white rounded-circle p-3 shadow-sm" style="background-color: #002c69">
                                <i class="fas fa-envelope fa-lg"></i>
                            </div>
                            <div class="ms-3">
                                <p class="mb-1 fw-bold">Adresse email</p>
                                <p class="text-muted">contactmia@mia.fr </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
