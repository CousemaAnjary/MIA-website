import Navbar from "@/components/Navbar"
import slider from '../assets/images/slider.jpg';


export default function Home() {
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
            <div>
                {/* En-tête */}
                <header className="bg-cover bg-center h-screen relative" style={{ backgroundImage: `url(${slider})` }} >
                    <Navbar />
                </header>

                {/* Contenu */}
                <main></main>

                {/* Pied de page */}
                <footer></footer>
            </div >
        </>
    )
}