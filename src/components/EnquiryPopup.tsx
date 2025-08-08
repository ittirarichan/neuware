import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Mail, Phone, User, MessageSquare, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const EnquiryPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    const hasShown = sessionStorage.getItem('enquiry-popup-shown');
    
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('enquiry-popup-shown', 'true');
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message,
        to_name: 'NeuWare Team',
        reply_to: formData.email,
      };

      await emailjs.send(
        'service_txgz8xr', // Replace with your EmailJS service ID
        'template_rder6wi', // Replace with your template ID
        templateParams,
        '1kfs8_hIUZlXcCvux' // Replace with your EmailJS public key
      );

      toast({
        title: "Thank you for your enquiry!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsVisible(false);
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        />

        {/* Popup Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-md"
        >
          <Card className="bg-background/95 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
            {/* Header with gradient */}
            <div className="relative bg-gradient-to-r from-primary to-primary/80 p-6 text-white">
              <div className="absolute top-2 right-2">
                <Button
                  onClick={handleClose}
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-white/20 text-white"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Let's Connect!</h2>
                  <p className="text-white/90 text-sm">Start your digital journey with us</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 bg-background/50 border-white/20"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 bg-background/50 border-white/20"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    name="phone"
                    placeholder="Your Phone (Optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="pl-10 bg-background/50 border-white/20"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="pl-10 pt-3 bg-background/50 border-white/20 min-h-[80px] resize-none"
                    required
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Send Enquiry
                  </Button>
                  <Button
                    type="button"
                    onClick={handleClose}
                    variant="outline"
                    className="border-white/20 hover:bg-white/5"
                  >
                    Later
                  </Button>
                </div>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                We respect your privacy. Your information is safe with us.
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EnquiryPopup;
