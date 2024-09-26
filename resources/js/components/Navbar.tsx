import { Button } from "./ui/button";
import { Link } from "@inertiajs/react";
import logo from '../assets/images/logo.png';
import { FaInfoCircle, FaTasks, FaGift, FaHandsHelping, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { Menu } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogClose } from "./ui/dialog";

export default function Navbar() {
    /**
     * ! STATE (état, données) de l'application
     */
    const [isOpen, setIsOpen] = useState(false);

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <nav className="container-fluid relative flex justify-between lg:justify-center xl:justify-between items-center p-2 lg:p-5 xl:p-1">
                {/* Logo */}
                <div className="logo ml-4 lg:ml-16">
                    <img className="w-24 lg:hidden xl:w-32 xl:block" src={logo} alt="logo" />
                </div>

                {/* Menu Toggle Button for Mobile */}
                <div className="lg:hidden mr-4">
                    <Dialog open={isOpen} onOpenChange={toggleMenu}>
                        <DialogTrigger asChild>
                            <Button variant={"ghost"} size={"icon"} onClick={toggleMenu} className="text-white">
                                <Menu size={30} />
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="fixed top-[134px] right-0 w-full bg-gray-900 border-none text-white p-3 shadow-lg">
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <Link href="#">
                                        <Button variant={"link"} className="font-semibold text-sm text-white flex items-center gap-2">
                                            <FaInfoCircle /> À propos de nous
                                        </Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Button variant={"link"} className="font-semibold text-sm text-white flex items-center gap-2">
                                            <FaTasks /> Nos missions
                                        </Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Button variant={"link"} className="font-semibold text-sm text-white flex items-center gap-2">
                                            <FaGift /> Nos offres
                                        </Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Button variant={"link"} className="font-semibold text-sm text-white flex items-center gap-2">
                                            <FaHandsHelping /> Nos valeurs
                                        </Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Button variant={"link"} className="font-semibold text-sm text-white flex items-center gap-2">
                                            <FaCheckCircle /> Nos avantages
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Navbar Links for Larger Screens */}
                <div className={`navbar flex-col lg:flex-row gap-4 mr-4 lg:mr-16 hidden lg:flex`}>
                    <ul className="flex flex-col lg:flex-row gap-4">
                        <li>
                            <Link href="#">
                                <Button variant={"link"} className="font-semibold text-base text-white flex items-center gap-2">
                                    <FaInfoCircle /> À propos de nous
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Button variant={"link"} className="font-semibold text-base text-white flex items-center gap-2">
                                    <FaTasks /> Nos missions
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Button variant={"link"} className="font-semibold text-base text-white flex items-center gap-2">
                                    <FaGift /> Nos offres
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Button variant={"link"} className="font-semibold text-base text-white flex items-center gap-2">
                                    <FaHandsHelping /> Nos valeurs
                                </Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Button variant={"link"} className="font-semibold text-base text-white flex items-center gap-2">
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
