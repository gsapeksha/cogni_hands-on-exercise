package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

  private static final Logger LOGGER =
    LoggerFactory.getLogger(CountryController.class);

  @Autowired
  private CountryService countryService;

  @GetMapping("/country")
  public Country getCountry() {

    LOGGER.info("START");

    Country country = countryService.getCountry();

    LOGGER.info("END");

    return country;
  }
}
