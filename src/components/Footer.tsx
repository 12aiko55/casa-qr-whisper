
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="/lovable-uploads/feb77724-1c55-4c64-9a68-7ae2686f63e1.png" 
              alt="Airbnb Concierge" 
              className="h-8 w-auto filter brightness-0 invert"
            />
          </div>
          <p className="text-gray-400 mb-8">
            Personalized guest assistance for your Airbnb property
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500">
            © 2024 Airbnb Concierge. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
