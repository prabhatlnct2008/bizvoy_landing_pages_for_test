from app import db
from datetime import datetime


class ContactSubmission(db.Model):
    """Model for contact form submissions"""
    __tablename__ = 'contact_submissions'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), nullable=True)
    message = db.Column(db.Text, nullable=False)
    page = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<ContactSubmission {self.email}>'

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'message': self.message,
            'page': self.page,
            'created_at': self.created_at.isoformat()
        }


class LeadSubmission(db.Model):
    """Model for lead capture submissions"""
    __tablename__ = 'lead_submissions'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), nullable=True)
    interest = db.Column(db.String(200), nullable=False)
    page = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<LeadSubmission {self.email}>'

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'interest': self.interest,
            'page': self.page,
            'created_at': self.created_at.isoformat()
        }


class NewsletterSubscription(db.Model):
    """Model for newsletter subscriptions"""
    __tablename__ = 'newsletter_subscriptions'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), nullable=False, unique=True)
    page = db.Column(db.String(50), nullable=False)
    active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<NewsletterSubscription {self.email}>'

    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'page': self.page,
            'active': self.active,
            'created_at': self.created_at.isoformat()
        }
