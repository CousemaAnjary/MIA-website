import about from '../assets/images/about.png'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

export default function AboutSection() {
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
            <div className=" relative  my-10 px-10 py-14 flex mx-20">
                {/* Section Texte */}
                <div className="md:w-1/2">
                    <h3 className="text-blue-600 font-mono font-semibold text-xl uppercase mb-2">À propos de nous</h3>
                    <h2 className="text-4xl font-bold mb-4">
                        MIA, votre partenaire digital pour une comptabilité simplifiée
                    </h2>
                    <p className="text-gray-600 mb-6">
                        MIA, diminutif de Mi-Assiste, est une société basée à Madagascar qui propose des services de sous-traitance pour les PME et cabinets comptables. Avec plus de 10 ans d'expérience, nous sommes le partenaire digital idéal pour accompagner la croissance de votre entreprise en France.
                    </p>
                    {/* Accordéon / Liste des services */}
                    <div className="space-y-4">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Is it styled?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It comes with default styles that matches the other
                                    components&apos; aesthetic.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is it animated?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It's animated by default, but you can disable it if you prefer.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

                {/* Section Image */}
                <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10 ">
                    <img src={about} alt="MIA Consulting" className="shadow-lg" />
                </div>
            </div>
        </>
    )
}