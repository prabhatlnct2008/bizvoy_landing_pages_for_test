import os
from datetime import timedelta

basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    """Base configuration"""
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key-change-in-production'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'bizvoy.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # CORS settings
    CORS_HEADERS = 'Content-Type'

    # Rate limiting (optional - for production)
    RATELIMIT_ENABLED = os.environ.get('RATELIMIT_ENABLED', 'False') == 'True'


class DevelopmentConfig(Config):
    """Development configuration"""
    DEBUG = True
    TESTING = False


class ProductionConfig(Config):
    """Production configuration"""
    DEBUG = False
    TESTING = False
    # In production, make sure to set SECRET_KEY environment variable


config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
