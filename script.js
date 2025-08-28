// Dummy tracking orders
const orders = [
{"trackingNumber":"22","name":"Mudassarnaseem","phone":"+966****9208","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 Aug"},
{"trackingNumber":"23","name":"Zahid Hussain","phone":"+966****5271","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"23 August"},
{"trackingNumber":"24","name":"Kishwar khan","phone":"+966****0096","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"23 August"},
{"trackingNumber":"25","name":"Muhamad abu bakar","phone":"+966****3384","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 Aug"},
{"trackingNumber":"26","name":"Shar khan","phone":"+966****0387","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"23 August"},
{"trackingNumber":"27","name":"Abu jahed","phone":"+966****9709","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"24 August"},
{"trackingNumber":"28","name":"Umar zeb","phone":"+966****5023","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"24 Aug"},
{"trackingNumber":"29","name":"Muslim","phone":"+966****8795","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"23 August"},
{"trackingNumber":"30","name":"Asghar","phone":"+966****3431","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"24 August"},
{"trackingNumber":"31","name":"Muhammad sajid","phone":"+966****5894","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"23 August"},
{"trackingNumber":"32","name":"Muhammad saled","phone":"+966****8248","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"24 Aug"},
{"trackingNumber":"33","name":"Sherali","phone":"+966****5990","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"24 Aug"},
{"trackingNumber":"34","name":"Mohammad Farooq","phone":"+966****9062","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"24 August"},
{"trackingNumber":"35","name":"ماجد علی محمد منور راڑھی","phone":"+966****3510","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 Aug"},
{"trackingNumber":"36","name":"Naseer","phone":"+966****4277","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 August"},
{"trackingNumber":"37","name":"monirul","phone":"+966****6533","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 August"},
{"trackingNumber":"38","name":"HUSSAIN AHMAD","phone":"+966****9344","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 August"},
{"trackingNumber":"39","name":"Shahanawaj khan","phone":"+966****3370","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"24 August"},
{"trackingNumber":"40","name":"Mohammed sha","phone":"+966****1194","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 August"},
{"trackingNumber":"41","name":"Shahnawaz","phone":"+966****1846","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 August"},
{"trackingNumber":"42","name":"Barkat khan","phone":"+966****9481","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 Aug"},
{"trackingNumber":"43","name":"MD Alam","phone":"+966****8395","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 August"},
{"trackingNumber":"44","name":"Mizanur Rahman","phone":"+966****0751","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 August"},
{"trackingNumber":"45","name":"Rohit paswan","phone":"+966****2421","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 August"},
{"trackingNumber":"46","name":"Kiron","phone":"+966****2480","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 August"},
{"trackingNumber":"47","name":"Amir alam","phone":"+966****7816","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 August"},
{"trackingNumber":"48","name":"Md Ridoy","phone":"+966****1289","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 August"},
{"trackingNumber":"49","name":"Mubeen Ahmad","phone":"+966****4553","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 Aug"},
{"trackingNumber":"50","name":"Amir Khan","phone":"+966****4843","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 Aug"},
{"trackingNumber":"51","name":"M.shahid","phone":"+966****5461","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 Aug"},
{"trackingNumber":"52","name":"Faizan Ali","phone":"+966****2139","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 August"},
{"trackingNumber":"53","name":"Javed","phone":"+966****0365","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 Aug"},
{"trackingNumber":"54","name":"Raham badshah","phone":"+966****0538","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 Aug"},
{"trackingNumber":"55","name":"MD SARFARAJ","phone":"+966****3483","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 Aug"},
{"trackingNumber":"56","name":"Zafeer","phone":"+966****4851","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 Aug"},
{"trackingNumber":"57","name":"Md bappy","phone":"+966****1602","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 August"},
{"trackingNumber":"58","name":"Alamgir","phone":"+966****7850","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 August"},
{"trackingNumber":"59","name":"Hossain","phone":"+966****1801","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 August"},
{"trackingNumber":"60","name":"Asfandyar","phone":"+966****9525","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 August"},
{"trackingNumber":"61","name":"Nasir Ali","phone":"+966****1202","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 Aug"},
{"trackingNumber":"62","name":"Sarwar jutt","phone":"+966****3470","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 August"},
{"trackingNumber":"63","name":"Zakir Hussain Chohan","phone":"+966****9760","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 August"},
{"trackingNumber":"64","name":"Raj","phone":"+966****7581","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 August"},
{"trackingNumber":"65","name":"Usman","phone":"+966****6748","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 August"},
{"trackingNumber":"66","name":"ilyas shah","phone":"+966****6412","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 August"},
{"trackingNumber":"67","name":"Ubaid Hussain","phone":"+966****3798","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 Aug"},
{"trackingNumber":"68","name":"Anayatullah","phone":"+966****4993","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 August"},
{"trackingNumber":"69","name":"Rafi ullah","phone":"+966****3988","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 August"},
{"trackingNumber":"70","name":"Monir Molla","phone":"+966****1765","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 August"},
{"trackingNumber":"71","name":"Muhammad nazik","phone":"+966****0633","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 August"},
{"trackingNumber":"72","name":"Izhar","phone":"+966****5526","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 Aug"},
{"trackingNumber":"73","name":"Muhammad Amjad","phone":"+966****2150","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 Aug"},
{"trackingNumber":"74","name":"Bilayet Ahmed","phone":"+966****6344","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 Aug"},
{"trackingNumber":"75","name":"عمرحمحر","phone":"+966****7579","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 Aug"},
{"trackingNumber":"76","name":"Aftab Hussain","phone":"+966****0670","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 Aug"},
{"trackingNumber":"77","name":"Mohd kyyum","phone":"+966****6408","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"1 September"},
{"trackingNumber":"78","name":"AHASHAN","phone":"+966****6863","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 August"},
{"trackingNumber":"79","name":"M waseem","phone":"+966****4152","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 August"},
{"trackingNumber":"80","name":"Sakir nasim","phone":"+966****5201","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 August"},
{"trackingNumber":"81","name":"Muhammad Nadeem","phone":"+966****0466","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 August"},
{"trackingNumber":"82","name":"محمد یونس زہیر اولاھم","phone":"+966****1591","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 August"},
{"trackingNumber":"83","name":"MD Shakil","phone":"+966****2940","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 August"},
{"trackingNumber":"84","name":"Mehadi Hasan","phone":"+966****4260","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 August"},
{"trackingNumber":"85","name":"Chotulal","phone":"+966****9570","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 August"},
{"trackingNumber":"86","name":"Aziz","phone":"+966****2668","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 August"},
{"trackingNumber":"87","name":"Sohag","phone":"+966****4482","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 Aug"},
{"trackingNumber":"88","name":"Mohammed wasi","phone":"+966****2447","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 August"},
{"trackingNumber":"89","name":"Awais","phone":"+966****9358","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 August"},
{"trackingNumber":"90","name":"Waqas Ahmed","phone":"+966****4569","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 August"},
{"trackingNumber":"91","name":"Wajid","phone":"+966****5323","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 August"},
{"trackingNumber":"92","name":"Muhammad sadiq","phone":"+966****2886","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 Aug"},
{"trackingNumber":"93","name":"Salim","phone":"+966****2675","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 Aug"},
{"trackingNumber":"94","name":"Samsul","phone":"+966****4249","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 August"},
{"trackingNumber":"95","name":"Abid majnoon","phone":"+966****1463","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 August"},
{"trackingNumber":"96","name":"Minhaje","phone":"+966****7415","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 August"},
{"trackingNumber":"97","name":"Mohammad jahir","phone":"+966****3280","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 August"},
{"trackingNumber":"98","name":"Sabar ali khan","phone":"+966****7240","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 August"},
{"trackingNumber":"99","name":"Hammad Ali","phone":"+966****3139","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 Aug"},



];


// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 3000);

function showOrderDetails() {
  const orderNumber = document.getElementById('orderNumber').value.trim();
  const order = orders.find(o => o.trackingNumber === orderNumber);

  if (order) {
    document.getElementById('customerName').textContent = order.name;
    document.getElementById('customerPhone').textContent = order.phone;
    document.getElementById('deliveryCharges').innerHTML = order.delivery;
    document.getElementById('deliveryDate').textContent = order.date;
    document.getElementById('orderDetails').classList.remove('hidden');
  } else {
    alert('Invalid tracking number.');
    document.getElementById('orderDetails').classList.add('hidden');
  }
}
