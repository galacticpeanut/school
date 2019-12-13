from menu import print_menu
from item import Item
import datetime
import pickle
import os

logs = []
items = []
id_count = 1
items_file = "item.data"
logs_file = "logs.data"

def clear():
  return os.system("clear")

def get_time():
    current_date = datetime.datetime.now()
    time = current_date.strftime("%X")
    return time
  
def save_items():
  # open creates/opens a file
  # wb = write binary info
  writer = open(items_file, "wb")
  # converts the object into binary and writes it on the file
  pickle.dump(items, writer)
  writer.close() # closes the file stream (to release the file)
  print("Data saved!!")

def save_log():
  # open creates/opens a file
  # wb = write binary info
  writer = open(logs_file, "wb")
  # converts the object the binary and writes it on the file
  pickle.dump(logs, writer)
  writer.close() # closes the file stream (to release the file)
  print("Logs saved!!")

def print_header(header_text):
  clear()
  print(header_text.rjust(50))


def print_all(header_text):
  print_header(header_text)
  print("-" * 70)
  print("ID   | Item Tilte            | Category        | Price        | Stock")
  print("-" * 70)

  for item in items:
    print (str(item.id).ljust(3) + " | " + item.title.ljust(25) + " | " + item.category.ljust(15)  +
    " | " + str(item.price).rjust(9) + " | " + str(item.stock).rjust(5))

def register_item():
  global id_count # importing the global variable, into fn scope

  print_header(" Register new Item")
  title = input("Please input the Title: ")
  category = input("Please input the Category: ")
  price = float(input("please input the Price: "))
  stock = int(input("Please input the Stock: "))

  new_item = Item()
  new_item.id = id_count
  new_item.title = title
  new_item.category = category
  new_item.price = price
  new_item.stock = stock

  id_count += 1
  items.append(new_item)
  print(" Item Created!!")


def update_stock():
  # show the user all the items
  # assk for the desired id
  # get the element from the array with that id
  # ask for the new stock
  # update the stock of the element
  print_all("Choose an Item from the list")
  id = input("\nSelect an ID to update its stock: ")
  # find the element
  found = False
  for item in items:
    if(str(item.id) == id):
      stock = input("Please input new stock value: ")
      item.stock = int(stock)
      found = True
      # add registry to the log
      log_line = get_time() + " | Update | " + id
      logs.append(log_line)
      save_log()

    if(not found):
      print("** Err;r: ID doesn't exist, try again")

def remove_item():
  print_all("Choose and Item to Remove")
  id = input("\nSelect an ID to remove it: ")

  for item in items:
    if(str(item.id) == id):
      items.remove(item)
      print (" Item has been removed!")

def list_no_stock():
  print_header("Items with no stock")
  for item in items:
    if(item.stock == 0):
      print(item.title)

""" def print_categories():
#   temp_list = []

def register_purchase():
  print("")

def register_sale():
  print("")

def print_stock_value():
  print("")
"""

register_item()
register_item()
print_all("All stock")
update_stock()
print_all("All stock")
list_no_stock()