Appearance.delete_all

require 'csv'

CSV.foreach("data.csv", headers: true) do |row|

  hash = row.to_hash
  model = Appearance.new
  model.year = hash["YEAR"].to_i
  model.occupation = hash["GoogleKnowlege_Occupation"]
  model.show_date = Date.strptime hash["Show"], "%m/%d/%y"
  model.group = hash["Group"]
  model.guest_list = hash["Raw_Guest_List"]

  model.save
end

puts Appearance.count
