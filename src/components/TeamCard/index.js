// Write your code here

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamImageURL, name} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-card">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard