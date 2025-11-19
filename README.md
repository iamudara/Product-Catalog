# Product Catalog

A simple product catalog built with React and Vite. This application showcases a dynamic product browsing experience with filtering, searching, and sorting capabilities.

![Product Catalog](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.2-purple)

## 🌟 Features

- **Product Display**: Browse a collection of products with images, prices, and descriptions
- **Category Filtering**: Filter products by categories (Electronics, Fashion, Home, Sports)
- **Search Functionality**: Real-time search across product names
- **Sorting Options**: Sort products by name or price (low to high, high to low)
- **Stock Filter**: Toggle to show only in-stock items
- **Product Details**: Expandable product cards with detailed descriptions
- **Responsive Design**: Modern, mobile-friendly UI with smooth animations
- **Stock Status**: Visual indicators for product availability

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/product-catalog.git
```

2. Navigate to the project directory:

```bash
cd product-catalog
```

3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will open at `http://localhost:5173` (default Vite port).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
product-catalog/
├── public/              # Static assets
├── src/
│   ├── App.jsx         # Main application component with product data and logic
│   ├── App.css         # Styling for the application
│   ├── main.jsx        # Application entry point
│   └── assets/         # Images and other assets
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
└── README.md           # Project documentation
```

## 🛠️ Customization Guide

### Adding New Products

Edit the `PRODUCTS` array in [`src/App.jsx`](src/App.jsx):

```javascript
const PRODUCTS = [
  {
    id: 11,
    name: "Your Product Name",
    category: "Category",
    price: 99.99,
    image: "https://your-image-url.com",
    description: "Product description",
    inStock: true,
  },
  // ...existing products
];
```

### Adding New Categories

1. Add products with new category names to the `PRODUCTS` array
2. The categories will automatically appear in the filter buttons

### Styling Customization

Modify [`src/App.css`](src/App.css) to change:

- **Colors**: Update the gradient in the `header` class or button colors
- **Layout**: Adjust grid columns in `.product-grid`
- **Spacing**: Modify padding and margins
- **Fonts**: Change font families in the `body` selector

Example - Change primary color:

```css
header {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}

.filter-btn.active {
  background: #your-primary-color;
}
```

## 🔧 Technologies Used

- **React 19.2.0**: UI library for building the interface
- **Vite 7.2.2**: Fast build tool and development server
- **ESLint**: Code quality and consistency
- **CSS3**: Modern styling with animations and flexbox/grid layouts

## 📝 Component Overview

### App Component

Main component in [`src/App.jsx`](src/App.jsx) that handles:

- Product state management
- Filtering logic (category, search, stock)
- Sorting functionality
- Rendering product grid and filters

### ProductCard Component

Individual product display component featuring:

- Product image and information
- Stock status indicator
- Expandable details section
- Toggle functionality for showing/hiding description

## 🎨 UI Features

- **Gradient Header**: Eye-catching purple gradient
- **Hover Effects**: Cards lift on hover with shadow enhancement
- **Smooth Animations**: Slide-down animation for product details
- **Responsive Grid**: Auto-adjusting product grid layout
- **Visual Feedback**: Active filter states and focused inputs
