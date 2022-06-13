import './team-card.scss'

const TeamCard = ({img}) => {
    const backgr = {
        backgroundImage: `url(${img})`
    }
    return (
        <div className="card" style={backgr}></div>
    )
}

export default TeamCard;