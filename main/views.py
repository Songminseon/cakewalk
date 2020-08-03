from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone

# Create your views here.

def home(request):
    products = Product.objects
    return render(request, 'main/home.html', {'products':products})

def detail(request):
    product_detail = get_object_or_404(Product, pk=product_id)
    return render(request, 'detail.html', {'product':product_detail})

def product_like(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    user = request.user
    account = Account.objects.get(user=user)

    check_like_product = account.like_post.filter(id=product_id)

    if check_like_product.exists():
        account.like_post.remove(product)
        if product.like_num == 0:
            pass
        else:
            product.like_num -= 1
            product.save()
    else:
        account.like_post.add(product)
        product.like_num += 1
        product.save()

    return render('detail', product_id)