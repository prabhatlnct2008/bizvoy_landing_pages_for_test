"""
WSGI configuration for PythonAnywhere deployment
"""
import sys
import os

# Add the backend directory to Python path
path = os.path.dirname(os.path.abspath(__file__))
if path not in sys.path:
    sys.path.insert(0, path)

from app import create_app

# Create the application
application = create_app('production')

if __name__ == '__main__':
    application.run()
