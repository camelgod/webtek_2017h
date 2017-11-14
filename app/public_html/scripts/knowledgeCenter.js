/*
FILE NAME: knowledgeCenter.js
WRITTEN BY: Edvard Nordstrøm Ødegaard
WHEN: November 2017
PURPOSE: Dynamic tabbing through articles for knowledge-center
*/

window.addEventListener('load', function(){

	let content = document.getElementById('knowledge-container');
	let a1 = document.getElementById('article1');
	let a2 = document.getElementById('article2');
	let a3 = document.getElementById('article3');
	let a4 = document.getElementById('article4');

	let articleList = [a1, a2, a3, a4];


	let show = function(article) {
		for(ele in articleList) {
			articleList[ele].style.display = "none";
		};
		article.style.display = "initial";
		content.innerHTML = article.innerHTML;
	}

	let a1btn = document.getElementById('a1btn');
	let a2btn = document.getElementById('a2btn');
	let a3btn = document.getElementById('a3btn');
	let a4btn = document.getElementById('a4btn');
	
	a1btn.addEventListener('click', function() {
		show(a1);
	});
	a2btn.addEventListener('click', function() {
		show(a2);
	});
	a3btn.addEventListener('click', function() {
		show(a3);
	});
	a4btn.addEventListener('click', function() {
		show(a4);
	});

	show(a1);

});
