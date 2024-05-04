package com.moviemagnet.moviemagnet.ExceptionHandling;

public class UserAlreadyExistedException extends RuntimeException{
public String message;
	
	
	public UserAlreadyExistedException(String message) {
	super(message);
	this.message = message;
}


	public String getmsg() {
		return message;
	}



}
