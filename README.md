# CloudSound

[Heroku link][heroku] **NB:** This will be a link to my production site

[heroku]: https://cloudsoundapp.herokuapp.com

## Minimum Viable Product

CloudSound is a web application inspired by Soundcloud built using Ruby on Rails and React.js. By the end of week 9 this app will have, at minimum, the following features:

- [ ] Search bar navigation to find songs/artists
- [ ] Index (and Artist) pages to view songs and albums
- [ ] Persistent now playing bar for songs and playlists
- [ ] Toggle Playback
- [ ] Visually appealing CSS design


## Product Goals and Priorities

CloudSound will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Play Songs by Click interactions with Song Item Components (MVP)
- [ ] Now Playing Bar persists between pages (MVP)
- [ ] Search Songs in Search Bar (MVP)
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

### Phase 1: Backend setup, Heroku Upload (1 day)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] Upload to Heroku
- [ ] Auth

### Phase 2: Flux Architecture and Router, Basic Components (1 day)

**Summary:** Songs seeded to store will be accessed through index items on user interface.

- [ ] setup Webpack & Flux scaffold
- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- [ ] Cover Index View
- implement each component, building out the flux loop as needed.
  - [ ] `CoverIndex`
  - [ ] `IndexItem`
- [ ] Song Item click functions
- [ ] Song Store holds music

### Phase 3: Songs Model, Index Page, API, and basic APIUtil (1 days)

**Objective:** Songs can be accessed through Index Items

- [ ] create `Song` model
- [ ] API routes provide song urls
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.
- [ ] Begin search bar
- [ ] Start Seeding Songs

### Phase 4: Search and Now Playing Bar (Audio Stream) (2 days)

**Objective:** Stream Bar persists at bottom of page

- [ ] Complete Search Bar
- [ ] Persistent Audio Streaming feature (via HTML5 audio or other)
- [ ] Persistent Stream bar in UI
- [ ] Sample Seeds to test audio

### Phase 5: Layout (.5 days)

- [ ] Clean Up UI, original colors, backgrounds

### Phase 6: Playlists OR Artist Page, extra features (2 days)

**Objective:** Playlist Feature and/or possible Artist Page (according to time)

- [ ] Stream Bar playlists
- [ ] Artist pages feature owned songs
- [ ] User Page w/ playlists(B)
- [ ] Animated box on Intro page (scroll down to cover?)(B)

### Phase 7: Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] User Page displaying songs/playlists
- [ ] Animated searchbox on root page
- [ ] User/Artist Add Track Feature (needs destroy track as well)
- [ ] Infinite scroll for Cover Index

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
