'use client';

import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { Section } from '@/components/global/section';

const ExampleSection = () => {
    return (
        <Section id={'example'}>
            <MaxWidthWrapper>Ini ExampleSection</MaxWidthWrapper>
        </Section>
    );
};

export { ExampleSection };
