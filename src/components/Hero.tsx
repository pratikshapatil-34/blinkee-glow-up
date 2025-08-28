import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Summer Collection 2024</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Light Up Your
            <br />
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent animate-pulse">
              Summer Fun
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discover amazing LED products, custom blinkees, and party accessories that make every moment shine brighter
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="glow" size="lg" className="text-lg px-8 py-4">
              <Zap className="h-5 w-5 mr-2" />
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
              <Heart className="h-5 w-5 mr-2" />
              Custom Orders
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-white/80 text-sm">High-quality LED products built to last</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Fast Shipping</h3>
              <p className="text-white/80 text-sm">Quick delivery on all orders</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Custom Design</h3>
              <p className="text-white/80 text-sm">Personalized LED products for your brand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;