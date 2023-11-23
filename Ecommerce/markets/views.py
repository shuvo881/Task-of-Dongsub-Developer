from django.shortcuts import render
from django.views.generic.base import TemplateView
from .models import User

class DashboardView(TemplateView):
    template_name = 'index.html'
    
    def get_context_data(self, **kwargs) -> dict[str]:
        context = super().get_context_data(**kwargs)
        context["users"] = User.objects.all() 
        return context
    
