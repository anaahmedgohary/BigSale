import laptops from "/src/assets/images/ghazawy/2laps.jpg";
import legion5 from "/src/assets/images/ghazawy/lenovo-laptop-legion-5.png";
import HPZBook15 from "/src/assets/images/ghazawy/hp-zbook-15-g3.jpg";


const laptopData = [

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

];

laptopData.forEach((item) =>
{
    // dicount calc
    item.dicount = item.price - item.originalPrice;

    // dicount Percent calc
    item.dicountPercent = Math.floor(((item.originalPrice - item.price) / item.originalPrice) * 100) + "%";

    // item id 
    item.id = laptopData.indexOf(item) + "laptop";
});

export default laptopData;