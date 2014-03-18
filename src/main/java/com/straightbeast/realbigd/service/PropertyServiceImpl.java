package com.straightbeast.realbigd.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.straightbeast.realbigd.persistence.dto.PropertyDTO;
import com.straightbeast.realbigd.persistence.enums.Operation;
import com.straightbeast.realbigd.persistence.logic.PropertyLogic;

@Service
public class PropertyServiceImpl implements PropertyService {

	@Autowired
	private PropertyLogic propertyLogic;

	@Override
	public List<PropertyDTO> propertySearch(String address, Float price, Operation op) {
		// TODO Auto-generated method stub
		return propertyLogic.propertySearch(address, price, op);
	}
}
