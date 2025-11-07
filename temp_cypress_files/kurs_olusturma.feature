Feature: Kurs Oluşturma İşlemi
    Kullanıcı arayüzünden yeni bir kurs oluşturulabilmelidir.

    Scenario: Başarılı bir kurs oluşturma
        Given Kurs oluşturma sayfasına gittim
        When "Kurs Adı" alanına "Yazılım Mimarisi" girdim
        And "Eğitmen" alanına "Nurettin Şenyer" girdim
        And "Oluştur" butonuna tıkladım
        Then Kurs listesinde "Yazılım Mimarisi" kursunu görmeliyim