import Navbar from "@/components/Navbar"
import slider from '../assets/images/slider.jpg'
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import MissionSection from "@/components/MissionSection"
import OffreSection from "@/components/OffreSection"

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
                    <HeroSection />
                </header>

                {/* Contenu */}
                <main>
                    <section>
                        {/* A propos de nous */}
                        <AboutSection />
                    </section>

                    <section>
                        {/* Nos mission */}
                        <MissionSection />
                    </section>

                    <section>
                        {/* Nos offres */}
                        <OffreSection />
                    </section>
                </main>

                {/* Pied de page */}
                <footer></footer>
            </div >
        </>
    )
}