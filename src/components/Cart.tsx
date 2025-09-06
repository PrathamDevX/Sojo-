import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Plus, Minus, ShoppingBag, CreditCard } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onClearCart: () => void;
}

export const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onClearCart }: CartProps) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      alert(`Order placed successfully! Total: $${total.toFixed(2)}\nThank you for choosing Jojo Cafe!`);
      onClearCart();
      setIsCheckingOut(false);
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-700 transition-colors duration-300">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between text-amber-900 dark:text-amber-100 transition-colors duration-300">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Your Cart ({itemCount} items)
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              className="text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors duration-300"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="max-h-96 overflow-y-auto space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBag className="h-12 w-12 text-amber-300 dark:text-amber-600 mx-auto mb-4 transition-colors duration-300" />
              <p className="text-amber-700 dark:text-amber-300 transition-colors duration-300">Your cart is empty</p>
              <p className="text-sm text-amber-600 dark:text-amber-400 transition-colors duration-300">Add some delicious items from our menu!</p>
            </div>
          ) : (
            items.map((item) => (
              <Card key={item.id} className="p-4 border border-amber-200 dark:border-amber-700 bg-amber-50/50 dark:bg-amber-900/20 transition-colors duration-300">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 transition-colors duration-300">{item.name}</h4>
                    <p className="text-sm text-amber-600 dark:text-amber-400 capitalize transition-colors duration-300">{item.category}</p>
                    <p className="text-lg font-bold text-amber-800 dark:text-amber-200 transition-colors duration-300">${item.price.toFixed(2)} each</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemoveItem(item.id)}
                    className="text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors duration-300"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Button
                      size="sm"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8 p-0 bg-amber-200 dark:bg-amber-800 border-2 border-amber-400 dark:border-amber-600 text-amber-800 dark:text-amber-200 hover:bg-amber-300 dark:hover:bg-amber-700 transition-colors duration-300"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    
                    <span className="text-amber-900 dark:text-amber-100 font-bold w-8 text-center transition-colors duration-300">
                      {item.quantity}
                    </span>
                    
                    <Button
                      size="sm"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8 p-0 bg-amber-200 dark:bg-amber-800 border-2 border-amber-400 dark:border-amber-600 text-amber-800 dark:text-amber-200 hover:bg-amber-300 dark:hover:bg-amber-700 transition-colors duration-300"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-bold text-amber-900 dark:text-amber-100 transition-colors duration-300">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-amber-200 dark:border-amber-700 pt-4 space-y-4 transition-colors duration-300">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-amber-900 dark:text-amber-100 transition-colors duration-300">Total:</span>
              <span className="text-2xl font-bold text-amber-800 dark:text-amber-200 transition-colors duration-300">${total.toFixed(2)}</span>
            </div>
            
            <div className="flex gap-2">
              <Button
                onClick={onClearCart}
                className="flex-1 bg-amber-200 dark:bg-amber-800 border-2 border-amber-400 dark:border-amber-600 text-amber-800 dark:text-amber-200 hover:bg-amber-300 dark:hover:bg-amber-700 hover:border-amber-500 dark:hover:border-amber-500 transition-colors duration-300"
              >
                Clear Cart
              </Button>
              <Button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="flex-1 bg-amber-600 dark:bg-amber-700 hover:bg-amber-700 dark:hover:bg-amber-600 text-white transition-colors duration-300"
              >
                {isCheckingOut ? (
                  "Processing..."
                ) : (
                  <>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Checkout
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
