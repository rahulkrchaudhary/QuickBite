 # QuickBite - Food Delivery Platform

**Quick Cravings, QuickBite!**

A modern, full-featured food delivery platform that connects customers with local restaurants, built with React.js and Spring Boot.

## Overview

QuickBite is your ultimate food-ordering platform, connecting you with the best local restaurants and eateries. Explore a variety of delicious meals, place your order with ease, and enjoy your favorite food hassle-free. Whether you're craving comfort food or something new, QuickBite is here to serve your hunger with just a few taps!

## Key Features

### User Management
- **User Authentication** - Secure login/registration system with JWT
- **Dual Role System** - Customer and Restaurant Owner roles
- **Profile Management** - User profiles with order history
- **Password Reset** - Secure password reset functionality

### Restaurant Management
- **Restaurant Registration** - Owners can register and manage restaurants
- **Menu Management** - Full CRUD operations for menu items
- **Order Management** - Real-time order tracking and status updates
- **Inventory Control** - Ingredient and stock management
- **Category Management** - Organize food items by categories

### Customer Experience
- **Browse Restaurants & Menus** - Explore restaurants and their offerings
- **Advanced Filtering** - Filter by food type (Veg/Non-Veg/Seasonal) and categories
- **Search Functionality** - Search for restaurants and dishes
- **Add to Cart & Checkout** - Seamless shopping cart experience
- **Multiple Addresses** - Manage delivery addresses
- **Favorites** - Save favorite restaurants
- **Order Tracking** - Real-time order status updates

### Payment & Orders
- **Payment Integration** - Stripe API integration for secure payments
- **Order History** - Complete order tracking and history
- **Real-time Updates** - Live order status notifications

### Admin Dashboard
- **Restaurant Dashboard** - Comprehensive restaurant management
- **Order Management** - Track and update order statuses
- **Menu Administration** - Add, edit, delete menu items
- **Analytics** - Dashboard with key metrics
- **Event Management** - Manage restaurant events and promotions

### User Interface
- **Responsive Design** - Works seamlessly on all devices
- **Dark Theme** - Modern dark theme with Material-UI
- **User-friendly UI/UX** - Intuitive and clean interface
- **Image Management** - Cloudinary integration for image uploads

## Tech Stack

### Frontend
- **React.js** (v19.0.0) - Modern React with hooks
- **Redux Toolkit** - State management
- **Material-UI** - Component library and theming
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Formik & Yup** - Form handling and validation
- **Axios** - HTTP client for API calls

### Backend Integration
- **Spring Boot** - REST APIs
- **JWT Authentication** - Secure token-based auth
- **MySQL Database** - Data persistence
- **Cloudinary** - Image storage and management
- **Stripe API** - Payment processing

### Development Tools
- **Create React App** - Project scaffolding
- **React Scripts** - Build tools
- **Testing Library** - Component testing
 
## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Backend API server running

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rahulkrchaudhary/QuickBite.git
   cd QuickBite/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Set up your API endpoints
   - Configure Cloudinary credentials
   - Set up Stripe keys

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

## Key Components

### State Management
- Redux store with multiple slices
- Authentication state
- Restaurant data management
- Cart functionality
- Order tracking

### Routing
- Protected routes for authenticated users
- Admin routes for restaurant owners
- Public routes for browsing

### UI Components
- Reusable Material-UI components
- Custom styled components
- Responsive design patterns

## Contact

**Developer:** Rahul Kumar 
**Email:** rahulkrchaudhary12@gmail.com  
**GitHub:** [rahulkrchaudhary](https://github.com/rahulkrchaudhary)

---

**QuickBite** - Making food delivery quick, easy, and delightful!
