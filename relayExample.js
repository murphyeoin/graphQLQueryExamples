import React from 'react'
import {createFragmentContainer, graphql} from 'react-relay'

import RepositoryIcon from './RepositoryIcon'
import RepositoryStar from './RepositoryStar'

import TeamMemberListItem from './TeamMemberListItem'

export default createFragmentContainer(
    TeamListItem,
  graphql`
    fragment TeamListItem_team on Team {
      name
      id 
      url
      members(first:20) {
         edges {
            node {
               id
               ...TeamMemberListItem_member
            }
         }
      }
    }
  `
)

function TeamListItem({team}) {
    var x = {team};
    console.log("team " + JSON.stringify(team));
  return (
      <p>
        Team: 
      <a href={team.url}>
        {team.name}
      </a>
        {team.members.edges.map(edge => (
            <TeamMemberListItem member={edge.node} key={edge.node.id} />
        ))}
      </p>
  )
}


