class AddAttachmentDbSongToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :db_song
    end
  end

  def self.down
    remove_attachment :users, :db_song
  end
end
