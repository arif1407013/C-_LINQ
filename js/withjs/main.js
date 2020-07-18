var image_slide = document.getElementsByClassName('image_class');
var image_changer = document.getElementsByClassName('chn');
var slide_index=0;

document.addEventListener('DOMContentLoaded', function(){change(slide_index)});
document.addEventListener('DOMContentLoaded', changer);

function changer()
{
	image_changer[0].addEventListener('click', function(){change(-1)});
	image_changer[1].addEventListener('click', function(){change(1)});
}

function change(n)
{
	slide_index=slide_index+n;
	if(slide_index>image_slide.length-1)
	{
		slide_index=0;
	}
	else if(slide_index<0)
	{
		slide_index=image_slide.length-1;
	}
	for(let i=0;i<5;i++)
	{
		image_slide[i].style.display="none";
	}
	image_slide[slide_index].style.display="block";
}

var searcher = document.getElementsByClassName('search_button')[0];
var search_control=0;
searcher.addEventListener('click', search_display);

function search_display()
{
	search_control++;
	document.getElementsByClassName('dropdown_sect')[0].style.display="none";
	if(search_control%2==1)
	{
		document.getElementsByClassName('search_box')[0].style.display="block";
	}
	else
	{
		document.getElementsByClassName('search_box')[0].style.display="none";
		document.getElementsByClassName('search_input')[0].value="";
	}
}

var header_but = document.getElementsByClassName('button_1');

document.addEventListener('DOMContentLoaded', header_sel);

function header_sel()
{
	for(let i=0;i<header_but.length;i++)
	{
		if(i == 3 || i == 4)
		{
			header_but[i].addEventListener('click', function(){dropper(i);});
		}
	}
}

function dropper(n)
{
	let x = header_but[n].offsetLeft;
	var drop_elem = document.getElementsByClassName('dropdown_sect')[0];
	drop_elem.style.left = x+".px";
	if(drop_elem.style.display == "none")
	{
		drop_elem.style.display = "block";
	}
	else
	{
		drop_elem.style.display = "none"
	}
}