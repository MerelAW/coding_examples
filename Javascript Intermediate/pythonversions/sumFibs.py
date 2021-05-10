def sumFibs(num):

    first = 0
    second = 1
    total = 0

    while(second<=num):
        if(second%2!=0):
            total+=second
        second += first
        first = second-first
    
    return total

print(sumFibs(4))
