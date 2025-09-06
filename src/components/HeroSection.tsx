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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-amber-50 via-amber-100 to-orange-50 dark:from-[#0a0a0a] dark:via-[#0a0a0a] dark:to-[#0a0a0a] transition-colors duration-500">
      {/* Warm Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-amber-200 dark:bg-orange-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-32 w-48 h-48 bg-orange-200 dark:bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-300 dark:bg-orange-600 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1, 
              ease: [0.25, 0.25, 0.25, 0.75],
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
                  ease: [0.25, 0.25, 0.25, 0.75]
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 4,
                    ease: "easeInOut"
                  }}
                >
                  <Coffee className="h-10 w-10 text-amber-700 dark:text-orange-500 transition-colors duration-300" />
                </motion.div>
                <span className="text-sm font-medium tracking-wide text-amber-700 dark:text-gray-400 uppercase transition-colors duration-300">
                  Welcome to
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-amber-900 dark:text-gray-200 leading-tight transition-colors duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.9, 
                  delay: 0.5,
                  ease: [0.25, 0.25, 0.25, 0.75]
                }}
              >
                Sojo
                <motion.span 
                  className="block text-orange-700 dark:text-orange-300 transition-colors duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.8,
                    ease: [0.25, 0.25, 0.25, 0.75]
                  }}
                >
                  Cafe
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-amber-800 dark:text-gray-400 leading-relaxed max-w-lg transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.0,
                  ease: [0.25, 0.25, 0.25, 0.75]
                }}
              >
                Your neighborhood coffee shop where every cup is brewed with love. 
                Fresh pastries, warm atmosphere, friendly service.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.3,
                ease: [0.25, 0.25, 0.25, 0.75]
              }}
            >
              <Link to="/menu">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-amber-600 dark:bg-[#a13f1f] hover:bg-amber-700 dark:hover:bg-[#8a3519] text-white font-medium shadow-lg transition-all duration-300">
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
                    className="bg-amber-200 dark:bg-[#0a0a0a] hover:bg-amber-300 dark:hover:bg-[#1a1a1a] text-amber-900 dark:text-gray-200 font-medium border-2 border-amber-800 dark:border-gray-600 hover:border-amber-900 dark:hover:border-gray-500 transition-all duration-300"
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
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.6,
              ease: [0.25, 0.25, 0.25, 0.75],
              type: "spring",
              stiffness: 80
            }}
          >
            <motion.div 
              className="bg-amber-100 dark:bg-[#0f0f0f] border-4 border-amber-700 dark:border-gray-700 p-8 rounded-lg shadow-xl transform rotate-1"
              whileHover={{ 
                rotate: 0, 
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.25, 0.25, 0.75]
              }}
            >
              <div className="space-y-6">
                <motion.div 
                  className="text-center border-b-2 border-amber-600 dark:border-orange-500 pb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.0,
                    ease: [0.25, 0.25, 0.25, 0.75]
                  }}
                >
                  <h3 className="text-2xl font-bold text-amber-900 dark:text-gray-100 mb-2 transition-colors duration-300">Today's Specials</h3>
                  <p className="text-amber-700 dark:text-gray-400 text-sm font-medium transition-colors duration-300">Freshly made with love ♥</p>
                </motion.div>
                
                <motion.div 
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <motion.div 
                    onClick={() => handleQuickOrder("Signature Latte", 4.50)}
                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-amber-200 dark:border-orange-600 shadow-sm cursor-pointer hover:bg-amber-50 dark:hover:bg-gray-700 transition-all duration-300"
                    initial={{ opacity: 0, x: 30, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.4,
                      ease: [0.25, 0.25, 0.25, 0.75]
                    }}
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                      y: -2
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div>
                      <span className="text-amber-900 dark:text-gray-200 font-medium transition-colors duration-300">Signature Latte</span>
                      <p className="text-xs text-amber-600 dark:text-gray-400 transition-colors duration-300">Rich espresso with steamed milk</p>
                    </div>
                    <span className="text-amber-700 dark:text-gray-300 font-bold transition-colors duration-300">$4.50</span>
                  </motion.div>
                  <motion.div 
                    onClick={() => handleQuickOrder("Fresh Croissant", 3.25)}
                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-amber-200 dark:border-orange-600 shadow-sm cursor-pointer hover:bg-amber-50 dark:hover:bg-gray-700 transition-all duration-300"
                    initial={{ opacity: 0, x: 30, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.6,
                      ease: [0.25, 0.25, 0.25, 0.75]
                    }}
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                      y: -2
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div>
                      <span className="text-amber-900 dark:text-gray-200 font-medium transition-colors duration-300">Fresh Croissant</span>
                      <p className="text-xs text-amber-600 dark:text-gray-400 transition-colors duration-300">Buttery and flaky</p>
                    </div>
                    <span className="text-amber-700 dark:text-gray-300 font-bold transition-colors duration-300">$3.25</span>
                  </motion.div>
                  <motion.div 
                    onClick={() => handleQuickOrder("Cold Brew", 3.75)}
                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-amber-200 dark:border-orange-600 shadow-sm cursor-pointer hover:bg-amber-50 dark:hover:bg-gray-700 transition-all duration-300"
                    initial={{ opacity: 0, x: 30, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.8,
                      ease: [0.25, 0.25, 0.25, 0.75]
                    }}
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                      y: -2
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div>
                      <span className="text-amber-900 dark:text-gray-200 font-medium transition-colors duration-300">Cold Brew</span>
                      <p className="text-xs text-amber-600 dark:text-gray-400 transition-colors duration-300">Smooth & refreshing</p>
                    </div>
                    <span className="text-amber-700 dark:text-gray-300 font-bold transition-colors duration-300">$3.75</span>
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
                      <Button className="w-full bg-amber-600 dark:bg-[#a13f1f] hover:bg-amber-700 dark:hover:bg-[#8a3519] text-white shadow-lg transition-all duration-300">
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