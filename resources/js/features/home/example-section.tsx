'use client';

import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { Section } from '@/components/global/section';

const ExampleSection = () => {
    return (
        <Section id={'example'}>
            <MaxWidthWrapper>
                <p className="text-center text-2xl font-bold text-red-500 dark:text-gray-200">Ini ExampleSection</p>
            </MaxWidthWrapper>
        </Section>
    );
};

export { ExampleSection };
