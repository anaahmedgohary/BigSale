 import Ningmei from "/src/assets/images/products/desktops/Ningmei.png";
import DellOptiplex from "/src/assets/images/products/desktops/dell00.png";
import HPSlim from "/src/assets/images/products/desktops/hp00.png";
// import lolo from '/'
// import HUAWEIP50 from "/src/assets/images/products/desktops/";



const desktopsData = [
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
];

desktopsData.forEach((item) =>
{
    // dicount calc
    item.dicount = item.price - item.originalPrice;

    // dicount Percent calc
    item.dicountPercent = Math.floor(((item.originalPrice - item.price) / item.originalPrice) * 100) + "%";

    // item id 
    item.id = desktopsData.indexOf(item) + "desktop";
});




export default desktopsData;