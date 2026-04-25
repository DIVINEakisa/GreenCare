# GreenCycle Rwanda - Quick Reference Guide

Fast reference for common updates and customizations.

## 📝 Quick Updates

### Update Contact Information

**File**: `index.html` (Search for "Contact Page" section)

```html
<!-- Line ~630 -->
<h3>Contact Person</h3>
<p>AKISA Divine</p>

<!-- Line ~635 -->
<h3>Phone</h3>
<p><a href="tel:+250792502568">+250 792 502 568</a></p>

<!-- Line ~640 -->
<h3>Email</h3>
<p><a href="mailto:akisadivine23@gmail.com">akisadivine23@gmail.com</a></p>

<!-- Line ~645 -->
<h3>WhatsApp</h3>
<p><a href="https://wa.me/250792502568" target="_blank">Chat with us</a></p>
```

### Change Brand Colors

**File**: `css/styles.css` (Top of file)

```css
:root {
    --primary-green: #27ae60;      /* Change this */
    --dark-green: #1e8449;         /* Change this */
    --light-green: #52be80;        /* Change this */
    --lighter-green: #d5f4e6;      /* Change this */
    --accent-green: #16a085;       /* Change this */
    /* ... rest of colors ... */
}
```

**Color Palette Suggestions**:
- Ocean Blue: #3498db, #2980b9, #5dade2, #d6eaf8
- Purple: #9b59b6, #8e44ad, #d7bde2, #ebdef0
- Teal: #1abc9c, #16a085, #a3e4d7, #d5f4e6

### Update Page Content

**File**: `index.html`

Find the section by its ID:
- `#home` - Home page
- `#about` - About page
- `#how-it-works` - How it works
- `#services` - Services
- `#pilot` - Pilot program
- `#contact` - Contact page

Simply edit the text within each section.

### Change Logo/Brand Name

**File**: `index.html` (Line ~11)

```html
<div class="nav-brand">
    <i class="fas fa-leaf"></i>
    <span>GreenCycle Rwanda</span>  <!-- Change this -->
</div>
```

---

## 🎨 Common Customizations

### Add New Service Card

**File**: `index.html` (Find Services section `#services`)

Copy this template and add to `.services-grid`:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-icon-name"></i>  <!-- Change icon -->
    </div>
    <h3>Service Name</h3>
    <p>Service description goes here.</p>
    <ul class="service-features">
        <li><i class="fas fa-check"></i> Feature 1</li>
        <li><i class="fas fa-check"></i> Feature 2</li>
        <li><i class="fas fa-check"></i> Feature 3</li>
    </ul>
    <p class="service-pricing">Pricing info here</p>
</div>
```

**Font Awesome Icons**: https://fontawesome.com/icons

### Add New Team Member

**File**: `index.html` (In About section)

Add to `.values-grid`:

```html
<div class="value-item">
    <i class="fas fa-user"></i>
    <h3>Name</h3>
    <p>Role/Description</p>
</div>
```

### Update Pricing

**File**: `index.html` (Services section)

Change `.service-pricing` text:
```html
<p class="service-pricing">Your new pricing here</p>
```

---

## 📧 Email Setup Options

### Option 1: FormSubmit (No Code Required)

1. Find contact form in `index.html` (~Line 600)
2. Change form tag to:
```html
<form action="https://formsubmit.co/your-email@gmail.com" method="POST">
```
3. Done! Form submissions go to your email

### Option 2: Add Success Message

After form submission, redirect to thank you page:

```html
<form action="https://formsubmit.co/your-email@gmail.com" method="POST">
    <!-- form fields -->
    <input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html">
</form>
```

### Option 3: Custom Email Handler

**File**: `js/script.js` (~Line 30)

Replace with your email API integration:

```javascript
function handleContactForm(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    
    // Send to your backend/email service
    fetch('https://your-api.com/send-email', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData))
    });
}
```

---

## 🔍 Find & Replace Guide

### Find Section Headers

Search in `index.html` for these IDs to find sections:

```
<!-- Home Page -->        search: <section id="home"
<!-- About Page -->       search: <section id="about"
<!-- How It Works -->     search: <section id="how-it-works"
<!-- Services Page -->    search: <section id="services"
<!-- Pilot Page -->       search: <section id="pilot"
<!-- Contact Page -->     search: <section id="contact"
<!-- Footer -->           search: <footer
```

### Common Text to Update

| What | Where | Search |
|------|-------|--------|
| Brand Name | Multiple | "GreenCycle Rwanda" |
| Contact Email | Multiple | "akisadivine23@gmail.com" |
| Phone Number | Multiple | "+250 792 502 568" |
| Mission Statement | About | "To improve waste management" |
| Vision Statement | About | "A clean and sustainable Rwanda" |

---

## 🎯 Adding New Pages

### Step 1: Create HTML Section

```html
<section id="new-page" class="page">
    <div class="container">
        <h1>New Page Title</h1>
        <!-- Your content here -->
    </div>
</section>
```

### Step 2: Add Navigation Link

In navbar section:
```html
<a href="#new-page" class="nav-link" onclick="navigateTo('new-page')">New Page</a>
```

### Step 3: Add Navigation Function

Already supported! Just use:
```javascript
navigateTo('new-page')
```

---

## 🐛 Quick Debug Tips

### Check Console Errors
1. Press `F12` in browser
2. Click "Console" tab
3. Fix any red error messages

### Test Form Submission
Open console and check:
```javascript
console.log(exampleDB.messages)  // View all messages
```

### Check Page Navigation
```javascript
// In console, navigate to any page:
navigateTo('about')
navigateTo('services')
navigateTo('contact')
```

### View Analytics
```javascript
// In console:
console.log(pageViews)
```

---

## 📱 Mobile Testing

### Test Responsive Design

1. **Chrome/Firefox**: Press `F12` → Click responsive icon
2. **Safari**: Develop menu → Enter Responsive Design Mode
3. **Real Device**: Access via computer's IP address

### Find Responsive Breakpoints

**File**: `css/styles.css` (Bottom of file)

```css
@media (max-width: 768px) {
    /* Tablet styles */
}

@media (max-width: 480px) {
    /* Mobile styles */
}
```

---

## 🚀 Performance Tweaks

### Minify CSS (Optional)

1. Go to: https://minifier.org
2. Paste entire `css/styles.css`
3. Download minified version
4. Replace original file

### Minify JavaScript (Optional)

1. Go to: https://minifier.org
2. Paste entire `js/script.js`
3. Download minified version
4. Replace original file

---

## 🎓 Font Awesome Icons Reference

**Common Icons Used**:

```
fa-leaf                    Leaf (eco-friendly)
fa-trash                   Trash bin
fa-city                    City buildings
fa-home                    House
fa-school                  School building
fa-store                   Shop/Market
fa-bullseye               Target/Mission
fa-eye                    Vision
fa-lightbulb              Innovation
fa-globe                  World/Sustainability
fa-users                  Community
fa-chart-line             Growth/Scaling
fa-check                  Checkmark
fa-phone                  Phone
fa-envelope               Email
fa-user                   Person
fa-whatsapp              WhatsApp
fa-facebook              Facebook
fa-twitter               Twitter
fa-instagram             Instagram
fa-microchip             Technology/IoT
fa-mobile-alt            Mobile app
fa-database              Data
```

Full list: https://fontawesome.com/icons

---

## 📊 Backup & Restore

### Create Backup

**Windows Command**:
```powershell
Copy-Item -Path "d:\GreenCare" -Destination "d:\GreenCare-Backup-$(Get-Date -Format 'yyyy-MM-dd')" -Recurse
```

### Restore from Backup

Copy backup folder back to original location.

---

## 🔗 Useful Links

### Development Tools
- Color Picker: https://www.colorpicker.com
- Icon Search: https://fontawesome.com/icons
- Image Optimizer: https://tinypng.com
- Code Minifier: https://minifier.org
- Favicon Generator: https://favicon.io

### Deployment
- Netlify: https://netlify.com
- Vercel: https://vercel.com
- GitHub Pages: https://pages.github.com

### Domain & Hosting
- Namecheap: https://namecheap.com
- Google Domains: https://domains.google.com
- GoDaddy: https://godaddy.com

### Analytics
- Google Analytics: https://analytics.google.com
- Plausible: https://plausible.io

### SEO Tools
- Google Search Console: https://search.google.com/search-console
- Bing Webmaster: https://www.bing.com/webmasters
- Meta Tags Preview: https://metatags.io

---

## ❓ FAQ

**Q: How do I change the main color?**
A: Edit `--primary-green` in `css/styles.css` line 8

**Q: How do I add a new service?**
A: Copy service card template in Services section in `index.html`

**Q: How do I make contact form send emails?**
A: Use FormSubmit service (see Email Setup section above)

**Q: Can I add more pages?**
A: Yes! Follow "Adding New Pages" section above

**Q: How do I deploy this?**
A: See DEPLOYMENT_GUIDE.md for full instructions

**Q: What if the page looks broken?**
A: Hard refresh (Ctrl+Shift+R) or clear browser cache

**Q: Can I use this on mobile?**
A: Yes! Website is fully responsive

**Q: Do I need coding knowledge?**
A: For basic updates (text, colors), no. For advanced features, yes.

---

## 📞 Support

**For Help**:
- Phone: +250 792 502 568
- Email: akisadivine23@gmail.com
- WhatsApp: https://wa.me/250792502568

---

**Happy customizing!** 🌱
