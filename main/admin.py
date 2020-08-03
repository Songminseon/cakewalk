from django.contrib import admin
from .models import Store, Product

from import_export.admin import ExportActionMixin, ImportExportMixin, ImportMixin

class StoreAdmin(ImportExportMixin, admin.ModelAdmin):
    pass

class ProductAdmin(ImportExportMixin, admin.ModelAdmin):
    pass

admin.site.register(Store, StoreAdmin)
admin.site.register(Product, ProductAdmin)



# Register your models here.
