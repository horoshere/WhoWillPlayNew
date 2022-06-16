
import './app-filter.scss'

const AppFilter = (props) => {
    const bttnsData = [
        {name: 'all', label: 'Все команды'},
        {name: 'five', label: '5 звезд'},
        {name: 'four', label: '4 звезды'},
        {name: 'three', label: '3 звезды'}
    ];

    const buttons = bttnsData.map(({name, label}) => {
        const selected = props.filter === name;
        const clazz = selected ? 'btn-filter selected' : 'btn-filter';
        return (
            <button type="button"
                    className={clazz}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
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