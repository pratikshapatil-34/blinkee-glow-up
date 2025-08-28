import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="text-center mb-12 p-8 bg-gradient-hero rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Stay in the Loop!</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get the latest updates on new LED products, exclusive deals, and lighting inspiration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button variant="glow" className="bg-white text-primary hover:bg-white/90">
              <Mail className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">B</span>
              <span className="text-secondary">l</span>
              <span className="text-accent">i</span>
              <span className="text-primary">n</span>
              <span className="text-secondary">k</span>
              <span className="text-accent">e</span>
              <span className="text-primary">e</span>
              <span className="text-muted-foreground">.com</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Your trusted source for premium LED products, custom blinkees, and party accessories since 2010.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Phone className="h-4 w-4" />
              <span>415.261.0675</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Mail className="h-4 w-4" />
              <span>info@blinkee.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">All Products</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">LED Pins</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Keychains</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Party Supplies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Custom Orders</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-4">
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground hover:border-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-secondary hover:text-secondary-foreground hover:border-secondary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground hover:border-accent">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground hover:border-primary">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Join our community and see how customers are lighting up their world!
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © 2024 Blinkee.com. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;