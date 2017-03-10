json.array!(@db_songs) do |db_song|
  json.extract! db_song, :id
  json.url db_song_url(db_song, format: :json)
end
