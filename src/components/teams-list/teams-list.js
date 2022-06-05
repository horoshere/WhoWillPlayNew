import TeamCard from '../team-card/team-card';


import './teams-list.scss'

const TeamsList = (props) => {
    return (
        <div className="teams-list">
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
        </div>
    )
}

export default TeamsList;