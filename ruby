# This function returns a greeting for a user. However, if the user is Johnny, he is greeted differently.

def greet(name)
  case name
    when "Johnny"
      return "Hello, my love!"
    else
       return "Hello, #{name}!"
    end
end

# This function takes two arguments that will return an array of the first (n) multiples of (x).

def count_by(x, n)
  list = []
  i = 1
  n.times do
    list.push(x * i)
    i += 1
  end
  return list
end

# This function takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed.

def spinWords(string)
  array = string.split
  array.map do |word|
    if word.length > 4
      word.reverse!
    end
  end
  array.join(" ")
end

# Given an array containing hashes of names, this function returns a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

def list names
  if names.length == 0
   return ''
  elsif names.length == 1
    return names[0][:name]
  elsif names.length == 2
    return names[0][:name] + " & " + names[1][:name]
  elsif names.length == 3
    return names[0][:name] + ", " + names[1][:name] + " & " + names[2][:name]
  elsif names.length == 4
    return names[0][:name] + ", " + names[1][:name] + ", " + names[2][:name]  + " & " + names[3][:name]
  elsif names.length == 5
    return names[0][:name] + ", " + names[1][:name] + ", " + names[2][:name]  + ", " + names[3][:name]  + " & " + names[4][:name]
  elsif names.length == 6
    return names[0][:name] + ", " + names[1][:name] + ", " + names[2][:name]  + ", " + names[3][:name]  + ", " + names[4][:name] + " & " + names[5][:name] 
  elsif names.length == 7
    return names[0][:name] + ", " + names[1][:name] + ", " + names[2][:name]  + ", " + names[3][:name]  + ", " + names[4][:name] + ", " + names[5][:name] + " & " + names[6][:name]
  elsif names.length == 8
    return names[0][:name] + ", " + names[1][:name] + ", " + names[2][:name]  + ", " + names[3][:name]  + ", " + names[4][:name] + ", " + names[5][:name] + ", " + names[6][:name] + " & " + names[7][:name]
  elsif names.length == 9
    return names[0][:name] + ", " + names[1][:name] + ", " + names[2][:name]  + ", " + names[3][:name]  + ", " + names[4][:name] + ", " + names[5][:name] + ", " + names[6][:name] + ", " + names[7][:name] + " & " + names[8][:name]
  end
end
