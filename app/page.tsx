import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <div>
            <Header/>
            <main>
                <Hero/>
                <Services/>
                <Process/>
                <Pricing/>
                <Contact/>
            </main>
        </div>
    );
}
