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
            <div className=" relative bg-slate-50 px-40 py-20 flex ">
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
                                <AccordionTrigger className="bg-white p-4 transition-colors data-[state=open]:bg-blue-500 data-[state=open]:text-white decoration-transparent">Quels services comptables proposez-vous ?</AccordionTrigger>
                                <AccordionContent className='p-5'>
                                    Nous offrons des services complets : récupération et traitement des pièces comptables, révision des comptes, lettrage, rapprochement bancaire et établissement du bilan annuel.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="bg-white p-4 transition-colors data-[state=open]:bg-blue-500 data-[state=open]:text-white decoration-transparent">Quelles solutions fiscales mettez-vous en place ?</AccordionTrigger>
                                <AccordionContent className='p-5'>
                                    Nous nous occupons de la préparation et de la télédéclaration de la TVA, de la liasse fiscale, des annexes et plaquettes, ainsi que de l'envoi des déclarations fiscales (DAS2).
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="bg-white p-4 transition-colors data-[state=open]:bg-blue-500 data-[state=open]:text-white decoration-transparent">Quels sont vos services administratifs ?</AccordionTrigger>
                                <AccordionContent className='p-5'>
                                    Nous proposons des services de saisie de données, de service après-vente, de relance clients, d'assistanat virtuel et de facturation clients, ainsi que d'autres tâches administratives sur demande.
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