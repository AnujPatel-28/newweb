// app/page.tsx
import Hero from "@/components/sections/Hero";
// import PoweredBy from "@/components/sections/PoweredBy"; // Hidden - tech stack not client-facing
import SuperGlowUp from "@/components/sections/SuperGlowUp";
import InsightsSection from "@/components/sections/Insights";
import IndustriesSection from "@/components/sections/Industries"; // Using the singular/main one
import TestimonialsSection from "@/components/sections/Testimonials";
import HowItWorks from "@/components/sections/HowItWorks";
import CTASection from "@/components/sections/CTA";
import ContactSection from "@/components/sections/Contact";
import MergedAboutStats from "@/components/sections/MergedAboutStats";

import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-white">



      {/* 1. Hero: Impact & Value Prop */}
      <Hero />

      {/* 2. Social Proof: Trusted Tech */}
      {/* <PoweredBy /> */} {/* Hidden - can be re-enabled if needed */}

      {/* 3. Problem/Solution: The "Glow Up" */}
      <SuperGlowUp />


      {/* 4. Statistics & Deeper Dive: About Us */}
      <AboutSection />
      <MergedAboutStats />


      {/* 6. Insights/Features */}
      <InsightsSection />

      {/* 7. Process: How It Works */}
      <HowItWorks />

      {/* 8. Use Cases: Industries */}
      <IndustriesSection />

      {/* 9. Social Proof: Testimonials */}
      <TestimonialsSection />

      {/* 10. Call to Action */}
      <CTASection />

      {/* 11. Contact Form */}
      <ContactSection />

      {/* 12. Footer */}
      <Footer />

    </main>
  );
}