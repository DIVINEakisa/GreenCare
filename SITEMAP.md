# GreenCycle Rwanda - Website Site Map & Structure

## 🗺️ Complete Site Structure

```
GreenCycle Rwanda Website
│
├── 🏠 HOME PAGE (/index.html#home)
│   ├── Hero Section
│   │   ├── Title: "GreenCycle Rwanda"
│   │   ├── Subtitle: "Smart Waste Separation for a Cleaner Future"
│   │   ├── Description: Problem introduction
│   │   ├── Button: "Learn More" → How It Works
│   │   └── Button: "Join Pilot Program" → Pilot Page
│   │
│   └── Problem Section
│       ├── Card 1: "Mixed Waste Crisis"
│       ├── Card 2: "Urban Growth"
│       └── Card 3: "Environmental Impact"
│
├── 📖 ABOUT PAGE (/index.html#about)
│   ├── Mission Card
│   │   └── "To improve waste management in Rwanda..."
│   ├── Vision Card
│   │   └── "A clean and sustainable Rwanda..."
│   └── Values Grid (4 items)
│       ├── Innovation
│       ├── Sustainability
│       ├── Community
│       └── Scalability
│
├── ⚙️ HOW IT WORKS PAGE (/index.html#how-it-works)
│   ├── Step 1: "Waste Separation at Source"
│   ├── Step 2: "Smart Bin Detection"
│   ├── Step 3: "Collection & Transport"
│   ├── Step 4: "Processing & Transformation"
│   ├── Step 5: "Value Creation"
│   └── Technology Section
│       ├── IoT Sensors
│       ├── Mobile App
│       └── Data Analytics
│
├── 💼 SERVICES PAGE (/index.html#services)
│   ├── Service 1: Household Service
│   │   ├── Icon: Home
│   │   ├── Features (4 items)
│   │   └── Pricing: "Affordable monthly subscription"
│   ├── Service 2: Schools Program (FEATURED)
│   │   ├── Icon: School
│   │   ├── Features (4 items)
│   │   └── Pricing: "Institutional pricing available"
│   ├── Service 3: Business Solution
│   │   ├── Icon: Store
│   │   ├── Features (4 items)
│   │   └── Pricing: "Flexible subscription plans"
│   └── Benefits Section (4 benefits)
│       ├── Environmental Impact
│       ├── Affordable Pricing
│       ├── Secure & Reliable
│       └── Recognition
│
├── 🧪 PILOT PAGE (/index.html#pilot)
│   ├── Current Status Card
│   │   ├── Phase: "Pilot Testing & Validation"
│   │   ├── Duration: "12-18 months"
│   │   └── Focus: "System Improvement & Feedback"
│   ├── Prototype Card
│   │   └── Features (6 items)
│   ├── Participant Roles (4 items)
│   │   ├── Community Testing
│   │   ├── Feedback Sharing
│   │   ├── Impact Measurement
│   │   └── Early Adoption
│   ├── Path to Scale Timeline
│   │   ├── Year 1: Expand to 5 urban centers
│   │   ├── Year 2: Reach 100,000 households
│   │   └── Year 3: National coverage
│   └── CTA: "Contact Us to Join"
│
├── 📞 CONTACT PAGE (/index.html#contact)
│   ├── Contact Info Section
│   │   ├── Name: AKISA Divine
│   │   ├── Phone: +250 792 502 568
│   │   ├── Email: akisadivine23@gmail.com
│   │   ├── WhatsApp: Chat link
│   │   └── WhatsApp Button: Quick chat
│   └── Contact Form
│       ├── Full Name (required)
│       ├── Email (required)
│       ├── Phone (optional)
│       ├── Subject (required)
│       │   ├── Join Pilot Program
│       │   ├── Household Service
│       │   ├── School Program
│       │   ├── Business Solution
│       │   ├── Feedback
│       │   └── Other
│       ├── Message (required)
│       ├── Submit Button
│       └── Success/Error Messages
│
└── 🔗 FOOTER (All Pages)
    ├── Brand Info
    ├── Quick Links (4 links)
    ├── Social Media Links (4 platforms)
    └── Copyright Notice

```

---

## 🧭 Page Navigation Flow

```
                    ┌─── ABOUT ────┐
                    │              │
HOME ─── HOW IT ──── SERVICES     PILOT
  │      WORKS                     │
  └──────── CONTACT ───────────────┘
```

### Navigation Structure

- **Navigation Bar** (sticky at top)
  - Logo/Brand name
  - Navigation links (6 pages)
  - Hamburger menu (mobile)

- **All Pages**
  - Home, About, How It Works, Services, Pilot, Contact
  - Accessible via navbar or action buttons
  - Smooth transitions (no page reload)

- **Action Buttons**
  - "Learn More" (Home → How It Works)
  - "Join Pilot Program" (Home/Pilot → Contact)
  - "Contact Us to Join" (Pilot → Contact)

---

## 📐 Layout Structure

### Desktop Layout (Full Width)
```
┌─────────────────────────────────────┐
│         NAVIGATION BAR              │
├─────────────────────────────────────┤
│                                     │
│           PAGE CONTENT              │
│    (Responsive grid/flexbox)        │
│                                     │
├─────────────────────────────────────┤
│            FOOTER                   │
└─────────────────────────────────────┘
```

### Mobile Layout (Single Column)
```
┌──────────────────┐
│  NAV (hamburger) │
├──────────────────┤
│                  │
│  PAGE CONTENT    │
│  (Single column) │
│                  │
├──────────────────┤
│     FOOTER       │
└──────────────────┘
```

---

## 🎨 Component Library

### Buttons
- **Primary Button** (Green)
  - Text + hover effect
  - Used for main CTAs
  
- **Secondary Button** (Outline)
  - Hollow with green border
  - Used for alternatives

- **WhatsApp Button** (Green #25d366)
  - Special WhatsApp branding
  - Links to WhatsApp

### Cards
- **Service Cards**
  - Icon, title, description
  - Feature list with checkmarks
  - Pricing info
  
- **Info Cards**
  - Icon, title, content
  - Hover effects
  
- **Problem Cards**
  - Icon, title, description
  
- **Step Cards**
  - Numbered badge
  - Title and description
  - Connected with lines

### Forms
- **Contact Form**
  - Text inputs (Name, Email, Phone)
  - Dropdown (Subject)
  - Textarea (Message)
  - Submit button
  - Validation messages

### Sections
- **Hero Section**
  - Large heading
  - Description
  - Floating animated shapes
  - CTA buttons
  
- **Grid Sections**
  - Multi-column responsive layouts
  - Auto-wrapping cards
  - Hover animations

---

## 🗂️ Content Organization

### By Page

| Page | Main Content | Purpose |
|------|-------------|---------|
| Home | Problem statement | Hook visitor |
| About | Mission, Vision, Values | Build credibility |
| How It Works | 5-step process | Explain solution |
| Services | 3 service types | Show offerings |
| Pilot | Program details | Call to action |
| Contact | Contact info + form | Conversion |

### By Type

| Content Type | Count | Location |
|-------------|-------|----------|
| Headings (H1) | 6 | One per page |
| Headings (H2) | 20+ | Section headers |
| Cards | 25+ | Various sections |
| Buttons | 10+ | CTA elements |
| Forms | 1 | Contact page |
| Icons | 30+ | Throughout |
| Images | None | (Add as needed) |

---

## 🔄 Data Flow

### Contact Form Submission
```
User Input
    ↓
Form Validation
    ↓
Data Object Created
    ↓
Stored in exampleDB.messages
    ↓
Success Message Shown
    ↓
Form Reset
```

### Page Navigation
```
User clicks link/button
    ↓
JavaScript navigateTo() called
    ↓
Current page hidden
    ↓
New page shown with animation
    ↓
Page view tracked
    ↓
Menu closed (if mobile)
    ↓
Scroll to top
```

---

## 🎯 User Journey

### New Visitor
1. Arrives at Home page
2. Reads problem statement
3. Clicks "Learn More"
4. Learns how system works on How It Works page
5. Checks Services page
6. Reads about Pilot program
7. Clicks "Contact Us"
8. Submits contact form
9. Receives success message

### Potential Partner
1. Lands on Home
2. Reviews About page (mission/vision)
3. Studies Services page
4. Checks Pilot details
5. Contacts via WhatsApp or form
6. Scheduled for meeting

### Media/Journalist
1. Home page hook
2. About for background
3. How It Works for details
4. Pilot for status
5. Contact for interview request

---

## 📊 Content Statistics

- **Total Sections**: 6 main pages
- **Total Cards**: 25+
- **Total Buttons**: 10+
- **Total Icons**: 30+
- **Total Form Fields**: 5
- **Total Words**: ~2,500
- **Total Images**: 0 (add your own)

---

## 🎓 Key Messages

### Primary Message
"GreenCycle Rwanda is a smart waste management system improving waste separation in Rwanda"

### Secondary Messages
1. **Problem**: Poor waste separation in urban communities
2. **Solution**: Smart bins with IoT technology
3. **Benefits**: Environmental impact, affordability, community engagement
4. **Status**: Currently in pilot phase
5. **Call to Action**: Join the pilot or get in touch

### Value Propositions
- Smart, simple, scalable
- Affordable subscription-based
- Environmental focus
- Community-driven
- Youth-led innovation
- Real, practical solution

---

## 🔐 Information Architecture

### Hierarchical Structure

```
GreenCycle Rwanda (Brand)
│
├─ Problem (What's wrong)
├─ Solution (What we do)
├─ Process (How it works)
├─ Services (What we offer)
├─ Pilot (Current status)
└─ Contact (Get involved)
```

### Information Priority

1. **Home**: Problem + Solution intro
2. **About**: Why we exist (mission/vision)
3. **How It Works**: Detailed explanation
4. **Services**: Specific offerings
5. **Pilot**: Current opportunity
6. **Contact**: Conversion

---

## 📱 Responsive Breakpoints

### Desktop (>768px)
- Multi-column grid layouts
- Full navigation bar
- Side-by-side content
- Optimal reading width

### Tablet (481px - 768px)
- Adjusted grid columns
- Optimized spacing
- Touch-friendly elements
- Hamburger menu available

### Mobile (<480px)
- Single column layouts
- Hamburger menu (required)
- Larger touch targets
- Vertical stacking
- Optimized font sizes

---

## 🔗 Internal Links

### Navigation Links
```
Home       → index.html#home
About      → index.html#about
How Works  → index.html#how-it-works
Services   → index.html#services
Pilot      → index.html#pilot
Contact    → index.html#contact
```

### Action Links
```
"Learn More"           → How It Works page
"Join Pilot Program"   → Pilot page
"Contact Us to Join"   → Contact page
Footer links          → All pages
```

### External Links
```
WhatsApp  → https://wa.me/250792502568
Email     → mailto:akisadivine23@gmail.com
Phone     → tel:+250792502568
Social    → Facebook, Twitter, Instagram, WhatsApp
```

---

## 🚀 Deployment URLs

### Local
- File: `file:///d:/GreenCare/index.html`
- Server: `http://localhost:8000`

### Production (Choose one)
- Netlify: `https://greencyclerwanda.netlify.app`
- Vercel: `https://greencyclerwanda.vercel.app`
- Custom: `https://greencyclerwanda.com`

---

## 📈 Growth Potential

### Phase 1: MVP (Current)
- 6 pages
- Contact form
- Information sharing
- Pilot recruitment

### Phase 2: Enhancement
- Add team members page
- Blog/News section
- Success stories
- Impact metrics

### Phase 3: Full Platform
- User registration
- Subscription management
- Mobile app links
- Real-time tracking
- Community forum

### Phase 4: Ecosystem
- Multiple locations
- Admin dashboard
- Partner integration
- API access
- Advanced analytics

---

## 🎨 Visual Hierarchy

### Text Hierarchy
```
H1 (3rem)        - Page titles
H2 (2.2rem)      - Section headers
H3 (1.5rem)      - Card titles
P (1rem)         - Body text
Small (0.9rem)   - Secondary text
```

### Color Hierarchy
```
Primary Green    - Main elements (buttons, headings)
Dark Green       - Hover states, emphasis
Light Green      - Accents, highlights
Light Background - Secondary content
White            - Cards, containers
Dark Text        - Main text content
Light Text       - Secondary text
```

### Spacing Hierarchy
```
Large (60-80px)  - Between sections
Medium (30-40px) - Between groups
Small (15-20px)  - Between elements
Tiny (5-10px)    - Within elements
```

---

**This sitemap provides complete understanding of the website structure and content organization.**

For updates, see the **QUICK_REFERENCE.md** file.

Created: April 2024
