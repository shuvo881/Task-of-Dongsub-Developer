from rest_framework import routers
from django.urls import path, include
from .api_views import (
    UserViewSet,
    ShopViewSet,
    ProductCategoryViewSet,
    ProductColorViewSet,
    ProductViewSet,
    CartViewSet,
    OrderViewSet,
)
from .views import DashboardView

router = routers.DefaultRouter()


router = routers.DefaultRouter()
router.register(r'user', UserViewSet, basename='user')
router.register(r'shops', ShopViewSet, basename='shop')
router.register(r'product-categories', ProductCategoryViewSet, basename='productcategory')
router.register(r'product-colors', ProductColorViewSet, basename='productcolor')
router.register(r'products', ProductViewSet, basename='product')
router.register(r'carts', CartViewSet, basename='cart')
router.register(r'orders', OrderViewSet, basename='order')

urlpatterns = [
    path('api/', include(router.urls)),
    path('dashboard/', DashboardView.as_view(), name='dashboard'),
]
