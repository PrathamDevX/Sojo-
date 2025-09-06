import { Navbar } from "@/components/ui/navbar";
import { MenuSection } from "@/components/MenuSection";

const Menu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      <Navbar />
      <div className="pt-16">
        <MenuSection />
      </div>
    </div>
  );
};

export default Menu;