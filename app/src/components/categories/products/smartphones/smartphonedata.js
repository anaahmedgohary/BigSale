
import iphone10 from "/src/assets/images/ghazawy/Apple-iPhone-X-1-600x600.jpg";
import samsungj7 from "/src/assets/images/ghazawy/samsung_xxl_23147701_32725484.jpg";
import HUAWEIP50 from "/src/assets/images/ghazawy/P50.jpg";



const smartphoneData = [
    
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

smartphoneData.forEach((item) =>
{
    // dicount calc
    item.dicount = item.price - item.originalPrice;

    // dicount Percent calc
    item.dicountPercent = Math.floor(((item.originalPrice - item.price) / item.originalPrice) * 100) + "%";

    // item id 
    item.id = smartphoneData.indexOf(item) + "smartphone";
});




export default smartphoneData;