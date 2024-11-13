$(document).ready(function() {
    $('#hitungBiaya').click(function() {
        let nomorResi = $('#nomorResi').val();
        let berat = parseFloat($('#berat').val());
        let kotaTujuan = $('#kotaTujuan').val();
        let biayaBerat = 0;
        let biayaJarak = 0;

        if (berat <= 1) {
            biayaBerat = 1500;
        } else if (berat <= 5) {
            biayaBerat = 2500;
        } else if (berat <= 10) {
            biayaBerat = 3500;
        } else {
            biayaBerat = 4500;
        }

        switch (kotaTujuan) {
            case 'Banyuwangi':
                biayaJarak = 5000;
                break;
            case 'Jember':
                biayaJarak = 7500;
                break;
            case 'Probolinggo':
                biayaJarak = 10000;
                break;
            case 'Surabaya':
                biayaJarak = 15000;
                break;
        }

        let totalBiaya = biayaBerat + biayaJarak;
        $('#totalBiaya').text('Rp. ' + totalBiaya);
        console.log("Nomor Resi: " + nomorResi);
    });
});