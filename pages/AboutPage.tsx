import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-bg-main text-text-main font-display overflow-x-hidden pt-[72px]">
            {/* 1. Simplified Hero */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-hero-gradient">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="hero-title-glow text-5xl md:text-7xl font-bold tracking-[-0.02em] leading-[1.1] text-text-main mb-6">
                        Architecting <span className="text-highlight-blue">Growth.</span>
                    </h1>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed font-light">
                        We partner with visionary organizations to build automated, data-driven revenue engines that scale without friction.
                    </p>
                </div>
            </section>

            {/* 2. Operating Principles (Clean Layout) */}
            <section className="py-24 border-b border-border-main bg-bg-main">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-text-main">Operating Principles</h2>
                        <div className="w-12 h-1 bg-primary-blue mt-6"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
                        {[
                            {
                                title: "Clarity Over Complexity",
                                icon: "filter_alt",
                                desc: "We strip away jargon and convoluted processes to reveal the direct path to revenue."
                            },
                            {
                                title: "Partnership Over Vendoring",
                                icon: "handshake",
                                desc: "We act as embedded growth architects, aligning our incentives directly with your long-term success."
                            },
                            {
                                title: "Outcomes Over Output",
                                icon: "emoji_events",
                                desc: "We optimize for measurable revenue impact, not hours billed or deliverables shipped."
                            },
                            {
                                title: "Systems Before Scale",
                                icon: "architecture",
                                desc: "We engineer robust infrastructure first, ensuring your growth doesn't break your operations."
                            }
                        ].map((op, i) => (
                            <div key={i} className="flex gap-6 items-start group">
                                <div className="shrink-0 text-primary-blue mt-1">
                                    <span className="material-symbols-outlined text-4xl group-hover:text-highlight-blue transition-colors">{op.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-text-main mb-3">{op.title}</h3>
                                    <p className="text-lg text-text-muted leading-relaxed">{op.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Philosophy Section */}
            <section className="py-32 bg-[#0E1320] relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-main to-transparent opacity-50"></div>
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-sm font-bold text-primary-blue uppercase tracking-widest mb-8">How AMICS Thinks About Growth</h2>
                    <p className="text-2xl md:text-3xl font-light leading-relaxed text-text-main">
                        "Growth is not a series of hacks. It is a disciplined engineering problem. We believe that sustainable revenue comes from the seamless integration of creative storytelling, rigorous data science, and automated operational infrastructure. When these three layers align, scale becomes inevitable."
                    </p>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border-main to-transparent opacity-50"></div>
            </section>

            {/* 4. The AMICS Difference (Refined) */}
            <section className="py-24 bg-bg-main">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-text-main mb-4">The AMICS Difference</h2>
                        <p className="text-text-muted max-w-2xl text-lg">Why leading organizations trust us with their growth infrastructure.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "visibility",
                                title: "Radical Transparency",
                                text: "We provide executive-level dashboards that reveal the truth about your performance in real-time. No black boxes."
                            },
                            {
                                icon: "neurology",
                                title: "AI-Powered Leverage",
                                text: "We deploy custom agents and operational workflows that automate the mundane, allowing strategy to take center stage."
                            },
                            {
                                icon: "hub",
                                title: "Aligned Growth Systems",
                                text: "We align marketing, operations, and decision-making into a single, coherent growth system that scales with your business."
                            }
                        ].map((d, i) => (
                            <div key={i} className="amics-card p-10 flex flex-col h-full hover:border-primary-blue/30 transition-all duration-300">
                                <div className="size-14 rounded-xl bg-[#1F2937] flex items-center justify-center text-primary-blue mb-8">
                                    <span className="material-symbols-outlined text-3xl">{d.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-main mb-4">{d.title}</h3>
                                <p className="text-text-muted leading-relaxed">{d.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Minimal Closing CTA */}
            <section className="py-24 border-t border-border-main bg-bg-main">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-text-main mb-8">Ready to engineer your next phase?</h2>
                    <Link to="/contact" className="inline-flex items-center justify-center h-14 px-10 rounded-full amics-btn-primary font-bold text-base shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform duration-200">
                        Start the Conversation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;