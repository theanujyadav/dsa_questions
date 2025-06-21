def countDistnc(stairs: int):
    if stairs < 0:
        return 0
    
    if stairs == 0:
        return 1
    
    return countDistnc(stairs -1) + countDistnc(stairs -2)
print(countDistnc(10))