class AddAttachmentSongToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :song
    end
  end

  def self.down
    remove_attachment :users, :song
  end
end
