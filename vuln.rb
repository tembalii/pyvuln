#ok: ruby-string-interpolation-taint
name = "Ada"

name2 = "Michael"

#ruleid: ruby-string-interpolation-taint
puts "Hello, #{name}!"

#ok: ruby-string-interpolation-taint
puts "Hello, #{name2}"
