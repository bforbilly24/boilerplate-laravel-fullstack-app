import { Footer } from '@/components/footer/footer';
import ConsoleLogger from '@/components/miscellaneous/console-logger';
import { Navbar } from '@/components/navigation/navbar';
import { Head } from '@inertiajs/react';
import React, { ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, keywords }) => {
    const defaultDescription = 'This is the official website of Your Project';
    const defaultKeywords = 'home, home-page';

    return (
        <>
            <Head>
                <title>{title ? `${title} | YOUR PROJECT` : 'Default Title Your Project'}</title>

                <meta name="description" content={description || defaultDescription} />
                <meta name="keywords" content={keywords || defaultKeywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="Your Project Title" />

                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />

                <link rel="manifest" href="/site.webmanifest" />

                <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />

                <meta property="og:image" content="/logo.svg" />
            </Head>
            <Navbar />
            <main className="scrollbar-hide size-full overflow-x-hidden">{children}</main>
            <Footer />
            <ConsoleLogger />
        </>
    );
};

export { MainLayout };
