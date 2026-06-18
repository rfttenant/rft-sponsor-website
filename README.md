# RFT Tenant Sponsorship Website

Website statis untuk profil sponsorship dan kolaborasi RFT Tenant.

## File utama

- `index.html`
- `style.css`
- `script.js`
- `assets/` berisi logo dan preview menu book
- `apps-script.gs` berisi kode Google Apps Script untuk Google Spreadsheet

## Langkah pakai

1. Upload semua file dan folder `assets` ke repository GitHub.
2. Buka `index.html`.
3. Cari teks:
   `GANTI_DENGAN_URL_APPS_SCRIPT_KAMU`
4. Ganti dengan URL Web App dari Google Apps Script.
5. Buka `apps-script.gs`.
6. Copy semua kodenya ke Google Apps Script.
7. Ganti:
   `GANTI_DENGAN_ID_SPREADSHEET_KAMU`
   dengan ID spreadsheet kamu.
8. Header Google Sheet yang disarankan:

Timestamp | Nama Event | Nama PIC | WhatsApp | Email | Kampus/Instansi | Tanggal Event | Lokasi | Estimasi Peserta | Jenis Event | Bentuk Sponsor | Exposure | Link Proposal | Catatan

## Publish

Di GitHub repository:

Settings → Pages → Deploy from branch → main → /root → Save.


## Interactive upgrade

Versi ini sudah ditambahkan:
- Hero transition / entrance animation.
- Efek hover pada card dan tombol.
- Tilt effect mengikuti arah cursor.
- Popup detail untuk card Sponsorship dan Menu.
- Lightbox preview ketika gambar menu diklik.
- Scroll reveal animation ketika section muncul di layar.
- Floating Apply button.
- Popup notifikasi saat form dikirim.


## Rich final upgrade

Tambahan pada versi ini:
- Section "Why Choose Us" berdasarkan materi Make a Greatest Event Together.
- Detail popup setiap card sponsorship dengan gambar pendukung.
- F&B Support memakai preview menu/paket nasi/minuman.
- Merchandise Custom memakai preview merchandise dan packaging.
- Souvenir & Bundling memakai 6 gambar bundling.
- Booth Activation memakai foto booth.
- Section khusus Merchandise Highlight dengan mockup CSS ulang, bukan foto mentah.
- Section Snack Product memakai foto snack pack.
