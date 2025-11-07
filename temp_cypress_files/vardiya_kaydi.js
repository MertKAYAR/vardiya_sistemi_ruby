// ~/vardiya-sistemi-project/temp_cypress_files/vardiya_kaydi.js

describe('Vardiya Kaydı Senaryosu', () => {
    it('Başarılı bir vardiya oluşturma ve kaydetme', () => {
        // Test verileri
        const employee = 'Mert Kural';
        const date = '2025-11-06';
        const startTime = '09:00';
        const endTime = '17:00';
        
        // Given Kurs oluşturma sayfasına gittim (Ana Sayfa)
        cy.visit('/'); 
        
        // When Çalışan Adı alanına veri girme
        cy.get('[aria-label="Çalışan Adı"]').type(employee);
        
        // And Tarih alanına veri girme
        cy.get('[aria-label="Tarih"]').type(date);
        
        // And Başlangıç Saati alanına veri girme
        cy.get('[aria-label="Başlangıç Saati"]').type(startTime);
        
        // And Bitiş Saati alanına veri girme
        cy.get('[aria-label="Bitiş Saati"]').type(endTime);
        
        // And Vardiya Kaydet butonuna tıkla
        cy.contains('button', 'Vardiya Kaydet').click(); 
        
        // Then Başarı mesajını görmeliyim
        cy.contains('div', `Başarılı! ${employee} için vardiya kaydedildi.`).should('be.visible');

        // Video süresi için bekleme
        cy.wait(5000); 
    });
});