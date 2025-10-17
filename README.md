## O'zbek Tilida Informatsiya Miqdorini Hisoblash
Bu dastur O'zbek tilida yozilgan matnlar uchun informatsiya nazariyasi asosida informatsiya miqdorini hisoblovchi veb-dasturdir.
###  Tavsif
Dastur Shannon informatsiya nazariyasi asosida har bir harf uchun informatsiya miqdorini -p·log₂p formulasi yordamida hisoblaydi, bu yerda:

* p - harfning matnda uchraish ehtimolligi
* Natija bit (ikkilik raqam) da o'lchanadi
### [ LIVE DEMO](https://info-calculator.vercel.app/)
###  Xususiyatlar

*  Kirill alifbosidagi barcha O'zbek harflarini qo'llab-quvvatlaydi
* Real-time belgilar sonini ko'rsatadi
* To'liq informatsiya statistikasini beradi:

   - Umumiy informatsiya miqdori
   - O'rtacha informatsiya (harf uchun)
   - Harflar va belgilar soni
   - Eng ko'p uchraydigan harflar ro'yxati


* Zamonaviy va intuitiv interfeys
* Hech qanday tashqi kutubxona talab qilinmaydi




###  Ma'lumotlar Manbai
Dasturda ishlatiladigan harflar taqsimoti va informatsiya miqdorlari 3-ilova jadvalidan olingan. Jadval O'zbek tilida harflarning orasidagi ehtimollik taqsimotini ko'rsatadi.
#### Misol Qiymatlar:
|Harf |Ehtimollik (p) |Informatsiya (-p·log₂p)|
|-----|---------------|-----------------------|
|А    |0.1520         |0.4137                 |
|И    |0.1354         |0.3901                 |
|Н    |0.0703         |0.2686                 |
|Л    |0.0610         |0.2436                 |
|Р    |0.0574         |0.2356                 |
###  Texnologiyalar

- HTML5 - Struktura
- CSS3 - Dizayn va animatsiyalar
- Vanilla JavaScript - Funksionallik

###  Qanday Ishlaydi?

Matn kiritish: Foydalanuvchi o'zbek tilida matn kiritadi
Harflarni tahlil qilish: Dastur har bir harfni aniqlaydi va Kirill harflariga aylantiradi
Informatsiya hisoblash: Har bir harf uchun jadvaldan informatsiya miqdorini oladi
Natijalarni ko'rsatish:

Umumiy informatsiya = Σ(har bir harf uchun informatsiya)
O'rtacha informatsiya = Umumiy informatsiya / Harflar soni
Top 5 eng ko'p uchraydigan harflar

###  Informatsiya Nazariyasi Haqida
Claude Shannon tomonidan 1948-yilda yaratilgan informatsiya nazariyasi raqamli aloqa va ma'lumotlarni siqishning asosini tashkil etadi.
Asosiy Tamoyillar:

Ko'p uchraydigan harflar kam informatsiya beradi
Kam uchraydigan harflar ko'p informatsiya beradi
Bu tamoyil Morse kodida, ZIP siqishda va boshqa algoritmlarida qo'llaniladi

###  Cheklovlar

Dastur faqat Kirill alifbosini qo'llab-quvvatlaydi
Lotin alifbosi uchun harflar taqsimoti jadvali mavjud emas
Faqat harflar hisoblanadi (raqamlar, tinish belgilari e'tiborga olinmaydi)

