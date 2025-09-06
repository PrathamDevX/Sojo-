import { Navbar } from "@/components/ui/navbar";
import { MenuSection } from "@/components/MenuSection";

const Menu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 dark:from-[#0a0a0a] dark:to-gray-950 transition-colors duration-500">
      <Navbar />
      <div className="pt-16">
        <MenuSection />
      </div>
    </div>
  );
};

export default Menu;