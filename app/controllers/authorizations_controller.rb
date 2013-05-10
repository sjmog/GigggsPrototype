class AuthorizationsController < ApplicationController
  respond_to :json
  def show
    id     = params[:id]
    cName  = params[:cName]
    action = params[:action]
    
    object = cName.capitalize.constantize
    
    object = object.find(id) unless id.blank?
    
    authorized = can? action, object
    
    render status: (authorized ? 200 : 401), json: {}
  end
end