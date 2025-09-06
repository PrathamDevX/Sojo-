import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

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
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Coffee className="h-10 w-10 text-amber-700" />
                </motion.div>
                <span className="text-sm font-medium tracking-wide text-amber-700 uppercase">
                  Welcome to
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-amber-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Sojo
                <motion.span 
                  className="block text-orange-700"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Cafe
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-amber-800 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Your neighborhood coffee shop where every cup is brewed with love. 
                Fresh pastries, warm atmosphere, friendly service.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/menu">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-medium shadow-lg transition-all duration-300">
                    Order Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/menu">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg"
                    className="bg-amber-200 hover:bg-amber-300 text-amber-900 font-medium border-2 border-amber-800 hover:border-amber-900 transition-all duration-300"
                  >
                    View Menu
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Element - Cozy Menu Board */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="bg-amber-100 border-4 border-amber-700 p-8 rounded-lg shadow-xl transform rotate-1"
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-6">
                <motion.div 
                  className="text-center border-b-2 border-amber-600 pb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">Today's Specials</h3>
                  <p className="text-amber-700 text-sm font-medium">Freshly made with love ♥</p>
                </motion.div>
                
                <motion.div 
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.div 
                    onClick={() => handleQuickOrder("Signature Latte", 4.50)}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-amber-200 shadow-sm cursor-pointer hover:bg-amber-50 transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div>
                      <span className="text-amber-900 font-medium">Signature Latte</span>
                      <p className="text-xs text-amber-600">Rich espresso with steamed milk</p>
                    </div>
                    <span className="text-amber-700 font-bold">$4.50</span>
                  </motion.div>
                  <motion.div 
                    onClick={() => handleQuickOrder("Fresh Croissant", 3.25)}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-amber-200 shadow-sm cursor-pointer hover:bg-amber-50 transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div>
                      <span className="text-amber-900 font-medium">Fresh Croissant</span>
                      <p className="text-xs text-amber-600">Buttery and flaky</p>
                    </div>
                    <span className="text-amber-700 font-bold">$3.25</span>
                  </motion.div>
                  <motion.div 
                    onClick={() => handleQuickOrder("Cold Brew", 3.75)}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-amber-200 shadow-sm cursor-pointer hover:bg-amber-50 transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div>
                      <span className="text-amber-900 font-medium">Cold Brew</span>
                      <p className="text-xs text-amber-600">Smooth & refreshing</p>
                    </div>
                    <span className="text-amber-700 font-bold">$3.75</span>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  <Link to="/menu">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white shadow-lg transition-all duration-300">
                        Browse Full Menu
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};