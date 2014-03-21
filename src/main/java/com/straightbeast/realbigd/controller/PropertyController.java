package com.straightbeast.realbigd.controller;

import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.straightbeast.realbigd.persistence.dto.PropertyDTO;
import com.straightbeast.realbigd.persistence.enums.Operation;
import com.straightbeast.realbigd.service.PropertyService;

@Controller
public class PropertyController {

	private static final Logger logger = LoggerFactory.getLogger(PropertyController.class);

	@Autowired
	private PropertyService propertyService;
	
	
	//http://localhost:8080/RealBigD-web/propertySearch?address=estes&price=100000&opCode=1
	@RequestMapping(value = "/propertySearch", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<List<PropertyDTO>> propertySearch(
			@RequestParam(value = "address", required=false) String address,
			@RequestParam(value = "price", required = false) Float price,
			@RequestParam(value = "opCode", required = false) Integer opCode,
			Locale locale, 
			Model model, 
			HttpServletRequest request){
		
		List<PropertyDTO> results = propertyService.propertySearch(address, price, Operation.getOperation(opCode));
		
		logger.info("Property search results: " + results);
		
		return new ResponseEntity<List<PropertyDTO>>(results, new HttpHeaders(), HttpStatus.OK);
	}
}
