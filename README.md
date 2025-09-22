# ARK Technologies Infrastructure

[![Docker](https://img.shields.io/badge/docker-containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white)](http://localhost:3000)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/arktechnologiesai/deploys)

## Project Structure

```
arktechnologies-infra/
├── 📁 apps/
│   ├── 📁 landing-page/                    # Main website (Next.js)
│   │   ├── app/
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   └── ui/
│   │   ├── public/
│   │   │   └── ark-logo.png
│   │   ├── Dockerfile
│   │   ├── next.config.js
│   │   └── package.json
│   ├── 📁 demo-platform/                   # Client demo interface
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── FlyleafDemo.tsx
│   │   │   │   ├── CRMDashboard.tsx
│   │   │   │   └── ui/
│   │   │   └── app/
│   │   ├── Dockerfile
│   │   └── package.json
│   └── 📁 automation-engine/               # Core Python services
│       ├── src/
│       │   ├── lead_discovery/
│       │   │   ├── linkedin_scraper.py
│       │   │   ├── vc_portfolio_scanner.py
│       │   │   └── contact_enrichment.py
│       │   ├── message_generation/
│       │   │   ├── ai_writer.py
│       │   │   ├── voice_training.py
│       │   │   └── personalization.py
│       │   ├── workflow_automation/
│       │   │   ├── n8n_integration.py
│       │   │   ├── crm_sync.py
│       │   │   └── appointment_booking.py
│       │   ├── analytics/
│       │   │   ├── roi_calculator.py
│       │   │   ├── risk_analyzer.py
│       │   │   └── performance_tracker.py
│       │   └── integrations/
│       │       ├── copper_crm.py
│       │       ├── calendly.py
│       │       └── email_providers.py
│       ├── requirements.txt
│       ├── Dockerfile
│       └── docker-compose.yml
├── 📁 packages/                            # Shared utilities
│   ├── 📁 ui-components/                   # Shared React components
│   │   ├── components/
│   │   │   ├── charts/
│   │   │   ├── forms/
│   │   │   └── layout/
│   │   └── package.json
│   ├── 📁 api-client/                      # API client library
│   │   ├── src/
│   │   │   ├── auth.ts
│   │   │   ├── leads.ts
│   │   │   ├── campaigns.ts
│   │   │   └── analytics.ts
│   │   └── package.json
│   └── 📁 business-logic/                  # Shared business rules
│       ├── src/
│       │   ├── pricing/
│       │   ├── risk-calculation/
│       │   └── industry-targeting/
│       └── package.json
├── 📁 infrastructure/                       # DevOps and deployment
│   ├── 📁 docker/
│   │   ├── docker-compose.yml
│   │   ├── docker-compose.prod.yml
│   │   └── nginx/
│   │       └── nginx.prod.conf
│   ├── 📁 scripts/
│   │   ├── deploy.sh
│   │   ├── backup.sh
│   │   └── migrate.sh
│   └── 📁 monitoring/
│       ├── grafana/
│       ├── prometheus/
│       └── alerts/
├── 📁 docs/                                # Documentation
│   ├── 📁 api/
│   │   ├── authentication.md
│   │   ├── lead-discovery.md
│   │   └── webhook-events.md
│   ├── 📁 deployment/
│   │   ├── docker-setup.md
│   │   ├── production-deployment.md
│   │   └── monitoring.md
│   ├── 📁 business/
│   │   ├── pricing-strategy.md
│   │   ├── industry-targeting.md
│   │   └── roi-calculations.md
│   └── 📁 demos/
│       ├── flyleaf-print-demo.md
│       ├── law-firm-demo.md
│       └── contractor-demo.md
├── 📁 data/                                # Data and configurations
│   ├── 📁 industry-templates/
│   │   ├── law-firms.json
│   │   ├── contractors.json
│   │   ├── med-spas.json
│   │   └── property-management.json
│   ├── 📁 message-templates/
│   │   ├── initial-outreach/
│   │   ├── follow-up/
│   │   └── appointment-reminders/
│   └── 📁 migrations/
│       └── database/
├── 📁 tests/                               # Testing suite
│   ├── 📁 unit/
│   ├── 📁 integration/
│   ├── 📁 e2e/
│   └── 📁 load/
├── 📁 .github/                             # CI/CD workflows
│   └── 📁 workflows/
│       ├── deploy-landing.yml
│       ├── deploy-demo.yml
│       ├── test-automation-engine.yml
│       └── security-scan.yml
├── 📄 README.md                           # This file
├── 📄 docker-compose.yml                  # Development environment
├── 📄 docker-compose.prod.yml             # Production environment
├── 📄 .gitignore
├── 📄 .env.example
└── 📄 LICENSE
```

## Services Architecture

### Frontend Services
- **Landing Page** (Port 3000): Marketing website at arktechnologies.ai
- **Demo Platform** (Port 3001): Interactive client demonstrations
- **CRM Dashboard** (Port 3002): Client portal and analytics

### Backend Services
- **Lead Discovery API** (Port 4000): LinkedIn scraping, VC portfolio scanning
- **Message Generation API** (Port 4001): AI-powered personalized outreach
- **Workflow Engine** (Port 4002): n8n integration and automation orchestration
- **Analytics API** (Port 4003): ROI calculation and risk analysis

### Infrastructure Services
- **Database** (Port 5432): PostgreSQL for data persistence
- **Redis** (Port 6379): Caching and session management
- **n8n** (Port 5678): Workflow automation interface
- **Grafana** (Port 3100): Monitoring and analytics dashboard

## Quick Start

### Development Environment

```bash
# Clone the repository
git clone https://github.com/piccassol/arktechnologies-infra.git
cd arktechnologies-infra

# Start all services
docker-compose up --build

# Access services
open http://localhost:3000  # Landing page
open http://localhost:3001  # Demo platform
open http://localhost:3002  # CRM dashboard
open http://localhost:5678  # n8n workflows
```

### Production Deployment

```bash
# Deploy to production
docker-compose -f docker-compose.prod.yml up -d

# Monitor services
docker-compose logs -f

# Scale services
docker-compose up --scale automation-engine=3
```

## Key Features

### Lead Discovery Engine
- **LinkedIn Scraping**: Automated prospect identification
- **VC Portfolio Scanning**: Target portfolio companies
- **Contact Enrichment**: Email finding and verification
- **Risk Analysis**: Client concentration assessment

### Message Generation
- **AI Writing**: GPT-powered personalized outreach
- **Voice Training**: Brand-specific tone matching
- **A/B Testing**: Message performance optimization
- **Industry Templates**: Pre-built messaging for verticals

### Automation Workflows
- **n8n Integration**: Visual workflow builder
- **CRM Synchronization**: Bi-directional data sync
- **Appointment Booking**: Calendar integration
- **Follow-up Sequences**: Multi-touch campaigns

### Analytics & Reporting
- **ROI Calculator**: Revenue impact measurement
- **Risk Analyzer**: Concentration risk assessment
- **Performance Tracking**: Campaign effectiveness
- **Client Dashboards**: Real-time analytics

## Pricing Packages

### Project Builds ($10K+)
- Complete automation stack implementation
- Custom CRM setup and integration
- Industry-specific workflow configuration
- 4-8 week implementation timeline

### Calm Waters ($750/mo)
- Basic automation and review management
- Email workflows and chatbot
- Monthly reporting and email support

### Rising Tide ($1.5-2K/mo) - Most Popular
- Multi-channel automation with analytics
- SMS integration and priority support
- Monthly optimization and advanced reporting

### Safe Harbor ($3.5K+/mo)
- Custom CRM with ERP integrations
- BI dashboards and dedicated support
- Custom workflows and API access

## Target Industries

### High-Value Service Businesses
- **Law Firms**: Case intake and client nurturing
- **Contractors**: Bid follow-up and project scheduling
- **Med Spas & Dental**: Appointment booking and review collection
- **Property Management**: Tenant communication automation
- **Professional Services**: Lead qualification and consultation scheduling

## Technology Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui
- **Deployment**: Netlify (staging), Docker (production)

### Backend
- **Runtime**: Python 3.9+
- **Framework**: FastAPI
- **Database**: PostgreSQL with Redis
- **Message Queue**: Redis with Celery

### DevOps
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions
- **Monitoring**: Grafana & Prometheus
- **Deployment**: Self-hosted Docker containers

### AI/ML
- **Language Models**: OpenAI GPT-4, local LLMs
- **Frameworks**: LangChain, Hugging Face
- **Vector Database**: ChromaDB for embeddings

## Environment Variables

```bash
# API Keys
OPENAI_API_KEY=sk-...
LINKEDIN_API_KEY=...
CALENDLY_API_KEY=...

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/arktech
REDIS_URL=redis://localhost:6379

# Services
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=secure_password

# Domain Configuration
DOMAIN=arktechnologies.ai
WEBHOOK_URL=https://arktechnologies.ai/webhooks
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by the ARK Technologies Team**

*Empowering businesses to reduce client concentration risk through intelligent automation*
