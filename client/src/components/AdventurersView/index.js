import React from 'react';
import AbilityScores from '../AbilityScores';
import Alignment from '../Alignment';

export default ({ blockchain }) => {
  if (blockchain.length > 0) {
    const mostRecentBlock = blockchain[blockchain.length - 1];
    const adventurersById = (JSON.parse(mostRecentBlock.data)).entitiesById.filter(entity => entity.type === 'ADVENTURER');
    const adventurer = adventurersById[0];
    return (
      <div>
        <AbilityScores abilityScores={adventurer.abilityScores} />
        <Alignment alignment={adventurer.alignment} />
      </div>
    );
  }
  return <p>Loading...</p>
}