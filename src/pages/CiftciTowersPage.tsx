import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import AvatarGroup from "@/components/ui/AvatarGroup";
import FeaturesAttributeCards from "@/components/sections/features/FeaturesAttributeCards";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";

export default function CiftciTowersPage() {
  return (
    <>
      <div data-webild-section="HeroOverlay"><section aria-label="Hero section" className="relative w-full h-svh overflow-hidden flex flex-col justify-end mb-20"><HeroBackgroundSlot /><ImageOrVideo imageSrc="https://img.freepik.com/premium-photo/modern-skyscrapers-city-architecture-twilight-sky_31965-15631.jpg" className="absolute inset-0 w-full h-full object-cover rounded-none" /><div className="absolute z-10 w-[150vw] h-[150vw] left-0 bottom-0 -translate-x-1/2 translate-y-1/2 backdrop-blur mask-[radial-gradient(circle,black_20%,transparent_70%)]" aria-hidden="true" /><div className="relative z-10 w-content-width mx-auto pb-10 md:pb-25"><div className="flex flex-col gap-3 w-full md:w-6/10 lg:w-1/2 xl:w-45/100 2xl:w-4/10"><div className="w-fit px-3 py-1 mb-1 text-sm card rounded"><p>ICONIC ISTANBUL RESIDENCES</p></div><TextAnimation text="Çiftçi Towers: Ultra-Luxury Bosphorus Living" variant="fade-blur" gradientText={true} tag="h1" className="text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-white text-balance" /><TextAnimation text="Experience unparalleled elegance in the heart of Istanbul. Dual skyscraper architecture offering sweeping Bosphorus vistas, world-class amenities, and elite private services." variant="fade-blur" gradientText={false} tag="p" className="text-lg md:text-xl text-white leading-snug text-balance" /><div className="flex flex-wrap gap-3 mt-2 md:mt-3"><Button text="Schedule Private Tour" href="#contact" variant="primary" /><Button text="Explore Residences" href="#residences" variant="secondary" animationDelay={0.1} /></div><div className="mt-3 md:mt-4"><AvatarGroup avatarsSrc={["https://img.freepik.com/free-photo/portrait-smiling-handsome-man-dressed-white-shirt-front-view_186201-2953.jpg","https://img.freepik.com/free-photo/elegant-businesswoman-standing-office-building-looking-front_1150-39448.jpg","https://img.freepik.com/free-photo/young-successful-businessman-smiling-modern-city_1150-18234.jpg"]} size="lg" label="Reserved for distinguished global investors" labelClassName="text-primary-cta-text" /></div></div></div></section></div>
      <div data-webild-section="FeaturesAttributeCards"><FeaturesAttributeCards
        tag="Iconic Istanbul Living"
        title="Architectural Excellence at Çiftçi Towers"
        description="Discover bespoke high-rise residences overlooking the Bosphorus, where contemporary design meets world-class luxury amenities."
        primaryButton={{"text":"Inquire Now","href":"#contact"}}
        secondaryButton={{"text":"View Floor Plans","href":"#floor-plans"}}
        items={[{"title":"Executive Sky Penthouse","tags":"Residence • 580 m²","badge":"Exclusive Listing","imageSrc":"https://img.freepik.com/free-photo/3d-rendering-luxury-modern-bedroom-suite-hotel-resort_105762-2113.jpg","details":[{"icon":"Maximize","label":"Living Area","value":"580 m²"},{"icon":"Bed","label":"Bedrooms","value":"5 + 2"},{"icon":"Compass","label":"Orientation","value":"Bosphorus View"}]},{"title":"Panoramic Corner Suite","tags":"Residence • 320 m²","badge":"High Floor","imageSrc":"https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1927.jpg","details":[{"icon":"Maximize","label":"Living Area","value":"320 m²"},{"icon":"Bed","label":"Bedrooms","value":"3 + 1"},{"icon":"Eye","label":"View","value":"Skyline & Sea"}]},{"title":"Garden Terrace Residence","tags":"Residence • 410 m²","badge":"Private Deck","imageSrc":"https://img.freepik.com/free-photo/modern-luxury-apartment-building_1147-382.jpg","details":[{"icon":"Maximize","label":"Living Area","value":"410 m²"},{"icon":"Bed","label":"Bedrooms","value":"4 + 1"},{"icon":"Trees","label":"Terrace","value":"95 m² Outdoor"}]}]}
        textAnimation="slide-up"
      /></div>
      <div data-webild-section="ContactSplitForm"><ContactSplitForm
        tag="PRIVATE VIEWING"
        title="Schedule a Private Presentation"
        description="Connect with our ultra-luxury advisory team for exclusive floor plans, pricing details, and private residence viewings in Istanbul."
        inputs={[{"name":"fullName","type":"text","placeholder":"Full Name","required":true},{"name":"email","type":"email","placeholder":"Email Address","required":true},{"name":"phone","type":"tel","placeholder":"Phone Number","required":true}]}
        textarea={{"name":"message","placeholder":"Specify preferred residence size, penthouses, or investment requirements...","rows":4,"required":false}}
        buttonText="Request Dossier"
        imageSrc="https://img.freepik.com/premium-photo/modern-luxury-high-rise-residential-building-sunset-view_53876-146032.jpg"
        textAnimation="slide-up"
      /></div>
    </>
  );
}
