package com.cognizant.springlearn.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

  private final String SECRET_KEY = "secretkey";

  public Claims extractAllClaims(String token) {

    return Jwts.parser()
      .setSigningKey(SECRET_KEY)
      .parseClaimsJws(token)
      .getBody();
  }

  public String extractUsername(String token) {

    return extractAllClaims(token).getSubject();
  }

  public boolean validateToken(String token) {

    try {

      Jwts.parser()
        .setSigningKey(SECRET_KEY)
        .parseClaimsJws(token);

      return true;

    } catch (Exception e) {

      return false;
    }
  }
}
