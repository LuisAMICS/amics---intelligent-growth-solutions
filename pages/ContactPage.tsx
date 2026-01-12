import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-bg-main text-text-main overflow-x-hidden min-h-screen flex flex-col font-display pt-[72px]">
            <main className="flex-1 relative w-full flex justify-center py-12 lg:py-20 bg-hero-gradient">
                <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center">

                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="hero-title-glow text-4xl md:text-5xl font-bold tracking-tight text-text-main mb-6">
                            Talk Directly with <br /><span className="text-highlight-blue">Daneury Silverio</span>
                        </h1>
                        <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
                            Schedule a strategic conversation to assess your growth challenges, identify opportunities, and determine whether AMICS is the right partner for your business.
                        </p>
                    </div>

                    {/* Profile Card */}
                    <div className="flex flex-col items-center gap-6 mb-10 w-full justify-center">
                        <div className="relative flex justify-center items-center">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-primary-blue blur-2xl opacity-20 rounded-full scale-110"></div>

                            {/* Image with Direct Styling */}
                            <img
                                src="https://lh3.googleusercontent.com/d/1L-NODwsqagMCGITJZaI_lghha4JcFicP"
                                referrerPolicy="no-referrer"
                                alt="Daneury Silverio"
                                className="relative size-40 rounded-full border-2 border-primary-blue shadow-2xl ring-4 ring-primary-blue/10 object-cover object-[50%_35%] p-2 bg-[#E1E1DF]"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-text-main text-2xl mb-1">Daneury Silverio</h3>
                            <p className="text-primary-blue text-sm font-bold uppercase tracking-wide mb-4">CEO & Founder — AMICS Consulting Group</p>

                            {/* Social Icons */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex items-center justify-center gap-4">
                                    <a
                                        href="https://www.linkedin.com/in/dannysilverio/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-[#1F2937] text-text-muted hover:text-[#0077B5] hover:bg-[#0077B5]/10 transition-all group"
                                        title="LinkedIn"
                                    >
                                        <svg className="size-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/formerlyknownashashtag/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-[#1F2937] text-text-muted hover:text-[#E4405F] hover:bg-[#E4405F]/10 transition-all group"
                                        title="Instagram"
                                    >
                                        <svg className="size-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </div>
                                <a
                                    href="mailto:danny@amicsconsultinggroup.com"
                                    className="text-text-muted hover:text-primary-blue transition-colors text-sm font-medium flex items-center gap-2 mt-2"
                                >
                                    <span className="material-symbols-outlined text-lg">mail</span>
                                    danny@amicsconsultinggroup.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <p className="text-text-muted text-lg leading-relaxed mb-10 max-w-2xl font-light">
                        Daneury leads strategy and execution across all AMICS client engagements. This call is designed to evaluate fit, define priorities, and outline potential system and growth opportunities — not to pitch generic services.
                    </p>

                    {/* CTA Section */}
                    <div className="flex flex-col items-center gap-4 mb-16 w-full">
                        <a
                            href="https://calendly.com/danny-amicsconsultinggroup/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full md:w-auto px-12 h-16 bg-primary-blue hover:bg-primary-hover text-white rounded-full font-bold text-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02]"
                        >
                            <span className="material-symbols-outlined">calendar_add_on</span>
                            Schedule a Strategy Call
                        </a>
                        <p className="text-xs text-text-muted font-bold uppercase tracking-wide flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            30-minute strategic conversation · No obligation
                        </p>
                    </div>

                    {/* Expectation Block */}
                    <div className="w-full bg-[#111827] border border-border-main rounded-2xl p-8 text-left shadow-2xl">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 pb-4 border-b border-border-main text-center md:text-left">What to expect</h4>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <div className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg">check_circle</span>
                                    What this call is for
                                </div>
                                <ul className="space-y-3">
                                    <li className="text-sm text-text-muted flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-border-main mt-1.5 shrink-0"></span>
                                        Evaluating your current growth and systems setup
                                    </li>
                                    <li className="text-sm text-text-muted flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-border-main mt-1.5 shrink-0"></span>
                                        Identifying leverage points and inefficiencies
                                    </li>
                                    <li className="text-sm text-text-muted flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-border-main mt-1.5 shrink-0"></span>
                                        Determining long-term fit
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="text-rose-400 font-bold mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg">cancel</span>
                                    What this call is not
                                </div>
                                <ul className="space-y-3">
                                    <li className="text-sm text-text-muted flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-border-main mt-1.5 shrink-0"></span>
                                        A sales pitch
                                    </li>
                                    <li className="text-sm text-text-muted flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-border-main mt-1.5 shrink-0"></span>
                                        A generic demo
                                    </li>
                                    <li className="text-sm text-text-muted flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-border-main mt-1.5 shrink-0"></span>
                                        A support request
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default ContactPage;