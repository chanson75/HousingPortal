import React, { useState } from 'react';
import { fetchListings } from './api/realtor';

function App() {
  const [zip, setZip] = useState('');
  const [results, setResults] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const search = async () => {
    const filters = {
      price_min: minPrice || undefined,
      price_max: maxPrice || undefined,
    };
    const response = await fetchListings(zip, filters);
    // Extract the properties array
    console.log("Properties: ", response);
    const listings = response.properties || [];
    setResults(listings);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Search Homes for Sale</h2>
      <input
        type="text"
        placeholder="Enter ZIP code"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <br />
      <button onClick={search}>Search</button>

      <h3>Results</h3>
      {results.length === 0 && <p>No results found.</p>}
      {results.length > 0 && <p>Found {results.length} listings.</p>}

      <ul>
        {results.map((home) => (
          <li key={home.property_id}>
            {home.description.beds && (
              <>
              <h4>
                {home.location?.address?.line || 'No Address'}, {home.location?.address?.city || 'No City'}
              </h4>
              <p>Price: ${home.list_price || 'N/A'}</p>
              <p>
                Beds: {home.description?.beds || 'N/A'}, Baths: {home.description?.baths_consolidated || 'N/A'}
              </p>
              </>
            )}

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;