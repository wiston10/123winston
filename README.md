
# Winston Navarro - Personal Portfolio

![Portfolio Preview](assets/img/DSC03586.JPG)

A modern, responsive portfolio website showcasing my skills in web design, photography, video editing, and software development.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Glassmorphism effects, smooth animations, and gradient backgrounds
- **Dynamic Content**: Sections loaded dynamically for better performance
- **Interactive Elements**: Hover effects, smooth scrolling, and animated progress bars
- **Contact Form**: Integrated contact form for easy communication
- **Portfolio Gallery**: Showcase of projects with lightbox functionality
- **Skills Visualization**: Animated progress bars showing skill proficiency

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3 (with advanced effects: gradients, transformations, glassmorphism)
- JavaScript (ES6+)
- Bootstrap 4
- jQuery

### Libraries & Plugins
- **Owl Carousel**: For image carousels
- **Magnific Popup**: Lightbox for portfolio images
- **Scrolla**: Scroll animations
- **Odometer**: Animated number counters
- **Font Awesome**: Icon library
- **jQuery Validate**: Form validation

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── assets/
│   ├── bootstrap/          # Bootstrap framework
│   ├── css/
│   │   └── style.css      # Main stylesheet (with custom improvements)
│   ├── font-awesome/      # Icon fonts
│   ├── img/               # Images and graphics
│   ├── js/                # JavaScript files
│   │   ├── custom.js      # Custom JavaScript
│   │   ├── custom.hero.js # Hero section animations
│   │   └── sections-loader.js # Dynamic section loading
│   └── php/
│       └── email.php      # Contact form handler
└── sections/              # HTML section files
    ├── about.html         # About Me section
    ├── contact.html       # Contact section
    ├── cta.html           # Call to Action
    ├── partners.html      # Technologies/Partners
    ├── portfolio.html     # Portfolio gallery
    ├── services.html      # Services offered
    └── skills.html        # Skills & expertise
```

## 🎨 Visual Improvements

### Custom Enhancements
- ✨ Animated gradient background with overlay effects
- 💫 Smooth hover transitions on all interactive elements
- 🎯 Glassmorphism cards with backdrop blur
- 🌈 Gradient buttons with shadow effects
- 📱 Enhanced mobile responsiveness
- 🎭 Professional navigation with active indicators
- 💼 Improved portfolio gallery with scale effects

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, but recommended for testing)

### Installation

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/Winston10/portfolio.git
   cd portfolio
   ```

2. **Open with a local server**
   
   **Option A: Using Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option B: Using Node.js (http-server)**
   ```bash
   npx http-server -p 8000
   ```
   
   **Option C: Using VS Code**
   - Install "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

3. **Access the portfolio**
   - Open your browser and navigate to `http://localhost:8000`

### Direct Usage
You can also simply open `index.html` directly in your browser, though some features may work best with a local server.

## 📝 Customization

### Update Personal Information
1. **Edit sections/about.html**: Update your bio, contact details, and links
2. **Edit sections/services.html**: Customize your service offerings
3. **Edit sections/skills.html**: Adjust skill percentages and descriptions
4. **Edit sections/portfolio.html**: Add your own portfolio items and images

### Change Colors
Primary colors are defined in `assets/css/style.css`:
- Primary color: `#f26c4f` 
- Secondary color: `#d44729`
- Background: Gradient from `#020312` to `#2d1654`

To change, search and replace these hex values in the CSS file.

### Add Your CV
Replace `assets/CV_Winston_Navarro.pdf` with your actual CV file.

### Update Social Media Links
Edit the social media links in `index.html` (hero section) with your actual profiles.

## 📧 Contact Form Setup

The contact form requires server-side PHP processing. To make it work:

1. Ensure you have PHP installed on your server
2. Update the email address in `assets/php/email.php`
3. Configure your server to allow PHP mail functionality

For testing locally, you can use services like:
- Formspree
- EmailJS
- Netlify Forms (if deploying to Netlify)

## 🌐 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select your branch and click Save

### Netlify
1. Connect your GitHub repository to Netlify
2. Configure build settings (none needed for static site)
3. Deploy

### Traditional Hosting
Upload all files via FTP to your web hosting service.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Credits

- **Design & Development**: Winston Navarro
- **Template Base**: Selfer by ThemeStarz (heavily customized)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Roboto)

## 📞 Contact

Winston Navarro - [Wfernandonavarroa@gmail.com](mailto:Wfernandonavarroa@gmail.com)

GitHub: [@Winston10](https://github.com/Winston10)

---

**Made with ❤️ by Winston Navarro**
