import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Cookie, UserCheck, FileText, Mail, ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Personal information you provide (name, email, contact details)",
        "Usage data and analytics to improve our services",
        "Device information and browser data",
        "Cookies and similar tracking technologies"
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "Provide and maintain our services",
        "Communicate with you about updates and support",
        "Analyze usage patterns to improve user experience",
        "Comply with legal obligations and protect our rights"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content: [
        "Industry-standard encryption for data transmission",
        "Secure servers with regular security audits",
        "Limited access to personal data on need-to-know basis",
        "Regular security updates and monitoring"
      ]
    },
    {
      icon: <Cookie className="w-6 h-6" />,
      title: "Cookies & Tracking",
      content: [
        "Essential cookies for website functionality",
        "Analytics cookies to understand user behavior",
        "Marketing cookies for personalized content",
        "You can manage cookie preferences anytime"
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "Access and review your personal data",
        "Request correction of inaccurate information",
        "Delete your account and associated data",
        "Opt-out of marketing communications"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Contact Us",
      content: [
        "Email: privacy@neuware.com",
        "Response time: Within 48 hours",
        "Data Protection Officer available",
        "Regular policy updates and notifications"
      ]
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
                <Shield className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Your privacy is our priority. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>Last updated: August 2025</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
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
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Welcome to NeuWare</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At NeuWare, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
              website or use our services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy. 
              We will not use or share your information with anyone except as described in this Privacy Policy.
            </p>
          </Card>
        </motion.div>

        {/* Privacy Sections */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full p-6 bg-card/30 backdrop-blur-sm border-white/10 hover:bg-card/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-white/10">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Questions About Your Privacy?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:privacy@neuware.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Privacy Team
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
