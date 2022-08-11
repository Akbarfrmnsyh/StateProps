import React from 'react';
import './App.css';
// import Card from './components/cardname';
import Data from './Data';
import Input from './Input';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { nama: 'Akbar Firmansyah', perusahaan: 'PROSIGMAKA', posisi: 'Prodemy Gen10 Fullstack Engineer', alamat: 'Jl. Patimura 75 Cilacap 58932' }
  }
  _gantiNama = () => this.setState({ nama: 'AGUS', perusahaan: 'PSM Makasar', posisi: 'Software Engineer', alamat: 'Jl. Diponegoro 99 Banyumas 58932' })
  _gantiNama2 = (namabaru) => this.setState({ nama: namabaru })
  _gantiPerusahaan2 = (perusahaanbaru) => this.setState({ perusahaan: perusahaanbaru })
  _gantiPosisi2 = (posisibaru) => this.setState({ posisi: posisibaru })
  _gantiAlamat2 = (alamatbaru) => this.setState({ alamat: alamatbaru })



  render() {
    return (
      <div className="App">
        <div className="header"> PROPS - STATE
          <div className='image-container'>
            <img src="https://th.bing.com/th/id/R.d7fd9e0b952d5f9b9adff6ec29a8b20d?rik=JHeUYg90Qe%2fZGQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f5%2fBoy-Transparent-Background.png&ehk=AlAG5V9aPrvFod8brU9FjA%2bRSNsh%2bCPkib07t3d9sPg%3d&risl=&pid=ImgRaw&r=0" alt='' height='100px' widht='100px' />
          </div>
        </div>
        <div className='body-container'>
          <Data
            nama={this.state.nama}
            perusahaan={this.state.perusahaan}
            posisi={this.state.posisi}
            alamat={this.state.alamat}>
          </Data>
        </div>
        <div className='input'>
          <Input
            _gantiNama={this._gantiNama}
            _gantiNama2={this._gantiNama2}
            _gantiPerusahaan2={this._gantiPerusahaan2}
            _gantiPosisi2={this._gantiPosisi2}
            _gantiAlamat2={this._gantiAlamat2}
          >
          </Input>
        </div>


      </div>
    )
  }
}

// function App() {

//   const [nama,setNama] = useState('nama');
//     const [perusahaan,setPerusahaan] = useState('perusahaan')
//     const [pekerjaan,setPekerjaan] = useState('pekerjaan');
//     const [alamat,setAlamat] = useState('alamat');


//   return (
//     <div className='App'>
//       <Card nama={'Akbar Firmansyah'} perusahaan={'PROSIGMAKA'} pekerjaan={'Prodemy Gen10 Junior Fullstack Engineer'} alamat={'Jl. Patimura 76 Cilacap 58232'}/>
//     </div>
//   );
// }

export default App;
