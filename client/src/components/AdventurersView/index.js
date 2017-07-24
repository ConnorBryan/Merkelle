import React from 'react';
import CharacterSheet from '../CharacterSheet';

export default ({ blockchain }) => {
  if (blockchain.length > 0) {
    const mostRecentBlock = blockchain[blockchain.length - 1];
    const adventurersById = (JSON.parse(mostRecentBlock.data)).entitiesById.filter(entity => entity.type === 'ADVENTURER');
    const adventurer = adventurersById[0];
    console.log(adventurer);
    return (
      <div>
        <CharacterSheet adventurer={adventurer} />
      </div>
    );
  }
  return <p>Loading...</p>
}