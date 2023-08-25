# SYNTH

<div align="center">
<img width="329" alt="image" src="https://github.com/SinchonTeam1/Front/blob/main/web-client/src/logo.svg">
</div>

# 2023th Sinchonthon
> **신촌톤 SYNTH. 팀** <br/>

## 배포 주소

> [배포 주소 바로가기](https://front-eosin-two.vercel.app) <br>

## 팀 소개
|      이선명 <br/> **(기획/디자인)**       |          이다빈 <br/> **(프론트엔드)**          |       신지수 <br/> **(프론트엔드)**        |       박도울  <br/> **(프론트엔드)**       |                                      
| :------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | 
|   <img width="160px" src="https://github.com/vivianlee03.png" />    |                      <img width="160px" src="https://github.com/binys21.png" />    |                   <img width="160px" src="https://github.com/kelly6226.png"/>   |   <img width="160px" src="https://github.com/doullll.png" />    
|   [@vivianlee03](https://github.com/vivianlee03)   |    [@binys21](https://github.com/binys21)  |    [@kelly6226](https://github.com/kelly6226)  |    [@doullll](https://github.com/doullll)  |
| 서강대<br/>Art&Technology  | 이화여대<br/>컴퓨터공학 | 홍익대<br/>영어영문학/컴퓨터공학 | 연세대<br/>기계공학 | 

|     윤태호  <br/> **(백엔드)**       |       박소연  <br/> **(백엔드)**       |      이지원  <br/> **(백엔드)**       |
| :------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   <img width="160px" src="https://github.com/taeho0888.png" />    |                      <img width="160px" src="https://github.com/soyeoneeii.png" />    |                   <img width="160px" src="https://github.com/leejiwon1031.png"/>   | 
|[@taeho0888](https://github.com/taeho0888)  | [@soyeoneeii](https://github.com/soyeoneeii)  | [@leejiwon1031](https://github.com/leejiwon1031)  |
|서강대<br/>경영학/융합소프트웨어 | 홍익대<br/>컴퓨터공학 | 이화여대<br/>컴퓨터공학 |

## 프로젝트 소개

**SYNTH**는 취업 스터디에 **신뢰성**을 더하고자 하는 **신촌 지역 대학생**들을 위한 스터디 매칭 플랫폼입니다.

> 기존 스터디 플랫폼의 문제점은
1. 믿을 만한 팀원을 쉽게 구할 수 없다는 점
2. 스터디와 무관한 친목 게시물이 많다는 점
3. 위치적으로 가까워 효율적인 대면 스터디가 가능함에도 불구하고, 신촌지역 대학생들의 교류가 활성화 되지 못한다는 점
입니다.

> 이를 해결하기 위해
1. 믿을 만한 팀원을 쉽게 구할 수 없다는 점
- **학교 이메일로 인증된** 유저만 회원가입을 받는다.
- 신촌 대학(**서강대, 연세대, 이화여대, 홍익대**) 학생만이 사용할 수 있다.
- 인증된 인근 대학생만이 사용한다는 **신뢰성**을 얻을 수 있다.
2. **스터디와 무관한** 친목 게시물이 많다는 점
- **승인된 게시물만** 다른 사용자들에게 보여지게 한다
- 스터디의 기본 정보의 **필수 입력**과 소개글 **가이드**를 제공한다.
- 해당 게시물에 대한 **관리자의 검토가 승인**되어야만 게시되도록 하여 이용자들이 믿고 사용할 수 있는 방식 사용한다.
3. 위치적으로 가까워 효율적인 대면 스터디가 가능함에도 불구하고, 신촌지역 대학생들의 **대면 교류**가 활성화 되지 못함
- 타학교 학생들과 진행하는 스터디에 비해, 비교적 가까운 거리에 위치하므로 **오프라인 만남이 용이**하다.
- 신촌 지역 학생들의 **교류를 활성화**할 수 있는 기회를 제공한다.

## 시작 가이드
### 필수사항
해당 어플리케이션을 동작하기 위해선 다음 버전 이상이 필요해요.

- [Node.js 14.19.3](https://nodejs.org/ca/blog/release/v14.19.3/)
- [Npm 9.2.0](https://www.npmjs.com/package/npm/v/9.2.0)
- [Python 3.11.4](https://www.python.org/downloads/release/python-3114/)

### Installation
``` bash
$ git clone https://github.com/SinchonTeam1/Front.git client
$ git clone https://github.com/SinchonTeam1/server.git server
```

#### Backend (mac)
```
$ cd server
$ mkdir .venv
$ source .venv/bin/activate
$ python3 manage.py migrate --run-syncdb
$ python3 manage.py makemigrations
$ python3 manage.py migrate
$ python3 manage.py runserver
```
#### Backend (window)
```
$ cd server
$ mkdir .venv
$ source .venv/Scripts/activate
$ python manage.py migrate --run-syncdb
$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py runserver
```
#### Frontend
```
$ cd client
$ npm install 
$ npm run dev
```

---

## Stacks 🐈

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        

### Development
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white)

### Communication
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

---
## 화면 구성 📺
| **메인 페이지**  |  **서비스 페이지 1**   |
| :-------------------------------------------: | :------------: |
|  <img width="329" src="https://github.com/wooseok123/sinchonthon_readme/assets/59460718/a40b9b11-3833-4b81-8dea-9e34b10f81a7"/> |  <img width="329" src="https://github.com/wooseok123/sinchonthon_readme/assets/59460718/a40b9b11-3833-4b81-8dea-9e34b10f81a7"/>|  
| **서비스 페이지 2**   |  **서비스 페이지 3**   |  
| <img width="329" src="https://github.com/wooseok123/sinchonthon_readme/assets/59460718/a40b9b11-3833-4b81-8dea-9e34b10f81a7"/>   |  <img width="329" src="https://github.com/wooseok123/sinchonthon_readme/assets/59460718/a40b9b11-3833-4b81-8dea-9e34b10f81a7"/>     |

---
## 주요 기능 📦

### ⭐️ 어쩌구 저쩌구 1에 대한 기능
- 기능1에 대한 세부 설명1
- 기능1에 대한 세부 설명2

### ⭐️ 어쩌구 저쩌구 2에 대한 기능
- 기능2에 대한 세부 설명1
- 기능2에 대한 세부 설명2

### ⭐️ 어쩌구 저쩌구 3에 대한 기능
- 기능3에 대한 세부 설명1
- 기능3에 대한 세부 설명2

---
## 아키텍쳐

### 디렉토리 구조
```bash
.
├── client : 리액트 디렉토리
│   ├── README.md
│   └── web-client
│       ├── README.md
│       ├── package-lock.json
│       ├── package.json
│       ├── public
│       │   ├── favicon.ico
│       │   ├── index.html
│       │   ├── logo192.png
│       │   ├── logo512.png
│       │   ├── manifest.json
│       │   └── robots.txt
│       └── src
│           ├── API
│           │   └── BookmarkAPI.jsx
│           ├── App.js
│           ├── App.test.js
│           ├── components
│           │   ├── MyPost.jsx
│           │   ├── Study.jsx
│           │   ├── StudyDetail
│           │   │   ├── ApplyButton.jsx
│           │   │   ├── Description.jsx
│           │   │   ├── Information.jsx
│           │   │   └── Title.jsx
│           │   └── mainPage
│           │       ├── Header.jsx
│           │       ├── HeaderIcon.jsx
│           │       ├── MiniToggle.jsx
│           │       ├── SearchHeader.jsx
│           │       └── Toggle.jsx
│           ├── context
│           │   └── LoginUseContext.jsx
│           ├── image
│           │   ├── bookmark.png
│           │   ├── circle.png
│           │   ├── completeBtn.svg
│           │   ├── denyBtn.svg
│           │   ├── ewha.png
│           │   ├── filledbookmark.png
│           │   ├── mainLogo.png
│           │   ├── stayBtn.svg
│           │   ├── underbar.png
│           │   └── userCircle.png
│           ├── index.css
│           ├── index.js
│           ├── logo.svg
│           ├── pages
│           │   ├── CreateStudy.js
│           │   ├── Login.js
│           │   ├── MainPage.jsx
│           │   ├── Mypage.jsx
│           │   ├── Signup.js
│           │   ├── Signup2.js
│           │   ├── Signup3.js
│           │   └── StudyDetail.jsx
│           ├── reportWebVitals.js
│           └── setupTests.js
├── server : 장고 디렉토리
│   ├── config
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   ├── asgi.py
│   │   ├── settings.py : 장고 세팅
│   │   ├── urls.py : 베이스 URL
│   │   └── wsgi.py
│   ├── db.sqlite3 : 로컬용 데이터베이스
│   ├── details : 스터디 상세 페이지 애플리케이션
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── migrations
│   │   │   ├── __init__.py
│   │   │   └── __pycache__
│   │   ├── models.py
│   │   ├── tests.py
│   │   ├── urls.py : 스터디 상세 페이지 URL 매핑
│   │   └── views.py : 스터디 상세 페이지 뷰
│   ├── manage.py
│   ├── mypages : 마이페이지 애플리케이션
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── tests.py
│   │   ├── urls.py : 마이페이지 URL 매핑
│   │   └── views.py : 마이페이지 뷰
│   ├── requirements.txt : 사용한 라이브러리들
│   ├── studies : 스터디 애플리케이션
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── migrations
│   │   │   ├── __init__.py
│   │   │   └── __pycache__
│   │   ├── models.py : 스터디 관련 모델 구현
│   │   ├── serializers.py : 스터디 시리얼라이저 구현
│   │   ├── tests.py
│   │   ├── urls.py : 스터디 URL 매핑
│   │   └── views.py : 스터디 생성, 북마크 추가&해제, 북마크한 스터디 모아보기
│   └── users : 유저 애플리케이션
│       ├── __init__.py
│       ├── __pycache__
│       ├── admin.py
│       ├── apps.py
│       ├── migrations
│       │   ├── __init__.py
│       │   └── __pycache__
│       ├── models.py : 유저 모델 구현, 학교 이메일을 유저네임으로 구현
│       ├── serializers.py : 유저 관련 시리얼라이저 구현
│       ├── tests.py
│       ├── urls.py : 유저 URL 매핑
└──     └── views.py : 로그인, 이메일 인증, 회원가입, 유저 리스트, 회원 정보 수정 구현
 
29 directories, 130 files

```
