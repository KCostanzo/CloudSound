# CloudSound

[CloudSound live][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

CloudSound is a full-stack web application inspired by Evernote.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation

 **NB**: don't copy and paste any of this.  Many folks will implement similar features, and many employers will see the READMEs of a lot of a/A grads.  You must write in a way that distinguishes your README from that of other students', but use this as a guide for what topics to cover.  

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

### Note Rendering and Editing

  On the database side, the notes are stored in one table in the database, which contains columns for `id`, `user_id`, `content`, and `updated_at`.  Upon login, an API call is made to the database which joins the user table and the note table on `user_id` and filters by the current user's `id`.  These notes are held in the `NoteStore` until the user's session is destroyed.  

  Notes are rendered in two different components: the `CondensedNote` components, which show the title and first few words of the note content, and the `ExpandedNote` components, which are editable and show all note text.  The `NoteIndex` renders all of the `CondensedNote`s as subcomponents, as well as one `ExpandedNote` component, which renders based on `NoteStore.selectedNote()`. The UI of the `NoteIndex` is taken directly from Evernote for a professional, clean look:  

![image of notebook index](https://github.com/appacademy/sample-project-proposal/blob/master/docs/noteIndex.png)

Note editing is implemented using the Quill.js library, allowing for a Word-processor-like user experience.

### Notebooks

Implementing Notebooks started with a notebook table in the database.  The `Notebook` table contains two columns: `title` and `id`.  Additionally, a `notebook_id` column was added to the `Note` table.  

The React component structure for notebooks mirrored that of notes: the `NotebookIndex` component renders a list of `CondensedNotebook`s as subcomponents, along with one `ExpandedNotebook`, kept track of by `NotebookStore.selectedNotebook()`.  

`NotebookIndex` render method:

```javascript
render: function () {
  return ({this.state.notebooks.map(function (notebook) {
    return <CondensedNotebook notebook={notebook} />
  }
  <ExpandedNotebook notebook={this.state.selectedNotebook} />)
}
```

### Tags

As with notebooks, tags are stored in the database through a `tag` table and a join table.  The `tag` table contains the columns `id` and `tag_name`.  The `tagged_notes` table is the associated join table, which contains three columns: `id`, `tag_id`, and `note_id`.  

Tags are maintained on the frontend in the `TagStore`.  Because creating, editing, and destroying notes can potentially affect `Tag` objects, the `NoteIndex` and the `NotebookIndex` both listen to the `TagStore`.  It was not necessary to create a `Tag` component, as tags are simply rendered as part of the individual `Note` components.  

![tag screenshot](https://github.com/appacademy/sample-project-proposal/blob/master/docs/tagScreenshot.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for CloudSound are outlined below.

### Playlists

Savable Playlists are a major user feature in SoundCloud, when I have suffiecient time i plan to introduce playlists CRUD functinoality to the user page. This would require backend to estabish join table interaction between users, their playlists, and the playlists' songs.

### Song Tags

Another feature that would be useful for my site  would be tagging functionality which allowed users to search for songs by categories such as genre. This would allow users to find songs without having to know specific artists and enable them to find new music more easily. I believe this tagging would best be done on upload with edit and destroy privledges given only to the uploader.
