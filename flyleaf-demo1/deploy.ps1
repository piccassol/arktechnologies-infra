# PowerShell Deployment Script for Flyleaf Demo

Write-Host "🚀 DEPLOYING FLYLEAF DEMO" -ForegroundColor Green
Write-Host "========================" -ForegroundColor Green

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Blue
npm install

# Check if Docker is running
try {
    docker --version | Out-Null
    Write-Host "🐳 Starting Docker containers..." -ForegroundColor Blue
    docker-compose up -d
    
    Write-Host ""
    Write-Host "✅ DEPLOYMENT COMPLETE!" -ForegroundColor Green
    Write-Host "======================="
    Write-Host "🌐 Demo URL: http://localhost:3000" -ForegroundColor Cyan
    Write-Host "🏥 Health Check: http://localhost:3000/health" -ForegroundColor Cyan
    Write-Host "📊 API Stats: http://localhost:3000/api/demo-stats" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "💰 READY TO CLOSE FLYLEAF! 💰" -ForegroundColor Yellow
    
} catch {
    Write-Host "⚠️  Docker not available, starting with Node.js..." -ForegroundColor Yellow
    npm start
}
