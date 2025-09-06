import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <motion.section 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-amber-100"
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
            className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Visit Us Today
          </motion.h2>
          <motion.p 
            className="text-xl text-amber-700 font-medium"
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
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Location</h4>
                    <p className="text-amber-700">123 Coffee Street</p>
                    <p className="text-amber-700">Downtown District, City 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Phone</h4>
                    <p className="text-amber-700">(555) 123-CAFE</p>
                    <p className="text-amber-700">(555) 123-2233</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Email</h4>
                    <p className="text-amber-700">hello@jojocafe.com</p>
                    <p className="text-amber-700">orders@jojocafe.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Hours</h4>
                    <div className="text-amber-700 space-y-1">
                      <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                      <p>Saturday: 7:00 AM - 9:00 PM</p>
                      <p>Sunday: 7:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button 
                variant="outline"
                className="border-amber-300 text-amber-700 hover:bg-amber-50"
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
            </div>
          </div>

          {/* Map/Location Card */}
          <div className="space-y-6">
            <Card className="bg-white p-6 border border-amber-200 shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Find Us</h3>
              <div className="bg-amber-100 h-64 rounded-lg flex items-center justify-center border-2 border-amber-300">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                  <p className="text-amber-800 font-medium">Interactive Map</p>
                  <p className="text-sm text-amber-600">Click to open in Maps</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-amber-700">
                  <strong>Parking:</strong> Street parking available
                </p>
                <p className="text-sm text-amber-700">
                  <strong>Public Transit:</strong> Bus stops nearby
                </p>
                <p className="text-sm text-amber-700">
                  <strong>Accessibility:</strong> Wheelchair accessible
                </p>
              </div>
            </Card>

            <Card className="bg-white p-6 border border-amber-200 shadow-lg">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Special Services</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <p className="text-amber-700">Free WiFi</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <p className="text-amber-700">Catering Services</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <p className="text-amber-700">Private Events</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <p className="text-amber-700">Online Ordering</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                  <p className="text-amber-700">Loyalty Program</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
