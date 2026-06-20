# LocalStorage Implementation - SheWise

## Overview
SheWise now implements **browser-based data persistence** using localStorage. This is a temporary solution that allows users' health data to persist across browser sessions without requiring a backend database.

## Implementation Details

### Custom Hook: `useLocalStorage`
Located at: `/hooks/useLocalStorage.ts`

```typescript
const [value, setValue] = useLocalStorage(key, initialValue)
```

**Features:**
- Automatically syncs state with browser localStorage
- Handles JSON serialization/deserialization
- Works with any data type (objects, arrays, primitives)
- Safe for SSR environments (checks for `window` object)
- Loads persisted data on component mount

### Data Storage Keys

| Key | Purpose | Data Type |
|-----|---------|-----------|
| `shewise_health_logs` | All health tracker entries (cycle, sleep, mood, weight) | Array of objects |
| `shewise_questionnaire_answers` | Symptom questionnaire responses | Object with question IDs |
| `shewise_entries` | Current form inputs in tracker | Object |

### Components Using localStorage

#### 1. Health Tracker (`/app/tracker/page.tsx`)
```typescript
const [chartData, setChartData] = useLocalStorage('shewise_health_logs', CHART_DATA)
const [entries, setEntries] = useLocalStorage('shewise_entries', initialEntries)
```

**What's saved:**
- Weekly health data (cycle day, sleep hours, mood score, weight)
- Current entry form values
- Persists across page refreshes and browser restarts

#### 2. Symptom Questionnaire (`/app/questionnaire/page.tsx`)
```typescript
const [answers, setAnswers] = useLocalStorage('shewise_questionnaire_answers', {})
```

**What's saved:**
- All questionnaire responses
- Allows users to continue where they left off
- Persists step progress

## How It Works

### Data Flow
1. Component mounts → loads data from localStorage
2. User modifies data → state updates
3. State change → localStorage updates automatically
4. Page refresh → data loads from localStorage
5. Browser closes → data stays in localStorage
6. User reopens browser → data still there

### Example: Adding a Health Entry
```
User fills cycle day (3) 
    ↓
handleAddEntry('cycle') called
    ↓
Chart data updated in state
    ↓
setChartData() triggers useLocalStorage
    ↓
Data saved to localStorage['shewise_health_logs']
    ↓
Success message shows
    ↓
User refreshes page
    ↓
Data loads from localStorage on mount
    ↓
Chart shows previously entered data
```

## Benefits vs Limitations

### ✅ Benefits
- Data persists across page refreshes
- No backend/API calls needed
- Instant data saving
- Works offline
- Privacy (data stays on user's device)
- Simple to implement

### ⚠️ Limitations
- **Not synced across devices** - desktop and mobile have separate data
- **Data lost if cache cleared** - user must be careful not to clear browser data
- **Storage limit** - ~5-10MB per site (enough for months of health data)
- **Not suitable for production** - only temporary solution
- **No data backup** - loss is permanent if browser data deleted
- **Single browser only** - switching browsers loses data

## Data Management

### Clear All Data
```javascript
localStorage.clear() // In browser console
```

### Clear Specific Data
```javascript
localStorage.removeItem('shewise_health_logs')
localStorage.removeItem('shewise_questionnaire_answers')
localStorage.removeItem('shewise_entries')
```

### Check Stored Data
```javascript
console.log(JSON.parse(localStorage.getItem('shewise_health_logs')))
```

## User Information Page
A complete data info page is available at: `/app/data-info/page.tsx`

This page explains:
- How data is stored
- What data is collected
- Limitations of localStorage
- Future cloud database plans
- How to manage/clear data

**Accessible from footer** → Legal section → "Data Storage"

## Future Roadmap

To implement a real backend, the application needs:

1. **Database Selection** (Recommended: Neon PostgreSQL)
   - User authentication
   - Health data tables
   - Questionnaire response storage

2. **Backend Structure**
   - API routes for CRUD operations
   - Server-side validation
   - Authentication middleware

3. **Migration Strategy**
   - Export localStorage data
   - Import into database
   - Sync across devices

### Benefits of Cloud Backend
- Data syncs across all devices
- Encrypted storage
- Account-based access
- Advanced analytics
- Long-term data retention
- Data backup & recovery

## Technical Stack

**Current (localStorage):**
- React hooks (useState + useEffect)
- Browser localStorage API
- JSON serialization

**Planned (Backend):**
- Node.js/Next.js Server Actions
- PostgreSQL database
- Authentication system
- API endpoints

## Testing

To test localStorage persistence:
1. Go to Health Tracker
2. Add an entry (cycle day, sleep, mood, weight)
3. Refresh the page (Cmd+R / Ctrl+R)
4. Entry should still appear in the chart
5. Try switching to a different page and coming back
6. Data should persist

## Troubleshooting

**Issue: Data not persisting**
- Check if localStorage is enabled in browser
- Verify you're not in private/incognito mode
- Clear browser cache and try again

**Issue: Data lost after browser update**
- Browser updates might clear localStorage
- This is expected with temporary storage

**Issue: Different data on different devices**
- localStorage is device-specific
- This is expected without a backend
- Backend implementation will fix this

## References
- Custom hook: `/hooks/useLocalStorage.ts`
- Tracker component: `/app/tracker/page.tsx`
- Questionnaire component: `/app/questionnaire/page.tsx`
- Info page: `/app/data-info/page.tsx`
- Footer link: `/components/layout/footer.tsx`
