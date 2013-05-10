class ContactSerializer < ActiveModel::Serializer
  attributes :id,
             :email,
             :notes,
             :name,
             :lat,
             :lng,
             :user_is_going,
             :external_url,
             :start,
             :end,
             :attending,
             :ticket_url,
             :promoted,
             :cat1,
             :cat2,
             :cat3,
             :pricelower,
             :pricehigher
            
             
 # def latLng MAYBE LATER
  
 # ["#{object.lat}", "#{object.lng}"]
  
#  end

  #has_many :phone_numbers, embed: :objects
  # later on, sort the user affiliation out with belongs_to :user
end
