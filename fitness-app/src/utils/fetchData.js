export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };

  const options = {
  method:"GET",
  headers:{
    "X-RapidAPI-Key":"KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4BKjsnK4bKzuUzVLzA",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com"
  }
  };

  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
  
    return data;
  };

