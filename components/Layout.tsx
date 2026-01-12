import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

const NavLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    // Active: #E5E7EB, Inactive: #9CA3AF, Hover: #FFFFFF
    const baseClass = "text-sm font-medium transition-colors";
    const activeClass = "text-[#E5E7EB]";
    const inactiveClass = "text-[#9CA3AF] hover:text-[#FFFFFF]";

    return (
        <Link to={to} className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}>
            {label}
        </Link>
    );
};

const AmicsLogo = ({ className = "" }: { className?: string }) => (
    <img
        src="https://lh3.googleusercontent.com/d/1Wa6LlbSgc_NBnSYOntG-08WrypB8hO1O"
        alt="AMICS Logo"
        className={className}
    />
);

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="bg-bg-main text-text-main font-display min-h-screen flex flex-col">
            <SmartHeader />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

const SmartHeader = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 glass-nav h-[72px]">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-full">
                <header className="flex h-full items-center justify-between whitespace-nowrap">
                    <Link to="/" className="flex items-center gap-3 group text-white h-full">
                        <AmicsLogo className="h-[60px] w-auto" />
                    </Link>
                    <div className="flex flex-1 justify-end gap-8 items-center">
                        <div className="hidden lg:flex items-center gap-9">
                            <NavLink to="/" label="Home" />
                            <NavLink to="/solutions" label="Solutions" />
                            <NavLink to="/systems" label="Systems" />

                            <NavLink to="/about" label="About" />
                            <NavLink to="/contact" label="Contact" />
                        </div>

                    </div>
                </header>
            </div>
        </div>
    );
};

const Footer = () => (
    <footer className="border-t border-border-main bg-bg-main py-12 px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-text-muted hover:text-white transition-colors">
                <AmicsLogo className="h-[60px] w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-text-muted text-sm">© 2024 AMICS Intelligent Growth Solutions. All rights reserved.</p>
            <div className="flex gap-6">
                <Link to="/terms" className="text-text-muted hover:text-white transition-colors">Terms</Link>
                <Link to="/services" className="text-text-muted hover:text-white transition-colors">Services</Link>
                <Link to="/security" className="text-text-muted hover:text-white transition-colors">Security</Link>
            </div>
        </div>
    </footer>
);