# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'guest', password: 'password369')
User.create(username: 'kyle', password: 'password')
Song.create(title: 'Rainy Day Dream Away', artist: 'Jimi Hendrix', user_id: 2, audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/The+Jimi+Hendrix+Experience+-+ElectricLadyland-10RainyDay%2CDreamAway.wav', img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461875899/electric_ladyland_n1ip9y.jpg')
Song.create(title: 'Gypsy Eyes', artist: 'Jimi Hendrix', user_id: 2, audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/TheJimiHendrixExperienceElectricLadyland-08-GypsyEyes.wav', img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461875899/electric_ladyland_n1ip9y.jpg')
Song.create(title: 'Riders On the Storm', artist: 'The Doors', user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461877065/la_woman_ryantm.jpg', audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/TheDoorsRidersontheStorm.mp3')
Song.create(title: 'Aqueous Transmission', artist: 'Incubus', user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461877467/morningview_xusz3c.jpg',audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/IncubusAqueousTransmissionIncubus.mp3')
Song.create(title: 'Planet Caravan', artist: 'Black Sabbath', user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461877072/paranoid_zgtnbz.jpg',audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/BlackSabbathPlanetCaravan.mp3')
Song.create(title: 'Virus', artist: 'Iron Maiden', user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461862956/iron-maiden-botb_jldbzg.jpg',audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/IronMaidenBestofthebeast11virus432hz.mp3')
Song.create(title: 'The Number of the Beast', artist: 'Iron Maiden', user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461862956/iron-maiden-botb_jldbzg.jpg',audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/Iron-Maiden-Best-of-the-beast-01-the-number-of-the-beast-432-Hz.mp3')
