package com.matosic.euprava.advice;

import java.time.format.DateTimeParseException;

import javax.validation.ConstraintViolationException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.matosic.euprava.dto.ApiResponse;

@RestControllerAdvice
public class ApplicationExceptionHandler {

	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	@ExceptionHandler(ConstraintViolationException.class)
	public ApiResponse<?> handleInvalidArgument(ConstraintViolationException ex) {
		ApiResponse<?> apiResponse = new ApiResponse<>();
		ex.getConstraintViolations().forEach(error -> {
			apiResponse.setErrorMessage(error.getMessage());
		});
		apiResponse.setStatus("FAILED");
		return apiResponse;

	}

	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	@ExceptionHandler(DefaultExceptionMoj.class)
	public ApiResponse<?> mojExceptionHandler(DefaultExceptionMoj excption) {
		ApiResponse<?> apiResponse = new ApiResponse<>();
		apiResponse.setStatus("FAILED");
		apiResponse.setErrorMessage(excption.getMessage());

		return apiResponse;

	}

	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	@ExceptionHandler(DateTimeParseException.class)
	public String handleInvalidArgument(DateTimeParseException ex) {
		return "Unesite datum rodjenja u formatu 2000-05-21";

	}
}
