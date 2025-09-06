import { Navbar } from "@/components/ui/navbar";
import { ContactSection } from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 dark:from-black dark:to-gray-950 transition-colors duration-500">
      <Navbar />
      <div className="pt-16">
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;
