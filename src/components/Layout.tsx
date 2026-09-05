import { Outlet } from 'react-router-dom';

import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import NavbarFullscreenStatic from "@/components/ui/NavbarFullscreenStatic";
import FooterBasic from "@/components/sections/footer/FooterBasic";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarFullscreenStatic
                logo="Le Cercle"
                navItems={[
                  { name: "Properties", href: "#properties" },
                  { name: "About", href: "#about" },
                  { name: "Contact", href: "#contact" },
                ]}
                ctaButton={{ text: "Book a Tour", href: "#contact" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterBasic
                columns={[
                  {
                    title: "Properties",
                    items: [
                      { label: "Villas", href: "#properties" },
                      { label: "Apartments", href: "#" },
                      { label: "Penthouses", href: "#" },
                      { label: "New Developments", href: "#" },
                    ],
                  },
                  {
                    title: "Services",
                    items: [
                      { label: "Property Search", href: "#" },
                      { label: "Legal Assistance", href: "#" },
                      { label: "Interior Design", href: "#" },
                      { label: "Property Management", href: "#" },
                    ],
                  },
                  {
                    title: "Locations",
                    items: [
                      { label: "Golden Mile", href: "#" },
                      { label: "Puerto Banús", href: "#" },
                      { label: "Sierra Blanca", href: "#" },
                      { label: "La Zagaleta", href: "#" },
                    ],
                  },
                  {
                    title: "Company",
                    items: [
                      { label: "About Us", href: "#" },
                      { label: "Contact", href: "#contact" },
                      { label: "Privacy Policy", href: "#" },
                      { label: "Terms of Service", href: "#" },
                    ],
                  },
                ]}
                leftText="© 2026 Le Cercle. All rights reserved."
                rightText="Marbella, Costa del Sol"
              />
    </StyleProvider>
  );
}
