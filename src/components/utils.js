export const filterCards = (data, searchValue) => {
  const value = searchValue.toLowerCase();
  const newCards = data.filter(
    (card) =>
      card.title.toLowerCase().includes(value) ||
      card.providerName.toLowerCase().includes(value) ||
      card.save.toLowerCase().includes(value) ||
      card.description.toLowerCase().includes(value)
  );
  console.log(newCards);

  return newCards;
};
