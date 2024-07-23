// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, recentMatchesData: {}}

  componentDidMount() {
    this.getRecentMatches()
  }

  getFormattedObject = data => ({
    id: data.id,
    competingTeam: data.competing_team,
    date: data.date,
    venue: data.venue,
    result: data.result,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    manOfTheMatch: data.man_of_the_match,
    umpires: data.umpires,
    matchStatus: data.match_status,
  })

  getRecentMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()

    const formattedData = {
      teamBannerURL: fetchedData.team_banner_url,
      latestMatch: this.getFormattedObject(fetchedData.latest_match_details),
      recentMatches: fetchedData.recent_matches.map(recentMatch =>
        this.getFormattedObject(recentMatch),
      ),
    }
    this.setState({recentMatchesData: formattedData, isLoading: false})
  }

  getTeamClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'CSK':
        return 'csk'
      case 'DC':
        return 'dc'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'MI':
        return 'mi'
      case 'RCB':
        return 'rcb'
      case 'RR':
        return 'rr'
      case 'SH':
        return 'srh'
      default:
        return ''
    }
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height="50" />
    </div>
  )

  renderTeamMatches = () => {
    const {recentMatchesData} = this.state
    const {teamBannerURL, recentMatches, latestMatch} = recentMatchesData

    return (
      <div className="team-matches-container">
        <img src={teamBannerURL} alt="team banner" className="team-banner" />
        <LatestMatch latestMatchDetails={latestMatch} />
        <ul className="recent-matches-list">
          {recentMatches.map(recentMatch => (
            <MatchCard matchData={recentMatch} key={recentMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const className = `team-matches-route-container ${this.getTeamClassName()}`

    return (
      <div className={className}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
