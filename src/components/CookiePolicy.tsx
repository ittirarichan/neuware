import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, BarChart3, Target, Shield, Info, ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  const cookieTypes = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Essential Cookies",
      description: "Required for basic website functionality",
      examples: [
        "Session management and user authentication",
        "Shopping cart and checkout functionality",
        "Security and fraud prevention",
        "Load balancing and performance optimization"
      ],
      retention: "Session or up to 1 year",
      canDisable: false
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      examples: [
        "Google Analytics for traffic analysis",
        "Page view and user journey tracking",
        "Performance monitoring and optimization",
        "A/B testing and feature usage statistics"
      ],
      retention: "Up to 2 years",
      canDisable: true
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Marketing Cookies",
      description: "Used to deliver personalized advertisements",
      examples: [
        "Social media integration and sharing",
        "Targeted advertising and retargeting",
        "Campaign effectiveness measurement",
        "Cross-platform user identification"
      ],
      retention: "Up to 1 year",
      canDisable: true
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Preference Cookies",
      description: "Remember your settings and preferences",
      examples: [
        "Language and region preferences",
        "Theme and display settings",
        "Form data and user preferences",
        "Accessibility and customization options"
      ],
      retention: "Up to 1 year",
      canDisable: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      {/* Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link to="/">
          <Button variant="ghost" className="bg-background/80 backdrop-blur-sm border border-white/10 hover:bg-background/90">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />
        <div className="container mx-auto px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Cookie className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Learn about how we use cookies and similar technologies to enhance your browsing experience.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4" />
                <span>Last updated: August 2025</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <div className="flex items-center gap-2">
                <Cookie className="w-4 h-4" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-20">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="p-8 mt-10 bg-card/50 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cookies are small text files that are stored on your device when you visit our website. They help us 
              provide you with a better browsing experience by remembering your preferences and analyzing how you use our site.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We use both first-party cookies (set by NeuWare) and third-party cookies (set by our partners) to 
              enhance functionality, analyze performance, and deliver personalized content.
            </p>
          </Card>
        </motion.div>

        {/* Cookie Types */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-center mb-12 text-foreground"
          >
            Types of Cookies We Use
          </motion.h2>
          
          <div className="space-y-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="p-6 bg-card/30 backdrop-blur-sm border-white/10 hover:bg-card/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-foreground">{type.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          type.canDisable 
                            ? 'bg-yellow-500/20 text-yellow-400' 
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {type.canDisable ? 'Optional' : 'Required'}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{type.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Examples:</h4>
                          <ul className="space-y-1">
                            {type.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Retention Period:</h4>
                          <p className="text-sm text-muted-foreground">{type.retention}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Managing Cookies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-white/10">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Managing Your Cookie Preferences</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>You have several options to manage cookies:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies through their settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Cookie Banner:</strong> Use our cookie consent banner to customize your preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Opt-out Tools:</strong> Use industry opt-out tools for advertising cookies</span>
                </li>
              </ul>
              <p className="text-sm">
                Note: Disabling essential cookies may affect website functionality and your user experience.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-white/10">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Questions About Cookies?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you have any questions about our use of cookies or need help managing your preferences, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:privacy@neuware.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Cookie className="w-4 h-4" />
                Contact Privacy Team
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;