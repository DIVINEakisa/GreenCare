# GreenCycle Rwanda - Smart Waste Management Website

A modern, responsive, and professional website for GreenCycle Rwanda, a youth-led innovation project focused on improving waste management in Rwanda through smart waste separation at the source.

## 🌱 Overview

This website presents GreenCycle Rwanda as a scalable, innovative solution to Rwanda's waste management challenges. It educates users about the problem of poor waste separation in urban communities and demonstrates how the system works to transform waste into valuable resources.

## 📁 Project Structure

```
GreenCycle/
├── index.html          # Main HTML file with all pages
├── css/
│   └── styles.css      # Complete styling with eco-friendly theme
├── js/
│   └── script.js       # JavaScript functionality and interactivity
└── README.md           # This file
```

## 🎯 Features

### Pages Included

1. **Home Page**
   - Eye-catching hero section
   - Problem statement highlighting waste separation issues in Rwanda
   - Call-to-action buttons (Learn More, Join Pilot Program)
   - Floating animations and modern design

2. **About Page**
   - Mission statement
   - Vision for sustainable Rwanda
   - Core values: Innovation, Sustainability, Community, Scalability
   - Youth-led innovation focus

3. **How It Works Page**
   - 5-step process visualization
   - Smart bin detection explanation
   - Technology section (IoT Sensors, Mobile App, Data Analytics)
   - Clear step connectors and numbered progression

4. **Services Page**
   - Household subscription service
   - Schools waste management program (featured)
   - Business solutions for markets/restaurants
   - Benefits and pricing information
   - Feature lists for each service

5. **Pilot Page**
   - Current pilot status and phase
   - Smart dustbin prototype features
   - Role of pilot participants
   - Path to scale with timeline
   - Call-to-action for joining the program

6. **Contact Page**
   - Contact information for AKISA Divine
   - Phone, Email, WhatsApp links
   - Professional contact form with validation
   - WhatsApp quick chat button
   - Form data collection and storage

### Key Features

✅ **Fully Responsive Design**
- Mobile-first approach
- Desktop, tablet, and mobile optimized
- Hamburger menu for mobile navigation

✅ **Eco-Friendly Theme**
- Green color palette (#27ae60 primary green)
- Sustainability-focused design
- Clean and minimal interface

✅ **Interactive Elements**
- Smooth page navigation without page reloads
- Animated cards and transitions
- Hamburger menu toggle
- Form validation with user feedback
- Keyboard shortcuts (Alt+H, Alt+A, Alt+C)

✅ **Contact Form**
- Full Name, Email, Phone, Subject, Message fields
- Client-side validation
- Mock database storage (exampleDB)
- Success/error feedback messages
- Form reset after submission

✅ **Mobile Menu**
- Hamburger toggle
- Smooth transitions
- Auto-closes on link click

✅ **Database Integration (Mock)**
```javascript
exampleDB = {
    users: [],
    messages: [],
    subscriptions: [],
    feedback: []
}
```

## 🚀 Getting Started

### Quick Start

1. **Extract the project files** to your desired location
2. **Open `index.html`** in a modern web browser
3. **Navigate** using the menu or buttons

### No Installation Required
The website is built with pure HTML, CSS, and JavaScript. No build tools, frameworks, or dependencies needed. It works directly in any modern browser.

## 🎨 Design Features

### Color Palette
- **Primary Green**: #27ae60 (Main brand color)
- **Dark Green**: #1e8449 (Hover states)
- **Light Green**: #52be80 (Accents)
- **Lighter Green**: #d5f4e6 (Backgrounds)
- **Accent Green**: #16a085 (Highlights)
- **Text Dark**: #2c3e50 (Main text)
- **Text Light**: #7f8c8d (Secondary text)

### Typography
- Modern sans-serif font (Segoe UI)
- Clear hierarchy with responsive sizes
- Excellent readability on all devices

### Components
- Rounded buttons with hover effects
- Card-based layouts
- Grid systems for responsive layout
- Floating animations
- Smooth transitions throughout

## 📝 Content Sections

### Problem Statement
- Mixed waste crisis in urban communities
- Rapid urbanization challenges
- Environmental impact and resource waste

### Solution
- Waste separation at source
- Smart bin system with IoT
- Collection and processing
- Value creation through recycling

### Services
- **Households**: Smart bins, bi-weekly collection, tracking
- **Schools**: Educational programs, student leadership, impact certificates
- **Businesses**: Commercial-grade solutions, daily collection, compliance reporting

### Pilot Program
- Current testing phase
- Smart dustbin prototype features
- Community feedback importance
- 3-year scaling plan

## 📞 Contact Information

**Contact Person**: AKISA Divine
- **Phone**: +250 792 502 568
- **Email**: akisadivine23@gmail.com
- **WhatsApp**: +250 792 502 568

## 💾 Data Management

### Form Submissions
All contact form submissions are stored in the browser's mock database:
```javascript
// Access submitted messages in the console:
console.log(exampleDB.messages);
```

### Exporting Data
To export collected data as JSON:
```javascript
// Run in browser console:
exportDatabase();
```

## 🔧 Customization

### Updating Contact Information
Edit the contact information in the **Contact Page** section of `index.html`:
- Line ~630: Contact Person name
- Line ~635: Phone number
- Line ~640: Email address
- Line ~645: WhatsApp link

### Changing Colors
Modify CSS variables in `css/styles.css`:
```css
:root {
    --primary-green: #27ae60;  /* Main brand color */
    --dark-green: #1e8449;     /* Darker shade */
    /* ... other colors ... */
}
```

### Adding More Pages
1. Add a new `<section>` block in `index.html`
2. Assign a unique `id` attribute
3. Add navigation link in the navbar
4. Styling will automatically apply

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly buttons and links
- Mobile hamburger menu
- Optimized font sizes
- Proper viewport settings

## 🔐 Security Notes

- Contact form data is stored locally (in browser memory)
- No external API calls
- No personal data transmission to external servers
- For production: Consider integrating backend for data storage

## 🚀 Deployment Options

### 1. Static Hosting (Recommended for this site)
- **GitHub Pages** (free)
- **Netlify** (free)
- **Vercel** (free)
- **Surge** (free)

### 2. Traditional Web Hosting
- Upload files via FTP
- Host on any web server
- No special requirements

### 3. Local Testing
- Simply open `index.html` in a browser
- Or use a local server:
  ```bash
  # Python 3
  python -m http.server 8000
  
  # Python 2
  python -m SimpleHTTPServer 8000
  
  # Node.js (with http-server)
  npx http-server
  ```

## 📊 Analytics Integration

The website includes built-in page view tracking:
```javascript
// Page views are tracked automatically
// View in browser console:
console.log(pageViews);
```

To add external analytics (Google Analytics, etc.), add the tracking code to `<head>` in `index.html`.

## ⌨️ Keyboard Shortcuts

- **Alt + H**: Navigate to Home
- **Alt + A**: Navigate to About
- **Alt + C**: Navigate to Contact

## 🎯 Next Steps

### For Development
1. Add backend integration for real form submissions
2. Connect to email service (SendGrid, Mailgun)
3. Add admin dashboard for message management
4. Implement user authentication for subscriptions
5. Add mobile app links

### For Production
1. Set up domain name
2. Configure SSL/TLS certificate
3. Optimize images for faster loading
4. Set up regular backups
5. Implement error logging
6. Add SEO metadata

## 📄 File Sizes

- `index.html`: ~35 KB
- `css/styles.css`: ~18 KB
- `js/script.js`: ~8 KB
- **Total**: ~61 KB (very lightweight)

## 🤝 Support & Contact

For technical support or inquiries about GreenCycle Rwanda:

- **Phone**: +250 792 502 568
- **Email**: akisadivine23@gmail.com
- **WhatsApp**: [Chat via WhatsApp](https://wa.me/250792502568)

## 📜 License

This website is created for GreenCycle Rwanda. All rights reserved.

## 🌍 About GreenCycle Rwanda

GreenCycle Rwanda is a youth-led innovation project dedicated to improving waste management in Rwanda through:
- Smart waste separation at the source
- Community engagement and education
- Environmental sustainability
- Scalable, innovative solutions
- Transformation of waste into valuable resources

---

**Built with ❤️ for a cleaner, more sustainable Rwanda.**

Last Updated: April 2024
