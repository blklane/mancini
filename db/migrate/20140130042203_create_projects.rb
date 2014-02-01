class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :architect
      t.string :contractor
      t.string :name
      t.string :product
      t.integer :product_type
      t.string :slug

      t.timestamps
    end
    add_index :projects, :slug, unique: true
  end
end
