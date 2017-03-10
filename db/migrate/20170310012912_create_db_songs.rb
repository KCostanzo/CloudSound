class CreateDbSongs < ActiveRecord::Migration
  def change
    create_table :db_songs do |t|
    	t.integer :user_id, null: false, index: true
    	t.integer :aws_song_id, null: false

      t.timestamps null: false
    end
  end
end
