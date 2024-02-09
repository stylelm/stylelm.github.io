function createAudioHTML(path) {
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}


function generateExampleRow(table_row, base_path, filename_ext, col_offset) {
  for (var i = 0; i < filename_ext.length; i++) {
    let p = base_path + filename_ext[i];
    let cell = table_row.cells[col_offset + i];
    if (p.endsWith('txt')) {
      var req = new XMLHttpRequest();
      req.open("GET", p, false);
      req.send(null);
      cell.innerHTML = '<font size="-1">' + req.responseText + '</font>';
    } else {
      cell.innerHTML = cell.innerHTML + createAudioHTML(p);
    }
  }
}


function generateEsEn(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_source.wav', '_cvsst.wav', '_s2ut.wav', '_stylelm.wav', '_ppgvc.wav', '_nansy.wav', '_yourtts.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i * 3], 'data/es_en/es_'  + i, ext, 1);
  }
}

function generateFrEn(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_source.wav', '_cvsst.wav', '_s2ut.wav', '_stylelm.wav', '_ppgvc.wav', '_nansy.wav', '_yourtts.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i * 3], 'data/fr_en/fr_'  + i, ext, 1);
  }
}


generateEsEn('trans_es_table')
generateFrEn('trans_fr_table')

