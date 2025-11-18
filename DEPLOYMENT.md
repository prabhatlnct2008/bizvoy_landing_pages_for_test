# Deployment Guide for PythonAnywhere

This guide provides detailed step-by-step instructions for deploying both the Flask backend and Next.js frontend on PythonAnywhere.

## Prerequisites

- PythonAnywhere account (Free or Paid)
- Git repository with your code
- Basic knowledge of command line

## Part 1: Backend Deployment (Flask API)

### Step 1: Upload Code to PythonAnywhere

1. **Login to PythonAnywhere** and open a Bash console

2. **Clone your repository**:
   ```bash
   cd ~
   git clone <your-repository-url> bizvoy_landing_pages_for_test
   cd bizvoy_landing_pages_for_test/backend
   ```

### Step 2: Setup Python Environment

1. **Create virtual environment**:
   ```bash
   python3.10 -m venv venv
   source venv/bin/activate
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Test the application**:
   ```bash
   python run.py
   ```
   Press Ctrl+C to stop after verifying it works.

### Step 3: Configure Web App

1. **Go to Web tab** in PythonAnywhere dashboard

2. **Click "Add a new web app"**
   - Choose "Manual configuration"
   - Select Python 3.10

3. **Configure the WSGI file**:
   - Click on the WSGI configuration file link
   - Delete all content and replace with:

   ```python
   import sys
   import os

   # Add your project directory to the sys.path
   project_home = '/home/yourusername/bizvoy_landing_pages_for_test/backend'
   if project_home not in sys.path:
       sys.path.insert(0, project_home)

   # Set environment variables
   os.environ['FLASK_ENV'] = 'production'
   os.environ['SECRET_KEY'] = 'your-super-secret-key-change-this'

   # Import your application
   from wsgi import application
   ```

   **Important**: Replace `yourusername` with your actual PythonAnywhere username

4. **Configure Virtual Environment**:
   - In the Web tab, find "Virtualenv" section
   - Enter the path: `/home/yourusername/bizvoy_landing_pages_for_test/backend/venv`
   - Replace `yourusername` with your actual username

5. **Set Working Directory** (optional but recommended):
   - In the "Code" section
   - Set working directory to: `/home/yourusername/bizvoy_landing_pages_for_test/backend`

### Step 4: Initialize Database

1. **Open a Bash console** and run:
   ```bash
   cd ~/bizvoy_landing_pages_for_test/backend
   source venv/bin/activate
   python
   ```

2. **In the Python shell**:
   ```python
   from app import create_app, db
   app = create_app('production')
   with app.app_context():
       db.create_all()
   exit()
   ```

### Step 5: Reload and Test

1. **Reload your web app** using the green button in the Web tab

2. **Test the API**:
   ```bash
   curl https://yourusername.pythonanywhere.com/api/v1/health
   ```

   You should see:
   ```json
   {"status":"healthy","message":"Bizvoy API is running"}
   ```

## Part 2: Frontend Deployment

### Option A: Deploy on Vercel (Recommended - Free & Fast)

This is the recommended option as Vercel is optimized for Next.js and provides:
- Automatic SSL
- Global CDN
- Excellent performance
- Zero configuration

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Update API URL**:
   - Edit `frontend/.env.local`:
   ```
   NEXT_PUBLIC_API_URL=https://yourusername.pythonanywhere.com/api/v1
   ```

3. **Deploy**:
   ```bash
   cd frontend
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm settings
   - Deploy!

5. **Set Environment Variable in Vercel**:
   - Go to Vercel dashboard
   - Select your project → Settings → Environment Variables
   - Add: `NEXT_PUBLIC_API_URL` = `https://yourusername.pythonanywhere.com/api/v1`

### Option B: Deploy on PythonAnywhere (Static Export)

If you prefer to host everything on PythonAnywhere:

1. **Build the Next.js app locally**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Upload the build folder**:
   - Use FileZilla or PythonAnywhere file upload
   - Upload the `.next/static` and `public` folders to PythonAnywhere

3. **Create a new Web App** for frontend:
   - Go to Web tab → Add new web app
   - Choose "Manual configuration" with Python

4. **Configure Static Files**:
   - In the Web tab, under "Static files" section
   - Add mapping:
     - URL: `/`
     - Directory: `/home/yourusername/bizvoy_landing_pages_for_test/frontend/out`

**Note**: This option requires you to rebuild and re-upload on every change.

### Option C: Deploy on Netlify (Alternative - Also Free & Fast)

1. **Build the app**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

4. **Set Environment Variable**:
   - Netlify dashboard → Site settings → Environment variables
   - Add: `NEXT_PUBLIC_API_URL` = `https://yourusername.pythonanywhere.com/api/v1`

## Part 3: CORS Configuration

Since frontend and backend are on different domains, ensure CORS is properly configured:

1. **Update Flask CORS settings** in `backend/app/__init__.py`:
   ```python
   CORS(app, resources={
       r"/api/*": {
           "origins": [
               "https://your-vercel-domain.vercel.app",
               "https://yourusername.pythonanywhere.com",
               "http://localhost:3000"  # for local development
           ],
           "methods": ["GET", "POST", "OPTIONS"],
           "allow_headers": ["Content-Type"]
       }
   })
   ```

2. **Reload your Flask app** on PythonAnywhere

## Part 4: Testing the Deployment

### Test Backend API

```bash
# Health check
curl https://yourusername.pythonanywhere.com/api/v1/health

# Test form submission
curl -X POST https://yourusername.pythonanywhere.com/api/v1/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","page":"test"}'
```

### Test Frontend

1. Visit your deployed frontend URL
2. Test all forms:
   - Contact form
   - Lead capture modal
   - Newsletter subscription
3. Test exit-intent (move cursor to top of browser)
4. Navigate between pages
5. Test on mobile device

## Part 5: Database Backup (Important!)

### Backup SQLite Database

```bash
cd ~/bizvoy_landing_pages_for_test/backend
cp bizvoy.db bizvoy_backup_$(date +%Y%m%d).db
```

### Setup Automatic Backups

1. Go to PythonAnywhere → Tasks tab
2. Create a scheduled task:
   ```bash
   cd ~/bizvoy_landing_pages_for_test/backend && cp bizvoy.db ~/backups/bizvoy_$(date +\%Y\%m\%d).db
   ```
3. Set to run daily

## Part 6: Monitoring and Logs

### View Flask Logs

1. **Error Log**: Available in Web tab → Log files → Error log
2. **Server Log**: Available in Web tab → Log files → Server log
3. **Application Log**: `~/bizvoy_landing_pages_for_test/backend/logs/bizvoy.log`

### View Database Entries

```bash
cd ~/bizvoy_landing_pages_for_test/backend
source venv/bin/activate
python
```

```python
from app import create_app, db
from app.models import ContactSubmission, LeadSubmission, NewsletterSubscription

app = create_app('production')
with app.app_context():
    # View all contact submissions
    contacts = ContactSubmission.query.all()
    for c in contacts:
        print(c.to_dict())

    # View all leads
    leads = LeadSubmission.query.all()
    for l in leads:
        print(l.to_dict())

    # View all newsletter subscriptions
    subscribers = NewsletterSubscription.query.all()
    for s in subscribers:
        print(s.to_dict())
```

## Part 7: Updating the Application

### Update Backend

```bash
cd ~/bizvoy_landing_pages_for_test
git pull origin main
cd backend
source venv/bin/activate
pip install -r requirements.txt  # if dependencies changed
```

Then reload the web app in PythonAnywhere Web tab.

### Update Frontend (Vercel)

If using Vercel:
```bash
git push origin main
```
Vercel will automatically rebuild and deploy.

If using static export on PythonAnywhere:
```bash
cd frontend
npm run build
# Re-upload the out directory
```

## Troubleshooting

### Backend Issues

1. **500 Error**:
   - Check error log in Web tab
   - Verify WSGI configuration
   - Check Python path in WSGI file

2. **Database Locked**:
   - SQLite doesn't handle high concurrency well
   - Consider upgrading to MySQL on PythonAnywhere

3. **Module Not Found**:
   - Verify virtual environment path is correct
   - Reinstall requirements: `pip install -r requirements.txt`

### Frontend Issues

1. **API Calls Failing**:
   - Check CORS configuration
   - Verify `NEXT_PUBLIC_API_URL` is set correctly
   - Check browser console for errors

2. **Build Errors**:
   - Clear `.next` folder: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && npm install`
   - Rebuild: `npm run build`

## Performance Optimization for Production

### Backend

1. **Use MySQL instead of SQLite** for better concurrency:
   ```bash
   pip install pymysql
   ```
   Update `DATABASE_URL` in WSGI file

2. **Enable Gzip compression** (automatic on PythonAnywhere)

3. **Implement caching** for frequently accessed data

### Frontend

1. **Optimize images** before uploading
2. **Enable CDN** (automatic with Vercel/Netlify)
3. **Minimize JavaScript bundle** (automatic with Next.js)

## Security Checklist

- [ ] Changed `SECRET_KEY` from default
- [ ] CORS configured with specific origins (not wildcard)
- [ ] Environment variables set properly
- [ ] Database backed up
- [ ] HTTPS enabled (automatic on PythonAnywhere/Vercel)
- [ ] Form validation working
- [ ] Error messages don't leak sensitive info

## Support

If you encounter issues:
1. Check PythonAnywhere forums
2. Review application logs
3. Test API endpoints individually
4. Verify environment variables

## Costs

- **PythonAnywhere Free**: Limited to 1 web app, good for testing
- **PythonAnywhere Hacker ($5/month)**: Multiple web apps, MySQL
- **Vercel Free**: Perfect for Next.js, includes SSL and CDN
- **Total Recommended**: ~$5/month (PythonAnywhere for backend + Vercel free for frontend)
