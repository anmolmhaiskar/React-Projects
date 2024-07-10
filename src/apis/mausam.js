export const getMausamReport = async (region) => {
  const baseURL =
    "https://api.weatherapi.com/v1/current.json?key=2ad4e132340743b4bde124919241903";
  const response = await fetch(`${baseURL}&q=${region}&api=yes`);
  return await response.json();
};

export const getMausamBackgroundImage = async (weatherText) => {
  const client_id = "d8RswXpNp9uXcRn9uAogMgs8JckS1ivZY0y0wenpdQw";
  const baseURL = "https://api.unsplash.com/search/photos";
  const response = await fetch(
    `${baseURL}?query=${weatherText}&per_page=1&client_id=${client_id}`
  );
  return await response.json();
};

export const getMausamDataForLocation = async (lattitude, longitude) => {
  const baseURL =
    "https://api.weatherapi.com/v1/current.json?key=2ad4e132340743b4bde124919241903";
  const response = await fetch(
    `${baseURL}&q=${lattitude},${longitude}&api=yes`
  );
  return await response.json();
};
