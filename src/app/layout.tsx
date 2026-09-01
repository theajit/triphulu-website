import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.triphulu.com'),
  title: { default:'TripHulu — Tour operator software from enquiry to execution', template:'%s | TripHulu' },
  description:'Sales, booking, payment and operations software built for tour operators.',
  openGraph:{type:'website',siteName:'TripHulu',title:'TripHulu — Run your tour business from enquiry to execution',description:'Connect sales, quotations, bookings, payments and ground operations in one workflow.'},
  twitter:{card:'summary',title:'TripHulu',description:'Your tour business, from lead to journey.'},
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip" href="#content">Skip to content</a><Nav/><main id="content">{children}</main><Footer/></body></html>}
