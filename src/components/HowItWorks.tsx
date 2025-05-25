
import { Home, MessageSquare, QrCode, Smartphone } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Home,
      title: "Register Your Property",
      description: "Enter details about your Airbnb property, including amenities, rules, and local recommendations."
    },
    {
      icon: MessageSquare,
      title: "Add FAQs & Information",
      description: "Upload frequently asked questions and unique details about your property that guests should know."
    },
    {
      icon: QrCode,
      title: "Generate QR Code",
      description: "Get a custom QR code that connects guests directly to your property's AI assistant."
    },
    {
      icon: Smartphone,
      title: "Guests Scan & Ask",
      description: "Guests scan the code and get instant, personalized answers about your property."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Set up your AI concierge in minutes and provide 24/7 support for your guests
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-to-br from-blue-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
