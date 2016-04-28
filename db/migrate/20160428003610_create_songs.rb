class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
    	t.string :title, null: false, index: true
    	t.string :artist, null: false
    	t.integer :user_id, null: false
    	t.string :audio_url, null: false, index: true
    	t.string :img_url
    	t.string :description

      t.timestamps null: false
    end
  end
end
