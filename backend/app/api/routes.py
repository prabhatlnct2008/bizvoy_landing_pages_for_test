from flask import Blueprint, request, jsonify, current_app
from app import db
from app.models import ContactSubmission, LeadSubmission, NewsletterSubscription
from app.utils.validators import ContactFormSchema, LeadFormSchema, NewsletterSchema
from marshmallow import ValidationError
from sqlalchemy.exc import IntegrityError

api_bp = Blueprint('api', __name__)

contact_schema = ContactFormSchema()
lead_schema = LeadFormSchema()
newsletter_schema = NewsletterSchema()


@api_bp.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'message': 'Bizvoy API is running'
    }), 200


@api_bp.route('/submit-contact', methods=['POST'])
def submit_contact():
    """Handle contact form submissions"""
    try:
        # Validate request data
        data = contact_schema.load(request.json)

        # Create new submission
        submission = ContactSubmission(
            name=data['name'],
            email=data['email'],
            phone=data.get('phone', ''),
            message=data['message'],
            page=data['page']
        )

        # Save to database
        db.session.add(submission)
        db.session.commit()

        current_app.logger.info(f'Contact form submitted: {data["email"]} from {data["page"]}')

        return jsonify({
            'success': True,
            'message': 'Thank you for contacting us! We will get back to you soon.',
            'id': submission.id
        }), 201

    except ValidationError as err:
        current_app.logger.warning(f'Validation error in contact form: {err.messages}')
        return jsonify({
            'success': False,
            'message': 'Validation error',
            'errors': err.messages
        }), 400

    except Exception as e:
        current_app.logger.error(f'Error submitting contact form: {str(e)}')
        db.session.rollback()
        return jsonify({
            'success': False,
            'message': 'An error occurred. Please try again later.'
        }), 500


@api_bp.route('/submit-lead', methods=['POST'])
def submit_lead():
    """Handle lead capture form submissions"""
    try:
        # Validate request data
        data = lead_schema.load(request.json)

        # Create new lead
        lead = LeadSubmission(
            name=data['name'],
            email=data['email'],
            phone=data.get('phone', ''),
            interest=data['interest'],
            page=data['page']
        )

        # Save to database
        db.session.add(lead)
        db.session.commit()

        current_app.logger.info(f'Lead captured: {data["email"]} from {data["page"]}')

        return jsonify({
            'success': True,
            'message': 'Thank you for your interest! We will contact you soon.',
            'id': lead.id
        }), 201

    except ValidationError as err:
        current_app.logger.warning(f'Validation error in lead form: {err.messages}')
        return jsonify({
            'success': False,
            'message': 'Validation error',
            'errors': err.messages
        }), 400

    except Exception as e:
        current_app.logger.error(f'Error submitting lead form: {str(e)}')
        db.session.rollback()
        return jsonify({
            'success': False,
            'message': 'An error occurred. Please try again later.'
        }), 500


@api_bp.route('/subscribe', methods=['POST'])
def subscribe_newsletter():
    """Handle newsletter subscriptions"""
    try:
        # Validate request data
        data = newsletter_schema.load(request.json)

        # Check if email already exists
        existing = NewsletterSubscription.query.filter_by(email=data['email']).first()
        if existing:
            if existing.active:
                return jsonify({
                    'success': True,
                    'message': 'You are already subscribed to our newsletter!'
                }), 200
            else:
                # Reactivate subscription
                existing.active = True
                db.session.commit()
                current_app.logger.info(f'Newsletter subscription reactivated: {data["email"]}')
                return jsonify({
                    'success': True,
                    'message': 'Welcome back! Your subscription has been reactivated.'
                }), 200

        # Create new subscription
        subscription = NewsletterSubscription(
            email=data['email'],
            page=data['page']
        )

        # Save to database
        db.session.add(subscription)
        db.session.commit()

        current_app.logger.info(f'Newsletter subscription: {data["email"]} from {data["page"]}')

        return jsonify({
            'success': True,
            'message': 'Thank you for subscribing! Check your email for confirmation.',
            'id': subscription.id
        }), 201

    except ValidationError as err:
        current_app.logger.warning(f'Validation error in newsletter subscription: {err.messages}')
        return jsonify({
            'success': False,
            'message': 'Validation error',
            'errors': err.messages
        }), 400

    except IntegrityError:
        db.session.rollback()
        return jsonify({
            'success': True,
            'message': 'You are already subscribed to our newsletter!'
        }), 200

    except Exception as e:
        current_app.logger.error(f'Error subscribing to newsletter: {str(e)}')
        db.session.rollback()
        return jsonify({
            'success': False,
            'message': 'An error occurred. Please try again later.'
        }), 500


@api_bp.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return jsonify({
        'success': False,
        'message': 'Endpoint not found'
    }), 404


@api_bp.errorhandler(405)
def method_not_allowed(error):
    """Handle 405 errors"""
    return jsonify({
        'success': False,
        'message': 'Method not allowed'
    }), 405
