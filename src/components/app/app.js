import { Component } from 'react';
import AppFilter from '../app-filter/app-filter';

import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'mancity', stars: 5, img: '../../resources/img/mancity.png'},
                {name: 'liverpool', stars: 5, img: '../../resources/img/liverpool.png'},
                {name: 'chelsea', stars: 5, img: '../../resources/img/chelsea.png'},
                {name: 'arsenal', stars: 5, img: '../../resources/img/arsenal.png'},
                {name: 'spurs', stars: 5, img: '../../resources/img/spurs.png'},
                {name: 'manunited', stars: 5, img: '../../resources/img/manunited.png'},
                {name: 'westham', stars: 4, img: '../../resources/img/westham.png'},
                {name: 'wolves', stars: 4, img: '../../resources/img/wolves.png'},
                {name: 'newcastle', stars: 4, img: '../../resources/img/newcastle.png'},
                {name: 'leicester', stars: 4, img: '../../resources/img/leicester.png'},
                {name: 'astonvilla', stars: 4, img: '../../resources/img/astonvilla.png'},
                {name: 'leeds', stars: 4, img: '../../resources/img/leeds.png' },
                {name: 'crystalpalace', stars: 4, img: '../../resources/img/crystalpalace.png'},
                {name: 'everton', stars: 3, img: '../../resources/img/everton.png'},
                {name: 'bayern', stars: 5, img: '../../resources/img/bayern.png'},
                {name: 'dortmund', stars: 5, img: '../../resources/img/dortmund.png'},
                {name: 'bayer04', stars: 4, img: '../../resources/img/bayer04.png'},
                {name: 'leipzig', stars: 4, img: '../../resources/img/leipzig.png'},
                {name: 'real', stars: 5, img: '../../resources/img/real.png'},
                {name: 'barca', stars: 5, img: '../../resources/img/barca.png'},
                {name: 'sevilla', stars: 4, img: '../../resources/img/sevilla.png'},
                {name: 'atm', stars: 5, img: '../../resources/img/atm.png' },
                {name: 'betis', stars: 4, img: '../../resources/img/betis.png'},
                {name: 'sociedad', stars: 4, img: '../../resources/img/sociedad.png'},
                {name: 'villarreal',stars: 4, img: '../../resources/img/villarreal.png'},
                {name: 'valencia', stars: 3, img: '../../resources/img/valencia.png'},
                {name: 'milan', stars: 4, img: '../../resources/img/milan.png'},
                {name: 'inter', stars: 5, img: '../../resources/img/inter.png'},
                {name: 'napoli', stars: 5, img: '../../resources/img/napoli.png'},
                {name: 'juve', stars: 5, img: '../../resources/img/juve.png'},
                {name: 'roma', stars: 4, img: '../../resources/img/roma.png'},
                {name: 'lazio', stars: 4, img: '../../resources/img/lazio.png'},
                {name: 'fio', stars: 3, img: '../../resources/img/fio.png'},
                {name: 'atalanta', stars: 4, img: '../../resources/img/atalanta.png'},
                {name: 'paris', stars: 5, img: '../../resources/img/paris.png'},
                {name: 'monaco', stars: 4, img: '../../resources/img/monaco.png'},
                {name: 'marseille', stars: 4, img: '../../resources/img/marseille.png'},
                {name: 'lille', stars: 3, img: '../../resources/img/lille.png'},
                {name: 'lyon', stars: 3, img: '../../resources/img/lyon.png'},
                {name: 'ajax', stars: 5, img: '../../resources/img/ajax.png'},
                {name: 'psv', stars: 4, img: '../../resources/img/psv.png'},
                {name: 'feyenoord', stars: 3, img: '../../resources/img/feyenoord.png'},
                {name: 'porto', stars: 4, img: '../../resources/img/porto.png'},
                {name: 'sporting', stars: 3, img: '../../resources/img/sporting.png'},
                {name: 'benfica', stars: 4, img: '../../resources/img/benfica.png'},
                {name: 'celtic', stars: 3, img: '../../resources/img/celtic.png'},
                {name: 'rangers', stars: 4, img: '../../resources/img/rangers.png'},
                {name: 'borussiaM', stars: 3, img: '../../resources/img/borussiaM.png'},
            ],
            filter: '',
        }

    }

    render() {
        return(
            <div className="app">
                <AppFilter/>
            </div>
        )
    }
}

export default App;