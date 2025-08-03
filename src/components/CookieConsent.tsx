import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Cookie, Shield, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowDetails(!showDetails);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 left-4 right-4 z-[100] md:left-6 md:right-6 lg:left-8 lg:right-8"
      >
        <Card className="bg-background/95 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, 
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>

                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-3 border-t border-white/10 pt-4"
                    >
                      <div className="flex items-center gap-3">
                        <Shield className="w-4 h-4 text-green-500" />
                        <div>
                          <p className="text-sm font-medium">Essential Cookies</p>
                          <p className="text-xs text-muted-foreground">Required for basic site functionality</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Settings className="w-4 h-4 text-blue-500" />
                        <div>
                          <p className="text-sm font-medium">Analytics Cookies</p>
                          <p className="text-xs text-muted-foreground">Help us improve our website</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={handleAccept}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Accept All
                  </Button>
                  <Button 
                    onClick={handleReject}
                    variant="outline"
                    className="border-white/20 hover:bg-white/5"
                  >
                    Reject All
                  </Button>
                  <Button 
                    onClick={handleCustomize}
                    variant="ghost"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {showDetails ? 'Hide Details' : 'Customize'}
                  </Button>
                </div>
              </div>

              <Button
                onClick={() => setIsVisible(false)}
                variant="ghost"
                size="sm"
                className="flex-shrink-0 h-8 w-8 p-0 hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;

