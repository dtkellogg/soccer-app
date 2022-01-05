import React, { useState, useEffect } from 'react'
import MatchItem from './MatchItem'
import Loading from '../components/Loading'
import MatchReel from '../components/MatchReel'

export default function MatchList({ country }) {
  const [matches, setMatches] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://www.scorebat.com/video-api/v3/')
      const { response } = await res.json()

      console.log(response)
      setMatches(response.filter((e) => e.competition.split(':')[0] === country))
      setLoading(false)

      console.log(response.filter((e) => e.competition.split(':')[0] === country))
    }

    fetchEvents()
  }, [])

  return (
    <div className="match-list__container">
      {matches && matches.map((match) => {
        return( <MatchItem match={match}/> )
      })}
    </div>
  )
}

