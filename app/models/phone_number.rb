class PhoneNumber < ActiveRecord::Base
  belongs_to :contact
  attr_accessible :number, :contact_id, :sharing_link_facebook, :sharing_link_twitter, :audio_file, :video_file, :image_file, :afterevent_id, :who_is_going
  
end
