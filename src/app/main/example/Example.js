import { useEffect } from "react"
import DemoContent from "@fuse/core/DemoContent"

import { styled } from "@mui/material/styles"
import FusePageSimple from "@fuse/core/FusePageSimple"
import { useTranslation } from "react-i18next"

import { useDispatch } from "react-redux"

const Root = styled(FusePageSimple)({
  "& .FusePageSimple-header": {},
  "& .FusePageSimple-toolbar": {},
  "& .FusePageSimple-content": {},
  "& .FusePageSimple-sidebarHeader": {},
  "& .FusePageSimple-sidebarContent": {},
})

const columnLayout = [
  {
    dataField: "name",

    headerText: "Name",

    width: 140,
  },
  {
    dataField: "country",

    headerText: "Country",

    width: 120,
  },
  {
    dataField: "product",

    headerText: "Product",

    width: 120,
  },
  {
    dataField: "quantity",

    headerText: "Quantity",
  },
  {
    dataField: "price",

    headerText: "Price",

    dataType: "numeric",
  },
  {
    dataField: "date",

    headerText: "Date",
  },
]

const dataAUIGrid = [
  {
    id: "#Cust0",
    date: "2014-10-01",
    name: "Steve",
    country: "USA",
    flag: "usa.png",
    product: "IPad Air",
    color: "Green",
    quantity: 20,
    price: 630700,
  },
  {
    id: "#Cust1",
    date: "2014-09-30",
    name: "Emma",
    country: "Korea",
    flag: "korea.png",
    product: "LG G3",
    color: "Pink",
    quantity: 1,
    price: 503800,
  },
  {
    id: "#Cust2",
    date: "2014-09-29",
    name: "Emma",
    country: "Japan",
    flag: "japan.png",
    product: "IPad Air",
    color: "Yellow",
    quantity: 7,
    price: 66900,
  },
  {
    id: "#Cust3",
    date: "2014-09-28",
    name: "Emma",
    country: "UK",
    flag: "uk.png",
    product: "Galaxy Note3",
    color: "Orange",
    quantity: 9,
    price: 458300,
  },
  {
    id: "#Cust4",
    date: "2014-09-27",
    name: "Anna",
    country: "China",
    flag: "china.png",
    product: "LG G3",
    color: "Violet",
    quantity: 10,
    price: 168100,
  },
  {
    id: "#Cust5",
    date: "2014-09-26",
    name: "Anna",
    country: "USA",
    flag: "usa.png",
    product: "Galaxy S5",
    color: "Gray",
    quantity: 3,
    price: 10400,
  },
  {
    id: "#Cust6",
    date: "2014-09-25",
    name: "Lowrence",
    country: "Ireland",
    flag: "ireland.png",
    product: "LG G3",
    color: "Yellow",
    quantity: 12,
    price: 696100,
  },
  {
    id: "#Cust7",
    date: "2014-09-24",
    name: "Lowrence",
    country: "Ireland",
    flag: "ireland.png",
    product: "Galaxy Note3",
    color: "Yellow",
    quantity: 12,
    price: 623600,
  },
  {
    id: "#Cust8",
    date: "2014-09-23",
    name: "Kim",
    country: "Japan",
    flag: "japan.png",
    product: "IPad Air",
    color: "Gray",
    quantity: 7,
    price: 8000,
  },
  {
    id: "#Cust9",
    date: "2014-09-22",
    name: "Kim",
    country: "UK",
    flag: "uk.png",
    product: "Galaxy S5",
    color: "Orange",
    quantity: 9,
    price: 982600,
  },
  {
    id: "#Cust10",
    date: "2014-09-21",
    name: "Jennifer",
    country: "UK",
    flag: "uk.png",
    product: "IPad Air",
    color: "Green",
    quantity: 9,
    price: 800400,
  },
  {
    id: "#Cust11",
    date: "2014-09-20",
    name: "Steve",
    country: "Japan",
    flag: "japan.png",
    product: "Galaxy Note3",
    color: "Yellow",
    quantity: 7,
    price: 740100,
  },
  {
    id: "#Cust12",
    date: "2014-09-19",
    name: "Emma",
    country: "Singapore",
    flag: "singapore.png",
    product: "IPhone 5S",
    color: "Green",
    quantity: 20,
    price: 868400,
  },
  {
    id: "#Cust13",
    date: "2014-09-18",
    name: "Anna",
    country: "Italy",
    flag: "italy.png",
    product: "Galaxy S5",
    color: "Violet",
    quantity: 15,
    price: 266800,
  },
  {
    id: "#Cust14",
    date: "2014-09-17",
    name: "Steve",
    country: "China",
    flag: "china.png",
    product: "IPad Air",
    color: "Pink",
    quantity: 10,
    price: 848100,
  },
  {
    id: "#Cust15",
    date: "2014-09-16",
    name: "Emma",
    country: "Italy",
    flag: "italy.png",
    product: "IPad Air",
    color: "Pink",
    quantity: 15,
    price: 401900,
  },
  {
    id: "#Cust16",
    date: "2014-09-15",
    name: "Anna",
    country: "Singapore",
    flag: "singapore.png",
    product: "IPad Air",
    color: "Green",
    quantity: 20,
    price: 969700,
  },
  {
    id: "#Cust17",
    date: "2014-09-14",
    name: "Steve",
    country: "Japan",
    flag: "japan.png",
    product: "LG G3",
    color: "Orange",
    quantity: 7,
    price: 204700,
  },
  {
    id: "#Cust18",
    date: "2014-09-13",
    name: "Steve",
    country: "Korea",
    flag: "korea.png",
    product: "LG G3",
    color: "Orange",
    quantity: 1,
    price: 808000,
  },
  {
    id: "#Cust19",
    date: "2014-09-12",
    name: "Anna",
    country: "Japan",
    flag: "japan.png",
    product: "Galaxy S5",
    color: "Gray",
    quantity: 7,
    price: 701800,
  },
  {
    id: "#Cust20",
    date: "2014-09-11",
    name: "Kim",
    country: "UK",
    flag: "uk.png",
    product: "IPad Air",
    color: "Pink",
    quantity: 9,
    price: 31000,
  },
  {
    id: "#Cust21",
    date: "2014-09-10",
    name: "Kim",
    country: "China",
    flag: "china.png",
    product: "LG G3",
    color: "Blue",
    quantity: 10,
    price: 640200,
  },
  {
    id: "#Cust22",
    date: "2014-09-09",
    name: "Anna",
    country: "Singapore",
    flag: "singapore.png",
    product: "IPad Air",
    color: "Green",
    quantity: 20,
    price: 149300,
  },
  {
    id: "#Cust23",
    date: "2014-09-08",
    name: "Emma",
    country: "France",
    flag: "france.png",
    product: "IPhone 5S",
    color: "Violet",
    quantity: 0,
    price: 234800,
  },
  {
    id: "#Cust24",
    date: "2014-09-07",
    name: "Kim",
    country: "USA",
    flag: "usa.png",
    product: "IPad Air",
    color: "Gray",
    quantity: 3,
    price: 269000,
  },
  {
    id: "#Cust25",
    date: "2014-09-06",
    name: "Emma",
    country: "Korea",
    flag: "korea.png",
    product: "IPhone 5S",
    color: "Blue",
    quantity: 1,
    price: 917700,
  },
  {
    id: "#Cust26",
    date: "2014-09-05",
    name: "Jennifer",
    country: "China",
    flag: "china.png",
    product: "Galaxy S5",
    color: "Yellow",
    quantity: 10,
    price: 838900,
  },
  {
    id: "#Cust27",
    date: "2014-09-04",
    name: "Jennifer",
    country: "Singapore",
    flag: "singapore.png",
    product: "Galaxy S5",
    color: "Violet",
    quantity: 20,
    price: 93700,
  },
  {
    id: "#Cust28",
    date: "2014-09-03",
    name: "Kim",
    country: "France",
    flag: "france.png",
    product: "IPad Air",
    color: "Blue",
    quantity: 0,
    price: 403500,
  },
  {
    id: "#Cust29",
    date: "2014-09-02",
    name: "Steve",
    country: "UK",
    flag: "uk.png",
    product: "Galaxy Note3",
    color: "Yellow",
    quantity: 9,
    price: 881000,
  },
  {
    id: "#Cust30",
    date: "2014-09-01",
    name: "Lowrence",
    country: "Singapore",
    flag: "singapore.png",
    product: "Galaxy S5",
    color: "Pink",
    quantity: 20,
    price: 348000,
  },
  {
    id: "#Cust31",
    date: "2014-08-31",
    name: "Steve",
    country: "Japan",
    flag: "japan.png",
    product: "IPad Air",
    color: "Gray",
    quantity: 7,
    price: 871700,
  },
  {
    id: "#Cust32",
    date: "2014-08-30",
    name: "Anna",
    country: "UK",
    flag: "uk.png",
    product: "IPhone 5S",
    color: "Yellow",
    quantity: 9,
    price: 653100,
  },
  {
    id: "#Cust33",
    date: "2014-08-29",
    name: "Kim",
    country: "Korea",
    flag: "korea.png",
    product: "IPhone 5S",
    color: "Gray",
    quantity: 1,
    price: 873500,
  },
  {
    id: "#Cust34",
    date: "2014-08-28",
    name: "Steve",
    country: "UK",
    flag: "uk.png",
    product: "IPad Air",
    color: "Orange",
    quantity: 9,
    price: 643600,
  },
  {
    id: "#Cust35",
    date: "2014-08-27",
    name: "Emma",
    country: "Italy",
    flag: "italy.png",
    product: "IPhone 5S",
    color: "Orange",
    quantity: 15,
    price: 664200,
  },
  {
    id: "#Cust36",
    date: "2014-08-26",
    name: "Lowrence",
    country: "China",
    flag: "china.png",
    product: "IPhone 5S",
    color: "Orange",
    quantity: 10,
    price: 736900,
  },
  {
    id: "#Cust37",
    date: "2014-08-25",
    name: "Kim",
    country: "Italy",
    flag: "italy.png",
    product: "Galaxy S5",
    color: "Gray",
    quantity: 15,
    price: 739300,
  },
  {
    id: "#Cust38",
    date: "2014-08-24",
    name: "Lowrence",
    country: "Ireland",
    flag: "ireland.png",
    product: "LG G3",
    color: "Pink",
    quantity: 12,
    price: 195600,
  },
  {
    id: "#Cust39",
    date: "2014-08-23",
    name: "Lowrence",
    country: "Singapore",
    flag: "singapore.png",
    product: "IPhone 5S",
    color: "Pink",
    quantity: 20,
    price: 64500,
  },
  {
    id: "#Cust40",
    date: "2014-08-22",
    name: "Lowrence",
    country: "Singapore",
    flag: "singapore.png",
    product: "IPhone 5S",
    color: "Blue",
    quantity: 20,
    price: 873400,
  },
  {
    id: "#Cust41",
    date: "2014-08-21",
    name: "Steve",
    country: "USA",
    flag: "usa.png",
    product: "IPhone 5S",
    color: "Orange",
    quantity: 3,
    price: 821600,
  },
  {
    id: "#Cust42",
    date: "2014-08-20",
    name: "Kim",
    country: "UK",
    flag: "uk.png",
    product: "Galaxy S5",
    color: "Yellow",
    quantity: 9,
    price: 971100,
  },
  {
    id: "#Cust43",
    date: "2014-08-19",
    name: "Kim",
    country: "China",
    flag: "china.png",
    product: "Galaxy Note3",
    color: "Blue",
    quantity: 10,
    price: 165400,
  },
  {
    id: "#Cust44",
    date: "2014-08-18",
    name: "Jennifer",
    country: "Italy",
    flag: "italy.png",
    product: "IPhone 5S",
    color: "Yellow",
    quantity: 15,
    price: 781600,
  },
  {
    id: "#Cust45",
    date: "2014-08-17",
    name: "Kim",
    country: "Italy",
    flag: "italy.png",
    product: "Galaxy Note3",
    color: "Orange",
    quantity: 15,
    price: 964400,
  },
  {
    id: "#Cust46",
    date: "2014-08-16",
    name: "Jennifer",
    country: "USA",
    flag: "usa.png",
    product: "LG G3",
    color: "Violet",
    quantity: 3,
    price: 441200,
  },
  {
    id: "#Cust47",
    date: "2014-08-15",
    name: "Kim",
    country: "Singapore",
    flag: "singapore.png",
    product: "LG G3",
    color: "Yellow",
    quantity: 20,
    price: 560900,
  },
  {
    id: "#Cust48",
    date: "2014-08-14",
    name: "Lowrence",
    country: "France",
    flag: "france.png",
    product: "Galaxy S5",
    color: "Gray",
    quantity: 0,
    price: 680000,
  },
  {
    id: "#Cust49",
    date: "2014-08-13",
    name: "Steve",
    country: "UK",
    flag: "uk.png",
    product: "Galaxy S5",
    color: "Violet",
    quantity: 9,
    price: 512100,
  },
  {
    id: "#Cust50",
    date: "2014-08-12",
    name: "Jennifer",
    country: "Korea",
    flag: "korea.png",
    product: "IPad Air",
    color: "Yellow",
    quantity: 1,
    price: 572800,
  },
  {
    id: "#Cust51",
    date: "2014-08-11",
    name: "Steve",
    country: "USA",
    flag: "usa.png",
    product: "Galaxy Note3",
    color: "Green",
    quantity: 3,
    price: 345600,
  },
  {
    id: "#Cust52",
    date: "2014-08-10",
    name: "Emma",
    country: "Ireland",
    flag: "ireland.png",
    product: "LG G3",
    color: "Violet",
    quantity: 12,
    price: 287600,
  },
  {
    id: "#Cust53",
    date: "2014-08-09",
    name: "Steve",
    country: "Ireland",
    flag: "ireland.png",
    product: "IPad Air",
    color: "Pink",
    quantity: 12,
    price: 307500,
  },
  {
    id: "#Cust54",
    date: "2014-08-08",
    name: "Emma",
    country: "Korea",
    flag: "korea.png",
    product: "IPhone 5S",
    color: "Yellow",
    quantity: 1,
    price: 835200,
  },
  {
    id: "#Cust55",
    date: "2014-08-07",
    name: "Lowrence",
    country: "Singapore",
    flag: "singapore.png",
    product: "IPad Air",
    color: "Pink",
    quantity: 20,
    price: 112800,
  },
  {
    id: "#Cust56",
    date: "2014-08-06",
    name: "Anna",
    country: "Japan",
    flag: "japan.png",
    product: "IPad Air",
    color: "Orange",
    quantity: 7,
    price: 822200,
  },
  {
    id: "#Cust57",
    date: "2014-08-05",
    name: "Lowrence",
    country: "Singapore",
    flag: "singapore.png",
    product: "Galaxy S5",
    color: "Violet",
    quantity: 20,
    price: 694300,
  },
  {
    id: "#Cust58",
    date: "2014-08-04",
    name: "Jennifer",
    country: "France",
    flag: "france.png",
    product: "LG G3",
    color: "Green",
    quantity: 0,
    price: 197900,
  },
  {
    id: "#Cust59",
    date: "2014-08-03",
    name: "Steve",
    country: "Japan",
    flag: "japan.png",
    product: "IPhone 5S",
    color: "Blue",
    quantity: 7,
    price: 955200,
  },
  {
    id: "#Cust60",
    date: "2014-08-02",
    name: "Kim",
    country: "Korea",
    flag: "korea.png",
    product: "Galaxy Note3",
    color: "Yellow",
    quantity: 1,
    price: 4400,
  },
  {
    id: "#Cust61",
    date: "2014-08-01",
    name: "Emma",
    country: "UK",
    flag: "uk.png",
    product: "Galaxy S5",
    color: "Green",
    quantity: 9,
    price: 517100,
  },
  {
    id: "#Cust62",
    date: "2014-07-31",
    name: "Emma",
    country: "France",
    flag: "france.png",
    product: "Galaxy S5",
    color: "Violet",
    quantity: 0,
    price: 128500,
  },
  {
    id: "#Cust63",
    date: "2014-07-30",
    name: "Lowrence",
    country: "Ireland",
    flag: "ireland.png",
    product: "Galaxy Note3",
    color: "Pink",
    quantity: 12,
    price: 468700,
  },
  {
    id: "#Cust64",
    date: "2014-07-29",
    name: "Lowrence",
    country: "Singapore",
    flag: "singapore.png",
    product: "IPhone 5S",
    color: "Green",
    quantity: 20,
    price: 51100,
  },
  {
    id: "#Cust65",
    date: "2014-07-28",
    name: "Emma",
    country: "Singapore",
    flag: "singapore.png",
    product: "LG G3",
    color: "Gray",
    quantity: 20,
    price: 119300,
  },
  {
    id: "#Cust66",
    date: "2014-07-27",
    name: "Lowrence",
    country: "China",
    flag: "china.png",
    product: "LG G3",
    color: "Yellow",
    quantity: 10,
    price: 595800,
  },
  {
    id: "#Cust67",
    date: "2014-07-26",
    name: "Anna",
    country: "Ireland",
    flag: "ireland.png",
    product: "IPad Air",
    color: "Yellow",
    quantity: 12,
    price: 745200,
  },
  {
    id: "#Cust68",
    date: "2014-07-25",
    name: "Lowrence",
    country: "Singapore",
    flag: "singapore.png",
    product: "LG G3",
    color: "Gray",
    quantity: 20,
    price: 681300,
  },
  {
    id: "#Cust69",
    date: "2014-07-24",
    name: "Anna",
    country: "USA",
    flag: "usa.png",
    product: "Galaxy S5",
    color: "Orange",
    quantity: 3,
    price: 344100,
  },
  {
    id: "#Cust70",
    date: "2014-07-23",
    name: "Lowrence",
    country: "UK",
    flag: "uk.png",
    product: "Galaxy S5",
    color: "Blue",
    quantity: 9,
    price: 69700,
  },
  {
    id: "#Cust71",
    date: "2014-07-22",
    name: "Kim",
    country: "France",
    flag: "france.png",
    product: "Galaxy S5",
    color: "Violet",
    quantity: 0,
    price: 379700,
  },
  {
    id: "#Cust72",
    date: "2014-07-21",
    name: "Jennifer",
    country: "Italy",
    flag: "italy.png",
    product: "Galaxy S5",
    color: "Pink",
    quantity: 15,
    price: 115300,
  },
  {
    id: "#Cust73",
    date: "2014-07-20",
    name: "Jennifer",
    country: "Korea",
    flag: "korea.png",
    product: "LG G3",
    color: "Yellow",
    quantity: 1,
    price: 535700,
  },
  {
    id: "#Cust74",
    date: "2014-07-19",
    name: "Jennifer",
    country: "China",
    flag: "china.png",
    product: "IPad Air",
    color: "Green",
    quantity: 10,
    price: 517500,
  },
  {
    id: "#Cust75",
    date: "2014-07-18",
    name: "Lowrence",
    country: "China",
    flag: "china.png",
    product: "IPad Air",
    color: "Pink",
    quantity: 10,
    price: 464900,
  },
  {
    id: "#Cust76",
    date: "2014-07-17",
    name: "Jennifer",
    country: "Singapore",
    flag: "singapore.png",
    product: "Galaxy S5",
    color: "Gray",
    quantity: 20,
    price: 70300,
  },
  {
    id: "#Cust77",
    date: "2014-07-16",
    name: "Lowrence",
    country: "France",
    flag: "france.png",
    product: "LG G3",
    color: "Pink",
    quantity: 0,
    price: 538000,
  },
  {
    id: "#Cust78",
    date: "2014-07-15",
    name: "Emma",
    country: "USA",
    flag: "usa.png",
    product: "Galaxy Note3",
    color: "Violet",
    quantity: 3,
    price: 409000,
  },
  {
    id: "#Cust79",
    date: "2014-07-14",
    name: "Emma",
    country: "Italy",
    flag: "italy.png",
    product: "LG G3",
    color: "Pink",
    quantity: 15,
    price: 595000,
  },
  {
    id: "#Cust80",
    date: "2014-07-13",
    name: "Kim",
    country: "Singapore",
    flag: "singapore.png",
    product: "IPad Air",
    color: "Blue",
    quantity: 20,
    price: 764800,
  },
  {
    id: "#Cust81",
    date: "2014-07-12",
    name: "Kim",
    country: "Ireland",
    flag: "ireland.png",
    product: "Galaxy Note3",
    color: "Orange",
    quantity: 12,
    price: 694500,
  },
  {
    id: "#Cust82",
    date: "2014-07-11",
    name: "Kim",
    country: "China",
    flag: "china.png",
    product: "Galaxy Note3",
    color: "Green",
    quantity: 10,
    price: 712300,
  },
  {
    id: "#Cust83",
    date: "2014-07-10",
    name: "Anna",
    country: "Ireland",
    flag: "ireland.png",
    product: "IPhone 5S",
    color: "Blue",
    quantity: 12,
    price: 863700,
  },
  {
    id: "#Cust84",
    date: "2014-07-09",
    name: "Emma",
    country: "Ireland",
    flag: "ireland.png",
    product: "LG G3",
    color: "Violet",
    quantity: 12,
    price: 918900,
  },
  {
    id: "#Cust85",
    date: "2014-07-08",
    name: "Jennifer",
    country: "Japan",
    flag: "japan.png",
    product: "Galaxy Note3",
    color: "Pink",
    quantity: 7,
    price: 849000,
  },
  {
    id: "#Cust86",
    date: "2014-07-07",
    name: "Anna",
    country: "Italy",
    flag: "italy.png",
    product: "Galaxy S5",
    color: "Green",
    quantity: 15,
    price: 896600,
  },
  {
    id: "#Cust87",
    date: "2014-07-06",
    name: "Anna",
    country: "Korea",
    flag: "korea.png",
    product: "IPad Air",
    color: "Yellow",
    quantity: 1,
    price: 865100,
  },
  {
    id: "#Cust88",
    date: "2014-07-05",
    name: "Emma",
    country: "Ireland",
    flag: "ireland.png",
    product: "Galaxy Note3",
    color: "Orange",
    quantity: 12,
    price: 750900,
  },
  {
    id: "#Cust89",
    date: "2014-07-04",
    name: "Lowrence",
    country: "France",
    flag: "france.png",
    product: "IPad Air",
    color: "Violet",
    quantity: 0,
    price: 345900,
  },
  {
    id: "#Cust90",
    date: "2014-07-03",
    name: "Emma",
    country: "Korea",
    flag: "korea.png",
    product: "Galaxy Note3",
    color: "Pink",
    quantity: 1,
    price: 930700,
  },
  {
    id: "#Cust91",
    date: "2014-07-02",
    name: "Kim",
    country: "Singapore",
    flag: "singapore.png",
    product: "LG G3",
    color: "Violet",
    quantity: 20,
    price: 692700,
  },
  {
    id: "#Cust92",
    date: "2014-07-01",
    name: "Kim",
    country: "Ireland",
    flag: "ireland.png",
    product: "IPhone 5S",
    color: "Violet",
    quantity: 12,
    price: 979100,
  },
  {
    id: "#Cust93",
    date: "2014-06-30",
    name: "Kim",
    country: "Korea",
    flag: "korea.png",
    product: "LG G3",
    color: "Gray",
    quantity: 1,
    price: 28200,
  },
  {
    id: "#Cust94",
    date: "2014-06-29",
    name: "Jennifer",
    country: "Italy",
    flag: "italy.png",
    product: "Galaxy Note3",
    color: "Pink",
    quantity: 15,
    price: 283700,
  },
  {
    id: "#Cust95",
    date: "2014-06-28",
    name: "Anna",
    country: "Japan",
    flag: "japan.png",
    product: "Galaxy Note3",
    color: "Pink",
    quantity: 7,
    price: 940000,
  },
  {
    id: "#Cust96",
    date: "2014-06-27",
    name: "Kim",
    country: "Italy",
    flag: "italy.png",
    product: "IPad Air",
    color: "Pink",
    quantity: 15,
    price: 822900,
  },
  {
    id: "#Cust97",
    date: "2014-06-26",
    name: "Lowrence",
    country: "France",
    flag: "france.png",
    product: "Galaxy Note3",
    color: "Pink",
    quantity: 0,
    price: 239400,
  },
  {
    id: "#Cust98",
    date: "2014-06-25",
    name: "Lowrence",
    country: "Korea",
    flag: "korea.png",
    product: "Galaxy Note3",
    color: "Gray",
    quantity: 1,
    price: 922600,
  },
  {
    id: "#Cust99",
    date: "2014-06-24",
    name: "Steve",
    country: "USA",
    flag: "usa.png",
    product: "Galaxy Note3",
    color: "Violet",
    quantity: 3,
    price: 701300,
  },
]

function ExamplePage(props) {
  const { t } = useTranslation("examplePage")
  const dispatch = useDispatch()

  // let myGridID
  // React.useEffect(() => {
  //   myGridID = AUIGrid.create("#grid_wrap", columnLayout)
  //   AUIGrid.setGridData(myGridID, data)
  // }, [])

  // const { menuList: menuLists } = JSON.parse(localStorage.getItem("menuLists"))

  // const changeKeyData = (data) =>
  //   data.map((item) => ({
  //     id: item.menuId,
  //     title: item.menuNm,
  //     translate: item.menuNm,
  //     type: "collapse",
  //     icon: "",
  //     children: [
  //       ...item.subMenu.map((el) => {
  //         let key
  //         if (el.subMenu) {
  //           key = el.subMenu.map((mn) => ({
  //             id: mn.menuId,
  //             title: mn.menuNm,
  //             type: "item",
  //             url: "",
  //           }))
  //         }

  //         return {
  //           id: el.menuId,
  //           title: el.menuNm,
  //           type: key ? "collapse" : "item",
  //           [key ? "children" : "url"]: key || "",
  //         }
  //       }),
  //     ],
  //   }))[0]

  // const getMenuListsByMenuId = (data, menuId) => data.filter((item) => item.menuId === menuId)
  // const listsMenuId = menuLists.map((item) => item.menuId)

  // const appMenus = []
  // listsMenuId.forEach((menuId) => {
  //   if (menuId === "PIMS_PRODUCT") {
  //     const pimsProduct = menuLists.filter((item) => item.menuId === menuId)[0].subMenu
  //     appMenus.push(changeKeyData(getMenuListsByMenuId(pimsProduct, "PIMS_PRD")))
  //     appMenus.push(changeKeyData(getMenuListsByMenuId(pimsProduct, "PIMS_ATTR")))
  //   } else {
  //     appMenus.push(changeKeyData(getMenuListsByMenuId(menuLists, menuId)))
  //   }
  // })

  // const navigate = [
  //   {
  //     id: "pims",
  //     title: "PIMS",
  //     translate: "PIMS",
  //     icon: "apps",
  //     type: "group",
  //     children: appMenus.filter((item) => item.id.includes("PIMS_")),
  //   },
  //   {
  //     id: "bcm",
  //     title: "BCM",
  //     type: "group",
  //     children: appMenus.filter((item) => item.id.includes("BCM"))[0].children,
  //   },
  //   {
  //     id: "dbpa",
  //     title: "DBPA",
  //     type: "group",
  //     children: appMenus.filter((item) => item.id.includes("DBPA"))[0].children,
  //   },
  //   {
  //     id: "adnin",
  //     title: "ADMIN",
  //     type: "group",
  //     children: appMenus.filter((item) => item.id.includes("ADNIN"))[0].children,
  //   },
  // ]

  useEffect(() => {
    // dispatch(setNavigation(navigate))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Root
        header={
          <div className="p-24">
            <h4>{t("TITLE")}</h4>
          </div>
        }
        contentToolbar={<div className="px-24">Content</div>}
        content={
          <div className="p-24">
            <h4>Content</h4>
            <br />
            <DemoContent />
            {/* <div id="grid_wrap" style={{ width: "80%", height: 400 }} /> */}
          </div>
        }
      />
    </>
  )
}

export default ExamplePage
