'use client';

import Header from '@/components/Header';
import HomePage from '@/components/HomePage';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}