package com.cognizant.springlearn.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

  private static final Logger LOGGER =
    LoggerFactory.getLogger(AuthenticationController.class);

  @GetMapping("/authenticate")
  public Map<String, String> authenticate(
    @RequestHeader("Authorization") String authHeader) {

    LOGGER.info("START");

    LOGGER.debug("Authorization Header : {}", authHeader);

    String token = Jwts.builder()
      .setSubject("user")
      .setIssuedAt(new Date())
      .signWith(SignatureAlgorithm.HS256, "secretkey")
      .compact();

    Map<String, String> map = new HashMap<>();
    map.put("token", token);

    LOGGER.info("END");

    return map;
  }
}
