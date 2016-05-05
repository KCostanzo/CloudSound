# CloudSound

[CloudSound live][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.cloudsoundapp.herokuapp.com

CloudSound is a full-stack web application inspired by Soundcloud.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation

[] Song Player (persistent) plays listed songs
[] Current Queue (persistent) allows user to put songs in a queue, songs auto play after the now playing song is finished or skipped
[] Search box dynamically searches through all songs and brings you to the song's artist page
[] User Authentication allows users to save their account to DB, allows users to track liked songs between uses
[] Likes allow a user to save songs they like which will appear on their user page

### Single-Page App

CloudSound is truly a single-page; all content is delivered on one static page.  The app component renders the persistent navbar, now playing bar, and queue display, and its children components listen to a `SongStore` to render content based on a call to `SongStore.all()` or `SongStore.likedSongs()`.  Sensitive user information is kept out of the frontend of the app by making an API call to `SessionsController#fetchCurrentUser`.

```ruby
class Api::SessionsController < ApplicationController
  def show
    if current_user 
      @user = current_user
      render "api/sessions/loggedin"
    else
      @errors = nil
      render "api/shared/errors", status: 299
    end
  end
 end
  ```

### Songs

  On the database side, the songs are stored in one table in the database, which contains columns for `id`, `title`, `artist`, `audio_url`, and `img_url`.  Songs are fetched when the main cover page renders and are stored in a song store where they are availible to the index page and used to populate index items (with expansion of availible songs in the db I will use a Song.first(30) instead of Song.all to fetch the inital songs). Upon login, an API call is made to the database which joins the user table and the likes table on `user_id` and filters by the current user's `id`. These liked songs are used by the user page to select songs via `song_id` and populate the user page with song index items.

![image of index page](http://res.cloudinary.com/mr-costanzo/image/upload/v1462480457/Screen_Shot_2016-05-05_at_1.33.14_PM_c3wn3l.png)

`CoverIndex` render method:

```javascript
render: function() {
    return (
      <div className='cover-index'>
          <ul>
            {
              this.state.songs.map(function(song) {
                return <IndexItem song={song} key={song.id} />
              })
            }
          </ul>
        </div>
      );
  }
```

### Now Playing Bar and Queue (Persistent)

Implementing Notebooks started with a notebook table in the database.  The `Notebook` table contains two columns: `title` and `id`.  Additionally, a `notebook_id` column was added to the `Note` table.  

The React component structure for notebooks mirrored that of notes: the `NotebookIndex` component renders a list of `CondensedNotebook`s as subcomponents, along with one `ExpandedNotebook`, kept track of by `NotebookStore.selectedNotebook()`.  

### Likes

As with notebooks, tags are stored in the database through a `tag` table and a join table.  The `tag` table contains the columns `id` and `tag_name`.  The `tagged_notes` table is the associated join table, which contains three columns: `id`, `tag_id`, and `note_id`.  

Tags are maintained on the frontend in the `TagStore`.  Because creating, editing, and destroying notes can potentially affect `Tag` objects, the `NoteIndex` and the `NotebookIndex` both listen to the `TagStore`.  It was not necessary to create a `Tag` component, as tags are simply rendered as part of the individual `Note` components.  

![tag screenshot](http://res.cloudinary.com/mr-costanzo/image/upload/v1462480457/Screen_Shot_2016-05-05_at_1.33.14_PM_c3wn3l.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for CloudSound are outlined below.

### Playlists

Savable Playlists are a major user feature in SoundCloud, when I have suffiecient time i plan to introduce playlists CRUD functinoality to the user page. This would require backend to estabish join table interaction between users, their playlists, and the playlists' songs.

### Song Tags

Another feature that would be useful for my site  would be tagging functionality which allowed users to search for songs by categories such as genre. This would allow users to find songs without having to know specific artists and enable them to find new music more easily. I believe this tagging would best be done on upload with edit and destroy privledges given only to the uploader.
