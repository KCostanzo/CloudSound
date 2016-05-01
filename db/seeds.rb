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
Song.create(title: 'Come On (Let the Good Times Roll)',artist: 'Jimi Hendrix', user_id: 2, audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/The+Jimi+Hendrix+Experience+-+Electric+Ladyland+-+07+-+Come+On+(Let+The+Good+Times+Roll).wav', img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461875899/electric_ladyland_n1ip9y.jpg')
Song.create(title: 'Riders On the Storm', artist: 'The Doors', user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461877065/la_woman_ryantm.jpg', audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/TheDoorsRidersontheStorm.mp3')
Song.create(title: 'Aqueous Transmission', artist: 'Incubus', user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461877467/morningview_xusz3c.jpg',audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/IncubusAqueousTransmissionIncubus.mp3')
Song.create(title: 'Can\'t Stop',artist: 'Red Hot Chili Peppers',user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461969223/ByTheWay_h6fbdj.jpg', audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/Red+Hot+Chili+Peppers+-+Red+Hot+Chili+Peppers+Can%27t+Stop+432Hz.mp3')
Song.create(title: 'Wish You Were Here', artist: 'Pink Floyd', user_id: 2, audio_url:'https://s3-us-west-1.amazonaws.com/musicstoreforapp/PinkFloyd-WishYouWereHere432Hz.mp3', img_url:'http://res.cloudinary.com/mr-costanzo/image/upload/v1462037699/LP-Cover-Pink-Floyd-Wish-You-Were-Here_zl6dey.jpg')
Song.create(title: 'Yellow Ledbetter',artist: 'Pearl Jam', user_id: 2, audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/PearlJam-YellowLedbetter432Hz.mp3',img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461963689/Pearl-Jam-Ten-full-cover_bzc0g4.jpg')
Song.create(title: 'In My Time of Dying', artist: 'Led Zeppelin',user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1462039374/LZ-PhysicalGraffiti_v5i9ex.jpg',audio_url:'https://s3-us-west-1.amazonaws.com/musicstoreforapp/Led_Zeppelin_-_In_My_Time_Of_Dying_%40_432_Hz-Vubey.mp3')
Song.create(title: 'Stairway to Heaven', artist: 'Led Zeppelin',user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1462039156/led-zep-iv_zyr0uf.jpg',audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/Led+Zeppelin+-+Stairway+to+Heaven.mp3')
# Song.create(title: 'Dazed and Confused', artist: 'Led Zeppelin', user_id: 2, audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/Led+Zeppelin+-+Led+Zeppelin+Dazed+And+Confuzed+432+Hz.mp3', img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1462039150/LZ-I_vbf2vt.jpg')
Song.create(title: 'Planet Caravan', artist: 'Black Sabbath', user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461877072/paranoid_zgtnbz.jpg',audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/BlackSabbathPlanetCaravan.mp3')
Song.create(title: 'Brown Eyed Girl', artist: 'Van Morrison', user_id: 2,audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/Van+Morrison+-+Brown+Eyed+Girl+MrBtskidz.mp3', img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461969167/vanmorrison_yj7prz.jpg')
Song.create(title: 'Alive', artist:'Pearl Jam', user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461963689/Pearl-Jam-Ten-full-cover_bzc0g4.jpg',audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/Pearl+Jam+-+Pearl+Jam+Alive+432+hz.mp3')
Song.create(title: 'Daughter', artist: 'Pearl Jam',user_id: 2, audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/Pearl+Jam+-+Pearl+Jam+Daughter+432+hz.mp3', img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1462050441/Vs_cq1iyf.jpg')
Song.create(title: 'Do the Evolution',artist: 'Pearl Jam', user_id: 2, audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/Pearl+Jam+-+Pearl+Jam+Do+the+Evolution+432+hz.mp3', img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1462050444/yield_f2edzw.jpg')
Song.create(title: 'Even Flow',artist: 'Pearl Jam',user_id: 2, audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/Pearl_Jam_-_Even_Flow_432_hz-Vubey.mp3', img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461963689/Pearl-Jam-Ten-full-cover_bzc0g4.jpg')
Song.create(title: 'Gypsy Eyes', artist: 'Jimi Hendrix', user_id: 2, audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/TheJimiHendrixExperienceElectricLadyland-08-GypsyEyes.wav', img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461875899/electric_ladyland_n1ip9y.jpg')
Song.create(title: 'Orion', artist: 'Metallica', user_id: 2, audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/METALLICA_-_Orion_Song_432_Hz-Vubey.mp3', img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1462050582/master_of_puppets_fumkwi.jpg')
Song.create(title: 'Virus', artist: 'Iron Maiden', user_id: 2, img_url: 'http://res.cloudinary.com/mr-costanzo/image/upload/v1461862956/iron-maiden-botb_jldbzg.jpg',audio_url: 'https://s3-us-west-1.amazonaws.com/musicstoreforapp/IronMaidenBestofthebeast11virus432hz.mp3')