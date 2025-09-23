'use client';
import React, { JSX, useState } from 'react';
import { 
  Brain, 
  Code, 
  Users, 
  ChevronRight,
  Target,
  Gauge,
  Shield,
  ArrowRight,
  Settings,
  BarChart,
  MessagesSquare,
  Bot,
  Zap,
  Database,
  MessageCircle
} from 'lucide-react';

// Service Card Component
interface Service {
  id: number;
  title: string;
  shortDesc: string;
  icon: JSX.Element;
  keyFeatures: { icon: JSX.Element; title: string; description: string }[];
  deliverables: string[];
}

const ServiceCard = ({ service, isExpanded, onToggle }: { service: Service, isExpanded: boolean, onToggle: () => void }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-sm transition-all duration-300 cursor-pointer
        ${isExpanded ? 'border-l-4 border-l-purple-500' : 'border hover:border-purple-200'}
      `}
      onClick={onToggle}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg ${isExpanded ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-purple-50'}`}>
              {React.cloneElement(service.icon, { 
                className: `w-6 h-6 ${isExpanded ? 'text-white' : 'text-purple-500'}`
              })}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.shortDesc}</p>
            </div>
          </div>
          <ChevronRight className={`w-5 h-5 text-purple-500 transition-transform duration-300
            ${isExpanded ? 'rotate-90' : ''}`} />
        </div>

        <div className={`transition-all duration-300 overflow-hidden
          ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-6 pt-4">
            <div className="grid md:grid-cols-2 gap-4">
              {service.keyFeatures.map((feature: { icon: JSX.Element, title: string, description: string }, idx: number) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    {React.cloneElement(feature.icon, { className: "w-4 h-4 text-purple-500" })}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Deliverables</h4>
              <ul className="space-y-2">
                {service.deliverables.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <ArrowRight className="w-4 h-4 text-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPreview = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "AI Strategy & Implementation",
      shortDesc: "Transform your business with cutting-edge AI solutions",
      icon: <Brain />,
      keyFeatures: [
        {
          icon: <Target />,
          title: "AI Readiness Assessment",
          description: "Comprehensive evaluation of your organization's AI adoption potential"
        },
        {
          icon: <Settings />,
          title: "Implementation Roadmap",
          description: "Detailed planning for integrating AI into existing workflows"
        },
        {
          icon: <BarChart />,
          title: "ROI Analysis",
          description: "Data-driven evaluation of AI investment opportunities"
        },
        {
          icon: <Shield />,
          title: "Risk Management",
          description: "Identifying and mitigating AI-related risks"
        }
      ],
      deliverables: [
        "Custom AI strategy document",
        "Technical requirements specification",
        "Implementation timeline",
        "ROI projection report",
        "Risk assessment and mitigation plan"
      ]
    },
    {
      id: 2,
      title: "System Architecture Design",
      shortDesc: "Build scalable, high-performance technical solutions",
      icon: <Code />,
      keyFeatures: [
        {
          icon: <Gauge />,
          title: "Performance Optimization",
          description: "Achieve sub-300ms response times at scale"
        },
        {
          icon: <Settings />,
          title: "Infrastructure Planning",
          description: "Cloud-native architecture with optimal resource utilization"
        },
        {
          icon: <Shield />,
          title: "Security Architecture",
          description: "Robust security measures and compliance frameworks"
        },
        {
          icon: <BarChart />,
          title: "Scalability Design",
          description: "Systems that grow seamlessly with your user base"
        }
      ],
      deliverables: [
        "Detailed architecture documentation",
        "Infrastructure as Code templates",
        "Performance optimization report",
        "Security compliance checklist",
        "Scaling strategy document"
      ]
    },
    {
      id: 3,
      title: "Technical Team Leadership",
      shortDesc: "Build and mentor high-performing engineering teams",
      icon: <Users />,
      keyFeatures: [
        {
          icon: <Target />,
          title: "Team Assessment",
          description: "Evaluate and optimize team structure and capabilities"
        },
        {
          icon: <Settings />,
          title: "Process Implementation",
          description: "Establish efficient development workflows"
        },
        {
          icon: <Shield />,
          title: "Quality Assurance",
          description: "Implement robust QA practices and metrics"
        },
        {
          icon: <BarChart />,
          title: "Performance Tracking",
          description: "Data-driven team performance optimization"
        }
      ],
      deliverables: [
        "Team structure recommendations",
        "Process documentation",
        "Performance metrics dashboard",
        "Training and mentorship plan",
        "Quarterly goals and OKRs"
      ]
    },
    {
      id: 4,
      title: "Build AI Agents",
      shortDesc: "Create intelligent, autonomous AI agents for your business",
      icon: <Bot />,
      keyFeatures: [
        {
          icon: <MessageCircle />,
          title: "Conversational AI",
          description: "Natural language understanding and contextual responses"
        },
        {
          icon: <Brain />,
          title: "Multi-Agent Systems",
          description: "Coordinated AI agents working together on complex tasks"
        },
        {
          icon: <Database />,
          title: "RAG Integration",
          description: "Knowledge-aware agents with real-time data access"
        },
        {
          icon: <Zap />,
          title: "Workflow Automation",
          description: "End-to-end process automation with intelligent decision making"
        }
      ],
      deliverables: [
        "Custom AI agent architecture",
        "Training data preparation and fine-tuning",
        "Integration with existing systems",
        "Performance monitoring dashboard",
        "Documentation and maintenance guide"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">Aankit Roy</span>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="/services" className="text-purple-600 font-semibold">Services</a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a>
              <a href="/testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
            </div>
          </nav>
        </div>
      </header>

      <div className="p-8">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Transform Your Business with
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {' '}Expert Services
          </span>
        </h1>
        <p className="text-xl text-gray-600">
          From AI strategy to technical leadership, I provide comprehensive solutions
          to help your organization thrive in the digital age.
        </p>
      </div>

      {/* Services Section */}
      <div className="space-y-6 max-w-4xl mx-auto mb-16">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isExpanded={expandedService === service.id}
            onToggle={() => setExpandedService(
              expandedService === service.id ? null : service.id
            )}
          />
        ))}
      </div>

      {/* Engagement Process */}
      <div className="py-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Engagement Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto px-8">
          {[
            {
              icon: <MessagesSquare className="w-6 h-6 text-purple-600" />,
              title: "Initial Consultation",
              description: "Deep dive into your challenges and objectives"
            },
            {
              icon: <Target className="w-6 h-6 text-blue-600" />,
              title: "Strategy Development",
              description: "Custom solution design aligned with your goals"
            },
            {
              icon: <Settings className="w-6 h-6 text-purple-600" />,
              title: "Implementation",
              description: "Systematic execution with regular checkpoints"
            },
            {
              icon: <BarChart className="w-6 h-6 text-blue-600" />,
              title: "Optimization",
              description: "Continuous improvement and refinement"
            }
          ].map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-16 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss how my services can help you achieve your technical and business objectives.
        </p>
        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
          <MessagesSquare className="w-5 h-5" />
          Schedule a Free Consultation
        </button>
      </div>
      </div>
    </div>
  );
};

export default ServicesPreview;