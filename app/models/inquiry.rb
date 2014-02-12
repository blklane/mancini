class Inquiry < ActiveRecord::Base
  attr_accessible :company, :email, :content, :name, :phone
  validates :phone, :presence => {:message => 'Phone number please'}
  validates :email, :presence => {:message => 'A valid email address would be greatly appreciated, thanks.'}
  validates :name, :presence => {:message => 'We just want to know your name.'}
  validates :content, :presence => true
end
