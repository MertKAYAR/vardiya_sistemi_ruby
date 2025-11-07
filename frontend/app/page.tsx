// frontend/app/page.tsx - VARDİYA KAYIT FORMU
'use client'; 
import React, { useState } from 'react';

// RoR Backend API adresimiz, courses yerine SHIFTS olacak
const API_URL = 'http://localhost:3001/api/v1/shifts'; 

export default function ShiftRegisterPage() {
  // Yeni state değişkenleri
  const [employeeName, setEmployeeName] = useState('');
  const [shiftDate, setShiftDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Vardiya Kaydediliyor...');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Backend'e göndereceğimiz yeni veri yapısı
        body: JSON.stringify({ 
          shift: { 
            employee_name: employeeName,
            shift_date: shiftDate,
            start_time: startTime,
            end_time: endTime
          } 
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Başarılı! ${data.employee_name} için vardiya kaydedildi.`);
        
        // Formu temizle
        setEmployeeName('');
        setShiftDate('');
        setStartTime('');
        setEndTime('');
      } else {
        setMessage('Hata oluştu, kayıt yapılamadı.');
      }
    } catch (error) {
      setMessage('Bağlantı Hatası: Backend sunucusunun çalıştığından emin olun.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h1>Yeni Vardiya Kaydı</h1>
      <form onSubmit={handleSubmit}>
        
        {/* Çalışan Adı */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="employeeName">Çalışan Adı:</label>
          <input
            id="employeeName"
            aria-label="Çalışan Adı" // Cypress label'ı
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>

        {/* Vardiya Tarihi */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="shiftDate">Tarih:</label>
          <input
            id="shiftDate"
            aria-label="Tarih" // Cypress label'ı
            type="date"
            value={shiftDate}
            onChange={(e) => setShiftDate(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>

        {/* Başlangıç Saati */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="startTime">Başlangıç Saati:</label>
          <input
            id="startTime"
            aria-label="Başlangıç Saati" // Cypress label'ı
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>

        {/* Bitiş Saati */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="endTime">Bitiş Saati:</label>
          <input
            id="endTime"
            aria-label="Bitiş Saati" // Cypress label'ı
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>

        <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer' }}>
          Vardiya Kaydet
        </button>
      </form>
      
      {/* Yeşil testi geçmek için başarı mesajını gösterelim */}
      {message.includes('Başarılı') && (
        <div data-testid="shift-success" style={{ marginTop: '20px', color: 'green' }}>
          {message}
        </div>
      )}
      
      {message && <p style={{ marginTop: '10px', color: message.includes('Hata') ? 'red' : 'inherit' }}>{message}</p>}
    </div>
  );
}