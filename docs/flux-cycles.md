# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Song Cycles

### Songs API Request Actions

* `fetchAllSongs`
  0. invoked from `CoverIndex` `didMount`/`willReceiveProps`
  0. `GET /api/songs` is called.
  0. `receiveAllSongs` is set as the callback.

* `fetchSingleSong`
  0. invoked from `CoverIndexItem/ArtistIndex` `didMount`/`willReceiveProps`
  0. `GET /api/songs/:id` is called.
  0. `receiveSingleSong` is set as the callback.


### Songs API Response Actions

* `receiveAllSongs`
  0. invoked from an API callback.
  0. `Note` store updates `_songs` and emits change.

* `receiveSingleSong`
  0. invoked from an API callback.
  0. `Song` store updates `_songs[id]` and emits change.

### Store Listeners

* `CoverIndex` component listens to `Song` store.
* `ArtistIndex` component listens to `Song` store.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `SearchBar` `onChange` when there is text
  0. `GET /api/songs` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `SearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.


## Artist Cycles

### Artists API Request Actions

* `fetchSingleArtist`
  0. invoked from `CoverIndexItem/ArtistIndex` `didMount`/`willReceiveProps`
  0. `GET /api/artists/:id` is called.
  0. `receiveSingleArtist` is set as the callback.


### Artists API Response Actions

* `receiveSingleArtist`
  0. invoked from an API callback.
  0. `Artist` store updates `_artists[id]` and emits change.

### Store Listeners

* `ArtistIndex` component listens to `Songs` store.


## Playlist Cycles

### Playlists API Request Actions

* `fetchAllPlaylists`
  0. invoked from `PlaylistsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/playlists` is called.
  0. `receiveAllPlaylists` is set as the callback.

* `createPlaylist`
  0. invoked from new playlist button `onClick`
  0. `POST /api/playlists` is called.
  0. `receiveSinglePlaylist` is set as the callback.

* `fetchSinglePlaylist`
  0. invoked from `PlaylistDetail` `didMount`/`willReceiveProps`
  0. `GET /api/playlists/:id` is called.
  0. `receiveSinglePlaylist` is set as the callback.

* `updatePlaylist`
  0. invoked from `PlaylistForm` `onSubmit`
  0. `POST /api/playlists` is called.
  0. `receiveSinglePlaylist` is set as the callback.

* `destroyPlaylist`
  0. invoked from delete playlist button `onClick`
  0. `DELETE /api/playlists/:id` is called.
  0. `removePlaylist` is set as the callback.

### Playlists API Response Actions

* `receiveAllPlaylists`
  0. invoked from an API callback.
  0. `Playlist` store updates `_playlists` and emits change.

* `receiveSinglePlaylist`
  0. invoked from an API callback.
  0. `Playlist` store updates `_playlists[id]` and emits change.

* `removePlaylist`
  0. invoked from an API callback.
  0. `Playlist` store removes `_playlists[id]` and emits change.

### Store Listeners

* `PlaylistsIndex` component listens to `Playlist` store.
