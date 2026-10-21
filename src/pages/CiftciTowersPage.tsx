import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import MetricsSimpleCards from "@/components/sections/metrics/MetricsSimpleCards";
import FeaturesIconCards from "@/components/sections/features/FeaturesIconCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function CiftciTowersPage() {
  const navItems = routes.map((r) => ({ name: r.label, href: r.path }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Çiftçi Towers"
        navItems={navItems}
        ctaButton={{ text: "Schedule Tour", href: "/contact" }}
      />

      <main>
        <HeroSplit
          tag="Istanbul • Luxury Living"
          title="Çiftçi Towers"
          description="Elevated ultra-luxury living in the heart of Beşiktaş, Istanbul. Bosphorus views, architectural mastery, and world-class amenities."
          primaryButton={{ text: "Explore Residences", href: "#residences" }}
          secondaryButton={{ text: "Contact Sales", href: "/contact" }}
          imageSrc="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80"
          textAnimation="slide-up"
        />

        <MetricsSimpleCards
          tag="Property Highlights"
          title="Architectural Excellence in Beşiktaş"
          description="Designed to redefine skyline luxury with unparalleled engineering and sophisticated interior craftsmanship."
          metrics={[
            { value: "59", description: "Floors of Iconic Twin Towers" },
            { value: "360°", description: "Panoramic Bosphorus & Skyline Views" },
            { value: "10,000 m²", description: "Private Green & Commercial Spaces" },
            { value: "24/7", description: "Dedicated Concierge & Valet Service" }
          ]}
          textAnimation="slide-up"
        />

        <FeaturesIconCards
          tag="World-Class Lifestyle"
          title="Unmatched Premium Amenities"
          description="Experience modern refinement with curated facilities tailored for private comfort and productivity."
          features={[
            { icon: "🏢", title: "Smart Residences", description: "Integrated home automation and climate control systems." },
            { icon: "🏊", title: "Wellness & Spa", description: "Indoor heated pool, traditional Turkish hammam, and sauna." },
            { icon: "🍷", title: "Sky Lounge", description: "Exclusive private dining and meeting rooms high above the city." }
          ]}
          textAnimation="slide-up"
        />

        <ContactCta
          tag="Inquire Today"
          text="Discover available executive suites and penthouse residences at Çiftçi Towers Istanbul."
          primaryButton={{ text: "Request Brochure", href: "/contact" }}
          secondaryButton={{ text: "Book Private View", href: "/contact" }}
          textAnimation="slide-up"
        />
      </main>

      <FooterSimple
        brand="Çiftçi Towers"
        columns={[
          {
            title: "Residences",
            items: [
              { label: "Penthouses", href: "#" },
              { label: "Executive Suites", href: "#" },
              { label: "Floor Plans", href: "#" }
            ]
          },
          {
            title: "Location",
            items: [
              { label: "Beşiktaş, Istanbul", href: "#" },
              { label: "Bosphorus View", href: "#" }
            ]
          }
        ]}
        copyright="© 2025 Çiftçi Towers Istanbul. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" }
        ]}
      />
    </div>
  );
}