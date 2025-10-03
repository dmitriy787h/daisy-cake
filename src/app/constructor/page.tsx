import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CakeConstructor from '@/components/CakeConstructor';

export default function ConstructorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CakeConstructor />
      <Footer />
    </div>
  );
}
