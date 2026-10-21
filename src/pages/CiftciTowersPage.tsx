import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import React from 'react';
import HeroOverlaySection from './CiftciTowersPage/sections/HeroOverlay';
import FeaturesAttributeCardsSection from './CiftciTowersPage/sections/FeaturesAttributeCards';

export default function CiftciTowersPage(): React.JSX.Element {
  return (
    <StyleProvider siteBackground="none" heroBackground="none" buttonVariant="stagger">
      <SiteBackgroundSlot />

      <HeroOverlaySection />

      <FeaturesAttributeCardsSection />
    </StyleProvider>
  );
}