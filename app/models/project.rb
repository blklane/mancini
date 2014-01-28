class Project < ActiveRecord::Base
  attr_accessible :architect, :contractor, :name, :product, :product_type
  has_many :images, :dependent => :destroy
  accepts_nested_attributes_for :images, :allow_destroy => true
end
