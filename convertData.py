import csv
social_link_avail_file = csv.DictReader(open("Social Links Availability.csv"))
for row in social_link_avail_file:
    print(row)
    print(type(social_link_avail_file))