import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Coffee, Star, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Navbar />
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-amber-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
              Why Our Neighbors Love Us
            </h2>
            <p className="text-amber-700 text-lg">More than just coffee - we're your daily comfort</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center shadow-lg border border-amber-200">
              <Coffee className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Fresh Daily</h3>
              <p className="text-amber-700">Beans roasted locally, pastries baked fresh every morning</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center shadow-lg border border-amber-200">
              <Clock className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Cozy Atmosphere</h3>
              <p className="text-amber-700">Perfect spot for work, study, or catching up with friends</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center shadow-lg border border-amber-200">
              <Star className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Made with Love</h3>
              <p className="text-amber-700">Every drink crafted by friendly baristas who care</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
