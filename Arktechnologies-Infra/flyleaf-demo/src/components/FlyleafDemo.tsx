'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Target, TrendingUp, ArrowRight } from 'lucide-react'

const FlyleafDemo = () => {
  const [automationProgress, setAutomationProgress] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setAutomationProgress((prev) => (prev < 100 ? prev + 2 : 0))
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Flyleaf Print Demo</h1>
          <p className="text-white/80 text-lg">From 90% Risk to Steady Growth</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-400" />
                <span>Smart Lead Discovery</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-white/5 rounded">
                  <span>Casper alumni found</span>
                  <Badge className="bg-green-500/20 text-green-400">12</Badge>
                </div>
                <Progress value={automationProgress} className="bg-white/10" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>Risk Reduction</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div>
                  <div className="text-3xl font-bold text-red-400">90%</div>
                  <div className="text-sm">Current Risk</div>
                </div>
                <ArrowRight className="w-6 h-6 mx-auto" />
                <div>
                  <div className="text-3xl font-bold text-green-400">45%</div>
                  <div className="text-sm">Target Risk</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default FlyleafDemo