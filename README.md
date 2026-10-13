# Athila Taher Mahmoud — Personal Portfolio Website
### Modern Scientific & AI Technical Portfolio (React, Vite, Tailwind CSS)

A modern, responsive, and bilingual portfolio website for **Athila Taher Mahmoud**, Senior Chemistry and Biochemistry student at Cairo University, DEPI AI & Data Science Intern, and Medical Molecular Genetics Researcher.

---

## 🌟 Key Highlights & Features

1. **Complete CV Data Integration**:
   - **Personal Profile**: Athila Taher Mahmoud (Senior Chemistry & Biochemistry at Cairo University).
   - **Hands-on Experience & Labs**:
     - **DEPI (Digital Egypt Pioneers Initiative - MCIT)**: AI & Data Science Intern (Python, NumPy, Pandas, Scikit-Learn, Machine Learning, EDA).
     - **NRC (National Research Centre)**: Medical Molecular Genetics Trainee (DNA/RNA extraction, PCR, RT-qPCR, Gel Electrophoresis, BSL-2).
     - **VSVRI (Veterinary Serum & Vaccine Research Institute)**: Vaccine & Serum Research Trainee (Bioreactors, ELISA, Sterility Testing, Lyophilization).
     - **CID Pharmaceutical Company**: Pharmaceutical Production & QC Trainee (GMP, UV-Vis Spectrophotometry, Dissolution, IPQC).
     - **Undercover Medics**: Scientific Instructor & Medical Educator (Clinical Biochemistry, Medical Curricula, Pedagogy).
   - **Academic Credentials**: Cairo University B.Sc. in Chemistry & Biochemistry (Senior Year) with coursework in Clinical Biochemistry, Enzymology, Molecular Biology, and Analytical Separation.
   - **Verified Certifications**: Interactive modal inspector for all credentials with verification IDs and competencies.
   - **Neatly Grouped Skills**: Biochemistry & Wet Lab, Molecular Genetics, AI & Data Science, Pharma QC & GMP, Soft Skills, and Bilingual Languages (Arabic Native, English Professional).
   - **Contact Channels**: Direct copy actions and links for Email (`athilataher@gmail.com`), Phone (`01119900715`), and LinkedIn.

2. **Bilingual Support (English & Arabic)**:
   - Dynamic Language switcher (`EN` / `العربية`).
   - Full **RTL** layout support for Arabic and **LTR** for English.
   - Distinctive typography using Google Fonts (**Cairo & Tajawal** for Arabic; **Plus Jakarta Sans & Inter** for English; **JetBrains Mono** for metrics & badges).
   - Persistent language preference saved in `localStorage`.

3. **Dark & Light Mode**:
   - Smooth theme switcher with animated Sun/Moon toggle.
   - Deep obsidian/slate neutral palette for dark mode with subtle bio-luminescent borders.
   - Clinical laboratory off-white palette for light mode with high-contrast typography.
   - Persistent theme state saved in `localStorage`.

4. **Pure Typographic & Scientific Layout**:
   - **Zero user profile avatar or portrait photos** — strictly structured around precision typography, scientific badges, and data hierarchy.
   - Color palette inspired by molecular life sciences (Emerald `#10b981`), diagnostics (Cyan/Teal `#06b6d4`), and artificial intelligence (Deep Indigo `#6366f1`).
   - High-tech vector SVG molecular lattices and data grid patterns.

---

## 📁 Project Architecture

```
athila-portfolio/
├── package.json                   # Dependencies (React 18, Tailwind, Lucide, Vite)
├── vite.config.js                 # Vite bundler config
├── tailwind.config.js             # Scientific theme color scheme & fonts
├── postcss.config.js              # PostCSS plugins
├── index.html                     # Main Vite HTML template with Google Fonts
├── preview.html                   # Zero-build standalone preview file (open anywhere!)
├── README.md                      # Documentation
└── src/
    ├── main.jsx                   # React entry point
    ├── App.jsx                    # Root App component
    ├── index.css                  # Tailwind styles, glassmorphism, scrollbars
    ├── context/
    │   ├── ThemeContext.jsx       # Dark/Light mode provider & persistence
    │   └── LanguageContext.jsx    # EN/AR language provider & RTL/LTR switcher
    ├── translations/
    │   ├── en.js                  # Complete English translation dictionary
    │   ├── ar.js                  # Complete Arabic translation dictionary
    │   └── index.js               # Translation exports
    └── components/
        ├── ScientificBackdrop.jsx # Ambient gradients & molecular SVG motifs
        ├── Navbar.jsx             # Responsive glassmorphism nav with controls
        ├── Hero.jsx               # Typographic headline, bio, and quick actions
        ├── QuickMetrics.jsx       # 4 KPI cards (Internships, Standing, AI, Competency)
        ├── ExperienceTimeline.jsx # Filterable timeline for DEPI, NRC, VSVRI, CID, Medics
        ├── EducationCertifications.jsx # Cairo Univ degree + Cert cards
        ├── CertificateModal.jsx   # Interactive credential verification modal
        ├── SkillsSection.jsx      # Grouped competencies & language proficiencies
        ├── ContactSection.jsx     # Copy-to-clipboard email/phone, LinkedIn, & dispatch form
        └── Footer.jsx             # Clean footer with academic credits & back-to-top
```

---

## 🚀 How to Run

### Method 1: Instant Browser Preview (Zero Installation)
Simply open `preview.html` directly in any web browser (Chrome, Edge, Firefox, Safari):
- On Windows: Double-click `C:\Users\maria\.gemini\antigravity\scratch\athila-portfolio\preview.html`
- Or via Python local server:
  ```powershell
  python -m http.server 8080 --directory "C:\Users\maria\.gemini\antigravity\scratch\athila-portfolio"
  ```
  Then open `http://localhost:8080/preview.html`.

### Method 2: Standard Vite Development Server (with Node.js)
```powershell
cd C:\Users\maria\.gemini\antigravity\scratch\athila-portfolio
npm install
npm run dev
```
The site will run at `http://localhost:3000`.
