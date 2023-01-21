package com.matosic.euprava.advice;

public class DefaultExceptionMoj extends Exception{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public DefaultExceptionMoj(String errorPorukica) {
		super(errorPorukica);
	}
	
}
