import React from 'react';
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Award, Clock, Code, Search, Smartphone, Zap} from "lucide-react";

const Services = () => {

    const services = [
        {
            icon: <Clock strokeWidth={2} className={"text-red-500 h-10 w-10 mx-auto"} />,
            title: "Lightning Fast Delivery",
            description: "Get your website up and running in just 24 hours with our express service, perfect for businesses who need to launch quickly.",
        },
        {
            icon: <Code strokeWidth={2} className={"text-purple-500 h-10 w-10 mx-auto"} />,
            title: "Custom Development",
            description: "Need something more tailored? Our custom development service creates bespoke websites designed specifically for your business needs.",
        },
        {
            icon: <Smartphone strokeWidth={2} className={"text-blue-500 h-10 w-10 mx-auto"} />,
            title: "Responsive Design",
            description: "Websites that look and function perfectly on any device, from desktop computers to smartphones and tablets.",
        },
        {
            icon: <Award strokeWidth={2} className={"text-cyan-500 h-10 w-10 mx-auto"} />,
            title: "Premium Quality",
            description: "High-quality code and design that meets modern web standards for performance, security, and accessibility.",
        },
        {
            icon: <Zap strokeWidth={2} className={"text-green-500 h-10 w-10 mx-auto"} />,
            title: "Performance Tuning",
            description: "Optimized for speed and performance, ensuring visitors don't leave due to slow loading times.",
        },
        {
            icon: <Search strokeWidth={2} className={"text-yellow-500 h-10 w-10 mx-auto"} />,
            title: "SEO Optimization",
            description: "Built-in search engine optimization to help your website rank higher in search results and attract more visitors.",

        },

    ]

    return (
        <section id={"services"} className={"relative min-h-screen flex items-center pt-20 "}>

            <div className="absolute inset-0 pointer-events-none -z-50 bg-gradient-to-b from-yellow-50 to-yellow-100">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(rgba(0,0,0,0.05) 2px, transparent 2px)`,
                        backgroundSize: "30px 30px",
                        mask: "radial-gradient(circle at center, black, transparent 70%)",
                        WebkitMask: "radial-gradient(circle at center, black, transparent 70%)",
                    }}
                />
            </div>

            <div className={"absolute top-20 right-10 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl"}/>
            <div className={"absolute bottom-40 left-30 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl"}/>
            <div className={"max-w-5xl mx-auto text-center"}>
                <Badge className={"bg-yellow-200 text-yellow-500 border-yellow-500"}>
                        <span
                            className={"inline-block w-2 h-2 rounded-full bg-yellow-500 mr-2 opacity-75"}></span>
                    Our Services
                </Badge>
                <h1 className={"text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"}>We
                    create <span className={"text-yellow-500"}>websites</span> that work for <span className={"text-yellow-500"}>your</span> business</h1>
                <p className={"text-xl md:text-2xl text-muted-foreground mb-10"}>From lightning-fast
                    1-day websites to fully custom web experiences, we provide the web solutions you need to succeed
                    online.</p>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
                    {
                        services.map((service, index) => (
                            <Card key={index} className={`border-2`}>
                                <CardHeader>
                                    <CardTitle>
                                        {service.icon}
                                        <h3 className={"text-xl font-semibold"}>{service.title}</h3>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className={"text-muted-foreground"}>{service.description}</p>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;