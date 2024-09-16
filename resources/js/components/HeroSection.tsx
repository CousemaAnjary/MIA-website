import { FaGift } from "react-icons/fa";
import { Button } from "./ui/button";

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
                    Simplifiez <br /> Votre Comptabilité <br /> et Développez Votre Entreprise.
                </h1>
                <p className="text-xl font-normal mt-6">
                    "Nous déléguer une partie de vos activités,<br />
                    c'est gagner du temps pour mieux accompagner vos précieux clients."
                </p>
                <div className="mt-8 space-x-4">
                    <Button variant={"default"} size={"lg"} className="bg-blue-800 hover:bg-blue-900 py-6 px-6 gap-2">
                        <FaGift />   Nos offres
                    </Button>

                    <Button variant={"ghost"} size={"lg"} className="border border-white  py-6 px-6" >
                        En Savoir Plus
                    </Button>
                </div>
            </div>
        </>
    )
}