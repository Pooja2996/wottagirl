const perfumesData = [
	{
		name: 'Divine_Purple',
		ratings: { Package: 90, Scent: 75, 'Value For Money': 77, LongLasting: 82 }
	},
	{
		name: 'Red_Magic',
		ratings: { Package: 84, Scent: 78, 'Value For Money': 76, LongLasting: 79 }
	},
	{
		name: 'Pink_Angel',
		ratings: { Package: 78, Scent: 72, 'Value For Money': 82, LongLasting: 86 }
	},
	{
		name: 'Mystic_Blue',
		ratings: { Package: 94, Scent: 92, 'Value For Money': 88, LongLasting: 96 }
	}
];

const perfTitle = 'Wotta Girl Perfume';
const girlyEl = document.querySelector('#girly');
const titleEl = document.querySelector('#title');
const clrBtnEl = document.querySelector('#color_ops');
const perfImgEl = document.querySelector('#perfume_img');
const ratingEl = document.querySelector('#rating');
const overallEl = document.querySelector('.Overall');
const selectedColorEl = document.querySelector('#selected_color');
const progressCntrEl = document.querySelector('#progress_cntr');
const loaderEl = document.querySelector('#loader');

const image = document.getElementById('perfume_display');

titleEl.innerHTML = `${perfTitle}'s <strong>raiting</strong>`;

perfumesData.map((d, index) => {
	clrBtnEl.innerHTML += `<div class='round-btn-wrap'><button class='rounded ${d.name} card-2' onclick="perfClr('${d.name}', ${index})">${index +
		1}</button><div>`;
	if (index === 0) {
		image.setAttribute('src', `./assets/images/${d.name}.jpg`);
		selectedColorEl.innerHTML = `selected color <strong>${d.name}</strong>`;
		for (var key in d.ratings) {
			let perfName = key,
				perfRating = d.ratings[key];
			renderProgressEle(perfName, perfRating);
		}
	}
});

const perfClr = (clr, index) => {
	image.setAttribute('src', `./assets/images/${clr}.jpg`);
	selectedColorEl.innerHTML = `selected color <strong>${clr}</strong>`;
	progressCntrEl.innerHTML = null;
	for (var key in perfumesData[index].ratings) {
		let perfName = key,
			perfRating = perfumesData[index].ratings[key];
		renderProgressEle(perfName, perfRating);
	}
};

function renderProgressEle(perfName, perfRating) {
	progressCntrEl.innerHTML += `<p>${perfName}</p><div style="display:flex"><div class='progressbar'> <div class='progressbar_packaging' style='width : ${perfRating}%'></div> </div> <span style="margin:auto;"><strong>${perfRating}</strong> </span> </div>`;
}

const loadImage = () => {
	setTimeout(() => {
		let img = document.querySelector('#perfume_display');
		img.style.display = 'block';
	}, 500);
};

