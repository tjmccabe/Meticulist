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

demoboards = Board.create([
    {
        admin_id: User.find_by(username: 'DemoUser').id,
        title: 'General To Do',
        description: ''
    },
    {
        admin_id: User.find_by(username: 'DemoUser').id,
        title: 'Work',
        description: 'Just developer things'
    },
    {
        admin_id: User.find_by(username: 'DemoUser').id,
        title: 'School',
        description: 'App Academy\'s always keepin\' us busy'
    }
])

file1 = open('')
file2 = open('')

demoboards[0].background_photo.attach(io: file1, filename: 'pic1')
demoboards[2].background_photo.attach(io: file2, filename: 'pic2')