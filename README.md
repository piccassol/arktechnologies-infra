<div align="center">
  <img src="https://github.com/user-attachments/assets/your-uploaded-image-id" alt="ARK Technologies Logo" width="400"/>
</div>

# ARK Technologies Infrastructure

<div align="center">
  <p><em>Complete Marketing Automation Platform That Reduces Client Concentration Risk</em></p>

  <!-- Main Status Badges -->
  [![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/arktechnologiesai/deploys)
  [![Docker](https://img.shields.io/badge/docker-containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white)](http://localhost:3000)
  [![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/piccassol/arktechnologies-infra/actions)
  
  <!-- Technology Stack -->
  [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

  <!-- AI & ML -->
  [![Hugging Face](https://img.shields.io/badge/🤗%20Hugging%20Face-piccassol-FFD21E?style=for-the-badge)](https://huggingface.co/piccassol)
  [![Ollama](https://img.shields.io/badge/Ollama-piccassol-000000?style=for-the-badge&logo=ollama&logoColor=white)](https://ollama.ai/piccassol)
  [![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)

  <!-- Infrastructure -->
  [![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/)
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://postgresql.org/)
  [![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
  [![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)

  <!-- Status Badges -->
  ![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)
  ![Maintained](https://img.shields.io/badge/Maintained-Yes-green.svg?style=for-the-badge)
  ![Status](https://img.shields.io/badge/status-production--ready-brightgreen.svg?style=for-the-badge)
</div>

---

## About ARK Technologies

ARK Technologies is an enterprise marketing automation platform specifically designed to solve client concentration risk for high-value service businesses. We help companies like Flyleaf Print reduce their dangerous 90% revenue dependency on 2-3 major clients by automating qualified lead discovery and nurturing systems.

**The Problem We Solve**: Most service businesses have 70-90% of their revenue concentrated with just a few major clients. If one leaves, it's catastrophic. Our AI-powered automation finds and nurtures qualified prospects to diversify revenue streams and reduce business risk.

### Core Value Proposition
- Reduce client concentration risk from 90% to 45% through systematic lead diversification
- Replace expensive copywriters (save $6K/month) with AI-generated personalized outreach
- Discover qualified prospects through LinkedIn alumni networks and VC portfolios
- Automate appointment booking with 85%+ show rates through smart reminder sequences
- Generate 5-star reviews systematically across Google, Yelp, and Facebook

---

## Project Structure

```
arktechnologies-infra/
├── 📁 apps/
│   ├── 📁 landing-page/                    # Main website (arktechnologies.ai)
│   │   ├── app/
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx                   # Marketing landing page
│   │   ├── components/ui/                 # shadcn/ui components
│   │   ├── public/ark-logo.png           # ARK Technologies logo
│   │   ├── Dockerfile
│   │   └── package.json
│   ├── 📁 demo-platform/                   # Client demo interface (Port 3001)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── FlyleafDemo.tsx       # Flyleaf Print demo
│   │   │   │   ├── CRMDashboard.tsx      # Interactive dashboard
│   │   │   │   └── ui/                   # Shared UI components
│   │   │   └── app/
│   │   ├── Dockerfile
│   │   └── package.json
│   └── 📁 automation-engine/               # Core Python services
│       ├── src/
│       │   ├── lead_discovery/
│       │   │   ├── linkedin_scraper.py    # Alumni network discovery
│       │   │   ├── vc_portfolio_scanner.py # VC portfolio targeting
│       │   │   └── contact_enrichment.py  # Email/phone enrichment
│       │   ├── message_generation/
│       │   │   ├── ai_writer.py          # GPT-4 personalized outreach
│       │   │   ├── voice_training.py     # Client voice matching
│       │   │   └── personalization.py    # Dynamic content insertion
│       │   ├── workflow_automation/
│       │   │   ├── n8n_integration.py    # Workflow orchestration
│       │   │   ├── crm_sync.py          # Copper CRM integration
│       │   │   └── appointment_booking.py # Calendar management
│       │   └── analytics/
│       │       ├── roi_calculator.py     # Revenue impact analysis
│       │       ├── risk_analyzer.py      # Concentration risk metrics
│       │       └── performance_tracker.py # Campaign effectiveness
│       └── requirements.txt
├── 📁 infrastructure/                       # DevOps and deployment
│   ├── docker/
│   │   ├── docker-compose.yml            # Development environment
│   │   └── docker-compose.prod.yml       # Production deployment
│   ├── nginx/nginx.prod.conf             # Load balancer config
│   └── scripts/
│       ├── deploy.sh                     # Automated deployment
│       └── backup.sh                     # Database backups
├── 📁 data/                                # Industry-specific configurations
│   ├── industry-templates/
│   │   ├── law-firms.json               # Legal industry targeting
│   │   ├── contractors.json             # Construction/contracting
│   │   └── med-spas.json               # Healthcare/aesthetics
│   └── message-templates/
│       ├── initial-outreach/            # First contact templates
│       └── follow-up/                   # Nurture sequences
└── 📁 docs/                               # Documentation
    ├── business/
    │   ├── flyleaf-demo-strategy.md     # Client-specific strategies
    │   └── pricing-models.md            # Service delivery models
    └── technical/
        └
