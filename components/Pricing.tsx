import React from 'react';
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Check, X} from "lucide-react";
import Link from 'next/link';
import {Button} from "@/components/ui/button";

const Pricing = () => {

    const plans = [
        {
            name: "1-Day Website",
            price: 999,
            description: "Get your business online quickly with our 1-day website package.",
            features: [
                {name: "Up to 1 page", included: true},
                {name: "Mobile responsive design", included: true},
                {name: "Basic SEO setup", included: true},
                {name: "Contact form", included: true},
                {name: "Social media integration", included: true},
                {name: "Content upload (provided by you)", included: true},
                {name: "Custom design", included: false},
                {name: "Advanced animations", included: false}
            ],
            cta: "Get Started Today",
            popular: false
        },
        {
            name: "Custom Website",
            price: 2499,
            description: "A fully custom website tailored to your unique business needs.",
            features: [
                {name: "Up to 10 pages", included: true},
                {name: "Mobile responsive design", included: true},
                {name: "Advanced SEO optimization", included: true},
                {name: "Interactive contact forms", included: true},
                {name: "Social media integration", included: true},
                {name: "Content upload & basic copywriting", included: true},
                {name: "Custom design", included: true},
                {name: "Custom animations & interactions", included: true}
            ],
            cta: "Get Custom Quote",
            popular: true
        }
    ]


    return (
        <section className={"relative min-h-screen flex items-center pt-20"}>
            <div
                className={"absolute top-20 right-10 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"}/>
            <div
                className={"absolute bottom-40 left-30 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl animate-pulse"}/>
            <div className={"max-w-3xl mx-auto text-center"}>
                <Badge variant="secondary">
                        <span
                            className={"inline-block w-2 h-2 rounded-full bg-purple-500 mr-2 animate-ping opacity-75"}></span>
                    Pricing Plans
                </Badge>

                <h1 className={"text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-in"}>Simple,
                    transparent pricing</h1>
                <p className={"text-xl md:text-2xl text-muted-foreground mb-10 animate-in"}>Choose the perfect plan for
                    your business needs. No hidden fees or surprises.</p>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"}>
                    {
                        plans.map((plan, index) => (
                            <Card key={index} className={`text-start ${plan.popular ? 'border-purple-500 border-2 ' : ''}`}>
                                <CardHeader>
                                    {
                                        plan.popular &&
                                        <Badge variant={"secondary"} className={"border-purple-500 border-2 bg-purple-200 text-purple-500"}>
                                            <span
                                                className={"inline-block w-2 h-2 rounded-full bg-purple-500 mr-2 animate-ping opacity-75"} />
                                            Most Popular
                                        </Badge>
                                    }
                                    <CardTitle className={"text-2xl font-bold"}>{plan.name}</CardTitle>
                                    <CardDescription className={"text-md"}>{plan.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className={"mb-6"}>
                                        <span className={"text-4xl font-bold"}>{plan.price}€</span>
                                        <span className={"text-muted-foreground ml-1"}>one-time</span>
                                    </div>

                                    <ul className={"space-y-3 mb-3"}>
                                        {
                                            plan.features.map((feature, index) => (
                                                <li key={index} className={"flex items-start"}>
                                                    {feature.included ? (
                                                        <div
                                                            className="mr-3 mt-1 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-purple-500/10 text-purple-500">
                                                            <Check strokeWidth={3} className="h-3 w-3"/>
                                                        </div>
                                                    ) : (
                                                        <div
                                                            className="mr-3 mt-1 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-muted text-muted-foreground">
                                                            <X strokeWidth={3} className="h-3 w-3"/>
                                                        </div>
                                                    )}
                                                    <span className={feature.included ? '' : 'text-muted-foreground'}>
                                                        {feature.name}
                                                    </span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Link href={"#contact"} className={"w-full"}>
                                        <Button variant={plan.popular ? "default" : "outline"} className={`w-full ${plan.popular ? 'bg-purple-500 hover:bg-purple-600 animate-bounce' : ''}`}>
                                            {plan.cta}
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Pricing;