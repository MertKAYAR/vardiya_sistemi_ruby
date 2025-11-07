# ⏳ Vardiya Kayıt Sistemi (Shift Management System)

Bu proje, önceki Full Stack deneyimimiz temel alınarak geliştirilmiş, bir **Çalışan Vardiya Kayıt Sistemi** uygulamasıdır. Proje, Davranış Odaklı Geliştirme (BDD) metodolojisini uçtan uca uygulayarak sistemin hatasız çalıştığını kanıtlamaktadır.

## 🌟 Proje Mimarisi ve Teknoloji Yığını

| Katman | Teknoloji | Versiyon | Görev |
| :--- | :--- | :--- | :--- |
| **Backend (API)** | Ruby on Rails (API Only) | 7.1+ | Yeni Vardiya (Shift) kaydı alma ve JSON formatında sunma. |
| **Frontend (UI)** | Next.js / React | 16.0+ | Çalışan formu üzerinden API'ye veri gönderme. |
| **Veritabanı** | SQLite3 | - | Vardiya verilerini tutar. |
| **Test / BDD** | Cypress & JavaScript | 15+ | "Vardiya Kayıt" senaryosunun uçtan uca otomasyonu. |

---

## 🛡️ Etik Beyan ve Akademik Süreç

Bu proje, akademik gereklilikler ve etik sorumluluklar doğrultusunda hazırlanmıştır. Çalışmamızda Dr. Öğr. Üyesi **Nurettin Şenyer** ve Arş. Gör. **Ömer Durmuş** tarafından belirlenen etik kurallara tam uyum sağlanmıştır.

## 🎯 BDD Geliştirme Süreci (Kırmızıdan Yeşile)

Proje, tek bir temel senaryo ("Başarılı Vardiya Kaydı") üzerinden geliştirilmiştir.

1.  **Kıpkırmızı (FAIL):** Yeni form ve API uçları olmadan Cypress testi çalıştırıldı ve **%100 FAIL** çıktısı alındı. (BDD başlangıç kanıtı)
2.  **API ve Frontend Geliştirme:** RoR'da Shift modeli ve `ShiftsController`, Frontend'de ise Çalışan Adı, Tarih ve Saat alanlarını içeren form hazırlandı.
3.  **Yemyeşil (SUCCESS):** Form ile API entegrasyonu tamamlandıktan sonra Cypress testi çalıştırıldı ve **%100 SUCCESS** sonucu alındı. (Çalışmanın son kanıtı)

---

## 🔗 Proje Sonuçları ve Kanıtlar

| Kanıt Türü | Açıklama | Link / Durum |
| :--- | :--- | :--- |
| **Demo Videosu** | Cypress otomasyonunun başarıyla çalıştığına dair video kaydı. | https://youtu.be/wiyDJKtt6M8 |
| **LinkedIn Paylaşım** | Proje özeti ve etik beyan içeren sosyal medya paylaşımı. | https://www.linkedin.com/posts/mert-kayar-537363356_github-mertkayarvardiyasistemiruby-activity-7392556143937581056-TGaH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFivgTsBeuGiR2ABsNqlJzMWH4wKbr4Tcy4 |

---

## ⚙️ Projeyi Çalıştırma Adımları

**Yerel Kurulum:**

1.  **Depoyu Klonlayın:** `git clone [DEPO_ADRESİNİZ]`
2.  **Backend'i Başlatın:** ```bash
    cd backend
    rails server -p 3001
    ```
3.  **Frontend'i Başlatın:**
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```
4.  **Cypress Testini Çalıştırın:** `npm run cypress open`

---
