#!/usr/bin/env python3

class Triathlete(object):
    def __init__(self, name, tid):
        self.name = name
        self.tid = tid
        self.dd = {}

    def __str__(self):
        rt = sum(self.dd.values())
        return f"Name: {self.name}\nID: {self.tid}\nRace time: {rt}"

    def add_time(self, typ, n):
        self.dd[typ] = n

    def get_time(self, typ):
        #print(self.dd[typ])
        try:
            return self.dd[typ]
        except KeyError:
            return
