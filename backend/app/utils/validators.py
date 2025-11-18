from marshmallow import Schema, fields, validate, ValidationError
import re


def validate_email(email):
    """Validate email format"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    if not re.match(pattern, email):
        raise ValidationError('Invalid email format')


def validate_phone(phone):
    """Validate phone format (optional field)"""
    if phone and phone.strip():
        # Basic phone validation - allows various formats
        pattern = r'^[\d\s\-\+\(\)]{7,20}$'
        if not re.match(pattern, phone):
            raise ValidationError('Invalid phone format')


class ContactFormSchema(Schema):
    """Schema for contact form validation"""
    name = fields.Str(required=True, validate=validate.Length(min=2, max=100))
    email = fields.Email(required=True, validate=[validate.Length(max=120), validate_email])
    phone = fields.Str(validate=validate_phone, allow_none=True)
    message = fields.Str(required=True, validate=validate.Length(min=10, max=2000))
    page = fields.Str(required=True, validate=validate.Length(max=50))


class LeadFormSchema(Schema):
    """Schema for lead capture form validation"""
    name = fields.Str(required=True, validate=validate.Length(min=2, max=100))
    email = fields.Email(required=True, validate=[validate.Length(max=120), validate_email])
    phone = fields.Str(validate=validate_phone, allow_none=True)
    interest = fields.Str(required=True, validate=validate.Length(min=2, max=200))
    page = fields.Str(required=True, validate=validate.Length(max=50))


class NewsletterSchema(Schema):
    """Schema for newsletter subscription validation"""
    email = fields.Email(required=True, validate=[validate.Length(max=120), validate_email])
    page = fields.Str(required=True, validate=validate.Length(max=50))
