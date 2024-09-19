import { Button } from "./ui/button"
import { Link } from "@inertiajs/react"
import logo from '../assets/images/logo.png'
import { FaInfoCircle, FaTasks, FaGift, FaHandsHelping, FaCheckCircle } from 'react-icons/fa'


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
            <nav className="container-fluid flex justify-between items-center p-2">
                
                    <div className="logo ml-28">
                        <img className="w-32" src={logo} alt="logo" />
                    </div>

                    <div className="navbar">
                        <ul className="flex gap-4 mr-24">
                            <li>
                                <Link href="#">
                                    <Button variant={"link"} className="font-bold text-base text-white flex items-center gap-2">
                                        <FaInfoCircle /> À propos de nous
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Button variant={"link"} className="font-bold text-base text-white flex items-center gap-2">
                                        <FaTasks /> Nos missions
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Button variant={"link"} className="font-bold text-base text-white flex items-center gap-2">
                                        <FaGift /> Nos offres
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Button variant={"link"} className="font-bold text-base text-white flex items-center gap-2">
                                        <FaHandsHelping /> Nos valeurs
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Button variant={"link"} className="font-bold text-base text-white flex items-center gap-2">
                                        <FaCheckCircle /> Nos avantages
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                
            </nav>
        </>
    );
}
