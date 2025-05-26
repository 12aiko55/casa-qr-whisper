
import { QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/feb77724-1c55-4c64-9a68-7ae2686f63e1.png" 
                alt="Airbnb Concierge" 
                className="h-12 w-auto"
              />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Personalized guest assistance for your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Airbnb
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            Create a custom AI assistant for your Airbnb property and generate 
            a QR code for your guests to scan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-semibold rounded-2xl border-2 hover:bg-gray-50 transition-all duration-300"
            >
              Learn more
            </Button>
          </div>
        </div>
        
        <div className="relative animate-scale-in">
          <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="bg-gray-100 rounded-2xl p-6 mb-6">
              <QrCode className="w-32 h-32 mx-auto text-gray-800" />
            </div>
            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-gray-700 font-medium">
                  "Hello, how can I assist you today?"
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse">
            <QrCode className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
