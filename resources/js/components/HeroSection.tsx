export default function HeroSection() {
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
            <div className="relative  flex flex-col mt-32 text-white p-4 mx-32">
                <h1 className="text-6xl font-bold">
                    Simplifiez Votre Comptabilité <br /> et Développez Votre Entreprise.
                </h1>
                <p className="text-lg mt-4 max-w-2xl">
                    Plus de 35 ans d'expertise pour simplifier la gestion de votre entreprise. <br />
                    Gagnez du temps, concentrez-vous sur l'essentiel : vos clients.
                </p>
                <div className="mt-8 space-x-4">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full">
                        Notre Solution
                    </button>
                    <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white py-2 px-6 rounded-full">
                        En Savoir Plus
                    </button>
                </div>
            </div>
        </>
    )
}