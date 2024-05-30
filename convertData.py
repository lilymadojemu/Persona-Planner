import csv
input_file = csv.DictReader(open("Social Links Availability.csv"))
for row in input_file:
    print(row)