'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Calendar,
  Mail,
  Target,
  Building2,
  Phone,
  CheckCircle,
  Clock,
  DollarSign,
  ArrowRight,
  Zap
} from 'lucide-react'

const FlyleafDemo = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [automationProgress, setAutomationProgress] = useState(0)
  const [activeLeads, setActiveLeads] = useState([])
  
  const mockLeads = [
    {
      name: "Sarah Chen",
      title: "Supply Chain Director",
      company: "Former Casper → Freelance",
      email: "sarah.chen@supplyconsult.io",
      confidence: 92,
      status: "High Priority",
      tags: ["Supply Chain", "DTC Expert", "Casper Alumni"]
    },
    {
      name: "Mike Rodriguez",
      title: "Operations Consultant", 
      company: "Pack & Print Solutions",
      email: "m.rodriguez@packprint.co",
      confidence: 87,
      status: "Qualified",
      tags: ["Operations", "Print Industry", "Multi-Brand"]
    },
    {
      name: "Lisa Park",
      title: "Packaging Manager",
      company: "Branch Furniture",
      email: "lisa.park@branchfurn.com", 
      confidence: 83,
      status: "Warm Lead",
      tags: ["Packaging", "Growing Brand", "Current Need"]
    }
  ]

  const messageTemplates = [
    {
      subject: "Quick question about print coordination",
      preview: "Hi Sarah, I noticed your background coordinating supply chains at Casper. We help consultants like you deliver flawless print projects...",
      personalization: "Casper alumni connection, supply chain expertise"
    },
    {
      subject: "Helping ops consultants look good",
      preview: "Mike, saw your work with multi-brand packaging. We make consultants' lives easier with seamless print coordination...",
      personalization: "Multi-brand experience, operations focus"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setAutomationProgress((prev) => (prev < 100 ? prev + 2 : 0))
    }, 100)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (currentStep === 1) {
      const leadTimer = setInterval(() => {
        setActiveLeads(prev => {
          if (prev.length < mockLeads.length) {
            return [...prev, mockLeads[prev.length]]
          }
          return prev
        })
      }, 1000)
      return () => clearInterval(leadTimer)
    }
  }, [currentStep])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* ARK Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
            <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="bg" cx="50%" cy="50%">
                  <stop offset="0%" style="stop-color:#1e1b4b"/>
                  <stop offset="100%" style="stop-color:#0f0f23"/>
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#bg)"/>
              <path d="M600 200 L500 400 L700 400 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
              <circle cx="550" cy="320" r="3" fill="white"/>
              <circle cx="600" cy="300" r="3" fill="white"/>
              <circle cx="650" cy="320" r="3" fill="white"/>
              <path d="M550 320 Q600 280 650 320" stroke="rgba(255,255,255,0.3)" stroke-width="2" fill="none"/>
              <path d="M580 340 Q600 360 620 340" stroke="rgba(255,255,255,0.3)" stroke-width="2" fill="none"/>
            </svg>
          `)}`
        }}
      />
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-white text-sm font-medium">Live Demo - Flyleaf Print Automation</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">From 90% Risk to Steady Growth</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Watch how AI automation finds qualified print consultants and brands automatically
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-black/20 backdrop-blur-md border border-white/20 rounded-full p-1">
            {['Discovery', 'Outreach', 'Results'].map((step, index) => (
              <Button
                key={step}
                variant={currentStep === index ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentStep(index)}
                className={`rounded-full px-6 ${
                  currentStep === index 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {step}
              </Button>
            ))}
          </div>
        </div>

        {/* Demo Content */}
        <div className="max-w-6xl mx-auto">
          {currentStep === 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Lead Discovery */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    <span>Smart Lead Discovery</span>
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    AI finds supply-chain consultants and growing DTC brands
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-sm">Scanning LinkedIn for Casper alumni</span>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                        Found 12
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-sm">Checking VC portfolio companies</span>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        Found 47
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-sm">Identifying packaging managers</span>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                        Found 23
                      </Badge>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Discovery Progress</span>
                      <span>{automationProgress}%</span>
                    </div>
                    <Progress value={automationProgress} className="bg-white/10" />
                  </div>
                </CardContent>
              </Card>

              {/* Risk Reduction Calculator */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span>Risk Reduction</span>
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    From 90% concentration to diversified revenue
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-1">90%</div>
                      <div className="text-sm text-white/70">Current Risk Level</div>
                      <div className="text-xs text-white/50">Casper + Farmer's Dog</div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-white/50" />
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-1">45%</div>
                      <div className="text-sm text-white/70">Target Risk Level</div>
                      <div className="text-xs text-white/50">With 3-5 new major clients</div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Monthly Outreach Volume</span>
                        <span className="text-blue-400">200 contacts</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Expected Reply Rate</span>
                        <span className="text-blue-400">15%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Monthly Meetings</span>
                        <span className="text-green-400">30 meetings</span>
                      </div>
                      <div className="flex justify-between text-sm font-medium">
                        <span>New Clients/Quarter</span>
                        <span className="text-green-400">2-3 clients</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentStep === 1 && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Live Lead Feed */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span>Qualified Leads Found</span>
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    AI-verified contacts with high conversion probability
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {activeLeads.map((lead, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 animate-in slide-in-from-bottom-2"
                      >
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-blue-500/20 text-blue-400 border border-blue-500/30">
                            {lead.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <div className="font-medium text-sm">{lead.name}</div>
                            <Badge 
                              variant="secondary" 
                              className="bg-green-500/20 text-green-400 border-green-500/30 text-xs"
                            >
                              {lead.confidence}% match
                            </Badge>
                          </div>
                          <div className="text-xs text-white/70">{lead.title}</div>
                          <div className="text-xs text-white/50">{lead.company}</div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {lead.tags.map((tag) => (
                              <Badge 
                                key={tag}
                                variant="outline"
                                className="text-xs border-white/20 text-white/70"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AI Message Generation */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-purple-400" />
                    <span>AI Message Generation</span>
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Personalized outreach that sounds like Joe wrote it
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {messageTemplates.map((template, index) => (
                      <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm font-medium">{template.subject}</div>
                          <Badge variant="outline" className="border-purple-500/30 text-purple-400 text-xs">
                            95% Joe's voice
                          </Badge>
                        </div>
                        <div className="text-sm text-white/70 mb-3 italic">
                          "{template.preview}"
                        </div>
                        <div className="text-xs text-white/50">
                          Personalization: {template.personalization}
                        </div>
                      </div>
                    ))}
                    
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                      <div className="flex items-center space-x-2 text-blue-400 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        <span>Replacing $6,000/month copywriter with AI</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid md:grid-cols-3 gap-6">
              {/* Key Metrics */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span>Revenue Impact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">$180K</div>
                      <div className="text-sm text-white/70">New Revenue/Quarter</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Cost Savings</span>
                        <span className="text-green-400">$6K/mo</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>ROI</span>
                        <span className="text-green-400">900%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Payback Period</span>
                        <span className="text-green-400">30 days</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Activity Feed */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span>Recent Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Sarah Chen replied</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>Meeting booked for Tuesday</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span>Follow-up sent to Mike R.</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-orange-400" />
                      <span>3 new leads qualified</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader>
                  <CardTitle>Ready to Start?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-white/70">
                    Transform Flyleaf from 90% risk to steady growth in 30 days.
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Professional Package - $20K
                    </Button>
                    <div className="text-xs text-center text-white/50">
                      Everything Flyleaf needs to diversify revenue
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Demo Controls */}
        <div className="flex justify-center mt-8 space-x-4">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="border-white/20 text-white hover:bg-white/10"
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentStep(Math.min(2, currentStep + 1))}
            disabled={currentStep === 2}
            className="bg-white text-black hover:bg-white/90"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FlyleafDemo
