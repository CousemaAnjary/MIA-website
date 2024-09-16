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
                            <li><Link href="#"><Button variant={"ghost"} className="font-semibold text-white">Dashobard</Button></Link></li>
                            <li><Link href="#"><Button variant={"ghost"} className="font-semibold text-white">To-do</Button></Link></li>
                            <li><Link href="#"><Button variant={"ghost"} className="font-semibold text-white">Users</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}