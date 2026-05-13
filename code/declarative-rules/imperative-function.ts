function attack(state: { player: number; enemy: number }) {
  let enemyHealth = state.enemy - 3
  if (enemyHealth < 0) {
    enemyHealth = 0
  }
  return { player: state.player, enemy: enemyHealth };
}

