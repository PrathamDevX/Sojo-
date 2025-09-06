import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export const HeroSection = () => {
  const { addToCart } = useCart();

  const handleQuickOrder = (itemName: string, price: number) => {
    addToCart({
      id: Date.now(), // Simple ID generation for demo
      name: itemName,
      price: price,
      category: "quick-order"
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Warm Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-32 w-48 h-48 bg-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-200 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <Coffee className="h-10 w-10 text-amber-700" />
                <span className="text-sm font-medium tracking-wide text-amber-700 uppercase">
                  Welcome to
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
                Sojo
                <span className="block text-orange-700">Cafe</span>
              </h1>
              
              <p className="text-lg text-amber-800 leading-relaxed max-w-lg">
                Your neighborhood coffee shop where every cup is brewed with love. 
                Fresh pastries, warm atmosphere, friendly service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menu">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-medium shadow-lg">
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/menu">
                <Button 
                  size="lg"
                  className="bg-amber-200 hover:bg-amber-300 text-amber-900 font-medium border-2 border-amber-800 hover:border-amber-900"
                >
                  View Menu
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Element - Cozy Menu Board */}
          <div className="relative">
            <div className="bg-amber-100 border-4 border-amber-700 p-8 rounded-lg shadow-xl transform rotate-1">
              <div className="space-y-6">
                <div className="text-center border-b-2 border-amber-600 pb-4">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">Today's Specials</h3>
                  <p className="text-amber-700 text-sm font-medium">Freshly made with love ♥</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div 
                    onClick={() => handleQuickOrder("Signature Latte", 4.50)}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-amber-200 shadow-sm cursor-pointer hover:bg-amber-50 transition-colors"
                  >
                    <div>
                      <span className="text-amber-900 font-medium">Signature Latte</span>
                      <p className="text-xs text-amber-600">Rich espresso with steamed milk</p>
                    </div>
                    <span className="text-amber-700 font-bold">$4.50</span>
                  </div>
                  <div 
                    onClick={() => handleQuickOrder("Fresh Croissant", 3.25)}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-amber-200 shadow-sm cursor-pointer hover:bg-amber-50 transition-colors"
                  >
                    <div>
                      <span className="text-amber-900 font-medium">Fresh Croissant</span>
                      <p className="text-xs text-amber-600">Buttery and flaky</p>
                    </div>
                    <span className="text-amber-700 font-bold">$3.25</span>
                  </div>
                  <div 
                    onClick={() => handleQuickOrder("Cold Brew", 3.75)}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-amber-200 shadow-sm cursor-pointer hover:bg-amber-50 transition-colors"
                  >
                    <div>
                      <span className="text-amber-900 font-medium">Cold Brew</span>
                      <p className="text-xs text-amber-600">Smooth & refreshing</p>
                    </div>
                    <span className="text-amber-700 font-bold">$3.75</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link to="/menu">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white shadow-lg">
                      Browse Full Menu
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};