import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <motion.section 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-amber-100 dark:from-[#0a0a0a] dark:to-black transition-colors duration-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-amber-900 dark:text-gray-200 mb-4 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Visit Us Today
          </motion.h2>
          <motion.p 
            className="text-xl text-amber-700 dark:text-gray-400 font-medium transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We'd love to serve you at Jojo Cafe
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-900 dark:text-gray-200 mb-6 transition-colors duration-300">Get in Touch</h3>
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#a13f1f] dark:bg-[#a13f1f] p-3 rounded-lg transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-1 transition-colors duration-300">Location</h4>
                    <p className="text-amber-700 dark:text-amber-300 transition-colors duration-300">123 Coffee Street</p>
                    <p className="text-amber-700 dark:text-gray-400 transition-colors duration-300">Downtown District, City 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#a13f1f] dark:bg-[#a13f1f] p-3 rounded-lg transition-colors duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 dark:text-gray-200 mb-1 transition-colors duration-300">Phone</h4>
                    <p className="text-amber-700 dark:text-gray-400 transition-colors duration-300">(555) 123-CAFE</p>
                    <p className="text-amber-700 dark:text-gray-400 transition-colors duration-300">(555) 123-2233</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#a13f1f] dark:bg-[#a13f1f] p-3 rounded-lg transition-colors duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 dark:text-gray-200 mb-1 transition-colors duration-300">Email</h4>
                    <p className="text-amber-700 dark:text-gray-400 transition-colors duration-300">hello@jojocafe.com</p>
                    <p className="text-amber-700 dark:text-gray-400 transition-colors duration-300">orders@jojocafe.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#a13f1f] dark:bg-[#a13f1f] p-3 rounded-lg transition-colors duration-300">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 dark:text-gray-200 mb-1 transition-colors duration-300">Hours</h4>
                    <div className="text-amber-700 dark:text-gray-400 space-y-1 transition-colors duration-300">
                      <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                      <p>Saturday: 7:00 AM - 9:00 PM</p>
                      <p>Sunday: 7:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-[#a13f1f] dark:bg-[#a13f1f] hover:bg-orange-700 dark:hover:bg-orange-600 text-white transition-colors duration-300">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button 
                variant="outline"
                className="border-amber-300 dark:border-[#a13f1f] text-amber-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-[#0f0f0f] transition-colors duration-300"
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
            </div>
          </div>

          {/* Map/Location Card */}
          <div className="space-y-6">
            <Card className="bg-white dark:bg-[#0f0f0f] p-6 border border-amber-200 dark:border-[#a13f1f] shadow-lg transition-colors duration-300">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4 transition-colors duration-300">Find Us</h3>
              <div className="bg-amber-100 dark:bg-[#0f0f0f] h-64 rounded-lg flex items-center justify-center border-2 border-amber-300 dark:border-[#a13f1f] transition-colors duration-300">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-amber-600 dark:text-[#a13f1f] mx-auto mb-2 transition-colors duration-300" />
                  <p className="text-amber-800 dark:text-amber-200 font-medium transition-colors duration-300">Interactive Map</p>
                  <p className="text-sm text-amber-600 dark:text-amber-400 transition-colors duration-300">Click to open in Maps</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-amber-700 dark:text-amber-300 transition-colors duration-300">
                  <strong>Parking:</strong> Street parking available
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300 transition-colors duration-300">
                  <strong>Public Transit:</strong> Bus stops nearby
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300 transition-colors duration-300">
                  <strong>Accessibility:</strong> Wheelchair accessible
                </p>
              </div>
            </Card>

            <Card className="bg-white dark:bg-[#0f0f0f] p-6 border border-amber-200 dark:border-[#a13f1f] shadow-lg transition-colors duration-300">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4 transition-colors duration-300">Special Services</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#a13f1f] dark:bg-[#a13f1f] rounded-full transition-colors duration-300"></div>
                  <p className="text-amber-700 dark:text-amber-300 transition-colors duration-300">Free WiFi</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#a13f1f] dark:bg-[#a13f1f] rounded-full transition-colors duration-300"></div>
                  <p className="text-amber-700 dark:text-amber-300 transition-colors duration-300">Catering Services</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#a13f1f] dark:bg-[#a13f1f] rounded-full transition-colors duration-300"></div>
                  <p className="text-amber-700 dark:text-amber-300 transition-colors duration-300">Private Events</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#a13f1f] dark:bg-[#a13f1f] rounded-full transition-colors duration-300"></div>
                  <p className="text-amber-700 dark:text-amber-300 transition-colors duration-300">Online Ordering</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#a13f1f] dark:bg-[#a13f1f] rounded-full transition-colors duration-300"></div>
                  <p className="text-amber-700 dark:text-amber-300 transition-colors duration-300">Loyalty Program</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
