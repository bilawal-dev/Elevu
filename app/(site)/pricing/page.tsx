import { Metadata } from "next";
import CTA from "@/components/Common/CTA";
import Pricing from "@/components/Pricing/Pricing";
import GradientIntroSection from "@/components/Common/GradientIntroSection";

export const metadata: Metadata = {
    title: "PeerPulse Pricing - 360-degree Feedback Software Plans",
    description: "See PeerPulse's straightforward pricing for automated peer reviews, performance analytics, and Slack reminders. Start free, upgrade anytime.",
};

export default function PricingPage() {
    return (
        <>
            <GradientIntroSection
                title="Simple, Transparent Pricing"
                subtitle="Choose the plan that fits your team's needs. Whether you're just getting started or scaling performance reviews across the org — PeerPulse has you covered."
                fromColor="#2842eb"
                toColor="#73b2ff"
            />
            <Pricing />
            <CTA />
        </>
    );
}
