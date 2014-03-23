class CreateInquiries < ActiveRecord::Migration
  def change
    create_table :inquiries do |t|
      t.string :name
      t.string :email
      t.string :company
      t.string :phone
      t.text :content

      t.timestamps
    end
  end
end
