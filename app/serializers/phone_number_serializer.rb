class PhoneNumberSerializer < ActiveModel::Serializer
  attributes :id, :number, :contact_id, :sharing_link_twitter, :sharing_link_facebook, :audio_file, :video_file, :image_file, :afterevent_id, :who_is_going
end