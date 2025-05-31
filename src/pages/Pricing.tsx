
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Monthly",
      price: "$19",
      period: "/month",
      description: "Perfect for trying out the service",
      features: [
        "Unlimited guest interactions",
        "Custom property information",
        "QR code generation",
        "24/7 AI assistant",
        "Basic analytics"
      ],
      highlighted: false
    },
    {
      name: "Yearly",
      price: "$190",
      period: "/year",
      description: "Best value - Save $38 per year",
      features: [
        "Everything in Monthly",
        "Priority support",
        "Advanced analytics",
        "Custom branding",
        "Multiple properties"
      ],
      highlighted: true
    }
  ];

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
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-gray-600">
              Choose the plan that works best for your property
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.highlighted 
                    ? 'ring-2 ring-green-500 scale-105 transform' 
                    : 'hover:scale-105'
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-xl text-gray-600 ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-6 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
