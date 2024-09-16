import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";
import logo from '../assets/images/logo.png';


export default function Navbar() {
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
            <nav className="container-fluid p-4 ">
                <div className="container flex justify-between items-center">
                    <div className="logo ml-10">
                        <img className="w-20 " src={logo} alt="logo" />
                    </div>

                    <div className="navbar">
                        <ul className="flex gap-2 mr-10">
                            <li><Link href="#"><Button variant={"ghost"} className="font-semibold text-white">A propos de nous</Button></Link></li>
                            <li><Link href="#"><Button variant={"ghost"} className="font-semibold text-white">Nos missions</Button></Link></li>
                            <li><Link href="#"><Button variant={"ghost"} className="font-semibold text-white">Nos offres</Button></Link></li>
                            <li><Link href="#"><Button variant={"ghost"} className="font-semibold text-white">Nos valeurs</Button></Link></li>
                            <li><Link href="#"><Button variant={"ghost"} className="font-semibold text-white">Nos avantages</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}