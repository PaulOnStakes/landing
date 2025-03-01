"use client";

import React, {useState} from 'react';
import {Badge} from "@/components/ui/badge";
import {Check} from 'lucide-react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const Process = () => {

    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: "Discovery & Planning",
            description: "We start by understanding your business goals, target audience, and website requirements.",
            details: [
                "Initial consultation to understand your needs",
                "Define project scope and timeline",
                "Identify key features and functionality",
                "Set project milestones and deliverables"
            ]
        },
        {
            title: "Design & Content",
            description: "We create a design that reflects your brand identity and prepare content for your website.",
            details: [
                "Create visual design concepts",
                "Develop content structure and layout",
                "Gather and prepare content assets",
                "Review and refine design mockups"
            ]
        },
        {
            title: "Development",
            description: "We build your website using clean, well-structured HTML, CSS, and JavaScript.",
            details: [
                "Set up development environment",
                "Build responsive frontend code",
                "Implement SEO best practices",
                "Optimize for performance and speed"
            ]
        },
        {
            title: "Testing & Launch",
            description: "We test your website thoroughly and deploy it to your chosen hosting platform.",
            details: [
                "Cross-browser and cross-device testing",
                "Performance optimization",
                "Final review and approval",
                "Website deployment and go-live"
            ]
        }
    ];

    return (
        <section id={"process"} className={"relative min-h-screen flex items-center pt-20"}>
            <div
                className={"absolute top-20 right-10 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"}/>
            <div
                className={"absolute bottom-40 left-30 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl animate-pulse"}/>
            <div className={"max-w-6xl mx-auto text-center"}>
                <Badge variant="secondary">
                        <span
                            className={"inline-block w-2 h-2 rounded-full bg-blue-500 mr-2 animate-ping opacity-75"}></span>
                    Our Process
                </Badge>

                <h1 className={"max-w-4xl mx-auto text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-in"}>How we bring
                    your website to life</h1>
                <p className={" max-w-4xl mx-auto text-xl md:text-2xl text-muted-foreground mb-10 animate-in"}>A streamlined, transparent
                    process designed to deliver results quickly and efficiently.</p>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"}>
                    <div className={"space-y-8"}>
                        {
                            steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`relative pl-10 ${
                                        index !== steps.length - 1 ? 'pb-8' : ''
                                    }`}
                                >
                                    {index !== steps.length - 1 && (
                                        <div className="absolute left-4 top-4 bottom-0 w-[2px] bg-border"></div>
                                    )}
                                    <div
                                        className={`absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                                            index <= activeStep
                                                ? 'border-blue-600 bg-blue-500 text-primary-foreground'
                                                : 'border-muted-foreground/30 bg-background text-muted-foreground'
                                        }`}
                                        onClick={() => setActiveStep(index)}
                                    >
                                        {index < activeStep ? (
                                            <Check className="h-4 w-4"/>
                                        ) : (
                                            <span className="text-sm font-medium">{index + 1}</span>
                                        )}
                                    </div>
                                    <div
                                        className={`transition-all duration-300 cursor-pointer ${
                                            index === activeStep
                                                ? 'opacity-100'
                                                : 'opacity-60 hover:opacity-80'
                                        }`}
                                        onClick={() => setActiveStep(index)}
                                    >
                                        <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle className={"text-2xl font-bold text-start"}>{steps[activeStep].title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className={"space-y-4"}>
                                {steps[activeStep].details.map((detail, index) => (
                                    <li key={index} className={"flex items-start"}>
                                        <div className="mr-3 mt-1 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-500">
                                            <Check strokeWidth={3} className="h-3 w-3"/>
                                        </div>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <div className={"w-full flex justify-between"}>
                                 <Button variant={"outline"}  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}>Previous</Button>
                                 <Button className={"bg-blue-500 hover:bg-blue-600"}  onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}>Next Step</Button>
                            </div>
                        </CardFooter>
                    </Card>

                </div>
            </div>
        </section>
    );
};

export default Process;