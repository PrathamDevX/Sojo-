import { Navbar } from "@/components/ui/navbar";
import { ContactSection } from "@/components/ContactSection";
import { Coffee, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      <Navbar />
      <div className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-amber-900 dark:text-amber-100 mb-6 transition-colors duration-300">
                About Jojo Cafe
              </h1>
              <p className="text-xl text-amber-700 dark:text-amber-300 font-medium leading-relaxed transition-colors duration-300">
                Your neighborhood cafe & eatery serving great food and coffee since 2018
              </p>
            </div>

            {/* Story */}
            <div className="bg-white dark:bg-slate-800 p-8 lg:p-12 rounded-2xl mb-16 shadow-xl border border-amber-200 dark:border-amber-700 transition-colors duration-300">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100 transition-colors duration-300">Our Story</h2>
                  <p className="text-amber-800 dark:text-amber-200 leading-relaxed transition-colors duration-300">
                    Founded in 2018, Jojo Cafe began as a neighborhood gathering place 
                    with a simple mission: to serve exceptional food and coffee in a warm, 
                    welcoming environment. What started as a cozy coffee spot has grown 
                    into a beloved community cafe offering everything from artisan coffee 
                    to hearty meals.
                  </p>
                  <p className="text-amber-800 dark:text-amber-200 leading-relaxed transition-colors duration-300">
                    From our signature lattes and fresh pastries to our delicious sandwiches 
                    and wholesome wraps, we're committed to using quality ingredients. 
                    Whether you're grabbing a quick breakfast, enjoying lunch with friends, 
                    or settling in with your laptop, we've got something delicious for every moment.
                  </p>
                </div>
                <div className="bg-amber-100 dark:bg-amber-900/30 p-8 rounded-xl border-2 border-amber-300 dark:border-amber-600 transition-colors duration-300">
                  <Coffee className="h-16 w-16 text-amber-600 dark:text-amber-400 mb-4 transition-colors duration-300" />
                  <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-2 transition-colors duration-300">Fresh & Quality</h3>
                  <p className="text-amber-700 dark:text-amber-300 text-sm transition-colors duration-300">
                    From coffee beans to sandwich ingredients, everything is fresh and carefully selected
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center shadow-lg border border-amber-200 dark:border-amber-700 transition-colors duration-300">
                <Heart className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4 transition-colors duration-300" />
                <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-2 transition-colors duration-300">Made with Love</h3>
                <p className="text-amber-700 dark:text-amber-300 text-sm transition-colors duration-300">
                  We pour our heart into every cup we serve
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center shadow-lg border border-amber-200 dark:border-amber-700 transition-colors duration-300">
                <Users className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4 transition-colors duration-300" />
                <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-2 transition-colors duration-300">Community</h3>
                <p className="text-amber-700 dark:text-amber-300 text-sm transition-colors duration-300">
                  Building connections one conversation at a time
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center shadow-lg border border-amber-200 dark:border-amber-700 transition-colors duration-300">
                <Coffee className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4 transition-colors duration-300" />
                <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-2 transition-colors duration-300">Full Menu</h3>
                <p className="text-amber-700 dark:text-amber-300 text-sm transition-colors duration-300">
                  From coffee and pastries to hearty sandwiches and fresh wraps
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
};

export default About;