const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// Main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'READY TO CLOSE DEALS',
    timestamp: new Date().toISOString(),
    demo: 'Flyleaf CRM Pro',
    company: 'ArkTechnologies',
    message: 'Demo is live and ready to impress!'
  });
});

// API endpoint for live demo data
app.get('/api/demo-stats', (req, res) => {
  res.json({
    leads_today: Math.floor(Math.random() * 5) + 18,
    revenue_growth: '+127%',
    active_sequences: 4,
    meetings_booked: Math.floor(Math.random() * 3) + 8
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log('\nFLYLEAF DEMO IS LIVE!');
  console.log('========================');
  console.log('Demo URL: http://localhost:' + PORT);
  console.log('Health Check: http://localhost:' + PORT + '/health');
  console.log('API Stats: http://localhost:' + PORT + '/api/demo-stats');
  console.log('\nREADY TO CLOSE FLYLEAF!\n');
});
