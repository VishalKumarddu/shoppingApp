import React, { useEffect, useState } from 'react';
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import './Home'

const Home = () => {
  const API_URL = 'https://fakestoreapi.com/products';
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [filteredPosts, setFilteredPosts] = useState([]); // State for filtered posts

  // Fetching the products from the API
  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      setFilteredPosts(data); // Set filtered posts to all posts initially
    } catch (error) {
      console.log("Error occurred while fetching data");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter posts based on the search query
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(query)
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className='home'>
      {/* Search bar */}
      <div className='search-bar'>
        <input 
          type='text' 
          placeholder='Search products...' 
          value={searchQuery} 
          onChange={handleSearch} 
          className='search-input'
        />
      </div>
   
      {/* Display spinner when loading */}
      {loading ? <Spinner /> : (
        filteredPosts.length > 0 ? (
          <div className='products-list'> 
            {filteredPosts.map(post => (
              <Product key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className='no-products'>No products found</div>
        )
      )}
    </div>
  );
};

export default Home;
