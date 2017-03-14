class AddAttachmentAwsSongToDbSongs < ActiveRecord::Migration
  def self.up
    change_table :db_songs do |t|
      t.attachment :aws_song
    end
  end

  def self.down
    remove_attachment :db_songs, :aws_song
  end
end
