package com.straightbeast.realbigd.service;

import java.util.List;

import com.straightbeast.realbigd.persistence.dto.PropertyDTO;
import com.straightbeast.realbigd.persistence.enums.Operation;

public interface PropertyService {
	List<PropertyDTO> propertySearch(String address, Float price, Operation op);
}
