import React from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const systems = [
    {
        title: "AI Automation",
        icon: "smart_toy",
        description: "Decision engines and predictive modeling for autonomous task execution. We build agents that act on data triggers without human intervention.",
        tags: ["Predictive Models", "Autonomous Agents", "Decision Engines"]
    },
    {
        title: "Workflow & Operations",
        icon: "account_tree",
        description: "API bridging and total manual task elimination protocols. Connecting disparate software ecosystems into a unified operational pipeline.",
        tags: ["n8n / Make", "API Bridging", "Error Handling"]
    },
    {
        title: "AI Concierge & CX",
        icon: "support_agent",
        description: "24/7 intelligent customer interaction and support triage. Context-aware bots that handle complex inquiries and qualify leads in real-time.",
        tags: ["NLP", "Sentiment Analysis", "Real-time Triage"]
    },
    {
        title: "CRM & System Integrations",
        icon: "hub",
        description: "Unified data architecture connecting marketing to sales. Ensuring data integrity across HubSpot, Salesforce, and custom databases.",
        tags: ["Data Warehousing", "Bi-directional Sync", "Schema Design"]
    }
];

const blueprintSteps = [
    { step: "01", title: "Audit & Map", icon: "architecture", desc: "Deep analysis of your current stack and operational workflows." },
    { step: "02", title: "Engineer", icon: "code", desc: "Development of custom middleware and API bridges." },
    { step: "03", title: "Deploy", icon: "rocket_launch", desc: "Rigorous stress testing and live system integration." },
    { step: "04", title: "Optimize", icon: "auto_graph", desc: "Continuous optimization and system refinement as your business evolves." }
];
const impactData = [
    { month: 'M1', value: 30 },
    { month: 'M2', value: 45 },
    { month: 'M3', value: 55 },
    { month: 'M4', value: 90 },
    { month: 'M5', value: 160 },
    { month: 'M6', value: 240 },
    { month: 'M7', value: 340 },
];

const SystemsPage: React.FC = () => {
    return (
        <div className="bg-bg-main min-h-screen font-display overflow-x-hidden pt-[72px]">
            <div className="relative w-full min-h-screen bg-hero-gradient">
                {/* Hero */}
                <header className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-8 z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-main bg-bg-card w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-blue"></span>
                            </span>
                            <span className="text-xs font-medium text-primary-blue uppercase tracking-wider">System Operational</span>
                        </div>
                        <h1 className="hero-title-glow text-5xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] text-text-main">
                            Engineered <span className="text-highlight-blue">Intelligence.</span> <br />
                            Automated Scale.
                        </h1>
                        <p className="text-lg text-text-muted max-w-xl font-light leading-relaxed">
                            Deploying systematic AI architecture to eliminate operational latency. We convert chaotic workflows into streamlined, engineered protocols.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <Link to="/contact" className="h-14 px-8 rounded-full amics-btn-primary font-bold text-base shadow-lg shadow-blue-500/20 flex items-center gap-2">
                                <span className="material-symbols-outlined">settings_suggest</span>
                                Initialize System Analysis
                            </Link>
                            <Link to="/about" className="h-14 px-8 rounded-full amics-btn-secondary font-medium flex items-center gap-2">
                                View Architecture
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border-main mt-4">
                            <div>
                                <div className="text-2xl font-bold text-text-main">99.9%</div>
                                <div className="text-xs text-text-muted uppercase tracking-wider">Reliability</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-text-main">&lt;20ms</div>
                                <div className="text-xs text-text-muted uppercase tracking-wider">Latency</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-text-main">24/7</div>
                                <div className="text-xs text-text-muted uppercase tracking-wider">Automated</div>
                            </div>
                        </div>
                    </div>
                    {/* Visual */}
                    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
                        <div className="amics-card p-2 w-full aspect-square md:aspect-video lg:aspect-square overflow-hidden border-border-main">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                                className="w-full h-full object-cover rounded-xl contrast-[0.8] brightness-[0.7] grayscale-[0.3]"
                            >
                                <source src="/videos/system-background.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </header>

                {/* Modules */}
                <section className="max-w-7xl mx-auto px-6 py-24 border-t border-border-main">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                        <div>
                            <h2 className="text-primary-blue text-sm font-medium tracking-widest uppercase mb-2">System Modules</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-text-main">Deployable Architectures</h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {systems.map((sys, idx) => (
                            <div key={idx} className="amics-card p-8 group flex flex-col h-full hover:border-primary-blue/30 transition-colors">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="size-12 rounded-lg bg-[#1F2937] flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-2xl">{sys.icon}</span>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-text-main mb-3">{sys.title}</h4>
                                <p className="text-text-muted text-sm leading-relaxed mb-6">{sys.description}</p>
                                <div className="mt-auto flex flex-wrap gap-2">
                                    {sys.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium text-primary-blue bg-primary-blue/10 border border-primary-blue/20 px-3 py-1 rounded-full uppercase tracking-wide">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* The AMICS Blueprint */}
                <section className="max-w-7xl mx-auto px-6 pb-24 border-b border-border-main">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-text-main mb-4">The AMICS Blueprint</h2>
                        <p className="text-text-muted max-w-2xl">A systematic approach to infrastructure engineering. We follow a strict protocol to ensure zero downtime and maximum efficiency.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {blueprintSteps.map((item, idx) => (
                            <div key={idx} className="amics-card p-6 relative group hover:border-primary-blue/50 transition-colors">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-4xl font-black text-[#1F2937] group-hover:text-primary-blue/20 transition-colors select-none">{item.step}</span>
                                    <div className="size-10 rounded-full bg-[#1F2937] flex items-center justify-center text-primary-blue">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-text-main mb-2">{item.title}</h3>
                                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quantifiable Business Impact */}
                <section className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Chart Card */}
                        <div className="amics-card p-8 bg-[#111827] border border-border-main relative overflow-hidden">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h4 className="text-text-main font-bold text-lg">Efficiency Gain</h4>
                                    <p className="text-sm text-text-muted">Post-Implementation Performance</p>
                                </div>
                                <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded text-sm font-bold">
                                    <span className="material-symbols-outlined text-sm">trending_up</span>
                                    340%
                                </div>
                            </div>
                            <div className="h-[250px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={impactData}>
                                        <defs>
                                            <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" vertical={false} />
                                        <XAxis dataKey="month" stroke="#4B5563" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#4B5563" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#fff' }}
                                            itemStyle={{ color: '#fff' }}
                                        />
                                        <Area type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorEfficiency)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border-main/50">
                                <div>
                                    <div className="text-2xl font-bold text-text-main">40hrs+</div>
                                    <div className="text-xs text-text-muted uppercase tracking-wide">Saved / Week</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-text-main">&lt;2min</div>
                                    <div className="text-xs text-text-muted uppercase tracking-wide">Response Time</div>
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div>
                            <h2 className="text-3xl font-bold text-text-main mb-6 leading-tight">
                                Quantifiable Business Impact through <span className="text-highlight-blue">Systematic Execution</span>
                            </h2>
                            <p className="text-text-muted text-lg leading-relaxed mb-8">
                                We measure success in decimals and dollars. Our systems are engineered to produce measurable improvements in operational velocity and bottom-line revenue.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1 size-8 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue shrink-0">
                                        <span className="material-symbols-outlined text-lg">bolt</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Reduced Operational Overhead</h4>
                                        <p className="text-sm text-text-muted">Eliminate 80% of manual data entry and cross-platform synthesis tasks.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 size-8 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue shrink-0">
                                        <span className="material-symbols-outlined text-lg">timer</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Instant Lead Response</h4>
                                        <p className="text-sm text-text-muted">Engage prospects within seconds of submission, increasing conversion rates by up to 300%.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 size-8 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue shrink-0">
                                        <span className="material-symbols-outlined text-lg">verified</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Absolute Data Accuracy</h4>
                                        <p className="text-sm text-text-muted">Remove human error from your reporting pipeline with automated ETL processes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SystemsPage;