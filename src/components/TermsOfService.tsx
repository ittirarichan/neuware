import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, Shield, AlertTriangle, Users, Gavel, ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using NeuWare services, you accept these terms",
        "These terms constitute a legally binding agreement",
        "If you disagree with any part, please discontinue use",
        "We may update these terms with notice to users"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Responsibilities",
      content: [
        "Provide accurate and complete information",
        "Maintain confidentiality of your account credentials",
        "Use services only for lawful purposes",
        "Respect intellectual property rights of others"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Service Availability",
      content: [
        "Services provided on 'as is' and 'as available' basis",
        "We strive for 99.9% uptime but cannot guarantee uninterrupted service",
        "Scheduled maintenance will be communicated in advance",
        "Emergency maintenance may occur without prior notice"
      ]
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "Intellectual Property",
      content: [
        "All content and materials are owned by NeuWare or licensors",
        "Users retain rights to their original content and data",
        "Limited license granted for personal and business use",
        "Unauthorized reproduction or distribution is prohibited"
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Limitation of Liability",
      content: [
        "NeuWare's liability is limited to the amount paid for services",
        "We are not liable for indirect, incidental, or consequential damages",
        "Users are responsible for data backup and security",
        "Force majeure events are excluded from liability"
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Governing Law",
      content: [
        "These terms are governed by applicable local laws",
        "Disputes will be resolved through binding arbitration",
        "Courts in our jurisdiction have exclusive authority",
        "Class action lawsuits are waived by using our services"
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
                <Scale className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Please read these terms carefully before using our services. They outline your rights and responsibilities.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Effective: August 2025</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4" />
                <span>Legally Binding</span>
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
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Agreement Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your use of NeuWare's website, applications, and services. 
              By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon 
              posting. Your continued use of our services constitutes acceptance of any modifications.
            </p>
          </Card>
        </motion.div>

        {/* Terms Sections */}
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
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Questions About These Terms?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you have any questions about these Terms of Service or need clarification on any provisions, 
              please contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:legal@neuware.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Scale className="w-4 h-4" />
                Contact Legal Team
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;