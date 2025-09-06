import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

const categories = [
  { id: "hot", name: "Hot Drinks" },
  { id: "cold", name: "Cold Drinks" },
  { id: "pastries", name: "Pastries" },
  { id: "sandwiches", name: "Sandwiches" },
];

const menuItems = {
  hot: [
    { id: 1, name: "Signature Latte", description: "Rich espresso with steamed milk", price: 4.50, image: "/api/placeholder/300/200" },
    { id: 2, name: "Cappuccino", description: "Classic Italian coffee with foam", price: 4.25, image: "/api/placeholder/300/200" },
    { id: 3, name: "Americano", description: "Bold espresso with hot water", price: 3.75, image: "/api/placeholder/300/200" },
  ],
  cold: [
    { id: 4, name: "Cold Brew", description: "Smooth cold-extracted coffee", price: 3.75, image: "/api/placeholder/300/200" },
    { id: 5, name: "Iced Latte", description: "Espresso with cold milk over ice", price: 4.50, image: "/api/placeholder/300/200" },
    { id: 6, name: "Frappé", description: "Blended iced coffee drink", price: 5.25, image: "/api/placeholder/300/200" },
  ],
  pastries: [
    { id: 7, name: "Butter Croissant", description: "Flaky, buttery French pastry", price: 3.25, image: "/api/placeholder/300/200" },
    { id: 8, name: "Chocolate Muffin", description: "Rich chocolate chip muffin", price: 3.75, image: "/api/placeholder/300/200" },
    { id: 9, name: "Almond Scone", description: "Traditional British scone with almonds", price: 3.50, image: "/api/placeholder/300/200" },
  ],
  sandwiches: [
    { id: 10, name: "Club Sandwich", description: "Turkey, bacon, lettuce, tomato", price: 8.50, image: "/api/placeholder/300/200" },
    { id: 11, name: "Grilled Cheese", description: "Artisan cheese on sourdough", price: 6.75, image: "/api/placeholder/300/200" },
    { id: 12, name: "Veggie Wrap", description: "Fresh vegetables in spinach wrap", price: 7.25, image: "/api/placeholder/300/200" },
  ],
};

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("hot");
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const { addToCart } = useCart();

  const updateQuantity = (itemId: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change)
    }));
  };

  const handleAddToCart = (item: any) => {
    const quantity = quantities[item.id] || 0;
    if (quantity > 0) {
      for (let i = 0; i < quantity; i++) {
        addToCart({
          id: item.id,
          name: item.name,
          price: item.price,
          category: activeCategory
        });
      }
      // Reset quantity after adding to cart
      setQuantities(prev => ({ ...prev, [item.id]: 0 }));
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-orange-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Menu
          </motion.h2>
          <motion.p 
            className="text-xl text-amber-700 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Made fresh daily with the finest ingredients
          </motion.p>
        </motion.div>

        {/* Category Pills */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  activeCategory === category.id
                    ? "bg-amber-600 text-white shadow-lg"
                    : "border-amber-300 text-amber-700 hover:bg-amber-100 bg-white"
                }`}
              >
                {category.name}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="bg-white p-0 overflow-hidden group shadow-xl border border-amber-200 hover:shadow-2xl transition-all duration-300">
                <motion.div 
                  className="aspect-[4/3] bg-gradient-to-br from-amber-200 to-orange-200 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-amber-100/50 group-hover:bg-amber-100/70 transition-colors duration-300" />
                  <motion.div 
                    className="absolute bottom-4 left-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{item.name.charAt(0)}</span>
                    </div>
                  </motion.div>
                </motion.div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{item.name}</h3>
                  <p className="text-amber-700 text-sm leading-relaxed">{item.description}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-800">
                    ${item.price.toFixed(2)}
                  </span>
                  
                  <div className="flex items-center space-x-3">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        size="sm"
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={!quantities[item.id]}
                        className="h-8 w-8 p-0 bg-amber-200 border-2 border-amber-400 text-amber-800 hover:bg-amber-300 hover:border-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </motion.div>
                    
                    <motion.span 
                      className="text-amber-900 font-bold w-8 text-center"
                      key={quantities[item.id] || 0}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {quantities[item.id] || 0}
                    </motion.span>
                    
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        size="sm"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="h-8 w-8 p-0 bg-amber-200 border-2 border-amber-400 text-amber-800 hover:bg-amber-300 hover:border-amber-500 transition-all duration-200"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
                
                {quantities[item.id] > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      onClick={() => handleAddToCart(item)}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium shadow-lg transition-all duration-300"
                    >
                      Add to Cart - ${(item.price * quantities[item.id]).toFixed(2)}
                    </Button>
                  </motion.div>
                )}
              </div>
            </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};