import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Plus, Minus, ShoppingBag, CreditCard, Trash2 } from "lucide-react";
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
      <DialogContent className="max-w-md bg-white dark:bg-[#0f0f0f] border border-amber-200 dark:border-[#a13f1f] transition-colors duration-300">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100 transition-colors duration-300">
            <ShoppingBag className="h-5 w-5" />
            Your Cart ({itemCount} items)
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
              <Card key={item.id} className="p-4 border border-amber-200 dark:border-[#a13f1f] bg-amber-50/50 dark:bg-[#0a0a0a] transition-colors duration-300">
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
                    className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300"
                    title="Remove item from cart"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Button
                      size="sm"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8 p-0 bg-amber-200 dark:bg-[#0f0f0f] border-2 border-amber-400 dark:border-[#a13f1f] text-amber-800 dark:text-[#a13f1f] hover:bg-amber-300 dark:hover:bg-[#a13f1f] transition-colors duration-300"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    
                    <span className="text-amber-900 dark:text-amber-100 font-bold w-8 text-center transition-colors duration-300">
                      {item.quantity}
                    </span>
                    
                    <Button
                      size="sm"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8 p-0 bg-amber-200 dark:bg-[#0f0f0f] border-2 border-amber-400 dark:border-[#a13f1f] text-amber-800 dark:text-[#a13f1f] hover:bg-amber-300 dark:hover:bg-[#a13f1f] transition-colors duration-300"
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
          <div className="border-t border-amber-200 dark:border-[#a13f1f] pt-4 space-y-4 transition-colors duration-300">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-amber-900 dark:text-amber-100 transition-colors duration-300">Total:</span>
              <span className="text-2xl font-bold text-amber-800 dark:text-amber-200 transition-colors duration-300">${total.toFixed(2)}</span>
            </div>
            
            <div className="flex gap-2">
              <Button
                onClick={onClearCart}
                className="flex-1 bg-amber-200 dark:bg-[#0f0f0f] border-2 border-amber-400 dark:border-[#a13f1f] text-amber-800 dark:text-[#a13f1f] hover:bg-amber-300 dark:hover:bg-[#a13f1f] hover:border-amber-500 dark:hover:border-orange-500 transition-colors duration-300"
              >
                Clear Cart
              </Button>
              <Button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="flex-1 bg-[#a13f1f] dark:bg-[#a13f1f] hover:bg-orange-700 dark:hover:bg-orange-600 text-white transition-colors duration-300"
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
