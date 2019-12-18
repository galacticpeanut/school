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
    time = current_date.strftime("%x %X")
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

def read_items():
  global id_count # import variable into fn scope

  try:
    reader = open(items_file, "rb") # rb = open the file to Read Binary
    # read the binaary and convert it to the original object
    temp_list = pickle.load(reader)

    for item in temp_list:
      items.append(item)

    last = items[-1]
    id_count = last.id + 1
    print(" Loaded: " + str(len(temp_list)) + " items")
  except:
    # you get here if try block crashes
    print(" *Error: Data coult not be loaded!")

def read_log():
  try:
    reader = open(logs_file, "rb") # rb = open the file to Read Binary
    # read the binary and convert it to the original object
    temp_list = pickle.load(reader)
    for log in temp_list:
      logs.append(log)
    
    print(" Loaded: " + str(len(temp_list)) + " log events")

  except:
    # you get here if try block crashes
    print(" *Error: Data could not be loaded!")

def print_header(text):
  clear()
  print("\n\n")
  print("*" * 40)
  print(text.rjust(30))
  print("*" * 40)


def print_all(header_text, items=items):
  print_header(header_text)
  print("-" * 70)
  print("ID   | Item Title            | Category        | Price        | Stock")
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


  log_line = get_time() + " | Register Item | Item ID: " + str(new_item.id)
  logs.append(log_line)
  save_log()


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
      log_line = get_time() + " | Update Stock | Item ID: " + id
      logs.append(log_line)
      save_log()

  if(not found):
    print("** Error: ID doesn't exist, try again")

def remove_item():
  print_all("Choose and Item to Remove")
  id = input("\nSelect an ID to remove it: ")

  for item in items:
    if(str(item.id) == id):
      items.remove(item)
      print (" Item has been removed!")

      log_line = get_time() + " | Remove Item | Item ID: " + id
      logs.append(log_line)
      save_log()

def list_no_stock():
  temp_list = []

  for item in items:
    if(item.stock == 0):
      temp_list.append(item)
  print_all("Items with no stock", temp_list)

def print_categories():
  temp_list = []
  for item in items:
    if(item.category not in temp_list):
      temp_list.append(item.category)
  print(temp_list)

def register_purchase():
  print_all("Choose an Item that you purchased")
  id = input("\nSelect an ID to update its stock: ")

  found = False
  for item in items:
    if(str(item.id) == id):
      stock = input("How many items: ") 
      item.stock += int(stock)
      found = True
  
      log_line = get_time() + " | Register Purchase | Item ID: " + id + " | Purchase amount: " + str(stock) 
      logs.append(log_line)
      save_log()
  if(not found):
    print("** Error: ID doesn't exist, try again")


def register_sale():
  print_all("Choose an Item that you sold")
  id = input("\nSelect an ID to update its stock: ")

  found = False
  for item in items:
    if(str(item.id) == id):
      stock = input("How many items: ")
      item.stock -= int(stock)
      found = True

      log_line = get_time() + " | Register Sale | Item ID: " + id + " | Amount sold: " + str(stock) 
      logs.append(log_line)
      save_log()
  if(not found):
    print("** Error: ID  doesn't exist, try again")

def print_stock_value():
    total = 0.0
    for item in items:
        total += (item.price * float(item.stock))

    print("Total Stock Value: " + str(total))

def print_logs():
  clear()
  for log in logs:
    print(log)

def search_items():

  query = str(input("\nEnter string to search for: ")).lower()
  temp_list = []

  for item in items:
    if (query in str(item.id) or query in str(item.stock) or query in str(item.price) or query in str(item.title).lower() or query in str(item.price) or query in str(item.category)):
      temp_list.append(item)
  print_all("Found Items!", temp_list)

def search_logs():

  query = str(input("\nEnter string to search for: ")).lower()

  for log in logs:
    if (query in str(log).lower()):
      print(log)

read_items()
read_log()

opc = ''
while(opc != 'x'):
  clear()
  print_menu()

  opc = input("Please select an option: ")

  if(opc == "1"):
    register_item()
    save_items()
  elif(opc == "2"):
    print_all("List of all Items")
  elif(opc == "3"):
    update_stock()
    save_items()
  elif(opc == "4"):
    list_no_stock()
  elif(opc == "5"):
    remove_item()
    save_items()
  elif(opc == "6"):
    print_categories()
  elif(opc == "7"):
    print_stock_value()
  elif(opc == "8"):
    register_purchase()
  elif(opc == "9"):
    register_sale()
  elif(opc == "10"):
    print_logs()
  elif(opc == "11"):
    search_items()
  elif(opc == "12"):
    search_logs()
  
  if(opc != "x"):
    input("\n\nPress Enter to continue")