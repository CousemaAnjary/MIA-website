import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calculator, FileText, PenTool } from "lucide-react"

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
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <CardTitle className="text-3xl font-bold">Nos missions</CardTitle>
                <CardDescription className="text-blue-100">Découvrez nos services professionnels</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                        <TabsTrigger value="comptables" className="flex items-center justify-center">
                            <Calculator className="w-4 h-4 mr-2" />
                            Comptables
                        </TabsTrigger>
                        <TabsTrigger value="fiscales" className="flex items-center justify-center">
                            <FileText className="w-4 h-4 mr-2" />
                            Fiscales
                        </TabsTrigger>
                        <TabsTrigger value="administratives" className="flex items-center justify-center">
                            <PenTool className="w-4 h-4 mr-2" />
                            Administratives
                        </TabsTrigger>
                    </TabsList>
                    {Object.entries(missions).map(([key, items]) => (
                        <TabsContent key={key} value={key}>
                            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                                <ul className="space-y-2">
                                    {items.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="inline-block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                        </TabsContent>
                    ))}
                </Tabs>
            </CardContent>
        </Card>
    )
}