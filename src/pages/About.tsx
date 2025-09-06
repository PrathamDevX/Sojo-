import { Navbar } from "@/components/ui/navbar";
import { ContactSection } from "@/components/ContactSection";
import { Coffee, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Navbar />
      <div className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
                About Jojo Cafe
              </h1>
              <p className="text-xl text-amber-700 font-medium leading-relaxed">
                Your neighborhood cafe & eatery serving great food and coffee since 2018
              </p>
            </div>

            {/* Story */}
            <div className="bg-white p-8 lg:p-12 rounded-2xl mb-16 shadow-xl border border-amber-200">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-amber-900">Our Story</h2>
                  <p className="text-amber-800 leading-relaxed">
                    Founded in 2018, Jojo Cafe began as a neighborhood gathering place 
                    with a simple mission: to serve exceptional food and coffee in a warm, 
                    welcoming environment. What started as a cozy coffee spot has grown 
                    into a beloved community cafe offering everything from artisan coffee 
                    to hearty meals.
                  </p>
                  <p className="text-amber-800 leading-relaxed">
                    From our signature lattes and fresh pastries to our delicious sandwiches 
                    and wholesome wraps, we're committed to using quality ingredients. 
                    Whether you're grabbing a quick breakfast, enjoying lunch with friends, 
                    or settling in with your laptop, we've got something delicious for every moment.
                  </p>
                </div>
                <div className="bg-amber-100 p-8 rounded-xl border-2 border-amber-300">
                  <Coffee className="h-16 w-16 text-amber-600 mb-4" />
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Fresh & Quality</h3>
                  <p className="text-amber-700 text-sm">
                    From coffee beans to sandwich ingredients, everything is fresh and carefully selected
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl text-center shadow-lg border border-amber-200">
                <Heart className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Made with Love</h3>
                <p className="text-amber-700 text-sm">
                  We pour our heart into every cup we serve
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl text-center shadow-lg border border-amber-200">
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Community</h3>
                <p className="text-amber-700 text-sm">
                  Building connections one conversation at a time
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl text-center shadow-lg border border-amber-200">
                <Coffee className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Full Menu</h3>
                <p className="text-amber-700 text-sm">
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