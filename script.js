// Dummy tracking orders
const orders = [
  { trackingNumber: "1772", name: "Muhibbulla", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "1 May" },
  { trackingNumber: "1773", name: "Hasnain Quraishi", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "4 June" },
  // ... baki data yahan paste karen ...
  { trackingNumber: "1772", name: "Muhibbulla", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "1 May" },
  { trackingNumber: "1773", name: "Hasnain Quraishi", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "4 June" },
  { trackingNumber: "1774", name: "Rajo", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 June" },
  { trackingNumber: "1775", name: "MJAVE", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 June" },
  { trackingNumber: "1776", name: "Abid rafique", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "1 June" },
  { trackingNumber: "1777", name: "Shoaib Madni", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "8 Jun" },
  { trackingNumber: "1778", name: "Sk Shahnawaz", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "1 June" },
  { trackingNumber: "1779", name: "Muhammad Aasim", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 June" },
  { trackingNumber: "1780", name: "Resalathkhan", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 June" },
  { trackingNumber: "1781", name: "BIR PAKHRIN", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "8 Jun" },
  { trackingNumber: "1782", name: "Kabir Alam", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 June" },
  { trackingNumber: "1783", name: "Klton khan", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "3 June" },
  { trackingNumber: "1784", name: "Faysal hussin", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 June" },
  { trackingNumber: "1785", name: "Fareed Khan", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "1 June" },
  { trackingNumber: "1786", name: "الطاف", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "1 June" },
  { trackingNumber: "1787", name: "Azaz", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "8 June" },
  { trackingNumber: "1788", name: "MohdTahir", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "1 June" },
  { trackingNumber: "1789", name: "Nasrallah Muhammad rafique", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 Jun" },
  { trackingNumber: "1790", name: "Akram", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 June" },
  { trackingNumber: "1791", name: "Abdul Wahid", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "3 June" },
  { trackingNumber: "1792", name: "Ilyas", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "4 Jun" },
  { trackingNumber: "1793", name: "Niazgull", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 June" },
  { trackingNumber: "1794", name: "ضیاء اللہ", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 June" },
  { trackingNumber: "1795", name: "Abdul QUDDUS", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "5 June" },
  { trackingNumber: "1796", name: "Deedar Hussain", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 June" },
  { trackingNumber: "1797", name: "Muhammad usman", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "1 June" },
  { trackingNumber: "1798", name: "Shahzada Khan", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "4 June" },
  { trackingNumber: "1799", name: "RAM kebal", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 Jun" },
  { trackingNumber: "1800", name: "Zahad", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 Jun" },
  { trackingNumber: "1801", name: "Naseem Ahmad", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 Jun" },
  { trackingNumber: "1802", name: "Mazhar Jabbar", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "3 Jun" },
  { trackingNumber: "1803", name: "Abdul Wahid khan", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "3 Jun" },
  { trackingNumber: "1804", name: "Arman", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "3 Jun" },
  { trackingNumber: "1805", name: "Md. Robiul", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 June" },
  { trackingNumber: "1806", name: "Mohammad Asif Khan", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "9 Jun" },
  { trackingNumber: "1807", name: "ArshadAli", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 June" },
  { trackingNumber: "1808", name: "Rashid.ali", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "2 Jun" },
  { trackingNumber: "1809", name: "Jiyarulsk", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "3 June" },
  { trackingNumber: "1810", name: "Durganand Goit", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "4 June" },
  { trackingNumber: "1811", name: "Hafeez", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "3 June" },
  { trackingNumber: "1812", name: "Saddam Hussein", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "3 Jun" },
  { trackingNumber: "1813", name: "Mukesh Adhikari", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "3 June" },
  { trackingNumber: "1814", name: "Wajid Ali soomro", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "3 June" },
  { trackingNumber: "1815", name: "Mohammad Tayab", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "3 Jun" },
  { trackingNumber: "1816", name: "Sabir", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "4 June" },
  { trackingNumber: "1817", name: "Mohammed Jaan", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "3 June" },
  { trackingNumber: "1818", name: "Jaher udin", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "4 June" },
  { trackingNumber: "1819", name: "Mdripon Ahmed", phone: "+966*******", delivery: "400 <span style='font-family: Arial;'>&#65020;</span>", date: "4 June" },

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
