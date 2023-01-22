# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

User.create!(email: 'jake@example.com',
  password: 'password',
  password_confirmation: 'password'
)

User.create!(email: 'john@acme.com',
  password: 'password',
  password_confirmation: 'password'
)

User.create!(email: 'jane@doe.com',
  password: 'password',
  password_confirmation: 'password'
)

