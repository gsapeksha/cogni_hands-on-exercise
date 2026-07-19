package com.cognizant.springlearn.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  @Autowired
  private JwtAuthorizationFilter jwtAuthorizationFilter;

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {

    auth.inMemoryAuthentication()
      .withUser("admin")
      .password(passwordEncoder().encode("pwd"))
      .roles("ADMIN")
      .and()
      .withUser("user")
      .password(passwordEncoder().encode("pwd"))
      .roles("USER");
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {

    http
      .csrf().disable()
      .httpBasic()
      .and()
      .authorizeRequests()
      .antMatchers("/authenticate").permitAll()
      .antMatchers("/countries").authenticated()
      .anyRequest().authenticated()
      .and()
      .addFilterBefore(jwtAuthorizationFilter,
        UsernamePasswordAuthenticationFilter.class);
  }
}
