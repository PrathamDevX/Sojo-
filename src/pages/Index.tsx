import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Coffee, Star, Clock } from "lucide-react";

const Index = () => {
  return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 dark:from-[#0a0a0a] dark:to-[#0a0a0a] transition-colors duration-500">
      <Navbar />
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-amber-100 dark:from-[#0a0a0a] dark:to-[#0a0a0a] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 dark:text-gray-200 mb-4 transition-colors duration-300">
              Why Our Neighbors Love Us
            </h2>
            <p className="text-amber-700 dark:text-gray-400 text-lg transition-colors duration-300">More than just coffee - we're your daily comfort</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl text-center shadow-lg border border-amber-200 dark:border-orange-600 transition-colors duration-300">
              <Coffee className="h-12 w-12 text-amber-600 dark:text-orange-500 mx-auto mb-4 transition-colors duration-300" />
              <h3 className="text-xl font-semibold text-amber-900 dark:text-gray-200 mb-2 transition-colors duration-300">Fresh Daily</h3>
              <p className="text-amber-700 dark:text-gray-400 transition-colors duration-300">Beans roasted locally, pastries baked fresh every morning</p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl text-center shadow-lg border border-amber-200 dark:border-orange-600 transition-colors duration-300">
              <Clock className="h-12 w-12 text-amber-600 dark:text-orange-500 mx-auto mb-4 transition-colors duration-300" />
              <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-2 transition-colors duration-300">Cozy Atmosphere</h3>
              <p className="text-amber-700 dark:text-amber-300 transition-colors duration-300">Perfect spot for work, study, or catching up with friends</p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl text-center shadow-lg border border-amber-200 dark:border-orange-600 transition-colors duration-300">
              <Star className="h-12 w-12 text-amber-600 dark:text-orange-500 mx-auto mb-4 transition-colors duration-300" />
              <h3 className="text-xl font-semibold text-amber-900 dark:text-gray-200 mb-2 transition-colors duration-300">Made with Love</h3>
              <p className="text-amber-700 dark:text-gray-400 transition-colors duration-300">Every drink crafted by friendly baristas who care</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
