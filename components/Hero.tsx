import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Badge} from "@/components/ui/badge"
import {ChevronDown} from "lucide-react";


const Hero = () => {

    return (
        <section className={"relative min-h-screen flex items-center pt-20"}>
            <div
                className={"absolute top-20 right-10 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"}/>
            <div
                className={"absolute bottom-40 left-30 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl animate-pulse"}/>
            <div className={"max-w-3xl mx-auto text-center"}>
                <Badge variant="secondary">
                        <span
                            className={"inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-ping opacity-75"}></span>
                    Websites delivered in as little as 1 day
                </Badge>

                <h1 className={"text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-in"}>Beautiful
                    websites, expertly crafted for your business</h1>
                <p className={"text-xl md:text-2xl text-muted-foreground mb-10 animate-in"}>From quick 1-day sites
                    to fully custom web experiences - we build exactly what you need.</p>
                <div className={"flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"}>
                    <Link href={"#contact"}>
                        <Button size={"lg"} className={"bg-green-500 hover:bg-green-600 animate-bounce"}>Get Started
                            Today</Button>
                    </Link>
                    <Link href={"#services"}>
                        <Button variant={"outline"} size={"lg"}>Explore Services</Button>
                    </Link>
                </div>
                <Link href={"#services"}
                      className={"absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors animate-pulse"}>
                    <span className={"text-sm mb-2"}>Learn More</span>
                    <ChevronDown/>
                </Link>
            </div>
        </section>
    );
};

export default Hero;