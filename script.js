// Dummy tracking orders
const orders = [
  {"trackingNumber":"1700","name":"Shahzada Khan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 May"},
  {"trackingNumber":"1701","name":"Tokman Lama","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 May"},
  {"trackingNumber":"1702","name":"Md Sohel","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 May"},
  {"trackingNumber":"1703","name":"Shah Afzal","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 May"},
  {"trackingNumber":"1704","name":"Fazal maula","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"27 May"},
  {"trackingNumber":"1705","name":"Arshid riaz","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 May"},
  {"trackingNumber":"1706","name":"Eliash Hossain","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 May"},
  {"trackingNumber":"1707","name":"MD SHAHIDUL ISLAM","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"28 May"},
  {"trackingNumber":"1708","name":"Robel","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 May"},
  {"trackingNumber":"1709","name":"Muhammad Asif","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1710","name":"Mohammed Bilal","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"1 June"},
  {"trackingNumber":"1711","name":"Ayub Khan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 May"},
  {"trackingNumber":"1712","name":"Mohammad Selim","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1713","name":"Mriuh","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 May"},
  {"trackingNumber":"1714","name":"Muhammad Hafeez","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 May"},
  {"trackingNumber":"1715","name":"Salman","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 May"},
  {"trackingNumber":"1716","name":"Meron jaleta","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"1 June"},
  {"trackingNumber":"1717","name":"Shabeer","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 May"},
  {"trackingNumber":"1718","name":"Ghulam Mohyuddin","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 May"},
  {"trackingNumber":"1719","name":"Waseed ur Rahman","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1720","name":"M rasheed","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 May"},
  {"trackingNumber":"1721","name":"Irfan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 May"},
  {"trackingNumber":"1722","name":"Rana Tahir","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 May"},
  {"trackingNumber":"1723","name":"Altaf khan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 May"},
  {"trackingNumber":"1724","name":"Saud khan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 May"},
  {"trackingNumber":"1725","name":"Aziz ullah","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1726","name":"Sujon","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"1 June"},
  {"trackingNumber":"1727","name":"Fawad","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 May"},
  {"trackingNumber":"1728","name":"Aslam","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"29 May"},
  {"trackingNumber":"1729","name":"Mumtaz.khan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1730","name":"Ujjal","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1731","name":"Abdul shafeeq","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 May"},
  {"trackingNumber":"1732","name":"HAZRAT","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1733","name":"Asif nawaz","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 May"},
  {"trackingNumber":"1734","name":"faisal Ch","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 May"},
  {"trackingNumber":"1735","name":"Saifullah","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 May"},
  {"trackingNumber":"1736","name":"Qasim ali","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 May"},
  {"trackingNumber":"1737","name":"Sherafgan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"6 June"},
  {"trackingNumber":"1738","name":"Yasir khan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1739","name":"Sahin Kadir Mollah","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 May"},
  {"trackingNumber":"1740","name":"Salim kathat","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1741","name":"mohd suhail","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1742","name":"Monirul islam","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 May"},
  {"trackingNumber":"1743","name":"Muhammad Ahmed","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 May"},
  {"trackingNumber":"1744","name":"VINOD","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 May"},
  {"trackingNumber":"1745","name":"Maqbool","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 May"},
  {"trackingNumber":"1746","name":"Sher","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 May"},
  {"trackingNumber":"1747","name":"Fahid Ali","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 May"},
  {"trackingNumber":"1748","name":"Ibrarkhan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 May"},
  {"trackingNumber":"1749","name":"Muhammad shabbir","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1750","name":"MDRIPON AHMED","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 May"},
  {"trackingNumber":"1751","name":"MJAVE","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"5 June"},
  {"trackingNumber":"1752","name":"JABBAR","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 May"},
  {"trackingNumber":"1753","name":"Delwar","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"1 June"},
  {"trackingNumber":"1754","name":"Sukhdev Singh","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1755","name":"Mohsin Abbas","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1756","name":"Saroj khan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 May"},
  {"trackingNumber":"1757","name":"Abdul Wahid","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1758","name":"farjan khan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 May"},
  {"trackingNumber":"1759","name":"Suleman Ansari","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"5 June"},
  {"trackingNumber":"1760","name":"Quayum ansari","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 May"},
  {"trackingNumber":"1761","name":"Faysal","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1762","name":"Robiul","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"1 June"},
  {"trackingNumber":"1763","name":"Samir","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 May"},
  {"trackingNumber":"1764","name":"Jaman","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 May"},
  {"trackingNumber":"1765","name":"Jamil Akhtar","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"1 June"},
  {"trackingNumber":"1766","name":"MOHAMMAD TARIKNASEEM","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1767","name":"MUSA ANSARI","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"1 June"},
  {"trackingNumber":"1768","name":"Hizburr","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1769","name":"Sayeed Mohammed","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"30 May"},
  {"trackingNumber":"1770","name":"باشا خان","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 May"},
  {"trackingNumber":"1771","name":"Rajpal","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"31 May"},
  {"trackingNumber":"1772","name":"Muhibbulla","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"1 May"},
  {"trackingNumber":"1773","name":"Hasnain Quraishi","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1774","name":"Rajo","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1775","name":"MJAVE","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1776","name":"Abid rafique","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"1 June"},
  {"trackingNumber":"1777","name":"Shoaib Madni","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"8 Jun"},
  {"trackingNumber":"1778","name":"Sk Shahnawaz","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"1 June"},
  {"trackingNumber":"1779","name":"Muhammad Aasim","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1780","name":"Resalathkhan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1781","name":"BIR PAKHRIN","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"8 Jun"},
  {"trackingNumber":"1782","name":"Kabir Alam","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1783","name":"Klton khan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1784","name":"Faysal hussin","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1785","name":"Fareed Khan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"1 June"},
  {"trackingNumber":"1786","name":"الطاف","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"1 June"},
  {"trackingNumber":"1787","name":"Azaz","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"8 June"},
  {"trackingNumber":"1788","name":"MohdTahir","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"1 June"},
  {"trackingNumber":"1789","name":"Nasrallah Muhammad rafique","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1790","name":"Akram","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1791","name":"Abdul Wahid","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1792","name":"Ilyas","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 Jun"},
  {"trackingNumber":"1793","name":"Niazgull","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1794","name":"ضیاء اللہ","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1795","name":"Abdul QUDDUS","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"5 June"},
  {"trackingNumber":"1796","name":"Deedar Hussain","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1797","name":"Muhammad usman","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"1 June"},
  {"trackingNumber":"1798","name":"Shahzada Khan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1799","name":"RAM kebal","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1800","name":"Zahad","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1801","name":"Naseem Ahmad","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1802","name":"Mazhar Jabbar","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1803","name":"Abdul Wahid khan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1804","name":"Arman","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1805","name":"Md. Robiul","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1806","name":"Mohammad Asif Khan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"9 Jun"},
  {"trackingNumber":"1807","name":"ArshadAli","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1808","name":"Rashid.ali","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"2 June"},
  {"trackingNumber":"1809","name":"Jiyarulsk","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"5 June"},
  {"trackingNumber":"1810","name":"Durganand Goit","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1811","name":"Hafeez","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1812","name":"Saddam Hussein","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1813","name":"Mukesh Adhikari","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1814","name":"Wajid Ali soomro","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1815","name":"Mohammad Tayab","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1816","name":"Sabir","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1817","name":"Mohammed Jaan","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 June"},
  {"trackingNumber":"1818","name":"Jaher udin","phone":"+966**********","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1819","name":"MDRIPON AHMED","phone":"+96650****206","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1820","name":"Salamuddin","phone":"+96650****199","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"11 Jun"},
  {"trackingNumber":"1821","name":"Ayazil","phone":"+96650****233","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1822","name":"Ramzanali","phone":"+96650****031","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 Jun"},
  {"trackingNumber":"1823","name":"Muhammad Sajjad","phone":"+96650****147","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1824","name":"M.Yasir","phone":"+96650****609","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"3 Jun"},
  {"trackingNumber":"1825","name":"Md Aziz","phone":"+96650****635","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1826","name":"Abu sufyan","phone":"+96650****502","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"5 Jun"},
  {"trackingNumber":"1827","name":"Umar","phone":"+96650****157","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1828","name":"Aijaz","phone":"+96650****577","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1829","name":"Eliash","phone":"+96650****857","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1830","name":"Samina","phone":"+96650****143","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1831","name":"Sarab","phone":"+96650****836","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1832","name":"Musthak","phone":"+96650****420","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"7 Jun"},
  {"trackingNumber":"1833","name":"Noorjahan","phone":"+96650****468","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"5 Jun"},
  {"trackingNumber":"1834","name":"Ramjan khan","phone":"+96650****398","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"7 Jun"},
  {"trackingNumber":"1835","name":"Sial bacha","phone":"+96650****042","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 Jun"},
  {"trackingNumber":"1836","name":"Mohammad Naim","phone":"+96650****291","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"5 Jun"},
  {"trackingNumber":"1837","name":"Pappulal Sutiyar","phone":"+96650****812","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"5 Jun"},
  {"trackingNumber":"1838","name":"Billal sk","phone":"+96650****379","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"5 Jun"},
  {"trackingNumber":"1839","name":"Imran","phone":"+96650****732","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"4 June"},
  {"trackingNumber":"1840","name":"Chzameer","phone":"+96650****803","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"7 Jun"},
  {"trackingNumber":"1841","name":"Abdul ali","phone":"+96650****953","delivery":"400 <span style='font-family: Arial;'>&#65020;</span>","date":"5 Jun"},
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
