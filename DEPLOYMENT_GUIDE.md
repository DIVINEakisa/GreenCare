# GreenCycle Rwanda - Deployment & Setup Guide

Complete guide for deploying and maintaining the GreenCycle Rwanda website.

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Local Testing](#local-testing)
3. [Deployment Options](#deployment-options)
4. [Domain Setup](#domain-setup)
5. [Maintenance](#maintenance)
6. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Option 1: Open in Browser (Simplest)
1. Locate the `index.html` file
2. Double-click it to open in your default browser
3. Website is ready to use!

### Option 2: Deploy to Free Hosting (Recommended)

#### Using Netlify (Recommended - Most User Friendly)

1. **Visit Netlify**: https://www.netlify.com
2. **Sign Up** with GitHub, Gmail, or email
3. **Create New Site**:
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `GreenCare` folder
   - Site deploys in seconds with auto-generated URL
4. **Custom Domain** (Optional):
   - Go to Site Settings → Domain Management
   - Add your custom domain (e.g., greencyclerwanda.com)
   - Follow DNS configuration steps

#### Using GitHub Pages (Free)

1. **Create GitHub Account** at https://github.com
2. **Create New Repository**:
   - Name: `greencyclerwanda.github.io` (replace username)
   - Make it Public
3. **Upload Files**:
   - Upload `index.html`, `css/`, `js/` folders
4. **Access Website**:
   - URL: `https://greencyclerwanda.github.io`
5. **Custom Domain** (Optional):
   - Settings → Pages → Custom domain
   - Add your domain name

#### Using Vercel (Simple & Fast)

1. **Visit Vercel**: https://vercel.com
2. **Sign Up** with GitHub or email
3. **Create New Project**:
   - Import from Git (GitHub repo) OR
   - Deploy from local files
4. **Select Framework**: Choose "Other" or "Static Site"
5. **Deploy** - Automatic deployment with each update

---

## 🖥️ Local Testing

### Using Python (Recommended)

#### Python 3:
```bash
cd d:\GreenCare
python -m http.server 8000
```

#### Python 2:
```bash
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000` in your browser

### Using Node.js

```bash
# Install http-server (first time only)
npm install -g http-server

# Run server
cd d:\GreenCare
http-server

# Server runs on http://localhost:8080
```

### Using Live Server (VS Code Extension)

1. Install **Live Server** extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically with live reload

### Using Python SimpleHTTPServer (Windows)

```powershell
# Open PowerShell in GreenCare folder
cd d:\GreenCare
python -m http.server

# Opens on http://localhost:8000
```

---

## 🌐 Deployment Options Comparison

| Platform | Cost | Ease | Custom Domain | Notes |
|----------|------|------|---------------|-------|
| **Netlify** | Free | ⭐⭐⭐⭐⭐ | Yes (+$12/yr) | Best for beginners |
| **GitHub Pages** | Free | ⭐⭐⭐⭐ | Yes | Requires Git |
| **Vercel** | Free | ⭐⭐⭐⭐⭐ | Yes | By creators of Next.js |
| **Surge** | Free | ⭐⭐⭐ | Yes (+$12/yr) | Simple CLI tool |
| **Cloudflare Pages** | Free | ⭐⭐⭐⭐ | Yes | Excellent speed |
| **AWS S3 + CloudFront** | Free tier | ⭐⭐⭐ | Yes | More complex setup |

---

## 🔗 Domain Setup

### Buying a Domain

#### Recommended Registrars:
- **Namecheap** - Great prices, easy setup
- **Google Domains** - Simple interface
- **GoDaddy** - Wide selection
- **Domain.com** - Affordable

### Domain Name Ideas for GreenCycle Rwanda:
- `greencyclerwanda.com`
- `greencycle.rw` (Rwanda domain)
- `smartwaste.rw`
- `wastemanagement.rw`
- `greencyclernwanda.org` (Non-profit)

### Pointing Domain to Netlify

1. **Buy Domain** from registrar
2. **In Netlify Dashboard**:
   - Go to Site Settings → Domain Management
   - Click "Add custom domain"
   - Enter your domain name
3. **Update DNS Records**:
   - Copy Netlify nameservers
   - Go to domain registrar
   - Update nameservers to Netlify's
   - Wait 24-48 hours for propagation

### Pointing Domain to GitHub Pages

1. **In GitHub Repo**:
   - Settings → Pages → Custom domain
   - Enter domain name
   - Save (creates CNAME file)
2. **In Domain Registrar**:
   - Create A records pointing to GitHub IP (pages.github.com)
   - Or use CNAME record
3. **Enable HTTPS**:
   - Check "Enforce HTTPS" in GitHub Pages settings

---

## 📧 Email Integration

### Option 1: Using FormSubmit (Easiest)

Replace the form submission in `js/script.js`:

```javascript
// In the form HTML, change to:
<form action="https://formsubmit.co/akisadivine23@gmail.com" method="POST">
    <!-- Your form fields -->
    <input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html">
</form>
```

### Option 2: Using Web3Forms

```javascript
// JavaScript approach
const form = document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Content-Type': 'application/json' }
    });
});
```

### Option 3: Using Netlify Forms (If hosting on Netlify)

Add to form in HTML:
```html
<form name="contact" method="POST" netlify>
    <!-- Your fields -->
</form>
```

---

## 📱 SEO Optimization

### Add Meta Tags

In `index.html` `<head>`:

```html
<meta name="description" content="GreenCycle Rwanda - Smart waste management system for better waste separation in Rwanda">
<meta name="keywords" content="waste management, Rwanda, sustainability, recycling, smart waste">
<meta name="author" content="AKISA Divine">
<meta property="og:title" content="GreenCycle Rwanda - Smart Waste Management">
<meta property="og:description" content="Improving waste separation through innovation">
<meta property="og:image" content="path/to/image.jpg">
<meta property="og:url" content="https://yourdomain.com">
```

### Submit to Search Engines

1. **Google Search Console**: https://search.google.com/search-console
   - Add your domain
   - Submit sitemap
   - Monitor indexing

2. **Bing Webmaster Tools**: https://www.bing.com/webmasters
   - Submit domain
   - Monitor search performance

---

## 📊 Analytics Setup

### Option 1: Google Analytics (Free)

1. **Create Google Analytics Account**: https://analytics.google.com
2. **Create Property** for your domain
3. **Copy Tracking ID**
4. **Add to `index.html` before `</head>`**:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Option 2: Plausible Analytics (Privacy-Focused)

1. Sign up at https://plausible.io
2. Add tracking code before `</head>`:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.js"></script>
```

---

## 🔒 SSL/HTTPS Setup

### Automatic (Recommended)

All major hosting platforms provide FREE SSL certificates:
- **Netlify**: Automatic
- **Vercel**: Automatic
- **GitHub Pages**: Automatic
- **Cloudflare**: Automatic

### Manual (If self-hosting)

Use **Let's Encrypt** (free):
1. Use Certbot: https://certbot.eff.org
2. Follow setup for your server
3. Certificates auto-renew

---

## 🛠️ Maintenance

### Regular Updates Checklist

- [ ] Update contact information if needed
- [ ] Review form submissions monthly
- [ ] Check for broken links
- [ ] Update services/pricing if changed
- [ ] Monitor analytics
- [ ] Test form functionality
- [ ] Backup your files regularly

### File Backup

```powershell
# Windows - Create backup
Copy-Item -Path "d:\GreenCare" -Destination "d:\GreenCare-Backup-$(Get-Date -Format 'yyyy-MM-dd')" -Recurse
```

### Performance Optimization

1. **Minify CSS/JS** (Optional):
   - Use https://minifier.org
   - Reduce file sizes by ~40%

2. **Optimize Images**:
   - Use https://imageoptimizer.net
   - Or https://tinypng.com (for PNG/JPG)

3. **Enable Caching**:
   - Netlify/Vercel do this automatically
   - Set cache headers on your server

---

## 🔍 Troubleshooting

### Pages Not Loading

**Issue**: Getting 404 error
**Solution**: 
- Ensure `index.html` is in root directory
- Check file names are lowercase
- Verify folder structure matches

### Styling Not Applying

**Issue**: Page looks unstyled
**Solution**:
- Hard refresh: Ctrl+Shift+R (Chrome) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check CSS file path in HTML: `css/styles.css`

### Contact Form Not Working

**Issue**: Form won't submit
**Solution**:
- Open browser console (F12)
- Check for error messages
- Verify JavaScript is enabled
- Try different browser

### WhatsApp Link Not Working

**Issue**: WhatsApp link doesn't open
**Solution**:
- Verify phone number format: +250792502568
- Use international format (+country code)
- Test WhatsApp link: https://wa.me/250792502568

### Mobile Menu Not Toggling

**Issue**: Hamburger menu doesn't work
**Solution**:
- Check JavaScript is loaded
- Verify no console errors (F12 → Console)
- Clear browser cache and refresh

### Site Loading Slowly

**Issue**: Slow page load
**Solutions**:
- Optimize images
- Enable caching (automatically on Netlify/Vercel)
- Minify CSS/JS
- Use CDN (Content Delivery Network)

---

## 📞 Support & Help

### Quick Help Resources

- **Netlify Support**: https://docs.netlify.com
- **GitHub Pages Help**: https://docs.github.com/pages
- **Vercel Docs**: https://vercel.com/docs
- **Web Development Basics**: https://developer.mozilla.org

### Getting Help

1. **Check Console Errors**: Press F12 → Console tab
2. **Google the Error**: Most issues have solutions online
3. **Try Different Browser**: Verify it's not browser-specific
4. **Contact Support**: Hosting platform's support team

---

## ✅ Pre-Launch Checklist

Before going live:

- [ ] Test all links work
- [ ] Test contact form submission
- [ ] Test on mobile device
- [ ] Test on different browsers
- [ ] Update contact information
- [ ] Test WhatsApp link
- [ ] Check spelling throughout
- [ ] Verify images display correctly
- [ ] Test keyboard shortcuts
- [ ] Check footer links work
- [ ] Test in slow internet (Dev Tools → Throttling)

---

## 🎉 Launch!

Once deployed:

1. **Share on Social Media**:
   - Facebook, Twitter, LinkedIn, Instagram
   - Use contact information for professional inquiries

2. **Tell Your Network**:
   - Email, WhatsApp, SMS
   - School/community groups
   - Local businesses and organizations

3. **Monitor**:
   - Check analytics weekly
   - Review contact form submissions
   - Respond to inquiries promptly

4. **Improve**:
   - Gather feedback
   - Update content regularly
   - Add new features as needed

---

**For technical support**: 
📞 +250 792 502 568  
📧 akisadivine23@gmail.com

---

**Ready to launch GreenCycle Rwanda to the world!** 🌱
