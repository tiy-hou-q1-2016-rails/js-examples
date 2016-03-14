# Assignment

tonight_dinner = "tacos"

# Equality

if tonight_dinner == "tacos"
  puts "Yay"
elsif tonight_dinner == "breakfast_tacos"
  puts "ok!"
else
  puts "gross"
end



# Looping

# .map, .select, .find, .each, .include?

["tacos", "fajitas", "breakfast_tacos"].each do |meal|
  puts "#{meal} are delicious"
end


# Conditionals

# See equality section

tonight_dinner = "tacos"
case tonight_dinner
  when "tacos"
    puts "Yay"
  when "breakfast_tacos"
    puts "OK"
  else
    puts "boooo"
end


# Methods

def yell(words)
  combined = words.join(" ")
  "#{combined}!!!".upcase
end

yell(["Do", "Not", "Run"])
=> "DO NOT RUN!!!"



numbers = [2,3,4,5,6,7,8,9]
numbers.find {|i| i == 4}

odd = numbers.select do |i|
  i % 2 == 0
end



"Do Not Run!!!".split(" ")

"Do Not Run!!!".gsub("!", "").downcase.split(" ")
=> ["do", "not", "run"]
