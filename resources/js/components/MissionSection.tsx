import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calculator, FileText, PenTool } from "lucide-react"
import { FiBarChart, FiClipboard, FiFileText } from 'react-icons/fi'

export default function Component() {
    const [activeTab, setActiveTab] = useState("comptables")

    const missions = {
        comptables: [
            "Tenue complète de la comptabilité",
            "Récupération des pièces, traitement des pièces (classement, saisie)",
            "Révision des comptes, lettrage",
            "Rapprochement bancaire",
            "Etablissement de situation",
            "Bilan annuel"
        ],
        fiscales: [
            "Préparation de la TVA",
            "Télédéclaration à la demande du client",
            "Préparation de la liasse fiscale",
            "Préparation des annexes et plaquette",
            "Préparation et envoi DAS2"
        ],
        administratives: [
            "Saisie de données",
            "Service après vente",
            "Relance client",
            "Support client",
            "Assistanat virtuel",
            "Facturation clients",
            "Autres tâches à la demande"
        ]
    }

    return (
        <div className="py-16 px-40">
            {/* Titre de la section */}
            <div className=" md:w-1/2 mb-12">
                <h3 className="text-blue-900 font-mono font-semibold text-xl uppercase mb-5 flex items-center">
                    <span className="inline-block w-10 h-0.5 bg-blue-900 mr-2"></span> {/* Ligne à gauche */}
                    À propos de nous
                </h3>
                <p className="text-gray-500 mt-4">Découvrez les missions comptables, fiscales et administratives que nous offrons.</p>
            </div>

            {/* Grille des missions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Mission Comptables */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <FiBarChart className="text-blue-700 text-6xl mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Missions comptables</h3>
                    <p className="text-gray-600">Nous offrons des services complets pour la tenue de comptabilité, la récupération des pièces, le lettrage, et la révision des comptes.</p>
                </div>

                {/* Mission Fiscales */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <FiFileText className="text-blue-700 text-6xl mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Missions fiscales</h3>
                    <p className="text-gray-600">Nos missions fiscales incluent la préparation et la télédéclaration de la TVA, la préparation de la liasse fiscale et des annexes.</p>
                </div>

                {/* Mission Administratives */}
                <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <FiClipboard className="text-blue-700 text-6xl mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Missions administratives</h3>
                    <p className="text-gray-600">Nous assurons la saisie de données, le service après-vente, le support client, et d'autres tâches administratives pour nos clients.</p>
                </div>
            </div>
        </div>
    )
}