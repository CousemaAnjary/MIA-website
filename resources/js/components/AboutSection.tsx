import about from '../assets/images/about.png'

export default function AboutSection() {
    /**
     * ! STATE (état, données) de l'application
     */


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <div className="container mx-auto my-10 px-4 flex flex-col md:flex-row items-center">
                {/* Section Texte */}
                <div className="md:w-1/2">
                    <h3 className="text-purple-600 font-bold uppercase mb-2">À propos de nous</h3>
                    <h2 className="text-4xl font-bold mb-4">
                        MIA, Comptabilité et bien plus
                    </h2>
                    <p className="text-gray-600 mb-6">
                        MIA, diminutif de Mi-Assiste, est une société basée à Madagascar qui propose des services de sous-traitance pour les PME et cabinets comptables. Avec plus de 10 ans d'expérience, nous sommes le partenaire digital idéal pour accompagner la croissance de votre entreprise en France.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Nous déléguer une partie de vos activités, c'est gagner du temps pour mieux accompagner vos précieux clients. Nous offrons des solutions complètes en comptabilité, fiscalité et missions administratives adaptées à vos besoins spécifiques.
                    </p>

                    {/* Accordéon / Liste des services */}
                    <div className="space-y-4">
                        <div className="p-4 bg-white shadow-lg rounded-lg">
                            <button className="w-full text-left font-semibold">
                                Comptabilité : Récupération, Saisie, Révision et Lettrage
                            </button>
                        </div>
                        <div className="p-4 bg-white shadow-lg rounded-lg">
                            <button className="w-full text-left font-semibold">
                                Fiscalité : TVA, Déclarations, Plaquettes, Liasse Fiscale
                            </button>
                        </div>
                        <div className="p-4 bg-white shadow-lg rounded-lg">
                            <button className="w-full text-left font-semibold">
                                Missions Administratives : Saisie, Service Après Vente, Relance Clients
                            </button>
                        </div>
                    </div>
                </div>

                {/* Section Image */}
                <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10 flex justify-center">
                    <img src={about} alt="MIA Consulting" className="shadow-lg" />
                </div>
            </div>
        </>
    )
}