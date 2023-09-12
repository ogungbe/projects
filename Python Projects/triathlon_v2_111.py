#!/usr/bin/env python3

def tagger(tri):
    return tri.name

class Triathlete(object):
    def __init__(self, name, tid):
        self.name = name
        self.tid = tid

    def __str__(self):
        return f"Name: {self.name}\nID: {self.tid}"

class Triathlon(object):
    def __init__(self):
       self.triathlon = {}

    def add(self, other):
        self.triathlon[other.tid] = other

    def remove(self, tid):
       self.triathlon.pop(tid)

    def lookup(self, tid):
        if tid in self.triathlon.keys():
            return self.triathlon[tid]
        else:
           return None

    def __str__(self):
        s = []
        for t in sorted(self.triathlon.values(), key=tagger):
           s.append(f'{t}')
        return '\n'.join(s)
