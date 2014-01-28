class Image < ActiveRecord::Base
  belongs_to :project
  attr_accessible :asset
  has_attached_file :asset
  validates :asset, :attachment_presence => true
end
