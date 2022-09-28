export const filterCards = (data, searchValue) => {
  const value = searchValue.toLowerCase();
  const newCards = data.filter(
    (card) =>
      card.title.toLowerCase().includes(value) ||
      card.providerName.toLowerCase().includes(value) ||
      card.save.toLowerCase().includes(value) ||
      card.description.toLowerCase().includes(value)
  );

  return newCards;
};

export const sortData = (option, data) => {
  const field = option === "greatest" ? "save" : "providerName";
  let sortedData = [];

  if (option === "z-a") {
    sortedData = data.sort((a, b) => {
      if (a[field] > b[field]) {
        return -1;
      }

      if (a[field] < b[field]) {
        return 1;
      }

      return 0;
    });

    return sortedData;
  }

  sortedData = data.sort((a, b) => {
    if (a[field] > b[field]) {
      return 1;
    }

    if (a[field] < b[field]) {
      return -1;
    }

    return 0;
  });

  return sortedData;
};
