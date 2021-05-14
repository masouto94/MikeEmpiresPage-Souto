civs = ["Aztecs", "Berbers", "Britons", "Bulgarians", "Burgundians", "Burmese", "Byzantines", "Celts", "Chinese", "Cumans", "Ethiopians", "Franks", "Goths", "Huns", "Incas", "Indians", "Italians", "Japanese", "Khmer", "Koreans", "Lithuanians", "Magyars", "Malay", "Malians", "Mayans", "Mongols", "Persians", "Portuguese", "Saracens", "Sicilians", "Slavs", "Spanish", "Tatars", "Teutons", "Turks", "Vietnamese", "Vikings"]


name = str(civs[0])+".html"


for i in civs:
	name = str(i+".html")
	h1 = str(i)
	texto = str('<!DOCTYPE html>\n\
<html lang="es">\n\
<head>\n\
	<meta charset="UTF-8">\n\
	<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\
	<link rel="preconnect" href="https://fonts.gstatic.com">\n\
	<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1&display=swap" rel="stylesheet">\n\
	<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1&display=swap" rel="stylesheet">\n\
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">\n\
	<link rel="stylesheet" href="../../css/style.css">\n\
	<title>'+h1+'</title>\n\
	</head>\n\
	<body class ="body">\n\
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
		<nav class="navbar .justify-content-center">\n\
			<ul class= "navbar-nav ">\n\
				<li class="menuTitle"><h2 class="h2">Menu</h2></li>\n\
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
					<p>Info sobre la civ correspondiente</p>\n\
					<p>Info sobre la civ correspondiente</p>\n\
					<p>Info sobre la civ correspondiente</p>\n\
					<p>Info sobre la civ correspondiente</p>\n\
					<p>Info sobre la civ correspondiente</p>\n\
					<p>Info sobre la civ correspondiente</p>\n\
					<p>Info sobre la civ correspondiente</p>\n\
					<p>Info sobre la civ correspondiente</p>\n\
					<p>Info sobre la civ correspondiente</p>\n\
					<p>Info sobre la civ correspondiente</p>\n\
					<p>Info sobre la civ correspondiente</p>\n\
					<p>Info sobre la civ correspondiente</p>\n\
					<p>Info sobre la civ correspondiente</p>\n\
				</div>\n\
				</div>\n\
				<div class=divFooter>\n\
					<footer id= "footer">\n\
						<h3 class="h3">Send us an email</h3>\n\
						<p>Select your country</p>\n\
						<form action="">\n\
						 <div class="selectTextArea">\n\
						 	<select name="country">\n\
							<option value="AR">Argentina</option>\n\
							<option value="BR">Brasil</option>\n\
							<option value="ROW">Other</option>\n\
							</select>\n\
							<textarea rows="5" cols="40">\n\
							</textarea>\n\
						</div>\n\
							<h4 class="h4">Are you a patron/channel member?</h4>\n\
							<div id = "ButtonRadius">\n\
							<div>Yes</div>\n\
							<input type="radio" name="patron" value="yes" />\n\
							<div id= "No">No</div>\n\
							<input type="radio" name="patron" value="no" />\n\
							</div>\n\
							<div id= "Submits">\n\
							<input type="submit" value="Send"/>\n\
							<input id="Reset" type="reset" value="Reset"/>\n\
							</div>\n\
						</form>\n\
					</footer>\n\
				</div>\n\
			</body>\n\
			</html>'
		)
	with open(name, "w+") as f:
		f.write(texto)
		f.close()

#ponerle link activo y el resto de las cosas del html en la línea