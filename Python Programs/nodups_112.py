#!/usr/bin/env python3

import sys
li = []
op = []
punc = ['.', '!', '?', ':', ',']
for line in sys.stdin:
    line = line.strip().split()
    for word in line:
        wd = ''
        for letter in word:
            if letter not in punc:
                wd += letter
        if wd.lower() not in li:
            li.append(wd.lower())
            op.append(word)
        else:
            op.append('.')
    print(' '.join(op))
    op = []
