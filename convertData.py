import csv
import json
# Credit: https://www.geeksforgeeks.org/convert-csv-to-json-using-python/
def csv_to_json(csvFilePath, jsonFilePath):
    with open(csvFilePath, mode="r", encoding='utf-8') as csv_file:
        dict_reader = csv.DictReader(csv_file)
        data = [row for row in dict_reader]
    with open(jsonFilePath, mode="w", encoding='utf-8') as json_file:
        json.dumps(data,json_file, indent=4)

csv_to_json(Social_Links_Avail.csv, Social_Links_Avail.json)

csv_to_json(Link_Eps_Avail.csv, Link_Eps_Avail.json)

csv_to_json(SL_Unlock_Criteria.csv, SL_Unlock_Criteria.json)
