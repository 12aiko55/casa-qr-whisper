
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Users, Shield, Brain } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      
      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We're passionate about revolutionizing the guest experience in vacation rentals 
              through intelligent AI-powered assistance.
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-gray-50 rounded-3xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded with a simple mission: to help Airbnb hosts provide exceptional guest experiences 
              24/7. We understand that managing a vacation rental property comes with unique challenges, 
              especially when it comes to being available for guest questions at all hours.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our AI concierge solution bridges this gap, providing instant, personalized assistance 
              to your guests while giving you peace of mind and more time to focus on what matters most.
            </p>
          </div>

          {/* Founders Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Founders</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Network Security Expert</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our co-founder brings years of expertise in programming and network security, 
                  ensuring that our platform is built with the highest standards of security and reliability. 
                  Their technical vision drives the robust infrastructure that powers our AI concierge service.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 text-center">
                <div className="bg-gradient-to-br from-green-500 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Aiko Pappas</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  The creator of the first digital model in Greece and a pioneer in artificial intelligence in Greece. 
                  Aiko's groundbreaking work in AI and digital innovation forms the foundation of our intelligent 
                  concierge technology, bringing cutting-edge artificial intelligence to the hospitality industry.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 text-center">
            <div className="bg-gradient-to-br from-blue-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              To empower vacation rental hosts with intelligent technology that enhances guest experiences, 
              increases property ratings, and creates more successful hosting businesses. We believe that 
              great hospitality should be accessible 24/7, and our AI concierge makes that possible.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
