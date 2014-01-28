class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.belongs_to :project
      t.attachment :asset

      t.timestamps
    end
    add_index :images, :project_id
  end
end
