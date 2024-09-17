import Navbar from "@/components/Navbar"
import slider from '../assets/images/slider.jpg'
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import MissionSection from "@/components/MissionSection"


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
                </main>

                {/* Pied de page */}
                <footer></footer>
            </div >
        </>
    )
}