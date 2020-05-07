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

board1 = Board.create({
    admin_id: demo_user.id,
    title: 'General To Do',
    description: '',
    bgp_big_url: "https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMTUxNH0",
    bgp_small_url: "https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTUxNH0",
    bgp_alt_text: "balloon on sky"
})
board2 = Board.create({
    admin_id: demo_user.id,
    title: 'Work',
    description: 'Just developer things',
    bgp_big_url: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMTUxNH0",
    bgp_small_url: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTUxNH0",
    bgp_alt_text: "turned-on gray laptop computer"
})
board3 = Board.create({
    admin_id: demo_user.id,
    title: 'School',
    description: 'App Academy\'s always keepin\' us busy',
    bgp_big_url: "",
    bgp_small_url: "",
    bgp_alt_text: ""
})
board4 = Board.create({
    admin_id: demo_user.id,
    title: 'Vacation Planning',
    description: 'Need to get out more',
    bgp_big_url: "https://images.unsplash.com/photo-1568484598912-bb6b697f0b48?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMTUxNH0",
    bgp_small_url: "https://images.unsplash.com/photo-1568484598912-bb6b697f0b48?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTUxNH0",
    bgp_alt_text: "white clouds"
})
board5 = Board.create({
    admin_id: demo_user.id,
    title: 'Trevor\'s Party',
    description: "Shhhhh don't spoil the surprise!",
    bgp_big_url: "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMTUxNH0",
    bgp_small_url: "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTUxNH0",
    bgp_alt_text: "man sitting on chair underwater with floating bottles"
})

list1 = List.create({
    board_id: board1.id,
    title: "To-do"
})

list2 = List.create({
    board_id: board1.id,
    title: "Doing"
})

list3 = List.create({
    board_id: board1.id,
    title: "All done"
})

list4 = List.create({
    board_id: board1.id,
    title: "Nothin"
})

cards1 = Card.create([
    {list_id: list1.id, title: "Wash dishes"},
    {list_id: list1.id, title: "Take out trash"},
    {list_id: list1.id, title: "Pick up brother"},
    {list_id: list1.id, title: "Talk to insurance"},
    {list_id: list1.id, title: "Get groceries"}
])

cards2 = Card.create([
    {list_id: list2.id, title: "Walk the dog"},
    {list_id: list2.id, title: "GET MY LIFE ON TRACK"},
    {list_id: list2.id, title: "Eat better"},
    {list_id: list2.id, title: "Make some art"},
])

cards3 = Card.create([
    {list_id: list3.id, title: "Don't eat dirt"},
    {list_id: list3.id, title: "Live a little"},
    {list_id: list3.id, title: "Make brownies"},
])