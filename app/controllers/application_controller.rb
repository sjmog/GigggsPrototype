class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :set_loggedin, :except => [:create, :destroy]
  def set_loggedin
  	if user_signed_in? == true
  		@loggedIn = true
  	elsif user_signed_in? == false
  		@loggedIn = false
  	end
  end
  def index
  end
end
