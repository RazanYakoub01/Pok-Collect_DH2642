import { BASE_URL } from "./config/apiConfig";


function getPokeDetails(pokeID) {
  const url = BASE_URL + `pokemon/${pokeID}`;
  const options = {
    method: "GET",
  };
  console.log(url);

  return fetch(url, options).then(checkResponseStatusACB).then(extractPokeData).catch(handleErrorACB);

  function checkResponseStatusACB(response) {
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  }

  function extractPokeData(data) {
    let stats = {};
    data.stats.forEach(statItem => {
        stats[statItem.stat.name] = statItem.base_stat;
    });
    return {
        Name: data.name,
        ID: data.id,
        BaseExperience: data.base_experience,
        Height: data.height,
        Weight: data.weight,
        Types: data.types.map(typeInfo => typeInfo.type.name),
        Abilities: data.abilities.map(ability => ability.ability.name),
        ImageURL: data.sprites.front_default,
        Stats: stats
    };
}

  function handleErrorACB(error) {
    console.error("Error:", error);
    throw error;
  }
}


function searchPokemons(searchParams) {
  const params = new URLSearchParams();

  // Only add 'type' and 'query' to the parameters if they are truthy (non-null, non-undefined, non-empty string)
  if (searchParams.type) {
    params.set("type", searchParams.type);
  }
  if (searchParams.query) {
    params.set("query", searchParams.query);
  }

  const queryString = params.toString();

  const searchUrl = BASE_URL + `recipes/complexSearch?${queryString}`;
  const options = {
    headers: {
      "X-Mashape-Key": API_KEY,
    },
  };

  function checkResponseStatusACB(response) {
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  }

  function handleDataACB(data) {
    return data.results || [];
  }

  function handleErrorACB(error) {
    console.error("Error:", error);
    throw error;
  }

  return fetch(searchUrl, options)
    .then(checkResponseStatusACB)
    .then(handleDataACB)
    .catch(handleErrorACB);
}

export { getPokeDetails};
