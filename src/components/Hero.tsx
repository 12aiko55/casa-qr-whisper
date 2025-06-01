
import { QrCode, User, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/feb77724-1c55-4c64-9a68-7ae2686f63e1.png" 
                alt="Airbnb Concierge" 
                className="h-10 w-auto"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  <span className="hidden sm:inline">Sign In</span>
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                  <UserPlus className="w-4 h-4" />
                  <span className="hidden sm:inline">Sign Up</span>
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Dashboard</span>
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="sm" className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100">
                  Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 px-4" style={{ minHeight: 'calc(100vh - 64px)' }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/lovable-uploads/feb77724-1c55-4c64-9a68-7ae2686f63e1.png" 
                  alt="Airbnb Concierge" 
                  className="h-20 w-auto"
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
              <Link to="/register">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto"
                >
                  Get started
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg font-semibold rounded-2xl border-2 hover:bg-gray-50 transition-all duration-300"
                onClick={() => window.location.href = '/about'}
              >
                About Us
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <Link to="/login" className="hover:text-green-600 transition-colors">
                Already have an account? Sign in
              </Link>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            {/* Real QR Code Photo */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/d3e8a536-8dab-47b2-9a75-7278d4e6e656.png" 
                alt="QR Code in real Airbnb setting" 
                className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <p className="text-center text-gray-600 mt-4 text-sm">
                QR code displayed in your property for easy guest access
              </p>
            </div>

            {/* Mockup Chat Interface */}
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
    </div>
  );
};

export default Hero;
