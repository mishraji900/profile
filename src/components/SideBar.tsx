"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { BackpackIcon, HomeIcon, ListBulletIcon, PaperPlaneIcon, PersonIcon } from "@radix-ui/react-icons";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

const data = [
    {
        id: 1,
        name: "Home",
        link: "#home",
        icon: <HomeIcon className="h-6 w-6 " />,
    },
    {
        id: 2,
        name: "Who am I",
        link: "#WhoamI",
        icon: <PersonIcon className="h-6 w-6 " />,
    },
    {
        id: 3,
        name: "Skill Stack",
        link: "#SC",
        icon: <BackpackIcon className="h-6 w-6 " />,
    },
    {
        id: 4,
        name: "My Works",
        link: "#MyWorks",
        icon: <ListBulletIcon className="h-6 w-6 " />,
    },
    {
        id: 5,
        name: "Say Hello",
        link: "#contact",
        icon: <PaperPlaneIcon className="h-6 w-6 " />,
    },
];


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                {
                    data.map((item: any) => (
                        <Link href={item.link} className="flex space-x-2 hover:text-rose-600" key={item.id}>
                            <div>
                                {item.icon}
                            </div>
                            <div className="hidden md:block">
                                {item.name}
                            </div>
                        </Link>
                    ))
                }
            </Menu>
        </div>
    );
}
