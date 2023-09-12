# adjacency list representation
class Graph(object):

    def __init__(self, V):
        self.V = V
        self.adj = {}
        for v in range(self.V):
            self.adj[v] = list() # or []


    def addEdge(self, v, w):
        self.adj[v].append(w)
        self.adj[w].append(v)

    def deg(self, v):
        return len(self.adj[v])

    def maxd(self):
       return  max([self.deg(v) for v in range(self.V)])


with open('graph01.txt', 'r') as f:
    V = int(f.readline().strip())
    # print(V)
    g = Graph(V)
    print(g.V)
    print(g.adj)
    for line in f:
        v, w = [int(t) for t in line.strip().split()]
        g.addEdge(v,w)

    #print(g.adj)
    print(g.deg(0))
    print(g.maxd())


