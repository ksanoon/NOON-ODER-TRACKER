// Dummy tracking orders
const orders = [
 { "trackingNumber":"2000", "name":"Lalbacha", "phone":"+966****145", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"18 June" },
{ "trackingNumber":"2001", "name":"BELlAL", "phone":"+966****985", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"18 June" },
{ "trackingNumber":"2002", "name":"Faiz Ali", "phone":"+966****767", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"19 June" },
{ "trackingNumber":"2003", "name":"Muhammad Sajid", "phone":"+966****335", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"19 June" },
{ "trackingNumber":"2004", "name":"سلیم", "phone":"+966****805", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"18 June" },
{ "trackingNumber":"2005", "name":"Shamshad Khan", "phone":"+966****742", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"21 June" },
{ "trackingNumber":"2006", "name":"Ram", "phone":"+966****017", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"20 June" },
{ "trackingNumber":"2007", "name":"Khadam Hussain", "phone":"+966****852", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"19 June" },
{ "trackingNumber":"2008", "name":"Aftab alam", "phone":"+966****280", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"20 June" },
{ "trackingNumber":"2009", "name":"Mohsin shah", "phone":"+966****149", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"19 June" },
{ "trackingNumber":"2010", "name":"Saad Khan", "phone":"+966****384", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"19 June" },
{ "trackingNumber":"2011", "name":"Rashadul islam", "phone":"+966****126", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"24 June" },
{ "trackingNumber":"2012", "name":"Sifat khan", "phone":"+966****950", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"19 June" },
{ "trackingNumber":"2013", "name":"MOHAMMED sikandar", "phone":"+966****824", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"19 June" },
{ "trackingNumber":"2014", "name":"Taif", "phone":"+966****756", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"20 June" },
{ "trackingNumber":"2015", "name":"Altaf hussain", "phone":"+966****349", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"20 June" },
{ "trackingNumber":"2016", "name":"Bhuttu miya mondal", "phone":"+966****797", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"20 June" },
{ "trackingNumber":"2017", "name":"M imran", "phone":"+966****536", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"20 June" },
{ "trackingNumber":"2018", "name":"Md Sahajan", "phone":"+966****272", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"20 June" },
{ "trackingNumber":"2019", "name":"Ahsan", "phone":"+966****201", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"19 June" },
{ "trackingNumber":"2020", "name":"Sumer shaik", "phone":"+966****994", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"20 June" },
{ "trackingNumber":"2021", "name":"Fayas", "phone":"+966****280", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"20 June" },
{ "trackingNumber":"2022", "name":"Abubakar", "phone":"+966****566", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"20 June" },
{ "trackingNumber":"2023", "name":"Ramesh Gautam", "phone":"+966****013", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"19 June" },
{ "trackingNumber":"2024", "name":"Sohail", "phone":"+966****484", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"20 June" },
{ "trackingNumber":"2025", "name":"Saleem ullha", "phone":"+966****625", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"22 June" },
{ "trackingNumber":"2026", "name":"Sahvan", "phone":"+966****561", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"24 June" },
{ "trackingNumber":"2027", "name":"Chand", "phone":"+966****427", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"20 June" },
{ "trackingNumber":"2028", "name":"Imran Khan", "phone":"+966****290", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"21 June" },
{ "trackingNumber":"2029", "name":"شمس العالم", "phone":"+966****053", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"21 June" },
{ "trackingNumber":"2030", "name":"Arshad", "phone":"+966****851", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"22 June" },
{ "trackingNumber":"2031", "name":"Israj Ali", "phone":"+966****423", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"21 June" },
{ "trackingNumber":"2032", "name":"Robin", "phone":"+966****062", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"20 June" },
{ "trackingNumber":"2033", "name":"Mohd Yunus Mohd Ramzan", "phone":"+966****728", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"23 June" },
{ "trackingNumber":"2034", "name":"Muhammad tariq", "phone":"+966****416", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"22 June" },
{ "trackingNumber":"2035", "name":"Muhammad luqman", "phone":"+966****641", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"20 June" },
{ "trackingNumber":"2036", "name":"Akbar din", "phone":"+966****773", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"21 June" },
{ "trackingNumber":"2037", "name":"Wasim", "phone":"+966****259", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"21 June" },
{ "trackingNumber":"2038", "name":"Khaibat Khan", "phone":"+966****029", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"20 June" },
{ "trackingNumber":"2039", "name":"Arafat Hossain", "phone":"+966****360", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"24 June" },
{ "trackingNumber":"2040", "name":"Amjad khan", "phone":"+966****642", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"21 June" },
{ "trackingNumber":"2041", "name":"nazrul islam", "phone":"+966****258", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"21 June" },
{ "trackingNumber":"2042", "name":"Dhana Krishna shrestha", "phone":"+966****595", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"21 June" },
{ "trackingNumber":"2043", "name":"salim uddin", "phone":"+966****397", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"21 June" },
{ "trackingNumber":"2044", "name":"Dinesh", "phone":"+966****039", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"22 June" },
{ "trackingNumber":"2045", "name":"Umar", "phone":"+966****809", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"20 June" },
{ "trackingNumber":"2046", "name":"Rahman Bhallu", "phone":"+966****117", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"21 June" },
{ "trackingNumber":"2047", "name":"Danish", "phone":"+966****988", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"25 June" },
{ "trackingNumber":"2048", "name":"Zabih khan", "phone":"+966****414", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"21 June" },
{ "trackingNumber":"2049", "name":"Irshad ali", "phone":"+966****059", "delivery":"400 <span style='font-family: Arial;'>&#65020;</span>", "date":"25 June" },
{ "trackingNumber":"2050","name":"Muhammad Haroon","phone":"+966****634","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2051","name":"Musa","phone":"+966****383","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 June" },
{ "trackingNumber":"2052","name":"Mehran","phone":"+966****529","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2053","name":"Nashit khan","phone":"+966****933","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2054","name":"Kashif","phone":"+966****437","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2055","name":"Ishaq","phone":"+966****267","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2056","name":"Muzammil","phone":"+966****876","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 June" },
{ "trackingNumber":"2057","name":"Waqas","phone":"+966****784","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2058","name":"Rana Mubashir","phone":"+966****201","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 June" },
{ "trackingNumber":"2059","name":"Sufiyan","phone":"+966****582","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2060","name":"Shan Ali","phone":"+966****345","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2061","name":"Shahid","phone":"+966****412","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2062","name":"Saif","phone":"+966****951","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2063","name":"Usman","phone":"+966****501","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2064","name":"Zohaib","phone":"+966****604","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2065","name":"Nadeem","phone":"+966****826","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2066","name":"Waseem","phone":"+966****652","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2067","name":"Zeeshan","phone":"+966****883","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2068","name":"Ibrahim","phone":"+966****273","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2069","name":"Yousuf","phone":"+966****302","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2070","name":"Khalid","phone":"+966****775","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2071","name":"Faizan","phone":"+966****918","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2072","name":"Ahmed","phone":"+966****139","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2073","name":"Bilal","phone":"+966****437","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2074","name":"Adeel","phone":"+966****278","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2075","name":"Tariq","phone":"+966****843","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2076","name":"Junaid","phone":"+966****620","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2077","name":"Adnan","phone":"+966****103","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2078","name":"Faisal","phone":"+966****271","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2079","name":"Asad","phone":"+966****547","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2080","name":"Rehan","phone":"+966****950","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2081","name":"Rizwan","phone":"+966****261","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2082","name":"Imran","phone":"+966****129","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2083","name":"Ali","phone":"+966****112","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2084","name":"Taimoor","phone":"+966****274","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2085","name":"Javed","phone":"+966****284","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2086","name":"Haseeb","phone":"+966****661","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2087","name":"Noman","phone":"+966****734","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2088","name":"Mehmood","phone":"+966****310","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2089","name":"Sabir","phone":"+966****395","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2090","name":"Owais","phone":"+966****756","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2091","name":"Saad","phone":"+966****213","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2092","name":"Kamran","phone":"+966****489","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2093","name":"Sher Khan","phone":"+966****084","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2094","name":"Jahir","phone":"+966****256","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2095","name":"Anis Raj","phone":"+966****736","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"25 June" },
{ "trackingNumber":"2096","name":"Mb kobir Hosssin","phone":"+966****770","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 June" },
{ "trackingNumber":"2097","name":"Rajendran","phone":"+966****312","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 June" },
{ "trackingNumber":"2098","name":"nisar","phone":"+966****878","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 June" },
{ "trackingNumber":"2099","name":"Sadaqat Ali","phone":"+966****843","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 June" },
{ "trackingNumber":"2100","name":"Md jabed ahmed somraj","phone":"+966****025","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 June" },
{ "trackingNumber":"2101","name":"lirfan","phone":"+966****204","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 June" },
{ "trackingNumber":"2102","name":"Aaftab","phone":"+966****033","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 June" },
{ "trackingNumber":"2103","name":"RJFOYSALAHMED.","phone":"+966****691","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 June" },
{ "trackingNumber":"2104","name":"IMRAN mahmood","phone":"+966****802","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 June" },
{ "trackingNumber":"2105","name":"M.hussain","phone":"+966****229","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 June" },
{ "trackingNumber":"2106","name":"Imamdin","phone":"+966****260","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 June" },
{ "trackingNumber":"2107","name":"Shahid Ali","phone":"+966****549","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 June" },
{ "trackingNumber":"2108","name":"Ashaim","phone":"+966****355","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 June" },
{ "trackingNumber":"2109","name":"Ibrahim khalil","phone":"+966****068","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 June" },
{ "trackingNumber":"2110","name":"Haseeb Raza","phone":"+966****607","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 June" },
{ "trackingNumber":"2111","name":"IMAM HOSSAIN","phone":"+966****619","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 June" },
{ "trackingNumber":"2112","name":"Muhammad Noorullah jan","phone":"+966****026","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 June" },
{ "trackingNumber":"2113","name":"Hasibullah","phone":"+966****953","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 June" },
{ "trackingNumber":"2114","name":"Imran khan","phone":"+966****574","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 June" },
{ "trackingNumber":"2115","name":"Muhammad shahbaz","phone":"+966****430","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 June" },
{ "trackingNumber":"2116","name":"Muhammad sadeeq","phone":"+966****618","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 June" },
{ "trackingNumber":"2117","name":"Tahir Ali","phone":"+966****568","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 June" },
{ "trackingNumber":"2118","name":"Shamshuddin","phone":"+966****627","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 June" },
{ "trackingNumber":"2119","name":"ممتاز محمد علی","phone":"+966****202","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 June" },
{ "trackingNumber":"2120","name":"Muhammad yousaf","phone":"+966****286","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 June" },
{ "trackingNumber":"2121","name":"Izaz ullah","phone":"+966****443","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"26 June" },
{ "trackingNumber":"2122","name":"Sherax khan","phone":"+966****710","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 June" },
{ "trackingNumber":"2123","name":"Farhan AHMED","phone":"+966****859","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 June" },
{ "trackingNumber":"2124","name":"Iftikhar Anjum","phone":"+966****758","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 June" },
{ "trackingNumber":"2125","name":"Muhib ullah","phone":"+966****137","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"1 July" },
{ "trackingNumber":"2126","name":"Amir","phone":"+966****217","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 June" },
{ "trackingNumber":"2127","name":"Anowar Hossain","phone":"+966****835","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 June" },
{ "trackingNumber":"2128","name":"Sultanzeb","phone":"+966****987","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 June" },
{ "trackingNumber":"2129","name":"Aftab shaban khan","phone":"+966****610","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 June" },
{ "trackingNumber":"2130","name":"Parvez Ali","phone":"+966****714","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 June" },
{ "trackingNumber":"2131","name":"Md Abusiddik","phone":"+966****673","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 June" },


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
