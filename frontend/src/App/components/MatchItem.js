import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function MatchItem({ match }) {
  const [competition, setCompetition] = useState(match.competition.split(": ")[1])
  const location = useLocation()

  console.log(`location: ${location.pathname}`)

  return (
    <div className="match-list__container--item">
      <Link className="match-list__item--title" to={`/${location.pathname}/${match.title}`}>{match.title}</Link>
      <div className="match-list__container--meta">
        <p className="match-list__item--date">{match.date.split("T")[0]}</p>
        <p className="match-list__item--competition">{competition}</p>
      </div>
    </div>
  )
}
