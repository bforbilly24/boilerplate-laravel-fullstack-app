'use client';

import { cn } from '@/lib/cn';
import React from 'react';

interface Props {
    className?: string;
    children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Props) => {
    return <div className={cn('mx-auto h-full w-full max-w-full px-4 md:max-w-screen-xl md:px-12 lg:px-20', className)}>{children}</div>;
};

export default MaxWidthWrapper;
