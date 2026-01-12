import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
    {
        id: 'strategy',
        icon: "strategy",
        title: "Marketing Strategy & Growth",
        tag: "Core",
        desc: "Holistic go-to-market roadmaps that align product, sales, and marketing engines.",
        capabilities: [
            "Go-to-Market Strategy",
            "Brand Positioning & Messaging",
            "Competitive Market Analysis",
            "Customer Journey Mapping",
            "Revenue Operations (RevOps)"
        ]
    },
    {
        id: 'paid-media',
        icon: "ads_click",
        title: "Paid Media Management",
        tag: "Acquisition",
        desc: "High-velocity user acquisition campaigns optimized for ROAS and LTV.",
        capabilities: [
            "Meta (Facebook/Instagram) Ads",
            "Google Ads (Search, YouTube, Shopping)",
            "LinkedIn B2B Advertising",
            "TikTok & Emerging Social",
            "Budget Pacing & Optimization"
        ]
    },
    {
        id: 'programmatic',
        icon: "settings_input_antenna",
        title: "Programmatic Advertising",
        tag: "Scale",
        desc: "Real-time bidding infrastructure to reach audiences across the open web and TV.",
        capabilities: [
            "Connected TV (CTV/OTT)",
            "Digital Out-of-Home (DOOH)",
            "Programmatic Audio & Spotify",
            "Native Advertising",
            "Real-Time Bidding (RTB)"
        ]
    },
    {
        id: 'email',
        icon: "mark_email_read",
        title: "Email & SMS Marketing",
        tag: "Retention",
        desc: "Lifecycle marketing systems that turn one-time buyers into lifetime advocates.",
        capabilities: [
            "Automated Email Flows (Klaviyo/HubSpot)",
            "SMS/MMS Campaigns",
            "List Segmentation & Hygiene",
            "Customer Retention Strategy",
            "Personalization Logic"
        ]
    },
    {
        id: 'ai-auto',
        icon: "smart_toy",
        title: "AI Automation & Systems",
        tag: "Intelligence",
        desc: "Eliminating manual operational drag with custom-built intelligent infrastructure.",
        capabilities: [
            "Custom Workflow Automation (n8n/Make)",
            "AI Concierge & Chatbots",
            "Predictive Lead Scoring",
            "Internal Knowledge Bases (RAG)",
            "Autonomous Agents"
        ]
    },
    {
        id: 'creative',
        icon: "movie_creation",
        title: "Creative & Content Production",
        tag: "Production",
        desc: "Performance-first creative assets designed specifically to convert cold traffic.",
        capabilities: [
            "Direct Response Video Ads",
            "Static Ad Creative Design",
            "Product Placement & Sourcing",
            "Conversion Copywriting",
            "Landing Page Design"
        ]
    },
];


const SolutionsPage: React.FC = () => {
    return (
        <div className="relative flex flex-col pt-[72px] bg-bg-main overflow-hidden font-display">

            {/* Hero Gradient Background */}
            <div className="absolute inset-0 bg-hero-gradient pointer-events-none -z-10"></div>

            {/* Hero */}
            <div className="layout-container flex flex-col items-center relative z-10 px-6 lg:px-40 py-20 lg:py-32">
                <div className="layout-content-container flex flex-col max-w-[960px] text-center gap-6">
                    <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full border border-border-main bg-bg-card w-fit mx-auto backdrop-blur-sm animate-fade-in">
                        <span className="material-symbols-outlined text-primary-blue text-sm">auto_graph</span>
                        <span className="text-xs font-medium text-text-muted uppercase tracking-wider">Business Intelligence & Conversion</span>
                    </div>

                    <h1 className="hero-title-glow text-text-main text-5xl lg:text-7xl font-bold leading-tight tracking-[-0.02em]">
                        Growth & Marketing <br />
                        <span className="text-highlight-blue">Solutions Ecosystem</span>
                    </h1>

                    <p className="text-text-muted text-lg lg:text-xl font-light leading-relaxed max-w-[680px] mx-auto">
                        Scalable architectures designed for the C-Suite. We combine creative excellence with data-driven precision to secure market dominance.
                    </p>

                    <div className="flex gap-4 justify-center mt-6">
                        <Link to="/contact" className="px-8 py-3 amics-btn-primary rounded-full font-bold text-white shadow-lg shadow-blue-500/20">
                            Get Started
                        </Link>
                        <Link to="/systems" className="px-8 py-3 amics-btn-secondary rounded-full font-bold text-text-main">
                            View Systems
                        </Link>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="layout-container flex flex-col items-center relative z-10 px-4 lg:px-10 pb-20">
                <div className="layout-content-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1280px]">
                    {services.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="group amics-card p-6 lg:p-8 flex flex-col gap-6 relative overflow-hidden h-full"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="size-12 rounded-lg bg-[#1F2937] flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-[#1F2937] border border-border-main text-xs font-medium text-text-muted uppercase tracking-wide">{item.tag}</span>
                                </div>
                                <div>
                                    <h3 className="text-text-main text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                                </div>

                                {/* Static Capabilities Section */}
                                <div className="pt-4 border-t border-border-main/50 mt-auto">
                                    <h4 className="text-xs font-bold text-primary-blue uppercase tracking-widest mb-3">Capabilities</h4>
                                    <ul className="space-y-2">
                                        {item.capabilities.map((cap, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                                                <span className="material-symbols-outlined text-base text-primary-blue mt-0.5">check_small</span>
                                                {cap}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Why AMICS Section */}
            <div className="layout-container flex flex-col items-center relative z-10 px-4 lg:px-10 pb-16">
                <div className="layout-content-container w-full max-w-[1280px]">
                    <div className="border-t border-border-main pt-16">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            <div className="lg:col-span-4">
                                <h2 className="text-3xl font-bold text-text-main mb-4">Why AMICS Consulting Group</h2>
                                <p className="text-text-muted leading-relaxed">
                                    We position ourselves not just as a service provider, but as the growth architecture partner for ambitious organizations.
                                </p>
                            </div>
                            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex gap-4">
                                    <div className="mt-1 min-w-[24px] text-primary-blue">
                                        <span className="material-symbols-outlined">layers</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">Full-Stack Growth Systems</h3>
                                        <p className="text-sm text-text-muted">We don't isolate marketing from operations. We build the tech stack that supports the leads we generate.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 min-w-[24px] text-primary-blue">
                                        <span className="material-symbols-outlined">verified_user</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">Senior-Level Attention</h3>
                                        <p className="text-sm text-text-muted">Your account is managed by strategists with 10+ years of experience, not passed down to junior associates.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 min-w-[24px] text-primary-blue">
                                        <span className="material-symbols-outlined">memory</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">AI-First Infrastructure</h3>
                                        <p className="text-sm text-text-muted">We leverage proprietary AI models to execute tasks faster and more accurately than traditional agencies.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 min-w-[24px] text-primary-blue">
                                        <span className="material-symbols-outlined">visibility</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-1">Clear & Actionable Insights</h3>
                                        <p className="text-sm text-text-muted">No black boxes. You understand what’s happening, why it matters, and what to do next.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Footer Section */}
            <div className="layout-container flex justify-center pb-20 px-4">
                <div className="layout-content-container w-full max-w-[1280px]">
                    <div className="amics-card p-8 lg:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary-blue/5 blur-3xl pointer-events-none"></div>
                        <div className="flex flex-col gap-4 relative z-10 max-w-xl text-center md:text-left">
                            <h2 className="text-text-main text-3xl font-bold">Ready to scale your ecosystem?</h2>
                            <p className="text-text-muted">Join the top-performing executives who trust AMICS.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                            <Link to="/contact" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 amics-btn-primary font-bold leading-normal shadow-lg shadow-blue-500/20">
                                <span className="truncate">Schedule Consultation</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionsPage;