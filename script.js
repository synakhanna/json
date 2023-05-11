Fancybox.bind("[data-fancybox]", {
  
});

const json = `{
	"data": [
	{"image": "don.jpg","name": "Don","bordercolor": "mistyrose"},
	{"image": "bm.jpg","name": "Bajirao Mastani","bordercolor": "aquamarine"},
	{"image": "kalank.jpg","name": "Kalank","bordercolor": "aqua"},
	{"image": "saaho.jpg","name": "Saaho","bordercolor": "yellow"},
	{"image": "twm.jpg","name": "Tanu Weds Manu Returns","bordercolor": "lime"},
	{"image": "malang.jpg","name": "Malang","bordercolor": "antiquewhite"}
	]}`

const {data} = JSON.parse(json)

const div = document.getElementById("movies")

for (item of data) {
	div.innerHTML += `<a href=${item.image} data-fancybox><img src=${item.image}>
					</a>` 
	div.innerHTML += `<p class="text" style="color:white">${item.name}</p>`
	div.innerHTML += `<hr class="line" width="1400" color=${item.bordercolor}
        size="10">` 
}