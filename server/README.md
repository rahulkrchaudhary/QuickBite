 # QuickBite - Online Food Ordering Backend

A comprehensive backend system for an online food ordering platform built with Spring Boot. This application provides secure user authentication, restaurant management, menu handling, cart management, order processing, and integrated payment solutions.

## Features

### Core Functionality
- **User Management**: User registration, authentication with JWT tokens, and role-based access control
- **Restaurant Management**: Restaurant owners can manage their restaurants, menus, and orders
- **Menu Management**: CRUD operations for food items, categories, and ingredients
- **Shopping Cart**: Add/remove items, quantity management, and cart persistence
- **Order Processing**: Complete order lifecycle from creation to delivery
- **Payment Integration**: Stripe payment gateway with webhook support
- **Event Management**: Restaurant events and promotions

### Security Features
- JWT-based authentication and authorization
- Role-based access control (Customer, Restaurant Owner, Admin)
- CORS configuration for frontend integration
- Secure password encoding with BCrypt
- Protected admin endpoints

### Additional Features
- Email notifications for password reset
- Connection pooling with HikariCP
- MySQL database support
- RESTful API design
- Docker containerization

## 🛠️ Tech Stack

- **Framework**: Spring Boot
- **Language**: Java 
- **Database**: PostgreSQL (with MySQL support available)
- **Security**: Spring Security with JWT
- **Payment**: Stripe API
- **Email**: Spring Mail
- **Build Tool**: Maven
- **Containerization**: Docker

## 📋 Prerequisites

- Java 17 or higher
- Maven 3.8+
- MySQL database
- Stripe account for payment processing
- Email account for notifications (Gmail recommended)

## ⚙️ Configuration

### Environment Variables

Create a .env file or set the following environment variables:

```properties
# Database Configuration
DATASOURCE_URL=dp_url
DATASOURCE_USER=your_db_username
DATASOURCE_PASSWORD=your_db_password

# Frontend URL
FRONTED_URL=frontened_url

# Stripe Configuration
STRIPE_API_KEY=your_stripe_secret_key

# Email Configuration
EMAIL=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Server Port (optional)
PORT=8080
```

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/rahulkrchaudhary/QuickBite.git
cd QuickBite/server
```

### 3. Configure Environment Variables
Set up all required environment variables as mentioned above.

### 4. Build and Run

#### Using Maven
```bash
mvn clean install
mvn spring-boot:run
```

#### Using Docker
```bash
# Build the image
docker build -t quickbite-backend .

# Run the container
docker run -p 8080:8080 --env-file .env quickbite-backend
```

### 5. Access the Application
The API will be available at `http://localhost:8080`

## API Documentation

### Authentication Endpoints
- `POST /auth/signup` - User registration
- `POST /auth/signin` - User login
- `POST /auth/reset-password-request` - Request password reset
- `POST /auth/reset-password` - Reset password

### User Endpoints
- `GET /api/users/profile` - Get user profile
- `DELETE /api/users/delete/{id}` - Delete user account

### Restaurant Endpoints
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/{id}` - Get restaurant by ID
- `POST /api/admin/restaurants` - Create restaurant (Admin/Owner)
- `PUT /api/admin/restaurants/{id}` - Update restaurant (Admin/Owner)

### Food & Menu Endpoints
- `GET /api/food/restaurant/{restaurantId}` - Get restaurant menu
- `POST /api/admin/food` - Add food item (Admin/Owner)
- `PUT /api/admin/food/{id}` - Update food item (Admin/Owner)

### Order Endpoints
- `POST /api/order` - Create new order
- `GET /api/order/user` - Get user order history
- `GET /api/admin/order/restaurant/{id}` - Get restaurant orders (Admin/Owner)

### Payment Endpoints
- `GET /api/payment` - Get user payment history
- `POST /api/stripe/webhook` - Stripe webhook handler

## Security Configuration

The application implements comprehensive security measures:

- JWT token-based authentication
- Role-based authorization (CUSTOMER, RESTAURANT_OWNER, ADMIN)
- CORS configuration for frontend integration
- Secure endpoints with proper access control
- Password encryption using BCrypt

## Payment Integration

Stripe integration includes:
- Secure payment session creation
- Webhook handling for payment status updates
- Support for INR currency
- Automatic order status updates based on payment status

## Email Features

- Password reset email functionality
- SMTP configuration for Gmail
- HTML email templates
- Secure email sending with authentication

##  Docker Support

The application includes Docker configuration for easy deployment:
- Multi-stage build for optimized image size
- Java 17 runtime environment
- Port 8080 exposure
- Environment variable support

## Author

**Rahul Kumar**
- GitHub: [@rahulkrchaudhary](https://github.com/rahulkrchaudhary)
---
