package com.shree.service;

import com.shree.exception.OrderException;
import com.shree.model.Address;
import com.shree.model.Cart;
import com.shree.model.CartItem;
import com.shree.model.Order;
import com.shree.model.OrderItem;
import com.shree.model.OrderStatus;
import com.shree.model.User;
import com.shree.repository.*;
import org.aspectj.weaver.ast.Or;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderServiceImplementation implements OrderService {


    private  CartService cartService;
    private AddressRepository addressRepository;
    private  OrderRepository orderRepository;
    private OrderItemRepository orderItemRepository;
    private UserRepository userRepository;
    private OrderItemService orderItemService;

    public OrderServiceImplementation(CartService cartService,
                                      AddressRepository addressRepository,
                                      OrderItemRepository orderItemRepository,
                                      UserRepository userRepository,
                                      OrderItemService orderItemService,
                                      OrderRepository orderRepository) {
        this.cartService = cartService;
         this.addressRepository=addressRepository;
         this.orderItemService=orderItemService;
         this.orderItemRepository=orderItemRepository;
         this.userRepository=userRepository;
        this.orderRepository = orderRepository;
    }

    @Override
    public Order createOrder(User user, Address shippingAddress) throws OrderException {
       shippingAddress.setUser(user);
       Address address=addressRepository.save(shippingAddress);
       user.getAddress().add(address);
       userRepository.save(user);

       Cart cart=cartService.findUserCart(user.getId());
       List<OrderItem> orderItems=new ArrayList<>();

       for(CartItem item :cart.getCartItems()){
           OrderItem orderItem=new OrderItem();

           orderItem.setPrice(item.getPrice());
           orderItem.setProduct(item.getProduct());
           orderItem.setQuantity(item.getQuantity());
           orderItem.setSize(item.getSize());
           orderItem.setUserId(item.getUserId());
           orderItem.setDiscountedPrice(item.getDiscountedPrice());

           OrderItem createdOrderItem=orderItemRepository.save(orderItem);
           orderItems.add(createdOrderItem);
       }

       Order createdOrder=new Order();
       createdOrder.setUser(user);
       createdOrder.setOrderItems(orderItems);
       createdOrder.setTotalPrice(cart.getTotalPrice());
       createdOrder.setTotalDiscountedPrice(cart.getTotalDiscountedPrice());
       createdOrder.setTotalItems(cart.getTotalItems());
       createdOrder.setShippingAddress(address);
       createdOrder.setOrderDate(LocalDateTime.now());
       createdOrder.setOrderStatus("PENDING");
       createdOrder.getPaymentDetails().setStatus("PENDING");
       createdOrder.setCreatedAt(LocalDateTime.now());

       Order savedOrder=orderRepository.save(createdOrder);

       for(OrderItem item :orderItems){
           item.setOrder(savedOrder);
           orderItemRepository.save(item);
       }
       return savedOrder;
    }

    @Override
    public Order findOrderById(Long orderId) throws OrderException {
        Optional<Order> opt=orderRepository.findById(orderId);
        if(opt.isPresent()){
            return opt.get();
        }
        throw new OrderException("order not exist with id-"+orderId);
    }

    @Override
    public List<Order> usersOrderHistory(Long userId) {
      List<Order> orders=orderRepository.getUsersOrders(userId);
      return orders;
    }

    @Override
    public Order placedOrder(Long orderId) throws OrderException {
        Order order = findOrderById(orderId);
        order.setOrderStatus("ORDER PLACED");
//        order.setUpdatedAt(LocalDateTime.now());
        order.getPaymentDetails().setStatus("COMPLETED");
        return order;
    }

    @Override
    public Order confirmedOrder(Long orderId) throws OrderException {
        Order order = findOrderById(orderId);
        order.setOrderStatus("ORDER CONFIRMED");
//        order.setUpdatedAt(LocalDateTime.now());
        return orderRepository.save(order);
    }

    @Override
    public Order shippedOrder(Long orderId) throws OrderException {
        Order order = findOrderById(orderId);
        order.setOrderStatus("ORDER SHIPPED");
//        order.setUpdatedAt(LocalDateTime.now());
        return orderRepository.save(order);
    }

    @Override
    public Order deliveredOrder(Long orderId) throws OrderException {
        Order order = findOrderById(orderId);
        order.setOrderStatus("ORDER DELIVERED");
//        order.setUpdatedAt(LocalDateTime.now());
        return orderRepository.save(order);
    }

    @Override
    public Order cancelledOrder(Long orderId) throws OrderException {
        Order order = findOrderById(orderId);
        order.setOrderStatus("ORDER CANCELLED");
//        order.setUpdatedAt(LocalDateTime.now());
        return orderRepository.save(order);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public void deleteOrder(Long orderId) throws OrderException {
        Order order = findOrderById(orderId);
        orderRepository.deleteById(orderId);
    }
}
