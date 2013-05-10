

class Contact < ActiveRecord::Base
  # belongs_to :user (implemented later)
  has_many :phone_numbers, :dependent => :destroy
  validates :lat, :presence => true
  validates :lng, :presence => true
  validates :name, :presence => true
  belongs_to :user


  def full_name
    self.first_name + ' ' + self.last_name
  end
  
  def latLngArray
  	[self.lat,self.lng]
  end
end
