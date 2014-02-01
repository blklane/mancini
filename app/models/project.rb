class Project < ActiveRecord::Base
  extend FriendlyId
  attr_accessible :architect, :contractor, :name, :product, :product_type, :slug
  validates :product_type, :numericality => {
  													 :greater_than_or_equal_to => 1,
  													 :less_than_or_equal_to => 3,
  													 :message => 'Select a Product Type'
  													}
  has_many :images, :dependent => :destroy
  accepts_nested_attributes_for :images, :allow_destroy => true
  friendly_id :name, :use => :slugged

  def type_string
    case product_type
    when 1
      'Flooring'
    when 2
      'Interior'
    when 3
      'Structural'
    end 
  end
end
