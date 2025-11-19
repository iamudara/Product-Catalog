import { useState, useEffect, useRef } from 'react';
import './App.css';


// Product data
const PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    description: 'High-quality wireless headphones with noise cancellation.',
    inStock: true
  },
  {
    id: 2,
    name: 'Smart Watch',
    category: 'Electronics',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    description: 'Feature-rich smartwatch with fitness tracking.',
    inStock: true
  },
  {
    id: 3,
    name: 'Leather Backpack',
    category: 'Fashion',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
    description: 'Stylish leather backpack for everyday use.',
    inStock: true
  },
  {
    id: 4,
    name: 'Running Shoes',
    category: 'Fashion',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    description: 'Comfortable running shoes with excellent support.',
    inStock: false
  },
  {
    id: 5,
    name: 'Coffee Maker',
    category: 'Home',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop',
    description: 'Automatic coffee maker with timer.',
    inStock: true
  },
  {
    id: 6,
    name: 'Yoga Mat',
    category: 'Sports',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop',
    description: 'Non-slip yoga mat for all types of workouts.',
    inStock: true
  },
  {
    id: 7,
    name: 'Desk Lamp',
    category: 'Home',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop',
    description: 'Modern LED desk lamp with adjustable brightness.',
    inStock: true
  },
  {
    id: 8,
    name: 'Bluetooth Speaker',
    category: 'Electronics',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
    description: 'Portable Bluetooth speaker with great sound quality.',
    inStock: false
  },
  {
    id: 9,
    name: 'Water Bottle',
    category: 'Sports',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop',
    description: 'Insulated water bottle keeps drinks cold for 24 hours.',
    inStock: true
  },
  {
    id: 10,
    name: 'Sunglasses',
    category: 'Fashion',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop',
    description: 'Polarized sunglasses with UV protection.',
    inStock: true
  }
];

//product card component
function ProductCard({ product }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className='product-card'>
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <p className="price">${product.price}</p>
        <p className={`stock ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
          {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
        </p>
        
        {/* Toggle button */}
        <button 
          className="details-btn"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        {/* Conditional rendering: show description if showDetails is true */}
        {showDetails && (
          <div className="details">
            <p className="description">{product.description}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        )}
      </div>  
    </div>
  );
}

function CustomSelect({ value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-select-container" ref={dropdownRef}>
      <div 
        className={`custom-select-trigger ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : 'Select...'}</span>
        <svg 
          className={`arrow ${isOpen ? 'up' : ''}`} 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      
      {isOpen && (
        <div className="custom-select-options">
          {options.map((option) => (
            <div 
              key={option.value} 
              className={`custom-option ${value === option.value ? 'selected' : ''}`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
              {value === option.value && <span className="check">✓</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState(''); 
  const [sortBy, setSortBy] = useState('name'); 
  const [showInStockOnly, setShowInStockOnly] = useState(false); 

  // Get unique categories
  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  // Filter and sort products
  let filteredProducts = PRODUCTS;
  
  // Filter by category
  if (selectedCategory !== 'All') {
    filteredProducts = filteredProducts.filter(
      product => product.category === selectedCategory
    );
  }

  // Filter by search term
  if (searchTerm) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Filter by stock status
  if (showInStockOnly) {
    filteredProducts = filteredProducts.filter(product => product.inStock);
  }

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    }
    return 0;
  });


  return (
    <div className='app'>
      <header>
        <h1>Product Catalog</h1>
        <p>Browse our amazing products</p>
      </header>

      {/* Search Section (Centered) */}
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Controls Row: Categories (Left) + Sort/Stock (Right) */}
      <div className="controls-row">
        {/* Category Filter */}
        <div className="filters">
          <h3>Filter by Category:</h3>
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="actions-group">
          <div className="sort-box">
            <label>Sort by: </label>
            <CustomSelect 
              value={sortBy} 
              onChange={setSortBy}
              options={[
                { value: 'name', label: 'Name' },
                { value: 'price-low', label: 'Price: Low to High' },
                { value: 'price-high', label: 'Price: High to Low' }
              ]}
            />
          </div>

          <div className="stock-filter">
            <label>
              <input
                type="checkbox"
                checked={showInStockOnly}
                onChange={(e) => setShowInStockOnly(e.target.checked)}
              />
              In Stock Only
            </label>
          </div>
        </div>
      </div>
      
      <p className="results-count">
        Showing {filteredProducts.length} of {PRODUCTS.length} products
      </p>
        
      {/* Show message if no results */}
      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <h2>No products found</h2>
          <p>Try adjusting your filters or search term</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  );
}

export default App;