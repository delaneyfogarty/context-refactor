export function findCardIndex(value, suit, cards) {
  return cards.findIndex((card) => card.value === value && card.suit === suit);
}
