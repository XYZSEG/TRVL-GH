import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  isOpen?: boolean;
  onMenuToggle?: () => void;
  logo?: string;
}

const Navbar = ({
  isOpen = false,
  onMenuToggle = () => {},
  logo = "https://api.dicebear.com/7.x/initials/svg?seed=TG",
}: NavbarProps) => {
  const destinations = [
    { title: "Cape Coast", href: "/destinations/cape-coast" },
    { title: "Accra", href: "/destinations/accra" },
    { title: "Kumasi", href: "/destinations/kumasi" },
  ];

  const experiences = [
    { title: "Cultural Tours", href: "/experiences/cultural" },
    { title: "Adventure", href: "/experiences/adventure" },
    { title: "Food & Cuisine", href: "/experiences/food" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Travel Ghana Logo" className="h-10 w-10" />
          <span className="text-xl font-bold">Travel Ghana</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {destinations.map((destination) => (
                      <li key={destination.href}>
                        <NavigationMenuLink
                          href={destination.href}
                          className={navigationMenuTriggerStyle()}
                        >
                          {destination.title}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Experiences</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {experiences.map((experience) => (
                      <li key={experience.href}>
                        <NavigationMenuLink
                          href={experience.href}
                          className={navigationMenuTriggerStyle()}
                        >
                          {experience.title}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={navigationMenuTriggerStyle()}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="ml-4">Book Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={onMenuToggle}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-background border-b md:hidden">
            <nav className="container py-4">
              <ul className="space-y-4">
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    Destinations
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    Experiences
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    About
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    Contact
                  </Button>
                </li>
                <li>
                  <Button className="w-full">Book Now</Button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
