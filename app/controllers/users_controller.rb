class UsersController < ApplicationController
  respond_to :json

  def show
    @user = User.find(params[:id])
    respond_with(@user) do |format|
    format.html { render }
    end
  end
  
  def create
	    user = User.new
	    if update_user(user)
	      render json: user, status: :created
	    else
	      render json: user.errors, status: :unprocessable_entity
	    end
  end
  	    
  def update_user(user)
    user_params = permitted_params
    # Because updates to the user and its associations should be atomic,
    # wrap them in a transaction.
    User.transaction do
      # Update the contact's own attributes first.
      user.attributes = user_params
      user.save!
  end

    # Important! Reload the contact to ensure that changes to its associations
    # will be serialized correctly.
    user.reload

    return true
  rescue
    return false
  end

end