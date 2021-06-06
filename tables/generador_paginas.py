import pandas as pd
import numpy as np
import os, sys
import re

pathbest = "C:/Users/masou/Documents/CoderHouse/DW/MikeEmpiresPage-Souto/tables/Best"
archivosbest = os.listdir(pathbest)

pathworst = "C:/Users/masou/Documents/CoderHouse/DW/MikeEmpiresPage-Souto/tables/Worst"
archivosworst = os.listdir(pathworst)


ibest = open(pathbest+"/"+archivosbest[0], "r+").read()
print(ibest)

files = [i for i in archivosbest]



unit_names = []

for i in files:
    unit_names.append(i.replace(r"_best.html", ""))

for i,j in zip(archivosbest, archivosworst):
    ibest= open(pathbest+"/"+archivosbest[archivosbest.index(i)], "r+").read()
    iworst=open(pathworst+"/"+archivosworst[archivosworst.index(j)], "r+").read()
    name = unit_names[archivosbest.index(i)]+"unificado"

    with open (name+".html", "w+") as f:
        f.write('<h3 class= "subtituloResults">Top best matchups</h3>')
        f.write(ibest+"\n")
        f.seek(0,2)
        f.write('<h3 class= "subtituloResults">Top worst matchups</h3>')
        f.write(iworst)
        f.close()


