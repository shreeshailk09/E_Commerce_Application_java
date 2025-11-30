package com.shree.service;

import com.shree.exception.OrderException;
import com.shree.model.Address;
import com.shree.model.User;
import com.shree.model.Order;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderService  {

    public Order  createOrder(User user, Address shippingAddress) throws OrderException;
    public Order findOrderById(Long orderId) throws OrderException;
    public List<Order> usersOrderHistory(Long userId);
    public Order placedOrder(Long orderId) throws OrderException;
    public Order confirmedOrder(Long orderId) throws OrderException;
    public Order shippedOrder(Long orderId) throws OrderException;
    public Order deliveredOrder(Long orderId) throws OrderException;
    public Order cancelledOrder(Long orderId) throws OrderException;
    public List<Order> getAllOrders();
    public void deleteOrder(Long orderId) throws OrderException;

}
