// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <h1 className="main-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-details-container">
          <div className="container1">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-match-team-logo"
          />
          <hr className="separator" />
          <div className="container2">
            <p className="latest-match-details-label">First Innings</p>
            <p className="latest-match-details-value">{firstInnings}</p>
            <p className="latest-match-details-label">Second Innings</p>
            <p className="latest-match-details-value">{secondInnings}</p>
            <p className="latest-match-details-label">Man Of The Match</p>
            <p className="latest-match-details-value">{manOfTheMatch}</p>
            <p className="latest-match-details-label">Umpires</p>
            <p className="latest-match-details-value">{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
