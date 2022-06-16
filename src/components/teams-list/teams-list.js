import TeamCard from '../team-card/team-card';


import './teams-list.scss'

const TeamsList = ({data}) => {

    const cards = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <TeamCard key={id} {...itemProps}/>
        )
    })
    
    return (
        <div className="teams-list">
            {cards}
        </div>
    )
}

export default TeamsList;