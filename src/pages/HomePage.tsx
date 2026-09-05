// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import AboutSection from './HomePage/sections/About';
import PropertiesSection from './HomePage/sections/Properties';
import ContactSection from './HomePage/sections/Contact';

export default function HomePage(): React.JSX.Element {
  return (
<StyleProvider siteBackground="none" heroBackground="none" buttonVariant="stagger">
        <SiteBackgroundSlot />

        

        <HeroSection />

        <AboutSection />

        <PropertiesSection />

        <ContactSection />

        
      </StyleProvider>
  );
}
