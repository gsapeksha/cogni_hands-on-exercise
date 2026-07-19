package com.cognizant.springlearn.security;

import com.cognizant.springlearn.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;

@Component
public class JwtAuthorizationFilter extends OncePerRequestFilter {

  @Autowired
  private JwtUtil jwtUtil;

  @Override
  protected void doFilterInternal(HttpServletRequest request,
                                  HttpServletResponse response,
                                  FilterChain filterChain)
    throws ServletException, IOException {

    String header = request.getHeader("Authorization");

    if (header != null && header.startsWith("Bearer ")) {

      String token = header.substring(7);

      if (jwtUtil.validateToken(token)) {

        String username = jwtUtil.extractUsername(token);

        UsernamePasswordAuthenticationToken authentication =
          new UsernamePasswordAuthenticationToken(
            new User(username, "", Collections.emptyList()),
            null,
            Collections.emptyList());

        authentication.setDetails(
          new WebAuthenticationDetailsSource().buildDetails(request));

        SecurityContextHolder.getContext()
          .setAuthentication(authentication);
      }
    }

    filterChain.doFilter(request, response);
  }
}
