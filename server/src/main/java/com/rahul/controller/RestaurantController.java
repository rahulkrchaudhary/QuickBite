package com.rahul.controller;

import com.rahul.dto.RestaurantDto;
import com.rahul.model.Restaurant;
import com.rahul.model.User;
import com.rahul.request.CreateRestaurantRequest;
import com.rahul.service.RestaurantService;
import com.rahul.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private UserService userService;

    @GetMapping("/public/restaurants/search")
    public ResponseEntity<List<Restaurant>> searchRestaurant(@RequestParam String keyword) throws Exception {
//        List<Restaurant> restaurant=restaurantService.searchRestaurant(keyword);
        List<Restaurant> restaurant=restaurantService.searchRestaurantBYName(keyword);
        return new ResponseEntity<>(restaurant, HttpStatus.OK );
    }

//    @GetMapping()
//    public ResponseEntity<List<Restaurant>> getAllRestaurant(@RequestHeader("Authorization") String jwt) throws Exception {
//        User user=userService.findUserByJwtToken(jwt);
//        List<Restaurant> restaurant=restaurantService.getAllRestaurant();
//        return new ResponseEntity<>(restaurant, HttpStatus.OK);
//    }
    @GetMapping("/public/restaurants")
    public ResponseEntity<List<Restaurant>> getAllRestaurant() throws Exception {
    //    User user=userService.findUserByJwtToken(jwt);
        List<Restaurant> restaurant=restaurantService.getAllRestaurant();
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @GetMapping("/public/restaurants/{id}")
    public ResponseEntity<Restaurant> findRestaurantById(@PathVariable Long id) throws Exception {
        Restaurant restaurant=restaurantService.findRestaurantById(id);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @PutMapping("/restaurants/{id}/add-favorites")
    public ResponseEntity<RestaurantDto> addToFavorites(@RequestHeader("Authorization") String jwt,
                                                         @PathVariable Long id) throws Exception {
        User user=userService.findUserByJwtToken(jwt);
        RestaurantDto restaurant=restaurantService.addToFavorites(id, user);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }
}
