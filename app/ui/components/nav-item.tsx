'use client';
import React from 'react';

type NavItemProps = {
    label: string;
    targetId: string;
    onClick: (id: string) => void;
    variant?: 'desktop' | 'mobile';
};

const NavItem = ({ label, targetId, onClick, variant = 'desktop' }: NavItemProps) => {
    const baseStyle =
        'font-bold text-[#1B1B1B] hover:text-[#0f4570] hover:scale-115 transition-transform duration-300 hover:text-opacity-100 text-opacity-70 ';

    const desktopClasses = 'md:text-lg text-md';
    const mobileClasses = 'text-center py-4 mx-auto';

    const className =
        variant === 'desktop' ? `${baseStyle} ${desktopClasses}` : `${baseStyle} ${mobileClasses}`;

    return (
        <button onClick={() => onClick(targetId)} className={className}>
            {label}
        </button>
    );
};

export default NavItem;