#!/usr/bin/env python3

class Triathlete(object):
    def __init__(self, name, tid):
        self.name = name
        self.tid = tid

    def __str__(self):
        return f"Name: {self.name}\nID: {self.tid}"

class Triathlon(object):

    def __init__(self):
       self.triathlon = {}
    # dont have to anything here (as in nothing beside self) - tn = Triathlon()

    def add(self, other):
        # tryna add triathlete otehr to triathlon self
        self.triathlon[other.tid] = other

    def remove(self, tid):
       self.triathlon.pop(tid)

    def lookup(self, tid):
        if tid in self.triathlon:
            return self.triathlon[tid]
        else:
           return None
