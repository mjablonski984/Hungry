const apiKey = process.env.REACT_APP_API_KEY;

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
      .then((res) => res.json())
      .then((jsonRes) => {
        if (jsonRes.businesses) {
          return jsonRes.businesses.map((business) => {
            // console.log(business);
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
              phone: business.display_phone
            };
          });
        }
      });
  }
};

export default Yelp;
