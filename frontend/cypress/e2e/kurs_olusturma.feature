# cypress/e2e/kurs_olusturma.feature

Feature: Kurs Oluşturma İşlemi
  Kullanıcı arayüzünden yeni bir kurs oluşturabilmelidir.

  Scenario: Başarılı bir kurs oluşturma
    Given Kurs oluşturma sayfasına gittim
    When "Kurs Adı" alanına "Yazılım Mimarisi" girdim
    And "Eğitmen" alanına "Nurettin Şenyer" girdim
    And "Oluştur" butonuna tıkladım
    Then Kurs listesinde "Yazılım Mimarisi" kursunu görmeliyim
    And Backend'de (API) kursun oluşturulduğunu doğrulamalıyım