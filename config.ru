require 'rubygems'
require 'middleman/rack'
require 'pusher'

Pusher.app_id = '94833'
Pusher.key = 'a89bf971a8fb57f3e804'
Pusher.secret = 'fb52facc8ff42dcc851c'

run Middleman.server