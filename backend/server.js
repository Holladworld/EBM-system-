const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'https://ebm-landing.vercel.app']
}));
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', (req, res) => {
    try {
        const { name, email, company, message, subject, phone } = req.body;
        
        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'Name, email, and message are required' 
            });
        }

        console.log('📧 Contact form submission received:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Company:', company || 'Not provided');
        console.log('Subject:', subject || 'Not provided');
        console.log('Phone:', phone || 'Not provided');
        console.log('Message:', message);
        
        // Simulate processing
        setTimeout(() => {
            res.json({ 
                success: true, 
                message: 'Thank you for your message! We will contact you shortly.' 
            });
        }, 1000);
        
    } catch (error) {
        console.error('❌ Contact form error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error. Please try again later.' 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'EBM Backend Server is running',
        timestamp: new Date().toISOString() 
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 EBM Backend Server running on port ${PORT}`);
});