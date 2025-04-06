'use client';

import { ExampleSection } from '@/features/home/example-section';
import { MainLayout } from '@/layouts/main-layout';
import React from 'react';

const Home: React.FC = () => {
    return (
        <MainLayout title="Home">
            <ExampleSection />
        </MainLayout>
    );
};

export default Home;
