import { useState } from 'react'
import about from '../assets/images/about.png'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'


export default function AboutSection() {
    /**
     * ! STATE (état, données) de l'application
     */
    const [openItem, setOpenItem] = useState<string | null>(null)


    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const handleToggle = (item: string): void => {
        setOpenItem(openItem === item ? null : item)
    }


    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <div className=" relative bg-slate-50 px-40 py-20 flex ">
                {/* Section Texte */}
                <div className="md:w-1/2">
                    <h3 className="text-blue-900 font-mono font-semibold text-xl uppercase mb-2 flex items-center">
                        <span className="inline-block w-10 h-0.5 bg-blue-900 mr-2"></span> {/* Ligne à gauche */}
                        À propos de nous
                    </h3>
                    <h2 className="text-4xl font-bold mb-4">
                        MIA, votre partenaire digital pour une comptabilité simplifiée
                    </h2>
                    <p className="text-gray-600 mb-6">
                        MIA, diminutif de Mi-Assiste, est une société basée à Madagascar qui propose des services de sous-traitance pour les PME et cabinets comptables. Avec plus de 10 ans d'expérience, nous sommes le partenaire digital idéal pour accompagner la croissance de votre entreprise en France.
                    </p>
                    {/* Accordéon / Liste des services */}

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className='mb-3'>
                            <AccordionTrigger className="bg-white  p-4 transition-colors data-[state=open]:bg-blue-900 data-[state=open]:text-white decoration-transparent" onClick={() => handleToggle('item-1')}>
                                Quels services comptables proposez-vous ?
                                <span className="ml-2">
                                    {openItem === 'item-1' ? <FiMinus /> : <FiPlus />}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className='p-5'>
                                Nous offrons des services complets : récupération et traitement des pièces comptables, révision des comptes, lettrage, rapprochement bancaire et établissement du bilan annuel.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className='mb-3'>
                            <AccordionTrigger className="bg-white p-4 transition-colors data-[state=open]:bg-blue-900 data-[state=open]:text-white decoration-transparent" onClick={() => handleToggle('item-2')}>
                                Quelles solutions fiscales mettez-vous en place ?
                                <span className="ml-2">
                                    {openItem === 'item-2' ? <FiMinus /> : <FiPlus />}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className='p-5'>
                                Nous nous occupons de la préparation et de la télédéclaration de la TVA, de la liasse fiscale, des annexes et plaquettes, ainsi que de l'envoi des déclarations fiscales (DAS2).
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className='mb-3'>
                            <AccordionTrigger className="bg-white p-4 transition-colors data-[state=open]:bg-blue-900 data-[state=open]:text-white decoration-transparent" onClick={() => handleToggle('item-3')}>
                                Quels sont vos services administratifs ?
                                <span className="ml-2">
                                    {openItem === 'item-3' ? <FiMinus /> : <FiPlus />}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className='p-5'>
                                Nous proposons des services de saisie de données, de service après-vente, de relance clients, d'assistanat virtuel et de facturation clients, ainsi que d'autres tâches administratives sur demande.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>

                {/* Section Image */}
                <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10 ">
                    <img src={about} alt="MIA Consulting" className="shadow-lg" />
                </div>
            </div>
        </>
    )
}