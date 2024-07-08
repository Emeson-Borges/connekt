from corsheaders.middleware import CorsMiddleware
from django.conf import settings

class CustomCorsMiddleware(CorsMiddleware):
    def process_response(self, request, response):
        if response.has_header('Access-Control-Allow-Origin'):
            response['Access-Control-Allow-Origin'] = settings.CORS_ALLOWED_ORIGIN
        return response