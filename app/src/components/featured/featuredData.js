import Ningmei from "/src/assets/images/products/desktops/Ningmei.png";
import DellOptiplex from "/src/assets/images/products/desktops/dell00.png";
import HPSlim from "/src/assets/images/products/desktops/hp00.png";
// import lolo from '/'
// import HUAWEIP50 from "/src/assets/images/products/desktops/";
import laptops from "/src/assets/images/ghazawy/2laps.jpg";
import legion5 from "/src/assets/images/ghazawy/lenovo-laptop-legion-5.png";
import HPZBook15 from "/src/assets/images/ghazawy/hp-zbook-15-g3.jpg";
import iphone10 from "/src/assets/images/ghazawy/Apple-iPhone-X-1-600x600.jpg";
import samsungj7 from "/src/assets/images/ghazawy/samsung_xxl_23147701_32725484.jpg";
import HUAWEIP50 from "/src/assets/images/ghazawy/P50.jpg";



const featData = [
    {
        id: "2",
        img: Ningmei,
        name: "Ningmei i5 8500/GTX1050Ti PC",
        category: "Desktops",
        brand: "Ningmei",
        quantity: "1",
        price: 25000,
        originalPrice: 26500,
        dicount: "",
        dicountPercent: "",
        dateAdded: "15/11/2022",
        period: "6 days"
    },
    {
        id: "3",
        img: DellOptiplex,
        name: "Dell Optiplex 5060",
        category: "Desktops",
        brand: "Dell",
        quantity: "1",
        price: 12280,
        originalPrice: 13000,
        dicount: "",
        dicountPercent: "",
        dateAdded: "15/11/2022",
        period: "6 days"
    },
    {
        id: "4",
        img: HPSlim,
        name: "HP Slim Desktop S01-pF2130st",
        category: "Desktops",
        brand: "HP",
        quantity: "1",
        price: 18000,
        originalPrice: 19100,
        dicount: "",
        dicountPercent: "",
        dateAdded: "15/11/2022",
        period: "6 days"
    },
    {
        id: "0a",
        img: laptops,
        name: "Dell Inspiron 5570",
        category: "laptops",
        brand: "dell",
        quantity: "1",
        price: 17000,
        originalPrice: 18000,
        dicount: "",
        dicountPercent: "",
        dateAdded: "15/11/2022",
        period: "6 days",
        provider: "Ghazawy",
    },
    {
        id: "5",
        img: legion5,
        name: "Lenovo Legion 5",
        category: "laptops",
        brand: "Lenovo",
        quantity: "1",
        price: 24000,
        originalPrice: 26000,
        dicount: "",
        dicountPercent: "",
        dateAdded: "15/11/2022",
        period: "3 days",
        provider: "Amana",
    },
    {
        id: "6",
        img: HPZBook15,
        name: "HP ZBook 15 G3",
        category: "laptops",
        brand: "HP",
        quantity: "1",
        price: 12000,
        originalPrice: 15000,
        dicount: "",
        dicountPercent: "",
        dateAdded: "15/11/2022",
        period: "4 days",
        provider: "Hyper",
    },
    {
        id: "2",
        img: iphone10,
        name: "Iphone 10",
        category: "smart phones",
        brand: "iphone",
        quantity: "1",
        price: 15000,
        originalPrice: 17000,
        dicount: "",
        dicountPercent: "",
        dateAdded: "15/11/2022",
        period: "6 days",
        provider: "Ghazawy",
    },
    {
        id: "3",
        img: samsungj7,
        name: "samsung j7 pro",
        category: "smart phones",
        brand: "samsung",
        quantity: "1",
        price: 2280,
        originalPrice: 3000,
        dicount: "",
        dicountPercent: "",
        dateAdded: "15/11/2022",
        period: "6 days",
        provider: "Amana",
    },
    {
        id: "4",
        img: HUAWEIP50,
        name: "HUAWEI P50 Pro",
        category: "smart phones",
        brand: "huawei",
        quantity: "2",
        price: 25000,
        originalPrice: 26100,
        dicount: "",
        dicountPercent: "",
        dateAdded: "15/11/2022",
        period: "6 days",
        provider: "Hyper",
    },
];

featData.forEach((item) =>
{
    // dicount calc
    item.dicount = item.price - item.originalPrice;

    // dicount Percent calc
    item.dicountPercent = Math.floor(((item.originalPrice - item.price) / item.originalPrice) * 100) + "%";

    // item id 
    item.id = featData.indexOf(item) + "desktop";
});




export default featData;