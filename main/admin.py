from django.contrib import admin
from import_export.admin import ExportActionMixin, ImportExportMixin, ImportMixin
from .models import Store, Product, Location, Simulation

class StoreAdmin(ImportExportMixin, admin.ModelAdmin):
    pass

class ProductAdmin(ImportExportMixin, admin.ModelAdmin):
    pass

admin.site.register(Store, StoreAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Location)
admin.site.register(Simulation)