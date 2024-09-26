import Navbar from "@/components/Navbar"
import slider from '../assets/images/slider.jpg'
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import MissionSection from "@/components/MissionSection"
import OffreSection from "@/components/OffreSection"
import ValeurSection from "@/components/ValeurSection"
import AvantageSection from "@/components/AvantageSection"
import FooterSection from "@/components/FooterSection"
import ContactSection from "@/components/ContactSection"

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
            <div className="relative min-h-screen">
                {/* En-tête */}
                <header className="bg-cover bg-center h-screen relative" style={{ backgroundImage: `url(${slider})` }} >
                    <Navbar />
                    <HeroSection />
                </header>

                {/* Contenu */}
                <main>
                    <section>
                        <AboutSection />
                    </section>

                    <section>
                        <MissionSection />
                    </section>

                    <section>
                        <OffreSection />
                    </section>

                    <section>
                        <ValeurSection />
                    </section>

                    <section>
                        <AvantageSection />
                    </section>

                    <section>
                        <ContactSection />
                    </section> 
                </main>

                {/*                
                <footer>
                    <FooterSection />
                </footer>  */}
            </div >
        </>
    )
}