import {Button} from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge"
import {Award, ChevronDown, Clock, Code, Search, Smartphone, Zap} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";


const Hero = () => {

    return (
        <main>
            <section className={"relative min-h-screen flex items-center pt-20"}>
                <div className={"absolute top-20 right-10 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"}/>
                <div className={"absolute bottom-40 left-30 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl animate-pulse"}/>
                <div className={"max-w-3xl mx-auto text-center"}>
                    <Badge variant="secondary">
                        <span className={"inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-ping opacity-75"}></span>
                        Websites delivered in as little as 1 day
                    </Badge>

                    <h1 className={"text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-in"}>Beautiful websites, expertly crafted for your business</h1>
                    <p className={"text-xl md:text-2xl text-muted-foreground mb-10 animate-in"}>From quick 1-day sites to fully custom web experiences - we build exactly what you need.</p>
                    <div className={"flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"}>
                        <Link href={"#contact"}>
                            <Button size={"lg"} className={"bg-red-500 hover:bg-red-600 animate-bounce"}>Get Started Today</Button>
                        </Link>
                        <Link href={"#services"}>
                            <Button variant={"secondary"} size={"lg"}>Explore Services</Button>
                        </Link>
                    </div>
                    <Link href={"#services"} className={"absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors animate-pulse"}>
                        <span className={"text-sm mb-2"}>Learn More</span>
                        <ChevronDown />
                    </Link>
                </div>
            </section>
            <section id={"services"} className={"relative min-h-screen flex items-center pt-20"}>
                <div className={"absolute top-20 right-10 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"}/>
                <div className={"absolute bottom-40 left-30 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl animate-pulse"}/>
                <div className={"max-w-5xl mx-auto text-center"}>
                    <Badge variant="secondary">
                        <span className={"inline-block w-2 h-2 rounded-full bg-yellow-500 mr-2 animate-ping opacity-75"}></span>
                        Our Services
                    </Badge>

                    <h1 className={"text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-in"}>We create websites that work for your business</h1>
                    <p className={"text-xl md:text-2xl text-muted-foreground mb-10 animate-in"}>From lightning-fast 1-day websites to fully custom web experiences, we provide the web solutions you need to succeed online.</p>
                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in"}>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <Clock strokeWidth={2} className={"text-yellow-500 animate-bounce mx-auto"}></Clock>
                                    <h3 className={"text-xl font-semibold"}>Lightning Fast Delivery</h3>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={"text-muted-foreground"}>Get your website up and running in just 24 hours with our express service, perfect for businesses who need to launch quickly.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <Code strokeWidth={2} className={"text-red-500 animate-bounce mx-auto"}></Code>
                                    <h3 className={"text-xl font-semibold"}>Custom Development</h3>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={"text-muted-foreground"}>Need something more tailored? Our custom development service creates bespoke websites designed specifically for your business needs.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <Smartphone strokeWidth={2} className={"text-blue-500 animate-bounce mx-auto"}></Smartphone>
                                    <h3 className={"text-xl font-semibold"}>Responsive Design</h3>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={"text-muted-foreground"}>Websites that look and function perfectly on any device, from desktop computers to smartphones and tablets.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <Award strokeWidth={2} className={"text-teal-500 animate-bounce mx-auto"}></Award>
                                    <h3 className={"text-xl font-semibold"}>Premium Quality</h3>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={"text-muted-foreground"}>High-quality code and design that meets modern web standards for performance, security, and accessibility.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <Zap strokeWidth={2} className={"text-green-500 animate-bounce mx-auto"}></Zap>
                                    <h3 className={"text-xl font-semibold"}>Performance Tuning</h3>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={"text-muted-foreground"}>Optimized for speed and performance, ensuring visitors don&apos;t leave due to slow loading times.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <Search strokeWidth={2} className={"text-purple-500 animate-bounce mx-auto"}></Search>
                                    <h3 className={"text-xl font-semibold"}>SEO Optimization</h3>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={"text-muted-foreground"}>Built-in search engine optimization to help your website rank higher in search results and attract more visitors.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Hero;