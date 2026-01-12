import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
     return (
        <div className="relative flex min-h-screen w-full flex-col bg-bg-main text-text-main font-display overflow-x-hidden pt-[72px]">
            {/* Subtle Gradient */}
            <div className="absolute inset-0 bg-hero-gradient pointer-events-none -z-10"></div>
            
            <main className="flex-1">
                <section className="relative pt-20 pb-20 overflow-hidden">
                    {/* Futuristic Glow Effects */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/10 rounded-full blur-[120px] pointer-events-none -z-0 mix-blend-screen opacity-60"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-0 mix-blend-screen opacity-50"></div>

                    <div className="mx-auto max-w-[1280px] px-6 lg:px-10 flex flex-col items-center text-center relative z-10">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border-main bg-bg-card px-4 py-1.5 mb-8 backdrop-blur-sm">
                            <span className="text-xs font-semibold text-primary-blue uppercase tracking-wide">Accepting New Partners for Q4</span>
                        </div>
                        <h1 className="hero-title-glow max-w-4xl text-5xl font-black leading-[1.1] tracking-[-0.02em] text-text-main sm:text-6xl md:text-7xl mb-6 relative">
                            Make Your Growth <br/>
                            <span className="text-highlight-blue">Inevitable</span>
                        </h1>
                        <p className="max-w-2xl text-lg text-text-muted mb-10 leading-relaxed">
                            We combine performance marketing, AI automation, and intelligent systems to turn complexity into predictable growth.
                        </p>
                        <div className="flex flex-col items-center gap-6 mb-20">
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <Link to="/contact" className="flex h-12 min-w-[160px] items-center justify-center rounded-full amics-btn-primary px-8 text-base font-bold text-white shadow-lg shadow-blue-500/20">
                                    Book a Strategy Call
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative py-24 border-t border-border-main bg-bg-main">
                    <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
                        <div className="mb-12 text-center md:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-text-main md:text-4xl">The Mixed Agency Advantage</h2>
                            <p className="mt-4 max-w-2xl text-text-muted">Most agencies focus on one piece. We architect the entire picture.</p>
                        </div>

                        {/* AMICS Explanation Section */}
                        <div className="mb-16 rounded-2xl border border-border-main bg-bg-card/40 p-8 backdrop-blur-sm md:p-10">
                            <div className="max-w-4xl">
                                <h2 className="mb-4 text-2xl font-bold text-text-main">We don’t just run ads. We build growth systems.</h2>
                                <p className="mb-8 text-lg leading-relaxed text-text-muted">
                                    At AMICS Consulting Group, we make your growth inevitable by working across every layer of your business — not only performance marketing, but also the internal infrastructure powered by AI. Our systems help you handle the scale and demand that great marketing creates, backed by 15+ years of real-world growth experience.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 rounded-full border border-primary-blue/20 bg-primary-blue/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-primary-blue">
                                        <span className="material-symbols-outlined text-lg">target</span>
                                        Acquire
                                    </div>
                                    <div className="flex items-center gap-2 rounded-full border border-primary-blue/20 bg-primary-blue/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-primary-blue">
                                        <span className="material-symbols-outlined text-lg">sync</span>
                                        Convert
                                    </div>
                                    <div className="flex items-center gap-2 rounded-full border border-primary-blue/20 bg-primary-blue/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-primary-blue">
                                        <span className="material-symbols-outlined text-lg">rocket_launch</span>
                                        Scale
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {/* Feature 1 */}
                            <div className="amics-card group relative overflow-hidden p-8 flex flex-col">
                                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1F2937] text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl">trending_up</span>
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-text-main">Performance Marketing</h3>
                                <p className="text-text-muted leading-relaxed mb-6">Maximizing ROAS through precision targeting and high-value lead acquisition.</p>
                            </div>
                            {/* Feature 2 */}
                            <div className="amics-card group relative overflow-hidden p-8 flex flex-col">
                                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1F2937] text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl">smart_toy</span>
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-text-main">AI Automation</h3>
                                <p className="text-text-muted leading-relaxed mb-6">Streamlining operations with intelligent, custom-built automation solutions.</p>
                            </div>
                            {/* Feature 3 */}
                            <div className="amics-card group relative overflow-hidden p-8 flex flex-col">
                                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1F2937] text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl">psychology</span>
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-text-main">AI Strategy & Consulting</h3>
                                <p className="text-text-muted leading-relaxed mb-6">Strategic guidance to identify opportunities, optimize workflows, and implement AI solutions that drive real business impact.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
     );
};

export default HomePage;