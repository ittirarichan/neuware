import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8 fade-in-left">
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
            </div>
          </div>

          {/* Right Form */}
          <div className="fade-in-right">
            <form className="space-y-6 bg-card rounded-2xl p-8 tech-shadow hover-glow">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">First Name</label>
                  <Input placeholder="John" className="border-border focus:border-primary bg-background text-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Last Name</label>
                  <Input placeholder="Doe" className="border-border focus:border-primary bg-background text-foreground" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Email</label>
                <Input type="email" placeholder="john@example.com" className="border-border focus:border-primary bg-background text-foreground" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-card-foreground">Project Type</label>
                <select className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:outline-none bg-background text-foreground">
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
                  placeholder="Tell us about your project..." 
                  className="border-border focus:border-primary min-h-[120px] bg-background text-foreground"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full group">
                Send Message
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