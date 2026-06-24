# PHASE 1: PROJECT FOUNDATION
## Installation & Testing Guide

---

## 🚀 QUICK START

### Option A: Automated Setup (Recommended)

```bash
# 1. Clone or navigate to project
cd gaib-agro-system

# 2. Run setup script
npm install
npm install next-pwa
npm run dev
```

Visit: `http://localhost:3000`

### Option B: Manual Step-by-Step Setup

Follow the detailed instructions below.

---

## 📋 DETAILED INSTALLATION STEPS

### Step 1: Verify Prerequisites

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version (should be 9+)
npm --version
```

**If Node.js is not installed**:
- Download from: https://nodejs.org/
- Choose LTS version (Long Term Support)
- Install and restart your terminal

### Step 2: Install All Dependencies

```bash
npm install
```

**Dependencies that will be installed**:
- react@19
- next@15
- typescript
- tailwindcss
- lucide-react (icons)
- @supabase/supabase-js
- zustand (state management)
- js-cookie (session management)
- shadcn/ui (UI components)

⏱️ **Installation Time**: ~3-5 minutes (first time)

### Step 3: Install PWA Package

```bash
npm install next-pwa
```

### Step 4: Create Environment File

```bash
# Copy the template
cp .env.example .env.local
```

**Edit `.env.local` file**:

```env
# Supabase (optional for Phase 1, required for Phase 2+)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Admin Credentials (Phase 1 Static Login)
ADMIN_EMAIL=sadik.ali.bundi@gmail.com
ADMIN_PASSWORD=Gaib@017

# App Configuration
NEXT_PUBLIC_APP_NAME=GAIB Agro System
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

⚠️ **Important**: 
- Do NOT commit `.env.local` to Git
- Keep credentials secure
- Supabase setup can be done later (Phase 2)

### Step 5: Verify Folder Structure

Ensure these files exist:

```
gaib-agro-system/
✓ package.json
✓ tsconfig.json
✓ tailwind.config.ts
✓ postcss.config.js
✓ next.config.js
✓ .env.local (newly created)
✓ .env.example
✓ .gitignore
✓ app/ (folder with all pages)
✓ components/ (folder with UI components)
✓ lib/ (utility functions)
✓ types/ (TypeScript definitions)
✓ public/ (manifest.json)
✓ README.md
```

### Step 6: Start Development Server

```bash
npm run dev
```

**Expected output**:
```
  ▲ Next.js 15.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.5s
```

### Step 7: Access the Application

Open your browser and go to:
```
http://localhost:3000
```

**You will be redirected to**: `http://localhost:3000/login`

---

## 🔐 LOGIN TEST

### Login Credentials (Phase 1)

| Field | Value |
|-------|-------|
| Email | sadik.ali.bundi@gmail.com |
| Password | Gaib@017 |

### How to Login

1. Open http://localhost:3000/login
2. Enter email: `sadik.ali.bundi@gmail.com`
3. Enter password: `Gaib@017`
4. Click "Sign In"
5. You should be redirected to Dashboard

### Test Failed Login

1. Try with incorrect email: `test@gmail.com`
2. Try with incorrect password: `wrongpassword`
3. Should see error message: "Invalid email or password"

---

## ✅ COMPLETE TESTING CHECKLIST

### 1. Authentication Tests

**Test Case 1.1: Valid Login**
- [ ] Navigate to http://localhost:3000/login
- [ ] Enter: sadik.ali.bundi@gmail.com
- [ ] Enter: Gaib@017
- [ ] Click "Sign In"
- [ ] ✓ Redirected to /dashboard
- [ ] ✓ Dashboard displays "Welcome to GAIB Agro"

**Test Case 1.2: Invalid Email**
- [ ] Navigate to http://localhost:3000/login
- [ ] Enter: invalid@gmail.com
- [ ] Enter: Gaib@017
- [ ] Click "Sign In"
- [ ] ✓ Error message appears: "Invalid email or password"

**Test Case 1.3: Invalid Password**
- [ ] Navigate to http://localhost:3000/login
- [ ] Enter: sadik.ali.bundi@gmail.com
- [ ] Enter: wrongpassword
- [ ] Click "Sign In"
- [ ] ✓ Error message appears: "Invalid email or password"

**Test Case 1.4: Show/Hide Password**
- [ ] Click eye icon in password field
- [ ] ✓ Password becomes visible
- [ ] Click eye icon again
- [ ] ✓ Password is hidden again

**Test Case 1.5: Logout**
- [ ] Login successfully
- [ ] Click "Logout" button (top right)
- [ ] ✓ Redirected to /login
- [ ] ✓ Session is cleared

**Test Case 1.6: Session Persistence**
- [ ] Login successfully
- [ ] Refresh page (F5)
- [ ] ✓ Still logged in (no redirect to login)
- [ ] Close browser tab completely
- [ ] Open http://localhost:3000
- [ ] ✓ Should be logged in (session cookie preserved)

**Test Case 1.7: Unauthorized Access**
- [ ] Open browser DevTools (F12)
- [ ] Open Console tab
- [ ] Run: `document.cookie=""; window.location.reload()`
- [ ] ✓ Session cleared
- [ ] ✓ Redirected to /login

### 2. Navigation Tests

**Test Case 2.1: Sidebar Links (Desktop)**
- [ ] Login successfully
- [ ] Click "Dashboard" in sidebar → loads /dashboard
- [ ] Click "Products" in sidebar → loads /products
- [ ] Click "Customers" in sidebar → loads /customers
- [ ] Click "Quotations" in sidebar → loads /quotations
- [ ] Click "Applications" in sidebar → loads /applications
- [ ] Click "Settings" in sidebar → loads /settings

**Test Case 2.2: Mobile Menu**
- [ ] Login successfully
- [ ] Resize window to < 768px width
- [ ] Hamburger menu icon (☰) appears
- [ ] Click hamburger icon
- [ ] ✓ Sidebar slides in from left
- [ ] Click any menu item
- [ ] ✓ Sidebar slides out
- [ ] Click "X" button
- [ ] ✓ Sidebar closes

**Test Case 2.3: Active Link Highlighting**
- [ ] Login and navigate to /dashboard
- [ ] ✓ "Dashboard" link is highlighted (orange background)
- [ ] Navigate to /products
- [ ] ✓ "Products" link is highlighted
- [ ] Navigate to /customers
- [ ] ✓ "Customers" link is highlighted

### 3. Dashboard Tests

**Test Case 3.1: Dashboard Loads**
- [ ] Login successfully
- [ ] ✓ Dashboard page loads without errors
- [ ] ✓ Shows "Dashboard" title
- [ ] ✓ Shows stats cards (Total Customers, Products, Quotations, Applications)
- [ ] ✓ All stats show value: 0 (empty database)

**Test Case 3.2: Stats Cards Display**
- [ ] Check "Total Customers" card
- [ ] ✓ Shows icon + title + value
- [ ] Check "Total Products" card
- [ ] Check "Total Quotations" card
- [ ] Check "Total Applications" card
- [ ] ✓ All cards visible and styled correctly

**Test Case 3.3: Getting Started Section**
- [ ] Scroll down on dashboard
- [ ] ✓ "Getting Started" section visible
- [ ] ✓ Shows 4 numbered steps
- [ ] ✓ Shows company information card

### 4. Responsive Design Tests

**Test Case 4.1: Mobile (375px width)**
- [ ] Open DevTools (F12)
- [ ] Click "Toggle device toolbar" (mobile view)
- [ ] Set width: 375px (iPhone)
- [ ] ✓ Layout is readable
- [ ] ✓ No horizontal scrolling
- [ ] ✓ Hamburger menu appears
- [ ] ✓ All text is readable
- [ ] ✓ Buttons are touchable (min 44px height)

**Test Case 4.2: Tablet (768px width)**
- [ ] Set width: 768px (iPad)
- [ ] ✓ Layout adapts for tablet
- [ ] ✓ Sidebar visible on desktop still works
- [ ] ✓ Stats cards in 2 columns

**Test Case 4.3: Desktop (1200px width)**
- [ ] Set width: 1200px
- [ ] ✓ Full desktop layout
- [ ] ✓ Sidebar always visible
- [ ] ✓ Stats cards in 4 columns
- [ ] ✓ Content is not too wide

**Test Case 4.4: Large Screen (1920px width)**
- [ ] Set width: 1920px
- [ ] ✓ Content has max-width constraint
- [ ] ✓ Not stretched too much

### 5. UI/UX Tests

**Test Case 5.1: Colors & Styling**
- [ ] Login page has green theme (primary color)
- [ ] Dashboard header is white with shadow
- [ ] Sidebar is dark green
- [ ] Active menu items are orange/secondary color
- [ ] Buttons have proper hover effects
- [ ] Links have proper focus states

**Test Case 5.2: Animations**
- [ ] Menu transitions are smooth
- [ ] No jarring jumps or flickers
- [ ] Hover effects are subtle
- [ ] Loading states are visible

**Test Case 5.3: Accessibility**
- [ ] All buttons are keyboard accessible (Tab key)
- [ ] Links have visible focus outline
- [ ] Form labels are associated with inputs
- [ ] Color contrast is sufficient
- [ ] No images without alt text

### 6. Browser Compatibility Tests

- [ ] ✓ Chrome (latest)
- [ ] ✓ Firefox (latest)
- [ ] ✓ Safari (latest)
- [ ] ✓ Edge (latest)
- [ ] ✓ Mobile Chrome (Android)
- [ ] ✓ Mobile Safari (iOS)

### 7. Performance Tests

**Test Case 7.1: Page Load Speed**
- [ ] Open DevTools Network tab
- [ ] Refresh page
- [ ] ✓ Initial load < 3 seconds
- [ ] ✓ Main bundle < 500KB

**Test Case 7.2: Mobile Lighthouse Score**
- [ ] Open DevTools
- [ ] Go to Lighthouse tab
- [ ] Run "Mobile" audit
- [ ] ✓ Performance score > 80
- [ ] ✓ Accessibility score > 80
- [ ] ✓ Best Practices score > 80

### 8. PWA Tests

**Test Case 8.1: Install Prompt (Android)**
- [ ] Navigate to http://localhost:3000
- [ ] Wait 5-10 seconds
- [ ] ✓ "Install app" prompt appears (or address bar icon)
- [ ] Click "Install"
- [ ] ✓ App installs
- [ ] ✓ App icon appears on home screen

**Test Case 8.2: Works Offline (Desktop)**
- [ ] Open DevTools
- [ ] Network tab
- [ ] Set to "Offline"
- [ ] ✓ Already-loaded pages still work
- [ ] (Full offline support in later phases)

**Test Case 8.3: Manifest File**
- [ ] Open DevTools Console
- [ ] Run: `fetch('/manifest.json').then(r => r.json()).then(console.log)`
- [ ] ✓ Manifest loads successfully
- [ ] ✓ Contains app name, icons, start_url

---

## 🔍 DEBUGGING TIPS

### Check Console Errors

```javascript
// Open DevTools (F12)
// Go to Console tab
// You should see NO red errors
```

### Check Network Requests

```
DevTools → Network tab
- All requests should be 200 OK
- No 404 errors
- No CORS errors
```

### Clear Cache & Cookies

```bash
# Browser DevTools → Application tab
- Clear All (cookies, cache, local storage)
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

### Check Environment Variables

```javascript
// Console
console.log(process.env.NEXT_PUBLIC_APP_NAME)
// Should print: GAIB Agro System
```

---

## 🐛 TROUBLESHOOTING

### Issue: "Module not found" errors

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Issue: Port 3000 already in use

**Solution**:
```bash
# Use different port
npm run dev -- -p 3001
```

### Issue: Styles not loading

**Solution**:
```bash
# Rebuild Tailwind
rm -rf .next
npm run dev
```

### Issue: Login button not working

**Solution**:
- Check `.env.local` exists
- Verify credentials are correct
- Check browser console for errors
- Clear cookies: `Ctrl+Shift+Delete` → Cookies

### Issue: Mobile menu stuck open

**Solution**:
```javascript
// Console
localStorage.clear()
sessionStorage.clear()
location.reload()
```

---

## ✨ FINAL CHECKLIST BEFORE APPROVAL

### Development Environment
- [ ] Node.js 18+ installed
- [ ] npm dependencies installed
- [ ] `.env.local` created with correct values
- [ ] `npm run dev` works without errors
- [ ] No console errors or warnings
- [ ] Application loads at http://localhost:3000

### Functionality
- [ ] Login works with correct credentials
- [ ] Login fails with wrong credentials
- [ ] Logout works and clears session
- [ ] All navigation links work
- [ ] Dashboard displays correctly
- [ ] Responsive design works on all screen sizes

### Code Quality
- [ ] No TypeScript errors
- [ ] Code follows naming conventions
- [ ] Components are well-organized
- [ ] CSS is organized with Tailwind
- [ ] Comments are present where needed

### Testing
- [ ] All test cases pass
- [ ] No broken links
- [ ] No missing assets
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Tested on desktop, tablet, mobile
- [ ] Lighthouse scores acceptable

### Documentation
- [ ] README.md is complete
- [ ] Installation steps are clear
- [ ] Testing checklist is comprehensive
- [ ] Common errors are documented
- [ ] Code comments are helpful

---

## 📞 Support

If you encounter issues:

1. Check the README.md
2. Review the troubleshooting section above
3. Check browser console for errors
4. Clear cache and try again
5. Restart development server

---

## ✅ PHASE 1 COMPLETE

Once all tests pass, Phase 1 is **APPROVED** and ready for Phase 2!

**Next Phase**: Phase 2 - Database Design

---

*Document Version: 1.0*
*Last Updated: 2025*
