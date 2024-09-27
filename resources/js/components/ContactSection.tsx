import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

import { Textarea } from "./ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { router } from "@inertiajs/react";
// import { Inertia } from "@inertiajs/inertia";

// Type de données du formulaire
type ContactType = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

// Définir le schéma de validation avec Zod
const formSchema = z.object({
    name: z.string().min(2, { message: "Le nom est obligatoire" }),
    email: z.string().email({ message: "L'email est obligatoire" }),
    subject: z.string().min(2, { message: "L'objet est obligatoire" }),
    message: z.string().min(2, { message: "Le message est obligatoire" }),
})


export default function ContactSection() {
    /**
   * ! STATE (état, données) de l'application
   */

    const form = useForm<ContactType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",

        },
    })

    /**
     * ! COMPORTEMENT (méthodes, fonctions) de l'application
     */
    const handleSubmit = async (data: ContactType): Promise<void> => {
        router.post('/send-email', data, {
            onSuccess: () => {
                // Optionnel : Afficher un message de succès ou réinitialiser le formulaire
                console.log("Message envoyé avec succès");
                form.reset();
            },
            onError: (errors) => {
                // Optionnel : Gérer les erreurs
                console.log(errors);
            }
        });
    };

    /**
     * ! AFFICHAGE (render) de l'application
     */
    return (
        <>
            <div className=" my-12 mx-auto px-4 md:px-6 lg:px-8 ">
                <section className="mb-32 lg:px-20">
                    {/* Titre de la section */}
                    <div className="text-start mb-12 lg:px-10">
                        <h3 className="text-blue-900 font-mono font-semibold text-xl uppercase mb-5 flex items-center">
                            <span className="inline-block w-10 h-0.5 bg-blue-900 mr-2"></span> {/* Ligne à gauche */}
                            Contactez-nous
                        </h3>
                        <p className="text-slate-800 text-2xl md:text-3xl font-semibold mt-4">
                            Vous avez une question ? Contactez-nous
                        </p>
                    </div>

                    <div className="flex flex-wrap mt-10">
                        {/* Formulaire de contact */}
                        <Form {...form} >
                            <form onSubmit={form.handleSubmit(handleSubmit)} className="mb-12 w-full md:w-1/2 lg:w-5/12 px-0 md:px-3 lg:px-6">
                                <div className="mb-4">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="grid gap-2">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Nom Complet</FormLabel>
                                                        <FormControl>
                                                            <Input className="mt-2 shadow-sm" placeholder="Nom Complet" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <div className="grid gap-2">
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email</FormLabel>
                                                        <FormControl>
                                                            <Input className="mt-2 shadow-sm" placeholder="Email" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Objet</FormLabel>
                                                <FormControl>
                                                    <Input className="mt-2 shadow-sm" placeholder="Objet" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="mb-4">
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea className="mt-2 shadow-sm h-32" placeholder="Message" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {/* <Label>Objet</Label>
                                    <Textarea placeholder="Objet de votre message" className="mt-2 shadow-sm h-32" /> */}
                                </div>

                                <Button className="w-full bg-blue-900 hover:bg-blue-800 mt-4">
                                    Envoyer
                                </Button>
                            </form>
                        </Form>


                        {/* Informations de contact */}
                        <div className="w-full md:w-1/2 lg:w-7/12 px-0 md:px-3 lg:px-6">
                            <div className="flex flex-wrap">
                                {/* Technical Support */}
                                <div className="mb-12 w-full md:w-6/12">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block bg-slate-100 rounded-md p-4 text-blue-800">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6">
                                            <p className="mb-1 text-base font-semibold">Support technique</p>
                                            <p className="text-neutral-500">support@example.com</p>
                                            <p className="text-neutral-500">+1 234-567-89</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Sales Questions */}
                                <div className="mb-12 w-full md:w-6/12">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block bg-slate-100 rounded-md p-4 text-blue-800">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6">
                                            <p className="mb-1 text-base font-semibold">Questions commerciales</p>
                                            <p className="text-neutral-500">sales@example.com</p>
                                            <p className="text-neutral-500">+1 234-567-89</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Press Inquiries */}
                                <div className="mb-12 w-full md:w-6/12">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block bg-slate-100 rounded-md p-4 text-blue-800">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6">
                                            <p className="mb-1 text-base font-semibold">Press</p>
                                            <p className="text-neutral-500">press@example.com</p>
                                            <p className="text-neutral-500">+1 234-567-89</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bug Reports */}
                                <div className="mb-12 w-full md:w-6/12">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block bg-slate-100 rounded-md p-4 text-blue-800">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-6">
                                            <p className="mb-1 text-base font-semibold">Bug report</p>
                                            <p className="text-neutral-500">bugs@example.com</p>
                                            <p className="text-neutral-500">+1 234-567-89</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
