# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'guest', password: 'password369')
User.create(username: 'kyle', password: 'password')
Song.create(title: 'Rainy Day Dream Away', artist: 'Jimi Hendrix', user_id: 2, audio_url: 'http://res.cloudinary.com/mr-costanzo/video/upload/v1461875956/The_Jimi_Hendrix_Experience_-_Electric_Ladyland_-_10_-_Rainy_Day_Dream_Away_nqrfyc.wav', img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461875899/electric_ladyland_n1ip9y.jpg')
Song.create(title: 'Gypsy Eyes', artist: 'Jimi Hendrix', user_id: 2, audio_url: 'http://res.cloudinary.com/mr-costanzo/video/upload/v1461875937/The_Jimi_Hendrix_Experience_-_Electric_Ladyland_-_08_-_Gypsy_Eyes_xvuv4p.wav', img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461875899/electric_ladyland_n1ip9y.jpg')
Song.create(title: 'Riders On the Storm', artist: 'The Doors', user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461877065/la_woman_ryantm.jpg', audio_url: 'http://res.cloudinary.com/mr-costanzo/video/upload/v1461877114/The_Doors_-_Riders_on_the_Storm_MrBtskidz_xkonbm.mp3')
Song.create(title: 'Aqueous Transmission', artist: 'Incubus', user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461877467/morningview_xusz3c.jpg',audio_url: 'http://res.cloudinary.com/mr-costanzo/video/upload/v1461877552/Incubus_-_Aqueous_Transmission_Incubus_nbaqwg.mp3')
Song.create(title: 'Planet Caravan', artist: 'Black Sabbath', user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461877072/paranoid_zgtnbz.jpg',audio_url: 'http://res.cloudinary.com/mr-costanzo/video/upload/v1461876844/Black_Sabbath_-_Black_Sabbath_Planet_Caravan_432_Hz_MrBtskidz_nhm2vt.mp3')
Song.create(title: 'Virus', artist: 'Iron Maiden', user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461862956/iron-maiden-botb_jldbzg.jpg',audio_url: 'http://res.cloudinary.com/mr-costanzo/video/upload/v1461862418/Iron-Maiden-Best-of-the-beast-11-virus-432-Hz_giwk7q.mp3')
Song.create(title: 'The Trooper', artist: 'Iron Maiden', user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461862956/iron-maiden-botb_jldbzg.jpg',audio_url: 'http://res.cloudinary.com/mr-costanzo/video/upload/v1461862408/Iron-Maiden-Best-of-the-beast-15-the-trooper-432-Hz_chq6xm.mp3')
Song.create(title: 'The Number of the Beast', artist: 'Iron Maiden', user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461862956/iron-maiden-botb_jldbzg.jpg',audio_url: 'http://res.cloudinary.com/mr-costanzo/video/upload/v1461862263/Iron-Maiden-Best-of-the-beast-01-the-number-of-the-beast-432-Hz_jcacj8.mp3')
