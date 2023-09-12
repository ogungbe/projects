#!/usr/bin/env python3

def tagger(tri):
    return tri.rt

class Triathlete(object):
    def __init__(self, name, tid):
        self.name = name
        self.tid = tid
        self.dd = {}
        self.rt = 0

    def __str__(self):
        rt = sum(self.dd.values())
        return f"Name: {self.name}\nID: {self.tid}\nRace time: {rt}"

    def add_time(self, typ, n):
        self.rt += n
        self.dd[typ] = n

    def get_time(self, typ):
        try:
            return self.dd[typ]
        except KeyError:
            return

    def __eq__(self, other):
           return self.tim() == other.tim()

    def __lt__(self, other):
       return self.tim() < other.tim()

    def tim(self):
       return sum(self.dd.values())

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

        def best(self):
            f = []
            for t in sorted(self.triathlon.values(), key=tagger):
                f.append(t)
            return f[0]

        def worst(self):
            f = []
            for t in sorted(self.triathlon.values(), key=tagger):
                f.append(t)
            return f[-1]
