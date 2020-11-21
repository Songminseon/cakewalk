from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from .models import Store, Product
from member.models import Account
from django.contrib.auth.models import User
from django.contrib import messages

def main(request):
    if request.user.is_authenticated:
        now_login = Account.objects.get(user=request.user)
        nickname=now_login.mem_nickname
        
    else:
        nickname=""
    
    return render(request, 'index.html', {'nickname':nickname})

def store(request):
    return render(request, 'store.html')
    
def store_cake(request):
    return render(request, 'store_cake.html')

def store_market(request):
    return render(request, 'store_market.html')

def detail(request):
    return render(request, 'store_detail.html')

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

def store_detail(request): #임의로 만든거 나중에 수정할것 by승렬
    return render(request, 'store_detail.html')


def market(request): #임의로 만든거 나중에 수정할것 by승렬
    return render(request, 'market.html')

def simulation(request): #임의로 만든거 나중에 수정할것 by승렬
    return render(request, 'simulation.html')