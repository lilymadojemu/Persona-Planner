import csv
import json
# Credit: https://www.geeksforgeeks.org/convert-csv-to-json-using-python/
def csv_to_json(csvFilePath, jsonFilePath):
    with open(csvFilePath, mode="r", encoding='utf-8') as csv_file:
        dict_reader = csv.DictReader(csv_file)
        data = [row for row in dict_reader]
    with open(jsonFilePath, mode="w", encoding='utf-8') as json_file:
        json.dump(data,json_file, indent=4)

csv_to_json("Social_Links_Avail.csv", "social_links_avail.json")

csv_to_json("Link_Eps_Avail.csv", "link_eps_avail.json")

csv_to_json("Social_Link_Unlock_Criteria.csv", "sl_unlock_criteria.json")
