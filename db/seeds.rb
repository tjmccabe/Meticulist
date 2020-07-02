# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

existing_demo = User.find_by(email: 'demo@user.com')
existing_demo.destroy if existing_demo

demo_user = User.create({ email: 'demo@user.com', username: 'DemoUser', password: '12345678' })

right_now = Time.now
this_minute = right_now.to_i - (right_now.to_i % 60)
tomorrow = Time.at(this_minute.to_i + 86400)
next_week = Time.at(this_minute.to_i + 604800)
last_week = Time.at(this_minute.to_i - 604800)
next_year = Time.at(this_minute.to_i + 31236000)
last_year = Time.at(this_minute.to_i - 32736000)

users = User.create([
    {email: 'teejay@teejay.com', username: 'teejay', password: 'teejayem'},
    {email: 'yeet@yeet.com', username: 'yeet', password: 'yeetyeet'}
])

board1 = Board.create({
    admin_id: demo_user.id,
    title: 'General To Do',
    description: 'Just your basic run of the mill to-do list. On steroids.',
    bgp_big_url: "https://images.unsplash.com/photo-1554629942-0c17bf68b884?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMTUxNH0",
    bgp_small_url: "https://images.unsplash.com/photo-1554629942-0c17bf68b884?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTUxNH0",
    bgp_alt_text: "snow-capped mountains near concrete road"
})
board2 = Board.create({
    admin_id: demo_user.id,
    title: 'Work',
    description: 'Developer things',
    bgp_big_url: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMTUxNH0",
    bgp_small_url: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTUxNH0",
    bgp_alt_text: "turned-on gray laptop computer"
})
board3 = Board.create({
    admin_id: demo_user.id,
    title: 'School',
    description: '',
    bgp_big_url: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEzMTUxNH0",
    bgp_small_url: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzMTUxNH0",
    bgp_alt_text: "colored pencil lined up on top of white surface"
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

# BOARD 1

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

    # LIST 1

    card1 = Card.create({
        list_id: list1.id,
        title: "Wash dishes",
        description: ""
    })

    card2 = Card.create({
        list_id: list1.id,
        title: "Take out trash",
        description: "",
        due_date: next_week
    })

    card3 = Card.create({
        list_id: list1.id,
        title: "Pick up brother",
        description: "Lift him up, set him down, repeat",
        due_date: tomorrow
    })

    card4 = Card.create({
        list_id: list1.id,
        title: "Talk to homeowners insurance by next year",
        description: "Make sure to have a home by then",
        due_date: next_year
    })

    card5 = Card.create({
        list_id: list1.id,
        title: "Get groceries",
        description: ""
    })

    # LIST 2

    card6 = Card.create({
        list_id: list2.id,
        title: "Walk the dog",
        description: ""
    })

    card7 = Card.create({
        list_id: list2.id,
        title: "GET MY LIFE ON TRACK",
        description: "",
        due_date: last_year
    })

    card8 = Card.create({
        list_id: list2.id,
        title: "Eat better",
        description: ""
    })

    card9 = Card.create({
        list_id: list2.id,
        title: "Make some art",
        description: ""
    })

    # LIST 3

    card10 = Card.create({
        list_id: list3.id,
        title: "Don't eat dirt",
        description: ""
    })

    card11 = Card.create({
        list_id: list3.id,
        title: "Live a little",
        description: ""
    })

    card12 = Card.create({
        list_id: list3.id,
        title: "Make brownies",
        description: "",
        due_date: tomorrow
    })

        # BOARD 1 COMMENTS

        Comment.create([
            {
                author_id: demo_user.id,
                card_id: card7.id,
                body: "WHY AM I YELLING"
            },
            {
                author_id: demo_user.id,
                card_id: card7.id,
                body: "I DON'T KNOW"
            },
            {
                author_id: demo_user.id,
                card_id: card7.id,
                body: "THIS IS FUN, OKAY?"
            },
            {
                author_id: demo_user.id,
                card_id: card11.id,
                body: "Or a lot. Whatevs."
            },
        ])

# BOARD 2

list4 = List.create({
    board_id: board2.id,
    title: "Bugs"
})

list5 = List.create({
    board_id: board2.id,
    title: "Milestones"
})

    # LIST 4

    card13 = Card.create({
        list_id: list4.id,
        title: "Translation issue",
        description: "When translating to Spanish, tildes do not display",
        due_date: next_week
    })

    card14 = Card.create({
        list_id: list4.id,
        title: "Typo on sign-in page",
        description: "",
        due_date: tomorrow
    })

    card15 = Card.create({
        list_id: list4.id,
        title: "I don't like the blue",
        description: "We can ignore this for now",
        due_date: last_year
    })

    card16 = Card.create({
        list_id: list4.id,
        title: "Investigate reports of time zone glitches?",
        description: "Need to confirm this before acting on it"
    })

    # LIST 5

    card17 = Card.create({
        list_id: list5.id,
        title: "Alpha rollout",
        description: "",
        due_date: last_week
    })

    card18 = Card.create({
        list_id: list5.id,
        title: "Beta rollout",
        description: "",
        due_date: tomorrow
    })

    card19 = Card.create({
        list_id: list5.id,
        title: "Production-ready presentation",
        description: "Coming up soon",
        due_date: next_week
    })

        # BOARD 2 COMMENTS

        Comment.create([
            {
                author_id: demo_user.id,
                card_id: card14.id,
                body: "Need more info"
            },
            {
                author_id: demo_user.id,
                card_id: card14.id,
                body: "Ask Janice about this later"
            },
            {
                author_id: demo_user.id,
                card_id: card16.id,
                body: "No confirmation as of yet"
            },
            {
                author_id: demo_user.id,
                card_id: card19.id,
                body: "This timeline is a little insane, right?"
            },
        ])

# BOARD 3

list6 = List.create({
    board_id: board3.id,
    title: "Homework"
})

list7 = List.create({
    board_id: board3.id,
    title: "Tests"
})

list8 = List.create({
    board_id: board3.id,
    title: "Projects"
})

list9 = List.create({
    board_id: board3.id,
    title: "Bored in class"
})

    # LIST 6

    card20 = Card.create({
        list_id: list6.id,
        title: "History of Algeria paper"
    })

    card21 = Card.create({
        list_id: list6.id,
        title: "Calc hw"
    })

    card22 = Card.create({
        list_id: list6.id,
        title: "Spanish action verbs"
    })

    card23 = Card.create({
        list_id: list6.id,
        title: "Econ supply side stuff"
    })

    # LIST 7

    card24 = Card.create({
        list_id: list7.id,
        title: "Spanish verbs",
        description: "From week 3"
    })

    card25 = Card.create({
        list_id: list7.id,
        title: "Calc BC AP Test",
        description: "I have a while to prep though"
    })

    card26 = Card.create({
        list_id: list7.id,
        title: "Econometrics"
    })

    card27 = Card.create({
        list_id: list7.id,
        title: "Spanish oral exam"
    })

        # LIST 8

    card28 = Card.create({
        list_id: list8.id,
        title: "Map of Africa",
        description: "Focusing on Algeria"
    })

    card29 = Card.create({
        list_id: list8.id,
        title: "Dia de los muertos presentation"
    })

    card30 = Card.create({
        list_id: list8.id,
        title: "End-of-year play"
    })

    card31 = Card.create({
        list_id: list8.id,
        title: "Keynes bio for econ"
    })

    # LIST 9

    card32 = Card.create({
        list_id: list9.id,
        title: "Just"
    })

    card33 = Card.create({
        list_id: list9.id,
        title: "trying"
    })

    card34 = Card.create({
        list_id: list9.id,
        title: "to"
    })

    card35 = Card.create({
        list_id: list9.id,
        title: "look"
    })

    card36 = Card.create({
        list_id: list9.id,
        title: "busy"
    })

    card37 = Card.create({
        list_id: list9.id,
        title: "while"
    })

    card38 = Card.create({
        list_id: list9.id,
        title: "Mrs."
    })

    card39 = Card.create({
        list_id: list9.id,
        title: "Tackett"
    })

    card40 = Card.create({
        list_id: list9.id,
        title: "tries"
    })

    card41 = Card.create({
        list_id: list9.id,
        title: "to"
    })

    card42 = Card.create({
        list_id: list9.id,
        title: "catch"
    })

    card43 = Card.create({
        list_id: list9.id,
        title: "people"
    })

    card44 = Card.create({
        list_id: list9.id,
        title: "not"
    })

    card45 = Card.create({
        list_id: list9.id,
        title: "working"
    })

        # BOARD 3 COMMENTS

        Comment.create([
            {
                author_id: demo_user.id,
                card_id: card45.id,
                body: "SHE BOUGHT IT"
            }
        ])

# BOARD 4

list10 = List.create({
    board_id: board4.id,
    title: "Possible destinations"
})

list11 = List.create({
    board_id: board4.id,
    title: "Potential activities (depending on the place obviously)"
})

list12 = List.create({
    board_id: board4.id,
    title: "Invitees"
})

    # LIST 10

    card46 = Card.create({
        list_id: list10.id,
        title: "Aruba"
    })

    card47 = Card.create({
        list_id: list10.id,
        title: "Jamaica",
        description: "ooh I want to take ya"
    })

    card48 = Card.create({
        list_id: list10.id,
        title: "Bermuda"
    })

    card49 = Card.create({
        list_id: list10.id,
        title: "Bahama",
        description: "come on pretty mama"
    })

    card50 = Card.create({
        list_id: list10.id,
        title: "Key Largo"
    })

    card51 = Card.create({
        list_id: list10.id,
        title: "Montego",
        description: "baby why don't we go"
    })

    card52 = Card.create({
        list_id: list10.id,
        title: "Kokomo"
    })

    # LIST 11

    card53 = Card.create({
        list_id: list11.id,
        title: "Get there fast"
    })

    card54 = Card.create({
        list_id: list11.id,
        title: "Take it slow"
    })

    card55 = Card.create({
        list_id: list11.id,
        title: "Put out to sea"
    })

    card56 = Card.create({
        list_id: list11.id,
        title: "Perfect our chemistry"
    })

    card57 = Card.create({
        list_id: list11.id,
        title: "Defy a little bit of gravity"
    })

    # LIST 12

    card58 = Card.create({
        list_id: list12.id,
        title: "You"
    })

    card59 = Card.create({
        list_id: list12.id,
        title: "Me"
    })

# BOARD 5

list13 = List.create({
    board_id: board5.id,
    title: "Potluck beverages"
})

list14 = List.create({
    board_id: board5.id,
    title: "Potluck food"
})

list15 = List.create({
    board_id: board5.id,
    title: "Setup"
})

list16 = List.create({
    board_id: board5.id,
    title: "Logistics"
})

list17 = List.create({
    board_id: board5.id,
    title: "Activity ideas"
})