import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: ['About Page', 'Mariano', 'información', '...']
}

export default function PricingPage () {
    return(
        <>
        <span className="tex-7xl">About PricingPage</span>
        </>
    )
}