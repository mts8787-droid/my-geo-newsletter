/**
 * Google Apps Script — GEO Newsletter 메타데이터 동기화
 *
 * 사용법:
 * 1. Google Sheets → 확장 프로그램 → Apps Script
 * 2. 이 코드를 Code.gs에 붙여넣기
 * 3. 배포 → 새 배포 → 웹 앱
 *    - 실행 사용자: 나
 *    - 액세스: 모든 사용자
 * 4. 배포 URL을 GEO Builder 앱에 붙여넣기
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents)
    var ss = SpreadsheetApp.getActiveSpreadsheet()

    if (data.action === 'writeMeta') {
      writeMeta(ss, data.meta || {})
      writeTotal(ss, data.total || {})
      return ContentService
        .createTextOutput(JSON.stringify({ ok: true, message: 'meta + total 동기화 완료' }))
        .setMimeType(ContentService.MimeType.JSON)
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: '알 수 없는 action: ' + data.action }))
      .setMimeType(ContentService.MimeType.JSON)

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

function writeMeta(ss, meta) {
  var sheet = ss.getSheetByName('meta')
  if (!sheet) return

  // key-value 매핑: A열=key, B열=value (4행부터 시작)
  var range = sheet.getDataRange()
  var values = range.getValues()

  for (var i = 0; i < values.length; i++) {
    var key = String(values[i][0]).trim()
    if (key in meta) {
      // boolean → Y/N 변환
      var val = meta[key]
      if (typeof val === 'boolean') val = val ? 'Y' : 'N'
      sheet.getRange(i + 1, 2).setValue(val)
    }
  }
}

function writeTotal(ss, total) {
  var sheet = ss.getSheetByName('total')
  if (!sheet) return

  var range = sheet.getDataRange()
  var values = range.getValues()

  for (var i = 0; i < values.length; i++) {
    var key = String(values[i][0]).trim()
    if (key in total) {
      sheet.getRange(i + 1, 2).setValue(total[key])
    }
  }
}

// GET 요청 테스트용
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: 'GEO Newsletter Apps Script is running' }))
    .setMimeType(ContentService.MimeType.JSON)
}
