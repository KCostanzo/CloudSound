# CloudSound

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

CloudSound is a web application inspired by Soundcloud built using Ruby on Rails and React.js. By the end of week 9 this app will have, at minimum, the following features:

- [ ] Search bar navigation to find/select songs
- [ ] Index (and Artist) pages to view songs and albums
- [ ] Persistent now playing bar for songs and playlists
- [ ] Smooth, bug-free navigation
- [ ] Sufficient seed data to demonstrate features
- [ ] Hosting on Heroku
- [ ] Visually appealing CSS design
- [ ] A production README

## Product Goals and Priorities

CloudSound will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Play Songs by Click interactions with Song Item Components (MVP)
- [ ] Now Playing Bar persists between pages (MVP)
- [ ] Search Songs / Artists in Search Bar (MVP)
- [ ] Create an account (expected feature, but not MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (expected feature, but not MVP)
- [ ] Navigate to Artist Pages with Artist Song Items (expected feature, but not MVP)
- [ ] Select and Display Song Items on User Page (expected feature, but not MVP)
- [ ] Playlist Functionality (expected feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup, Heroku Upload (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] Upload to Heroku

### Phase 2: Songs Model, API, and basic APIUtil (1.5 days)

**Objective:** Songs can be created, read, edited and destroyed through
the API.

- [ ] create `Note` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes (`SongsController`)
- [ ] jBuilder views for notes
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Songs can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each note component, building out the flux loop as needed.
  - [ ] `SongsIndex`
  - [ ] `NoteIndexItem`
  - [ ] `NoteForm`
- [ ] save Songs to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Notebooks (1 day)

**Objective:** Notes belong to Notebooks, and can be viewed by notebook.

- [ ] create `Notebook` model
- build out API, Flux loop, and components for:
  - [ ] Notebook CRUD
  - [ ] adding notes requires a notebook
  - [ ] moving notes to a different notebook
  - [ ] viewing notes by notebook
- Use CSS to style new views

Phase 3 adds organization to the Notes. Notes belong to a Notebook,
which has its own `Index` view.

### Phase 6: Tags (1.5 days)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for notebook
  - [ ] adding tags to notebook
  - [ ] creating tags while adding to notebooks
  - [ ] searching notebooks by tag
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Notes (0.5 days)

**objective:** Enable complex styling of notes.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Search through notes for blocks of text
- [ ] Pagination / infinite scroll for Notes Index
- [ ] Set reminders on notes
- [ ] Changelogs for Notes
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
