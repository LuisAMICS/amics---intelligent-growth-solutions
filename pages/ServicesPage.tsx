import React from 'react';

const ServicesPage: React.FC = () => {
    return (
        <div className="bg-bg-main min-h-screen font-display overflow-x-hidden pt-[72px]">
            <div className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-8">Our Services</h1>
                <div className="prose prose-invert max-w-none text-text-muted">
                    <p className="mb-8 text-xl leading-relaxed">
                        AMICS provides comprehensive digital transformation and automation services designed to accelerate your business growth.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main mt-10 mb-4">AI Automation & Strategy</h2>
                    <p className="mb-4">
                        We deploy intelligent agents and autonomous workflows that handle complex decision-making processes, reducing operational overhead and increasing efficiency.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main mt-10 mb-4">System Integration</h2>
                    <p className="mb-4">
                        Our team bridges the gap between your disparate software tools. We create unified data ecosystems where information flows seamlessly between your CRM, marketing platforms, and internal databases.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main mt-10 mb-4">Data Analytics & Insights</h2>
                    <p className="mb-4">
                        Turn raw data into actionable intelligence. We build custom dashboards and reporting structures that give you real-time visibility into your key performance indicators.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main mt-10 mb-4">Technical Consulting</h2>
                    <p className="mb-4">
                        From architecture design to stack selection, our experts guide you through the technical landscape to ensure your infrastructure is scalable, secure, and future-proof.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
