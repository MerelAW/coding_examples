from functools import *

def uniteUniques(*arg):
    arrays = list(arg)
    
    return reduce(lambda a, b: a+list(filter(lambda i: i not in a, b)), arrays)

print(uniteUniques([1,2,3], [5,1,2,4], [1,2]))
