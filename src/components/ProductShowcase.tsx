import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Custom LED Flashing Blinky Light Pins",
      price: "$1.44",
      originalPrice: "$2.00",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      description: "Perfect for events, promotions, and parties"
    },
    {
      id: 2,
      name: "Black Light LED Keychain Flashlight",
      price: "$0.99",
      originalPrice: "$1.50",
      image: "/api/placeholder/300/300",
      rating: 4.6,
      reviews: 89,
      badge: "Popular",
      description: "Compact and powerful UV LED flashlight"
    },
    {
      id: 3,
      name: "Light Up Devil Horns Blue",
      price: "$2.59",
      originalPrice: "$3.99",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 156,
      badge: "New",
      description: "Fun LED accessories for parties and events"
    },
    {
      id: 4,
      name: "Slingshot Flying Helicopter LED",
      price: "$3.99",
      originalPrice: "$5.99",
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 203,
      badge: "Sale",
      description: "Multicolor LED flying toy that lights up the sky"
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Featured Products
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Best Selling Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular LED products loved by customers worldwide
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-card-enhanced transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-gradient-secondary rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  <Badge 
                    className={`absolute top-3 left-3 ${
                      product.badge === 'Best Seller' ? 'bg-gradient-primary' :
                      product.badge === 'New' ? 'bg-gradient-secondary' :
                      product.badge === 'Sale' ? 'bg-destructive' :
                      'bg-accent'
                    } text-white border-0`}
                  >
                    {product.badge}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-accent fill-accent'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">
                    ({product.reviews})
                  </span>
                </div>
                
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-xs text-muted-foreground mb-3">
                  {product.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Button 
                  variant="gradient" 
                  className="w-full group-hover:shadow-glow"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;