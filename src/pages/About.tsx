
import { Users, Heart, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/feb77724-1c55-4c64-9a68-7ae2686f63e1.png" 
                alt="Airbnb Concierge" 
                className="h-16 w-auto"
              />
            </div>
            <a 
              href="/" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We're passionate about revolutionizing the guest experience in vacation rentals 
              through intelligent AI-powered assistance.
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
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

          {/* Values Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Guest-Focused</h3>
              <p className="text-gray-600">
                Every feature is designed with your guests' comfort and satisfaction in mind.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Host-Friendly</h3>
              <p className="text-gray-600">
                Simple setup and management tools that work seamlessly with your hosting workflow.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                Cutting-edge AI technology that delivers accurate and helpful responses every time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global</h3>
              <p className="text-gray-600">
                Supporting hosts worldwide with multilingual capabilities and local insights.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              To empower vacation rental hosts with intelligent technology that enhances guest experiences, 
              increases property ratings, and creates more successful hosting businesses. We believe that 
              great hospitality should be accessible 24/7, and our AI concierge makes that possible.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
