from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from .models import Store, Product
from member.models import Account


def main(request):
    # if request.user.is_authenticated:
    #     user_n = Account.objects.get(user=request.user)
    #     name = user_n.mem_name
    # else:
    #     name = ""
    return render(request, 'index.html')
    
def store(request):
    return render(request, 'store.html')


def detail(request, product_id):
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

def pay_page(request):  #결제 툴로 이동, 나중에 db에서 가격 받아와서 연동해야함
    return render(request, 'pay_page.html')