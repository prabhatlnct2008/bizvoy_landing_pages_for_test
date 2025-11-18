# Bizvoy Landing Pages

Two professional landing pages built with Next.js and Flask:
1. **Connectivity & Data** - Phone & SIM rental services
2. **Terroir & Insights** - Vineyard analysis and consultation

## Features

### Frontend (Next.js + React + TypeScript)
- 🚀 **Super Fast** - Static Site Generation (SSG) for optimal performance
- 📱 **Responsive Design** - Mobile-first, works on all devices
- 🎨 **Modern UI** - Tailwind CSS with smooth animations (Framer Motion)
- ✨ **Exit-Intent Popup** - Captures leads before visitors leave
- 📋 **Form Validation** - Client-side validation with React Hook Form
- 🎯 **Multiple CTAs** - Strategic placement of call-to-action buttons
- 🔄 **Modal System** - Lead capture, exit-intent, and info modals

### Backend (Flask REST API)
- 🔌 **RESTful API** - Clean, documented endpoints
- 💾 **Database** - SQLAlchemy with SQLite (easily upgradable to PostgreSQL)
- ✅ **Validation** - Marshmallow schemas for data validation
- 📊 **Logging** - Comprehensive logging system
- 🔒 **CORS Enabled** - Secure cross-origin requests
- 🚦 **Error Handling** - Proper HTTP status codes and error messages

## Project Structure

```
bizvoy_landing_pages_for_test/
├── frontend/                    # Next.js application
│   ├── app/
│   │   ├── page.tsx            # Landing Page 1 (Connectivity & Data)
│   │   ├── terroir-insights/
│   │   │   └── page.tsx        # Landing Page 2 (Terroir & Insights)
│   │   ├── layout.tsx          # Root layout
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── common/             # Reusable UI components
│   │   ├── modals/             # Modal components
│   │   ├── forms/              # Form components
│   │   └── sections/           # Page sections
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utilities and API client
│   └── package.json
│
├── backend/                     # Flask API
│   ├── app/
│   │   ├── __init__.py         # App factory
│   │   ├── models.py           # Database models
│   │   ├── api/
│   │   │   └── routes.py       # API endpoints
│   │   └── utils/
│   │       └── validators.py   # Input validation
│   ├── venv/                   # Virtual environment
│   ├── config.py               # Configuration
│   ├── run.py                  # Development server
│   ├── wsgi.py                 # Production WSGI
│   └── requirements.txt
│
└── screenshots/                # Design references
```

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Python 3.8+
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd bizvoy_landing_pages_for_test
```

### 2. Setup Backend (Flask)

```bash
cd backend

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
# On Linux/Mac:
source venv/bin/activate
# On Windows:
# .\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the Flask server
python run.py
```

The API will be available at `http://localhost:5000`

### 3. Setup Frontend (Next.js)

Open a new terminal:

```bash
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local

# Run the development server
npm run dev
```

The application will be available at `http://localhost:3000`

## Available URLs

- **Landing Page 1 (Connectivity & Data)**: `http://localhost:3000/`
- **Landing Page 2 (Terroir & Insights)**: `http://localhost:3000/terroir-insights`

## API Endpoints

All endpoints are prefixed with `/api/v1`

### Health Check
```
GET /api/v1/health
```

### Contact Form
```
POST /api/v1/submit-contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",  // optional
  "message": "Your message here",
  "page": "connectivity-data"
}
```

### Lead Capture
```
POST /api/v1/submit-lead
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",  // optional
  "interest": "Phone rental for 2 weeks",
  "page": "connectivity-data"
}
```

### Newsletter Subscription
```
POST /api/v1/subscribe
Content-Type: application/json

{
  "email": "john@example.com",
  "page": "terroir-insights"
}
```

## Building for Production

### Frontend
```bash
cd frontend
npm run build
npm run start
```

For static export:
```bash
npm run build
# The static files will be in the 'out' directory
```

### Backend
```bash
cd backend
source venv/bin/activate
gunicorn -w 4 -b 0.0.0.0:5000 wsgi:application
```

## Deployment to PythonAnywhere

### Backend Deployment

1. **Upload files to PythonAnywhere**
   - Upload the entire `backend` folder to your PythonAnywhere account

2. **Setup Virtual Environment**
   ```bash
   cd ~/bizvoy_landing_pages_for_test/backend
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

3. **Configure WSGI File**
   - In PythonAnywhere Web tab, configure the WSGI file to point to `wsgi.py`
   - Update the path in WSGI configuration:
   ```python
   import sys
   path = '/home/yourusername/bizvoy_landing_pages_for_test/backend'
   if path not in sys.path:
       sys.path.insert(0, path)

   from wsgi import application
   ```

4. **Set Environment Variables**
   - Set `FLASK_ENV=production`
   - Set a secure `SECRET_KEY`

5. **Configure Static Files**
   - No static files needed for API-only backend

### Frontend Deployment

**Option 1: Deploy on Vercel (Recommended)**
```bash
cd frontend
npm install -g vercel
vercel
```

**Option 2: Deploy on PythonAnywhere as Static Files**
1. Build the application:
   ```bash
   npm run build
   ```
2. Upload the `out` directory to PythonAnywhere
3. Configure static files mapping in the Web tab

**Update API URL**
- Set `NEXT_PUBLIC_API_URL` to your PythonAnywhere API URL in production

## Performance Optimization

### Implemented Optimizations

1. **Static Site Generation (SSG)** - Both pages pre-rendered at build time
2. **Code Splitting** - Automatic by Next.js
3. **Image Optimization** - Next.js Image component
4. **CSS Optimization** - Tailwind CSS with purging
5. **Font Optimization** - Google Fonts via next/font
6. **Lazy Loading** - Modal components loaded on-demand
7. **Caching** - Proper cache headers
8. **Minification** - Production builds minified
9. **Compression** - Gzip enabled

### Performance Metrics Target

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: 90+

## Database

The application uses SQLite by default for development. For production on PythonAnywhere:

**Option 1: Use SQLite (Good for moderate traffic)**
- Default configuration works out of the box

**Option 2: Use MySQL (Better for high traffic)**
1. Create a MySQL database in PythonAnywhere
2. Update `DATABASE_URL` in environment variables:
   ```
   DATABASE_URL=mysql://username:password@host/database
   ```
3. Install MySQL driver: `pip install pymysql`

## Features Breakdown

### Exit-Intent Modal
- Triggers when user's cursor leaves the viewport
- Shows only once per session (localStorage)
- Newsletter subscription form
- Animated entrance

### Lead Capture Modals
- Triggered by CTA buttons throughout pages
- Form validation
- Success animations
- Auto-close after submission

### Contact Forms
- Full validation
- Success/error states
- Responsive design
- Clear error messages

### FAQ Sections
- Accordion-style
- Smooth animations
- Easy to update content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technologies Used

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Axios

### Backend
- Flask 3.0
- SQLAlchemy
- Marshmallow
- Flask-CORS
- Gunicorn

## License

Proprietary - All rights reserved

## Support

For issues or questions, please contact the development team.
