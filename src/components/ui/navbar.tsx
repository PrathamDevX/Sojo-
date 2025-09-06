import { Link } from "react-router-dom";
import { Coffee, ShoppingCart } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Cart } from "@/components/Cart";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, getTotalItems, updateQuantity, removeItem, clearCart } = useCart();

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-amber-200"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Coffee className="h-8 w-8 text-amber-600 transition-colors duration-200 group-hover:text-amber-800" />
              </motion.div>
              <motion.span 
                className="text-xl font-bold tracking-wide text-amber-900 transition-colors duration-200 group-hover:text-amber-800"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Sojo Cafe
              </motion.span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-amber-700 hover:text-amber-900 transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className="text-amber-700 hover:text-amber-900 transition-colors duration-200 font-medium"
              >
                Menu
              </Link>
              <Link 
                to="/about" 
                className="text-amber-700 hover:text-amber-900 transition-colors duration-200 font-medium"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-amber-700 hover:text-amber-900 transition-colors duration-200 font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsCartOpen(true)}
                className="relative text-amber-700 hover:text-amber-900 hover:bg-amber-50"
              >
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
              <Link to="/menu">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white font-medium shadow-md" size="sm">
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />
    </>
  );
};
