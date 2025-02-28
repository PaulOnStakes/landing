import {Code} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Header = () => {
    return (
        <header className={"fixed top-0 p-5 z-50 w-full transition-all duration-300"}>
            <div className={"bg-background/20 backdrop-blur-md rounded-md p-5"}>
                <div className={"container mx-auto flex justify-between items-center"}>
                    <Link href={"#"} className={"flex items-center gap-2 text-xl font-bold text-center px-2"}>
                        <Code height={24} width={24} strokeWidth={2} strokeLinecap={"round"}
                              className={"text-red-500"}/>
                        <span>Name</span>
                    </Link>

                    <nav className={"hidden md:flex items-center gap-8"}>
                        <Link href={"#services"}>
                            <Button variant={"link"} className={"hover:text-red-500 transition-colors"}>
                                Services
                            </Button>
                        </Link>
                        <Link href={"#process"}>
                            <Button variant={"link"} className={"hover:text-red-500 transition-colors"}>
                                Process
                            </Button>
                        </Link>
                        <Link href={"#pricing"}>
                            <Button variant={"link"} className={"hover:text-red-500 transition-colors"}>
                                Pricing
                            </Button>
                        </Link>
                        <Link href={"#portfolio"}>
                            <Button variant={"link"} className={"hover:text-red-500 transition-colors"}>
                                Portfolio
                            </Button>
                        </Link>
                        <Link href={"#contact"}>
                            <Button variant={"link"} className={"hover:text-red-500 transition-colors"}>
                                Contact
                            </Button>
                        </Link>
                        <Link href={"#contact"}>
                            <Button className={"bg-red-500 hover:bg-red-600 transition-colors animate-wiggle"}>
                                Get Started
                            </Button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;