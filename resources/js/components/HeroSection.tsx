import { Button } from "./ui/button";
import { FaGift } from "react-icons/fa";

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
            <div className="relative flex flex-col mt-16 md:mt-32 text-white px-4 md:px-16 lg:px-32 mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-left">
                    Simplifiez <br className="hidden md:block" /> Votre Comptabilité <br className="hidden md:block" /> et Développez Votre Entreprise.
                </h1>
                <p className="text-base md:text-lg lg:text-xl font-normal mt-4 md:mt-6 text-center md:text-left">
                    "Nous déléguer une partie de vos activités, <br className="hidden md:block" />
                    c'est gagner du temps pour mieux accompagner vos précieux clients."
                </p>
                <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                    <Button variant={"default"} size={"lg"} className="bg-blue-900 hover:bg-blue-800 py-4 px-6 md:py-6 md:px-6 gap-2">
                        <FaGift />   Nos offres
                    </Button>

                    <Button variant={"ghost"} size={"lg"} className="border border-white py-4 px-6 md:py-6 md:px-6">
                        En Savoir Plus
                    </Button>
                </div>
            </div>
        </>
    )
}
