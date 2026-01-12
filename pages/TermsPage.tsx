import React from 'react';

const TermsPage: React.FC = () => {
    return (
        <div className="bg-bg-main min-h-screen font-display overflow-x-hidden pt-[72px]">
            <div className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-8">Terms of Service</h1>
                <div className="prose prose-invert max-w-none text-text-muted">
                    <p className="mb-4">
                        Effective Date: January 1, 2025
                    </p>
                    <p className="mb-6">
                        Welcome to AMICS Intelligent Growth Solutions. By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main mt-8 mb-4">1. Use of Services</h2>
                    <p className="mb-4">
                        You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of the services complies with all applicable local, state, national, and international laws.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main mt-8 mb-4">2. Intellectual Property</h2>
                    <p className="mb-4">
                        All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of AMICS Consulting Group and are protected by international copyright, trademark, and other intellectual property laws.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main mt-8 mb-4">3. Limitation of Liability</h2>
                    <p className="mb-4">
                        In no event shall AMICS Consulting Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main mt-8 mb-4">4. Changes to Terms</h2>
                    <p className="mb-4">
                        We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                    </p>

                    <p className="mt-8 text-sm opacity-60">
                        If you have any questions about these Terms, please contact us at danny@amicsconsultinggroup.com.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
