'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResponsiveCakeConstructor from '@/components/ResponsiveCakeConstructor';

export default function ConstructorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ResponsiveCakeConstructor />
      <Footer />
    </div>
  );
}