// frontend/cypress.config.js

const { defineConfig } = require("cypress");
const preprocessor = require("@cypress/webpack-preprocessor"); 

module.exports = defineConfig({
  e2e: {
    // Spec pattern'i .js dosyalarına çeviriyoruz
    specPattern: "../temp_cypress_files/**/*.js", 
    baseUrl: "http://localhost:3000",
    supportFile: false,

    // YENİ EKLENECEK AYAR: Her Cypress komutundan sonra bekleme süresi (milisaniye)
    defaultCommandTimeout: 6000, // Varsayılan süre, bekleme hatalarını azaltır
    execTimeout: 60000,
    taskTimeout: 60000,
    // Her komut arasındaki gecikmeyi 500ms yap
    pageLoadTimeout: 60000,
    responseTimeout: 60000,
    viewportWidth: 1200,
    viewportHeight: 800,
    video: true, // Video kaydı aktif
    trashAssetsBeforeRuns: true,

    async setupNodeEvents(on, config) {
      // Webpack'i basitçe kur
      on("file:preprocessor", preprocessor());
      return config;
    },
  },
});