from django.contrib import admin
from import_export.admin import ExportActionMixin, ImportExportMixin, ImportMixin
from .models import Store, Product

class StoreAdmin(ImportExportMixin, admin.ModelAdmin):
    pass

class ProductAdmin(ImportExportMixin, admin.ModelAdmin):
    pass

admin.site.register(Store)
admin.site.register(Product)
