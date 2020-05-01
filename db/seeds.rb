# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

demo_user = User.create({ email: 'demo@user.com', username: 'DemoUser', password: '12345678' })

users = User.create([
    {email: 'teejay@teejay.com', username: 'teejay', password: 'teejayem'},
    {email: 'yeet@yeet.com', username: 'yeet', password: 'yeetyeet'}
])

[bord1, bord2, bord3] = Board.create([
    {
        admin_id: demo_user.id,
        title: 'General To Do',
        description: ''
    },
    {
        admin_id: demo_user.id,
        title: 'Work',
        description: 'Just developer things'
    },
    {
        admin_id: demo_user.id,
        title: 'School',
        description: 'App Academy\'s always keepin\' us busy'
    }
])

file1 = open('https://meticulist-seeds.s3-us-west-1.amazonaws.com/DefaultBackgrounds/aaron-burden-DjsBoWp7HV0-unsplash.jpg')
file2 = open('https://meticulist-seeds.s3-us-west-1.amazonaws.com/DefaultBackgrounds/jason-zook-n2RrD7Aew-Q-unsplash.jpg')

bord1.background_photo.attach(io: file1, filename: 'pic1')
bord3.background_photo.attach(io: file2, filename: 'pic2')

