"use client";

import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from "zod";
import {Textarea} from "@/components/ui/textarea";
import {Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    phone: z.string(),
    message: z.string().min(20).max(500)
})

const Contact = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <section id={"contact"} className={"relative min-h-screen flex items-center pt-20 "}>

            <div className="absolute inset-0 pointer-events-none -z-50 bg-gradient-to-b from-red-50 to-red-100">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
                        backgroundSize: "20px 20px",
                        mask: "radial-gradient(circle at center, black, transparent 70%)",
                        WebkitMask: "radial-gradient(circle at center, black, transparent 70%)",
                    }}
                />
            </div>

            <div className={"absolute top-20 right-10 w-64 h-64 bg-red-300/20 rounded-full blur-3xl"}/>
            <div className={"absolute bottom-40 left-30 w-80 h-80 bg-red-300/20 rounded-full blur-3xl"}/>
            <div className={"max-w-4xl mx-auto text-center"}>
                <Badge className={"bg-red-200 text-red-500 red-yellow-500"}>
                        <span
                            className={"inline-block w-2 h-2 rounded-full bg-red-500 mr-2 opacity-75"}></span>
                    Contact Us
                </Badge>
                <h1 className={"text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"}>Get
                    in <span className={"text-red-500"}>touch</span></h1>
                <p className={"text-xl md:text-2xl text-muted-foreground mb-10"}>Have a project in mind? Let&apos;s discuss how we can help bring your vision to life.</p>
                <div className={"flex justify-center"}>
                    <Card className={"rounded-r-none border-r-0 w-1/2 text-left"}>
                        <CardHeader>
                            <CardTitle className={"text-2xl font-bold"}>
                                Let&apos;s build <span className={"text-red-500"}>your website</span>
                            </CardTitle>
                            <CardDescription className={"text-md"}>
                                Fill out the form below and we&apos;ll get back to you within 24 hours to discuss your project.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Your Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Your Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="john@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="+49 123456912" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Your Message</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="shadcn" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className={"w-full bg-red-500 hover:bg-red-600"}>Submit</Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                    <Card className={"rounded-l-none border-l-0 bg-gradient-to-br text-left text-white border-red-500 w-1/2 from-red-400 to-red-300"}>
                        <CardHeader>
                            <CardTitle className={"text-2xl font-bold"}>
                                Contact Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className={"flex flex-col justify-center gap-4 text-md font-semibold"}>

                                <div className={"flex gap-4 items-center "}>
                                    <div className={"bg-red-400 border-white border-2 rounded-full p-2"}>
                                        <Phone/>
                                    </div>
                                    +49 12345678912
                                </div>
                                <div className={"flex gap-4 items-center "}>
                                    <div className={"bg-red-400 border-white border-2 rounded-full p-2"}>
                                        <Mail/>
                                    </div>
                                    paulvalentinscholz@proton.me
                                </div>
                                <div className={"flex gap-4 items-center "}>
                                    <div className={"bg-red-400 border-white border-2 rounded-full p-2"}>
                                        <MapPin/>
                                    </div>
                                    Placeholder Straße 27, 10827 Berlin
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </section>
    );
};

export default Contact;