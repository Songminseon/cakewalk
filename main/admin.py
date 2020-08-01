from django.contrib import admin
#from .models import 모델이름들
from import_export.admin import ExportActionMixin, ImportExportMixin, ImportMixin

#class model이름(ImportExportMixin, admin.ModelAdmin):
#    pass

#admin.site.register(class이름, class이름Admin)로 모델별 추가해놓기



# Register your models here.
