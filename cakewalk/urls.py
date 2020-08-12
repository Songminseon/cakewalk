"""cakewalk URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
import main.views
import member.views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', main.views.main, name="index"),
    path('member/signup_page/', member.views.signup_page, name="signup_page"),
    path('main/<int:product_id>/', main.views.detail, name='detail'),
    path('like/<int:product_id>', main.views.product_like, name='like'),
    path('member/login/', member.views.login , name='login'),
    path('member/logout/', member.views.logout , name='logout'),    
    path('member/signup/', member.views.signup , name='signup'),    
    path('member/accounts/', include('allauth.urls')),
    path('member/activate/<str:uid64>/<str:token>/', member.views.activate , name='activate'), 
    path('main/pay', main.views.pay_page, name="pay_page")
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
