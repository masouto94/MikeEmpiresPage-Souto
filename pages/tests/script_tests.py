import pandas as pd
import numpy as np
import os, sys
import re

path = "C:/Users/masou/Documents/CoderHouse/DW/MikeEmpiresPage-Souto/tables"
files = os.listdir(path)
exceptions = ['Reports', 'Best','Worst' ,'generador_paginas.py']
files = [i for i in files if i not in exceptions]

dict_urls = {'Arambai': 'https://www.youtube.com/embed/lE7rtpmo4iQ?autoplay=1&mute=1', 'Arbalester (Sicilians)': 'https://www.youtube.com/embed/IsIoPevMPpU?autoplay=1&mute=1', 'Atomic Flaming Camel': 'https://www.youtube.com/embed/pmJAJnyNQec?autoplay=1&mute=1', 'Boyar': 'https://www.youtube.com/embed/W8MCjvoatQ8?autoplay=1&mute=1', 'Cataphract': 'https://www.youtube.com/embed/7ShE1L11L5Y?autoplay=1&mute=1', 'Champion': 'https://www.youtube.com/embed/SiX-5nvs4RU?autoplay=1&mute=1', 'Chu Ko Nu 20x': 'https://www.youtube.com/embed/Fygh8v9kvNI?autoplay=1&mute=1', 'Chu Ko Nu': 'https://www.youtube.com/embed/2IVaH26Tu2Q?autoplay=1&mute=1', 'Condottiero (Aztecs)': 'https://www.youtube.com/embed/Yp1HzyXsVnE?autoplay=1&mute=1', 'Coustillier': 'https://www.youtube.com/embed/EgwtTOii008?autoplay=1&mute=1', 'Cuman Mercenaries (Turks)': 'https://www.youtube.com/embed/71Pu7FK-5h0?autoplay=1&mute=1', 'Donjon': 'https://www.youtube.com/embed/NvPxmUaj3ls?autoplay=1&mute=1', 'Edward Longshanks': 'https://www.youtube.com/embed/S0gqYeYn1c8?autoplay=1&mute=1', 'Elite Battle Elephant (VT)': 'https://www.youtube.com/embed/5Xdg1RQ1Zm0?autoplay=1&mute=1', 'Elite Eagle Warrior (Aztecs)': 'https://www.youtube.com/embed/hxk9Y7i2bpc?autoplay=1&mute=1', 'Elite Skirmisher (Mayans)': 'https://www.youtube.com/embed/-rLEeSH9qWs?autoplay=1&mute=1', 'Flemish Militia': 'https://www.youtube.com/embed/XUVUmLOXB0E?autoplay=1&mute=1', 'Genitour (Mayans)': 'https://www.youtube.com/embed/DLGAIOSTWOQ?autoplay=1&mute=1', 'Halberdier (Teutons)': 'https://www.youtube.com/embed/ETC4Lpkxb2Y?autoplay=1&mute=1', 'Hand Cannoneers (Burgundians)': 'https://www.youtube.com/embed/r4dEnobypak?autoplay=1&mute=1', 'Heavy Cavalry Archer (Tatars)el': 'https://www.youtube.com/embed/pxXfqYtYZDk?autoplay=1&mute=1', 'Heavy Scorpion': 'https://www.youtube.com/embed/n7ySyRNMLVk?autoplay=1&mute=1', 'Imperial Skirmisher (Mayans)': 'https://www.youtube.com/embed/YJvvRPd0InE?autoplay=1&mute=1', 'Kamayuk': 'https://www.youtube.com/embed/9L9JKFeCpSo?autoplay=1&mute=1', 'Leitis (4 relics)': 'https://www.youtube.com/embed/XJgsQOscEJU?autoplay=1&mute=1', 'Longbow Chu Ko Nu': 'https://www.youtube.com/embed/JR80JrqJs4w?autoplay=1&mute=1', 'Longbowman 20x': 'https://www.youtube.com/embed/nh37Jd0B-GM?autoplay=1&mute=1', 'Machine Gun Janissary': 'https://www.youtube.com/embed/oyXP6P4TrHk?autoplay=1&mute=1', 'Mangonel': 'https://www.youtube.com/embed/bFmT5whJGU8?autoplay=1&mute=1', 'Organ Gun 20x': 'https://www.youtube.com/embed/Az1kkitv_Bw?autoplay=1&mute=1', 'Paladin (Franks)': 'https://www.youtube.com/embed/J4iDvP5Cb9o?autoplay=1&mute=1', 'Paladin': 'https://www.youtube.com/embed/BKXhVv8yuq0?autoplay=1&mute=1', 'Photonman': 'https://www.youtube.com/embed/vNXNvlqdsVs?autoplay=1&mute=1', 'Samurai': 'https://www.youtube.com/embed/uTargB-ikOU?autoplay=1&mute=1', 'Sarjeant': 'https://www.youtube.com/embed/V08c4rmzq2I?autoplay=1&mute=1', 'Siege Onager': 'https://www.youtube.com/embed/oXMm1WOKrJY?autoplay=1&mute=1', 'Sosso Guard': 'https://www.youtube.com/embed/3quX6X8-ZhE?autoplay=1&mute=1', 'Teutonic Huskarl': 'https://www.youtube.com/embed/yAfJqmogKRc?autoplay=1&mute=1', 'Teutonic Jaguar': 'https://www.youtube.com/embed/t68qnbXbe6Q?autoplay=1&mute=1', 'Teutonic Knight': 'https://www.youtube.com/embed/sZD2aY6cPeA?autoplay=1&mute=1', 'War Elephant': 'https://www.youtube.com/embed/Idq8ojBnVrk?autoplay=1&mute=1', 'Xolotl Warrior': 'https://www.youtube.com/embed/uXYqHLcbgsQ?autoplay=1&mute=1'}

unit_names = []

for i in files:
    unit_names.append(i.replace("unificado.html", ""))





for i,j in zip(unit_names,files):
	name = str(i+"Test.html")
	h1 = str(i)+" tests"
	tabla = open(path+"/"+j, "r+")
	tabla = tabla.read()
	url = dict_urls[i]
	texto = str('<!DOCTYPE html>\n\
<html lang="en">\n\
<head>\n\
	<meta charset="UTF-8">\n\
	<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\
	<link rel="preconnect" href="https://fonts.gstatic.com">\n\
	<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1&display=swap" rel="stylesheet">\n\
	 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">\n\
	<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1&display=swap" rel="stylesheet">\n\
	<link rel="stylesheet" href="../../css/style.css">\n\
	<title>'+h1+'</title>\n\
	</head>\n\
	<body class="body">\n\
			<header>\n\
				<div class= menuImage>\n\
					<nav class="menuMenu">\n\
						<ul>\n\
							<li class= "itemIndex">\n\
								<a class= "linkNav" href="../../index.html">Home</a>\n\
							</li>\n\
							<li class= "itemIndex">\n\
								<a class= "linkNav" href="../about.html">About</a>\n\
							</li>\n\
							<li class= "itemIndex">\n\
								<a class= "linkNav" href="../tests.html">Tests</a>\n\
							</li>\n\
							<li class= "itemIndex">\n\
								<a class= "linkNav" href="#footer">Contact</a>\n\
							</li>\n\
						</ul>\n\
					</nav> </div>\n\
				</header>\n\
				<h1 class="h1">'+h1+'</h1>\n\
				<div class= "grid">\n\
		<nav class="navbar justify-content-center">\n\
			<ul class= "navbar-nav ">\n\
				<li class="menuTitle"><p><b>Menu</b></p></li>\n\
				<li class= "menuItem nav-item">\n\
					<a class= "menuIndex nav-link" href="../civilizations.html">Civilizations</a>\n\
				</li>\n\
				<li class= "menuItem nav-item">\n\
					<a class= "menuIndex nav-link" href="../units.html">Units</a>\n\
				</li>\n\
				<li class= "menuItem nav-item">\n\
					<a class= "menuIndex nav-link" href="../matchups.html">Matchups</a>\n\
				</li>\n\
				<li class= "menuItem nav-item">\n\
					<a class= "menuIndex nav-link" href="../tests.html">Tests</a>\n\
				</li>\n\
			</ul>\n\
		</nav>\n\
				<div class="mainContainer">\n\
				<iframe src="'+url+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>\
				</iframe>\n\
				<h4 class="h4"><u>Results</u></h4>\n'\
				+tabla+'\n\
				</div>\n\
				</div>\n\
				<div class=divFooter>\n\
					<footer id= "footer">\n\
						<p><b>Send us an email</b></p>\n\
						<p><u>Select your country</u></p>\n\
						<form method="post" action="#header">\n\
						 <div class="selectTextArea">\n\
						 	<select name="country">\n\
							<option value="AR">Argentina</option>\n\
							<option value="BR">Brasil</option>\n\
							<option value="ROW">Other</option>\n\
							</select>\n\
							<textarea rows="5" cols="40">\n\
							</textarea>\n\
						</div>\n\
							<p><b>Are you a patron/channel member?</b></p>\n\
							<div id = "ButtonRadius">\n\
							<div>Yes</div>\n\
							<input type="radio" name="patron" value="yes" />\n\
							<div id= "No">No</div>\n\
							<input type="radio" name="patron" value="no" />\n\
							</div>\n\
							<div id= "Submits">\n\
							<input type="submit" id="send" value="Send"/>\n\
							<input id="Reset" type="reset" value="Reset"/>\n\
							</div>\n\
						</form>\n\
					</footer>\n\
				</div>\n\
			  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>\n\
			  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>\n\
			  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>\n\
			</body>\n\
			</html>'
		)
	with open(name, "w+") as f:
		f.write(texto)
		f.close()

#ponerle link activo y el resto de las cosas del html en la línea

print(texto)