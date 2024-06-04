import csv
import json

social_link_avail= csv.DictReader(open("Social_Links_Avail.csv"))
for row in social_link_avail_file:
    print(row)
link_ep_avail= csv.DictReader(open("Link_Eps_Avail.csv"))
for row in social_link_avail_file:
    print(row)
