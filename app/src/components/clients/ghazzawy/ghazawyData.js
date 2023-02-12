import laptops from "assets/images/ghazawy/2laps.jpg";
import iphone10 from "assets/images/ghazawy/Apple-iPhone-X-1-600x600.jpg";
import samsungj7 from "assets/images/ghazawy/samsung_xxl_23147701_32725484.jpg";
import HUAWEIP50 from "assets/images/ghazawy/P50.jpg";
import legion5 from "assets/images/ghazawy/lenovo-laptop-legion-5.png";
import HPZBook15 from "assets/images/ghazawy/hp-zbook-15-g3.jpg";




const ghazawyOffers = [

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
        period: "6 days"
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
        period: "6 days"
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
        period: "6 days"
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
        period: "6 days"
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
        period: "3 days"
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
        period: "4 days"
    },

];

ghazawyOffers.forEach((item) =>
{
    // dicount calc
    item.dicount = item.price - item.originalPrice;

    // dicount Percent calc
    item.dicountPercent = Math.floor(((item.originalPrice - item.price) / item.originalPrice) * 100) + "%";

    // item id 
    item.id = ghazawyOffers.indexOf(item) + "ghazawy";
});

export default ghazawyOffers;