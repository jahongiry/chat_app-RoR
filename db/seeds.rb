# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.delete_all
Message.delete_all
User.create(username: 'jahongir', password: '123')
User.create(username: 'jahongir4', password: '1234')
User.create(username: 'jahongir5', password: '123')
User.create(username: 'jahongir6', password: '1234')
User.create(username: 'jahongir7', password: '123')
User.create(username: 'jahongir8', password: '1234')
User.create(username: 'jahongir9', password: '123')
User.create(username: 'jahongir10', password: '1234')

Message.create(body: "Hi I am new message", user: User.first)
Message.create(body: "Hi I am new message2", user: User.last)