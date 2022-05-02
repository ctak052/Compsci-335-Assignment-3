//setup footer
const getVersion = fetch('http://localhost:5000/api/GetVersion')
		.then((response) => response.text())
		.then(function(version) {
			document.getElementsByTagName("footer")[0].innerHTML = "\u00A9 All Rights Reserved. ".concat(version);
		});
user_credentials = "";
cur_page = "home";
function home_clicked(){
	cur_page = "home";
	document.getElementById("page_title").innerHTML = "Southern Hemisphere Institute of Technology"
	hide_contents();
	document.getElementById("home_page").style.display = "block";
}

function staff_clicked(){
	cur_page = "staff";
	document.getElementById("page_title").innerHTML = "Staff"
	hide_contents();
	document.getElementById("staff_page").style.display = "block";
	if(document.getElementById("staff_contents").innerHTML.includes("Loading...")){
		document.getElementById("staff_contents").innerHTML = ""
		populate_staff()
	}
}

function shop_clicked(){
	cur_page = "shop";
	document.getElementById("page_title").innerHTML = "Products"
	hide_contents();
	document.getElementById("shop_page").style.display = "block";
	document.getElementById('search-input').value = ""
	update_products("")
}

function guest_book_clicked(){
	cur_page = "book";
	document.getElementById("page_title").innerHTML = "Guest Book"
	document.getElementById("comment_error_display").innerHTML = ""
	document.getElementById("comment_textarea").value = ""
	if(user_credentials == "")
		document.getElementById("name_input").value = ""
	else{
		const myArr = user_credentials.split(":")
		document.getElementById("name_input").value = myArr[0]
	}
	hide_contents();
	document.getElementById("guest_page").style.display = "block";
	update_iframe();
}

function login_click(){
	document.getElementById("page_title").innerHTML = "Login"
	hide_contents();
	setup_login();
	document.getElementById("login_register_page").style.display = "block";
}

function register_click(){
	document.getElementById("page_title").innerHTML = "Register"
	hide_contents();
	setup_register();
	document.getElementById("login_register_page").style.display = "block";
}

function hide_contents(){
	document.getElementById("home_page").style.display = "none";
	document.getElementById("staff_page").style.display = "none";
	document.getElementById("shop_page").style.display = "none";
	document.getElementById("guest_page").style.display = "none";
	document.getElementById("login_register_page").style.display = "none";
}

function submit_comment(){
	comment_text = document.getElementById("comment_textarea").value
	users_name = document.getElementById("name_input").value
	if(comment_text == "")
		document.getElementById("comment_error_display").innerHTML = "Please write a comment!"
	else if( users_name == "")
		document.getElementById("comment_error_display").innerHTML = "Please enter your name!"
	else {
		document.getElementById("comment_error_display").innerHTML = ""
		commentString = '{ "Comment": "' + comment_text + '", "Name": "' + users_name + '" }'
		const post_comment = 
			fetch('http://localhost:5000/api/WriteComment',
			{
				headers : {
					'Content-Type': 'application/json'
				},
				method : "POST",
				body : commentString
			})
			.then(() => update_iframe());
	}
}

function populate_staff(){
	staff_out_string = ""
	
	const staff_ids = fetch('http://localhost:5000/api/GetAllStaff')
		.then((response) => response.json())
		.then(function(staff_json){ staff_json.forEach(get_staff) });
		
	const get_staff = (staff_id) => {
		const staff_vcard = fetch('http://localhost:5000/api/GetCard/'.concat(staff_id.id))
		.then((response) => response.text())
		.then(function(vCard) { return add_user_from_card(vCard) });
	}
	
	const add_user_from_card = (vCard) => {
		vCard_lines = vCard.split("\n");;
		url = vCard_lines[8].slice(4)
		
		html_string = "<div class='staff_display'>";
		//get Image and add to HTML
		html_string += "<a href='" + url + "' target='_blank'>";
		html_string += "<img src='data:image/png;base64,".concat((vCard_lines[10].split(":"))[1], "'class='profile_image' alt='Profile Image for Staff'></a>");
		html_string += "<div class='staff_text_display'>";
		//get name and add to HTML
		html_string += "<a href='" + url + "' target='_blank'>";
		html_string += "<h3 onclick='redirect(".concat(url, ")'>", vCard_lines[3].slice(3), "</h3></a>");
		
		//get Number and add to HTML
		tel_number = vCard_lines[7].slice(4);
		html_string += "<a href='tel:" + tel_number + "' target='_blank'>";
		html_string += "<h4>".concat(tel_number, "</h4></a>");
		
		//get email and add to HTML
		email = vCard_lines[6].slice(16);
		html_string += "<a href='mailto:" + email + "' target='_blank'>";
		html_string += "<h4>".concat(email, "</h4></a>");
		
		//get categories and add to HTML
		html_string += "<h4>".concat(vCard_lines[9].slice(11), "</h4>");
		
		//get vcard
		html_string += "<a href='http://localhost:5000/api/GetCard/" + vCard_lines[4].slice(4) + "'>";
		html_string += "<button class='btn_default sm'>Add To Address Book</button></a>";
					
		//now add it to the html
		html_string += "</div></div>";
		document.getElementById("staff_contents").insertAdjacentHTML("afterbegin", html_string);
		staff_out_string += html_string;
	}
}

function update_products(search_term){
	if(search_term != ""){
		search_term = "/" + search_term
	}
	const getVersion = fetch('http://localhost:5000/api/GetItems'.concat(search_term))
		.then((response) => response.json())
		.then((products) => (fill_products(products)));
		
	const fill_products = (products) => {
		html_string = ""
		const add_product = (product) => {
			new_product_string = "<div class='product_display'>"
			//image
			new_product_string += '<img style="width:160px;" src="http://localhost:5000/api/GetItemPhoto/' + product.id + '">'
			new_product_string += '<div class="product_text">'
			new_product_string += '<h3>' + product.name + '</h3>'
			new_product_string += '<h4>$' + product.price + '</h4>'
			new_product_string += '<h4>' + product.description + '</h4>'
			new_product_string += '<button class="btn_default sm" onclick="buy_product(' + product.id + ',\'' + (product.name.split("'").join("")) + '\')">Buy Now</button>'
			new_product_string += '</div></div>'
			html_string += new_product_string
		}
		products.forEach(add_product)
		document.getElementById("product-lists").innerHTML = html_string
	}
}

function buy_product(product_id, product_name){
	if(user_credentials == ""){
		login_click();
	} else {
		const getVersion = 
			fetch('http://localhost:5000/api/PurchaseSingleItem/'+product_id,
				{
					headers : {
						'Authorization': 'Basic '+btoa(user_credentials),
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					method : "GET"
				})
			.then((response) => response.text())
			.then(function(order_text) {
				order_details = JSON.parse(order_text);
				string_out = "Thank You, " + order_details.userName + " for purchasing a " + product_name + ".<br> Your order number is: " + order_details.id
				document.getElementById("overpage_contents").innerHTML = string_out
				document.getElementById("overpage_display").style.display = "block"

			});
	}
}

function search_input_updated(){
	
	input_value = document.getElementById("search-input").value
	update_products(input_value)
}

function update_iframe(){
	document.getElementById('comments-iframe').src = "http://localhost:5000/api/GetComments"
	
}

function setup_login(){
	clear_sign_in_inputs()
	document.getElementById("address_container").style.display = "none";
	document.getElementById("login_title").innerHTML = "Login below to use our store"
	document.getElementById("button_label").innerHTML = "Not a SHIT member yet? Register below!"
	document.getElementById("login_register").innerHTML = '<button class="btn_default md" onclick="register_click()">Register</button>'
	document.getElementById("login_submit_button").innerHTML = '<button class="btn_default md" onclick="login_user()">Login</button>'
}

function setup_register(){
	clear_sign_in_inputs()
	document.getElementById("address_container").style.display = "block";
	document.getElementById("login_title").innerHTML = "Register today and get instant access to SHIT Merch"
	document.getElementById("button_label").innerHTML = "Already SHIT registered? Login below!"
	document.getElementById("login_register").innerHTML = '<button class="btn_default md" onclick="login_click()">Login</button>'
	document.getElementById("login_submit_button").innerHTML = '<button class="btn_default md" onclick="register_user()">Register</button>'
}

function register_user(){
	username_input = document.getElementById("username").value
	password_input = document.getElementById("password").value
	address_input = document.getElementById("address").value
	
	if(username_input == ""){
		document.getElementById("login_register_error").innerHTML = "Invalid username! The username field is required."
	}else if(password_input == ""){
		document.getElementById("login_register_error").innerHTML = "Invalid pass! The Password field is required."
	}else {
		register_string = '{ "UserName": "' + username_input + '", "Password": "' + password_input + '", "Address": "' + address_input + '" }';
		const post_comment = 
			fetch('http://localhost:5000/api/Register',
			{
				headers : {
					'Content-Type': 'application/json'
				},
				method : "POST",
				body : register_string
			})
			.then((response) => response.text())
			.then((message) => document.getElementById("login_register_error").innerHTML = (message));
	}
}

function login_user(){
	username_input = document.getElementById("username").value
	password_input = document.getElementById("password").value
	
	if(username_input == ""){
		document.getElementById("login_register_error").innerHTML = "Invalid username! The username field is required."
	}else if(password_input == ""){
		document.getElementById("login_register_error").innerHTML = "Invalid pass! The Password field is required."
	}else {
		credentials = String(username_input + ":" + password_input)
		const getVersion = 
			fetch('http://localhost:5000/api/GetVersionA',
				{
					headers : {
						'Authorization': 'Basic '+btoa(credentials),
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					method : "GET"
				})
			.then(response => response.status)
			.then(function(status_code) {
				if(status_code == "200"){
					document.getElementById("login_register_error").innerHTML = ""
					user_credentials = credentials
					sign_in_user(username_input);
					document.getElementById("overpage_contents").innerHTML = "successfully signed in!"
					document.getElementById("overpage_display").style.display = "block"
					return_to_page()
				} else {
					document.getElementById("login_register_error").innerHTML = "Invalid credentials!"
				}
			})
			.catch(function(error)
			{
				
			});
	}
}

function return_to_page(){
	if(cur_page == 'staff')
		staff_clicked()
	else if(cur_page == 'shop')
		shop_clicked()
	else if(cur_page == 'book')
		guest_book_clicked()
	else
		home_clicked()
}

function sign_in_user(username){
	
	string_out = "<div style='text-align:center;'>Welcome " + username + "!<br>"
	string_out += '<button style="margin-top: 1px;"	class="btn_default sm" id="login_button" onclick="sign_out_user()">Logout</button></div>'
	document.getElementById("user_button").innerHTML = string_out
}

function sign_out_user(){
	document.getElementById("user_button").innerHTML = '<button class="btn_default lg" id="login_button" onclick="login_click()">Login/Register</button>'
	user_credentials = ""
	document.getElementById("overpage_contents").innerHTML = "successfully signed out!"
	document.getElementById("overpage_display").style.display = "block"
	return_to_page()
}

function clear_sign_in_inputs(){
	document.getElementById("username").value = ''
	document.getElementById("password").value = ''
	document.getElementById("address").value = ''
	document.getElementById("login_register_error").innerHTML = ''
}