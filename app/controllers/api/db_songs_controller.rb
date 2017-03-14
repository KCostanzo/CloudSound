class Api::DbSongsController < ApplicationController
  # before_action :set_db_song, only: [:create, :show, :edit, :update, :destroy]

  # GET /db_songs
  # GET /db_songs.json
  def index
    @db_songs = DbSong.all
  end

  # GET /db_songs/1
  # GET /db_songs/1.json
  def show
  end

  # # GET /db_songs/new
  # def new
  #   @db_song = DbSong.new
  # end

  # GET /db_songs/1/edit
  def edit
  end

  # POST /db_songs
  # POST /db_songs.json
  def create
    # db_song_params
    @db_song = DbSong.new(user_id: current_user.id, aws_song: params[:aws_song])

    # respond_to do |format|
    #   if @db_song.save
    #     format.html { redirect_to @db_song, notice: 'Db song was successfully created.' }
    #     format.json { render :show, status: :created, location: @db_song }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @db_song.errors, status: :unprocessable_entity }
    #   end
    # 

    if @db_song.save
      render 'api/likes/index'
    else
      @errors = @db_song.errors.full_messages
      render 'api/shared/errors', status: 430
    end
  end

  # PATCH/PUT /db_songs/1
  # PATCH/PUT /db_songs/1.json
  def update
    # respond_to do |format|
    #   if @db_song.update(db_song_params)
    #     format.html { redirect_to @db_song, notice: 'Db song was successfully updated.' }
    #     format.json { render :show, status: :ok, location: @db_song }
    #   else
    #     format.html { render :edit }
    #     format.json { render json: @db_song.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # DELETE /db_songs/1
  # DELETE /db_songs/1.json
  def destroy
    # @db_song.destroy

    # respond_to do |format|
    #   format.html { redirect_to db_songs_url, notice: 'Db song was successfully destroyed.' }
    #   format.json { head :no_content }
    # end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_db_song
      @db_song = DbSong.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def db_song_params
      # params.fetch(:db_song, {})
      params.require(:db_song).permit(:user_id, :aws_song)
    end
end
