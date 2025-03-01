import React from 'react';
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Award, Clock, Code, Search, Smartphone, Zap} from "lucide-react";

const Services = () => {

    const services = [
        {
            icon: <Clock strokeWidth={2} className={"text-yellow-500 h-10 w-10 animate-bounce mx-auto"} />,
            title: "Lightning Fast Delivery",
            description: "Get your website up and running in just 24 hours with our express service, perfect for businesses who need to launch quickly."
        },
        {
            icon: <Code strokeWidth={2} className={"text-green-500 h-10 w-10 animate-bounce mx-auto"} />,
            title: "Custom Development",
            description: "Need something more tailored? Our custom development service creates bespoke websites designed specifically for your business needs."
        },
        {
            icon: <Smartphone strokeWidth={2} className={"text-red-500 h-10 w-10 animate-bounce mx-auto"} />,
            title: "Responsive Design",
            description: "Websites that look and function perfectly on any device, from desktop computers to smartphones and tablets."
        },
        {
            icon: <Award strokeWidth={2} className={"text-blue-500 h-10 w-10 animate-bounce mx-auto"} />,
            title: "Premium Quality",
            description: "High-quality code and design that meets modern web standards for performance, security, and accessibility."
        },
        {
            icon: <Zap strokeWidth={2} className={"text-purple-500 h-10 w-10 animate-bounce mx-auto"} />,
            title: "Performance Tuning",
            description: "Optimized for speed and performance, ensuring visitors don't leave due to slow loading times."
        },
        {
            icon: <Search strokeWidth={2} className={"text-pink-500 h-10 w-10 animate-bounce mx-auto"} />,
            title: "SEO Optimization",
            description: "Built-in search engine optimization to help your website rank higher in search results and attract more visitors."
        },

    ]

    return (
        <section id={"services"} className={"relative min-h-screen flex items-center pt-20"}>
            <div className={"absolute top-20 right-10 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"}/>
            <div className={"absolute bottom-40 left-30 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl animate-pulse"}/>
            <div className={"max-w-5xl mx-auto text-center"}>
                <Badge variant="secondary">
                        <span
                            className={"inline-block w-2 h-2 rounded-full bg-yellow-500 mr-2 animate-ping opacity-75"}></span>
                    Our Services
                </Badge>
                <h1 className={"text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-in"}>We
                    create websites that work for your business</h1>
                <p className={"text-xl md:text-2xl text-muted-foreground mb-10 animate-in"}>From lightning-fast
                    1-day websites to fully custom web experiences, we provide the web solutions you need to succeed
                    online.</p>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in"}>
                    {
                        services.map((service, index) => (
                            <Card key={index}>
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