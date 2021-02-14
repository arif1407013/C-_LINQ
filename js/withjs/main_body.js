document.addEventListener('DOMContentLoaded', starter);
function starter()
{
	var body = document.querySelector('body');
	body.classList.add("body_block");
	var body_divs = [1,2,3,4];
	for(let i=0;i<body_divs.length;i++)
	{
		body_divs[i] = document.createElement("div");
		body.appendChild(body_divs[i]);
	}
	body_divs[0].classList.add("div_1");
	body_divs[1].classList.add("div_2");
	body_divs[2].classList.add("div_3");
	body_divs[3].classList.add("div_4");

//-----------------------------------------------------------------------

	var body_div_1 = [1,2];
	for(let i=0;i<body_div_1.length;i++)
	{
		body_div_1[i] = document.createElement("div");
		body_divs[0].appendChild(body_div_1[i]);
	}
	body_div_1[0].classList.add("writing_1");
	body_div_1[1].classList.add("header_link");
	var body_div_1_wr = [1,2];
	for(let i=0;i<body_div_1_wr.length;i++)
	{
		body_div_1_wr[i] = document.createElement("div");
		body_div_1[0].appendChild(body_div_1_wr[i]);
	}
	body_div_1_wr[0].innerHTML = "HTML";
	body_div_1_wr[0].classList.add("div_1_font_1");
	body_div_1_wr[1].innerHTML = "USTADS";
	body_div_1_wr[1].classList.add("div_1_font_2");

	var body_div_1_link = [1,2,3,4,5,6,7,8,9];
	body_div_1_link[0] = document.createElement("div");
	body_div_1[1].appendChild(body_div_1_link[0]);
	body_div_1_link[0].classList.add("search_button");
	body_div_1_link[1] = document.createElement("form");
	body_div_1[1].appendChild(body_div_1_link[1]);
	body_div_1_link[1].classList.add("search_box");
	var body_div_1_link_inp = document.createElement("input");
	body_div_1_link[1].appendChild(body_div_1_link_inp);
	body_div_1_link_inp.classList.add("search_input");
	body_div_1_link_inp.type = "text";
	body_div_1_link_inp.name = "search_1";
	body_div_1_link_inp.placeholder = "Search";
	for(let i=2;i<body_div_1_link.length-1;i++)
	{
		body_div_1_link[i]=document.createElement("button");
		body_div_1[1].appendChild(body_div_1_link[i]);
		body_div_1_link[i].classList.add("button_1");
	}
	body_div_1_link[2].innerHTML = "HTML";
	body_div_1_link[3].innerHTML = "CSS";
	body_div_1_link[4].innerHTML = "JAVASCRIPT";
	body_div_1_link[5].innerHTML = "AJAX";
	body_div_1_link[6].innerHTML = "XML";
	body_div_1_link[7].innerHTML = "HOME";
	body_div_1_link[7].style.backgroundColor = "rgba(255,0,0,1)";
	body_div_1_link[8]=document.createElement("div");
	body_div_1[1].appendChild(body_div_1_link[8]);
	body_div_1_link[8].classList.add("dropdown_sect");
	var body_div_1_link_drop = [1,2,3];
	for(let i=0;i<3;i++)
	{
		body_div_1_link_drop[i]=document.createElement("button");
		body_div_1_link[8].appendChild(body_div_1_link_drop[i]);
		body_div_1_link_drop[i].classList.add("drop_button");
		body_div_1_link_drop[i].innerHTML="cat";
	}
	var span = document.createElement("span");
	body_div_1_link[8].appendChild(span);
	span.classList.add("drop_span");

	//-------------------------------------------------------------
	body_div_2 = [1,2,3,4,5,6,7,8];
	for(let i=0;i<5;i++)
	{
		body_div_2[i] = document.createElement("img");
		body_divs[1].appendChild(body_div_2[i]);
		body_div_2[i].classList.add("image_class");
	}
	body_div_2[0].src = "1.jpg";
	body_div_2[1].src = "2.jpg";
	body_div_2[2].src = "3.jpg";
	body_div_2[3].src = "4.jpg";
	body_div_2[4].src = "5.jpg";
	for(let i=5;i<body_div_2.length;i++)
	{
		body_div_2[i] = document.createElement("div");
		body_divs[1].appendChild(body_div_2[i]);
	}
	body_div_2[5].classList.add("writing_div");
	body_div_2[6].classList.add("changer_left");
	body_div_2[6].classList.add("chn");
	body_div_2[6].innerHTML = "<";
	body_div_2[7].classList.add("changer_right");
	body_div_2[7].classList.add("chn");
	body_div_2[7].innerHTML = ">";
	var body_div_2_write = [1,2];
	for(let i=0;i<2;i++)
	{
		body_div_2_write[i]=document.createElement("div");
		body_div_2[5].appendChild(body_div_2_write[i]);
	}
	body_div_2_write[0].classList.add("writing2");
	body_div_2_write[0].innerHTML = "INCREDIBLE FOOD";
	body_div_2_write[1].classList.add("writing3");
	body_div_2_write[1].innerHTML = "BURGER";

	//-------------------------------------------------------------------

	var body_div_3 = [1,2,3,4,5];
	body_div_3[0] = document.createElement("div");
	body_divs[2].appendChild(body_div_3[0]);
	body_div_3[0].classList.add("service_div");
	for(let i=1;i<5;i++)
	{
		body_div_3[i] = document.createElement("div");
		body_divs[2].appendChild(body_div_3[i]);
		body_div_3[i].classList.add("four_list");
	}
	var body_div_3_serv = [1,2,3];
	for(let i=0;i<3;i++)
	{
		body_div_3_serv[i] = document.createElement("div");
		body_div_3[0].appendChild(body_div_3_serv[i]);
	}
	body_div_3_serv[0].innerHTML = "Some of our top services";
	body_div_3_serv[0].classList.add("div_3_font_1");
	body_div_3_serv[1].innerHTML = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
	body_div_3_serv[1].classList.add("div_3_font_2");
	body_div_3_serv[2].innerHTML = "View More";
	body_div_3_serv[2].classList.add("more_button");

	for(let i=1;i<5;i++)
	{
		var body_div_3_four = [1,2,3];
		body_div_3_four[0] = document.createElement("img");
		body_div_3[i].appendChild(body_div_3_four[0]);
		body_div_3_four[0].classList.add("four_list_image");
		body_div_3_four[0].src = "trans 10.gif";
		for(let j=1;j<3;j++)
		{
			body_div_3_four[j] = document.createElement("div");
			body_div_3[i].appendChild(body_div_3_four[j]);
		}
		body_div_3_four[1].classList.add("four_list_text");
		body_div_3_four[2].classList.add("four_list_btn");
		body_div_3_four[2].innerHTML = "Save Changes";
	}
	body_div_3[2].classList.add("right_list");
	body_div_3[3].classList.add("right_list");
	body_div_3[4].classList.add("right_list");

	//--------------------------------------------------------------------

	var body_div_4 = [1,2,3];
	for(let i=0;i<3;i++)
	{
		body_div_4[i] = document.createElement("div");
		body_divs[3].appendChild(body_div_4[i]);
	}
	body_div_4[0].classList.add("div_4_writing_1");
	body_div_4[0].innerHTML = "WHY HTML USTADS";
	body_div_4[1].classList.add("div_4_writing_2");
	body_div_4[1].innerHTML = "skjn[aoereruvnhieurbveiarbvua;kjdbcvk.adrubvlad]";
	body_div_4[2].classList.add("div_4_content");

	var body_div_4_cont = [1,2,3,4,5];
	for(let i=0;i<5;i++)
	{
		body_div_4_cont[i]=document.createElement("div");
		body_div_4[2].appendChild(body_div_4_cont[i]);
		body_div_4_cont[i].classList.add("div_4_contents");
		body_div_4_cont[i].innerHTML = "Ad";
	}
	body_div_4_cont[0].style.backgroundColor = "rgba(0,255,255,1)";
}