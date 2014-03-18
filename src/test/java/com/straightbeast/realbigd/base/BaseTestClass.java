package com.straightbeast.realbigd.base;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;


@ContextConfiguration("classpath:test-datasource-context.xml")
public class BaseTestClass extends AbstractTransactionalJUnit4SpringContextTests{

}
