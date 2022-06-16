import { Component } from 'react';
import AppFilter from '../app-filter/app-filter';
import TeamsList from '../teams-list/teams-list';

import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'mancity', stars: 5, img: '/img/mancity.png', id: 'mancity'},
                {name: 'liverpool', stars: 5, img: '/img/liverpool.png', id: 'liverpool'},
                {name: 'chelsea', stars: 5, img: '/img/chelsea.png', id: 'chelsea'},
                {name: 'arsenal', stars: 5, img: 'img/arsenal.png', id: 'arsenal'},
                {name: 'spurs', stars: 5, img: 'img/spurs.png', id: 'spurs'},
                {name: 'manunited', stars: 5, img: 'img/manunited.png', id: 'manunited'},
                {name: 'westham', stars: 4, img: 'img/westham.png', id: 'westham'},
                {name: 'wolves', stars: 4, img: 'img/wolves.png', id: 'wolves'},
                {name: 'newcastle', stars: 4, img: 'img/newcastle.png', id: 'newcastle'},
                {name: 'leicester', stars: 4, img: 'img/leicester.png', id: 'leicester'},
                {name: 'astonvilla', stars: 4, img: 'img/astonvilla.png', id: 'astonvilla'},
                {name: 'leeds', stars: 4, img: 'img/leeds.png', id:  'leeds'},
                {name: 'crystalpalace', stars: 4, img: 'img/crystalpalace.png', id: 'crystalpalace'},
                {name: 'everton', stars: 3, img: 'img/everton.png', id: 'everton'},
                {name: 'bayern', stars: 5, img: 'img/bayern.png', id: 'bayern'},
                {name: 'dortmund', stars: 5, img: 'img/dortmund.png', id: 'dortmund'},
                {name: 'bayer04', stars: 4, img: 'img/bayer04.png', id: 'bayer04'},
                {name: 'leipzig', stars: 4, img: 'img/leipzig.png', id: 'leipzig'},
                {name: 'real', stars: 5, img: 'img/real.png', id: 'real'},
                {name: 'barca', stars: 5, img: 'img/barca.png', id: 'barca'},
                {name: 'sevilla', stars: 4, img: 'img/sevilla.png', id: 'sevilla'},
                {name: 'atm', stars: 5, img: 'img/atm.png', id: 'atm'},
                {name: 'betis', stars: 4, img: 'img/betis.png', id: 'betis'},
                {name: 'sociedad', stars: 4, img: 'img/sociedad.png', id: 'sociedad'},
                {name: 'villarreal',stars: 4, img: 'img/villarreal.png', id: 'villarreal'},
                {name: 'valencia', stars: 3, img: 'img/valencia.png', id: 'valencia'},
                {name: 'milan', stars: 4, img: 'img/milan.png', id: 'milan'},
                {name: 'inter', stars: 5, img: 'img/inter.png', id: 'inter'},
                {name: 'napoli', stars: 5, img: 'img/napoli.png', id: 'napoli'},
                {name: 'juve', stars: 5, img: 'img/juve.png', id: 'juve'},
                {name: 'roma', stars: 4, img: 'img/roma.png', id: 'roma'},
                {name: 'lazio', stars: 4, img: 'img/lazio.png', id: 'lazio'},
                {name: 'fio', stars: 3, img: 'img/fio.png', id: 'fio'},
                {name: 'atalanta', stars: 4, img: 'img/atalanta.png', id: 'atalanta'},
                {name: 'paris', stars: 5, img: 'img/paris.png', id: 'paris'},
                {name: 'monaco', stars: 4, img: 'img/monaco.png', id: 'monaco'},
                {name: 'marseille', stars: 4, img: 'img/marseille.png', id: 'marseille'},
                {name: 'lille', stars: 3, img: 'img/lille.png', id: 'lille'},
                {name: 'lyon', stars: 3, img: 'img/lyon.png', id: 'lyon'},
                {name: 'ajax', stars: 5, img: 'img/ajax.png', id: 'ajax'},
                {name: 'psv', stars: 4, img: 'img/psv.png', id: 'psv'},
                {name: 'feyenoord', stars: 3, img: 'img/feyenoord.png', id: 'feyenoord'},
                {name: 'porto', stars: 4, img: 'img/porto.png', id: 'porto'},
                {name: 'sporting', stars: 3, img: 'img/sporting.png', id: 'sporting'},
                {name: 'benfica', stars: 4, img: 'img/benfica.png', id: 'benfica'},
                {name: 'celtic', stars: 3, img: 'img/celtic.png', id: 'celtic'},
                {name: 'rangers', stars: 4, img: 'img/rangers.png', id: 'rangers'},
                {name: 'borussiaM', stars: 3, img: 'img/borussiaM.png', id: 'borussiaM'},
            ],
            filter: 'all',
        }

    }

    filterCards = (items, filter) => {
        if (filter === 'all') {
            return items.filter(item => item.name)
        }
        else if (filter === 'five') {
            return items.filter(item => item.stars === 5)
        }
        else if (filter === 'four') {
            return items.filter(item => item.stars === 4)
        }
        else {
            return items.filter(item => item.stars === 3)
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    mixCards = (items) => {
        let j, temp;
        for (let i = items.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = items[j];
            items[j] = items[i];
            items[i] = temp;
        }
        return items;
    }

    render() {
        const {data, filter} = this.state;
        const visibleData = this.filterCards(this.mixCards(data), filter);
        return(
            <div className="app">
                <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                <TeamsList data={visibleData}/>
            </div>
        )
    }
}

export default App;