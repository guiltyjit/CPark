export const MONTH_LIST = [{
  "key": "JAN",
  "label": "January",
  "value": 1
}, {
  "key": "FEB",
  "label": "February",
  "value": 2
}, {
  "key": "MAR",
  "label": "March",
  "value": 3
}, {
  "key": "APR",
  "label": "April",
  "value": 4
}, {
  "key": "MAY",
  "label": "May",
  "value": 5
}, {
  "key": "JUN",
  "label": "June",
  "value": 6
}, {
  "key": "JUL",
  "label": "July",
  "value": 7
}, {
  "key": "AUG",
  "label": "August",
  "value": 8
}, {
  "key": "SEP",
  "label": "September",
  "value": 9
}, {
  "key": "OCT",
  "label": "Octorber",
  "value": 10
}, {
  "key": "NOV",
  "label": "November",
  "value": 11
}, {
  "key": "DEC",
  "label": "December",
  "value": 12
}
];

export const RENT_TYPE_SELECTION_LIST = [
  { key: "RANGE", label: "Range" },
  { key: "SPECIFY", label: "Specify" }
]

export const RENT_SELECTION_LIST = [
  { key: "WEEK", label: "Weekly" },
  { key: "MONTH", label: "Monthly" },
  { key: "YEAR", label: "Yearly" }
]

export const TIME_LIST = [
  { key: "0000", label: "12:00 am" },
  { key: "0100", label: "1:00 am" },
  { key: "0200", label: "2:00 am" },
  { key: "0300", label: "3:00 am" },
  { key: "0400", label: "4:00 am" },
  { key: "0500", label: "5:00 am" },
  { key: "0600", label: "6:00 am" },
  { key: "0700", label: "7:00 am" },
  { key: "0800", label: "8:00 am" },
  { key: "0900", label: "9:00 am" },
  { key: "1000", label: "10:00 am" },
  { key: "1100", label: "11:00 am" },
  { key: "1200", label: "12:00 pm" },
  { key: "1300", label: "1:00 pm" },
  { key: "1400", label: "2:00 pm" },
  { key: "1500", label: "3:00 pm" },
  { key: "1600", label: "4:00 pm" },
  { key: "1700", label: "5:00 pm" },
  { key: "1800", label: "6:00 pm" },
  { key: "1900", label: "7:00 pm" },
  { key: "2000", label: "8:00 pm" },
  { key: "2100", label: "9:00 pm" },
  { key: "2200", label: "10:00 pm" },
  { key: "2300", label: "11:00 pm" }
]

export const DATE_LIST = [
  { key: "20171109", label: "09/11/2017" },
  { key: "20171110", label: "10/11/2017" },
  { key: "20171111", label: "11/11/2017" },
  { key: "20171112", label: "12/11/2017" },
  { key: "20171113", label: "13/11/2017" },
  { key: "20171114", label: "14/11/2017" },
  { key: "20171115", label: "15/11/2017" },
  { key: "20171116", label: "16/11/2017" },
  { key: "20171117", label: "17/11/2017" }
]

export const MOCK_PROFIT_RENT_DATA = [
  {
    month: "July",
    year: "2017",
    total: "RM 150.00",
    netProfit: "RM 132.00",
    management: "RM 18.00",
    occupiedHistory: [{
      carPlate: 'W9624M',
      rentOwnerName: 'Chan Jun Kit',
      unit: 'A-11-03',
      date: {
        from: '01/07/2017',
        to: '31/07/2017'
      },
      totalCharge: 'RM 150.00',
      parkingSlot: 'A1102'
    }]
  },
  {
    month: "June",
    year: "2017",
    total: "RM 130.00",
    netProfit: "RM 114.40",
    management: "RM 15.60",
    occupiedHistory: [
      {
        carPlate: 'WWE9624',
        rentOwnerName: 'Charles',
        unit: 'A-11-03',
        date: {
          from: '01/06/2017',
          to: '11/06/2017'
        },
        totalCharge: 'RM 55.00',
        parkingSlot: 'A1102'
      },
      {
        carPlate: 'W9624M',
        rentOwnerName: 'Chan Jun Kit',
        unit: 'A-11-03',
        date: {
          from: '15/06/2017',
          to: '30/06/2017'
        },
        totalCharge: 'RM 75.00',
        parkingSlot: 'A1102'
      }
    ]
  }
]

export const MOCK_CURRENT_RENT_DATA = [
  {
    date: {
      from: '01/08/2017',
      to: '31/08/2017'
    },
    parkingSlot: 'A1102'
  },
  {
    date: {
      from: '01/09/2017',
      to: '30/09/2017'
    },
    parkingSlot: 'A1102'
  }
]

export const RENT_LIST_TAB_OPTION = [
  { key: "RENT", label: "Rent Out" },
  { key: "PROFIT", label: "Profits" },
]

export const GUEST_LIST = [
  { id: 1, name: "Kenny", phoneNumber: "01683739900", carPlate: "BMW8372", ETA: "8:00 AM", date: '2017-12-09', isBooked: false },
  { id: 2, name: "Ben", phoneNumber: "010-84329722", carPlate: "WMQ3827", ETA: "5:00 PM", date: '2017-12-09', isBooked: true }
]

export const FAMILY_LIST = [
  { name: "Kent", phoneNumber: "018764793832", carPlate: "APW4927", isBooked: true },
  { name: "Jerome", phoneNumber: "01793878374", carPlate: "QAA1989C", isBooked: false }
]

export const HISTORY_LIST = {
  name: "Chan Jun Kit",
  carPlate: "W9624M",
  history: [
    {
      in: {
        date: '11/08/2017',
        time: '7:00 pm'
      }
    },
    {
      in: {
        date: '10/08/2017',
        time: '7:00 pm'
      },
      out:{
        date:'11/08/2017',
        time:'7:00 am'
      }
    }
  ]
}

export const NATIONALITY_LIST = [
  { key: "MY", label: "Malaysia", images: "/images/human-traffic-hack/flag/malaysia.svg" },
  { key: "ID", label: "India", images: "/images/human-traffic-hack/flag/india.png" },
  { key: "CH", label: "China", images: "/images/human-traffic-hack/flag/china.jpg" },
  { key: "GH", label: "Ghana", images: "/images/human-traffic-hack/flag/Ghana.jpg" },
  { key: "UG", label: "Uganda", images: "/images/human-traffic-hack/flag/Uganda.png" },
  { key: "NE", label: "Nepal", images: "/images/human-traffic-hack/flag/nepal.gif" },
  { key: "SL", label: "Sri Lanka", images: "/images/human-traffic-hack/flag/Sri Lanka.jpg" },
  { key: "PK", label: "Pakistan", images: "/images/human-traffic-hack/flag/pakistan.GIF" },
  { key: "HA", label: "Haiti", images: "/images/human-traffic-hack/flag/haiti.gif" },
  { key: "BZ", label: "Brazil", images: "/images/human-traffic-hack/flag/Brazil.png" },
  { key: "BG", label: "Bangladesh", images: "/images/human-traffic-hack/flag/Bangladesh.gif" }
]

export const YES_NO_LIST = [
  { key: "Y", label: "Yes" },
  { key: "N", label: "No" }
]

export const YES_NO_FOOD_LIST = [
  { key: "Y1", label: "Yes, once a day" },
  { key: "Y2", label: "Yes, twice a day" },
  { key: "N", label: "No" }
]

export const WORK_HOUR_LIST = [
  { key: "L8", label: "8 hour" },
  { key: "8t12", label: "8 - 12 hour" },
  { key: "M12", label: "12 hours and more" }
]

export const PAYMENT_LIST = [
  { key: "L1K", label: "Less than RM 1,000 a month" },
  { key: "M1K", label: "More than RM 1,000 a month" },
  { key: "NoPAY", label: "No pay (skip question 10)" }
]

export const WORK_REST_LIST = [
  { key: "oneDay", label: "Yes , at least one day per week" },
  { key: "twoDay", label: "Yes , at least two days per week" },
  { key: "no", label: "No" }
]

export const WORK_FEEL_LIST = [
  { key: "HE", label: "Happy / Excited" },
  { key: "SN", label: "Scared / Nervous" },
  { key: "T", label: "Tired" },
  { key: "S", label: "Sad" }
]

export const QUALIFICATION_LIST = [
  { key: "PHD", label: "PHD" },
  { key: "MASTERS", label: "Masters" },
  { key: "BACHELOR", label: "Bachelor" },
  { key: "FOUNDATION", label: "Foundation" },
  { key: "DIPLOMA", label: "Diploma" },
  { key: "CERTIFICATE", label: "Certificate" }
];

export const DELIVERY_MODE_LIST = [{
  key: "ONLINE",
  label: "E-learning"
}, {
  key: "LECTURER",
  label: "Lecturer"
}, {
  key: "COLLABORATING",
  label: "Collaborating"
}];

export const STUDY_MODE_LIST = [{
  key: "FULLTIME",
  label: "Full Time"
}, {
  key: "PARTTIME",
  label: "Part Time"
}, {
  key: "SELFPACED",
  label: "Self-Paced"
}];

export const PROVIDER_LIST = [
  {
    key: "KNOWLEGE_UNIVERSE",
    label: "Knowledge Universe",
    imageUrl: "http://cdn2.hubspot.net/hubfs/1915995/COURSES_IMAGES/logo-knowledge-universe.png?t=1469787935817",
    description: "Knowledge Universe was founded to meet the growing need for private higher education in Malaysia. As a member of the Raffles Education Group, Knowledge Universe offers quality education at an affordable cost. The institution provides a wide range of courses, supported by a team of highly qualified lecturers."
  },
  {
    key: "UNITAR",
    label: "UNITAR",
    imageUrl: "http://unitar.my/sites/all/themes/unitar/images/logo.png",
    description: "UNITAR International University (UNITAR), owned and managed by UNITAR Capital Sdn Bhd, was founded in 1997 and was the first virtual university in Southeast Asia. Since its inception, it has been a driving force for innovative learning, converging education and technology to keep pace with advancements. Continually on a passionate pursuit of competitive education, it provides a wide choice of higher learning studies and consistent value for money available through conventional and remote teaching designed and delivered within a structured and supportive academic architecture. Business, Technology & Accounting, Education & Communications, Culinary Arts & Tourism, Architecture & Design, Early Childhood Studies, and more, are taught at Foundation, Diploma, Bachelor’s, Master’s and Doctorate levels."
  },
  {
    key: "MUST",
    label: "Malaysia University of Science & Technology (MUST)",
    imageUrl: "http://cdn2.hubspot.net/hubfs/1915995/logos/MUST-logo.png?t=1469787935817",
    description: "MUST was founded in partnership with the Massachusetts Institute of Technology (MIT). MUST emulates MIT’s method of teaching and learning which encourages creativity, analytical thinking, problem-solving, innovation and team-building. These are qualities that have been proven to be successful in producing entrepreneurial leadership in technology and business."
  },
  {
    key: "SKILLSOFT",
    label: "Skillsoft",
    imageUrl: "http://cdn2.hubspot.net/hubfs/1915995/JobStreet_Edu_Images/INST-Logos/Skillsoft-Logo.png?t=1469787935817",
    description: "Skillsoft provides high-quality online learning solutions to global enterprises, SMEs, governments and educational institutions. Skillsoft's courses, books and videos have been developed by industry leading learning experts to ensure that they maximize business skills, performance, and talent development."
  },
  {
    key: "OLYMPIA_COLLEGE",
    label: "Olympia College",
    imageUrl: "http://cdn2.hubspot.net/hubfs/1915995/COURSES_IMAGES/Olym-College.png?t=1469787935817",
    description: "The New York Institute of Finance (NYIF) is a Financial Times company founded by the New York Stock Exchange (NYSE). NYIF’s faculty are recognized industry leaders and the best in their fields."
  },
  {
    key: "NY_INSTITUTE_FINANCE",
    label: "New York Institute of Finance",
    imageUrl: "http://cdn2.hubspot.net/hubfs/1915995/logos/logo-nyif.png?t=1469787935817",
    description: "The New York Institute of Finance (NYIF) is a Financial Times company founded by the New York Stock Exchange (NYSE). NYIF’s faculty are recognized industry leaders and the best in their fields."
  },
  {
    key: "EDX",
    label: "edX",
    imageUrl: "http://cdn2.hubspot.net/hubfs/1915995/logos/logo-edx.png?t=1469787935817",
    description: "Created in 2012 by the Massachusetts Institute of Technology and Harvard University, edX is an online course provider that offers university-level courses in a wide range of disciplines."
  },
  {
    key: "FULLBRIDGE",
    label: "Fullbridge",
    imageUrl: "http://cdn2.hubspot.net/hubfs/1915995/logo-fullbridge.png?t=1469787935817",
    description: "Launched in 2010, Fullbridge has run blended and online programs for more than 100,000 students and professionals in the U.S., Europe, Asia,Africa, and the Middle East, including many students on US college campuses. Fullbridge programs are marked by a holistic approach. Having a meaningful career requires a combination of superior industry specific skills and attributes such as grit, empathy and commitment. The unique Fullbridge approach will give you the professionalism and skills you need in today’s competitive hiring environment."
  },
  {
    key: "MMU",
    label: "Multimedia University (MMU)",
    imageUrl: "https://unidigest.com/media/university-logo/thumbs/smallLogo-10.png/smallLogo-10-320x320-0.5x1-padded-%23fff.png",
    description: "Multimedia University is a private university in Malaysia. The university has three campuses, located in Melaka, Cyberjaya, and Iskandar Puteri. The university hosts 9 faculties and 19 research centres."
  },
  {
    key: "KDU",
    label: "KDU University College & Colleges (KDU)",
    imageUrl: "http://www.kdu.edu.my/images/KDU-University-College-logo.png",
    description: "Established in 1983, and a pioneer in Malaysian private education, KDU was one of the first private colleges in Malaysia to have its own purpose-built campus. The institution, as KDU College then, was awarded the university college status in 2010 – a reflection of its quality programmes, and the growth of its international student population. KDU University College and KDU College are members of Paramount Education, a fully-integrated education services provider for primary, secondary, tertiary, and postgraduate level studies as well as executive and professional development programmes."
  },
  {
    key: "UTAR",
    label: "Universiti Tunku Abdul Rahman (UTAR)",
    imageUrl: "https://www.utar.edu.my/images/icon/UTAR.jpg",
    description: "Guided by its vision to be a premier University for the advancement and dissemination of knowledge and expertise while emphasising on the holistic development of individuals for nation building, UTAR has made impressive strides in establishing a strong reputation as a comprehensive University with dedication to achieving excellence in teaching and research."
  },
];

export const CATEGORY_LIST = [
  { key: "ANY", label: "Any" },
  { key: "BUSINESS_MANAGEMENT", label: "Business Management" },
  { key: "FINANCE", label: "Finance" },
  { key: "LANGUAGE", label: "Language" },
  { key: "MANAGEMENT", label: "Management" },
  { key: "COMPUTER_SCIENCE", label: "Computer Science" },
  { key: "INFORMATON_SYSTEM", label: "Information System" }
];

export const CHERATING_DATA = {
  'date1': {
    '6': {
      'uvLevel': 11,
      'isRain': false,
      'isSun': true,
      'isWind': true
    },
    '7': {
      'uvLevel': 5,
      'isRain': false,
      'isSun': true,
      'isWind': false
    },
    '8': {
      'uvLevel': 7,
      'isRain': false,
      'isSun': true,
      'isWind': true
    },
    '9': {
      'uvLevel': 0,
      'isRain': true,
      'isSun': false,
      'isWind': false
    },
    '10': {
      'uvLevel': 5,
      'isRain': false,
      'isSun': true,
      'isWind': false
    },
    '11': {
      'uvLevel': 8,
      'isRain': false,
      'isSun': true,
      'isWind': false
    },
    '12': {
      'uvLevel': 11,
      'isRain': false,
      'isSun': true,
      'isWind': true
    },
    '13': {
      'uvLevel': 2,
      'isRain': true,
      'isSun': false,
      'isWind': false
    },
    '14': {
      'uvLevel': 1,
      'isRain': true,
      'isSun': false,
      'isWind': false
    },
    '15': {
      'uvLevel': 9,
      'isRain': false,
      'isSun': true,
      'isWind': true
    },
    '16': {
      'uvLevel': 3,
      'isRain': true,
      'isSun': false,
      'isWind': false
    },
    '17': {
      'uvLevel': 3,
      'isRain': true,
      'isSun': false,
      'isWind': false
    },
    '18': {
      'uvLevel': 11,
      'isRain': false,
      'isSun': true,
      'isWind': true
    },
    '19': {
      'uvLevel': 9,
      'isRain': false,
      'isSun': true,
      'isWind': false
    },
    '20': {
      'uvLevel': 11,
      'isRain': false,
      'isSun': true,
      'isWind': false
    },
    '21': {
      'uvLevel': 8,
      'isRain': false,
      'isSun': true,
      'isWind': true
    },
    '22': {
      'uvLevel': 0,
      'isRain': false,
      'isSun': true,
      'isWind': false
    }
  },
  'date2': {
    '6': {
      'uvLevel': 2,
      'isRain': true,
      'isSun': false,
      'isWind': true
    },
    '7': {
      'uvLevel': 3,
      'isRain': true,
      'isSun': false,
      'isWind': false
    },
    '8': {
      'isRain': false,
      'isSun': true,
      'isWind': true
    },
    '9': {
      'uvLevel': 1,
      'isRain': true,
      'isSun': false,
      'isWind': false
    },
    '10': {
      'uvLevel': 8,
      'isRain': false,
      'isSun': true,
      'isWind': true
    },
    '11': {
      'uvLevel': 1,
      'isRain': true,
      'isSun': false,
      'isWind': true
    },
    '12': {
      'uvLevel': 8,
      'isRain': false,
      'isSun': true,
      'isWind': false
    },
    '13': {
      'uvLevel': 11,
      'isRain': false,
      'isSun': true,
      'isWind': false
    },
    '14': {
      'uvLevel': 2,
      'isRain': true,
      'isSun': false,
      'isWind': false
    },
    '15': {
      'uvLevel': 7,
      'isRain': false,
      'isSun': true,
      'isWind': false
    },
    '16': {
      'uvLevel': 8,
      'isRain': false,
      'isSun': true,
      'isWind': false
    },
    '17': {
      'uvLevel': 1,
      'isRain': true,
      'isSun': false,
      'isWind': true
    },
    '18': {
      'uvLevel': 2,
      'isRain': true,
      'isSun': false,
      'isWind': true
    },
    '19': {
      'uvLevel': 11,
      'isRain': false,
      'isSun': true,
      'isWind': false
    },
    '20': {
      'uvLevel': 10,
      'isRain': false,
      'isSun': true,
      'isWind': false
    },
    '21': {
      'uvLevel': 2,
      'isRain': true,
      'isSun': false,
      'isWind': false
    },
    '22': {
      'uvLevel': 11,
      'isRain': false,
      'isSun': true,
      'isWind': false
    }
  },
  'date3': {
    '6': {
      'uvLevel': 8,
      'isRain': false,
      'isSun': true,
      'isWind': true
    },
    '7': {
      'uvLevel': 10,
      'isRain': false,
      'isSun': true,
      'isWind': false
    },
    '8': {
      'uvLevel': 11,
      'isRain': false,
      'isSun': true,
      'isWind': true
    },
    '9': {
      'uvLevel': 2,
      'isRain': true,
      'isSun': false,
      'isWind': false
    },
    '10': {
      'uvLevel': 10,
      'isRain': false,
      'isSun': true,
      'isWind': false
    },
    '11': {
      'uvLevel': 8,
      'isRain': false,
      'isSun': true,
      'isWind': true
    },
    '12': {
      'uvLevel': 10,
      'isRain': false,
      'isSun': true
    },
    '13': {
      'uvLevel': 2,
      'isRain': true,
      'isSun': false
    },
    '14': {
      'uvLevel': 1,
      'isRain': true,
      'isSun': false,
      'isWind': true
    },
    '15': {
      'uvLevel': 11,
      'isRain': false,
      'isSun': true
    },
    '16': {
      'uvLevel': 2,
      'isRain': true,
      'isSun': false
    },
    '17': {
      'uvLevel': 1,
      'isRain': true,
      'isSun': false
    },
    '18': {
      'uvLevel': 8,
      'isRain': false,
      'isSun': true,
      'isWind': true
    },
    '19': {
      'uvLevel': 8,
      'isRain': false,
      'isSun': true
    },
    '20': {
      'uvLevel': 11,
      'isRain': false,
      'isSun': true
    },
    '21': {
      'uvLevel': 10,
      'isRain': false,
      'isSun': true
    },
    '22': {
      'uvLevel': 9,
      'isRain': false,
      'isSun': true
    }
  }
}
