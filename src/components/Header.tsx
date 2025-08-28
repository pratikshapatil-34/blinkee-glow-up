import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Menu, Phone, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-border/50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>415.261.0675</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <User className="h-4 w-4 mr-2" />
              Account
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart (0) - $0.00
            </Button>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold">
              <span className="text-primary">B</span>
              <span className="text-secondary">l</span>
              <span className="text-accent">i</span>
              <span className="text-primary">n</span>
              <span className="text-secondary">k</span>
              <span className="text-accent">e</span>
              <span className="text-primary">e</span>
              <span className="text-muted-foreground">.com</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for LED products..."
                className="w-full px-4 py-2 pr-10 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Products
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Custom Blinkees
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;