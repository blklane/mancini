class Project < ActiveRecord::Base
  extend FriendlyId
  attr_accessible :architect, :contractor, :name, :product, :product_type, :slug
  has_many :images, :dependent => :destroy
  accepts_nested_attributes_for :images, :allow_destroy => true
  friendly_id :name, use: :slugged
end
