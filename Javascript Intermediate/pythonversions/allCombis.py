# for a set of tokens
# return every combination of those tokens

import itertools

def allCombis(tokens):
    combis = []
    for i in range(1, len(tokens)+1):
        combis.append(list(itertools.combinations(tokens, i)))
    return combis

print(allCombis(["a", "b", "c"]))
