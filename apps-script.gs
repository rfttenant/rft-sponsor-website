const SHEET_ID = 'GANTI_DENGAN_ID_SPREADSHEET_KAMU';
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const data = e.parameter;

    sheet.appendRow([
      new Date(),
      data.nama_event || '',
      data.nama_pic || '',
      data.whatsapp || '',
      data.email || '',
      data.instansi || '',
      data.tanggal_event || '',
      data.lokasi || '',
      data.estimasi_peserta || '',
      data.jenis_event || '',
      data.bentuk_sponsor || '',
      data.exposure || '',
      data.link_proposal || '',
      data.catatan || ''
    ]);

    return ContentService
      .createTextOutput('success')
      .setMimeType(ContentService.MimeType.TEXT);

  } catch (error) {
    return ContentService
      .createTextOutput('error: ' + error.message)
      .setMimeType(ContentService.MimeType.TEXT);
  }
}
