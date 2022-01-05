import React from 'react'

export default function MatchReel({ matches }) {
  // const videos = matches.map
  return (
    <div>
      {matches.map((match) => {
        console.log(match["videos"][0].embed)
        console.log(match["videos"][0])

        return (match["videos"][0].embed)
        // return (
        //   <iframe id={match["title"]}
        //     title={match["title"]}
        //     width="300" 
        //     height="300"
        //     // src={match["videos"]}
        //   />
        // )
      })}
      
    </div>
  )
}