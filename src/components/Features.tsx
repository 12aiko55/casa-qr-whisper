
import { Shield, Clock, Users, BarChart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Your AI assistant never sleeps, providing instant responses to guest questions at any time of day."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "All guest interactions are encrypted and your property data is kept completely secure."
    },
    {
      icon: Users,
      title: "Better Guest Experience",
      description: "Provide immediate answers to common questions, improving guest satisfaction and reviews."
    },
    {
      icon: BarChart,
      title: "Insights & Analytics",
      description: "Track the most common guest questions and optimize your property information over time."
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why choose our AI concierge?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your guest experience with intelligent, personalized assistance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-blue-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
