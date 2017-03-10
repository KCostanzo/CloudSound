require 'test_helper'

class DbSongsControllerTest < ActionController::TestCase
  setup do
    @db_song = db_songs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:db_songs)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create db_song" do
    assert_difference('DbSong.count') do
      post :create, db_song: {  }
    end

    assert_redirected_to db_song_path(assigns(:db_song))
  end

  test "should show db_song" do
    get :show, id: @db_song
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @db_song
    assert_response :success
  end

  test "should update db_song" do
    patch :update, id: @db_song, db_song: {  }
    assert_redirected_to db_song_path(assigns(:db_song))
  end

  test "should destroy db_song" do
    assert_difference('DbSong.count', -1) do
      delete :destroy, id: @db_song
    end

    assert_redirected_to db_songs_path
  end
end
