import React from 'react';

const SecurityPage: React.FC = () => {
    return (
        <div className="bg-bg-main min-h-screen font-display overflow-x-hidden pt-[72px]">
            <div className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-8">Security Policy</h1>
                <div className="prose prose-invert max-w-none text-text-muted">
                    <p className="mb-6">
                        At AMICS, protecting your data and ensuring the security of your infrastructure is our top priority. We implement industry-leading protocols to safeguard your information.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main mt-8 mb-4">Data Encryption</h2>
                    <p className="mb-4">
                        All data transmitted between our clients and our systems is encrypted using robust TLS/SSL protocols. We ensure that your sensitive information remains private and secure during transit and at rest.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main mt-8 mb-4">Access Control</h2>
                    <p className="mb-4">
                        We adhere to the principle of least privilege. Access to sensitive data and critical systems is strictly limited to authorized personnel who require it to perform their job functions. Multi-factor authentication is enforced across all our internal systems.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main mt-8 mb-4">Regular Audits</h2>
                    <p className="mb-4">
                        Our security infrastructure undergoes regular vulnerability assessments and audits to identify and address potential risks. We continuously monitor our systems for suspicious activity and adhere to strict incident response protocols.
                    </p>

                    <h2 className="text-2xl font-bold text-text-main mt-8 mb-4">Compliance</h2>
                    <p className="mb-4">
                        We are committed to complying with all applicable data protection regulations. We work closely with our clients to ensure that our solutions meet their specific compliance requirements/standards.
                    </p>

                    <p className="mt-8 text-sm opacity-60">
                        If you discover a potential security vulnerability, please report it immediately to security@amicsconsultinggroup.com.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SecurityPage;
