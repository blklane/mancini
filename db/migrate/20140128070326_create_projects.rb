class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :contractor
      t.string :architect
      t.string :product
      t.string :product_type

      t.timestamps
    end
  end
end
