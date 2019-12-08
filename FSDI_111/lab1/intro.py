print ("Hello World")

# variable types on Python
name = 'Robert'
age = 31
found = False
average = 42.21

print(name)
print(age)

# print (type(name))
# print (type(age))
# print (type(found))
# print (type(average))

# Str and Math operations
print(21 + 21)
print(age + 1)
print(8 - 4)
print(8 * 8)
print(42 / 21)
print(10 % 3) # % = modulus (return the residue of the division)


print("------------------")
print(name + name)
print(name + ' Ziegler')
# print(name * 20)

print(name + '99')
print(name + str(age))

# Conditions ( if )
print("--------------------")
if(age < 90):
  print("You are still young")
elif(age == 90 ):
  print("You are on there border line")
else:
    print("Sorry bud, you are kind of old")