import React from 'react';


const Input = (props) =>
(

    <>
        <input
            type="button"
            onClick={props._gantiNama}
            value="Klik Untuk Ganti Nama"
        />
        <br />
        <label>Nama Baru</label>
        <input
            type="text"
            onBlur={(event) => props._gantiNama2(event.target.value)}
        />
        <br />
        <label>Perusahaan Baru</label>
        <input
            type="text"
            onBlur={(event) => props._gantiPerusahaan2(event.target.value)}
        />
        <br />
        <label>Posisi Baru</label>
        <input
            type="text"
            onBlur={(event) => props._gantiPosisi2(event.target.value)}
        />
        <br />
        <label>Alamat Baru</label>
        <input
            type="text"
            onBlur={(event) => props._gantiAlamat2(event.target.value)}
        />
    </>
)

export default Input