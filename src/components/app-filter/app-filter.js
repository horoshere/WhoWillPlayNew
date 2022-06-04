
import './app-filter.scss'

const AppFilter = (props) => {
    const bttnsData = [
        {name: 'all', label: 'Все команды'},
        {name: 'five', label: '5 звезд'},
        {name: 'four', label: '4 звезды'},
        {name: 'three', label: '3 звезды'}
    ];

    const buttons = bttnsData.map(({name, label}) => {
        return (
            <button type="button"
                    className="btn-filter"
                    key={name}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-wrap">
            {buttons}
        </div>
    )
}

export default AppFilter;