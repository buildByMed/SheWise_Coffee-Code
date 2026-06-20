# SheWise - Features Showcase & Screenshots

All screenshots are stored in: `/public/hackathon-screenshots/`

---

## 1. LANDING PAGE (Home)

**File:** `01-home-hero.png`, `02-home-features.png`, `03-home-why-choose.png`

### What Users See
- **Hero Section:** 
  - Headline: "Your Personal Guide to Women's Health"
  - Tagline explaining SheWise's mission
  - Medical disclaimer for credibility
  - Call-to-action buttons (Start Symptom Check, Health Tracker)

- **Feature Showcase:**
  - Three beautiful cards with illustrations:
    1. Symptom Questionnaire - understand symptoms
    2. Health Tracker - log and visualize health data
    3. Supportive Chat - judgment-free health Q&A
  - Smooth scroll animations on page load
  - Hover effects: cards scale and elevate

- **Why Choose SheWise:**
  - Privacy First - medical data stays on device
  - Evidence-Based - all info from verified sources
  - Non-Judgmental - safe space for health questions

### Design Highlights
- Warm cream background (#FAF7F2)
- Woman illustration with botanical/scientific elements in background
- Dusty rose accents for CTAs
- Responsive grid layout (1 column mobile, 3 columns desktop)
- Smooth fade-in animations as you scroll

### User Journey
New visitor lands here → reads problem/solution → clicks "Start Symptom Check" or "Health Tracker" → navigates to feature

---

## 2. SYMPTOM QUESTIONNAIRE

**File:** `04-questionnaire-start.png`, `05-questionnaire-questions.png`

### What Users See

#### Progress Page
- Multi-step form: Step 1/5
- Progress bar showing completion
- Current question in large text
- Multiple choice options as cards
- Back/Next buttons
- Skip option available

#### Question Types
- **Multi-select:** "Which symptoms are you experiencing?"
  - Checkboxes for period cramps, headache, bloating, etc.
  
- **Single-select:** "Flow intensity?"
  - Radio buttons: Light, Moderate, Heavy
  
- **Slider:** "Pain severity?" (1-10 scale)
  - Visual slider with number display
  
- **Toggle:** "First period?" Yes/No
  
- **Text Input:** "Any medications?"
  - Free text field

#### Results Page
- Summary of all answers
- Categorized by topic
- Severity ratings displayed
- Medical disclaimer emphasized
- Buttons to:
  - Print results
  - Download as PDF
  - Start over
  - Go to Health Tracker

### Design Highlights
- Clean card-based design
- Clear visual hierarchy
- Mobile: questions stack vertically
- Desktop: side-by-side layout
- Smooth transitions between steps
- Form validation with error messages
- Data persists (localStorage) so users can return later

### User Journey
Click "Start Symptom Check" → Answer 5 questions → Get results → Understand symptoms better → Might book doctor appointment

---

## 3. HEALTH TRACKER

**File:** `06-tracker-overview.png`, `07-tracker-charts.png`

### What Users See

#### Quick Entry Section
- Tab-based interface:
  - **Cycle Log** - track day of cycle (1-28)
  - **Sleep** - log hours of sleep
  - **Mood** - rate mood 1-10 slider
  - **Weight** - track weight in kg

#### Entry Flow
- User selects day/value
- Clicks "Add Entry"
- Success message appears: "Cycle entry added successfully!"
- Message disappears after 3 seconds
- Data saved to localStorage automatically

#### Charts Section
- **Line Chart** (for sleep, weight)
  - X-axis: Days of week (Mon-Sun)
  - Y-axis: Hours or kg
  - Smooth curves connecting data points
  - Tooltip on hover shows exact values
  
- **Area Chart** (for mood)
  - Colored area under the line
  - Legend showing what each color means
  - Same hover tooltips

- **Weekly Overview**
  - All metrics on one chart
  - Color-coded by type
  - Clear patterns visible

#### Find Care Near You
- Delhi hospitals listed:
  - Apollo Hospitals, Max Healthcare, Fortis, Medanta, Sir Ganga Ram
- Search functionality
- Filter by specialty
- Distance and rating display
- Click to view details

### Design Highlights
- Tab interface for easy navigation
- Success feedback keeps users informed
- Real data visualization with Recharts
- Responsive charts adapt to screen size
- Mobile-friendly with scrollable chart
- All data persists in localStorage
- Background: woman illustration faintly visible

### User Journey
Click "Health Tracker" → Select Cycle tab → Log day 3 → Click Add Entry → See success message → Scroll to see chart → Enter other metrics

---

## 4. SUPPORTIVE CHATBOT

**File:** `08-chat-interface.png`

### What Users See

#### Chat Interface
- Message bubbles:
  - User messages: Right-aligned, dusty rose color
  - Bot messages: Left-aligned, light gray background
- Typing indicator when bot is responding
- Message history scrolls up
- Clear separation between messages

#### Starter Questions
- Pre-written suggestions:
  - "What's normal for menstrual cycles?"
  - "How to manage period pain?"
  - "Hormonal imbalance symptoms?"
  - "When to see a doctor?"
- Click to send suggestion
- Custom message input box

#### Chat Features
- Language selector (English primary)
  - Hindi, Tamil, Bengali, Marathi available (UI only)
- Clear message display
- Empathetic bot tone
- Always includes medical disclaimers
- Myth-busting responses

#### Sample Responses
Bot answers questions like:
- "Is it normal to skip periods?" - Yes/No with explanation
- "Can I exercise during my period?" - Yes with tips
- "What should I eat for better cycle?" - Nutritional advice
- "When should I see a doctor?" - Warning signs listed

### Design Highlights
- Clean message bubble design
- Easy to read and follow
- Mobile-friendly thread view
- Typing indicator adds personality
- Warm, welcoming tone
- Non-medical but informative

### User Journey
Click "Chat" → Read starter questions → Ask "What's normal for menstrual cycles?" → Bot responds with info → Ask follow-up → Get myth-busting answer

---

## 5. KNOWLEDGE CENTER

**File:** `09-knowledge-hub.png`

### What Users See

#### Search & Filter
- Search bar: "Search health topics..."
- Category filters:
  - All, Cycle Health, Nutrition, Exercise, Mental Health
- Difficulty levels:
  - Beginner (green), Intermediate (yellow), Advanced (blue)
- Sort options (Recent, Popular, Most Read)

#### Article Cards
Each card shows:
- Article title
- Thumbnail image
- 30-second preview text
- Reading time estimate (5-15 min)
- Difficulty badge
- Author/source
- "Read More" button
- Save for later heart icon
- Share button

#### Sample Articles
1. "Understanding Your Menstrual Cycle"
   - Difficulty: Beginner
   - Reading time: 8 min
   - Topics: Period phases, hormone levels, normal variations

2. "Managing PCOS Naturally"
   - Difficulty: Intermediate
   - Reading time: 12 min
   - Topics: Diet, exercise, supplements

3. "Menopause: What to Expect"
   - Difficulty: Advanced
   - Reading time: 15 min
   - Topics: Symptoms, timeline, management strategies

#### Myth-Busting Section
- Quick fact-check cards
- Myth vs. Reality format
- Evidence-based corrections
- Common misconceptions debunked

### Design Highlights
- Card grid layout
- Color-coded difficulty levels
- Search works in real-time
- Filters apply instantly
- Articles open in modal or new page
- Save articles locally for offline reading
- Beautiful article preview images

### User Journey
Click "Knowledge" → Search "PCOS" → Get article results → Read preview → Click "Read More" → Save article → Explore related content

---

## 6. DATA STORAGE INFORMATION

**File:** `10-data-storage-info.png`

### What Users See

#### How Your Data is Stored
- Explanation of localStorage
- Browser-based storage (not cloud)
- Survives page refresh and browser restart
- Kept private on user's device only
- Lost if browser cache is cleared

#### What Data We Collect
Listed data types:
- Cycle tracking (day, symptoms, flow)
- Sleep logs (hours, quality)
- Mood entries (rating 1-10)
- Weight tracking (kg, date)
- Questionnaire answers
- Theme preference (dark/light mode)
- Chat message history (current session only)

#### Limitations
- ⚠️ Not synced across devices
- ⚠️ Data lost if cache is cleared
- ⚠️ ~5-10MB storage limit
- ⚠️ Only in current browser
- ⚠️ No encryption yet
- ⚠️ Visible in browser DevTools

#### Transparency Commands
```javascript
// Check all stored data
localStorage

// View health logs
JSON.parse(localStorage.getItem('shewise_health_logs'))

// Export as JSON file
const data = localStorage
const blob = new Blob([JSON.stringify(data)], {type: 'application/json'})
const url = URL.createObjectURL(blob)
const a = document.createElement('a')
a.href = url
a.download = 'shewise-data-backup.json'
a.click()

// Clear all data
localStorage.clear()

// Clear specific data
localStorage.removeItem('shewise_health_logs')
```

#### Future: Cloud Database
- When we add backend (PostgreSQL)
- Data will sync across devices
- Cloud backup and security
- User accounts to manage data
- Encryption in transit and at rest
- HIPAA/medical compliance

#### Manage Your Local Data
- Instructions to export data
- How to clear data
- How to backup
- How to migrate to cloud (future)

### Design Highlights
- Clear, non-technical language
- Step-by-step instructions
- Code blocks with syntax highlighting
- Links to developer docs
- Privacy-first messaging
- Roadmap to better security

### User Journey
Click "Data Storage" in footer → Learn where data stored → Copy commands to check storage → Clear data if needed → Understand future roadmap

---

## NAVIGATION & DESIGN CONSISTENCY

### Header (All Pages)
- SheWise logo (woman health icon)
- Navigation links:
  - Home
  - Questionnaire
  - Tracker
  - Chat
  - Knowledge
  - About
- Language selector (English default)
- Dark mode toggle (moon/sun icon)
- Mobile hamburger menu
- Sticky positioning

### Footer (All Pages)
- About SheWise section
- Quick links
- Legal links:
  - Privacy Policy
  - Terms of Service
  - Medical Disclaimer
  - Data Storage ← NEW
- Social media links (placeholder)
- Copyright: Coffee&Code

### Color Scheme Throughout
- Primary: Dusty Rose (#C08A9E) - CTAs, highlights
- Secondary: Sage Green (#6B9E7F) - Supporting elements
- Background: Warm Cream (#FAF7F2)
- Text: Deep Gray (#3D3D3D)
- Success: Green (#4CAF50)
- Error: Red (#FF6B6B)
- Info: Blue (#2196F3)

### Interactive Elements
- All buttons: Scale 1.05 on hover
- All links: Scale 1.05, color change on hover
- Cards: Lift up (-2px), shadow increases on hover
- Forms: Focus states clear and visible
- Animations: Smooth 300ms transitions
- Dark mode: All colors auto-adjust

---

## RESPONSIVE BREAKPOINTS

### Mobile (< 640px)
- Single column layout for everything
- Hamburger menu
- Full-width cards
- Stacked forms
- Charts adapt to width
- Touch-friendly (44x44px min targets)

### Tablet (640px - 1024px)
- 2-column grids for feature cards
- Sidebar navigation optional
- Medium-sized charts
- Forms in 2 columns

### Desktop (> 1024px)
- 3-column grids for feature cards
- Full navigation visible
- Large charts with hover details
- Forms in single column but wider
- Optimized line lengths for readability

---

## ACCESSIBILITY FEATURES

### Throughout All Pages
- ✓ Semantic HTML (main, section, nav, footer)
- ✓ ARIA labels on all interactive elements
- ✓ Alt text on all images
- ✓ Keyboard navigation (Tab through elements)
- ✓ Focus states visible (blue outline)
- ✓ Color contrast: 4.5:1 or better
- ✓ Touch targets: 44x44px minimum
- ✓ Screen reader compatible

---

## USER FLOWS

### Flow 1: New User Discovery
1. Land on home page
2. Read problem/solution
3. Click "Start Symptom Check"
4. Complete questionnaire
5. Review results
6. Click "Go to Health Tracker"
7. Start logging health data

### Flow 2: Regular User Monitoring
1. Visit site
2. Click "Health Tracker"
3. Add today's entries (cycle day, mood, sleep)
4. Review trends in charts
5. Click "Find Care" to book appointment

### Flow 3: Health Information Seeker
1. Click "Knowledge" or "Chat"
2. Search specific topic (e.g., "irregular periods")
3. Read articles or ask bot
4. Learn about condition/symptoms
5. Save articles for later
6. Click back to home

### Flow 4: Data-Conscious User
1. Visit site
2. Review data in Developer Tools
3. Click "Data Storage" link
4. Learn where data stored
5. Run console commands to check data
6. Export data as backup
7. Feel secure about privacy

---

## HACKATHON PRESENTATION SEQUENCE

### 30-Second Demo
1. Show home page → highlight hero (10 sec)
2. Scroll to feature cards (5 sec)
3. Click questionnaire → show questions (10 sec)
4. Show results page (5 sec)

### 2-Minute Demo
1. Home page → Problem/solution (20 sec)
2. Quick questionnaire flow (30 sec)
3. Health tracker → add entry → show chart (40 sec)
4. Show knowledge/chat (30 sec)

### 5-Minute Deep Dive
1. Home + landing story (1 min)
2. Questionnaire walkthrough (1.5 min)
3. Tracker with data entry demo (1.5 min)
4. Chat + knowledge overview (30 sec)
5. Explain localStorage persistence (30 sec)

---

All screenshots are production-ready and showcase a polished, professional MVP. Good luck! 🚀
