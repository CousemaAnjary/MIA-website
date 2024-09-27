import { Mail, MapPin, Phone } from "lucide-react";
import logo from '../assets/images/logo.png';

export default function FooterSection() {
    return (
        <footer className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {/* Section Logo et description */}
                <div className="sm:col-span-2 flex flex-col items-center sm:items-center">
                    <img src={logo} alt="Logo" className="w-40 mb-4 lg:me-14" />
                    <p className="text-base font-semibold text-gray-300 text-center sm:text-left max-w-md">
                        Nous déléguer une partie de vos activités, c'est gagner du temps pour mieux accompagner vos précieux clients.
                    </p>
                </div>

                {/* Section Contact */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold mb-4">Dossier test gratuit - sans engagement</h3>
                    <div className="space-y-4">
                        <a href="https://maps.app.goo.gl/..." target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <MapPin className="mr-3" />
                            <span className="text-gray-200">Antananarivo - Madagascar</span>
                        </a>
                        <a href="mailto:miassist.mdg@gmail.com" className="flex items-center">
                            <Mail className="mr-3" />
                            <span className="text-gray-200">miassist.mdg@gmail.com</span>
                        </a>
                        <a href="https://wa.me/26134058280" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Phone className="mr-3" />
                            <span className="text-gray-200">Whatsapp : +261 34 05 852 80</span>
                        </a>
                    </div>
                </div>

                {/* Section Réseaux sociaux */}
                <div>
                    <h3 className="text-xl font-bold tracking-wide mb-4">Social</h3>
                    <div className="flex items-center space-x-5">
                        <a href="#">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6C22.5,6.4,23.3,5.5,24,4.6z"></path>
                            </svg>
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                <circle cx="15" cy="15" r="4"></circle>
                                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10 C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1 c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                            </svg>
                        </a>
                        <a href="#">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                            </svg>
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-gray-300">
                        Suivez-nous sur les réseaux sociaux pour plus d'informations.
                    </p>
                </div>
            </div>

            <div className="border-t border-gray-100 pt-3">
                <p className="text-center text-sm text-gray-200 mt-3">
                    © 2024 Mi-Assiste. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
}
