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
            <div className=" relative  my-10 px-10 py-14 flex mx-20">
                {/* Section Texte */}
                <div className="md:w-1/2">
                    <h3 className="text-blue-600 font-mono font-semibold text-xl uppercase mb-2">À propos de nous</h3>
                    <h2 className="text-4xl font-bold mb-4">
                    MIA, votre partenaire digital pour une comptabilité simplifiée
                    </h2>
                    <p className="text-gray-600 mb-6">
                        MIA, diminutif de Mi-Assiste, est une société basée à Madagascar qui propose des services de sous-traitance pour les PME et cabinets comptables. Avec plus de 10 ans d'expérience, nous sommes le partenaire digital idéal pour accompagner la croissance de votre entreprise en France.
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
                <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10 ">
                    <img src={about} alt="MIA Consulting" className="shadow-lg" />
                </div>
            </div>
        </>
    )
}