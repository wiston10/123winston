# Quick Setup Guide - Winston Portfolio

## 🚀 Quick Start (5 minutes)

### Step 1: Update Your Information
1. Open `sections/about.html`
   - Update phone number: Replace `tel:+1234567890`
   - Verify email is correct
   - Add your real GitHub link

### Step 2: Update Social Media
1. Open `index.html`
   - Find the `.ts-social-icons` section
   - Replace placeholder URLs with your actual social media profiles

### Step 3: Add Your CV
1. Get your CV in PDF format
2. Rename it to `CV_Winston_Navarro.pdf`
3. Replace the file in `assets/` folder

### Step 4: Customize Skills
1. Open `sections/skills.html`
2. Adjust the percentages in `data-progress-width` attributes
3. Current values: 95%, 90%, 85%, 92%

### Step 5: Update Portfolio
1. Open `sections/portfolio.html`
2. Replace images with your actual project screenshots
3. Update project descriptions

### Step 6: Color Customization (Optional)
Open `assets/css/style.css` and search for:
- `#f26c4f` - Primary orange color
- `#d44729` - Secondary darker orange
- Replace with your brand colors

### Step 7: Test Locally
```bash
# Using Python 3
python -m http.server 8000

# OR using VS Code Live Server
# Right-click index.html → Open with Live Server
```

### Step 8: Deploy
**GitHub Pages:**
1. Push to GitHub
2. Settings → Pages → Select branch → Save

**Netlify:**
1. Drag and drop folder to netlify.com/drop

---

## 📝 Common Customizations

### Change Background
In `assets/css/style.css`, find:
```css
body {
    background: linear-gradient(135deg, #020312 0%, #1a0e2e 25%, #2d1654 50%, #1a0e2e 75%, #020312 100%);
}
```

### Add More Services
Copy a service block in `sections/services.html`:
```html
<div class="col-sm-6 col-md-4 col-xl-4">
    <div class="ts-item" data-animate="ts-fadeInUp">
        <!-- Content here -->
    </div>
</div>
```

### Change Title Animation Words
In `index.html`, find `.ts-title-rotate` and update:
```html
<span class="active">Your First Title</span>
<span>Your Second Title</span>
<span>Your Third Title</span>
```

---

## 🐛 Troubleshooting

**Problem: Sections not loading**
- Ensure you're running on a local server (not just opening the HTML file)
- Check browser console for errors

**Problem: Contact form not working**
- You need a PHP server or use a service like Formspree/EmailJS
- Update `assets/php/email.php` with your email

**Problem: Images not showing**
- Check that image paths are correct
- Verify images exist in `assets/img/` folder

**Problem: Styles not applying**
- Clear browser cache (Ctrl/Cmd + Shift + R)
- Check for CSS syntax errors

---

## ✅ Pre-Launch Checklist

- [ ] Updated all personal information
- [ ] Added real CV file
- [ ] Updated social media links
- [ ] Tested contact form
- [ ] Checked all images load correctly
- [ ] Tested on mobile devices
- [ ] Verified all links work
- [ ] Updated meta descriptions
- [ ] Added favicon
- [ ] Tested in different browsers
- [ ] Checked for console errors
- [ ] Optimized images
- [ ] Set up analytics (optional)

---

## 📞 Need Help?

Check the full README.md for detailed documentation.
