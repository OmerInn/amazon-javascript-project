# Amazon JavaScript Project (English Version ENG) 

This project is an **e-commerce application** that simulates the basic functioning of Amazon. Users can list products, add them to the basket, place orders and track orders. The project was developed with **JavaScript, HTML and CSS** and designed in accordance with **OOP (Object Oriented Programming)** principles.

## Technologies and Construction

- JavaScript (ES6+)** - Product management, basket operations and dynamic content management
- **HTML5 & CSS3** - Page design and styling
- **LocalStorage API** - Storing and managing user data
- **Day.js** - Date calculations and order delivery dates
- **Jasmine.js** - Test framework used for automated tests

## Project Logic and Functioning

### Home Page (`amazon.html`)
- Products are listed from `products.js` file.
- When the user presses the **"Add to Cart ’** button, the product is added to the basket.

### Basket Management (`checkout.html`)
- Products added to the basket are displayed.
- The user can update the product quantity or remove the product from the basket.
- Initially there are 3 products in the basket, so that the functioning of the basket can be observed.

### Order Tracking (`orders.html` & `tracking.html`)
- The user can see and track their orders.

### Payment Summary & Dynamic Shipping Rate Update (`checkoutScript/`)
- When the delivery date is selected, the shipping cost is dynamically updated.
- Sample delivery options:
  - **Thursday, March 6** → **Free Shipping**
  - **Sunday, March 2** → **$4.99 Shipping Fee**
  - **Friday, February 28** → **$9.99 Shipping Fee**

## Compliance with OOP Principles

The code structure is designed in a **modular** and **object based** way.

## Tests (with Jasmine.js)

In the project, the **Jasmine test framework** was used to test the correctness of basic shopping transactions.  
The tests are in the file `jasmine-Tests/data/cartTests.js`.

-----

# Amazon JavaScript Projesi (Turkish Version 🇹🇷) 

Bu proje, Amazon'un temel işleyişini simüle eden bir **e-ticaret uygulamasıdır**. Kullanıcılar ürünleri listeleyebilir, sepete ekleyebilir, sipariş verebilir ve sipariş takibini gerçekleştirebilir. Proje **JavaScript, HTML ve CSS** ile geliştirilmiş olup **OOP (Nesne Yönelimli Programlama)** prensiplerine uygun şekilde tasarlanmıştır.

## Kullanılan Teknolojiler ve Yapı

- **JavaScript (ES6+)** - Ürün yönetimi, sepet işlemleri ve dinamik içerik yönetimi
- **HTML5 & CSS3** - Sayfa tasarımı ve stil düzenlemeleri
- **LocalStorage API** - Kullanıcı verilerini saklama ve yönetme
- **Day.js** - Tarih hesaplamaları ve sipariş teslimat tarihleri
- **Jasmine.js** - Otomatik testler için kullanılan test framework’ü

## Proje Mantığı ve İşleyişi

### Ana Sayfa (`amazon.html`)
- Ürünler `products.js` dosyasından alınarak listelenir.
- Kullanıcı **"Add to Cart"** butonuna bastığında, ürün sepete eklenir.

### Sepet Yönetimi (`checkout.html`)
- Sepete eklenen ürünler görüntülenir.
- Kullanıcı ürün miktarını güncelleyebilir veya ürünü sepetten kaldırabilir.
- **Başlangıçta sepette 3 ürün bulunmaktadır**, böylece sepetin işleyişi gözlemlenebilir.

### Sipariş Takibi (`orders.html` & `tracking.html`)
- Kullanıcı siparişlerini görebilir ve takip edebilir.

### Ödeme Özeti & Dinamik Kargo Ücreti Güncelleme (`checkoutScript/`)
- **Teslimat tarihi seçildiğinde, kargo ücreti dinamik olarak güncellenir.**
- Örnek teslimat seçenekleri:
  - **Thursday, March 6** → **Ücretsiz Kargo**
  - **Sunday, March 2** → **$4.99 Kargo Ücreti**
  - **Friday, February 28** → **$9.99 Kargo Ücreti**

## OOP Prensiplerine Uygunluk

Kod yapısı **modüler** ve **nesne tabanlı** bir şekilde tasarlandı.

## Testler (Jasmine.js ile)

Projede, temel alışveriş işlemlerinin doğruluğunu test etmek için **Jasmine test framework'ü** kullanıldı.  
Testler `jasmine-Tests/data/cartTests.js` dosyasında yer alıyor.



