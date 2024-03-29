# CakeWalk Prototype

[![Watch the video](https://img.youtube.com/vi/HI_R2VVGFKU/default.jpg)](https://youtu.be/HI_R2VVGFKU)
##### 이미지를 클릭하면 유튜브로 연결됩니다.

## 사용프로그램
### Python
### Django

## 라이브러리
### django-allauth
### django-import-export
### six

## 설치
### Django < 3
### pip install --user django-import_export
### python -m pip install django-allauth

## 실행
### python manage.py runserver

# Git에 올릴 때 다음같은 사항 꼭 지켜주세요
## 1. github에 접속하여 본인이 작업한 파일이 최신파일인지 꼭 확인하고, branch를 이용하여 작업할 것

## branch이름은 develop_본인성(ex.develop_song)형식으로 지어서 해주세요
## 2. 자신이 작업한 부분을 올릴 때 git add -A로 전체로 올리는게 아니라 아닌 본인이 수정한 부분만 올려주세요.(git add 본인이 한 폴더이름 or 파일 로 적으시면 그 부분만 올라가집니다.)


## 만약 본인이 수정한 파일이 많을 시 .gitignore을 이용하여 dbsqlite랑 그와 관련한 로그파일등 모두 gitignore시키고 올릴것
## 3. git commit할때 다른사람이 봤을 때 본인이 무엇을 했는지 확실하게 알 수 있도록 적을것!


## 4. 가능하면 python 3.7를 써주시면 감사하겠습니다만 큰차이는 없을 듯 합니다.

## 5. db를 건들일 때는 저한테 말해주세요. 테스트 계정 ID : account1  password : cakewalk   (account1~account5까지 있음)

# 지금부터 README.md를 써서 여러분들의 개발 현황을 적어서 같이 푸쉬해주세요
## 8월 29일(written by Minseon)
### 현재진행상황
#### 프론트
##### index.html완성
##### 회원가입 로그인 완성
##### 스토어 특정프로덕트 페이지완성
#### 백엔드
##### 회원가입구현
##### 스토어와 프로덕트에 관한 db모델링 및 임의데이터 삽입
##### 소셜로그인 구현

### 수정필요사항
#### 프론트
##### 아직 상속을 제대로 안해서인지, 인덱스화면이랑 바가 좀 달라요

#### 백엔드
##### 종훈이형 accout match가 안되어있을 때 예외처리좀...
##### ER Modeling 다시 구현

### 추가 개발사항
#### 프론트
##### XD 디자인 나오는대로 역할 분담하셔서 만들어주세요. 인력 부족하시면 말씀하세요.

#### 백엔드
##### 종훈 : 회원db를 이용한 기능구현
##### 민선 : db model다시하고 임의값 데이터 넣을 예정
##### 민정 : 필터링 구현


## 9월5일
### 프론트
#### 시뮬레이션 진행 중
#### 디자인 대부분 완성
#### 필터링 페이지 진행 중

### 백엔드
#### db모델링추가
##### product에 product_grade, product_column추가
##### Order model, Review model 추가


### 추가 개발사항
#### 지원금 나오는 대로 웹 도메인 구입예정
#### 찜기능 추가
#### db modeling (sns column추가, store review 추가)

### 9월 8일
#### 승렬: 회원가입 페이지 크기 수정
