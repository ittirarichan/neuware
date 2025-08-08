import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "Mobile App Development",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        project_type: formData.projectType,
        message: formData.message,
        to_name: 'NeuWare Team',
        reply_to: formData.email,
      };

      await emailjs.send(
        'service_txgz8xr', // Replace with your EmailJS service ID
        'template_50bhkfd', // Replace with your template ID
        templateParams,
        '1kfs8_hIUZlXcCvux' // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        projectType: "Mobile App Development",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8 fade-in-left mt-12">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Get In Touch
                <br />
                <span className="text-primary">Today!</span>
              </h2>
              <p className="text-lg text-gray-400">
                Ready to transform your digital presence? Let's discuss your project 
                and bring your vision to life with our expert team.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email Us</div>
                  <div className="text-gray-400">contact@neuware.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Call Us</div>
                  <div className="text-gray-400">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Visit Us</div>
                  <div className="text-gray-400">123 Tech Street, Innovation City</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 tech-gradient rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Working Hours</div>
                  <div className="text-gray-400">Monday - Friday: 9:00 AM - 5:00 PM</div>
                  <div className="text-gray-400">Saturday - Sunday: 10:00 AM - 3:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-2xl p-8 tech-shadow hover-glow">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">First Name</label>
                  <Input 
                    name="firstName"
                    placeholder="John" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border-border focus:border-primary bg-background text-foreground" 
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Last Name</label>
                  <Input 
                    name="lastName"
                    placeholder="Doe" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="border-border focus:border-primary bg-background text-foreground" 
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Email</label>
                <Input 
                  name="email"
                  type="email" 
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-border focus:border-primary bg-background text-foreground" 
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Project Type</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:outline-none bg-background text-foreground"
                >
                  <option>Mobile App Development</option>
                  <option>Web Application</option>
                  <option>UI/UX Design</option>
                  <option>Backend Development</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Message</label>
                <Textarea 
                  name="message"
                  placeholder="Tell us about your project..." 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="border-border focus:border-primary min-h-[120px] bg-background text-foreground"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                variant="hero" 
                size="lg" 
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
