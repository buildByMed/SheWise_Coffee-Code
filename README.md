# SheWise - Women's Health Empowerment Platform

SheWise is a compassionate, privacy-first digital health platform designed to empower women with personalized health insights, symptom tracking, educational resources, and supportive guidance.

## Features

### 🏥 Symptom Questionnaire
- Multi-step interactive questionnaire with adaptive logic
- Different question types: multiple choice, single select, sliders, toggles, and text input
- Personalized symptom summary with insights
- Downloadable and printable results
- Medical disclaimer and educational framing

### 📊 Health Tracker Dashboard
- Log daily metrics: cycle days, sleep hours, mood, and weight
- Interactive charts using Recharts for visualization
- Pattern insights and trend analysis
- Find Care Near You feature with clinic search
- Filter by location, type, and distance

### 💬 Supportive Chatbot
- Non-judgmental conversation interface
- Starter questions for common health topics
- Multi-language support (English, Hindi, Tamil, Bengali, Marathi)
- Responsive message bubbles with typing indicators
- Myth-busting and educational responses

### 📚 Knowledge Center
- Curated articles on women's health topics
- Save articles for later reading
- Myth-busting section with verified information
- Search functionality
- Privacy mode toggle to hide content
- PDF export capability

### 🎨 Design & Accessibility
- Responsive mobile-first design
- Warm color palette: dusty rose (primary), sage green (secondary), warm cream (background)
- WCAG AA accessibility compliance
- Smooth animations and transitions
- Privacy-first messaging throughout

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Fonts**: Geist (sans), Geist Mono (monospace), Source Serif 4 (serif)

## Project Structure

```
app/
├── layout.tsx              # Root layout with global styles
├── page.tsx                # Landing page
├── questionnaire/
│   └── page.tsx           # Multi-step symptom questionnaire
├── tracker/
│   └── page.tsx           # Health tracking dashboard
├── chat/
│   └── page.tsx           # AI chatbot interface
├── knowledge/
│   └── page.tsx           # Knowledge center & educational hub
└── globals.css            # Global styles with Tailwind CSS v4

components/
├── layout/
│   ├── header.tsx         # Navigation header with language switcher
│   └── footer.tsx         # Footer with links and disclaimer

public/
├── symptoms.png           # Questionnaire illustration
├── tracking.png           # Health tracker illustration
└── support.png            # Chatbot support illustration
```

## Color Palette

- **Primary (Dusty Rose)**: #9B5A7B - Main actions and highlights
- **Secondary (Sage Green)**: #5B8B6C - Secondary actions and accents
- **Accent (Light Green)**: #6B9B7F - Tertiary highlights
- **Background (Warm Cream)**: #F5F0E8 - Page background
- **Foreground (Dark)**: #313131 - Text and primary foreground

## Getting Started

### Installation

Using the shadcn CLI:

```bash
# Clone the project and navigate to the directory
cd shewise

# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Open http://localhost:3000 in your browser
```

Or from GitHub:

```bash
# Clone from GitHub and set up
git clone <repository-url>
cd shewise
pnpm install
pnpm dev
```

### Development

The app runs in development mode with hot module replacement (HMR). All changes are reflected immediately in the browser.

```bash
pnpm dev
```

### Build

To create a production build:

```bash
pnpm build
pnpm start
```

## Key Features Implementation

### State Management
- **Client Components**: React hooks (useState, useRef, useEffect) for local UI state
- **Form Handling**: Controlled inputs for questionnaire, tracker, and knowledge center

### Data
- **Mock Data**: All features use placeholder data for demonstration
- **Chart Data**: Weekly health metrics for visualization
- **Article Data**: Sample educational content and myth-busting information

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- 44x44px minimum touch targets
- 4.5:1 contrast ratios for text
- Screen reader friendly navigation
- Keyboard navigation support

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interface elements
- Optimized layouts for all screen sizes

## Privacy & Safety

- **Medical Disclaimer**: Prominently displayed on all pages
- **Privacy-First**: No personal data storage in this demo
- **Non-Judgmental**: Supportive and empathetic tone throughout
- **Confidential**: Privacy mode toggle to hide content if needed
- **Educational Only**: Clear communication that content is for informational purposes

## Navigation

- **Header**: Fixed, sticky navigation with logo, main menu, language selector, and privacy badge
- **Footer**: Comprehensive footer with links to resources, legal pages, and support
- **Internal Navigation**: Tabs, buttons, and links for moving between sections

## Browser Support

- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Deployment

Deploy to Vercel with one click:

```bash
vercel deploy
```

Or connect your GitHub repository for automatic deployments on push.

## Future Enhancements

- Backend integration with user authentication
- Persistent data storage
- Real AI/ML-powered symptom analysis
- Integration with healthcare providers
- Wearable device integration
- Push notifications
- Offline mode support
- Multi-language content

## Contributing

This is a demonstration project. For contributions, please fork and submit pull requests.

## License

MIT License - Feel free to use this as a template for your own projects.

## Support

For questions or feedback, please reach out through the contact form in the app or email support@shewise.com.

---

**Disclaimer**: SheWise provides educational information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider for health concerns. In emergencies, contact your local emergency services.

Built with ❤️ by the SheWise team
