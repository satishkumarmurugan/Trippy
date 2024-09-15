

const destinations = [
    {
      "Index": 1,
      "city": "Abohar",
      "state": "Punjab",
      "place": "Nehru Park, Punjab",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2,
      "city": "Abohar",
      "state": "Punjab",
      "place": "Shri Hanuman Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 3,
      "city": "Abohar",
      "state": "Punjab",
      "place": "Gurudwara Sri Guru Teg Bahadur Sahib Ji",
      "popularity": "Medium",
      "description": "Sikh gurdwara, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 4,
      "city": "Adilabad",
      "state": "Telangana",
      "place": "Basar Saraswati Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 5,
      "city": "Adilabad",
      "state": "Telangana",
      "place": "Pochera Waterfalls",
      "popularity": "Medium",
      "description": "Waterfall, scenic beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 6,
      "city": "Adilabad",
      "state": "Telangana",
      "place": "Kuntala Waterfalls",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 7,
      "city": "Adilabad",
      "state": "Telangana",
      "place": "Kuntala Waterfall",
      "popularity": "High",
      "description": "Spectacular waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 8,
      "city": "Adilabad",
      "state": "Telangana",
      "place": "Jainath Temple",
      "popularity": "High",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 9,
      "city": "Adilabad",
      "state": "Telangana",
      "place": "Gudem Satyanarayana Swamy Temple",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 10,
      "city": "Adilabad",
      "state": "Telangana",
      "place": "Kadam Dam",
      "popularity": "High",
      "description": "Water reservoir, boating, and fishing.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 11,
      "city": "Adilabad",
      "state": "Telangana",
      "place": "Sahastrakund Waterfalls",
      "popularity": "High",
      "description": "Spectacular waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 12,
      "city": "Adilabad",
      "state": "Telangana",
      "place": "Kala Ashram",
      "popularity": "High",
      "description": "Cultural center, traditional arts and crafts.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 13,
      "city": "Adilabad",
      "state": "Telangana",
      "place": "Sirpur Lake",
      "popularity": "High",
      "description": "Picnic spot, boating, and leisure.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 14,
      "city": "Adilabad",
      "state": "Telangana",
      "place": "Temple of Saraswati",
      "popularity": "High",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 15,
      "city": "Adoni",
      "state": "Andhra Pradesh",
      "place": "Adoni Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 16,
      "city": "Adoni",
      "state": "Andhra Pradesh",
      "place": "Chippagiri",
      "popularity": "Medium",
      "description": "Hill station, panoramic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 17,
      "city": "Adoni",
      "state": "Andhra Pradesh",
      "place": "Konda Reddy Fort",
      "popularity": "Medium",
      "description": "Historical fort, ruins.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 18,
      "city": "Agartala",
      "state": "Tripura",
      "place": "Ujjayanta Palace",
      "popularity": "High",
      "description": "Royal palace, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 19,
      "city": "Agartala",
      "state": "Tripura",
      "place": "Neermahal Palace",
      "popularity": "Medium",
      "description": "Water palace, scenic location.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 20,
      "city": "Agartala",
      "state": "Tripura",
      "place": "Sepahijala Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, botanical garden.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 21,
      "city": "Agartala",
      "state": "Tripura",
      "place": "Jagannath Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 22,
      "city": "Agartala",
      "state": "Tripura",
      "place": "Neermahal",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 23,
      "city": "Agartala",
      "state": "Tripura",
      "place": "Sipahijala Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, biodiversity hotspot.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 24,
      "city": "Agartala",
      "state": "Tripura",
      "place": "Unakoti",
      "popularity": "High",
      "description": "Rock-cut sculptures, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 25,
      "city": "Agartala",
      "state": "Tripura",
      "place": "Deotamura",
      "popularity": "High",
      "description": "Cave complex, ancient rock carvings.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 26,
      "city": "Agartala",
      "state": "Tripura",
      "place": "Agartala City Centre",
      "popularity": "Medium",
      "description": "Commercial hub, shopping, and dining.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 27,
      "city": "Agartala",
      "state": "Tripura",
      "place": "Durgabari Tea Estate",
      "popularity": "Medium",
      "description": "Tea plantation, scenic beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 28,
      "city": "Agartala",
      "state": "Tripura",
      "place": "Jampui Hills",
      "popularity": "High",
      "description": "Hill station, panoramic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 29,
      "city": "Agartala",
      "state": "Tripura",
      "place": "Chittagong Hills",
      "popularity": "Medium",
      "description": "Hill range, trekking trails.",
      "type": "Adventure",
      "budget": 1500
    },
    {
      "Index": 30,
      "city": "Agatti",
      "state": "Lakshadweep",
      "place": "Agatti Island",
      "popularity": "Medium",
      "description": "Main island, airport, water sports hub.",
      "type": "Adventure",
      "budget": 2000
    },
    {
      "Index": 31,
      "city": "Agatti",
      "state": "Lakshadweep",
      "place": "Agatti Beach",
      "popularity": "Medium",
      "description": "Beautiful beach, snorkeling, diving.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 32,
      "city": "Agatti",
      "state": "Lakshadweep",
      "place": "Agatti Aerodrome",
      "popularity": "Medium",
      "description": "Airport, gateway to Lakshadweep.",
      "type": "Adventure",
      "budget": 1500
    },
    {
      "Index": 33,
      "city": "Agatti",
      "state": "Lakshadweep",
      "place": "Lighthouse, Agatti Island",
      "popularity": "Low",
      "description": "Scenic lighthouse, panoramic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 34,
      "city": "Agatti",
      "state": "Lakshadweep",
      "place": "Agatti Island Resort",
      "popularity": "Medium",
      "description": "Resort, beachfront accommodation.",
      "type": "Hospitality",
      "budget": 1000
    },
    {
      "Index": 35,
      "city": "Agra",
      "state": "Uttar Pradesh",
      "place": "Taj Mahal",
      "popularity": "High",
      "description": "Impressive architecture, loved the visit.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 36,
      "city": "Agra",
      "state": "Uttar Pradesh",
      "place": "Agra Fort",
      "popularity": "High",
      "description": "Historical marvel, enjoyed exploring.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 37,
      "city": "Agra",
      "state": "Uttar Pradesh",
      "place": "Fatehpur Sikri",
      "popularity": "High",
      "description": "Fascinating historical site, great visit.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 38,
      "city": "Agra",
      "state": "Uttar Pradesh",
      "place": "Akbar Tomb Sikandra",
      "popularity": "Medium",
      "description": "Beautiful tomb, peaceful atmosphere.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 39,
      "city": "Agra",
      "state": "Uttar Pradesh",
      "place": "Mehtab Bagh",
      "popularity": "Medium",
      "description": "Mughal garden, Taj Mahal view.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 40,
      "city": "Ahmedabad",
      "state": "Gujarat",
      "place": "Sabarmati Ashram",
      "popularity": "High",
      "description": "Mahatma Gandhi's residence, peaceful surroundings.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 41,
      "city": "Ahmedabad",
      "state": "Gujarat",
      "place": "Kankaria Lake",
      "popularity": "Medium",
      "description": "Recreational area, boating facilities available.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 42,
      "city": "Ahmedabad",
      "state": "Gujarat",
      "place": "Adalaj Stepwell",
      "popularity": "Medium",
      "description": "Architectural marvel, intricate carvings.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 43,
      "city": "Ahmedabad",
      "state": "Gujarat",
      "place": "Jama Masjid",
      "popularity": "Low",
      "description": "Iconic mosque, historical significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 44,
      "city": "Ahmedabad",
      "state": "Gujarat",
      "place": "Sardar Vallabhbhai Patel Stadium",
      "popularity": "Medium",
      "description": "Cricket stadium, sports events.",
      "type": "Entertainment",
      "budget": 1500
    },
    {
      "Index": 45,
      "city": "Ahmedabad",
      "state": "Gujarat",
      "place": "Science City, Ahmedabad",
      "popularity": "High",
      "description": "Science museum, interactive exhibits.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 46,
      "city": "Ahmedabad",
      "state": "Gujarat",
      "place": "Kamla Nehru Zoo",
      "popularity": "Medium",
      "description": "Zoological park, wildlife conservation.",
      "type": "Wildlife",
      "budget": 1000
    },
    {
      "Index": 47,
      "city": "Ahmednagar",
      "state": "Maharashtra",
      "place": "Shani Shingnapur Temple",
      "popularity": "Medium",
      "description": "Hindu temple, dedicated to Lord Shani.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 48,
      "city": "Ahmednagar",
      "state": "Maharashtra",
      "place": "Renuka Mata Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 49,
      "city": "Ahmednagar",
      "state": "Maharashtra",
      "place": "Konkan Railway Bridge",
      "popularity": "Medium",
      "description": "Engineering marvel, scenic views.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 50,
      "city": "Ahmednagar",
      "state": "Maharashtra",
      "place": "Shani Shingnapur",
      "popularity": "High",
      "description": "Hindu pilgrimage site, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 51,
      "city": "Ahmednagar",
      "state": "Maharashtra",
      "place": "Ahmednagar Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 52,
      "city": "Ahmednagar",
      "state": "Maharashtra",
      "place": "Revdanda Beach",
      "popularity": "Medium",
      "description": "Beach, water sports activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 53,
      "city": "Ahmednagar",
      "state": "Maharashtra",
      "place": "Shirdi Sai Baba Temple",
      "popularity": "Medium",
      "description": "Hindu temple, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 54,
      "city": "Ahmednagar",
      "state": "Maharashtra",
      "place": "Siddheshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 55,
      "city": "Ahmednagar",
      "state": "Maharashtra",
      "place": "Kalsubai Harishchandragad Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, biodiversity.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 56,
      "city": "Aizawl",
      "state": "Mizoram",
      "place": "Durtlang Hills",
      "popularity": "Medium",
      "description": "Hill station, panoramic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 57,
      "city": "Aizawl",
      "state": "Mizoram",
      "place": "Mizo Hlakungpui Mual",
      "popularity": "Medium",
      "description": "Mizo memorial, cultural significance.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 58,
      "city": "Aizawl",
      "state": "Mizoram",
      "place": "Solomon's Temple",
      "popularity": "Medium",
      "description": "Christian church, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 59,
      "city": "Aizawl",
      "state": "Mizoram",
      "place": "Bara Bazar",
      "popularity": "High",
      "description": "Bustling market, local goods.",
      "type": "Market",
      "budget": 1500
    },
    {
      "Index": 60,
      "city": "Aizawl",
      "state": "Mizoram",
      "place": "Falkawn Village",
      "popularity": "Medium",
      "description": "Mizo village, cultural experience.",
      "type": "Village",
      "budget": 2000
    },
    {
      "Index": 61,
      "city": "Ajmer",
      "state": "Rajasthan",
      "place": "Ajmer Sharif Dargah",
      "popularity": "High",
      "description": "Sufi shrine, pilgrimage site, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 62,
      "city": "Ajmer",
      "state": "Rajasthan",
      "place": "Ana Sagar Lake",
      "popularity": "Medium",
      "description": "Artificial lake, boating, picnic spot.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 63,
      "city": "Ajmer",
      "state": "Rajasthan",
      "place": "Soniji Ki Nasiyan",
      "popularity": "Medium",
      "description": "Jain temple, architectural beauty, museum.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 64,
      "city": "Akola",
      "state": "Maharashtra",
      "place": "Sundarabai Khandelwal Tower",
      "popularity": "Medium",
      "description": "Historical tower, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 65,
      "city": "Akola",
      "state": "Maharashtra",
      "place": "Vitthal Rukmini Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 66,
      "city": "Akola",
      "state": "Maharashtra",
      "place": "Raj Rajeshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, cultural significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 67,
      "city": "Akola",
      "state": "Maharashtra",
      "place": "Sidheshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 68,
      "city": "Akola",
      "state": "Maharashtra",
      "place": "Narnala Fort",
      "popularity": "High",
      "description": "Historical fort, trekking destination.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 69,
      "city": "Akola",
      "state": "Maharashtra",
      "place": "Shri Raj Rajeshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 70,
      "city": "Akola",
      "state": "Maharashtra",
      "place": "Tipeshwar Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, safari.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 71,
      "city": "Alappuzha",
      "state": "Kerala",
      "place": "Alappuzha Beach",
      "popularity": "Medium",
      "description": "Scenic beach, water sports activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 72,
      "city": "Alappuzha",
      "state": "Kerala",
      "place": "Ambalapuzha Sree Krishna Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 73,
      "city": "Alappuzha",
      "state": "Kerala",
      "place": "Vembanad Lake",
      "popularity": "Medium",
      "description": "Lake, houseboat cruises.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 74,
      "city": "Alappuzha",
      "state": "Kerala",
      "place": "St. Mary's Forane Church",
      "popularity": "Medium",
      "description": "Historical church, religious festivals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 75,
      "city": "Alappuzha",
      "state": "Kerala",
      "place": "Alappuzha CSI Christ Church",
      "popularity": "Low",
      "description": "Historical church, colonial architecture.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 76,
      "city": "Alappuzha",
      "state": "Kerala",
      "place": "Karumadikuttan",
      "popularity": "Low",
      "description": "Archaeological site, ancient Buddha statue.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 77,
      "city": "Alappuzha",
      "state": "Kerala",
      "place": "Pathiramanal Island",
      "popularity": "Low",
      "description": "Serene island, birdwatching, boat rides.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 78,
      "city": "Alappuzha",
      "state": "Kerala",
      "place": "Edathua Church",
      "popularity": "Medium",
      "description": "Pilgrimage site, Christian church.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 79,
      "city": "Alchi",
      "state": "Ladakh",
      "place": "Alchi Monastery",
      "popularity": "Medium",
      "description": "Buddhist monastery, ancient art.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 80,
      "city": "Alchi",
      "state": "Ladakh",
      "place": "Saspol Caves",
      "popularity": "Medium",
      "description": "Buddhist caves, archaeological site.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 81,
      "city": "Alchi",
      "state": "Ladakh",
      "place": "Alchi Dam",
      "popularity": "Medium",
      "description": "Dam, scenic views, picnicking.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 82,
      "city": "Aligarh",
      "state": "Uttar Pradesh",
      "place": "Aligarh Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 83,
      "city": "Aligarh",
      "state": "Uttar Pradesh",
      "place": "Sai Temple, Aligarh",
      "popularity": "Medium",
      "description": "Hindu temple, serene ambiance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 84,
      "city": "Aligarh",
      "state": "Uttar Pradesh",
      "place": "Sai Baba Temple, Aligarh",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual atmosphere.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 85,
      "city": "Aligarh",
      "state": "Uttar Pradesh",
      "place": "Teerthdham Mangalaayatan",
      "popularity": "Medium",
      "description": "Jain pilgrimage site, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 86,
      "city": "Aligarh",
      "state": "Uttar Pradesh",
      "place": "Aligarh Muslim University",
      "popularity": "High",
      "description": "Prestigious educational institution.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 87,
      "city": "Aligarh",
      "state": "Uttar Pradesh",
      "place": "Kwality Mall, Aligarh",
      "popularity": "Medium",
      "description": "Shopping mall, entertainment complex.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 88,
      "city": "Aligarh",
      "state": "Uttar Pradesh",
      "place": "Naqvi Park",
      "popularity": "Medium",
      "description": "Public park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 89,
      "city": "Aligarh",
      "state": "Uttar Pradesh",
      "place": "Baba Barchi Bahadur Dargah",
      "popularity": "Medium",
      "description": "Sufi shrine, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 90,
      "city": "Aligarh",
      "state": "Uttar Pradesh",
      "place": "Khereshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, pilgrimage site.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 91,
      "city": "Allahabad",
      "state": "Uttar Pradesh",
      "place": "Triveni Sangam",
      "popularity": "High",
      "description": "Confluence of three rivers, sacred site.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 92,
      "city": "Allahabad",
      "state": "Uttar Pradesh",
      "place": "Allahabad Fort",
      "popularity": "Medium",
      "description": "Historical fort, Mughal architecture.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 93,
      "city": "Allahabad",
      "state": "Uttar Pradesh",
      "place": "Anand Bhavan",
      "popularity": "Medium",
      "description": "Historical mansion, Nehru family residence.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 94,
      "city": "Allahabad",
      "state": "Uttar Pradesh",
      "place": "Sangam",
      "popularity": "Medium",
      "description": "Holy confluence of rivers, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 95,
      "city": "Allahabad",
      "state": "Uttar Pradesh",
      "place": "Anand Bhawan",
      "popularity": "Medium",
      "description": "Historical museum, Nehru family residence.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 96,
      "city": "Almora",
      "state": "Uttarakhand",
      "place": "Kasar Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual retreat.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 97,
      "city": "Almora",
      "state": "Uttarakhand",
      "place": "Binsar Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 98,
      "city": "Almora",
      "state": "Uttarakhand",
      "place": "Bright End Corner, Almora",
      "popularity": "Medium",
      "description": "Viewpoint, sunset views, photography.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 99,
      "city": "Along",
      "state": "Arunachal Pradesh",
      "place": "Patum Bridge",
      "popularity": "Medium",
      "description": "Bridge, scenic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 100,
      "city": "Along",
      "state": "Arunachal Pradesh",
      "place": "Adi Gallong Tribal Museum",
      "popularity": "Medium",
      "description": "Tribal museum, cultural artifacts.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 101,
      "city": "Amaravati",
      "state": "Andhra Pradesh",
      "place": "Amaralingeswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 102,
      "city": "Amaravati",
      "state": "Andhra Pradesh",
      "place": "Dhyana Buddha Statue",
      "popularity": "Medium",
      "description": "Buddha statue, spiritual significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 103,
      "city": "Amaravati",
      "state": "Andhra Pradesh",
      "place": "Amaravati Archaeological Museum",
      "popularity": "Medium",
      "description": "Museum, showcasing artifacts.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 104,
      "city": "Amaravati",
      "state": "Andhra Pradesh",
      "place": "Amareswara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 105,
      "city": "Amaravati",
      "state": "Andhra Pradesh",
      "place": "Amravati Stupa",
      "popularity": "Medium",
      "description": "Buddhist stupa, historical site.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 106,
      "city": "Amaravati",
      "state": "Andhra Pradesh",
      "place": "Kondapalli Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 107,
      "city": "Amarpur",
      "state": "Tripura",
      "place": "Tirthamukh, Amarpur",
      "popularity": "High",
      "description": "Scenic spot, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 108,
      "city": "Amarpur",
      "state": "Tripura",
      "place": "Belonia Eco Park",
      "popularity": "Medium",
      "description": "Eco park, nature trails.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 109,
      "city": "Amarpur",
      "state": "Tripura",
      "place": "Narikel Kunja",
      "popularity": "Medium",
      "description": "Picnic spot, coconut grove.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 110,
      "city": "Amarpur",
      "state": "Tripura",
      "place": "Dumboor Lake",
      "popularity": "High",
      "description": "Lake, boating, and birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 111,
      "city": "Amarpur",
      "state": "Tripura",
      "place": "Maa Bhubaneswari Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 112,
      "city": "Ambala",
      "state": "Haryana",
      "place": "Chandigarh International Airport",
      "popularity": "Low",
      "description": "International airport, transportation hub.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 113,
      "city": "Ambala",
      "state": "Haryana",
      "place": "Bhawani Amba Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 114,
      "city": "Ambala",
      "state": "Haryana",
      "place": "Chhachhrauli Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 115,
      "city": "Ambala",
      "state": "Haryana",
      "place": "Chappar Chiri Memorial",
      "popularity": "Medium",
      "description": "Memorial, historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 116,
      "city": "Ambala",
      "state": "Haryana",
      "place": "Sardar Vallabhbhai Patel Park",
      "popularity": "Medium",
      "description": "Park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 117,
      "city": "Ambala",
      "state": "Haryana",
      "place": "Hathi Khana Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 118,
      "city": "Ambala",
      "state": "Haryana",
      "place": "Ambala Cantonment",
      "popularity": "Medium",
      "description": "Cantonment area, military presence.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 119,
      "city": "Ambala",
      "state": "Haryana",
      "place": "Badhkal Lake",
      "popularity": "Medium",
      "description": "Lake, boating, picnic spot.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 120,
      "city": "Ambala",
      "state": "Haryana",
      "place": "Manji Sahib Gurudwara",
      "popularity": "Medium",
      "description": "Gurudwara, Sikh pilgrimage site.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 121,
      "city": "Ambarnath",
      "state": "Maharashtra",
      "place": "Shiv Mandir, Ambarnath, Maharashtra",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 122,
      "city": "Ambarnath",
      "state": "Maharashtra",
      "place": "Kulaba Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 123,
      "city": "Ambarnath",
      "state": "Maharashtra",
      "place": "Ulhas Valley",
      "popularity": "Medium",
      "description": "Valley, scenic surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 124,
      "city": "Ambassa",
      "state": "Tripura",
      "place": "Kamaleshwari Temple",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 125,
      "city": "Ambassa",
      "state": "Tripura",
      "place": "Chabimura",
      "popularity": "Medium",
      "description": "Cultural site, rock carvings.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 126,
      "city": "Ambattur",
      "state": "Tamil Nadu",
      "place": "Chennai Rail Museum",
      "popularity": "Medium",
      "description": "Museum, railway exhibits.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 127,
      "city": "Ambattur",
      "state": "Tamil Nadu",
      "place": "Ambattur Lake",
      "popularity": "Medium",
      "description": "Lake, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 128,
      "city": "Ambattur",
      "state": "Tamil Nadu",
      "place": "Vavin Lake",
      "popularity": "Medium",
      "description": "Lake, scenic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 129,
      "city": "Ambernath",
      "state": "Maharashtra",
      "place": "Shiva Temple, Ambernath",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 130,
      "city": "Ambernath",
      "state": "Maharashtra",
      "place": "Kapurwadi",
      "popularity": "Medium",
      "description": "Recreational park, picnic spot.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 131,
      "city": "Ambikapur",
      "state": "Chhattisgarh",
      "place": "Tiger Point, Ambikapur",
      "popularity": "Medium",
      "description": "Viewpoint, panoramic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 132,
      "city": "Ambikapur",
      "state": "Chhattisgarh",
      "place": "Kudargarh",
      "popularity": "Medium",
      "description": "Pilgrimage site, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 133,
      "city": "Ambikapur",
      "state": "Chhattisgarh",
      "place": "Jogimara Caves",
      "popularity": "Medium",
      "description": "Caves, archaeological site.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 134,
      "city": "Ambikapur",
      "state": "Chhattisgarh",
      "place": "Sitabengara Caves",
      "popularity": "High",
      "description": "Natural caves, archaeological site.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 135,
      "city": "Ambikapur",
      "state": "Chhattisgarh",
      "place": "Mahamaya Temple",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 136,
      "city": "Ambur",
      "state": "Tamil Nadu",
      "place": "Krishnagiri Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 137,
      "city": "Ambur",
      "state": "Tamil Nadu",
      "place": "Kailasanathar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 138,
      "city": "Ambur",
      "state": "Tamil Nadu",
      "place": "Javadhu Hills",
      "popularity": "Medium",
      "description": "Hill station, panoramic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 139,
      "city": "Amini",
      "state": "Lakshadweep",
      "place": "Amini Island",
      "popularity": "Low",
      "description": "Small island, traditional lifestyle.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 140,
      "city": "Amini",
      "state": "Lakshadweep",
      "place": "Amini Thalessery Light House",
      "popularity": "Low",
      "description": "Scenic lighthouse, coastal views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 141,
      "city": "Amini",
      "state": "Lakshadweep",
      "place": "Amini Beach",
      "popularity": "Low",
      "description": "Secluded beach, pristine waters.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 142,
      "city": "Amini",
      "state": "Lakshadweep",
      "place": "Amini Mosque",
      "popularity": "Low",
      "description": "Community mosque, religious center.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 143,
      "city": "Amini",
      "state": "Lakshadweep",
      "place": "Amini Village",
      "popularity": "Low",
      "description": "Traditional village, fishing community.",
      "type": "Village",
      "budget": 1500
    },
    {
      "Index": 144,
      "city": "Amravati",
      "state": "Maharashtra",
      "place": "Chikhaldara Hill Station",
      "popularity": "Medium",
      "description": "Hill station, scenic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 145,
      "city": "Amravati",
      "state": "Maharashtra",
      "place": "Achalpur Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 146,
      "city": "Amravati",
      "state": "Maharashtra",
      "place": "Wadali Talao",
      "popularity": "Medium",
      "description": "Lake, boating, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 147,
      "city": "Amravati",
      "state": "Maharashtra",
      "place": "Chikhaldara Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, nature trails.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 148,
      "city": "Amravati",
      "state": "Maharashtra",
      "place": "Melghat Tiger Reserve",
      "popularity": "High",
      "description": "Tiger reserve, wildlife conservation.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 149,
      "city": "Amravati",
      "state": "Maharashtra",
      "place": "Satidham Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 150,
      "city": "Amritsar",
      "state": "Punjab",
      "place": "Golden Temple",
      "popularity": "High",
      "description": "Sacred Sikh shrine, spiritual atmosphere.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 151,
      "city": "Amritsar",
      "state": "Punjab",
      "place": "Jallianwala Bagh",
      "popularity": "Medium",
      "description": "Historical garden, massacre site.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 152,
      "city": "Amritsar",
      "state": "Punjab",
      "place": "Wagah Border",
      "popularity": "Medium",
      "description": "Border ceremony, patriotic fervor.",
      "type": "Adventure",
      "budget": 1500
    },
    {
      "Index": 153,
      "city": "Amritsar",
      "state": "Punjab",
      "place": "Golden Temple (Harmandir Sahib)",
      "popularity": "High",
      "description": "Sikh pilgrimage site, architectural beauty.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 154,
      "city": "Anakapalle",
      "state": "Andhra Pradesh",
      "place": "Anakapalle Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 155,
      "city": "Anakapalle",
      "state": "Andhra Pradesh",
      "place": "Anakapalle Market",
      "popularity": "Medium",
      "description": "Marketplace, local shopping.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 156,
      "city": "Anakapalle",
      "state": "Andhra Pradesh",
      "place": "Anakapalle Railway Station",
      "popularity": "Medium",
      "description": "Railway station, transportation hub.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 157,
      "city": "Anakapalle",
      "state": "Andhra Pradesh",
      "place": "Kasikonda Maharishi Ashram",
      "popularity": "Medium",
      "description": "Ashram, spiritual retreat.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 158,
      "city": "Anakapalle",
      "state": "Andhra Pradesh",
      "place": "Sri Veera Venkata Satyanarayana Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 159,
      "city": "Anand",
      "state": "Gujarat",
      "place": "Sardar Patel Bhavan",
      "popularity": "Medium",
      "description": "Museum, showcasing artifacts and history.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 160,
      "city": "Anand",
      "state": "Gujarat",
      "place": "Amul Dairy Museum",
      "popularity": "Medium",
      "description": "Museum, showcasing dairy industry.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 161,
      "city": "Anand",
      "state": "Gujarat",
      "place": "Sardar Vallabhbhai Patel and Veer Vithalbhai Patel Memorial",
      "popularity": "Medium",
      "description": "Memorial, honoring national leaders.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 162,
      "city": "Anand",
      "state": "Gujarat",
      "place": "Sardar Vallabhbhai Patel Statue",
      "popularity": "Medium",
      "description": "Statue, historical significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 163,
      "city": "Anand",
      "state": "Gujarat",
      "place": "Sri Ranchhodraiji Maharaj Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 164,
      "city": "Anand",
      "state": "Gujarat",
      "place": "Vallabh Vidhyanagar",
      "popularity": "Medium",
      "description": "Educational hub, university campus.",
      "type": "Entertainment",
      "budget": 1500
    },
    {
      "Index": 165,
      "city": "Anand",
      "state": "Gujarat",
      "place": "Amul Dairy, Anand",
      "popularity": "Medium",
      "description": "Dairy farm, educational tour.",
      "type": "Entertainment",
      "budget": 2000
    },
    {
      "Index": 166,
      "city": "Anand",
      "state": "Gujarat",
      "place": "Bhaikaka Library",
      "popularity": "Medium",
      "description": "Library, educational resources.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 167,
      "city": "Anand",
      "state": "Gujarat",
      "place": "Charotar",
      "popularity": "High",
      "description": "Rural region, cultural experience.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 168,
      "city": "Anand",
      "state": "Gujarat",
      "place": "Sevashram Hospital",
      "popularity": "Hospital",
      "description": "Medical institution, charitable services.",
      "type": "Medical",
      "budget": 2000
    },
    {
      "Index": 169,
      "city": "Anantapur",
      "state": "Andhra Pradesh",
      "place": "Lepakshi",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 170,
      "city": "Anantapur",
      "state": "Andhra Pradesh",
      "place": "Puttaparthi",
      "popularity": "Medium",
      "description": "Spiritual center, meditation retreat.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 171,
      "city": "Anantapur",
      "state": "Andhra Pradesh",
      "place": "Chintala Venkataramana Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 172,
      "city": "Anantapur",
      "state": "Andhra Pradesh",
      "place": "Lepakshi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 173,
      "city": "Anantapur",
      "state": "Andhra Pradesh",
      "place": "Thimmamma Marrimanu",
      "popularity": "Medium",
      "description": "Tree, natural wonder.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 174,
      "city": "Anantapur",
      "state": "Andhra Pradesh",
      "place": "Gugudu Reservoir",
      "popularity": "Medium",
      "description": "Water reservoir, scenic surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 175,
      "city": "Anantapur",
      "state": "Andhra Pradesh",
      "place": "Gooty Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 176,
      "city": "Anantapur",
      "state": "Andhra Pradesh",
      "place": "Penna Ahobilam",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 177,
      "city": "Anantnag",
      "state": "Jammu and Kashmir",
      "place": "Amarnath Temple",
      "popularity": "High",
      "description": "Hindu temple, pilgrimage site.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 178,
      "city": "Anantnag",
      "state": "Jammu and Kashmir",
      "place": "Martand Sun Temple",
      "popularity": "Medium",
      "description": "Hindu temple ruins, historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 179,
      "city": "Anantnag",
      "state": "Jammu and Kashmir",
      "place": "Kokernag",
      "popularity": "Medium",
      "description": "Garden, natural beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 180,
      "city": "Anantnag",
      "state": "Jammu and Kashmir",
      "place": "Aru Valley",
      "popularity": "Medium",
      "description": "Scenic valley, trekking, camping.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 181,
      "city": "Anantnag",
      "state": "Jammu and Kashmir",
      "place": "Lidder River",
      "popularity": "Medium",
      "description": "River, trout fishing, picnicking.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 182,
      "city": "Andrott",
      "state": "Lakshadweep",
      "place": "Andrott Island",
      "popularity": "Low",
      "description": "Traditional island, cultural heritage.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 183,
      "city": "Andrott",
      "state": "Lakshadweep",
      "place": "Andrott Juma Masjid",
      "popularity": "Low",
      "description": "Historical mosque, architectural beauty.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 184,
      "city": "Andrott",
      "state": "Lakshadweep",
      "place": "Andrott Beach",
      "popularity": "Low",
      "description": "Remote beach, tranquil atmosphere.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 185,
      "city": "Andrott",
      "state": "Lakshadweep",
      "place": "Andrott Harbour",
      "popularity": "Low",
      "description": "Fishing harbor, local livelihoods.",
      "type": "Economic",
      "budget": 1500
    },
    {
      "Index": 186,
      "city": "Andrott",
      "state": "Lakshadweep",
      "place": "Andrott Village",
      "popularity": "Low",
      "description": "Picturesque village, local lifestyle.",
      "type": "Village",
      "budget": 2000
    },
    {
      "Index": 187,
      "city": "Anjar",
      "state": "Gujarat",
      "place": "Siddha Bhairav Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 188,
      "city": "Anjar",
      "state": "Gujarat",
      "place": "Jesal Toral Samadhi",
      "popularity": "Medium",
      "description": "Hindu shrine, cultural significance.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 189,
      "city": "Anjar",
      "state": "Gujarat",
      "place": "Ramakund Stepwell",
      "popularity": "Medium",
      "description": "Historical stepwell, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 190,
      "city": "Anjuna",
      "state": "Goa",
      "place": "Anjuna Beach",
      "popularity": "Medium",
      "description": "Tranquil beach, flea market.",
      "type": "Beach",
      "budget": 1000
    },
    {
      "Index": 191,
      "city": "Anjuna",
      "state": "Goa",
      "place": "Anjuna Flea Market",
      "popularity": "Medium",
      "description": "Shopping, handicrafts, and souvenirs.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 192,
      "city": "Anjuna",
      "state": "Goa",
      "place": "Chapora Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 193,
      "city": "Ankleshwar",
      "state": "Gujarat",
      "place": "Shri Ankleshwar Tirth",
      "popularity": "Medium",
      "description": "Jain temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 194,
      "city": "Ankleshwar",
      "state": "Gujarat",
      "place": "Gayatri Shaktipith",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 195,
      "city": "Ankleshwar",
      "state": "Gujarat",
      "place": "Valand Tirth",
      "popularity": "Medium",
      "description": "Jain temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 196,
      "city": "Arrah",
      "state": "Bihar",
      "place": "Maharaja Harendra Kishore",
      "popularity": "High",
      "description": "Historical palace, cultural significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 197,
      "city": "Arrah",
      "state": "Bihar",
      "place": "Sita Kund",
      "popularity": "Medium",
      "description": "Hindu pilgrimage site, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 198,
      "city": "Arrah",
      "state": "Bihar",
      "place": "Gandhi Maidan",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 199,
      "city": "Arrah",
      "state": "Bihar",
      "place": "Maharaja College Ground",
      "popularity": "Medium",
      "description": "Cricket ground, sports events.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 200,
      "city": "Arrah",
      "state": "Bihar",
      "place": "Shahi Masjid",
      "popularity": "Medium",
      "description": "Islamic mosque, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 201,
      "city": "Arrah",
      "state": "Bihar",
      "place": "Veer Kunwar Singh Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 202,
      "city": "Arrah",
      "state": "Bihar",
      "place": "Beni Madhav Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 203,
      "city": "Arrah",
      "state": "Bihar",
      "place": "Surajpura Thermal Power Station",
      "popularity": "Medium",
      "description": "Power plant, industrial area.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 204,
      "city": "Aruppukkottai",
      "state": "Tamil Nadu",
      "place": "Aruppukottai Sri Sitharama Perumal Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 205,
      "city": "Aruppukkottai",
      "state": "Tamil Nadu",
      "place": "Vattara Sri Muthumaari Amman Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 206,
      "city": "Aruppukkottai",
      "state": "Tamil Nadu",
      "place": "Sri Ayyanarappan Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 207,
      "city": "Asansol",
      "state": "West Bengal",
      "place": "Kalyaneshwari Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 208,
      "city": "Asansol",
      "state": "West Bengal",
      "place": "Ghani Khan Choudhury Institute of Engineering & Technology",
      "popularity": "High",
      "description": "Engineering college, educational institution.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 209,
      "city": "Asansol",
      "state": "West Bengal",
      "place": "Kumaramangalam Park",
      "popularity": "Medium",
      "description": "Public park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 210,
      "city": "Atmakur",
      "state": "Andhra Pradesh",
      "place": "Sri Venugopala Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 211,
      "city": "Atmakur",
      "state": "Andhra Pradesh",
      "place": "Mahanandi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 212,
      "city": "Atmakur",
      "state": "Andhra Pradesh",
      "place": "Rollapadu Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 213,
      "city": "Chhatrapati-Sambhajinagar",
      "state": "Maharashtra",
      "place": "Ellora Caves",
      "popularity": "High",
      "description": "World Heritage Site, ancient rock-cut caves.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 214,
      "city": "Chhatrapati-Sambhajinagar",
      "state": "Maharashtra",
      "place": "Bibi Ka Maqbara",
      "popularity": "Medium",
      "description": "Mini Taj Mahal, Mughal architecture.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 215,
      "city": "Chhatrapati-Sambhajinagar",
      "state": "Maharashtra",
      "place": "Ajanta Caves",
      "popularity": "High",
      "description": "World Heritage Site, Buddhist cave art.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 216,
      "city": "Chhatrapati-Sambhajinagar",
      "state": "Maharashtra",
      "place": "Daulatabad Fort",
      "popularity": "High",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 217,
      "city": "Avadi",
      "state": "Tamil Nadu",
      "place": "Avadi Tank",
      "popularity": "Medium",
      "description": "Historic tank, recreational area.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 218,
      "city": "Avadi",
      "state": "Tamil Nadu",
      "place": "Avadi Vel Murugan Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 219,
      "city": "Avadi",
      "state": "Tamil Nadu",
      "place": "Chettiyar Agaram",
      "popularity": "Medium",
      "description": "Village, cultural experience.",
      "type": "Village",
      "budget": 2000
    },
    {
      "Index": 220,
      "city": "Avadi",
      "state": "Tamil Nadu",
      "place": "Avadi Tank Factory",
      "popularity": "Medium",
      "description": "Industrial site, tank manufacturing.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 221,
      "city": "Avadi",
      "state": "Tamil Nadu",
      "place": "Avadi Velankanni Church",
      "popularity": "Medium",
      "description": "Christian church, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 222,
      "city": "Avadi",
      "state": "Tamil Nadu",
      "place": "Maha Periyava Manimandapam",
      "popularity": "Medium",
      "description": "Religious site, honoring spiritual leader.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 223,
      "city": "Avadi",
      "state": "Tamil Nadu",
      "place": "AVM Studios",
      "popularity": "Medium",
      "description": "Film studio, movie production.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 224,
      "city": "Avadi",
      "state": "Tamil Nadu",
      "place": "Thirumullaivoyal Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 225,
      "city": "Avadi",
      "state": "Tamil Nadu",
      "place": "Avadi Church",
      "popularity": "Medium",
      "description": "Church, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 226,
      "city": "Ayodhya",
      "state": "Uttar Pradesh",
      "place": "Ram Janmabhoomi, Ram Mandir",
      "popularity": "Medium",
      "description": "Hindu pilgrimage site, birthplace of Lord Rama.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 227,
      "city": "Ayodhya",
      "state": "Uttar Pradesh",
      "place": "Hanuman Garhi",
      "popularity": "Medium",
      "description": "Hindu temple, dedicated to Lord Hanuman.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 228,
      "city": "Azamgarh",
      "state": "Uttar Pradesh",
      "place": "Shaheed Smarak",
      "popularity": "Medium",
      "description": "Memorial, historical significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 229,
      "city": "Azamgarh",
      "state": "Uttar Pradesh",
      "place": "Aam Bagh",
      "popularity": "Medium",
      "description": "Garden, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 230,
      "city": "Azamgarh",
      "state": "Uttar Pradesh",
      "place": "Maa Jwala Ji Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 231,
      "city": "Badami",
      "state": "Karnataka",
      "place": "Badami Cave Temples",
      "popularity": "High",
      "description": "Hindu and Jain cave temples, rock-cut architecture.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 232,
      "city": "Badami",
      "state": "Karnataka",
      "place": "Banashankari Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 233,
      "city": "Badami",
      "state": "Karnataka",
      "place": "Aihole",
      "popularity": "Medium",
      "description": "Historical site, Chalukya architecture.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 234,
      "city": "Badgam",
      "state": "Jammu and Kashmir",
      "place": "Aharbal Waterfall",
      "popularity": "Medium",
      "description": "Waterfall, picnic spot.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 235,
      "city": "Badgam",
      "state": "Jammu and Kashmir",
      "place": "Doodhpathri",
      "popularity": "Medium",
      "description": "Meadow, trekking, horse riding.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 236,
      "city": "Bahraich",
      "state": "Uttar Pradesh",
      "place": "Tapovan Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 237,
      "city": "Bahraich",
      "state": "Uttar Pradesh",
      "place": "Kailashpuri Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 238,
      "city": "Bahraich",
      "state": "Uttar Pradesh",
      "place": "Bharat Kund",
      "popularity": "Medium",
      "description": "Pilgrimage site, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 239,
      "city": "Balasore",
      "state": "Odisha",
      "place": "Chandipur Beach",
      "popularity": "High",
      "description": "Beach, unique disappearing phenomenon.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 240,
      "city": "Balasore",
      "state": "Odisha",
      "place": "Panchalingeshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, scenic hilltop location.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 241,
      "city": "Balasore",
      "state": "Odisha",
      "place": "Khirochora Gopinath Temple",
      "popularity": "High",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 242,
      "city": "Ballia",
      "state": "Uttar Pradesh",
      "place": "Gandhi Museum",
      "popularity": "Medium",
      "description": "Museum, historical artifacts.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 243,
      "city": "Ballia",
      "state": "Uttar Pradesh",
      "place": "Turturiya Mahadev Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 244,
      "city": "Ballia",
      "state": "Uttar Pradesh",
      "place": "Chhoti Dargah",
      "popularity": "Medium",
      "description": "Mosque, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 245,
      "city": "Balurghat",
      "state": "West Bengal",
      "place": "Debinagar Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 246,
      "city": "Balurghat",
      "state": "West Bengal",
      "place": "Kali Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 247,
      "city": "Balurghat",
      "state": "West Bengal",
      "place": "Balurghat Museum",
      "popularity": "Medium",
      "description": "Museum, showcasing local history.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 248,
      "city": "Banda",
      "state": "Uttar Pradesh",
      "place": "Kalinjar Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 249,
      "city": "Banda",
      "state": "Uttar Pradesh",
      "place": "Tundla Kham",
      "popularity": "Medium",
      "description": "Historical site, archaeological ruins.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 250,
      "city": "Banda",
      "state": "Uttar Pradesh",
      "place": "Jasra",
      "popularity": "Medium",
      "description": "Historical site, archaeological ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 251,
      "city": "Bangalore",
      "state": "Karnataka",
      "place": "Lalbagh Botanical Garden",
      "popularity": "High",
      "description": "Beautiful garden, variety of flora.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 252,
      "city": "Bangalore",
      "state": "Karnataka",
      "place": "Bangalore Palace",
      "popularity": "Medium",
      "description": "Majestic architecture, guided tours available.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 253,
      "city": "Bangalore",
      "state": "Karnataka",
      "place": "Cubbon Park",
      "popularity": "Low",
      "description": "Green oasis in the city, great for picnics.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 254,
      "city": "Bangalore",
      "state": "Karnataka",
      "place": "Tipu Sultan's Summer Palace",
      "popularity": "Medium",
      "description": "Historical landmark, exhibits artefacts.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 255,
      "city": "Bangalore",
      "state": "Karnataka",
      "place": "Vidhana Soudha",
      "popularity": "High",
      "description": "Neo-Dravidian style legislative building.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 256,
      "city": "Bangaram",
      "state": "Lakshadweep",
      "place": "Bangaram Island",
      "popularity": "Low",
      "description": "Secluded island, pristine beaches.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 257,
      "city": "Bangaram",
      "state": "Lakshadweep",
      "place": "Bangaram Beach",
      "popularity": "Low",
      "description": "Remote beach, snorkeling, relaxation.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 258,
      "city": "Bangaram",
      "state": "Lakshadweep",
      "place": "Bangaram Dive Center",
      "popularity": "Low",
      "description": "Diving center, underwater exploration.",
      "type": "Adventure",
      "budget": 2000
    },
    {
      "Index": 259,
      "city": "Bangaram",
      "state": "Lakshadweep",
      "place": "Bangaram Resort",
      "popularity": "Medium",
      "description": "Resort, beachside accommodation.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 260,
      "city": "Bangaram",
      "state": "Lakshadweep",
      "place": "Tinnakara Island",
      "popularity": "Low",
      "description": "Picturesque island, camping.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 261,
      "city": "Bankura",
      "state": "West Bengal",
      "place": "Joyrambati",
      "popularity": "Medium",
      "description": "Pilgrimage site, birthplace of Sri Sarada Devi.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 262,
      "city": "Bankura",
      "state": "West Bengal",
      "place": "Jhilimili",
      "popularity": "Medium",
      "description": "Forest reserve, nature trekking.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 263,
      "city": "Bankura",
      "state": "West Bengal",
      "place": "Bishnupur Terracotta Temples",
      "popularity": "Medium",
      "description": "Terracotta temples, historical significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 264,
      "city": "Banswara",
      "state": "Rajasthan",
      "place": "Maharana Pratap Smarak",
      "popularity": "Medium",
      "description": "Memorial, historical significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 265,
      "city": "Banswara",
      "state": "Rajasthan",
      "place": "Arthuna Temples",
      "popularity": "Medium",
      "description": "Hindu temples, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 266,
      "city": "Banswara",
      "state": "Rajasthan",
      "place": "Mahi Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 267,
      "city": "Bapatla",
      "state": "Andhra Pradesh",
      "place": "Bapatla Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 268,
      "city": "Bapatla",
      "state": "Andhra Pradesh",
      "place": "Suryalanka Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 269,
      "city": "Bapatla",
      "state": "Andhra Pradesh",
      "place": "Chirala Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 270,
      "city": "Bapatla",
      "state": "Andhra Pradesh",
      "place": "Bapatla Engineering College",
      "popularity": "Medium",
      "description": "College, educational institution.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 271,
      "city": "Baramula",
      "state": "Jammu and Kashmir",
      "place": "Jhelum River",
      "popularity": "Medium",
      "description": "River, boating, fishing.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 272,
      "city": "Baramula",
      "state": "Jammu and Kashmir",
      "place": "Jawahar Tunnel",
      "popularity": "Medium",
      "description": "Road tunnel, engineering marvel.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 273,
      "city": "Baran",
      "state": "Rajasthan",
      "place": "Shahabad Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 274,
      "city": "Baran",
      "state": "Rajasthan",
      "place": "Bhand Devra Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 275,
      "city": "Baran",
      "state": "Rajasthan",
      "place": "Shahid Smarak Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 276,
      "city": "Baranagar",
      "state": "West Bengal",
      "place": "Birati Rabindra Bhaban Stadium",
      "popularity": "Medium",
      "description": "Cricket stadium, sports events.",
      "type": "Entertainment",
      "budget": 2000
    },
    {
      "Index": 277,
      "city": "Baranagar",
      "state": "West Bengal",
      "place": "Baranagar Ramakrishna Mission Ashram",
      "popularity": "Medium",
      "description": "Ramakrishna Mission, spiritual teachings.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 278,
      "city": "Baranagar",
      "state": "West Bengal",
      "place": "Gopal Lal Thakur Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 279,
      "city": "Baranagar",
      "state": "West Bengal",
      "place": "Dakshineswar Kali Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 280,
      "city": "Baranagar",
      "state": "West Bengal",
      "place": "Kuthi Bari",
      "popularity": "Medium",
      "description": "Historical site, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 281,
      "city": "Baranagar",
      "state": "West Bengal",
      "place": "Panihati Municipality",
      "popularity": "Medium",
      "description": "Town, urban area.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 282,
      "city": "Barasat",
      "state": "West Bengal",
      "place": "Haricharan Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 283,
      "city": "Barasat",
      "state": "West Bengal",
      "place": "Barasat District Library",
      "popularity": "Medium",
      "description": "Public library, cultural hub.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 284,
      "city": "Barasat",
      "state": "West Bengal",
      "place": "Bibhutibhushan Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, nature trails.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 285,
      "city": "Barasat",
      "state": "West Bengal",
      "place": "Kachua Loknath Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 286,
      "city": "Barasat",
      "state": "West Bengal",
      "place": "Barasat Stadium",
      "popularity": "Medium",
      "description": "Cricket stadium, sports events.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 287,
      "city": "Barasat",
      "state": "West Bengal",
      "place": "Ahiritola Kali Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 288,
      "city": "Bardhaman",
      "state": "West Bengal",
      "place": "Curzon Gate",
      "popularity": "Medium",
      "description": "Historical gate, architectural landmark.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 289,
      "city": "Bardhaman",
      "state": "West Bengal",
      "place": "108 Shiv Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual sanctuary.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 290,
      "city": "Bardhaman",
      "state": "West Bengal",
      "place": "Bardhaman Science Centre",
      "popularity": "Medium",
      "description": "Science museum, interactive exhibits.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 291,
      "city": "Bardhaman",
      "state": "West Bengal",
      "place": "Bardhaman Deer Park",
      "popularity": "Medium",
      "description": "Deer park, wildlife conservation.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 292,
      "city": "Bareilly",
      "state": "Uttar Pradesh",
      "place": "Alakhnath Temple",
      "popularity": "Medium",
      "description": "Sacred Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 293,
      "city": "Bareilly",
      "state": "Uttar Pradesh",
      "place": "Deendayal Dham",
      "popularity": "Medium",
      "description": "Religious complex, spiritual discourses.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 294,
      "city": "Bareilly",
      "state": "Uttar Pradesh",
      "place": "Fun City",
      "popularity": "Medium",
      "description": "Amusement park, water slides and rides.",
      "type": "Entertainment",
      "budget": 2000
    },
    {
      "Index": 295,
      "city": "Bareilly",
      "state": "Uttar Pradesh",
      "place": "Trivati Nath Temple",
      "popularity": "Medium",
      "description": "Hindu temple, cultural significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 296,
      "city": "Bareilly",
      "state": "Uttar Pradesh",
      "place": "Fun City Mall",
      "popularity": "Medium",
      "description": "Shopping mall, entertainment complex.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 297,
      "city": "Bastar",
      "state": "Chhattisgarh",
      "place": "Chitradhara Waterfall",
      "popularity": "High",
      "description": "Scenic waterfall, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 298,
      "city": "Bastar",
      "state": "Chhattisgarh",
      "place": "Jagdalpur Palace",
      "popularity": "Medium",
      "description": "Historical palace, architecture.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 299,
      "city": "Bastar",
      "state": "Chhattisgarh",
      "place": "Bhainsa Darha Lake",
      "popularity": "Medium",
      "description": "Lake, boating facilities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 300,
      "city": "Batala",
      "state": "Punjab",
      "place": "Gurdwara Kandh Sahib Ji",
      "popularity": "Medium",
      "description": "Sikh gurdwara, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 301,
      "city": "Batala",
      "state": "Punjab",
      "place": "Kali Mata Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 302,
      "city": "Batala",
      "state": "Punjab",
      "place": "Shaheed Bhagat Singh Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 303,
      "city": "Batala",
      "state": "Punjab",
      "place": "Gurdwara Kandh Sahib",
      "popularity": "Medium",
      "description": "Sikh gurdwara, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 304,
      "city": "Batala",
      "state": "Punjab",
      "place": "Gurdwara Bibeksar Sahib",
      "popularity": "Medium",
      "description": "Sikh gurdwara, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 305,
      "city": "Bathinda",
      "state": "Punjab",
      "place": "Bathinda Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 306,
      "city": "Bathinda",
      "state": "Punjab",
      "place": "Quila Mubarak",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 307,
      "city": "Bathinda",
      "state": "Punjab",
      "place": "Rose Garden",
      "popularity": "Medium",
      "description": "Urban garden, floral display.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 308,
      "city": "Bathinda",
      "state": "Punjab",
      "place": "Qila Mubarak",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 309,
      "city": "Bathinda",
      "state": "Punjab",
      "place": "Razia Sultana Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 310,
      "city": "Bathinda",
      "state": "Punjab",
      "place": "Mazaar of Peer Haji Rattan",
      "popularity": "Medium",
      "description": "Mosque, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 311,
      "city": "Bathinda",
      "state": "Punjab",
      "place": "Razia Sultan's Tomb",
      "popularity": "Medium",
      "description": "Historical tomb, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 312,
      "city": "Beed",
      "state": "Maharashtra",
      "place": "Kankaleshwar Temple",
      "popularity": "High",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 313,
      "city": "Beed",
      "state": "Maharashtra",
      "place": "Madhav Nagar Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 314,
      "city": "Beed",
      "state": "Maharashtra",
      "place": "Ratnagiri Rishi Math",
      "popularity": "Medium",
      "description": "Spiritual center, meditation.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 315,
      "city": "Begusarai",
      "state": "Bihar",
      "place": "Kanwar Lake Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, diverse bird species.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 316,
      "city": "Begusarai",
      "state": "Bihar",
      "place": "Maa Tara Chandi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 317,
      "city": "Begusarai",
      "state": "Bihar",
      "place": "Sun Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 318,
      "city": "Begusarai",
      "state": "Bihar",
      "place": "Patna Planetarium",
      "popularity": "Medium",
      "description": "Planetarium, educational exhibits.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 319,
      "city": "Begusarai",
      "state": "Bihar",
      "place": "Khudi Ram Bose Memorial",
      "popularity": "Medium",
      "description": "Memorial, historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 320,
      "city": "Belgaum",
      "state": "Karnataka",
      "place": "Belgaum Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 321,
      "city": "Belgaum",
      "state": "Karnataka",
      "place": "Gokak Falls",
      "popularity": "High",
      "description": "Scenic waterfall, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 322,
      "city": "Belgaum",
      "state": "Karnataka",
      "place": "Kapileshwara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 323,
      "city": "Belgaum",
      "state": "Karnataka",
      "place": "Shri Ramakrishna Mission Ashram",
      "popularity": "Medium",
      "description": "Ashram, spiritual retreat.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 324,
      "city": "Bellary",
      "state": "Karnataka",
      "place": "Hampi",
      "popularity": "High",
      "description": "Ancient city ruins, UNESCO World Heritage Site.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 325,
      "city": "Bellary",
      "state": "Karnataka",
      "place": "Bellary Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 326,
      "city": "Bellary",
      "state": "Karnataka",
      "place": "Anantapur Dam",
      "popularity": "Medium",
      "description": "Dam on Tungabhadra River, scenic surroundings.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 327,
      "city": "Berhampur",
      "state": "Odisha",
      "place": "Gopalpur Beach",
      "popularity": "Medium",
      "description": "Scenic beach, water sports activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 328,
      "city": "Berhampur",
      "state": "Odisha",
      "place": "Biranchi Narayan Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 329,
      "city": "Berhampur",
      "state": "Odisha",
      "place": "Tarakasi Village",
      "popularity": "Medium",
      "description": "Artisan village, silver filigree work.",
      "type": "Village",
      "budget": 1500
    },
    {
      "Index": 330,
      "city": "Berhampur",
      "state": "Odisha",
      "place": "Berhampur City Park",
      "popularity": "Medium",
      "description": "Public park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 331,
      "city": "Berhampur",
      "state": "Odisha",
      "place": "Biju Patnaik Park",
      "popularity": "Medium",
      "description": "Public park, botanical garden.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 332,
      "city": "Berhampur",
      "state": "Odisha",
      "place": "Kushabhadra River",
      "popularity": "High",
      "description": "River, scenic beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 333,
      "city": "Bettiah",
      "state": "Bihar",
      "place": "Bettiah Raj",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 334,
      "city": "Bettiah",
      "state": "Bihar",
      "place": "Karmanasa River",
      "popularity": "Medium",
      "description": "River, scenic surroundings.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 335,
      "city": "Bettiah",
      "state": "Bihar",
      "place": "Thakur Niranjan Nath Pandey Museum",
      "popularity": "Medium",
      "description": "Museum, showcasing local history.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 336,
      "city": "Bhadrachalam",
      "state": "Telangana",
      "place": "Sri Rama Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 337,
      "city": "Bhadrachalam",
      "state": "Telangana",
      "place": "Parnasala",
      "popularity": "Medium",
      "description": "Pilgrimage site, cultural significance.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 338,
      "city": "Bhadrachalam",
      "state": "Telangana",
      "place": "Kinnerasani Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, safari.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 339,
      "city": "Bhadravati",
      "state": "Karnataka",
      "place": "Bhadra Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 340,
      "city": "Bhadravati",
      "state": "Karnataka",
      "place": "Adi Narayana Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 341,
      "city": "Bhadravati",
      "state": "Karnataka",
      "place": "Jain Math",
      "popularity": "Medium",
      "description": "Jain math, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 342,
      "city": "Bhagalpur",
      "state": "Bihar",
      "place": "Vikramshila Gangetic Dolphin Sanctuary",
      "popularity": "Medium",
      "description": "Dolphin sanctuary, boat safaris.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 343,
      "city": "Bhagalpur",
      "state": "Bihar",
      "place": "Budhanath Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 344,
      "city": "Bhagalpur",
      "state": "Bihar",
      "place": "Mandar Parvat",
      "popularity": "Medium",
      "description": "Historical site, pilgrimage spot.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 345,
      "city": "Bhagalpur",
      "state": "Bihar",
      "place": "Vikramshila University Ruins",
      "popularity": "High",
      "description": "Ancient university ruins, archaeological site.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 346,
      "city": "Bhagalpur",
      "state": "Bihar",
      "place": "Colganj Rock Cut Temple",
      "popularity": "Medium",
      "description": "Hindu temple, carved out of rock.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 347,
      "city": "Bhagalpur",
      "state": "Bihar",
      "place": "Jawaharlal Nehru Biological Park",
      "popularity": "Medium",
      "description": "Zoological park, diverse wildlife.",
      "type": "Wildlife",
      "budget": 1500
    },
    {
      "Index": 348,
      "city": "Bhandara",
      "state": "Maharashtra",
      "place": "Deeksha Bhoomi",
      "popularity": "High",
      "description": "Buddhist stupa, pilgrimage site.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 349,
      "city": "Bhandara",
      "state": "Maharashtra",
      "place": "Nagzira Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, biodiversity hotspot.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 350,
      "city": "Bhandara",
      "state": "Maharashtra",
      "place": "Bawanthadi River",
      "popularity": "Medium",
      "description": "River, boating and fishing.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 351,
      "city": "Bharatpur",
      "state": "Rajasthan",
      "place": "Keoladeo National Park",
      "popularity": "High",
      "description": "National park, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 352,
      "city": "Bharatpur",
      "state": "Rajasthan",
      "place": "Lohagarh Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 353,
      "city": "Bharatpur",
      "state": "Rajasthan",
      "place": "Ganga Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 354,
      "city": "Bharuch",
      "state": "Gujarat",
      "place": "Bharuch Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 355,
      "city": "Bharuch",
      "state": "Gujarat",
      "place": "Narmada Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 356,
      "city": "Bharuch",
      "state": "Gujarat",
      "place": "Shri Swaminarayan Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 357,
      "city": "Bharuch",
      "state": "Gujarat",
      "place": "Bhrigu Rishi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 358,
      "city": "Bharuch",
      "state": "Gujarat",
      "place": "Vishal Khadi Eco Tourism",
      "popularity": "High",
      "description": "Eco-tourism site, khadi production.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 359,
      "city": "Bharuch",
      "state": "Gujarat",
      "place": "Shoolpaneshwar Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, biodiversity hotspot.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 360,
      "city": "Bharuch",
      "state": "Gujarat",
      "place": "Narmada Mata Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 361,
      "city": "Bhatpara",
      "state": "West Bengal",
      "place": "Kankalitala",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 362,
      "city": "Bhatpara",
      "state": "West Bengal",
      "place": "Krishna Chandra Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 363,
      "city": "Bhatpara",
      "state": "West Bengal",
      "place": "Hansheswari Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 364,
      "city": "Bhavnagar",
      "state": "Gujarat",
      "place": "Gandhi Smriti Museum",
      "popularity": "Medium",
      "description": "Museum, showcasing Gandhi's life and work.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 365,
      "city": "Bhavnagar",
      "state": "Gujarat",
      "place": "Takhteshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 366,
      "city": "Bhavnagar",
      "state": "Gujarat",
      "place": "Gaurishankar Lake",
      "popularity": "Medium",
      "description": "Lake, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 367,
      "city": "Bhavnagar",
      "state": "Gujarat",
      "place": "Victoria Park",
      "popularity": "Medium",
      "description": "Public park, leisure activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 368,
      "city": "Bhavnagar",
      "state": "Gujarat",
      "place": "Barton Library and Museum",
      "popularity": "Medium",
      "description": "Museum, historical artifacts.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 369,
      "city": "Bheemunipatnam",
      "state": "Andhra Pradesh",
      "place": "Bheemunipatnam Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 370,
      "city": "Bheemunipatnam",
      "state": "Andhra Pradesh",
      "place": "Bheemalingeswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 371,
      "city": "Bheemunipatnam",
      "state": "Andhra Pradesh",
      "place": "Bheemunipatnam Light House",
      "popularity": "Medium",
      "description": "Light house, panoramic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 372,
      "city": "Bheemunipatnam",
      "state": "Andhra Pradesh",
      "place": "Buddha Statue of Amaravathi",
      "popularity": "Medium",
      "description": "Monument, historical significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 373,
      "city": "Bheemunipatnam",
      "state": "Andhra Pradesh",
      "place": "Visakha Museum",
      "popularity": "Medium",
      "description": "Museum, historical artifacts.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 374,
      "city": "Bhilai",
      "state": "Chhattisgarh",
      "place": "Maitri Bagh",
      "popularity": "Medium",
      "description": "Zoo and park, recreational facilities.",
      "type": "Wildlife",
      "budget": 1500
    },
    {
      "Index": 375,
      "city": "Bhilai",
      "state": "Chhattisgarh",
      "place": "Durg-Bhilai Nagar",
      "popularity": "Medium",
      "description": "Urban area, industrial city.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 376,
      "city": "Bhilai",
      "state": "Chhattisgarh",
      "place": "Sri Adishakti Shri Mahakali Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 377,
      "city": "Bhilai",
      "state": "Chhattisgarh",
      "place": "Jain Temple",
      "popularity": "Medium",
      "description": "Jain temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 378,
      "city": "Bhilai",
      "state": "Chhattisgarh",
      "place": "Maitri Bagh Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 379,
      "city": "Bhilai",
      "state": "Chhattisgarh",
      "place": "Maitri Bagh Zoo",
      "popularity": "High",
      "description": "Zoological park, recreational activities.",
      "type": "Wildlife",
      "budget": 1000
    },
    {
      "Index": 380,
      "city": "Bhilai",
      "state": "Chhattisgarh",
      "place": "Bhilai Steel Plant",
      "popularity": "Medium",
      "description": "Industrial complex, guided tours.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 381,
      "city": "Bhilai",
      "state": "Chhattisgarh",
      "place": "Utai Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 382,
      "city": "Bhilwara",
      "state": "Rajasthan",
      "place": "Harni Mahadev Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 383,
      "city": "Bhilwara",
      "state": "Rajasthan",
      "place": "Meenakshi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 384,
      "city": "Bhilwara",
      "state": "Rajasthan",
      "place": "Bijolia Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 385,
      "city": "Bhimavaram",
      "state": "Andhra Pradesh",
      "place": "Somaramam Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 386,
      "city": "Bhimavaram",
      "state": "Andhra Pradesh",
      "place": "Bhimavaram Beach",
      "popularity": "Medium",
      "description": "Scenic beach, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 387,
      "city": "Bhimavaram",
      "state": "Andhra Pradesh",
      "place": "ISKCON Temple, Bhimavaram",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 388,
      "city": "Bhimavaram",
      "state": "Andhra Pradesh",
      "place": "Somarama Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 389,
      "city": "Bhimavaram",
      "state": "Andhra Pradesh",
      "place": "Danavaipeta Masjid",
      "popularity": "Medium",
      "description": "Mosque, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 390,
      "city": "Bhimavaram",
      "state": "Andhra Pradesh",
      "place": "Shopping Street, Bhimavaram",
      "popularity": "Medium",
      "description": "Marketplace, local shopping.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 391,
      "city": "Bhimavaram",
      "state": "Andhra Pradesh",
      "place": "Ksheera Rama Lingeswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 392,
      "city": "Bhind",
      "state": "Madhya Pradesh",
      "place": "Chhatri of Malhar Rao Holkar",
      "popularity": "Medium",
      "description": "Memorial, historical significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 393,
      "city": "Bhind",
      "state": "Madhya Pradesh",
      "place": "Khedi Shiv Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 394,
      "city": "Bhind",
      "state": "Madhya Pradesh",
      "place": "Bir Singh Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 395,
      "city": "Bhiwandi",
      "state": "Maharashtra",
      "place": "Tungareshwar Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, nature trails.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 396,
      "city": "Bhiwandi",
      "state": "Maharashtra",
      "place": "Temple Hill",
      "popularity": "Medium",
      "description": "Hilltop temple, panoramic views.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 397,
      "city": "Bhiwandi",
      "state": "Maharashtra",
      "place": "Haji Malang Dargah",
      "popularity": "Medium",
      "description": "Dargah, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 398,
      "city": "Bhiwani",
      "state": "Haryana",
      "place": "Maharaja Agrasen Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 399,
      "city": "Bhiwani",
      "state": "Haryana",
      "place": "Bhiwani City Park",
      "popularity": "Medium",
      "description": "Urban park, green space.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 400,
      "city": "Bhiwani",
      "state": "Haryana",
      "place": "Shri Krishna Museum",
      "popularity": "Medium",
      "description": "Museum, showcasing artifacts related to Lord Krishna.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 401,
      "city": "Bhiwani",
      "state": "Haryana",
      "place": "Tosham Hill",
      "popularity": "Medium",
      "description": "Hill station, panoramic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 402,
      "city": "Bhiwani",
      "state": "Haryana",
      "place": "Bhairav Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 403,
      "city": "Bhiwani",
      "state": "Haryana",
      "place": "Guga Mari Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 404,
      "city": "Bhopal",
      "state": "Madhya Pradesh",
      "place": "Bhimbetka Caves",
      "popularity": "High",
      "description": "Ancient rock shelters, UNESCO World Heritage Site.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 405,
      "city": "Bhopal",
      "state": "Madhya Pradesh",
      "place": "Upper Lake",
      "popularity": "High",
      "description": "Artificial lake, boating facilities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 406,
      "city": "Bhopal",
      "state": "Madhya Pradesh",
      "place": "Indira Gandhi Rashtriya Manav Sangrahalaya",
      "popularity": "High",
      "description": "Anthropological museum, tribal artifacts.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 407,
      "city": "Bhopal",
      "state": "Madhya Pradesh",
      "place": "Bhopal Boat Club",
      "popularity": "Low",
      "description": "Boating experience, scenic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 408,
      "city": "Bhopal",
      "state": "Madhya Pradesh",
      "place": "Taj-ul-Masajid",
      "popularity": "High",
      "description": "Largest mosque in India, Islamic architecture.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 409,
      "city": "Bhopal",
      "state": "Madhya Pradesh",
      "place": "Van Vihar National Park",
      "popularity": "Medium",
      "description": "National park, wildlife conservation.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 410,
      "city": "Bhopal",
      "state": "Madhya Pradesh",
      "place": "Gohar Mahal",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 411,
      "city": "Bhubaneswar",
      "state": "Odisha",
      "place": "Lingaraj Temple",
      "popularity": "High",
      "description": "Sacred Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 412,
      "city": "Bhubaneswar",
      "state": "Odisha",
      "place": "Udayagiri and Khandagiri Caves",
      "popularity": "Medium",
      "description": "Ancient Jain rock-cut caves, archaeological site.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 413,
      "city": "Bhubaneswar",
      "state": "Odisha",
      "place": "Nandankanan Zoological Park",
      "popularity": "Medium",
      "description": "Zoo with diverse wildlife species, botanical garden.",
      "type": "Wildlife",
      "budget": 1500
    },
    {
      "Index": 414,
      "city": "Bhubaneswar",
      "state": "Odisha",
      "place": "Lingaraja Temple",
      "popularity": "High",
      "description": "Hindu temple, architectural marvel.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 415,
      "city": "Bhubaneswar",
      "state": "Odisha",
      "place": "Dhauli Shanti Stupa",
      "popularity": "High",
      "description": "Buddhist monument, peace pagoda.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 416,
      "city": "Bhusawal",
      "state": "Maharashtra",
      "place": "Bodvaleshwar Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 417,
      "city": "Bhusawal",
      "state": "Maharashtra",
      "place": "Gautam Buddh Udyan",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 418,
      "city": "Bhusawal",
      "state": "Maharashtra",
      "place": "Historic Locomotive Shed",
      "popularity": "Medium",
      "description": "Museum, showcasing historical locomotives.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 419,
      "city": "Bhusawal",
      "state": "Maharashtra",
      "place": "Bodhisattva Vihara",
      "popularity": "Medium",
      "description": "Buddhist monastery, meditation.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 420,
      "city": "Bhusawal",
      "state": "Maharashtra",
      "place": "Bhusawal Thermal Power Station",
      "popularity": "Medium",
      "description": "Power plant, industrial area.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 421,
      "city": "Bhusawal",
      "state": "Maharashtra",
      "place": "Muktai Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 422,
      "city": "Bidar",
      "state": "Karnataka",
      "place": "Guru Nanak Jhira Sahib",
      "popularity": "Medium",
      "description": "Sikh gurdwara, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 423,
      "city": "Bidar",
      "state": "Karnataka",
      "place": "Bahmani Tombs",
      "popularity": "Medium",
      "description": "Historical tombs, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 424,
      "city": "Bidar",
      "state": "Karnataka",
      "place": "Narasimha Jhira Cave Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 425,
      "city": "Bidar",
      "state": "Karnataka",
      "place": "Bidar Fort",
      "popularity": "High",
      "description": "Historical fort, architectural significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 426,
      "city": "Bidar",
      "state": "Karnataka",
      "place": "Gurudwara Nanak Jhira Sahib",
      "popularity": "High",
      "description": "Sikh pilgrimage site, sacred spring.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 427,
      "city": "Bidar",
      "state": "Karnataka",
      "place": "Basavakalyan Fort",
      "popularity": "Medium",
      "description": "Historical fort, Basaveshwara temple.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 428,
      "city": "Bijapur",
      "state": "Karnataka",
      "place": "Gol Gumbaz",
      "popularity": "High",
      "description": "Mausoleum, architectural marvel.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 429,
      "city": "Bijapur",
      "state": "Karnataka",
      "place": "Ibrahim Rauza",
      "popularity": "Medium",
      "description": "Mausoleum, Islamic architecture.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 430,
      "city": "Bijapur",
      "state": "Karnataka",
      "place": "Jamia Masjid",
      "popularity": "Medium",
      "description": "Historical mosque, cultural significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 431,
      "city": "Bijapur",
      "state": "Karnataka",
      "place": "Ibrahim Rouza",
      "popularity": "High",
      "description": "Tomb and mosque, Islamic architecture.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 432,
      "city": "Bijapur",
      "state": "Karnataka",
      "place": "Bara Kaman",
      "popularity": "Medium",
      "description": "Mausoleum, incomplete structure.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 433,
      "city": "Bijapur",
      "state": "Karnataka",
      "place": "Uppali Buruz",
      "popularity": "Medium",
      "description": "Historical monument, watchtower.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 434,
      "city": "Bijapur",
      "state": "Karnataka",
      "place": "Taj Bawdi",
      "popularity": "Medium",
      "description": "Historical stepwell, architectural relic.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 435,
      "city": "Bijbiara",
      "state": "Jammu and Kashmir",
      "place": "Jawaharlal Nehru Sports Stadium",
      "popularity": "Medium",
      "description": "Sports stadium, events.",
      "type": "Entertainment",
      "budget": 2000
    },
    {
      "Index": 436,
      "city": "Bijbiara",
      "state": "Jammu and Kashmir",
      "place": "Achabal Gardens",
      "popularity": "Medium",
      "description": "Mughal garden, landscaped park.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 437,
      "city": "Bijnor",
      "state": "Uttar Pradesh",
      "place": "Sehal",
      "popularity": "Medium",
      "description": "Historical site, archaeological ruins.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 438,
      "city": "Bijnor",
      "state": "Uttar Pradesh",
      "place": "Darvasa Hyder Kuli",
      "popularity": "Medium",
      "description": "Historical site, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 439,
      "city": "Bijnor",
      "state": "Uttar Pradesh",
      "place": "Permu Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 440,
      "city": "Bikaner",
      "state": "Rajasthan",
      "place": "Junagarh Fort",
      "popularity": "High",
      "description": "Historical fort, museum, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 441,
      "city": "Bikaner",
      "state": "Rajasthan",
      "place": "Karni Mata Temple",
      "popularity": "Medium",
      "description": "Hindu temple, rat sanctuary, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 442,
      "city": "Bikaner",
      "state": "Rajasthan",
      "place": "Lalgarh Palace",
      "popularity": "Medium",
      "description": "Historical palace, museum, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 443,
      "city": "Bilaspur",
      "state": "Chhattisgarh",
      "place": "Tala Village",
      "popularity": "Medium",
      "description": "Tribal village, cultural immersion.",
      "type": "Village",
      "budget": 1500
    },
    {
      "Index": 444,
      "city": "Bilaspur",
      "state": "Chhattisgarh",
      "place": "Ratanpur Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 445,
      "city": "Bilaspur",
      "state": "Chhattisgarh",
      "place": "Kanan Pendari Zoo",
      "popularity": "Medium",
      "description": "Zoo with diverse wildlife species.",
      "type": "Wildlife",
      "budget": 1000
    },
    {
      "Index": 446,
      "city": "Bilaspur",
      "state": "Chhattisgarh",
      "place": "Kawardha Palace",
      "popularity": "High",
      "description": "Royal palace, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 447,
      "city": "Bilaspur",
      "state": "Chhattisgarh",
      "place": "Tala, Bilaspur",
      "popularity": "High",
      "description": "Ancient site, Buddhist sculptures.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 448,
      "city": "Bishnupur",
      "state": "Manipur",
      "place": "Keibul Lamjao National Park",
      "popularity": "High",
      "description": "World's only floating national park.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 449,
      "city": "Bishnupur",
      "state": "Manipur",
      "place": "Loukoipat Ecological Park",
      "popularity": "Medium",
      "description": "Ecological park, biodiversity.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 450,
      "city": "Bishnupur",
      "state": "Manipur",
      "place": "Loktak Floating Resort",
      "popularity": "Medium",
      "description": "Resort, floating cottages.",
      "type": "Entertainment",
      "budget": 2000
    },
    {
      "Index": 451,
      "city": "Bishnupur",
      "state": "Manipur",
      "place": "Red Hill (Lamdan Hill)",
      "popularity": "High",
      "description": "Hill station, panoramic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 452,
      "city": "Bishnupur",
      "state": "Manipur",
      "place": "Bishnupur Garden",
      "popularity": "Medium",
      "description": "Public garden, leisure activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 453,
      "city": "Bodh Gaya",
      "state": "Bihar",
      "place": "Mahabodhi Temple",
      "popularity": "High",
      "description": "Buddhist pilgrimage site, UNESCO World Heritage Site.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 454,
      "city": "Bodh Gaya",
      "state": "Bihar",
      "place": "Bodhi Tree",
      "popularity": "High",
      "description": "Holy fig tree, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 455,
      "city": "Bodh Gaya",
      "state": "Bihar",
      "place": "Vishnupad Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 456,
      "city": "Bodh Gaya",
      "state": "Bihar",
      "place": "Dungeshwari Cave",
      "popularity": "Medium",
      "description": "Buddhist pilgrimage site, meditation cave.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 457,
      "city": "Bodh Gaya",
      "state": "Bihar",
      "place": "Barabar Caves",
      "popularity": "Medium",
      "description": "Buddhist rock-cut caves, archaeological site.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 458,
      "city": "Bokaro",
      "state": "Jharkhand",
      "place": "City Park, Bokaro",
      "popularity": "Medium",
      "description": "Public park, leisure activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 459,
      "city": "Bokaro",
      "state": "Jharkhand",
      "place": "Garga Dam",
      "popularity": "Medium",
      "description": "Dam, scenic views and picnics.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 460,
      "city": "Bomdila",
      "state": "Arunachal Pradesh",
      "place": "Bomdila Monastery",
      "popularity": "Medium",
      "description": "Tibetan Buddhist monastery, serene atmosphere.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 461,
      "city": "Bomdila",
      "state": "Arunachal Pradesh",
      "place": "Eaglenest Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 462,
      "city": "Bongaigaon",
      "state": "Assam",
      "place": "Bageswari Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 463,
      "city": "Bongaigaon",
      "state": "Assam",
      "place": "Batha Museum",
      "popularity": "Medium",
      "description": "Museum, artifacts on Assamese culture.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 464,
      "city": "Bongaigaon",
      "state": "Assam",
      "place": "Bagheswari Hill",
      "popularity": "Medium",
      "description": "Hill station, panoramic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 465,
      "city": "Bongaigaon",
      "state": "Assam",
      "place": "Panbari Reserve Forest",
      "popularity": "Medium",
      "description": "Forest reserve, wildlife conservation.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 466,
      "city": "Bongaigaon",
      "state": "Assam",
      "place": "Chitralekha Udyan",
      "popularity": "Medium",
      "description": "Public park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 467,
      "city": "Brahmapur",
      "state": "Odisha",
      "place": "Taratarini Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 468,
      "city": "Brahmapur",
      "state": "Odisha",
      "place": "Patisonapur Beach",
      "popularity": "Medium",
      "description": "Scenic beach, relaxation spot.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 469,
      "city": "Brahmapur",
      "state": "Odisha",
      "place": "Tara Tarini Temple",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 470,
      "city": "Brahmapur",
      "state": "Odisha",
      "place": "Brahmapur Planetarium",
      "popularity": "Medium",
      "description": "Planetarium, astronomy education.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 471,
      "city": "Brahmapur",
      "state": "Odisha",
      "place": "Mahendragiri",
      "popularity": "High",
      "description": "Mountain peak, trekking trails.",
      "type": "Adventure",
      "budget": 2000
    },
    {
      "Index": 472,
      "city": "Brahmapur",
      "state": "Odisha",
      "place": "Tara Tarini Hill",
      "popularity": "High",
      "description": "Hill, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 473,
      "city": "Budaun",
      "state": "Uttar Pradesh",
      "place": "Balaji Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 474,
      "city": "Budaun",
      "state": "Uttar Pradesh",
      "place": "Qadar Chowk",
      "popularity": "Medium",
      "description": "Town square, urban area.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 475,
      "city": "Budaun",
      "state": "Uttar Pradesh",
      "place": "Kila Budaun",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 476,
      "city": "Budaun",
      "state": "Uttar Pradesh",
      "place": "Maithan, Budaun",
      "popularity": "Average",
      "description": "Historical fort, archaeological site.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 477,
      "city": "Budaun",
      "state": "Uttar Pradesh",
      "place": "Radha Kund",
      "popularity": "Average",
      "description": "Hindu pilgrimage site, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 478,
      "city": "Budaun",
      "state": "Uttar Pradesh",
      "place": "Alamgir, Budaun",
      "popularity": "Average",
      "description": "Mosque, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 479,
      "city": "Bulandshahr",
      "state": "Uttar Pradesh",
      "place": "Kala Aam",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 480,
      "city": "Bulandshahr",
      "state": "Uttar Pradesh",
      "place": "Tamil Karan Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 481,
      "city": "Bulandshahr",
      "state": "Uttar Pradesh",
      "place": "Baba Shri Vindeshwari Dham",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 482,
      "city": "Buxar",
      "state": "Bihar",
      "place": "Buxar Fort",
      "popularity": "Medium",
      "description": "Historical fort, archaeological site.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 483,
      "city": "Buxar",
      "state": "Bihar",
      "place": "Kamleshwar Nath Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 484,
      "city": "Buxar",
      "state": "Bihar",
      "place": "Kuwar Singh Chowk",
      "popularity": "Medium",
      "description": "Memorial, historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 485,
      "city": "Calangute",
      "state": "Goa",
      "place": "Calangute Beach",
      "popularity": "High",
      "description": "Bustling beach, water sports.",
      "type": "Beach",
      "budget": 1500
    },
    {
      "Index": 486,
      "city": "Calangute",
      "state": "Goa",
      "place": "Baga Beach",
      "popularity": "Medium",
      "description": "Popular beach, nightlife.",
      "type": "Beach",
      "budget": 2000
    },
    {
      "Index": 487,
      "city": "Calangute",
      "state": "Goa",
      "place": "St. Alex Church, Calangute",
      "popularity": "Medium",
      "description": "Old church, Portuguese architecture.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 488,
      "city": "Chaibasa",
      "state": "Jharkhand",
      "place": "Dassam Falls",
      "popularity": "High",
      "description": "Picturesque waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 489,
      "city": "Chaibasa",
      "state": "Jharkhand",
      "place": "Jubilee Lake",
      "popularity": "Medium",
      "description": "Lake, boating and picnics.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 490,
      "city": "Chalisgaon",
      "state": "Maharashtra",
      "place": "Kukdeshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 491,
      "city": "Chalisgaon",
      "state": "Maharashtra",
      "place": "Nilkantheshwar Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 492,
      "city": "Chalisgaon",
      "state": "Maharashtra",
      "place": "Aner Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 493,
      "city": "Chamba",
      "state": "Himachal Pradesh",
      "place": "Khajjiar, Chamba",
      "popularity": "Medium",
      "description": "Meadow, paragliding, horse riding.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 494,
      "city": "Chamba",
      "state": "Himachal Pradesh",
      "place": "Chamera Lake",
      "popularity": "Medium",
      "description": "Lake, boating, scenic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 495,
      "city": "Chamba",
      "state": "Himachal Pradesh",
      "place": "Lakshmi Narayan Temples",
      "popularity": "Medium",
      "description": "Hindu temples, architectural marvel.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 496,
      "city": "Champhai",
      "state": "Mizoram",
      "place": "Champhai Viewpoint",
      "popularity": "High",
      "description": "Panoramic views of Champhai town.",
      "type": "Adventure",
      "budget": 1000
    },
    {
      "Index": 497,
      "city": "Champhai",
      "state": "Mizoram",
      "place": "Thasiama Seno Neihna",
      "popularity": "Medium",
      "description": "Forest reserve, trekking trails.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 498,
      "city": "Champhai",
      "state": "Mizoram",
      "place": "Mura Puk",
      "popularity": "High",
      "description": "Mizo heritage site, ancient relics.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 499,
      "city": "Chandausi",
      "state": "Uttar Pradesh",
      "place": "Gajraula",
      "popularity": "Medium",
      "description": "Town, urban area.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 500,
      "city": "Chandausi",
      "state": "Uttar Pradesh",
      "place": "Kalagarh Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 501,
      "city": "Chandel",
      "state": "Manipur",
      "place": "Moreh",
      "popularity": "High",
      "description": "Town, border trade hub with Myanmar.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 502,
      "city": "Chandel",
      "state": "Manipur",
      "place": "Khongjom",
      "popularity": "High",
      "description": "Historical site, Battle of Khongjom.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 503,
      "city": "Chandel",
      "state": "Manipur",
      "place": "Tengnoupal",
      "popularity": "High",
      "description": "Town, transit point to Myanmar border.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 504,
      "city": "Chandel",
      "state": "Manipur",
      "place": "Chakpikarong",
      "popularity": "High",
      "description": "Town, cultural significance.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 505,
      "city": "Chandel",
      "state": "Manipur",
      "place": "Tengnoupal War Memorial",
      "popularity": "Medium",
      "description": "War memorial, historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 506,
      "city": "Chandigarh",
      "state": "Chandigarh",
      "place": "Rock Garden, Chandigarh",
      "popularity": "High",
      "description": "Artistic garden, sculptures made from recycled materials.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 507,
      "city": "Chandigarh",
      "state": "Chandigarh",
      "place": "Sukhna Lake",
      "popularity": "Medium",
      "description": "Picturesque lake, boating facilities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 508,
      "city": "Chandigarh",
      "state": "Chandigarh",
      "place": "Capitol Complex",
      "popularity": "High",
      "description": "Architectural complex, UNESCO World Heritage Site.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 509,
      "city": "Chandrapur",
      "state": "Maharashtra",
      "place": "Tadoba Andhari Tiger Reserve",
      "popularity": "High",
      "description": "Tiger reserve, wildlife safari.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 510,
      "city": "Chandrapur",
      "state": "Maharashtra",
      "place": "Gond Raja Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 511,
      "city": "Chandrapur",
      "state": "Maharashtra",
      "place": "Ballaleshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 512,
      "city": "Chandrapur",
      "state": "Maharashtra",
      "place": "Ballarpur Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 513,
      "city": "Chandrapur",
      "state": "Maharashtra",
      "place": "Chandrapur Super Thermal Power Station",
      "popularity": "High",
      "description": "Power station, industrial tour.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 514,
      "city": "Chandrapur",
      "state": "Maharashtra",
      "place": "Tadoba Andhari Tiger Project",
      "popularity": "High",
      "description": "Tiger reserve, wildlife safari.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 515,
      "city": "Chandrapur",
      "state": "Maharashtra",
      "place": "Sankalan Kendra Museum",
      "popularity": "Medium",
      "description": "Museum, tribal artifacts.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 516,
      "city": "Chandrapur",
      "state": "Maharashtra",
      "place": "Ancient Jain Temple",
      "popularity": "Low",
      "description": "Jain temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 517,
      "city": "Chandrapur",
      "state": "Maharashtra",
      "place": "Gugamal National Park",
      "popularity": "Medium",
      "description": "National park, biodiversity hotspot.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 518,
      "city": "Chandrapur",
      "state": "Maharashtra",
      "place": "Ancient Caves of Ballarpur",
      "popularity": "Medium",
      "description": "Historical caves, archaeological site.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 519,
      "city": "Chandrapur",
      "state": "Maharashtra",
      "place": "Shri Mahakali Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 520,
      "city": "Chandrapur",
      "state": "Maharashtra",
      "place": "Ancient Caves of Chanda",
      "popularity": "Medium",
      "description": "Historical caves, archaeological site.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 521,
      "city": "Chandrapur",
      "state": "Maharashtra",
      "place": "Gawilgarh Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 522,
      "city": "Channapatna",
      "state": "Karnataka",
      "place": "Bannari Amman Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 523,
      "city": "Channapatna",
      "state": "Karnataka",
      "place": "Channapatna Toys",
      "popularity": "Medium",
      "description": "Artisan workshops, toy-making.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 524,
      "city": "Channapatna",
      "state": "Karnataka",
      "place": "Kabbalamma Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 525,
      "city": "Chapra",
      "state": "Bihar",
      "place": "Sonepur Cattle Fair",
      "popularity": "High",
      "description": "Fair, livestock trading.",
      "type": "Entertainment",
      "budget": 2000
    },
    {
      "Index": 526,
      "city": "Chapra",
      "state": "Bihar",
      "place": "Sonpur Mela",
      "popularity": "Medium",
      "description": "Fair, cultural festivities.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 527,
      "city": "Chapra",
      "state": "Bihar",
      "place": "Kamla Bhavan Museum",
      "popularity": "Medium",
      "description": "Museum showcasing artifacts and sculptures.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 528,
      "city": "Chennai",
      "state": "Tamil Nadu",
      "place": "Marina Beach",
      "popularity": "High",
      "description": "Longest urban beach, lively atmosphere.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 529,
      "city": "Chennai",
      "state": "Tamil Nadu",
      "place": "Kapaleeshwarar Temple",
      "popularity": "High",
      "description": "Dravidian architecture, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 530,
      "city": "Chennai",
      "state": "Tamil Nadu",
      "place": "San Thome Cathedral",
      "popularity": "Medium",
      "description": "Gothic architecture, serene ambiance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 531,
      "city": "Chennai",
      "state": "Tamil Nadu",
      "place": "Fort St. George",
      "popularity": "Medium",
      "description": "Historical significance, well-preserved.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 532,
      "city": "Chennai",
      "state": "Tamil Nadu",
      "place": "Arignar Anna Zoological Park",
      "popularity": "High",
      "description": "One of the largest zoos in South Asia.",
      "type": "Wildlife",
      "budget": 1000
    },
    {
      "Index": 533,
      "city": "Chennai",
      "state": "Tamil Nadu",
      "place": "Elliots Beach",
      "popularity": "Medium",
      "description": "Scenic beach, serene atmosphere.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 534,
      "city": "Chhapra",
      "state": "Bihar",
      "place": "Sonepur Mela",
      "popularity": "Medium",
      "description": "Fair, livestock trade.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 535,
      "city": "Chhapra",
      "state": "Bihar",
      "place": "Shri Harihar Nath Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 536,
      "city": "Chhapra",
      "state": "Bihar",
      "place": "Brahampur Ghat",
      "popularity": "Medium",
      "description": "Hindu pilgrimage site, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 537,
      "city": "Chhindwara",
      "state": "Madhya Pradesh",
      "place": "Patalkot",
      "popularity": "Medium",
      "description": "Valley, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 538,
      "city": "Chhindwara",
      "state": "Madhya Pradesh",
      "place": "Jam Sawli Hanuman Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 539,
      "city": "Chhindwara",
      "state": "Madhya Pradesh",
      "place": "Jungle Safari",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, safari tours.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 540,
      "city": "Chikkamagaluru",
      "state": "Karnataka",
      "place": "Mullayanagiri",
      "popularity": "Medium",
      "description": "Hill station, trekking destination.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 541,
      "city": "Chikkamagaluru",
      "state": "Karnataka",
      "place": "Baba Budangiri",
      "popularity": "Medium",
      "description": "Mountain range, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 542,
      "city": "Chikkamagaluru",
      "state": "Karnataka",
      "place": "Belavadi",
      "popularity": "Medium",
      "description": "Historical temple complex, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 543,
      "city": "Chikmagalur",
      "state": "Karnataka",
      "place": "Kemmangundi",
      "popularity": "Medium",
      "description": "Hill station, botanical garden.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 544,
      "city": "Chikmagalur",
      "state": "Karnataka",
      "place": "Mullayanagiri Peak",
      "popularity": "High",
      "description": "Highest peak in Karnataka, trekking.",
      "type": "Adventure",
      "budget": 1000
    },
    {
      "Index": 545,
      "city": "Chikmagalur",
      "state": "Karnataka",
      "place": "Kudremukh National Park",
      "popularity": "High",
      "description": "National park, biodiversity hotspot.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 546,
      "city": "Chikmagalur",
      "state": "Karnataka",
      "place": "Hebbe Falls",
      "popularity": "Medium",
      "description": "Scenic waterfall, trekking.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 547,
      "city": "Chinsurah",
      "state": "West Bengal",
      "place": "Dutch Cemetery",
      "popularity": "Medium",
      "description": "Historical cemetery, Dutch colonial heritage.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 548,
      "city": "Chinsurah",
      "state": "West Bengal",
      "place": "Hooghly Imambara",
      "popularity": "Medium",
      "description": "Islamic shrine, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 549,
      "city": "Chinsurah",
      "state": "West Bengal",
      "place": "Chinsurah Court Museum",
      "popularity": "Medium",
      "description": "Museum showcasing colonial artifacts.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 550,
      "city": "Chiplun",
      "state": "Maharashtra",
      "place": "Koyna Dam",
      "popularity": "Medium",
      "description": "Dam, reservoir, scenic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 551,
      "city": "Chiplun",
      "state": "Maharashtra",
      "place": "Vashishti River",
      "popularity": "Medium",
      "description": "River, boating, and fishing.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 552,
      "city": "Chiplun",
      "state": "Maharashtra",
      "place": "Sawatsada Waterfall",
      "popularity": "Medium",
      "description": "Scenic waterfall, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 553,
      "city": "Chittoor",
      "state": "Andhra Pradesh",
      "place": "Tirupati Balaji Temple",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 554,
      "city": "Chittoor",
      "state": "Andhra Pradesh",
      "place": "Kailasakona Waterfalls",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 555,
      "city": "Chittoor",
      "state": "Andhra Pradesh",
      "place": "Kanipakam Varasiddhi Vinayaka Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 556,
      "city": "Chittoor",
      "state": "Andhra Pradesh",
      "place": "Horsley Hills",
      "popularity": "Medium",
      "description": "Hill station, panoramic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 557,
      "city": "Chittorgarh",
      "state": "Rajasthan",
      "place": "Chittorgarh Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 558,
      "city": "Chittorgarh",
      "state": "Rajasthan",
      "place": "Kirti Stambh",
      "popularity": "Medium",
      "description": "Tower, historical monument.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 559,
      "city": "Chittorgarh",
      "state": "Rajasthan",
      "place": "Vijay Stambh",
      "popularity": "Medium",
      "description": "Tower, historical monument.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 560,
      "city": "Chittorgarh",
      "state": "Rajasthan",
      "place": "Vijay Stambh (Victory Tower)",
      "popularity": "High",
      "description": "Historical monument, architectural beauty, panoramic views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 561,
      "city": "Chittorgarh",
      "state": "Rajasthan",
      "place": "Kalika Mata Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals, architecture.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 562,
      "city": "Churachandpur",
      "state": "Manipur",
      "place": "Tonglon Cave",
      "popularity": "High",
      "description": "Cave system, geological formations.",
      "type": "Adventure",
      "budget": 1000
    },
    {
      "Index": 563,
      "city": "Churachandpur",
      "state": "Manipur",
      "place": "Thangkhal Kharung Cave",
      "popularity": "High",
      "description": "Natural cave, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 564,
      "city": "Churachandpur",
      "state": "Manipur",
      "place": "Tuibuong Tribal Museum",
      "popularity": "Medium",
      "description": "Museum, exhibits on tribal culture.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 565,
      "city": "Churachandpur",
      "state": "Manipur",
      "place": "Saikot Waterfall",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 566,
      "city": "Churachandpur",
      "state": "Manipur",
      "place": "Khuga Dam",
      "popularity": "Medium",
      "description": "Dam, scenic spot.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 567,
      "city": "Coimbatore",
      "state": "Tamil Nadu",
      "place": "Gedee Car Museum",
      "popularity": "Medium",
      "description": "Collection of vintage cars, automotive history.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 568,
      "city": "Coimbatore",
      "state": "Tamil Nadu",
      "place": "Perur Pateeswarar Temple",
      "popularity": "Medium",
      "description": "Ancient temple, Dravidian architecture.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 569,
      "city": "Coimbatore",
      "state": "Tamil Nadu",
      "place": "Kovai Kondattam",
      "popularity": "Medium",
      "description": "Amusement park, water rides.",
      "type": "Entertainment",
      "budget": 1500
    },
    {
      "Index": 570,
      "city": "Coimbatore",
      "state": "Tamil Nadu",
      "place": "Siruvani Waterfalls",
      "popularity": "High",
      "description": "Scenic waterfall, trekking trails.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 571,
      "city": "Coimbatore",
      "state": "Tamil Nadu",
      "place": "Brookefields Mall",
      "popularity": "Medium",
      "description": "Large shopping mall, entertainment complex.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 572,
      "city": "Coimbatore",
      "state": "Tamil Nadu",
      "place": "Dhyanalinga",
      "popularity": "Medium",
      "description": "Yoga and meditation center, spiritual retreat.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 573,
      "city": "Coimbatore",
      "state": "Tamil Nadu",
      "place": "Velliangiri Mountains",
      "popularity": "Medium",
      "description": "Popular trekking destination, scenic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 574,
      "city": "Coimbatore",
      "state": "Tamil Nadu",
      "place": "ISKCON Coimbatore",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual teachings.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 575,
      "city": "Coimbatore",
      "state": "Tamil Nadu",
      "place": "Codissia Trade Fair Complex",
      "popularity": "High",
      "description": "Exhibition center, trade shows, events.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 576,
      "city": "Coorg",
      "state": "Karnataka",
      "place": "Talakaveri",
      "popularity": "High",
      "description": "Origin of River Kaveri, sacred site.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 577,
      "city": "Coorg",
      "state": "Karnataka",
      "place": "Namdroling Monastery",
      "popularity": "High",
      "description": "Buddhist monastery, Tibetan architecture.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 578,
      "city": "Coorg",
      "state": "Karnataka",
      "place": "Raja's Seat",
      "popularity": "Medium",
      "description": "Scenic viewpoint, sunset views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 579,
      "city": "Cuddalore",
      "state": "Tamil Nadu",
      "place": "Silver Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 580,
      "city": "Cuddalore",
      "state": "Tamil Nadu",
      "place": "Pichavaram Mangrove Forest",
      "popularity": "Medium",
      "description": "Mangrove forest, boat rides.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 581,
      "city": "Cuddalore",
      "state": "Tamil Nadu",
      "place": "Thiruvandipuram Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 582,
      "city": "Cuddalore",
      "state": "Tamil Nadu",
      "place": "Pichavaram",
      "popularity": "Medium",
      "description": "Mangrove forest, boating.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 583,
      "city": "Cuddalore",
      "state": "Tamil Nadu",
      "place": "Sri Padaleeswarar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 584,
      "city": "Cuttack",
      "state": "Odisha",
      "place": "Barabati Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 585,
      "city": "Cuttack",
      "state": "Odisha",
      "place": "Netaji Birth Place Museum",
      "popularity": "Medium",
      "description": "Museum showcasing Netaji Subhas Chandra Bose's life.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 586,
      "city": "Cuttack",
      "state": "Odisha",
      "place": "Dhabaleswar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, located on an island.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 587,
      "city": "Cuttack",
      "state": "Odisha",
      "place": "Chandi Temple",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 588,
      "city": "Cuttack",
      "state": "Odisha",
      "place": "Dhabaleswar Island",
      "popularity": "High",
      "description": "Island, scenic beauty and religious rituals.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 589,
      "city": "Cuttack",
      "state": "Odisha",
      "place": "Naraj Waterfall",
      "popularity": "High",
      "description": "Scenic waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 590,
      "city": "Dahod",
      "state": "Gujarat",
      "place": "Ratanmahal Sloth Bear Sanctuary",
      "popularity": "Medium",
      "description": "Sloth bear sanctuary, wildlife spotting.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 591,
      "city": "Dahod",
      "state": "Gujarat",
      "place": "Shree Galteshwar",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 592,
      "city": "Dahod",
      "state": "Gujarat",
      "place": "Bhavnath Mahadev Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 593,
      "city": "Dalhousie",
      "state": "Himachal Pradesh",
      "place": "Khajjiar Lake",
      "popularity": "Medium",
      "description": "Lake, mini-Switzerland of India.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 594,
      "city": "Dalhousie",
      "state": "Himachal Pradesh",
      "place": "Kalatop Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, trekking.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 595,
      "city": "Dalhousie",
      "state": "Himachal Pradesh",
      "place": "Dainkund Peak",
      "popularity": "Medium",
      "description": "Peak, panoramic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 596,
      "city": "Daman",
      "state": "Daman and Diu",
      "place": "Diu Fort",
      "popularity": "High",
      "description": "Portuguese fortress, historical landmark.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 597,
      "city": "Daman",
      "state": "Daman and Diu",
      "place": "Devka Beach",
      "popularity": "Medium",
      "description": "Popular beach, seaside promenade.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 598,
      "city": "Daman",
      "state": "Daman and Diu",
      "place": "Jampore Beach",
      "popularity": "Medium",
      "description": "Scenic beach, water sports.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 599,
      "city": "Daman",
      "state": "Daman and Diu",
      "place": "Church of Bom Jesus",
      "popularity": "Medium",
      "description": "Historical church, Portuguese architecture.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 600,
      "city": "Daman",
      "state": "Daman and Diu",
      "place": "Moti Daman Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 601,
      "city": "Daman",
      "state": "Daman and Diu",
      "place": "Kadaiya Lake Garden",
      "popularity": "Medium",
      "description": "Lakefront garden, boating, picnic spot.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 602,
      "city": "Daman",
      "state": "Daman and Diu",
      "place": "Diu Museum",
      "popularity": "Medium",
      "description": "Museum showcasing local history.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 603,
      "city": "Daman",
      "state": "Daman and Diu",
      "place": "Diu Village",
      "popularity": "Medium",
      "description": "Picturesque village, traditional lifestyle.",
      "type": "Village",
      "budget": 2000
    },
    {
      "Index": 604,
      "city": "Daman",
      "state": "Daman and Diu",
      "place": "Devka Amusement Park",
      "popularity": "Low",
      "description": "Amusement park, family entertainment.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 605,
      "city": "Daman",
      "state": "Daman and Diu",
      "place": "Moti Daman Cemetery",
      "popularity": "Low",
      "description": "Historical cemetery, colonial-era graves.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 606,
      "city": "Dandeli",
      "state": "Karnataka",
      "place": "Dandeli Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 607,
      "city": "Dandeli",
      "state": "Karnataka",
      "place": "Kali River",
      "popularity": "High",
      "description": "River rafting, adventure sports.",
      "type": "Adventure",
      "budget": 1000
    },
    {
      "Index": 608,
      "city": "Dandeli",
      "state": "Karnataka",
      "place": "Sykes Point",
      "popularity": "Medium",
      "description": "Viewpoint, panoramic views of Western Ghats.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 609,
      "city": "Darbhanga",
      "state": "Bihar",
      "place": "Shyama Kali Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 610,
      "city": "Darbhanga",
      "state": "Bihar",
      "place": "Kusheshwar Asthan Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, diverse bird species.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 611,
      "city": "Darbhanga",
      "state": "Bihar",
      "place": "Chandradhari Museum",
      "popularity": "Medium",
      "description": "Museum showcasing artifacts and sculptures.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 612,
      "city": "Darbhanga",
      "state": "Bihar",
      "place": "Lord Mahadeo Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 613,
      "city": "Darbhanga",
      "state": "Bihar",
      "place": "Mithila Paintings Gallery",
      "popularity": "Medium",
      "description": "Art gallery, showcasing local art.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 614,
      "city": "Darbhanga",
      "state": "Bihar",
      "place": "Kamtaul Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 615,
      "city": "Darjeeling",
      "state": "West Bengal",
      "place": "Tiger Hill, Darjeeling",
      "popularity": "Medium",
      "description": "Viewpoint, panoramic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 616,
      "city": "Darjeeling",
      "state": "West Bengal",
      "place": "Batasia Loop",
      "popularity": "Medium",
      "description": "Railway loop, scenic surroundings.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 617,
      "city": "Darjeeling",
      "state": "West Bengal",
      "place": "Japanese Peace Pagoda",
      "popularity": "Medium",
      "description": "Buddhist pagoda, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 618,
      "city": "Darjeeling",
      "state": "West Bengal",
      "place": "Darjeeling Himalayan Railway",
      "popularity": "High",
      "description": "Heritage steam railway, UNESCO World Heritage Site.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 619,
      "city": "Darjeeling",
      "state": "West Bengal",
      "place": "Padmaja Naidu Himalayan Zoological Park",
      "popularity": "Medium",
      "description": "Zoological park, Himalayan fauna.",
      "type": "Wildlife",
      "budget": 1000
    },
    {
      "Index": 620,
      "city": "Datia",
      "state": "Madhya Pradesh",
      "place": "Pitambara Peeth",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 621,
      "city": "Datia",
      "state": "Madhya Pradesh",
      "place": "Datia Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 622,
      "city": "Datia",
      "state": "Madhya Pradesh",
      "place": "Sonagiri Jain Temple",
      "popularity": "Medium",
      "description": "Jain temple, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 623,
      "city": "Datia",
      "state": "Madhya Pradesh",
      "place": "Govind Palace",
      "popularity": "Medium",
      "description": "Historical palace, Mughal architecture.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 624,
      "city": "Davanagere",
      "state": "Karnataka",
      "place": "Sri Anjaneya Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 625,
      "city": "Davanagere",
      "state": "Karnataka",
      "place": "Siddeshwara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual ambiance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 626,
      "city": "Davanagere",
      "state": "Karnataka",
      "place": "Bheemeshwara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 627,
      "city": "Davangere",
      "state": "Karnataka",
      "place": "Sri Anjaneya Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 628,
      "city": "Davangere",
      "state": "Karnataka",
      "place": "Durga Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 629,
      "city": "Davangere",
      "state": "Karnataka",
      "place": "Sri Siddeshwara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 630,
      "city": "Dehradun",
      "state": "Uttarakhand",
      "place": "Robber's Cave",
      "popularity": "Medium",
      "description": "Natural cave, picnic spot.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 631,
      "city": "Dehradun",
      "state": "Uttarakhand",
      "place": "Sahastradhara",
      "popularity": "Medium",
      "description": "Sulphur springs, therapeutic baths.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 632,
      "city": "Dehradun",
      "state": "Uttarakhand",
      "place": "Forest Research Institute",
      "popularity": "Medium",
      "description": "Research institute, botanical gardens.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 633,
      "city": "Dehri",
      "state": "Bihar",
      "place": "Sher Shah Suri Tomb",
      "popularity": "Medium",
      "description": "Historical tomb, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 634,
      "city": "Dehri",
      "state": "Bihar",
      "place": "Maa Mundeswari Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 635,
      "city": "Dehri",
      "state": "Bihar",
      "place": "Kamla Balan",
      "popularity": "Medium",
      "description": "Riverfront, scenic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 636,
      "city": "Dehri",
      "state": "Bihar",
      "place": "Karamchat Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 637,
      "city": "Delhi",
      "state": "Delhi",
      "place": "Red Fort",
      "popularity": "High",
      "description": "Iconic landmark, impressive architecture.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 638,
      "city": "Delhi",
      "state": "Delhi",
      "place": "Qutub Minar",
      "popularity": "High",
      "description": "Majestic tower, breathtaking views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 639,
      "city": "Delhi",
      "state": "Delhi",
      "place": "India Gate",
      "popularity": "Medium",
      "description": "War memorial, beautiful at night.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 640,
      "city": "Delhi",
      "state": "Delhi",
      "place": "Humayun's Tomb",
      "popularity": "High",
      "description": "Serene atmosphere, stunning architecture.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 641,
      "city": "Delhi",
      "state": "Delhi",
      "place": "Lotus Temple",
      "popularity": "Medium",
      "description": "Peaceful ambiance, unique architecture.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 642,
      "city": "Delhi",
      "state": "Delhi",
      "place": "Akshardham Temple",
      "popularity": "Medium",
      "description": "Intricate carvings, spiritual experience.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 643,
      "city": "Deoghar",
      "state": "Jharkhand",
      "place": "Baba Baidyanath Temple",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 644,
      "city": "Deoghar",
      "state": "Jharkhand",
      "place": "Naulakha Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 645,
      "city": "Deoghar",
      "state": "Jharkhand",
      "place": "Tapovan",
      "popularity": "Medium",
      "description": "Spiritual center, meditation retreat.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 646,
      "city": "Deoghar",
      "state": "Jharkhand",
      "place": "Trikuta Parvat",
      "popularity": "Medium",
      "description": "Holy site, pilgrimage destination.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 647,
      "city": "Deoria",
      "state": "Uttar Pradesh",
      "place": "Deoraha Baba Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 648,
      "city": "Deoria",
      "state": "Uttar Pradesh",
      "place": "Baba Tadeshwar Nath Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 649,
      "city": "Deoria",
      "state": "Uttar Pradesh",
      "place": "Chandra Shekhar Azad Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 650,
      "city": "Dhanbad",
      "state": "Jharkhand",
      "place": "Bhatinda Falls",
      "popularity": "Medium",
      "description": "Scenic waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 651,
      "city": "Dhanbad",
      "state": "Jharkhand",
      "place": "Shakti Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 652,
      "city": "Dhanbad",
      "state": "Jharkhand",
      "place": "Topchanchi Lake",
      "popularity": "Medium",
      "description": "Picturesque lake, boating facilities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 653,
      "city": "Dhanbad",
      "state": "Jharkhand",
      "place": "Maithon Dam",
      "popularity": "Medium",
      "description": "Dam, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 654,
      "city": "Dhanbad",
      "state": "Jharkhand",
      "place": "Maithon Lake",
      "popularity": "Medium",
      "description": "Lake, boating facilities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 655,
      "city": "Dharamshala",
      "state": "Himachal Pradesh",
      "place": "McLeod Ganj",
      "popularity": "Medium",
      "description": "Tibetan culture, Dalai Lama Temple.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 656,
      "city": "Dharamshala",
      "state": "Himachal Pradesh",
      "place": "Tsuglagkhang Complex",
      "popularity": "Medium",
      "description": "Buddhist temple, cultural center.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 657,
      "city": "Dharamshala",
      "state": "Himachal Pradesh",
      "place": "Bhagsunag Waterfall",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 658,
      "city": "Dharmanagar",
      "state": "Tripura",
      "place": "Rowa Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 659,
      "city": "Dharmanagar",
      "state": "Tripura",
      "place": "Dasamurha Killa",
      "popularity": "Medium",
      "description": "Historical fort, archaeological site.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 660,
      "city": "Dharmanagar",
      "state": "Tripura",
      "place": "Devi Bari Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 661,
      "city": "Dharmanagar",
      "state": "Tripura",
      "place": "Kalapania Nature Park",
      "popularity": "Medium",
      "description": "Nature park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 662,
      "city": "Dharmanagar",
      "state": "Tripura",
      "place": "Gandhi Ghat",
      "popularity": "Medium",
      "description": "Riverside promenade, scenic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 663,
      "city": "Dharmavaram",
      "state": "Andhra Pradesh",
      "place": "Sri Lakshmi Chennakesava Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 664,
      "city": "Dharmavaram",
      "state": "Andhra Pradesh",
      "place": "Veerabhadra Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 665,
      "city": "Dharmavaram",
      "state": "Andhra Pradesh",
      "place": "Bugga Ramalingeswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 666,
      "city": "Dharmavaram",
      "state": "Andhra Pradesh",
      "place": "Sri Sathya Sai Baba Ashram",
      "popularity": "Medium",
      "description": "Ashram, spiritual retreat.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 667,
      "city": "Dhubri",
      "state": "Assam",
      "place": "Ratnadweep Park",
      "popularity": "Medium",
      "description": "Public park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 668,
      "city": "Dhubri",
      "state": "Assam",
      "place": "Gurdwara Sri Guru Tegh Bahadur Sahib Ji",
      "popularity": "Medium",
      "description": "Sikh gurdwara, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 669,
      "city": "Dhubri",
      "state": "Assam",
      "place": "Chakrasila Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 670,
      "city": "Dhubri",
      "state": "Assam",
      "place": "Maa Manasa Temple",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual sanctuary.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 671,
      "city": "Dhubri",
      "state": "Assam",
      "place": "Dhubri Town Hall",
      "popularity": "Medium",
      "description": "Historical building, cultural events.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 672,
      "city": "Dhule",
      "state": "Maharashtra",
      "place": "Songir, Dhule",
      "popularity": "High",
      "description": "Historical site, prehistoric rock art.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 673,
      "city": "Dhule",
      "state": "Maharashtra",
      "place": "Shri Krishna Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 674,
      "city": "Dhule",
      "state": "Maharashtra",
      "place": "Sarvoday Ashram",
      "popularity": "Medium",
      "description": "Ashram, spiritual retreat.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 675,
      "city": "Dhule",
      "state": "Maharashtra",
      "place": "Shirpur Hot Water Springs",
      "popularity": "Medium",
      "description": "Natural hot springs, therapeutic.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 676,
      "city": "Dhule",
      "state": "Maharashtra",
      "place": "Nizampur",
      "popularity": "Medium",
      "description": "Historical site, architectural ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 677,
      "city": "Dhule",
      "state": "Maharashtra",
      "place": "Bahadarpur Fort",
      "popularity": "Medium",
      "description": "Historical fort, scenic surroundings.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 678,
      "city": "Dibrugarh",
      "state": "Assam",
      "place": "Raidongia Dol",
      "popularity": "Medium",
      "description": "Buddhist stupa, archaeological site.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 679,
      "city": "Dibrugarh",
      "state": "Assam",
      "place": "Namphake Village",
      "popularity": "Medium",
      "description": "Buddhist village, cultural heritage.",
      "type": "Village",
      "budget": 1000
    },
    {
      "Index": 680,
      "city": "Dibrugarh",
      "state": "Assam",
      "place": "Graham Bazaar",
      "popularity": "High",
      "description": "Marketplace, shopping area.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 681,
      "city": "Dibrugarh",
      "state": "Assam",
      "place": "Khalihamari",
      "popularity": "High",
      "description": "River, scenic surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 682,
      "city": "Dibrugarh",
      "state": "Assam",
      "place": "Dibru Saikhowa National Park",
      "popularity": "Medium",
      "description": "National park, wildlife spotting.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 683,
      "city": "Dibrugarh",
      "state": "Assam",
      "place": "Namdapha National Park",
      "popularity": "Medium",
      "description": "National park, wildlife spotting.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 684,
      "city": "Dibrugarh",
      "state": "Assam",
      "place": "Dehing Patkai Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, nature trekking.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 685,
      "city": "Dibrugarh",
      "state": "Assam",
      "place": "Jokai Botanical Garden",
      "popularity": "Medium",
      "description": "Botanical garden, diverse plant species.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 686,
      "city": "Dibrugarh",
      "state": "Assam",
      "place": "Dibru-Saikhowa National Park",
      "popularity": "High",
      "description": "National park, biodiversity hotspot.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 687,
      "city": "Dibrugarh",
      "state": "Assam",
      "place": "Dibrugarh Hanuman Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 688,
      "city": "Diglipur",
      "state": "Andaman and Nicobar Islands",
      "place": "Ross and Smith Islands",
      "popularity": "High",
      "description": "Twin islands connected by a sandbar.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 689,
      "city": "Diglipur",
      "state": "Andaman and Nicobar Islands",
      "place": "Saddle Peak",
      "popularity": "Medium",
      "description": "Highest peak in the Andaman and Nicobar Islands.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 690,
      "city": "Diglipur",
      "state": "Andaman and Nicobar Islands",
      "place": "Limestone Caves",
      "popularity": "Medium",
      "description": "Natural caves with stalactites and stalagmites.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 691,
      "city": "Diglipur",
      "state": "Andaman and Nicobar Islands",
      "place": "Kalpong River",
      "popularity": "Low",
      "description": "Scenic river, boat rides.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 692,
      "city": "Diglipur",
      "state": "Andaman and Nicobar Islands",
      "place": "Ramnagar Beach",
      "popularity": "Medium",
      "description": "Picturesque beach, swimming, beachcombing.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 693,
      "city": "Dimapur",
      "state": "Nagaland",
      "place": "Chumukedima Village",
      "popularity": "High",
      "description": "Naga village, cultural experience.",
      "type": "Village",
      "budget": 2000
    },
    {
      "Index": 694,
      "city": "Dimapur",
      "state": "Nagaland",
      "place": "Kachari Ruins",
      "popularity": "Medium",
      "description": "Archaeological site, ancient ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 695,
      "city": "Dimapur",
      "state": "Nagaland",
      "place": "Rangapahar Reserve Forest",
      "popularity": "Medium",
      "description": "Forest reserve, wildlife conservation.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 696,
      "city": "Dimapur",
      "state": "Nagaland",
      "place": "Sixth Mile",
      "popularity": "Medium",
      "description": "Commercial area, shopping, and dining.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 697,
      "city": "Dindigul",
      "state": "Tamil Nadu",
      "place": "Dindigul Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 698,
      "city": "Dindigul",
      "state": "Tamil Nadu",
      "place": "Thadikombu Perumal Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 699,
      "city": "Dindigul",
      "state": "Tamil Nadu",
      "place": "Barathimalai Murugan Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 700,
      "city": "Dindigul",
      "state": "Tamil Nadu",
      "place": "Begambur Big Mosque",
      "popularity": "Medium",
      "description": "Mosque, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 701,
      "city": "Dindigul",
      "state": "Tamil Nadu",
      "place": "Kamarajar Lake",
      "popularity": "Medium",
      "description": "Lake, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 702,
      "city": "Dindigul",
      "state": "Tamil Nadu",
      "place": "Kodaikanal Lake",
      "popularity": "Medium",
      "description": "Man-made lake, boating, scenic surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 703,
      "city": "Dindigul",
      "state": "Tamil Nadu",
      "place": "Balasubramaniya Swamy Temple",
      "popularity": "Low",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 704,
      "city": "Dindigul",
      "state": "Tamil Nadu",
      "place": "Distinctive Star-shaped Junction Tower",
      "popularity": "Low",
      "description": "Historical landmark, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 705,
      "city": "Dindigul",
      "state": "Tamil Nadu",
      "place": "Bear Shola Falls",
      "popularity": "Low",
      "description": "Scenic waterfall, trekking destination.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 706,
      "city": "Doda",
      "state": "Jammu and Kashmir",
      "place": "Kishtwar National Park",
      "popularity": "High",
      "description": "National park, wildlife sanctuary.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 707,
      "city": "Doda",
      "state": "Jammu and Kashmir",
      "place": "Bhaderwah Valley",
      "popularity": "Medium",
      "description": "Valley, trekking, adventure sports.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 708,
      "city": "Doda",
      "state": "Jammu and Kashmir",
      "place": "Machail Yatra",
      "popularity": "Medium",
      "description": "Pilgrimage trek, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 709,
      "city": "Dras",
      "state": "Ladakh",
      "place": "Dras War Memorial",
      "popularity": "Medium",
      "description": "War memorial, historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 710,
      "city": "Dras",
      "state": "Ladakh",
      "place": "Tololing Range",
      "popularity": "Medium",
      "description": "Mountain range, trekking, scenic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 711,
      "city": "Dras",
      "state": "Ladakh",
      "place": "Dras Valley",
      "popularity": "Medium",
      "description": "Valley, natural beauty, trekking.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 712,
      "city": "Durg",
      "state": "Chhattisgarh",
      "place": "Udanti Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 713,
      "city": "Durg",
      "state": "Chhattisgarh",
      "place": "Shri Uwassaggaharam Parshwa Tirth",
      "popularity": "Medium",
      "description": "Jain temple, Religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 714,
      "city": "Durg",
      "state": "Chhattisgarh",
      "place": "Sitamadi Waterfall",
      "popularity": "High",
      "description": "Spectacular waterfall, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 715,
      "city": "Durg",
      "state": "Chhattisgarh",
      "place": "Jain Temples at Nagpura",
      "popularity": "High",
      "description": "Jain temples, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 716,
      "city": "Durgapur",
      "state": "West Bengal",
      "place": "Troika Park",
      "popularity": "Medium",
      "description": "Amusement park, family-friendly attractions.",
      "type": "Entertainment",
      "budget": 1500
    },
    {
      "Index": 717,
      "city": "Durgapur",
      "state": "West Bengal",
      "place": "Anand Amusement Park",
      "popularity": "Medium",
      "description": "Amusement park, thrilling rides.",
      "type": "Entertainment",
      "budget": 2000
    },
    {
      "Index": 718,
      "city": "Durgapur",
      "state": "West Bengal",
      "place": "Deul Park",
      "popularity": "Low",
      "description": "Park with green spaces, walking trails.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 719,
      "city": "Durgapur",
      "state": "West Bengal",
      "place": "Durgapur Barrage",
      "popularity": "Medium",
      "description": "Barrage, scenic surroundings.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 720,
      "city": "Durgapur",
      "state": "West Bengal",
      "place": "Durgapur Steel Plant",
      "popularity": "Medium",
      "description": "Steel manufacturing plant.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 721,
      "city": "Eluru",
      "state": "Andhra Pradesh",
      "place": "Kolleru Lake",
      "popularity": "Medium",
      "description": "Lake, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 722,
      "city": "Eluru",
      "state": "Andhra Pradesh",
      "place": "Dwaraka Tirumala",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 723,
      "city": "Eluru",
      "state": "Andhra Pradesh",
      "place": "Jeenmaan",
      "popularity": "High",
      "description": "Spiritual center, meditation retreat.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 724,
      "city": "Eluru",
      "state": "Andhra Pradesh",
      "place": "Dwaraka Tirumala Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 725,
      "city": "Eluru",
      "state": "Andhra Pradesh",
      "place": "Jangareddigudem Town Hall",
      "popularity": "Medium",
      "description": "Town hall, cultural events.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 726,
      "city": "Erode",
      "state": "Tamil Nadu",
      "place": "Thindal Murugan Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 727,
      "city": "Erode",
      "state": "Tamil Nadu",
      "place": "Sathyamangalam Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, nature trekking.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 728,
      "city": "Erode",
      "state": "Tamil Nadu",
      "place": "Vellode Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 729,
      "city": "Erode",
      "state": "Tamil Nadu",
      "place": "Periyar Memorial House",
      "popularity": "Medium",
      "description": "Memorial, historical significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 730,
      "city": "Erode",
      "state": "Tamil Nadu",
      "place": "Sri Ramalinga Sowdambikai Amman Temple",
      "popularity": "Low",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 731,
      "city": "Erode",
      "state": "Tamil Nadu",
      "place": "Periya Mariamman Temple",
      "popularity": "Low",
      "description": "Hindu temple, festival celebrations.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 732,
      "city": "Erode",
      "state": "Tamil Nadu",
      "place": "Kodiveri Dam",
      "popularity": "Low",
      "description": "Scenic dam, boating, picnic spot.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 733,
      "city": "Etah",
      "state": "Uttar Pradesh",
      "place": "Shiv Temple, Etah",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 734,
      "city": "Etah",
      "state": "Uttar Pradesh",
      "place": "Bada Mandir, Etah",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 735,
      "city": "Etah",
      "state": "Uttar Pradesh",
      "place": "Jain Mandir, Etah",
      "popularity": "Medium",
      "description": "Jain temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 736,
      "city": "Etawah",
      "state": "Uttar Pradesh",
      "place": "Samudra Koop",
      "popularity": "Medium",
      "description": "Historical well, architectural significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 737,
      "city": "Etawah",
      "state": "Uttar Pradesh",
      "place": "Etawah Safari Park",
      "popularity": "Medium",
      "description": "Safari park, wildlife conservation.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 738,
      "city": "Etawah",
      "state": "Uttar Pradesh",
      "place": "Chambal River Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 739,
      "city": "Etawah",
      "state": "Uttar Pradesh",
      "place": "Ekdil, Etawah",
      "popularity": "Medium",
      "description": "Historical site, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 740,
      "city": "Etawah",
      "state": "Uttar Pradesh",
      "place": "Chambal Safari",
      "popularity": "Medium",
      "description": "Wildlife safari, adventure.",
      "type": "Adventure",
      "budget": 1500
    },
    {
      "Index": 741,
      "city": "Faizabad",
      "state": "Uttar Pradesh",
      "place": "Gulab Bari",
      "popularity": "Medium",
      "description": "Mughal garden, historical monument.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 742,
      "city": "Faizabad",
      "state": "Uttar Pradesh",
      "place": "Bahu Begum ka Maqbara",
      "popularity": "Medium",
      "description": "Historical mausoleum, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 743,
      "city": "Faizabad",
      "state": "Uttar Pradesh",
      "place": "Faizabad Museum",
      "popularity": "Medium",
      "description": "Museum, historical artifacts.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 744,
      "city": "Faridabad",
      "state": "Haryana",
      "place": "Surajkund",
      "popularity": "Medium",
      "description": "Artificial lake, crafts fair.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 745,
      "city": "Faridabad",
      "state": "Haryana",
      "place": "Raja Nahar Singh Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 746,
      "city": "Faridabad",
      "state": "Haryana",
      "place": "Crown Interiorz Mall",
      "popularity": "Medium",
      "description": "Shopping mall, entertainment.",
      "type": "Entertainment",
      "budget": 1500
    },
    {
      "Index": 747,
      "city": "Farrukhabad",
      "state": "Uttar Pradesh",
      "place": "Sankat Mochan Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 748,
      "city": "Farrukhabad",
      "state": "Uttar Pradesh",
      "place": "Agra Gate",
      "popularity": "Medium",
      "description": "Historical gate, architectural significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 749,
      "city": "Farrukhabad",
      "state": "Uttar Pradesh",
      "place": "Kalan Mosque",
      "popularity": "Medium",
      "description": "Historical mosque, cultural significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 750,
      "city": "Fatehabad",
      "state": "Haryana",
      "place": "Asigarh Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 751,
      "city": "Fatehabad",
      "state": "Haryana",
      "place": "Pehowa",
      "popularity": "Medium",
      "description": "Pilgrimage site, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 752,
      "city": "Fatehabad",
      "state": "Haryana",
      "place": "Sarsai Nawar Wetland",
      "popularity": "Medium",
      "description": "Wetland, birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 753,
      "city": "Fatehpur",
      "state": "Uttar Pradesh",
      "place": "Bhitaura and Asani",
      "popularity": "Medium",
      "description": "Archaeological site, ancient ruins.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 754,
      "city": "Fatehpur",
      "state": "Uttar Pradesh",
      "place": "Chaturbhuj Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 755,
      "city": "Fatehpur",
      "state": "Uttar Pradesh",
      "place": "Ram and Laxman Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 756,
      "city": "Fatehpur",
      "state": "Uttar Pradesh",
      "place": "Birla Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 757,
      "city": "Fatehpur",
      "state": "Uttar Pradesh",
      "place": "Rajghat Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 758,
      "city": "Firozabad",
      "state": "Uttar Pradesh",
      "place": "Shri Radha Krishna Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 759,
      "city": "Firozabad",
      "state": "Uttar Pradesh",
      "place": "Sankat Mochan Hanuman Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 760,
      "city": "Firozabad",
      "state": "Uttar Pradesh",
      "place": "Sai Baba Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, dedicated to Sai Baba.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 761,
      "city": "Firozpur",
      "state": "Punjab",
      "place": "Firozpur Cantonment",
      "popularity": "Medium",
      "description": "Military cantonment, historical significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 762,
      "city": "Firozpur",
      "state": "Punjab",
      "place": "Anglo Sikh War Memorial",
      "popularity": "Medium",
      "description": "Memorial, historical significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 763,
      "city": "Firozpur",
      "state": "Punjab",
      "place": "Saragarhi Memorial Gurudwara",
      "popularity": "Medium",
      "description": "Gurudwara, Sikh memorial.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 764,
      "city": "Firozpur",
      "state": "Punjab",
      "place": "National Martyrs Memorial",
      "popularity": "Medium",
      "description": "Memorial, historical significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 765,
      "city": "Firozpur",
      "state": "Punjab",
      "place": "Feroz Shah Palace",
      "popularity": "Medium",
      "description": "Palace, historical architecture.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 766,
      "city": "Gandhidham",
      "state": "Gujarat",
      "place": "Kandla Port",
      "popularity": "Medium",
      "description": "Seaport, shipping hub.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 767,
      "city": "Gandhidham",
      "state": "Gujarat",
      "place": "Gandhi Market",
      "popularity": "Medium",
      "description": "Marketplace, shopping center.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 768,
      "city": "Gandhidham",
      "state": "Gujarat",
      "place": "Purneshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 769,
      "city": "Gandhidham",
      "state": "Gujarat",
      "place": "Tribal Museum",
      "popularity": "Medium",
      "description": "Museum, showcasing tribal culture.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 770,
      "city": "Gandhinagar",
      "state": "Gujarat",
      "place": "Indroda Nature Park",
      "popularity": "Medium",
      "description": "Nature park, wildlife conservation.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 771,
      "city": "Gandhinagar",
      "state": "Gujarat",
      "place": "Sarita Udhyan",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 772,
      "city": "Gandhinagar",
      "state": "Gujarat",
      "place": "Hanumanji Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 773,
      "city": "Gandhinagar",
      "state": "Gujarat",
      "place": "Swaminarayan Akshardham",
      "popularity": "Medium",
      "description": "Hindu temple complex, spiritual and cultural center.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 774,
      "city": "Gandhinagar",
      "state": "Gujarat",
      "place": "Sarita Udyan",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 775,
      "city": "Gandhinagar",
      "state": "Gujarat",
      "place": "Vechaar Utensils Museum",
      "popularity": "Medium",
      "description": "Museum, utensils collection.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 776,
      "city": "Gandhinagar",
      "state": "Gujarat",
      "place": "Park B, Gandhinagar",
      "popularity": "Park",
      "description": "Urban park, leisure activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 777,
      "city": "Gangtok",
      "state": "Sikkim",
      "place": "Rumtek Monastery",
      "popularity": "High",
      "description": "Tibetan Buddhist monastery, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 778,
      "city": "Gangtok",
      "state": "Sikkim",
      "place": "Nathu La Pass",
      "popularity": "High",
      "description": "Mountain pass, Indo-China border.",
      "type": "Adventure",
      "budget": 1000
    },
    {
      "Index": 779,
      "city": "Gangtok",
      "state": "Sikkim",
      "place": "Tsomgo Lake",
      "popularity": "High",
      "description": "Glacial lake, scenic beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 780,
      "city": "Gangtok",
      "state": "Sikkim",
      "place": "Baba Harbhajan Singh Temple",
      "popularity": "Medium",
      "description": "Shrine, military significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 781,
      "city": "Gangtok",
      "state": "Sikkim",
      "place": "Enchey Monastery",
      "popularity": "Medium",
      "description": "Buddhist monastery, serene atmosphere.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 782,
      "city": "Gangtok",
      "state": "Sikkim",
      "place": "Hanuman Tok",
      "popularity": "Medium",
      "description": "Hindu temple, panoramic views.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 783,
      "city": "Gangtok",
      "state": "Sikkim",
      "place": "Banjhakri Falls",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 784,
      "city": "Gangtok",
      "state": "Sikkim",
      "place": "Do Drul Chorten",
      "popularity": "Medium",
      "description": "Stupa, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 785,
      "city": "Gangtok",
      "state": "Sikkim",
      "place": "Tashi Viewpoint",
      "popularity": "Low",
      "description": "Scenic viewpoint, mountain vistas.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 786,
      "city": "Gannavaram",
      "state": "Andhra Pradesh",
      "place": "Sri Kanaka Durga Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 787,
      "city": "Gannavaram",
      "state": "Andhra Pradesh",
      "place": "Gannavaram Airport",
      "popularity": "Medium",
      "description": "Airport, air transportation hub.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 788,
      "city": "Gannavaram",
      "state": "Andhra Pradesh",
      "place": "Dr. Pinnamaneni Siddhartha Institute of Medical Sciences & Research Foundation",
      "popularity": "Medium",
      "description": "Medical college, education.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 789,
      "city": "Gannavaram",
      "state": "Andhra Pradesh",
      "place": "ISKCON Gannavaram",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 790,
      "city": "Gannavaram",
      "state": "Andhra Pradesh",
      "place": "Mangalagiri Nookalamma Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 791,
      "city": "Ghaziabad",
      "state": "Uttar Pradesh",
      "place": "Hindon Air Force Base",
      "popularity": "Medium",
      "description": "Air force base, military operations.",
      "type": "Military",
      "budget": 1500
    },
    {
      "Index": 792,
      "city": "Ghaziabad",
      "state": "Uttar Pradesh",
      "place": "Drizzling Land",
      "popularity": "Medium",
      "description": "Water park, recreational activities.",
      "type": "Entertainment",
      "budget": 2000
    },
    {
      "Index": 793,
      "city": "Ghaziabad",
      "state": "Uttar Pradesh",
      "place": "DPSG International School",
      "popularity": "Medium",
      "description": "School, educational institution.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 794,
      "city": "Ghaziabad",
      "state": "Uttar Pradesh",
      "place": "Shipra Mall, Ghaziabad",
      "popularity": "Medium",
      "description": "Shopping mall, entertainment complex.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 795,
      "city": "Ghaziabad",
      "state": "Uttar Pradesh",
      "place": "Indirapuram Habitat Centre",
      "popularity": "Medium",
      "description": "Recreational complex, cultural events.",
      "type": "Entertainment",
      "budget": 2000
    },
    {
      "Index": 796,
      "city": "Ghaziabad",
      "state": "Uttar Pradesh",
      "place": "Swarna Jayanti Park",
      "popularity": "Medium",
      "description": "Public park, jogging tracks.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 797,
      "city": "Giddalur",
      "state": "Andhra Pradesh",
      "place": "Jammalamadugu Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 798,
      "city": "Giddalur",
      "state": "Andhra Pradesh",
      "place": "Kanigiri Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 799,
      "city": "Giddalur",
      "state": "Andhra Pradesh",
      "place": "Mallikarjuna Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 800,
      "city": "Giddalur",
      "state": "Andhra Pradesh",
      "place": "Srisailam Dam",
      "popularity": "Medium",
      "description": "Dam on Krishna River, scenic surroundings.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 801,
      "city": "Giddalur",
      "state": "Andhra Pradesh",
      "place": "Mylavaram Dam",
      "popularity": "Medium",
      "description": "Dam on Gundlakamma River, scenic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 802,
      "city": "Giridih",
      "state": "Jharkhand",
      "place": "Parasnath Hills",
      "popularity": "High",
      "description": "Holy site, Jain pilgrimage center.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 803,
      "city": "Giridih",
      "state": "Jharkhand",
      "place": "Khandoli Park",
      "popularity": "Medium",
      "description": "Public park, adventure activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 804,
      "city": "Giridih",
      "state": "Jharkhand",
      "place": "Usri Falls",
      "popularity": "Medium",
      "description": "Scenic waterfall, picnic spot.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 805,
      "city": "Goalpara",
      "state": "Assam",
      "place": "Sri Sri Kedar Nath Mahadev Temple",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 806,
      "city": "Goalpara",
      "state": "Assam",
      "place": "Amjonga Madan Kamdev Temple",
      "popularity": "Medium",
      "description": "Hindu temple, archaeological site.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 807,
      "city": "Goalpara",
      "state": "Assam",
      "place": "Sri Surya Pahar",
      "popularity": "High",
      "description": "Hill, archaeological site.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 808,
      "city": "Goalpara",
      "state": "Assam",
      "place": "Abhayapuri College",
      "popularity": "Medium",
      "description": "College, educational institution.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 809,
      "city": "Godhra",
      "state": "Gujarat",
      "place": "Pavagadh Hill",
      "popularity": "Medium",
      "description": "Hill station, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 810,
      "city": "Godhra",
      "state": "Gujarat",
      "place": "Jambughoda Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, nature reserve.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 811,
      "city": "Gokarna",
      "state": "Karnataka",
      "place": "Mahabaleshwar Temple",
      "popularity": "High",
      "description": "Hindu temple, sacred pilgrimage site.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 812,
      "city": "Gokarna",
      "state": "Karnataka",
      "place": "Kudle Beach",
      "popularity": "Medium",
      "description": "Scenic beach, water sports.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 813,
      "city": "Gokarna",
      "state": "Karnataka",
      "place": "Om Beach",
      "popularity": "Medium",
      "description": "Popular beach, natural rock formations.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 814,
      "city": "Gonda",
      "state": "Uttar Pradesh",
      "place": "Dewa Sharif",
      "popularity": "Medium",
      "description": "Pilgrimage site, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 815,
      "city": "Gonda",
      "state": "Uttar Pradesh",
      "place": "Mankameshwar Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 816,
      "city": "Gonda",
      "state": "Uttar Pradesh",
      "place": "Shuklaganj Buddha Vihar",
      "popularity": "Medium",
      "description": "Buddhist vihara, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 817,
      "city": "Gopalpur",
      "state": "Odisha",
      "place": "Rambha Point",
      "popularity": "Medium",
      "description": "Panoramic viewpoint, sunset views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 818,
      "city": "Gorakhpur",
      "state": "Uttar Pradesh",
      "place": "Gorakhnath Temple",
      "popularity": "High",
      "description": "Hindu temple, religious pilgrimage site.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 819,
      "city": "Gorakhpur",
      "state": "Uttar Pradesh",
      "place": "Gita Press",
      "popularity": "Medium",
      "description": "Publishing house, religious books and literature.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 820,
      "city": "Gorakhpur",
      "state": "Uttar Pradesh",
      "place": "Arogya Mandir",
      "popularity": "Medium",
      "description": "Yoga and meditation center, wellness programs.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 821,
      "city": "Gorakhpur",
      "state": "Uttar Pradesh",
      "place": "Ramgarh Taal",
      "popularity": "Medium",
      "description": "Artificial lake, boating, birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 822,
      "city": "Gorakhpur",
      "state": "Uttar Pradesh",
      "place": "Geeta Vatika",
      "popularity": "Medium",
      "description": "Garden, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 823,
      "city": "Gorakhpur",
      "state": "Uttar Pradesh",
      "place": "Victoria Memorial",
      "popularity": "High",
      "description": "Historical monument, British-era architecture.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 824,
      "city": "Gorakhpur",
      "state": "Uttar Pradesh",
      "place": "Planetarium",
      "popularity": "Medium",
      "description": "Astronomical observatory, educational center.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 825,
      "city": "Gudivada",
      "state": "Andhra Pradesh",
      "place": "Sri Lakshmi Narasimha Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 826,
      "city": "Gudivada",
      "state": "Andhra Pradesh",
      "place": "Macha Kali Ammavari Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 827,
      "city": "Gudivada",
      "state": "Andhra Pradesh",
      "place": "Kotilingeshwara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 828,
      "city": "Gudivada",
      "state": "Andhra Pradesh",
      "place": "Krishna River Barrage",
      "popularity": "Medium",
      "description": "Barrage, scenic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 829,
      "city": "Gudivada",
      "state": "Andhra Pradesh",
      "place": "Ayyappa Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 830,
      "city": "Gudivada",
      "state": "Andhra Pradesh",
      "place": "Krishna Barrage Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 831,
      "city": "Gudivada",
      "state": "Andhra Pradesh",
      "place": "Chilukuru Balaji Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 832,
      "city": "Gudivada",
      "state": "Andhra Pradesh",
      "place": "Gudivada Market",
      "popularity": "Medium",
      "description": "Marketplace, local shopping.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 833,
      "city": "Gudivada",
      "state": "Andhra Pradesh",
      "place": "Ksheerarama",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 834,
      "city": "Gudivada",
      "state": "Andhra Pradesh",
      "place": "Navodaya Hospital",
      "popularity": "Medium",
      "description": "Hospital, healthcare services.",
      "type": "Healthcare",
      "budget": 2000
    },
    {
      "Index": 835,
      "city": "Gudivada",
      "state": "Andhra Pradesh",
      "place": "Vinayaka Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 836,
      "city": "Gudivada",
      "state": "Andhra Pradesh",
      "place": "Krishna Barrage",
      "popularity": "Medium",
      "description": "Barrage, scenic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 837,
      "city": "Gudur",
      "state": "Andhra Pradesh",
      "place": "Chandrashekara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 838,
      "city": "Gudur",
      "state": "Andhra Pradesh",
      "place": "Penchalakona",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 839,
      "city": "Gudur",
      "state": "Andhra Pradesh",
      "place": "Jalakantesvara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 840,
      "city": "Gudur",
      "state": "Andhra Pradesh",
      "place": "Narasimha Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 841,
      "city": "Gudur",
      "state": "Andhra Pradesh",
      "place": "Sri Vinayaka Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 842,
      "city": "Gudur",
      "state": "Andhra Pradesh",
      "place": "Narasimha Konda",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 843,
      "city": "Gulbarga",
      "state": "Karnataka",
      "place": "Jumma Masjid",
      "popularity": "High",
      "description": "Historical mosque, Islamic architecture.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 844,
      "city": "Gulbarga",
      "state": "Karnataka",
      "place": "Khwaja Bande Nawaz Dargah",
      "popularity": "High",
      "description": "Sufi shrine, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 845,
      "city": "Gulbarga",
      "state": "Karnataka",
      "place": "Gulbarga Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 846,
      "city": "Guna",
      "state": "Madhya Pradesh",
      "place": "Panchmukhi Hanuman Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 847,
      "city": "Guna",
      "state": "Madhya Pradesh",
      "place": "Kedarnath Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 848,
      "city": "Guna",
      "state": "Madhya Pradesh",
      "place": "Srigovind Bhawan",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 849,
      "city": "Guna",
      "state": "Madhya Pradesh",
      "place": "Bajrangarh Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 850,
      "city": "Guna",
      "state": "Madhya Pradesh",
      "place": "Bharkhera Jain Temple",
      "popularity": "Medium",
      "description": "Jain temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 851,
      "city": "Guntakal",
      "state": "Andhra Pradesh",
      "place": "Darga, Guntakal",
      "popularity": "Medium",
      "description": "Islamic dargah, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 852,
      "city": "Guntakal",
      "state": "Andhra Pradesh",
      "place": "Amruth Mahal Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 853,
      "city": "Guntur",
      "state": "Andhra Pradesh",
      "place": "Uppalapadu Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, migratory birds.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 854,
      "city": "Guntur",
      "state": "Andhra Pradesh",
      "place": "Kondaveedu Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 855,
      "city": "Guntur",
      "state": "Andhra Pradesh",
      "place": "Kotappakonda",
      "popularity": "Medium",
      "description": "Hindu pilgrimage site, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 856,
      "city": "Guntur",
      "state": "Andhra Pradesh",
      "place": "Amaravati, Guntur",
      "popularity": "Medium",
      "description": "Historical site, Buddhist stupa ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 857,
      "city": "Gurgaon",
      "state": "Haryana",
      "place": "Kingdom of Dreams",
      "popularity": "High",
      "description": "Cultural and entertainment complex.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 858,
      "city": "Gurgaon",
      "state": "Haryana",
      "place": "Sultanpur National Park",
      "popularity": "Medium",
      "description": "Bird sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 859,
      "city": "Gurgaon",
      "state": "Haryana",
      "place": "Leisure Valley Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 860,
      "city": "Guwahati",
      "state": "Assam",
      "place": "Kamakhya Temple",
      "popularity": "High",
      "description": "Sacred temple, religious pilgrimage site.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 861,
      "city": "Guwahati",
      "state": "Assam",
      "place": "Umananda Island",
      "popularity": "Medium",
      "description": "Island temple, scenic river views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 862,
      "city": "Guwahati",
      "state": "Assam",
      "place": "Assam State Zoo",
      "popularity": "Medium",
      "description": "Zoo with regional wildlife species.",
      "type": "Wildlife",
      "budget": 1000
    },
    {
      "Index": 863,
      "city": "Guwahati",
      "state": "Assam",
      "place": "Kaziranga National Park",
      "popularity": "High",
      "description": "National park, wildlife sanctuary.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 864,
      "city": "Guwahati",
      "state": "Assam",
      "place": "Umananda Temple",
      "popularity": "High",
      "description": "Hindu temple, on an island in the Brahmaputra River.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 865,
      "city": "Guwahati",
      "state": "Assam",
      "place": "Assam State Museum",
      "popularity": "Medium",
      "description": "Museum, artifacts on Assamese history.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 866,
      "city": "Guwahati",
      "state": "Assam",
      "place": "Srimanta Sankardev Kalakshetra",
      "popularity": "Medium",
      "description": "Cultural center, Assamese heritage.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 867,
      "city": "Gwalior",
      "state": "Madhya Pradesh",
      "place": "Gwalior Fort",
      "popularity": "High",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 868,
      "city": "Gwalior",
      "state": "Madhya Pradesh",
      "place": "Jai Vilas Palace",
      "popularity": "Medium",
      "description": "Royal palace, opulent interiors.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 869,
      "city": "Gwalior",
      "state": "Madhya Pradesh",
      "place": "Sas Bahu Temple",
      "popularity": "Medium",
      "description": "Ancient temple, intricate carvings.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 870,
      "city": "Gwalior",
      "state": "Madhya Pradesh",
      "place": "Teli Ka Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, historical significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 871,
      "city": "Hajipur",
      "state": "Bihar",
      "place": "Hazrat Makhdoom Syed Shah Dargah",
      "popularity": "Medium",
      "description": "Sufi shrine, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 872,
      "city": "Hajipur",
      "state": "Bihar",
      "place": "Buddha Stupa",
      "popularity": "Medium",
      "description": "Buddhist stupa, archaeological site.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 873,
      "city": "Hajipur",
      "state": "Bihar",
      "place": "Vishwa Shanti Stupa",
      "popularity": "Medium",
      "description": "Buddhist stupa, peace monument.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 874,
      "city": "Hajipur",
      "state": "Bihar",
      "place": "Makhdum Kund",
      "popularity": "Medium",
      "description": "Historical site, pilgrimage destination.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 875,
      "city": "Haldia",
      "state": "West Bengal",
      "place": "Haldia Dock Complex",
      "popularity": "Medium",
      "description": "Seaport, shipping hub.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 876,
      "city": "Haldia",
      "state": "West Bengal",
      "place": "Saptamukhi River",
      "popularity": "Medium",
      "description": "River, boating facilities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 877,
      "city": "Haldia",
      "state": "West Bengal",
      "place": "Haldia Refinery",
      "popularity": "Medium",
      "description": "Oil refinery, industrial site.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 878,
      "city": "Haldia",
      "state": "West Bengal",
      "place": "Tamluk Rajbari",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 879,
      "city": "Haldia",
      "state": "West Bengal",
      "place": "Haldia Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 880,
      "city": "Haldia",
      "state": "West Bengal",
      "place": "Geonkhali",
      "popularity": "Medium",
      "description": "Riverfront, scenic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 881,
      "city": "Haldwani",
      "state": "Uttarakhand",
      "place": "Kathgodam Railway Station",
      "popularity": "Medium",
      "description": "Railway station, transportation hub.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 882,
      "city": "Haldwani",
      "state": "Uttarakhand",
      "place": "Hanuman Garhi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 883,
      "city": "Haldwani",
      "state": "Uttarakhand",
      "place": "Terai Region",
      "popularity": "Medium",
      "description": "Forest region, wildlife spotting.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 884,
      "city": "Haldwani",
      "state": "Uttarakhand",
      "place": "Gaula Barrage",
      "popularity": "Medium",
      "description": "Barrage, water reservoir.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 885,
      "city": "Haldwani",
      "state": "Uttarakhand",
      "place": "Chitai Golu Devta Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 886,
      "city": "Haldwani",
      "state": "Uttarakhand",
      "place": "Himalayan Botanic Garden",
      "popularity": "Medium",
      "description": "Botanical garden, plant species.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 887,
      "city": "Haldwani",
      "state": "Uttarakhand",
      "place": "Pantnagar University",
      "popularity": "Medium",
      "description": "University campus, agricultural research.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 888,
      "city": "Haldwani",
      "state": "Uttarakhand",
      "place": "Corbett Falls",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty, trekking.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 889,
      "city": "Haldwani-cum-Kathgodam",
      "state": "Uttarakhand",
      "place": "Gobind Ballabh Pant University of Agriculture and Technology",
      "popularity": "Medium",
      "description": "University, agricultural education.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 890,
      "city": "Haldwani-cum-Kathgodam",
      "state": "Uttarakhand",
      "place": "Hedakhan Ashram",
      "popularity": "Medium",
      "description": "Spiritual center, meditation retreat.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 891,
      "city": "Hampi",
      "state": "Karnataka",
      "place": "Virupaksha Temple",
      "popularity": "High",
      "description": "Hindu temple, UNESCO World Heritage Site.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 892,
      "city": "Hampi",
      "state": "Karnataka",
      "place": "Vittala Temple",
      "popularity": "High",
      "description": "Hindu temple, stone chariot.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 893,
      "city": "Hampi",
      "state": "Karnataka",
      "place": "Hemakuta Hill",
      "popularity": "High",
      "description": "Hill, panoramic views of Hampi ruins.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 894,
      "city": "Hapur",
      "state": "Uttar Pradesh",
      "place": "Pura Qila",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 895,
      "city": "Hapur",
      "state": "Uttar Pradesh",
      "place": "Brahma Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 896,
      "city": "Hapur",
      "state": "Uttar Pradesh",
      "place": "Chandi Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, dedicated to Goddess Chandi.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 897,
      "city": "Hapur",
      "state": "Uttar Pradesh",
      "place": "Brahma Baba Dham",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 898,
      "city": "Hapur",
      "state": "Uttar Pradesh",
      "place": "Mukteshwar Mahadev Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 899,
      "city": "Hapur",
      "state": "Uttar Pradesh",
      "place": "Koti Shiv Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 900,
      "city": "Hapur",
      "state": "Uttar Pradesh",
      "place": "Pataleshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 901,
      "city": "Hapur",
      "state": "Uttar Pradesh",
      "place": "Pura Maha Deva Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 902,
      "city": "Hapur",
      "state": "Uttar Pradesh",
      "place": "Mankameshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 903,
      "city": "Haridwar",
      "state": "Uttarakhand",
      "place": "Har Ki Pauri",
      "popularity": "High",
      "description": "Hindu ghat, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 904,
      "city": "Haridwar",
      "state": "Uttarakhand",
      "place": "Mansa Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 905,
      "city": "Haridwar",
      "state": "Uttarakhand",
      "place": "Chandi Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 906,
      "city": "Hassan",
      "state": "Karnataka",
      "place": "Hoysaleswara Temple",
      "popularity": "High",
      "description": "Hindu temple, Hoysala architecture.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 907,
      "city": "Hassan",
      "state": "Karnataka",
      "place": "Belur Temple",
      "popularity": "High",
      "description": "Hindu temple, Chennakesava Temple.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 908,
      "city": "Hassan",
      "state": "Karnataka",
      "place": "Shravanabelagola",
      "popularity": "High",
      "description": "Jain pilgrimage center, Gommateshwara statue.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 909,
      "city": "Hassan",
      "state": "Karnataka",
      "place": "Halebidu Temple",
      "popularity": "High",
      "description": "Hindu temple, Hoysala architecture.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 910,
      "city": "Hathras",
      "state": "Uttar Pradesh",
      "place": "Pandit Kali Charan Sharma Government Ayurvedic College and Hospital",
      "popularity": "Medium",
      "description": "Ayurvedic college and hospital, healthcare education.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 911,
      "city": "Hathras",
      "state": "Uttar Pradesh",
      "place": "Banshi Vat",
      "popularity": "Medium",
      "description": "Historical garden, cultural significance.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 912,
      "city": "Hathras",
      "state": "Uttar Pradesh",
      "place": "Gandhi Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 913,
      "city": "Havelock Island",
      "state": "Andaman and Nicobar Islands",
      "place": "Radhanagar Beach",
      "popularity": "High",
      "description": "Prized beach, swimming, sunbathing.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 914,
      "city": "Havelock Island",
      "state": "Andaman and Nicobar Islands",
      "place": "Elephant Beach",
      "popularity": "Medium",
      "description": "Scenic beach, water activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 915,
      "city": "Havelock Island",
      "state": "Andaman and Nicobar Islands",
      "place": "Kalapathar Beach",
      "popularity": "Low",
      "description": "Picturesque beach, sunset views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 916,
      "city": "Havelock Island",
      "state": "Andaman and Nicobar Islands",
      "place": "Neil's Cove",
      "popularity": "Low",
      "description": "Secluded cove, snorkeling spot.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 917,
      "city": "Havelock Island",
      "state": "Andaman and Nicobar Islands",
      "place": "Vijaynagar Beach",
      "popularity": "Low",
      "description": "Tranquil beach, relaxation.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 918,
      "city": "Hazaribagh",
      "state": "Jharkhand",
      "place": "Hazaribagh National Park",
      "popularity": "Medium",
      "description": "National park, wildlife spotting.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 919,
      "city": "Hazaribagh",
      "state": "Jharkhand",
      "place": "Canary Hill",
      "popularity": "Medium",
      "description": "Hill station, panoramic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 920,
      "city": "Hazaribagh",
      "state": "Jharkhand",
      "place": "Birsa Munda Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 921,
      "city": "Hazaribagh",
      "state": "Jharkhand",
      "place": "Iskon Temple",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual retreat.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 922,
      "city": "Hazaribagh",
      "state": "Jharkhand",
      "place": "Jonha Falls",
      "popularity": "Medium",
      "description": "Spectacular waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 923,
      "city": "Hemis",
      "state": "Ladakh",
      "place": "Hemis Monastery",
      "popularity": "Medium",
      "description": "Buddhist monastery, cultural heritage.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 924,
      "city": "Hemis",
      "state": "Ladakh",
      "place": "Hemis National Park",
      "popularity": "High",
      "description": "National park, snow leopards.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 925,
      "city": "Hemis",
      "state": "Ladakh",
      "place": "Hemis Gompa",
      "popularity": "Medium",
      "description": "Buddhist monastery, festival celebrations.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 926,
      "city": "Hinganghat",
      "state": "Maharashtra",
      "place": "Sant Gajanan Maharaj Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 927,
      "city": "Hinganghat",
      "state": "Maharashtra",
      "place": "Chandika Devi Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 928,
      "city": "Hinganghat",
      "state": "Maharashtra",
      "place": "Ramanwadi Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 929,
      "city": "Hinganghat",
      "state": "Maharashtra",
      "place": "Ramtek",
      "popularity": "Medium",
      "description": "Hill station, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 930,
      "city": "Hinganghat",
      "state": "Maharashtra",
      "place": "Gangakhed Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 931,
      "city": "Hisar",
      "state": "Haryana",
      "place": "Blue Bird Lake",
      "popularity": "Medium",
      "description": "Lake, boating facilities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 932,
      "city": "Hisar",
      "state": "Haryana",
      "place": "Agroha Dham",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 933,
      "city": "Hisar",
      "state": "Haryana",
      "place": "Tomb of Pranpir Badshah",
      "popularity": "Medium",
      "description": "Historical tomb, cultural significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 934,
      "city": "Hisar",
      "state": "Haryana",
      "place": "Feroze Shah's Palace and Fort",
      "popularity": "Medium",
      "description": "Historical palace and fort, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 935,
      "city": "Hisar",
      "state": "Haryana",
      "place": "Devi Bhawan Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 936,
      "city": "Hnahthial",
      "state": "Mizoram",
      "place": "Hnahthial Presbyterian Church",
      "popularity": "High",
      "description": "Church, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 937,
      "city": "Hnahthial",
      "state": "Mizoram",
      "place": "Tuiawl Village",
      "popularity": "Medium",
      "description": "Mizo village, traditional way of life.",
      "type": "Village",
      "budget": 1000
    },
    {
      "Index": 938,
      "city": "Hnahthial",
      "state": "Mizoram",
      "place": "Hnahthial Park",
      "popularity": "Medium",
      "description": "Public park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 939,
      "city": "Hosapete",
      "state": "Karnataka",
      "place": "Tungabhadra Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 940,
      "city": "Hosapete",
      "state": "Karnataka",
      "place": "T.B. Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 941,
      "city": "Hoshangabad",
      "state": "Madhya Pradesh",
      "place": "Hoshang Shah's Tomb",
      "popularity": "Medium",
      "description": "Historical tomb, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 942,
      "city": "Hoshangabad",
      "state": "Madhya Pradesh",
      "place": "Tawa Reservoir",
      "popularity": "Medium",
      "description": "Water reservoir, scenic surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 943,
      "city": "Hoshangabad",
      "state": "Madhya Pradesh",
      "place": "Sethani Ghat",
      "popularity": "Medium",
      "description": "Ghat, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 944,
      "city": "Hoshiarpur",
      "state": "Punjab",
      "place": "Dera Baba Banda",
      "popularity": "Medium",
      "description": "Sikh gurdwara, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 945,
      "city": "Hoshiarpur",
      "state": "Punjab",
      "place": "Kamahi Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 946,
      "city": "Hoshiarpur",
      "state": "Punjab",
      "place": "Kamahi Devi Forest Reserve",
      "popularity": "Medium",
      "description": "Forest reserve, wildlife conservation.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 947,
      "city": "Hoshiarpur",
      "state": "Punjab",
      "place": "Takhni-Rehmapur Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 948,
      "city": "Hoshiarpur",
      "state": "Punjab",
      "place": "Dasuya Forest",
      "popularity": "Medium",
      "description": "Forest reserve, hiking trails.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 949,
      "city": "Howrah",
      "state": "West Bengal",
      "place": "Howrah Bridge",
      "popularity": "High",
      "description": "Iconic bridge, engineering marvel.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 950,
      "city": "Howrah",
      "state": "West Bengal",
      "place": "Belur Math",
      "popularity": "Medium",
      "description": "Ramakrishna Mission headquarters.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 951,
      "city": "Howrah",
      "state": "West Bengal",
      "place": "Botanical Garden, Howrah",
      "popularity": "Medium",
      "description": "Large botanical garden, rare plants.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 952,
      "city": "Howrah",
      "state": "West Bengal",
      "place": "Howrah Railway Station",
      "popularity": "High",
      "description": "Iconic railway station, historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 953,
      "city": "Howrah",
      "state": "West Bengal",
      "place": "Howrah Railway Museum",
      "popularity": "Medium",
      "description": "Railway museum, historical exhibits.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 954,
      "city": "Howrah",
      "state": "West Bengal",
      "place": "Vidyasagar Setu",
      "popularity": "High",
      "description": "Cable-stayed bridge, architectural marvel.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 955,
      "city": "Hubballi-Dharwad",
      "state": "Karnataka",
      "place": "Unakal Lake",
      "popularity": "Medium",
      "description": "Picturesque lake, boating facilities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 956,
      "city": "Hubballi-Dharwad",
      "state": "Karnataka",
      "place": "Siddharoodha Math",
      "popularity": "Low",
      "description": "Spiritual center, serene atmosphere.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 957,
      "city": "Hubballi-Dharwad",
      "state": "Karnataka",
      "place": "Chandramouleshwara Temple",
      "popularity": "Medium",
      "description": "Ancient temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 958,
      "city": "Hubli",
      "state": "Karnataka",
      "place": "Indira Gandhi Glass House Garden",
      "popularity": "Medium",
      "description": "Public garden, flower shows.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 959,
      "city": "Hubli",
      "state": "Karnataka",
      "place": "Unkal Lake",
      "popularity": "Medium",
      "description": "Picturesque lake, boating facilities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 960,
      "city": "Hugli-Chinsurah",
      "state": "West Bengal",
      "place": "Imambara of Chinsurah",
      "popularity": "Medium",
      "description": "Islamic mosque, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 961,
      "city": "Hugli-Chinsurah",
      "state": "West Bengal",
      "place": "Bandel Church",
      "popularity": "Medium",
      "description": "Christian church, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 962,
      "city": "Hyderabad",
      "state": "Telangana",
      "place": "Charminar",
      "popularity": "High",
      "description": "Iconic monument, bustling market around.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 963,
      "city": "Hyderabad",
      "state": "Telangana",
      "place": "Golconda Fort",
      "popularity": "High",
      "description": "Impressive architecture, sound & light show.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 964,
      "city": "Hyderabad",
      "state": "Telangana",
      "place": "Hussain Sagar Lake",
      "popularity": "Medium",
      "description": "Scenic beauty, boating facilities available.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 965,
      "city": "Hyderabad",
      "state": "Telangana",
      "place": "Ramoji Film City",
      "popularity": "High",
      "description": "Largest film studio complex, guided tours.",
      "type": "Entertainment",
      "budget": 1500
    },
    {
      "Index": 966,
      "city": "Hyderabad",
      "state": "Telangana",
      "place": "Salar Jung Museum",
      "popularity": "High",
      "description": "Art and antiquities museum.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 967,
      "city": "Hyderabad",
      "state": "Telangana",
      "place": "Snow World, Hyderabad",
      "popularity": "Medium",
      "description": "Indoor snow park, family entertainment.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 968,
      "city": "Hyderabad",
      "state": "Telangana",
      "place": "Nehru Zoological Park",
      "popularity": "Medium",
      "description": "Zoological park, family attraction.",
      "type": "Wildlife",
      "budget": 1500
    },
    {
      "Index": 969,
      "city": "Hyderabad",
      "state": "Telangana",
      "place": "Qutb Shahi Tombs",
      "popularity": "Medium",
      "description": "Architectural complex, historical significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 970,
      "city": "Hyderabad",
      "state": "Telangana",
      "place": "Shilparamam",
      "popularity": "Medium",
      "description": "Cultural village, arts and crafts.",
      "type": "Village",
      "budget": 1000
    },
    {
      "Index": 971,
      "city": "Igatpuri",
      "state": "Maharashtra",
      "place": "Kalsubai Peak",
      "popularity": "High",
      "description": "Highest peak in Maharashtra, trekking.",
      "type": "Adventure",
      "budget": 1500
    },
    {
      "Index": 972,
      "city": "Igatpuri",
      "state": "Maharashtra",
      "place": "Tringalwadi Fort",
      "popularity": "Medium",
      "description": "Historical fort, trekking destination.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 973,
      "city": "Igatpuri",
      "state": "Maharashtra",
      "place": "Bhatsa River Valley",
      "popularity": "Medium",
      "description": "Valley, scenic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 974,
      "city": "Imphal",
      "state": "Manipur",
      "place": "Kangla Fort",
      "popularity": "Medium",
      "description": "Historical fort, cultural significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 975,
      "city": "Imphal",
      "state": "Manipur",
      "place": "Ima Keithel",
      "popularity": "Medium",
      "description": "Women's market, Cultural hub.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 976,
      "city": "Imphal",
      "state": "Manipur",
      "place": "Loktak Lake",
      "popularity": "Medium",
      "description": "Lake, floating islands.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 977,
      "city": "Imphal",
      "state": "Manipur",
      "place": "Ima Keithel (Mother's Market)",
      "popularity": "High",
      "description": "Asia's largest all-women market.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 978,
      "city": "Imphal",
      "state": "Manipur",
      "place": "Manipur State Museum",
      "popularity": "Medium",
      "description": "Museum, exhibits on Manipuri culture.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 979,
      "city": "Imphal",
      "state": "Manipur",
      "place": "Shri Govindajee Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 980,
      "city": "Indore",
      "state": "Madhya Pradesh",
      "place": "Rajwada Palace",
      "popularity": "High",
      "description": "Historical palace, architectural blend.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 981,
      "city": "Indore",
      "state": "Madhya Pradesh",
      "place": "Kanch Mandir",
      "popularity": "Medium",
      "description": "Jain temple, intricate glasswork.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 982,
      "city": "Indore",
      "state": "Madhya Pradesh",
      "place": "Lal Bagh Palace",
      "popularity": "Medium",
      "description": "Royal residence, lush gardens.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 983,
      "city": "Indore",
      "state": "Madhya Pradesh",
      "place": "Regional Park, Indore",
      "popularity": "Low",
      "description": "Large park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 984,
      "city": "Indore",
      "state": "Madhya Pradesh",
      "place": "Sarafa Bazaar",
      "popularity": "High",
      "description": "Night market, street food.",
      "type": "Market",
      "budget": 2000
    },
    {
      "Index": 985,
      "city": "Indore",
      "state": "Madhya Pradesh",
      "place": "Kamla Nehru Prani Sangrahalaya",
      "popularity": "Medium",
      "description": "Zoo, animal exhibits.",
      "type": "Wildlife",
      "budget": 1000
    },
    {
      "Index": 986,
      "city": "Itanagar",
      "state": "Arunachal Pradesh",
      "place": "Ita Fort",
      "popularity": "Medium",
      "description": "Historical fort, archaeological site.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 987,
      "city": "Itanagar",
      "state": "Arunachal Pradesh",
      "place": "Gompa Mandir",
      "popularity": "Medium",
      "description": "Buddhist temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 988,
      "city": "Itanagar",
      "state": "Arunachal Pradesh",
      "place": "Indira Gandhi Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 989,
      "city": "Itanagar",
      "state": "Arunachal Pradesh",
      "place": "Gekar Sinyi (Ganga Lake)",
      "popularity": "Medium",
      "description": "Lake, boating, scenic beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 990,
      "city": "Itanagar",
      "state": "Arunachal Pradesh",
      "place": "Jawaharlal Nehru Museum",
      "popularity": "Medium",
      "description": "Museum, cultural artifacts.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 991,
      "city": "Itanagar",
      "state": "Arunachal Pradesh",
      "place": "Gompa",
      "popularity": "High",
      "description": "Buddhist monastery, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 992,
      "city": "Itanagar",
      "state": "Arunachal Pradesh",
      "place": "Sella Pass",
      "popularity": "High",
      "description": "Mountain pass, scenic drive.",
      "type": "Adventure",
      "budget": 1500
    },
    {
      "Index": 993,
      "city": "Jabalpur",
      "state": "Madhya Pradesh",
      "place": "Bhedaghat",
      "popularity": "High",
      "description": "Marble rocks, boat rides on Narmada river.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 994,
      "city": "Jabalpur",
      "state": "Madhya Pradesh",
      "place": "Dhuandhar Falls",
      "popularity": "Medium",
      "description": "Smoky waterfall, adventurous boat rides.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 995,
      "city": "Jabalpur",
      "state": "Madhya Pradesh",
      "place": "Rani Durgavati Museum",
      "popularity": "Medium",
      "description": "Historical artifacts, cultural heritage.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 996,
      "city": "Jabalpur",
      "state": "Madhya Pradesh",
      "place": "Madhav Bhawan",
      "popularity": "Medium",
      "description": "Historical mansion, colonial architecture.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 997,
      "city": "Jabalpur",
      "state": "Madhya Pradesh",
      "place": "Tilwara Ghat",
      "popularity": "Medium",
      "description": "Holy site, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 998,
      "city": "Jagdalpur",
      "state": "Chhattisgarh",
      "place": "Tirathgarh Falls",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 999,
      "city": "Jagdalpur",
      "state": "Chhattisgarh",
      "place": "Chitrakote Falls",
      "popularity": "Medium",
      "description": "Waterfall, scenic surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1000,
      "city": "Jagdalpur",
      "state": "Chhattisgarh",
      "place": "Danteshwari Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1001,
      "city": "Jagdalpur",
      "state": "Chhattisgarh",
      "place": "Chitrakoot Falls",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1002,
      "city": "Jagdalpur",
      "state": "Chhattisgarh",
      "place": "Chitradhara Waterfalls",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1003,
      "city": "Jagdalpur",
      "state": "Chhattisgarh",
      "place": "Tirathgarh Waterfalls",
      "popularity": "High",
      "description": "Spectacular waterfall, lush greenery.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1004,
      "city": "Jagdalpur",
      "state": "Chhattisgarh",
      "place": "Bastar Palace",
      "popularity": "High",
      "description": "Royal palace, historical significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1005,
      "city": "Jaggayyapeta",
      "state": "Andhra Pradesh",
      "place": "Sri Chennakesava Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1006,
      "city": "Jaggayyapeta",
      "state": "Andhra Pradesh",
      "place": "Prakasam Barrage",
      "popularity": "Medium",
      "description": "Barrage, scenic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1007,
      "city": "Jaggayyapeta",
      "state": "Andhra Pradesh",
      "place": "Kondapalli Reserve Forest",
      "popularity": "Medium",
      "description": "Forest reserve, wildlife viewing.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1008,
      "city": "Jaggayyapeta",
      "state": "Andhra Pradesh",
      "place": "Sri Uma Ramalingeswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1009,
      "city": "Jaggayyapeta",
      "state": "Andhra Pradesh",
      "place": "Potuluri Veerabrahmendra Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1010,
      "city": "Jaggayyapeta",
      "state": "Andhra Pradesh",
      "place": "Bhairava Kona",
      "popularity": "Medium",
      "description": "Historical site, scenic views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1011,
      "city": "Jaggayyapeta",
      "state": "Andhra Pradesh",
      "place": "Sree Seetha Ramachandra Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1012,
      "city": "Jaggayyapeta",
      "state": "Andhra Pradesh",
      "place": "Patilammavari Gudi",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1013,
      "city": "Jaggayyapeta",
      "state": "Andhra Pradesh",
      "place": "Kotilingeswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1014,
      "city": "Jaipur",
      "state": "Rajasthan",
      "place": "City Palace, Jaipur",
      "popularity": "High",
      "description": "Exquisite architecture, royal residence.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1015,
      "city": "Jaipur",
      "state": "Rajasthan",
      "place": "Hawa Mahal",
      "popularity": "High",
      "description": "Unique facade, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1016,
      "city": "Jaipur",
      "state": "Rajasthan",
      "place": "Amber Fort",
      "popularity": "Medium",
      "description": "Majestic fort, elephant rides available.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1017,
      "city": "Jaipur",
      "state": "Rajasthan",
      "place": "Jantar Mantar",
      "popularity": "Medium",
      "description": "Astronomical observatory, ancient instruments.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1018,
      "city": "Jaipur",
      "state": "Rajasthan",
      "place": "Amer Fort",
      "popularity": "High",
      "description": "Historical fort, panoramic views, light shows.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1019,
      "city": "Jaisalmer",
      "state": "Rajasthan",
      "place": "Jaisalmer Fort",
      "popularity": "High",
      "description": "Historical fort, museum, desert views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1020,
      "city": "Jaisalmer",
      "state": "Rajasthan",
      "place": "Patwon Ki Haveli",
      "popularity": "High",
      "description": "Historical mansion, architecture, museum.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1021,
      "city": "Jaisalmer",
      "state": "Rajasthan",
      "place": "Sam Sand Dunes",
      "popularity": "Medium",
      "description": "Desert dunes, camel rides, cultural performances.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1022,
      "city": "Jalandhar",
      "state": "Punjab",
      "place": "Devi Talab Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1023,
      "city": "Jalandhar",
      "state": "Punjab",
      "place": "Shaheed-E-Azam Sardar Bhagat Singh Museum",
      "popularity": "Medium",
      "description": "Historical museum, artifacts and documents.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1024,
      "city": "Jalandhar",
      "state": "Punjab",
      "place": "Wonderland Theme Park",
      "popularity": "Medium",
      "description": "Amusement park, thrilling rides.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 1025,
      "city": "Jalandhar",
      "state": "Punjab",
      "place": "Rangla Punjab Haveli",
      "popularity": "Medium",
      "description": "Cultural village, Punjabi heritage.",
      "type": "Village",
      "budget": 1500
    },
    {
      "Index": 1026,
      "city": "Jalgaon",
      "state": "Maharashtra",
      "place": "Shri Padmalaya Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1027,
      "city": "Jalgaon",
      "state": "Maharashtra",
      "place": "Gavdevi Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual ambiance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1028,
      "city": "Jalgaon",
      "state": "Maharashtra",
      "place": "Ganapati Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, cultural significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1029,
      "city": "Jalgaon",
      "state": "Maharashtra",
      "place": "Manudevi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1030,
      "city": "Jalgaon",
      "state": "Maharashtra",
      "place": "Patnadevi",
      "popularity": "Medium",
      "description": "Hindu temple, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1031,
      "city": "Jalgaon",
      "state": "Maharashtra",
      "place": "Ozar",
      "popularity": "Medium",
      "description": "Pilgrimage site, Hindu temple.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1032,
      "city": "Jalgaon",
      "state": "Maharashtra",
      "place": "Shri Padmalaya",
      "popularity": "High",
      "description": "Hindu pilgrimage site, temple complex.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1033,
      "city": "Jalgaon",
      "state": "Maharashtra",
      "place": "Jalgaon Railway Station",
      "popularity": "Medium",
      "description": "Historical railway station, architecture.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1034,
      "city": "Jalna",
      "state": "Maharashtra",
      "place": "Jalna Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1035,
      "city": "Jalna",
      "state": "Maharashtra",
      "place": "Matsyodari Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1036,
      "city": "Jalna",
      "state": "Maharashtra",
      "place": "Chand Bibi Mahal",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1037,
      "city": "Jalna",
      "state": "Maharashtra",
      "place": "Shri Jagatguru Tukdoji Maharaj",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1038,
      "city": "Jalna",
      "state": "Maharashtra",
      "place": "Jalna Urban Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1039,
      "city": "Jalna",
      "state": "Maharashtra",
      "place": "Jamb Samarth Maharaj Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1040,
      "city": "Jalna",
      "state": "Maharashtra",
      "place": "Khadidham Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1041,
      "city": "Jalna",
      "state": "Maharashtra",
      "place": "Ashti, Jalna",
      "popularity": "High",
      "description": "Tourist spot, scenic beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1042,
      "city": "Jalna",
      "state": "Maharashtra",
      "place": "Shri Jagdamba Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1043,
      "city": "Jalna",
      "state": "Maharashtra",
      "place": "Anandi Swami Temple",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual ambiance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1044,
      "city": "Jalna",
      "state": "Maharashtra",
      "place": "Jai Bhavani Temple",
      "popularity": "Medium",
      "description": "Hindu temple, cultural heritage.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1045,
      "city": "Jalna",
      "state": "Maharashtra",
      "place": "Ambad Jalna Buddhist Caves",
      "popularity": "Low",
      "description": "Buddhist caves, archaeological site.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1046,
      "city": "Jalna",
      "state": "Maharashtra",
      "place": "Aurangabad Caves",
      "popularity": "Medium",
      "description": "Buddhist caves, rock-cut architecture.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1047,
      "city": "Jalna",
      "state": "Maharashtra",
      "place": "Ganesh Temple, Ghansawangi",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1048,
      "city": "Jalpaiguri",
      "state": "West Bengal",
      "place": "Jalpesh Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1049,
      "city": "Jalpaiguri",
      "state": "West Bengal",
      "place": "Chapramari Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, safari.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1050,
      "city": "Jalpaiguri",
      "state": "West Bengal",
      "place": "Jalpaiguri Rajbari",
      "popularity": "Medium",
      "description": "Historical palace, architectural significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1051,
      "city": "Jamalpur",
      "state": "Bihar",
      "place": "Tara Chandi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1052,
      "city": "Jamalpur",
      "state": "Bihar",
      "place": "Pahari Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1053,
      "city": "Jamalpur",
      "state": "Bihar",
      "place": "Ghorakatora Lake",
      "popularity": "Medium",
      "description": "Lake, picnic spot.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1054,
      "city": "Jammalamadugu",
      "state": "Andhra Pradesh",
      "place": "Jamalapuram Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1055,
      "city": "Jammalamadugu",
      "state": "Andhra Pradesh",
      "place": "Siddheswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1056,
      "city": "Jammu",
      "state": "Jammu and Kashmir",
      "place": "Vaishno Devi Temple",
      "popularity": "High",
      "description": "Hindu pilgrimage site, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1057,
      "city": "Jammu",
      "state": "Jammu and Kashmir",
      "place": "Bahu Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1058,
      "city": "Jammu",
      "state": "Jammu and Kashmir",
      "place": "Raghunath Temple",
      "popularity": "Medium",
      "description": "Hindu temple complex, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1059,
      "city": "Jamnagar",
      "state": "Gujarat",
      "place": "Lakhota Lake",
      "popularity": "Medium",
      "description": "Lake with bird sanctuary, boating facilities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1060,
      "city": "Jamnagar",
      "state": "Gujarat",
      "place": "Khijadiya Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, diverse bird species.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1061,
      "city": "Jamnagar",
      "state": "Gujarat",
      "place": "Bala Hanuman Temple",
      "popularity": "Medium",
      "description": "Hindu temple, continuous chanting.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1062,
      "city": "Jamnagar",
      "state": "Gujarat",
      "place": "Lakhota Palace",
      "popularity": "High",
      "description": "Fortress, historical significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1063,
      "city": "Jamnagar",
      "state": "Gujarat",
      "place": "Marine National Park",
      "popularity": "High",
      "description": "National park, marine biodiversity.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1064,
      "city": "Jamnagar",
      "state": "Gujarat",
      "place": "Ranmal Lake",
      "popularity": "Medium",
      "description": "Artificial lake, scenic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1065,
      "city": "Jamshedpur",
      "state": "Jharkhand",
      "place": "Jubilee Park",
      "popularity": "Medium",
      "description": "Largest urban park, recreational facilities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1066,
      "city": "Jamshedpur",
      "state": "Jharkhand",
      "place": "Tata Steel Zoological Park",
      "popularity": "Medium",
      "description": "Zoo with diverse animal species.",
      "type": "Wildlife",
      "budget": 1000
    },
    {
      "Index": 1067,
      "city": "Jamshedpur",
      "state": "Jharkhand",
      "place": "Dimna Lake",
      "popularity": "Low",
      "description": "Picturesque lake, boating facilities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1068,
      "city": "Jangareddigudem",
      "state": "Andhra Pradesh",
      "place": "Kukkuteswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1069,
      "city": "Jangareddigudem",
      "state": "Andhra Pradesh",
      "place": "Godavari River Viewpoint",
      "popularity": "Medium",
      "description": "Viewpoint, scenic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1070,
      "city": "Jangareddigudem",
      "state": "Andhra Pradesh",
      "place": "Jangareddigudem Bus Stand",
      "popularity": "Medium",
      "description": "Public transportation hub.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1071,
      "city": "Jaunpur",
      "state": "Uttar Pradesh",
      "place": "Kalika Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1072,
      "city": "Jaunpur",
      "state": "Uttar Pradesh",
      "place": "Jhanjhari Mosque",
      "popularity": "Medium",
      "description": "Islamic mosque, historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1073,
      "city": "Jhansi",
      "state": "Uttar Pradesh",
      "place": "Jhansi Fort",
      "popularity": "High",
      "description": "Historical fort, architectural marvel.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1074,
      "city": "Jhansi",
      "state": "Uttar Pradesh",
      "place": "Jhansi Museum",
      "popularity": "Medium",
      "description": "Museum showcasing artifacts from Bundelkhand region.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1075,
      "city": "Jhansi",
      "state": "Uttar Pradesh",
      "place": "St. Jude's Shrine",
      "popularity": "Medium",
      "description": "Christian shrine, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1076,
      "city": "Jhansi",
      "state": "Uttar Pradesh",
      "place": "Mahalakshmi Temple, Jhansi",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1077,
      "city": "Jhansi",
      "state": "Uttar Pradesh",
      "place": "Rani Mahal, Jhansi",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1078,
      "city": "Jharsuguda",
      "state": "Odisha",
      "place": "Jhadeswar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1079,
      "city": "Jharsuguda",
      "state": "Odisha",
      "place": "Koilighughar Waterfall",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1080,
      "city": "Jharsuguda",
      "state": "Odisha",
      "place": "Vikramkhol Cave",
      "popularity": "Medium",
      "description": "Cave, historical site.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1081,
      "city": "Jhunjhunu",
      "state": "Rajasthan",
      "place": "Mandawa Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1082,
      "city": "Jhunjhunu",
      "state": "Rajasthan",
      "place": "Khetri Mahal",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1083,
      "city": "Jhunjhunu",
      "state": "Rajasthan",
      "place": "Modi Haveli",
      "popularity": "Medium",
      "description": "Historical haveli, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1084,
      "city": "Jind",
      "state": "Haryana",
      "place": "Kheri Sthal",
      "popularity": "Medium",
      "description": "Pilgrimage site, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1085,
      "city": "Jind",
      "state": "Haryana",
      "place": "Hariyali Amavas Ki Dhab",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1086,
      "city": "Jind",
      "state": "Haryana",
      "place": "Shaheed Ashfaqulla Khan Park",
      "popularity": "Medium",
      "description": "Urban park, green space.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1087,
      "city": "Jodhpur",
      "state": "Rajasthan",
      "place": "Mehrangarh Fort",
      "popularity": "High",
      "description": "Historical fort, stunning architecture.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1088,
      "city": "Jodhpur",
      "state": "Rajasthan",
      "place": "Umaid Bhawan Palace",
      "popularity": "High",
      "description": "Luxurious palace, heritage hotel.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1089,
      "city": "Jodhpur",
      "state": "Rajasthan",
      "place": "Jaswant Thada",
      "popularity": "Medium",
      "description": "Marble memorial, peaceful ambiance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1090,
      "city": "Jorhat",
      "state": "Assam",
      "place": "Majuli, Jorhat",
      "popularity": "High",
      "description": "Island, cultural heritage.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1091,
      "city": "Jorhat",
      "state": "Assam",
      "place": "Gibbon Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, primate conservation.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1092,
      "city": "Jorhat",
      "state": "Assam",
      "place": "Ledo Road War Cemetery",
      "popularity": "Medium",
      "description": "War cemetery, historical significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1093,
      "city": "Jorhat",
      "state": "Assam",
      "place": "Bangalpukhari Tank",
      "popularity": "Medium",
      "description": "Historical water tank, architectural significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1094,
      "city": "Jorhat",
      "state": "Assam",
      "place": "Burigosain Devalay",
      "popularity": "Medium",
      "description": "Hindu temple, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1095,
      "city": "Jowai",
      "state": "Meghalaya",
      "place": "Kupli Dam",
      "popularity": "High",
      "description": "Dam, scenic surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1096,
      "city": "Jowai",
      "state": "Meghalaya",
      "place": "Nartiang Monoliths",
      "popularity": "High",
      "description": "Monolith site, archaeological significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1097,
      "city": "Jowai",
      "state": "Meghalaya",
      "place": "Tyrshi Falls",
      "popularity": "High",
      "description": "Spectacular waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1098,
      "city": "Jowai",
      "state": "Meghalaya",
      "place": "Lalong Park",
      "popularity": "Medium",
      "description": "Public park, leisure activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1099,
      "city": "Jowai",
      "state": "Meghalaya",
      "place": "Kiang Nangbah Monument",
      "popularity": "High",
      "description": "Monument, historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1100,
      "city": "Jowai",
      "state": "Meghalaya",
      "place": "Kseh Synrang Park",
      "popularity": "Medium",
      "description": "Public park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1101,
      "city": "Jowai",
      "state": "Meghalaya",
      "place": "Thadlaskein Lake",
      "popularity": "Medium",
      "description": "Lake, boating, and picnicking.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1102,
      "city": "Jowai",
      "state": "Meghalaya",
      "place": "Khrang",
      "popularity": "High",
      "description": "Cave complex, spelunking adventure.",
      "type": "Adventure",
      "budget": 1000
    },
    {
      "Index": 1103,
      "city": "Jowai",
      "state": "Meghalaya",
      "place": "Umlawan Cave",
      "popularity": "High",
      "description": "Limestone cave, spelunking adventure.",
      "type": "Adventure",
      "budget": 1500
    },
    {
      "Index": 1104,
      "city": "Junagadh",
      "state": "Gujarat",
      "place": "Girnar Hill",
      "popularity": "High",
      "description": "Hill station, pilgrimage site.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1105,
      "city": "Junagadh",
      "state": "Gujarat",
      "place": "Gir National Park",
      "popularity": "High",
      "description": "National park, Asiatic lion habitat.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1106,
      "city": "Junagadh",
      "state": "Gujarat",
      "place": "Uparkot Fort",
      "popularity": "Medium",
      "description": "Fortress, historical significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1107,
      "city": "Junagadh",
      "state": "Gujarat",
      "place": "Mahabat Maqbara",
      "popularity": "Medium",
      "description": "Mausoleum, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1108,
      "city": "Junagadh",
      "state": "Gujarat",
      "place": "Sakkarbaug Zoological Garden",
      "popularity": "High",
      "description": "Zoological park, wildlife conservation.",
      "type": "Wildlife",
      "budget": 1000
    },
    {
      "Index": 1109,
      "city": "Kadapa",
      "state": "Andhra Pradesh",
      "place": "Gandi Kshetram Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1110,
      "city": "Kadapa",
      "state": "Andhra Pradesh",
      "place": "Brahmamgari Matam",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual teachings.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1111,
      "city": "Kadapa",
      "state": "Andhra Pradesh",
      "place": "Belum Caves",
      "popularity": "High",
      "description": "Limestone caves, underground chambers.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1112,
      "city": "Kadapa",
      "state": "Andhra Pradesh",
      "place": "Sri Venkateswara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1113,
      "city": "Kadapa",
      "state": "Andhra Pradesh",
      "place": "Bhagwan Mahavir Government Museum",
      "popularity": "Medium",
      "description": "Museum, historical artifacts.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 1114,
      "city": "Kadapa",
      "state": "Andhra Pradesh",
      "place": "Gandikota Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1115,
      "city": "Kadapa",
      "state": "Andhra Pradesh",
      "place": "Akka Mahadevi Caves",
      "popularity": "Medium",
      "description": "Cave temple, historical significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1116,
      "city": "Kadi",
      "state": "Gujarat",
      "place": "Kadi Ranotsav",
      "popularity": "Medium",
      "description": "Festival, cultural celebration.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 1117,
      "city": "Kadi",
      "state": "Gujarat",
      "place": "Kadiya Lake",
      "popularity": "Medium",
      "description": "Lake, boating.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1118,
      "city": "Kadiri",
      "state": "Andhra Pradesh",
      "place": "Nallamada Reservoir",
      "popularity": "Medium",
      "description": "Water reservoir, scenic surroundings.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1119,
      "city": "Kadiri",
      "state": "Andhra Pradesh",
      "place": "Veerabhadra Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1120,
      "city": "Kadiri",
      "state": "Andhra Pradesh",
      "place": "Sri Venugopalaswami Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1121,
      "city": "Kadiri",
      "state": "Andhra Pradesh",
      "place": "Iskon Temple, Kadiri",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1122,
      "city": "Kailashahar",
      "state": "Tripura",
      "place": "Kailashahar Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1123,
      "city": "Kailashahar",
      "state": "Tripura",
      "place": "Chouddo Devotar Temple",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1124,
      "city": "Kailashahar",
      "state": "Tripura",
      "place": "Rudrasagar Lake",
      "popularity": "High",
      "description": "Lake, scenic beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1125,
      "city": "Kailashahar",
      "state": "Tripura",
      "place": "Kamalasagar Kali Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1126,
      "city": "Kaithal",
      "state": "Haryana",
      "place": "Chandrawati Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1127,
      "city": "Kaithal",
      "state": "Haryana",
      "place": "Chandraprabhu Digambar Jain Temple",
      "popularity": "Medium",
      "description": "Jain temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1128,
      "city": "Kaithal",
      "state": "Haryana",
      "place": "Kirola Sports Park",
      "popularity": "Medium",
      "description": "Sports complex, recreational activities.",
      "type": "Entertainment",
      "budget": 2000
    },
    {
      "Index": 1129,
      "city": "Kakinada",
      "state": "Andhra Pradesh",
      "place": "Coringa Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Mangrove forest, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1130,
      "city": "Kakinada",
      "state": "Andhra Pradesh",
      "place": "Uppada Beach",
      "popularity": "Medium",
      "description": "Scenic beach, water sports activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1131,
      "city": "Kakinada",
      "state": "Andhra Pradesh",
      "place": "Sri Bhavanarayana Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1132,
      "city": "Kakinada",
      "state": "Andhra Pradesh",
      "place": "Vivekananda Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1133,
      "city": "Kakinada",
      "state": "Andhra Pradesh",
      "place": "Kakinada Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1134,
      "city": "Kakinada",
      "state": "Andhra Pradesh",
      "place": "Konaseema",
      "popularity": "Medium",
      "description": "Scenic region, backwater cruises.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1135,
      "city": "Kalpeni",
      "state": "Lakshadweep",
      "place": "Kalpeni Island",
      "popularity": "Medium",
      "description": "Main island, coral atolls.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1136,
      "city": "Kalpeni",
      "state": "Lakshadweep",
      "place": "Kalpeni Beach",
      "popularity": "Medium",
      "description": "Beautiful beach, snorkeling, diving.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1137,
      "city": "Kalpeni",
      "state": "Lakshadweep",
      "place": "Kalpeni Lagoon",
      "popularity": "Medium",
      "description": "Calm lagoon, water sports.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1138,
      "city": "Kalpeni",
      "state": "Lakshadweep",
      "place": "Kalpeni Tip Beach",
      "popularity": "Low",
      "description": "Secluded beach, relaxation.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1139,
      "city": "Kalpeni",
      "state": "Lakshadweep",
      "place": "Kalpeni Light House",
      "popularity": "Low",
      "description": "Scenic lighthouse, panoramic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1140,
      "city": "Kalyan-Dombivali",
      "state": "Maharashtra",
      "place": "Kala Talao",
      "popularity": "Medium",
      "description": "Lake, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1141,
      "city": "Kalyan-Dombivali",
      "state": "Maharashtra",
      "place": "Bhatsa River",
      "popularity": "Medium",
      "description": "River, scenic surroundings.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1142,
      "city": "Kalyandurg",
      "state": "Andhra Pradesh",
      "place": "Kalyana Ramanatheswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1143,
      "city": "Kalyandurg",
      "state": "Andhra Pradesh",
      "place": "Venkateswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1144,
      "city": "Kalyandurg",
      "state": "Andhra Pradesh",
      "place": "Puttaparthi Airport",
      "popularity": "Medium",
      "description": "Airport, transportation hub.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1145,
      "city": "Kalyandurg",
      "state": "Andhra Pradesh",
      "place": "Kumara Rama Bhimeswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1146,
      "city": "Kamarhati",
      "state": "West Bengal",
      "place": "Kamarhati Church",
      "popularity": "Medium",
      "description": "Christian church, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1147,
      "city": "Kamarhati",
      "state": "West Bengal",
      "place": "Kamarhati Municipal Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1148,
      "city": "Kamarhati",
      "state": "West Bengal",
      "place": "Adi Ganga",
      "popularity": "Medium",
      "description": "Historical canal, pilgrimage spot.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1149,
      "city": "Kamptee",
      "state": "Maharashtra",
      "place": "Khekranala Reservoir",
      "popularity": "Medium",
      "description": "Picturesque reservoir, boating facilities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1150,
      "city": "Kamptee",
      "state": "Maharashtra",
      "place": "Balaji Mandir Kamptee",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual ambiance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1151,
      "city": "Kamptee",
      "state": "Maharashtra",
      "place": "Kalidas Museum",
      "popularity": "Medium",
      "description": "Museum showcasing artifacts related to Kalidasa.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1152,
      "city": "Kancheepuram",
      "state": "Tamil Nadu",
      "place": "Kamakshi Amman Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1153,
      "city": "Kancheepuram",
      "state": "Tamil Nadu",
      "place": "Varadharaja Perumal Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1154,
      "city": "Kancheepuram",
      "state": "Tamil Nadu",
      "place": "Kanchi Kudil",
      "popularity": "Medium",
      "description": "Museum, cultural artifacts.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 1155,
      "city": "Kanchipuram",
      "state": "Tamil Nadu",
      "place": "Kanchi Kailasanathar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1156,
      "city": "Kandukur",
      "state": "Andhra Pradesh",
      "place": "Raghavendra Swamy Mutt",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1157,
      "city": "Kandukur",
      "state": "Andhra Pradesh",
      "place": "Surya Narayana Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1158,
      "city": "Kandukur",
      "state": "Andhra Pradesh",
      "place": "Mypadu Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1159,
      "city": "Kangra",
      "state": "Himachal Pradesh",
      "place": "Kangra Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1160,
      "city": "Kangra",
      "state": "Himachal Pradesh",
      "place": "Baijnath Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1161,
      "city": "Kangra",
      "state": "Himachal Pradesh",
      "place": "Masroor Rock Cut Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural marvel.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1162,
      "city": "Kannur",
      "state": "Kerala",
      "place": "St. Angelo Fort",
      "popularity": "Medium",
      "description": "Historical fort, coastal views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1163,
      "city": "Kannur",
      "state": "Kerala",
      "place": "Muzhappilangad Beach",
      "popularity": "Medium",
      "description": "Longest drive-in beach in Asia.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1164,
      "city": "Kannur",
      "state": "Kerala",
      "place": "Parassinikkadavu Muthappan Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1165,
      "city": "Kannur",
      "state": "Kerala",
      "place": "Aralam Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, trekking, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1166,
      "city": "Kannur",
      "state": "Kerala",
      "place": "Muzhappilangad Drive-in Beach",
      "popularity": "High",
      "description": "Drive-in beach, longest in Asia.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1167,
      "city": "Kannur",
      "state": "Kerala",
      "place": "Parassinikadavu Muthappan Temple",
      "popularity": "Low",
      "description": "Hindu temple, ritual performances.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1168,
      "city": "Kannur",
      "state": "Kerala",
      "place": "Valiyaparamba Backwaters",
      "popularity": "Medium",
      "description": "Scenic backwaters, houseboat cruises.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1169,
      "city": "Kanpur",
      "state": "Uttar Pradesh",
      "place": "Allen Forest Zoo",
      "popularity": "Medium",
      "description": "Animal exhibits, family-friendly attractions.",
      "type": "Wildlife",
      "budget": 1500
    },
    {
      "Index": 1170,
      "city": "Kanpur",
      "state": "Uttar Pradesh",
      "place": "Bithoor",
      "popularity": "Medium",
      "description": "Historical pilgrimage site, Ganga riverbanks.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1171,
      "city": "Kanpur",
      "state": "Uttar Pradesh",
      "place": "Jain Glass Temple",
      "popularity": "Low",
      "description": "Intricate glasswork, serene atmosphere.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1172,
      "city": "Kanpur",
      "state": "Uttar Pradesh",
      "place": "Shri Radhakrishna Temple",
      "popularity": "High",
      "description": "Hindu temple, spiritual significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1173,
      "city": "Kanpur",
      "state": "Uttar Pradesh",
      "place": "Phool Bagh",
      "popularity": "Medium",
      "description": "Public garden, historical monument.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1174,
      "city": "Karaikkudi",
      "state": "Tamil Nadu",
      "place": "Chettinad Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1175,
      "city": "Karaikkudi",
      "state": "Tamil Nadu",
      "place": "Kanadukathan",
      "popularity": "Medium",
      "description": "Town, urban area.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1176,
      "city": "Karaikkudi",
      "state": "Tamil Nadu",
      "place": "Koviloor Aadheenam",
      "popularity": "Medium",
      "description": "Hindu monastery, spiritual retreat.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1177,
      "city": "Karaikudi",
      "state": "Tamil Nadu",
      "place": "Athangudi Tile Factory",
      "popularity": "Medium",
      "description": "Artisan workshop, tile-making.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1178,
      "city": "Karaikudi",
      "state": "Tamil Nadu",
      "place": "Kundrakudi Murugan Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1179,
      "city": "Karawal Nagar",
      "state": "Delhi",
      "place": "Baba Kaala Mehar Ji Dham",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1180,
      "city": "Karawal Nagar",
      "state": "Delhi",
      "place": "Sri Guru Nanak Dev Ji Maharaj Gurudwara",
      "popularity": "Medium",
      "description": "Sikh gurdwara, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1181,
      "city": "Karawal Nagar",
      "state": "Delhi",
      "place": "Khawaja Bilawal Shah Baba Dargah",
      "popularity": "Medium",
      "description": "Muslim shrine, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1182,
      "city": "Kargil",
      "state": "Ladakh",
      "place": "Suru Valley",
      "popularity": "Medium",
      "description": "Valley, trekking, adventure sports.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1183,
      "city": "Karimnagar",
      "state": "Telangana",
      "place": "Karimnagar Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1184,
      "city": "Karimnagar",
      "state": "Telangana",
      "place": "Ujjwala Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1185,
      "city": "Karimnagar",
      "state": "Telangana",
      "place": "Kaleshwaram",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1186,
      "city": "Karimnagar",
      "state": "Telangana",
      "place": "Elgandal Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1187,
      "city": "Karimnagar",
      "state": "Telangana",
      "place": "Vemulawada",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1188,
      "city": "Karimnagar",
      "state": "Telangana",
      "place": "Kondagattu Anjaneya Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1189,
      "city": "Karimnagar",
      "state": "Telangana",
      "place": "Lakshmi Narasimha Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1190,
      "city": "Karimnagar",
      "state": "Telangana",
      "place": "Raja Rajeshwara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1191,
      "city": "Karimnagar",
      "state": "Telangana",
      "place": "Kalwa Narsimha Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1192,
      "city": "Karimnagar",
      "state": "Telangana",
      "place": "Sri Ramachandra Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1193,
      "city": "Karimnagar",
      "state": "Telangana",
      "place": "LMD Reservoir",
      "popularity": "High",
      "description": "Water reservoir, boating, and fishing.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1194,
      "city": "Karimnagar",
      "state": "Telangana",
      "place": "Lower Manair Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1195,
      "city": "Karimnagar",
      "state": "Telangana",
      "place": "Shiva Temple - Kondagattu",
      "popularity": "Medium",
      "description": "Hindu temple, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1196,
      "city": "Karnal",
      "state": "Haryana",
      "place": "Karnal Lake",
      "popularity": "Medium",
      "description": "Man-made lake, boating facilities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1197,
      "city": "Karnal",
      "state": "Haryana",
      "place": "Karnal Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1198,
      "city": "Karnal",
      "state": "Haryana",
      "place": "Pukka Pul",
      "popularity": "Medium",
      "description": "Colonial-era bridge, architectural marvel.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1199,
      "city": "Karnal",
      "state": "Haryana",
      "place": "Manju Cinema",
      "popularity": "Medium",
      "description": "Movie theater, entertainment.",
      "type": "Entertainment",
      "budget": 1500
    },
    {
      "Index": 1200,
      "city": "Karnal",
      "state": "Haryana",
      "place": "Cantonment Church Tower",
      "popularity": "Medium",
      "description": "Christian church, historical landmark.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1201,
      "city": "Karnal",
      "state": "Haryana",
      "place": "Karna Lake",
      "popularity": "Medium",
      "description": "Lake, boating, picnic spot.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1202,
      "city": "Karur",
      "state": "Tamil Nadu",
      "place": "Kalyana Venkataramana Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1203,
      "city": "Karur",
      "state": "Tamil Nadu",
      "place": "Pasupatheeswarar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1204,
      "city": "Karur",
      "state": "Tamil Nadu",
      "place": "Kalyana Pasupatheeswarar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1205,
      "city": "Kasauli",
      "state": "Himachal Pradesh",
      "place": "Monkey Point, Kasauli",
      "popularity": "Medium",
      "description": "Viewpoint, scenic vistas.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1206,
      "city": "Kasauli",
      "state": "Himachal Pradesh",
      "place": "Christ Church, Kasauli",
      "popularity": "Medium",
      "description": "Historic church, colonial architecture.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1207,
      "city": "Kasauli",
      "state": "Himachal Pradesh",
      "place": "Mall Road, Kasauli",
      "popularity": "Medium",
      "description": "Shopping, dining, leisure walk.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1208,
      "city": "Kasganj",
      "state": "Uttar Pradesh",
      "place": "Bakhtiyar Kaki's Dargah",
      "popularity": "Medium",
      "description": "Sufi shrine, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1209,
      "city": "Kathua",
      "state": "Jammu and Kashmir",
      "place": "Basohli Bridge",
      "popularity": "Medium",
      "description": "Historical bridge, architectural significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1210,
      "city": "Kathua",
      "state": "Jammu and Kashmir",
      "place": "Jasrota Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1211,
      "city": "Katihar",
      "state": "Bihar",
      "place": "Ma Tara Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1212,
      "city": "Katihar",
      "state": "Bihar",
      "place": "Navratan Haveli",
      "popularity": "Medium",
      "description": "Historical mansion, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1213,
      "city": "Katihar",
      "state": "Bihar",
      "place": "Shri Ram Janki Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, dedicated to Lord Rama.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1214,
      "city": "Katihar",
      "state": "Bihar",
      "place": "Katihar Mosque",
      "popularity": "Medium",
      "description": "Islamic mosque, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1215,
      "city": "Katihar",
      "state": "Bihar",
      "place": "Barari Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1216,
      "city": "Katni",
      "state": "Madhya Pradesh",
      "place": "Neelkanth Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1217,
      "city": "Katni",
      "state": "Madhya Pradesh",
      "place": "Bilhari Kachari",
      "popularity": "High",
      "description": "Historical site, archaeological importance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1218,
      "city": "Katni",
      "state": "Madhya Pradesh",
      "place": "Kachnar City",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1219,
      "city": "Katni",
      "state": "Madhya Pradesh",
      "place": "Bandhavgarh National Park",
      "popularity": "Medium",
      "description": "National park, wildlife spotting.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1220,
      "city": "Katni",
      "state": "Madhya Pradesh",
      "place": "Vijayraghavgarh Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1221,
      "city": "Katni",
      "state": "Madhya Pradesh",
      "place": "Bohotiya Baba Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1222,
      "city": "Kavali",
      "state": "Andhra Pradesh",
      "place": "Ranganayaka Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1223,
      "city": "Kavali",
      "state": "Andhra Pradesh",
      "place": "Koduru Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1224,
      "city": "Kavali",
      "state": "Andhra Pradesh",
      "place": "Mopidevi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1225,
      "city": "Kavali",
      "state": "Andhra Pradesh",
      "place": "Sarva Siddhi Anjaneya Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1226,
      "city": "Kavaratti",
      "state": "Lakshadweep",
      "place": "Kavaratti Island",
      "popularity": "Medium",
      "description": "Main island, administrative center.",
      "type": "Adventure",
      "budget": 1500
    },
    {
      "Index": 1227,
      "city": "Kavaratti",
      "state": "Lakshadweep",
      "place": "Kavaratti Lagoon",
      "popularity": "Medium",
      "description": "Calm lagoon, water sports.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1228,
      "city": "Kavaratti",
      "state": "Lakshadweep",
      "place": "Kavaratti Aquarium",
      "popularity": "Low",
      "description": "Aquarium, marine life exhibits.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 1229,
      "city": "Kavaratti",
      "state": "Lakshadweep",
      "place": "Mohiyudeen Mosque",
      "popularity": "Medium",
      "description": "Historical mosque, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1230,
      "city": "Kavaratti",
      "state": "Lakshadweep",
      "place": "Kavaratti Beach",
      "popularity": "Medium",
      "description": "Pristine beach, sunbathing, swimming.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1231,
      "city": "Khammam",
      "state": "Telangana",
      "place": "Khammam Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1232,
      "city": "Khammam",
      "state": "Telangana",
      "place": "Kinnerasani Dam",
      "popularity": "Medium",
      "description": "Dam, scenic surroundings.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1233,
      "city": "Khammam",
      "state": "Telangana",
      "place": "Bhadrachalam Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1234,
      "city": "Khammam",
      "state": "Telangana",
      "place": "Lakaram Lake",
      "popularity": "Medium",
      "description": "Picnic spot, boating, and leisure.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1235,
      "city": "Khammam",
      "state": "Telangana",
      "place": "Manuguru Singareni Collieries",
      "popularity": "High",
      "description": "Mining site, industrial heritage.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1236,
      "city": "Khammam",
      "state": "Telangana",
      "place": "Perantalapalli",
      "popularity": "High",
      "description": "Historical site, archaeological ruins.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1237,
      "city": "Khammam",
      "state": "Telangana",
      "place": "Bonakal Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1238,
      "city": "Khammam",
      "state": "Telangana",
      "place": "Kusumanchi Temples",
      "popularity": "Medium",
      "description": "Hindu temples, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1239,
      "city": "Khandwa",
      "state": "Madhya Pradesh",
      "place": "Kaaleshwar Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1240,
      "city": "Khandwa",
      "state": "Madhya Pradesh",
      "place": "Khedi Ghat",
      "popularity": "Medium",
      "description": "Ghat, scenic surroundings.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1241,
      "city": "Khanna",
      "state": "Punjab",
      "place": "Gurdwara Manji Sahib",
      "popularity": "Medium",
      "description": "Sikh gurdwara, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1242,
      "city": "Khanna",
      "state": "Punjab",
      "place": "Shree Shree Guga Jahar Peer Ji",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1243,
      "city": "Khanna",
      "state": "Punjab",
      "place": "Machhiwara",
      "popularity": "Medium",
      "description": "Town, urban area.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1244,
      "city": "Kharagpur",
      "state": "West Bengal",
      "place": "Kharagpur Railway Museum",
      "popularity": "Medium",
      "description": "Museum, showcasing railway history.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1245,
      "city": "Kharagpur",
      "state": "West Bengal",
      "place": "Nehru Museum of Science and Technology",
      "popularity": "Medium",
      "description": "Museum, science exhibitions.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1246,
      "city": "Kharagpur",
      "state": "West Bengal",
      "place": "IIT Kharagpur",
      "popularity": "Medium",
      "description": "Technical institute, educational campus.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1247,
      "city": "Kharagpur",
      "state": "West Bengal",
      "place": "Kharagpur Lake",
      "popularity": "Medium",
      "description": "Lake, boating, picnic spot.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1248,
      "city": "Kharagpur",
      "state": "West Bengal",
      "place": "Kharida Shiv Temple",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual sanctuary.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1249,
      "city": "Kharagpur",
      "state": "West Bengal",
      "place": "Bidhan Chandra Krishi Viswavidyalaya",
      "popularity": "High",
      "description": "Agricultural university, educational institution.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1250,
      "city": "Khowai",
      "state": "Tripura",
      "place": "Khowai River",
      "popularity": "High",
      "description": "River, scenic beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1251,
      "city": "Khurja",
      "state": "Uttar Pradesh",
      "place": "Shree Digamber Jain Mandir",
      "popularity": "Medium",
      "description": "Jain temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1252,
      "city": "Khurja",
      "state": "Uttar Pradesh",
      "place": "Jamui Hanuman Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1253,
      "city": "Kiphire",
      "state": "Nagaland",
      "place": "Saramati Peak",
      "popularity": "High",
      "description": "Peak, trekking, and panoramic views.",
      "type": "Adventure",
      "budget": 1500
    },
    {
      "Index": 1254,
      "city": "Kiphire",
      "state": "Nagaland",
      "place": "Wawade Waterfall",
      "popularity": "High",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1255,
      "city": "Kiphire",
      "state": "Nagaland",
      "place": "Sitsang Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, biodiversity hotspot.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1256,
      "city": "Kiphire",
      "state": "Nagaland",
      "place": "Thuvopisumi Village",
      "popularity": "High",
      "description": "Naga village, cultural immersion.",
      "type": "Village",
      "budget": 1500
    },
    {
      "Index": 1257,
      "city": "Kiphire",
      "state": "Nagaland",
      "place": "Mt. Pauna",
      "popularity": "High",
      "description": "Mountain, trekking, and adventure.",
      "type": "Adventure",
      "budget": 2000
    },
    {
      "Index": 1258,
      "city": "Kirari Suleman Nagar",
      "state": "Delhi",
      "place": "Kirari Suleman Nagar Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1259,
      "city": "Kirari Suleman Nagar",
      "state": "Delhi",
      "place": "Bhairon Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1260,
      "city": "Kirari Suleman Nagar",
      "state": "Delhi",
      "place": "Santoshi Mata Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, dedicated to Santoshi Mata.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1261,
      "city": "Kishanganj",
      "state": "Bihar",
      "place": "Kishanganj Masjid",
      "popularity": "Medium",
      "description": "Islamic mosque, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1262,
      "city": "Kishanganj",
      "state": "Bihar",
      "place": "Baluaha Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1263,
      "city": "Kishanganj",
      "state": "Bihar",
      "place": "Durga Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1264,
      "city": "Kishangarh",
      "state": "Rajasthan",
      "place": "Kishangarh Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1265,
      "city": "Kishangarh",
      "state": "Rajasthan",
      "place": "Madhav Sagar Lake",
      "popularity": "Medium",
      "description": "Lake, boating.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1266,
      "city": "Kishangarh",
      "state": "Rajasthan",
      "place": "Roopangarh Fort",
      "popularity": "Medium",
      "description": "Historical fort, ruins.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1267,
      "city": "Kishtwar",
      "state": "Jammu and Kashmir",
      "place": "Chenab River",
      "popularity": "Medium",
      "description": "River, rafting, fishing.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1268,
      "city": "Kishtwar",
      "state": "Jammu and Kashmir",
      "place": "Machail Mata Temple",
      "popularity": "High",
      "description": "Hindu temple, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1269,
      "city": "Kochi",
      "state": "Kerala",
      "place": "Fort Kochi",
      "popularity": "High",
      "description": "Historical neighborhood, colonial architecture.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1270,
      "city": "Kochi",
      "state": "Kerala",
      "place": "Chinese Fishing Nets",
      "popularity": "Medium",
      "description": "Traditional fishing method, iconic landmark.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1271,
      "city": "Kochi",
      "state": "Kerala",
      "place": "Mattancherry Palace",
      "popularity": "Medium",
      "description": "Historical palace, murals and artifacts.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1272,
      "city": "Kochi",
      "state": "Kerala",
      "place": "Marine Drive",
      "popularity": "Low",
      "description": "Promenade, scenic views of the backwaters.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1273,
      "city": "Kochi",
      "state": "Kerala",
      "place": "Jawaharlal Nehru Stadium",
      "popularity": "Low",
      "description": "Multi-purpose stadium, sports events.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 1274,
      "city": "Kochi",
      "state": "Kerala",
      "place": "Thrikkakara Temple",
      "popularity": "Low",
      "description": "Ancient Hindu temple, festival celebrations.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1275,
      "city": "Kochi",
      "state": "Kerala",
      "place": "Wonderla Amusement Park",
      "popularity": "High",
      "description": "Thrilling rides, water park, entertainment.",
      "type": "Entertainment",
      "budget": 2000
    },
    {
      "Index": 1276,
      "city": "Kochi",
      "state": "Kerala",
      "place": "Bolgatty Palace and Island Resort",
      "popularity": "Medium",
      "description": "Historical palace, accommodation, backwaters.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1277,
      "city": "Kodad",
      "state": "Telangana",
      "place": "Chenchus Nature Camp",
      "popularity": "Medium",
      "description": "Eco-tourism camp, nature trails.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1278,
      "city": "Kohima",
      "state": "Nagaland",
      "place": "Kohima War Cemetery",
      "popularity": "High",
      "description": "War cemetery, historical significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1279,
      "city": "Kohima",
      "state": "Nagaland",
      "place": "Kisama Heritage Village",
      "popularity": "High",
      "description": "Cultural village, showcasing Naga heritage.",
      "type": "Village",
      "budget": 1000
    },
    {
      "Index": 1280,
      "city": "Kohima",
      "state": "Nagaland",
      "place": "Dzukou Valley",
      "popularity": "High",
      "description": "Valley, trekking, and camping.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1281,
      "city": "Kohima",
      "state": "Nagaland",
      "place": "Kohima Museum",
      "popularity": "Medium",
      "description": "Museum, artifacts on Naga history and culture.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 1282,
      "city": "Kohima",
      "state": "Nagaland",
      "place": "Naga Bazaar",
      "popularity": "Medium",
      "description": "Local market, traditional Naga products.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1283,
      "city": "Kolar",
      "state": "Karnataka",
      "place": "Antharagange",
      "popularity": "Medium",
      "description": "Hill station, cave exploration.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1284,
      "city": "Kolar",
      "state": "Karnataka",
      "place": "Someshwara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1285,
      "city": "Kolar",
      "state": "Karnataka",
      "place": "Kolaramma Temple",
      "popularity": "Medium",
      "description": "Hindu temple, cultural significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1286,
      "city": "Kolar",
      "state": "Karnataka",
      "place": "Anthargange",
      "popularity": "Medium",
      "description": "Hill station, cave exploration.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1287,
      "city": "Kolar",
      "state": "Karnataka",
      "place": "Sri Someshwara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1288,
      "city": "Kolasib",
      "state": "Mizoram",
      "place": "Kolasib Presbyterian Church",
      "popularity": "High",
      "description": "Church, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1289,
      "city": "Kolasib",
      "state": "Mizoram",
      "place": "Kolasib Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, biodiversity hotspot.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1290,
      "city": "Kolasib",
      "state": "Mizoram",
      "place": "Ngengpui Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1291,
      "city": "Kolhapur",
      "state": "Maharashtra",
      "place": "Mahalaxmi Temple, Kolhapur",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1292,
      "city": "Kolhapur",
      "state": "Maharashtra",
      "place": "Panhala Fort, Kolhapur",
      "popularity": "High",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1293,
      "city": "Kolhapur",
      "state": "Maharashtra",
      "place": "Rankala Lake, Kolhapur",
      "popularity": "Medium",
      "description": "Lake, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1294,
      "city": "Kolhapur",
      "state": "Maharashtra",
      "place": "Jyotiba Temple, Kolhapur",
      "popularity": "Medium",
      "description": "Hindu temple, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1295,
      "city": "Kolhapur",
      "state": "Maharashtra",
      "place": "Khasbag Maidan, Kolhapur",
      "popularity": "Medium",
      "description": "Public garden, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1296,
      "city": "Kolhapur",
      "state": "Maharashtra",
      "place": "Narsobawadi, Kolhapur",
      "popularity": "Medium",
      "description": "Hindu pilgrimage site.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1297,
      "city": "Kolhapur",
      "state": "Maharashtra",
      "place": "Binkhambi Ganesh Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1298,
      "city": "Kolkata",
      "state": "West Bengal",
      "place": "Dakshineswar Temple",
      "popularity": "Medium",
      "description": "Peaceful surroundings, spiritual significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1299,
      "city": "Kolkata",
      "state": "West Bengal",
      "place": "Indian Museum, Kolkata",
      "popularity": "High",
      "description": "Oldest and largest museum in India.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 1300,
      "city": "Kolkata",
      "state": "West Bengal",
      "place": "Eden Gardens",
      "popularity": "High",
      "description": "Cricket stadium, sports events.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 1301,
      "city": "Kolkata",
      "state": "West Bengal",
      "place": "St. Paul's Cathedral",
      "popularity": "High",
      "description": "Anglican cathedral, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1302,
      "city": "Kolkata",
      "state": "West Bengal",
      "place": "Birla Planetarium",
      "popularity": "Medium",
      "description": "Planetarium, astronomy shows.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1303,
      "city": "Kolkata",
      "state": "West Bengal",
      "place": "Mother House, Kolkata",
      "popularity": "Medium",
      "description": "Mother Teresa's former home, museum.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1304,
      "city": "Kollam",
      "state": "Kerala",
      "place": "Ashtamudi Lake",
      "popularity": "Medium",
      "description": "Backwater lake, houseboat cruises.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1305,
      "city": "Kollam",
      "state": "Kerala",
      "place": "Thangassery Light House",
      "popularity": "Medium",
      "description": "Historical lighthouse, coastal views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1306,
      "city": "Kollam",
      "state": "Kerala",
      "place": "Raviz Resort and Spa",
      "popularity": "Medium",
      "description": "Luxury resort, wellness facilities.",
      "type": "Hospitality",
      "budget": 1000
    },
    {
      "Index": 1307,
      "city": "Kollam",
      "state": "Kerala",
      "place": "Thangassery Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1308,
      "city": "Kollam",
      "state": "Kerala",
      "place": "Palaruvi Waterfall",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1309,
      "city": "Kollam",
      "state": "Kerala",
      "place": "Thirumullavaram Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1310,
      "city": "Kollam",
      "state": "Kerala",
      "place": "Kollam Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1311,
      "city": "Kollam",
      "state": "Kerala",
      "place": "Kottarakkara Ganapathy Temple",
      "popularity": "Low",
      "description": "Hindu temple, cultural significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1312,
      "city": "Kollam",
      "state": "Kerala",
      "place": "Munroe Island",
      "popularity": "Medium",
      "description": "Scenic island, backwater cruises, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1313,
      "city": "Kollam",
      "state": "Kerala",
      "place": "Amritha Fort",
      "popularity": "Low",
      "description": "Historical fort ruins, archaeological site.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1314,
      "city": "Kollam",
      "state": "Kerala",
      "place": "Thankasseri Lighthouse",
      "popularity": "Low",
      "description": "Historical lighthouse, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1315,
      "city": "Korba",
      "state": "Chhattisgarh",
      "place": "Kanan Pindari Reserve Forest",
      "popularity": "High",
      "description": "Forest reserve, wildlife safari.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1316,
      "city": "Korba",
      "state": "Chhattisgarh",
      "place": "Amrit Dhara Waterfall",
      "popularity": "High",
      "description": "Scenic waterfall, picnic spot.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1317,
      "city": "Korba",
      "state": "Chhattisgarh",
      "place": "Radhakrishna Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1318,
      "city": "Kota",
      "state": "Rajasthan",
      "place": "City Palace, Karauli",
      "popularity": "High",
      "description": "Historical palace, Rajput architecture.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1319,
      "city": "Kota",
      "state": "Rajasthan",
      "place": "Garadia Mahadev Temple",
      "popularity": "Medium",
      "description": "Scenic temple, panoramic views.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1320,
      "city": "Kota",
      "state": "Rajasthan",
      "place": "Chambal Garden",
      "popularity": "Medium",
      "description": "Riverside garden, boat rides available.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1321,
      "city": "Kothagudem",
      "state": "Telangana",
      "place": "Bhairavakona Cave",
      "popularity": "Medium",
      "description": "Cave temple, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1322,
      "city": "Kothagudem",
      "state": "Telangana",
      "place": "Kothagudem Thermal Power Station",
      "popularity": "Medium",
      "description": "Power plant, industrial visit.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1323,
      "city": "Kottagudem",
      "state": "Telangana",
      "place": "Lord Venkateswara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1324,
      "city": "Kottagudem",
      "state": "Telangana",
      "place": "Devastanam Harithavanam",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1325,
      "city": "Kottayam",
      "state": "Kerala",
      "place": "St. Mary's Knanaya Church",
      "popularity": "Medium",
      "description": "Christian church, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1326,
      "city": "Kottayam",
      "state": "Kerala",
      "place": "Vaikom Mahadeva Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1327,
      "city": "Kottayam",
      "state": "Kerala",
      "place": "Thazhathangady Juma Masjid",
      "popularity": "Medium",
      "description": "Islamic mosque, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1328,
      "city": "Kottayam",
      "state": "Kerala",
      "place": "Ettumanoor Mahadeva Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1329,
      "city": "Kottayam",
      "state": "Kerala",
      "place": "Kumarakom Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1330,
      "city": "Kottayam",
      "state": "Kerala",
      "place": "Thirunakkara Mahadeva Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1331,
      "city": "Kottayam",
      "state": "Kerala",
      "place": "Kottayam Cheriyapally",
      "popularity": "Medium",
      "description": "Church, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1332,
      "city": "Kovvur",
      "state": "Andhra Pradesh",
      "place": "Godavari Bridge",
      "popularity": "Medium",
      "description": "Bridge, scenic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1333,
      "city": "Kovvur",
      "state": "Andhra Pradesh",
      "place": "Mancharamma Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1334,
      "city": "Kovvur",
      "state": "Andhra Pradesh",
      "place": "Padmavathi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1335,
      "city": "Kovvur",
      "state": "Andhra Pradesh",
      "place": "Godavari Arch Bridge",
      "popularity": "Medium",
      "description": "Arch bridge, scenic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1336,
      "city": "Kovvur",
      "state": "Andhra Pradesh",
      "place": "Sri Veerabhadra Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1337,
      "city": "Kovvur",
      "state": "Andhra Pradesh",
      "place": "Perupalem Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1338,
      "city": "Kozhikode",
      "state": "Kerala",
      "place": "Kozhikode Beach",
      "popularity": "Medium",
      "description": "Popular beach, sunset views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1339,
      "city": "Kozhikode",
      "state": "Kerala",
      "place": "Sarovaram Bio Park",
      "popularity": "Medium",
      "description": "Botanical garden, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1340,
      "city": "Kozhikode",
      "state": "Kerala",
      "place": "Mishkal Mosque",
      "popularity": "Medium",
      "description": "Historical mosque, architectural significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1341,
      "city": "Kozhikode",
      "state": "Kerala",
      "place": "Sarovaram Biopark",
      "popularity": "Medium",
      "description": "Biodiversity park, eco-tourism, boating.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1342,
      "city": "Kozhikode",
      "state": "Kerala",
      "place": "Silver Storm Water Theme Park",
      "popularity": "High",
      "description": "Water park, family entertainment.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 1343,
      "city": "Kozhikode",
      "state": "Kerala",
      "place": "Tali Shiva Temple",
      "popularity": "Medium",
      "description": "Ancient Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1344,
      "city": "Kozhikode",
      "state": "Kerala",
      "place": "Kakkayam Dam",
      "popularity": "Medium",
      "description": "Scenic dam, trekking trails, picnic spot.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1345,
      "city": "Kullu",
      "state": "Himachal Pradesh",
      "place": "Great Himalayan National Park",
      "popularity": "High",
      "description": "National park, biodiversity hotspot.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1346,
      "city": "Kullu",
      "state": "Himachal Pradesh",
      "place": "Bijli Mahadev Temple",
      "popularity": "Medium",
      "description": "Hindu temple, panoramic views.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1347,
      "city": "Kultali",
      "state": "West Bengal",
      "place": "Sajnekhali Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1348,
      "city": "Kultali",
      "state": "West Bengal",
      "place": "Kultali Satish Samanta Smriti Vidyapith",
      "popularity": "Medium",
      "description": "School, educational institution.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1349,
      "city": "Kultali",
      "state": "West Bengal",
      "place": "Sagar Island",
      "popularity": "Medium",
      "description": "Island, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1350,
      "city": "Kumbakonam",
      "state": "Tamil Nadu",
      "place": "Sarangapani Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1351,
      "city": "Kumbakonam",
      "state": "Tamil Nadu",
      "place": "Navagraha Temples",
      "popularity": "High",
      "description": "Hindu temple complex, dedicated to the planets.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1352,
      "city": "Kumbakonam",
      "state": "Tamil Nadu",
      "place": "Airavatesvara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1353,
      "city": "Kumbakonam",
      "state": "Tamil Nadu",
      "place": "Kumbeswarar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1354,
      "city": "Kumbakonam",
      "state": "Tamil Nadu",
      "place": "Adi Kumbeswarar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1355,
      "city": "Kurnool",
      "state": "Andhra Pradesh",
      "place": "Yaganti Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural marvel.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1356,
      "city": "Lamayuru",
      "state": "Ladakh",
      "place": "Lamayuru Monastery",
      "popularity": "Medium",
      "description": "Buddhist monastery, spiritual retreat.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1357,
      "city": "Lamayuru",
      "state": "Ladakh",
      "place": "Moonland",
      "popularity": "Medium",
      "description": "Landscape, geological wonder.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1358,
      "city": "Latur",
      "state": "Maharashtra",
      "place": "Ganesh Temple, Latur",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1359,
      "city": "Latur",
      "state": "Maharashtra",
      "place": "Udgir Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1360,
      "city": "Latur",
      "state": "Maharashtra",
      "place": "Ashtavinayak Temple, Latur",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1361,
      "city": "Latur",
      "state": "Maharashtra",
      "place": "Latur Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1362,
      "city": "Latur",
      "state": "Maharashtra",
      "place": "Ausa Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1363,
      "city": "Latur",
      "state": "Maharashtra",
      "place": "Kharosa Caves",
      "popularity": "Medium",
      "description": "Historical caves, archaeological site.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1364,
      "city": "Latur",
      "state": "Maharashtra",
      "place": "Siddheshwar Lake",
      "popularity": "Medium",
      "description": "Scenic lake, boating.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1365,
      "city": "Latur",
      "state": "Maharashtra",
      "place": "Ganj Golai",
      "popularity": "Medium",
      "description": "Historical market square, shopping.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 1366,
      "city": "Lawngtlai",
      "state": "Mizoram",
      "place": "Lawngtlai Christ Church",
      "popularity": "Medium",
      "description": "Church, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1367,
      "city": "Lawngtlai",
      "state": "Mizoram",
      "place": "Lawngtlai Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1368,
      "city": "Lawngtlai",
      "state": "Mizoram",
      "place": "Tlabung Village",
      "popularity": "Medium",
      "description": "Mizo village, cultural immersion.",
      "type": "Village",
      "budget": 2000
    },
    {
      "Index": 1369,
      "city": "Leh",
      "state": "Jammu and Kashmir",
      "place": "Pangong Lake",
      "popularity": "High",
      "description": "Lake, scenic beauty, movie shooting location.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1370,
      "city": "Leh",
      "state": "Jammu and Kashmir",
      "place": "Nubra Valley",
      "popularity": "Medium",
      "description": "Valley, sand dunes, camel safaris.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1371,
      "city": "Likir",
      "state": "Ladakh",
      "place": "Likir Monastery",
      "popularity": "Medium",
      "description": "Buddhist monastery, panoramic views.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1372,
      "city": "Likir",
      "state": "Ladakh",
      "place": "Likir Gompa",
      "popularity": "Medium",
      "description": "Buddhist monastery, cultural heritage.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1373,
      "city": "Likir",
      "state": "Ladakh",
      "place": "Basgo Monastery",
      "popularity": "Medium",
      "description": "Buddhist monastery, historical significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1374,
      "city": "Lonavala",
      "state": "Maharashtra",
      "place": "Bhaja Caves",
      "popularity": "Medium",
      "description": "Buddhist caves, historical site.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1375,
      "city": "Lonavala",
      "state": "Maharashtra",
      "place": "Karla Caves",
      "popularity": "Medium",
      "description": "Buddhist caves, rock-cut architecture.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1376,
      "city": "Lonavala",
      "state": "Maharashtra",
      "place": "Tiger's Leap, Lonavala",
      "popularity": "Medium",
      "description": "Viewpoint, scenic valley views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1377,
      "city": "Longleng",
      "state": "Nagaland",
      "place": "Phom Monastery",
      "popularity": "High",
      "description": "Buddhist monastery, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1378,
      "city": "Longleng",
      "state": "Nagaland",
      "place": "Milang Mon",
      "popularity": "High",
      "description": "Naga village, cultural experiences.",
      "type": "Village",
      "budget": 1000
    },
    {
      "Index": 1379,
      "city": "Longleng",
      "state": "Nagaland",
      "place": "Linlang",
      "popularity": "High",
      "description": "Naga village, traditional festivals.",
      "type": "Village",
      "budget": 1500
    },
    {
      "Index": 1380,
      "city": "Longleng",
      "state": "Nagaland",
      "place": "Loklang",
      "popularity": "High",
      "description": "Naga village, cultural heritage.",
      "type": "Village",
      "budget": 2000
    },
    {
      "Index": 1381,
      "city": "Longleng",
      "state": "Nagaland",
      "place": "Chenkai",
      "popularity": "High",
      "description": "Naga village, natural beauty.",
      "type": "Village",
      "budget": 1000
    },
    {
      "Index": 1382,
      "city": "Loni",
      "state": "Uttar Pradesh",
      "place": "Rajiv Gandhi Bio Diversity Park",
      "popularity": "Medium",
      "description": "Botanical garden, biodiversity conservation.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1383,
      "city": "Lucknow",
      "state": "Uttar Pradesh",
      "place": "Bara Imambara",
      "popularity": "High",
      "description": "Architectural marvel, labyrinthine design.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1384,
      "city": "Lucknow",
      "state": "Uttar Pradesh",
      "place": "Chota Imambara",
      "popularity": "Medium",
      "description": "Intricate decorations, historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1385,
      "city": "Lucknow",
      "state": "Uttar Pradesh",
      "place": "Rumi Darwaza",
      "popularity": "Medium",
      "description": "Iconic gateway, fine architectural details.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1386,
      "city": "Lucknow",
      "state": "Uttar Pradesh",
      "place": "Ambedkar Park",
      "popularity": "Low",
      "description": "Landscaped gardens, memorial statues.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1387,
      "city": "Ludhiana",
      "state": "Punjab",
      "place": "Lodhi Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1388,
      "city": "Ludhiana",
      "state": "Punjab",
      "place": "Rural Olympics",
      "popularity": "Low",
      "description": "Sporting event, traditional Punjabi games.",
      "type": "Entertainment",
      "budget": 1500
    },
    {
      "Index": 1389,
      "city": "Ludhiana",
      "state": "Punjab",
      "place": "Tiger Safari",
      "popularity": "Medium",
      "description": "Safari park, tiger and lion enclosures.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1390,
      "city": "Ludhiana",
      "state": "Punjab",
      "place": "Nehru Rose Garden",
      "popularity": "Medium",
      "description": "Rose garden, floral exhibitions.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1391,
      "city": "Ludhiana",
      "state": "Punjab",
      "place": "Punjab Agricultural University",
      "popularity": "Medium",
      "description": "University campus, agricultural research.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1392,
      "city": "Ludhiana",
      "state": "Punjab",
      "place": "Payal Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1393,
      "city": "Lunglei",
      "state": "Mizoram",
      "place": "Thorangtlang Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1394,
      "city": "Lunglei",
      "state": "Mizoram",
      "place": "Kawmzawl Park",
      "popularity": "Medium",
      "description": "Public park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1395,
      "city": "Lunglei",
      "state": "Mizoram",
      "place": "Nghasih Stream",
      "popularity": "Medium",
      "description": "Scenic stream, picnic spot.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1396,
      "city": "Machilipatnam",
      "state": "Andhra Pradesh",
      "place": "Manginapudi Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1397,
      "city": "Machilipatnam",
      "state": "Andhra Pradesh",
      "place": "Machilipatnam Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1398,
      "city": "Machilipatnam",
      "state": "Andhra Pradesh",
      "place": "Panduranga Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1399,
      "city": "Madakasira",
      "state": "Andhra Pradesh",
      "place": "Madakasira Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1400,
      "city": "Madakasira",
      "state": "Andhra Pradesh",
      "place": "Madakasira Railway Station",
      "popularity": "Medium",
      "description": "Railway station, transportation hub.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1401,
      "city": "Madanapalle",
      "state": "Andhra Pradesh",
      "place": "Puligundu Lake",
      "popularity": "Medium",
      "description": "Lake, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1402,
      "city": "Madgaon",
      "state": "Goa",
      "place": "Colva Beach",
      "popularity": "Medium",
      "description": "Popular beach, water sports.",
      "type": "Beach",
      "budget": 1000
    },
    {
      "Index": 1403,
      "city": "Madgaon",
      "state": "Goa",
      "place": "Benaulim Beach",
      "popularity": "Medium",
      "description": "Secluded beach, serene atmosphere.",
      "type": "Beach",
      "budget": 1500
    },
    {
      "Index": 1404,
      "city": "Madgaon",
      "state": "Goa",
      "place": "Basilica of Our Lady of the Mount",
      "popularity": "Medium",
      "description": "Old church, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1405,
      "city": "Madgaon",
      "state": "Goa",
      "place": "Betul Beach",
      "popularity": "Medium",
      "description": "Scenic beach, fishing village.",
      "type": "Beach",
      "budget": 1000
    },
    {
      "Index": 1406,
      "city": "Madhira",
      "state": "Telangana",
      "place": "Palair Reservoir",
      "popularity": "Medium",
      "description": "Reservoir, scenic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1407,
      "city": "Madhira",
      "state": "Telangana",
      "place": "Panchalingala Ramalingeshwara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1408,
      "city": "Madhubani",
      "state": "Bihar",
      "place": "Madhubani Art Gallery",
      "popularity": "Medium",
      "description": "Art gallery, showcasing Madhubani paintings.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1409,
      "city": "Madhupur",
      "state": "Jharkhand",
      "place": "Tatlo Pani Falls",
      "popularity": "Medium",
      "description": "Scenic waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1410,
      "city": "Madhupur",
      "state": "Jharkhand",
      "place": "Madhupur Dham",
      "popularity": "Medium",
      "description": "Hindu temple, pilgrimage site.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1411,
      "city": "Madhupur",
      "state": "Jharkhand",
      "place": "Maharaja Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1412,
      "city": "Madhyamgram",
      "state": "West Bengal",
      "place": "Adyapith Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1413,
      "city": "Madhyamgram",
      "state": "West Bengal",
      "place": "Madhyamgram Chowmatha",
      "popularity": "Medium",
      "description": "Town square, urban area.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 1414,
      "city": "Madhyamgram",
      "state": "West Bengal",
      "place": "Aranyak Resort",
      "popularity": "Medium",
      "description": "Resort, nature retreat.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1415,
      "city": "Madurai",
      "state": "Tamil Nadu",
      "place": "Meenakshi Amman Temple",
      "popularity": "High",
      "description": "Iconic temple, Dravidian architecture.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1416,
      "city": "Madurai",
      "state": "Tamil Nadu",
      "place": "Thirumalai Nayakkar Mahal",
      "popularity": "Medium",
      "description": "Historical palace, architectural marvel.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1417,
      "city": "Madurai",
      "state": "Tamil Nadu",
      "place": "Gandhi Memorial Museum",
      "popularity": "Medium",
      "description": "Museum showcasing Gandhi's life and teachings.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1418,
      "city": "Madurai",
      "state": "Tamil Nadu",
      "place": "Thirumalai Nayakkar Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1419,
      "city": "Madurai",
      "state": "Tamil Nadu",
      "place": "Vaigai River",
      "popularity": "Medium",
      "description": "Scenic river, boat rides, picnic spot.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1420,
      "city": "Madurai",
      "state": "Tamil Nadu",
      "place": "Koodal Azhagar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1421,
      "city": "Mahabaleshwar",
      "state": "Maharashtra",
      "place": "Pratapgarh Fort",
      "popularity": "High",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1422,
      "city": "Mahabaleshwar",
      "state": "Maharashtra",
      "place": "Venna Lake",
      "popularity": "Medium",
      "description": "Scenic lake, boating facilities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1423,
      "city": "Mahabaleshwar",
      "state": "Maharashtra",
      "place": "Mapro Garden",
      "popularity": "Medium",
      "description": "Garden, strawberry farm.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1424,
      "city": "Maharajganj",
      "state": "Uttar Pradesh",
      "place": "Indira Bal Vihar",
      "popularity": "Medium",
      "description": "Children's park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1425,
      "city": "Maharajganj",
      "state": "Uttar Pradesh",
      "place": "Baba Chaturvedi Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1426,
      "city": "Maharajganj",
      "state": "Uttar Pradesh",
      "place": "Mau Chakwa Sun Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1427,
      "city": "Mahbubnagar",
      "state": "Telangana",
      "place": "Pillalamarri",
      "popularity": "Medium",
      "description": "Banyan tree, picnic spot.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1428,
      "city": "Mahbubnagar",
      "state": "Telangana",
      "place": "Jogulamba Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1429,
      "city": "Mahbubnagar",
      "state": "Telangana",
      "place": "Mallela Theertham",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1430,
      "city": "Mahbubnagar",
      "state": "Telangana",
      "place": "Koilsagar Dam",
      "popularity": "High",
      "description": "Water reservoir, scenic beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1431,
      "city": "Mahbubnagar",
      "state": "Telangana",
      "place": "Gadwal Fort",
      "popularity": "High",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1432,
      "city": "Mahbubnagar",
      "state": "Telangana",
      "place": "Pillalamari",
      "popularity": "High",
      "description": "Natural rock formations, scenic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1433,
      "city": "Mahbubnagar",
      "state": "Telangana",
      "place": "Alampur Temples",
      "popularity": "High",
      "description": "Historical temple complex, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1434,
      "city": "Mahbubnagar",
      "state": "Telangana",
      "place": "Koilkonda Fort",
      "popularity": "High",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1435,
      "city": "Mahbubnagar",
      "state": "Telangana",
      "place": "Srirangapur Temple",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1436,
      "city": "Mahbubnagar",
      "state": "Telangana",
      "place": "Jurala Dam",
      "popularity": "High",
      "description": "Water reservoir, boating, and fishing.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1437,
      "city": "Mahesana",
      "state": "Gujarat",
      "place": "Thol Lake Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1438,
      "city": "Mahesana",
      "state": "Gujarat",
      "place": "Uttarvahini Ekadashi Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1439,
      "city": "Malappuram",
      "state": "Kerala",
      "place": "Kottakkunnu",
      "popularity": "Medium",
      "description": "Hill station, panoramic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1440,
      "city": "Malappuram",
      "state": "Kerala",
      "place": "Kodikuthimala",
      "popularity": "Medium",
      "description": "Hill station, trekking destination.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1441,
      "city": "Malappuram",
      "state": "Kerala",
      "place": "Kerala Kalamandalam",
      "popularity": "Medium",
      "description": "Art school, cultural education.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1442,
      "city": "Malda",
      "state": "West Bengal",
      "place": "Adina Mosque",
      "popularity": "High",
      "description": "Historical mosque, architectural significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1443,
      "city": "Malda",
      "state": "West Bengal",
      "place": "Jagjivan Ram Park",
      "popularity": "Medium",
      "description": "Public park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1444,
      "city": "Malda",
      "state": "West Bengal",
      "place": "Malda Museum",
      "popularity": "Medium",
      "description": "Museum, historical artifacts.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1445,
      "city": "Malda",
      "state": "West Bengal",
      "place": "Ramkeli",
      "popularity": "Medium",
      "description": "Historical site, pilgrimage destination.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1446,
      "city": "Malegaon",
      "state": "Maharashtra",
      "place": "Chandwad Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1447,
      "city": "Malegaon",
      "state": "Maharashtra",
      "place": "Muktidham Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1448,
      "city": "Malegaon",
      "state": "Maharashtra",
      "place": "Navshya Ganpati Temple, Malegaon",
      "popularity": "Medium",
      "description": "Hindu temple, dedicated to Lord Ganesh.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1449,
      "city": "Malegaon",
      "state": "Maharashtra",
      "place": "Malegaon Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1450,
      "city": "Malegaon",
      "state": "Maharashtra",
      "place": "Ram Mandir, Malegaon",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1451,
      "city": "Mamit",
      "state": "Mizoram",
      "place": "Mamit Park",
      "popularity": "Medium",
      "description": "Public park, leisure activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1452,
      "city": "Mamit",
      "state": "Mizoram",
      "place": "Vantawng Falls",
      "popularity": "High",
      "description": "Spectacular waterfall, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1453,
      "city": "Mamit",
      "state": "Mizoram",
      "place": "Mamit Presbyterian Church",
      "popularity": "High",
      "description": "Church, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1454,
      "city": "Manali",
      "state": "Himachal Pradesh",
      "place": "Rohtang Pass",
      "popularity": "High",
      "description": "Mountain pass, snow activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1455,
      "city": "Manali",
      "state": "Himachal Pradesh",
      "place": "Solang Valley",
      "popularity": "Medium",
      "description": "Valley, adventure sports.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1456,
      "city": "Manali",
      "state": "Himachal Pradesh",
      "place": "Hadimba Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, pagoda-style architecture.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1457,
      "city": "Mandsaur",
      "state": "Madhya Pradesh",
      "place": "Pashupatinath Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1458,
      "city": "Mandsaur",
      "state": "Madhya Pradesh",
      "place": "Gandhi Sagar Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1459,
      "city": "Mandsaur",
      "state": "Madhya Pradesh",
      "place": "Krishna Pura Chhatri",
      "popularity": "Medium",
      "description": "Historical site, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1460,
      "city": "Mandya",
      "state": "Karnataka",
      "place": "Ranganathittu Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1461,
      "city": "Mandya",
      "state": "Karnataka",
      "place": "Arkeshwara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1462,
      "city": "Mandya",
      "state": "Karnataka",
      "place": "Talakadu",
      "popularity": "Medium",
      "description": "Historical site, archaeological significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1463,
      "city": "Mangalore",
      "state": "Karnataka",
      "place": "Tannirbhavi Beach",
      "popularity": "Medium",
      "description": "Scenic beach, sunset views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1464,
      "city": "Mangalore",
      "state": "Karnataka",
      "place": "Kadri Manjunath Temple",
      "popularity": "Medium",
      "description": "Hindu temple, ancient shrine.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1465,
      "city": "Mangalore",
      "state": "Karnataka",
      "place": "Pilikula Nisargadhama",
      "popularity": "Medium",
      "description": "Nature park, botanical garden.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1466,
      "city": "Mangalore",
      "state": "Karnataka",
      "place": "Kudroli Gokarnath Temple",
      "popularity": "Medium",
      "description": "Hindu temple, cultural significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1467,
      "city": "Mangalore",
      "state": "Karnataka",
      "place": "Panambur Beach",
      "popularity": "Medium",
      "description": "Popular beach, water sports.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1468,
      "city": "Mangalore",
      "state": "Karnataka",
      "place": "St. Aloysius Chapel",
      "popularity": "Medium",
      "description": "Church, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1469,
      "city": "Manuguru",
      "state": "Telangana",
      "place": "Sri Bhadrakali Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1470,
      "city": "Manuguru",
      "state": "Telangana",
      "place": "Singareni Colleries Company Limited",
      "popularity": "Medium",
      "description": "Coal mine, industrial visit.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1471,
      "city": "Mapusa",
      "state": "Goa",
      "place": "Mapusa Market",
      "popularity": "Medium",
      "description": "Local market, fresh produce and spices.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1472,
      "city": "Mapusa",
      "state": "Goa",
      "place": "St. Jerome's Church",
      "popularity": "Medium",
      "description": "Old church, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1473,
      "city": "Mapusa",
      "state": "Goa",
      "place": "Arambol Beach",
      "popularity": "Medium",
      "description": "Tranquil beach, hippie culture.",
      "type": "Beach",
      "budget": 2000
    },
    {
      "Index": 1474,
      "city": "Margao",
      "state": "Goa",
      "place": "Mangeshi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1475,
      "city": "Margao",
      "state": "Goa",
      "place": "Our Lady of the Rosary Church",
      "popularity": "Medium",
      "description": "Christian church, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1476,
      "city": "Margao",
      "state": "Goa",
      "place": "Our Lady of the Immaculate Conception Church",
      "popularity": "High",
      "description": "Iconic church, colonial architecture.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1477,
      "city": "Margao",
      "state": "Goa",
      "place": "Ancestral Goa",
      "popularity": "High",
      "description": "Open-air museum, Goan history and culture.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1478,
      "city": "Markapur",
      "state": "Andhra Pradesh",
      "place": "Markapuram",
      "popularity": "Medium",
      "description": "Town, urban area.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1479,
      "city": "Markapur",
      "state": "Andhra Pradesh",
      "place": "Big Mosque",
      "popularity": "Medium",
      "description": "Mosque, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1480,
      "city": "Markapur",
      "state": "Andhra Pradesh",
      "place": "Markapur Cotton Market",
      "popularity": "Medium",
      "description": "Market, shopping.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1481,
      "city": "Markapur",
      "state": "Andhra Pradesh",
      "place": "Malleswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1482,
      "city": "Markapur",
      "state": "Andhra Pradesh",
      "place": "Krishna River Bridge",
      "popularity": "Medium",
      "description": "Bridge, scenic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1483,
      "city": "Markapur",
      "state": "Andhra Pradesh",
      "place": "Marasugupalli",
      "popularity": "Medium",
      "description": "Town, urban area.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1484,
      "city": "Mathura",
      "state": "Uttar Pradesh",
      "place": "Shri Krishna Janmasthan Temple",
      "popularity": "High",
      "description": "Hindu temple, birthplace of Lord Krishna.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1485,
      "city": "Mathura",
      "state": "Uttar Pradesh",
      "place": "Govardhan Hill",
      "popularity": "Medium",
      "description": "Pilgrimage site, sacred hill.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1486,
      "city": "Mathura",
      "state": "Uttar Pradesh",
      "place": "Shri Krishna Janmabhoomi",
      "popularity": "Medium",
      "description": "Hindu temple, birthplace of Lord Krishna.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1487,
      "city": "Mathura",
      "state": "Uttar Pradesh",
      "place": "Shri Banke Bihari Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, dedicated to Lord Krishna.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1488,
      "city": "Mathura",
      "state": "Uttar Pradesh",
      "place": "Krishna Janmabhoomi Temple",
      "popularity": "High",
      "description": "Hindu temple, birthplace of Lord Krishna.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1489,
      "city": "Mathura",
      "state": "Uttar Pradesh",
      "place": "Banke Bihari Temple",
      "popularity": "High",
      "description": "Hindu temple, dedicated to Lord Krishna.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1490,
      "city": "Mathura",
      "state": "Uttar Pradesh",
      "place": "Shri Radha Rani Temple",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1491,
      "city": "Mau",
      "state": "Uttar Pradesh",
      "place": "Chiraiyakot Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1492,
      "city": "Mau",
      "state": "Uttar Pradesh",
      "place": "Bahadur Shah Zafar Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1493,
      "city": "Mau",
      "state": "Uttar Pradesh",
      "place": "Shri Ram Mandir, Mau",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1494,
      "city": "Mau",
      "state": "Uttar Pradesh",
      "place": "Bharat Mata Mandir, Mau",
      "popularity": "Medium",
      "description": "Hindu temple, patriotic significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1495,
      "city": "Mayabunder",
      "state": "Andaman and Nicobar Islands",
      "place": "Karmatang Beach",
      "popularity": "Medium",
      "description": "Uncrowded beach, turtle nesting site.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1496,
      "city": "Mayabunder",
      "state": "Andaman and Nicobar Islands",
      "place": "Avis Island",
      "popularity": "Low",
      "description": "Remote island, birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1497,
      "city": "Mayabunder",
      "state": "Andaman and Nicobar Islands",
      "place": "Mangrove Creek, Mayabunder",
      "popularity": "Low",
      "description": "Mangrove forest, boat tours.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1498,
      "city": "Mayabunder",
      "state": "Andaman and Nicobar Islands",
      "place": "Rampur Beach",
      "popularity": "Low",
      "description": "Secluded beach, relaxation.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1499,
      "city": "Mayabunder",
      "state": "Andaman and Nicobar Islands",
      "place": "St. Stephen's Church, Mayabunder",
      "popularity": "Low",
      "description": "Historical church, colonial-era architecture.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1500,
      "city": "Meerut",
      "state": "Uttar Pradesh",
      "place": "Augarnath Temple, Meerut",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1501,
      "city": "Meerut",
      "state": "Uttar Pradesh",
      "place": "Sardhana Church, Meerut",
      "popularity": "Medium",
      "description": "Historical church, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1502,
      "city": "Meerut",
      "state": "Uttar Pradesh",
      "place": "St. John's Church, Meerut",
      "popularity": "Medium",
      "description": "Oldest church, colonial architecture.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1503,
      "city": "Meerut",
      "state": "Uttar Pradesh",
      "place": "Shahpeer Sahab Shrine",
      "popularity": "Medium",
      "description": "Sufi shrine, spiritual significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1504,
      "city": "Meerut",
      "state": "Uttar Pradesh",
      "place": "Suraj Kund",
      "popularity": "Medium",
      "description": "Historical reservoir, scenic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1505,
      "city": "Mehsana",
      "state": "Gujarat",
      "place": "Rani Ki Vav, Mehsana",
      "popularity": "High",
      "description": "Stepwell, UNESCO World Heritage Site.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1506,
      "city": "Mehsana",
      "state": "Gujarat",
      "place": "Thol Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1507,
      "city": "Mehsana",
      "state": "Gujarat",
      "place": "Modhera Sun Temple",
      "popularity": "High",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1508,
      "city": "Mehsana",
      "state": "Gujarat",
      "place": "Harij Vav",
      "popularity": "High",
      "description": "Stepwell, historical significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1509,
      "city": "Mehsana",
      "state": "Gujarat",
      "place": "Taranga Hill",
      "popularity": "High",
      "description": "Hill station, Jain pilgrimage site.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1510,
      "city": "Minicoy",
      "state": "Lakshadweep",
      "place": "Minicoy Island",
      "popularity": "Medium",
      "description": "Largest island, cultural heritage.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1511,
      "city": "Minicoy",
      "state": "Lakshadweep",
      "place": "Minicoy Lighthouse",
      "popularity": "Medium",
      "description": "Historical lighthouse, panoramic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1512,
      "city": "Minicoy",
      "state": "Lakshadweep",
      "place": "Minicoy Beach",
      "popularity": "Medium",
      "description": "Scenic beach, water sports.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1513,
      "city": "Minicoy",
      "state": "Lakshadweep",
      "place": "Tunjivallah Mosque",
      "popularity": "Medium",
      "description": "Historical mosque, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1514,
      "city": "Minicoy",
      "state": "Lakshadweep",
      "place": "Minicoy Tuna Canning Factory",
      "popularity": "Medium",
      "description": "Tuna processing, industrial site.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1515,
      "city": "Miryalaguda",
      "state": "Telangana",
      "place": "Baruva Beach",
      "popularity": "Medium",
      "description": "Scenic beach, relaxation spot.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1516,
      "city": "Miryalaguda",
      "state": "Telangana",
      "place": "Miryalaguda Hanuman Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1517,
      "city": "Miryalaguda",
      "state": "Telangana",
      "place": "Nagarjuna Sagar Dam",
      "popularity": "Medium",
      "description": "Dam, hydroelectric power generation.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1518,
      "city": "Miryalaguda",
      "state": "Telangana",
      "place": "Laxmi Narasimha Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1519,
      "city": "Miryalaguda",
      "state": "Telangana",
      "place": "Devarakonda Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1520,
      "city": "Miryalaguda",
      "state": "Telangana",
      "place": "Gopinath Reddy Stadium",
      "popularity": "Medium",
      "description": "Cricket stadium, sports events.",
      "type": "Entertainment",
      "budget": 1500
    },
    {
      "Index": 1521,
      "city": "Mirzapur",
      "state": "Uttar Pradesh",
      "place": "Vindhyavasini Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1522,
      "city": "Mirzapur",
      "state": "Uttar Pradesh",
      "place": "Chunar Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1523,
      "city": "Mirzapur",
      "state": "Uttar Pradesh",
      "place": "Ramnagar Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1524,
      "city": "Moga",
      "state": "Punjab",
      "place": "Gurdwara Nanaksar Sahib",
      "popularity": "Medium",
      "description": "Sikh gurdwara, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1525,
      "city": "Moga",
      "state": "Punjab",
      "place": "Senior Secondary School",
      "popularity": "Medium",
      "description": "School, educational institution.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1526,
      "city": "Moga",
      "state": "Punjab",
      "place": "Burj Hari Singh",
      "popularity": "Medium",
      "description": "Historical site, architectural significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1527,
      "city": "Mohali",
      "state": "Punjab",
      "place": "Gurudwara Amb Sahib",
      "popularity": "Medium",
      "description": "Sikh temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1528,
      "city": "Mohali",
      "state": "Punjab",
      "place": "Thunder Zone Amusement Park",
      "popularity": "Medium",
      "description": "Amusement park, water rides.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 1529,
      "city": "Mokokchung",
      "state": "Nagaland",
      "place": "Longkhum",
      "popularity": "High",
      "description": "Naga village, scenic views.",
      "type": "Village",
      "budget": 1500
    },
    {
      "Index": 1530,
      "city": "Mokokchung",
      "state": "Nagaland",
      "place": "Mokokchung Village",
      "popularity": "High",
      "description": "Naga village, cultural immersion.",
      "type": "Village",
      "budget": 2000
    },
    {
      "Index": 1531,
      "city": "Mokokchung",
      "state": "Nagaland",
      "place": "Mokokchung Park",
      "popularity": "Medium",
      "description": "Public park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1532,
      "city": "Mokokchung",
      "state": "Nagaland",
      "place": "Changkikong Range",
      "popularity": "High",
      "description": "Mountain range, trekking, and hiking.",
      "type": "Adventure",
      "budget": 1500
    },
    {
      "Index": 1533,
      "city": "Mokokchung",
      "state": "Nagaland",
      "place": "Chuchuyimlang",
      "popularity": "High",
      "description": "Naga village, traditional festivals.",
      "type": "Village",
      "budget": 2000
    },
    {
      "Index": 1534,
      "city": "Mon",
      "state": "Nagaland",
      "place": "Veda Peak",
      "popularity": "High",
      "description": "Peak, trekking, and panoramic views.",
      "type": "Adventure",
      "budget": 1000
    },
    {
      "Index": 1535,
      "city": "Mon",
      "state": "Nagaland",
      "place": "Chui Village",
      "popularity": "High",
      "description": "Naga village, traditional way of life.",
      "type": "Village",
      "budget": 1500
    },
    {
      "Index": 1536,
      "city": "Mon",
      "state": "Nagaland",
      "place": "Hongphoi Village",
      "popularity": "High",
      "description": "Naga village, cultural immersion.",
      "type": "Village",
      "budget": 2000
    },
    {
      "Index": 1537,
      "city": "Mon",
      "state": "Nagaland",
      "place": "Hidden Valley",
      "popularity": "High",
      "description": "Valley, lush greenery, and biodiversity.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1538,
      "city": "Mon",
      "state": "Nagaland",
      "place": "Lonely Tree",
      "popularity": "High",
      "description": "Scenic viewpoint, panoramic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1539,
      "city": "Moradabad",
      "state": "Uttar Pradesh",
      "place": "Prem Wonderland and Water Kingdom",
      "popularity": "Medium",
      "description": "Amusement park, water slides and rides.",
      "type": "Entertainment",
      "budget": 2000
    },
    {
      "Index": 1540,
      "city": "Moradabad",
      "state": "Uttar Pradesh",
      "place": "Raza Library",
      "popularity": "Medium",
      "description": "Historical library, rare manuscripts.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1541,
      "city": "Moradabad",
      "state": "Uttar Pradesh",
      "place": "Pakbara",
      "popularity": "High",
      "description": "Graveyard, historical significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1542,
      "city": "Moradabad",
      "state": "Uttar Pradesh",
      "place": "Prem Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual retreat.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1543,
      "city": "Moradabad",
      "state": "Uttar Pradesh",
      "place": "Brass Market",
      "popularity": "Medium",
      "description": "Marketplace, brassware shopping.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1544,
      "city": "Morena",
      "state": "Madhya Pradesh",
      "place": "Kakanmath Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1545,
      "city": "Morena",
      "state": "Madhya Pradesh",
      "place": "Mitaoli Jain Temple",
      "popularity": "Medium",
      "description": "Jain temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1546,
      "city": "Morena",
      "state": "Madhya Pradesh",
      "place": "Bateshwar Temples",
      "popularity": "Medium",
      "description": "Hindu temple complex, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1547,
      "city": "Morena",
      "state": "Madhya Pradesh",
      "place": "Mithun Dham",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1548,
      "city": "Morena",
      "state": "Madhya Pradesh",
      "place": "Garhi Padhavali",
      "popularity": "Medium",
      "description": "Historical site, archaeological ruins.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1549,
      "city": "Morena",
      "state": "Madhya Pradesh",
      "place": "Chausath Yogini Temple",
      "popularity": "Medium",
      "description": "Hindu temple, historical significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1550,
      "city": "Morena",
      "state": "Madhya Pradesh",
      "place": "Mahasati, Morena",
      "popularity": "Medium",
      "description": "Historical site, memorial to Sati.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1551,
      "city": "Morena",
      "state": "Madhya Pradesh",
      "place": "Sabalgarh Fort",
      "popularity": "Medium",
      "description": "Historical fort, Mughal architecture.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1552,
      "city": "Mount Abu",
      "state": "Rajasthan",
      "place": "Dilwara Temples",
      "popularity": "High",
      "description": "Jain temples, architectural beauty, pilgrimage.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1553,
      "city": "Mount Abu",
      "state": "Rajasthan",
      "place": "Nakki Lake",
      "popularity": "Medium",
      "description": "Artificial lake, boating, sunset views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1554,
      "city": "Mount Abu",
      "state": "Rajasthan",
      "place": "Guru Shikhar",
      "popularity": "Medium",
      "description": "Hilltop, panoramic views, trekking.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1555,
      "city": "Mumbai",
      "state": "Maharashtra",
      "place": "Gateway of India",
      "popularity": "High",
      "description": "Iconic landmark, bustling atmosphere.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1556,
      "city": "Mumbai",
      "state": "Maharashtra",
      "place": "Elephanta Caves",
      "popularity": "High",
      "description": "Ancient sculptures, interesting history.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1557,
      "city": "Mumbai",
      "state": "Maharashtra",
      "place": "Siddhivinayak Temple",
      "popularity": "Medium",
      "description": "Famous temple, spiritual vibes.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1558,
      "city": "Mumbai",
      "state": "Maharashtra",
      "place": "Chhatrapati Shivaji Maharaj Terminus",
      "popularity": "High",
      "description": "Historical railway station, UNESCO World Heritage Site.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1559,
      "city": "Mumbai",
      "state": "Maharashtra",
      "place": "Juhu Beach",
      "popularity": "Medium",
      "description": "Popular beach, recreational activities.",
      "type": "Beach",
      "budget": 1500
    },
    {
      "Index": 1560,
      "city": "Munger",
      "state": "Bihar",
      "place": "Haveli of Pir Shah Nufa",
      "popularity": "Medium",
      "description": "Islamic mosque, architectural beauty.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1561,
      "city": "Munger",
      "state": "Bihar",
      "place": "Vikramshila University",
      "popularity": "Medium",
      "description": "Archaeological site, ancient university ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1562,
      "city": "Munger",
      "state": "Bihar",
      "place": "Rishikund",
      "popularity": "Medium",
      "description": "Hindu pilgrimage site, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1563,
      "city": "Munger",
      "state": "Bihar",
      "place": "Munger Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1564,
      "city": "Mussoorie",
      "state": "Uttarakhand",
      "place": "Kempty Falls",
      "popularity": "Medium",
      "description": "Waterfall, picnic spot, swimming.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1565,
      "city": "Mussoorie",
      "state": "Uttarakhand",
      "place": "Gun Hill",
      "popularity": "Medium",
      "description": "Hill station, cable car ride, panoramic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1566,
      "city": "Mussoorie",
      "state": "Uttarakhand",
      "place": "Camel's Back Road",
      "popularity": "Medium",
      "description": "Promenade, walking trail, sunset views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1567,
      "city": "Muzaffarpur",
      "state": "Bihar",
      "place": "Ramna Devi Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1568,
      "city": "Muzaffarpur",
      "state": "Bihar",
      "place": "Jubba Sahni Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1569,
      "city": "Muzaffarpur",
      "state": "Bihar",
      "place": "Ramchaura Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, cultural significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1570,
      "city": "Muzaffarpur",
      "state": "Bihar",
      "place": "Kali Mata Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1571,
      "city": "Mysore",
      "state": "Karnataka",
      "place": "Mysore Palace",
      "popularity": "High",
      "description": "Royal palace, grand architecture.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1572,
      "city": "Mysore",
      "state": "Karnataka",
      "place": "Brindavan Gardens",
      "popularity": "High",
      "description": "Lush gardens, musical fountain show.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1573,
      "city": "Mysore",
      "state": "Karnataka",
      "place": "Chamundi Hill Temple",
      "popularity": "Medium",
      "description": "Hindu temple, panoramic views.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1574,
      "city": "Mysore",
      "state": "Karnataka",
      "place": "Chamundi Hill",
      "popularity": "High",
      "description": "Hill, temple dedicated to Goddess Chamundeshwari.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1575,
      "city": "Nadiad",
      "state": "Gujarat",
      "place": "Santram Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1576,
      "city": "Nadiad",
      "state": "Gujarat",
      "place": "Mukta Bai Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1577,
      "city": "Nadiad",
      "state": "Gujarat",
      "place": "Kirti Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1578,
      "city": "Nagaon",
      "state": "Assam",
      "place": "Haflong Lake",
      "popularity": "Medium",
      "description": "Lake, scenic surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1579,
      "city": "Nagaon",
      "state": "Assam",
      "place": "Shree Ram Mandir, Nagaon",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1580,
      "city": "Nagaon",
      "state": "Assam",
      "place": "Sivasagar Tank",
      "popularity": "Medium",
      "description": "Tank, historical significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1581,
      "city": "Nagaon",
      "state": "Assam",
      "place": "Lanka Reserve Forest",
      "popularity": "Medium",
      "description": "Forest reserve, hiking trails.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1582,
      "city": "Nagaon",
      "state": "Assam",
      "place": "Maibang Railway Station",
      "popularity": "Medium",
      "description": "Historical railway station, colonial era.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1583,
      "city": "Nagaon",
      "state": "Assam",
      "place": "Sukapha Samannay Kshetra",
      "popularity": "Medium",
      "description": "Monument, tribute to historical figure.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1584,
      "city": "Nagapattinam",
      "state": "Tamil Nadu",
      "place": "Velankanni Church, Tamil Nadu",
      "popularity": "Medium",
      "description": "Christian church, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1585,
      "city": "Nagapattinam",
      "state": "Tamil Nadu",
      "place": "Sikkal Singaravelar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1586,
      "city": "Nagapattinam",
      "state": "Tamil Nadu",
      "place": "Nagore Dargah",
      "popularity": "Medium",
      "description": "Sufi shrine, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1587,
      "city": "Nagercoil",
      "state": "Tamil Nadu",
      "place": "Kanyakumari",
      "popularity": "Medium",
      "description": "Cape, scenic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1588,
      "city": "Nagercoil",
      "state": "Tamil Nadu",
      "place": "Marthandam",
      "popularity": "Medium",
      "description": "Town, urban area.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1589,
      "city": "Nagercoil",
      "state": "Tamil Nadu",
      "place": "Muttom Beach, Nagercoil",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1590,
      "city": "Nagercoil",
      "state": "Tamil Nadu",
      "place": "Kanyakumari Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1591,
      "city": "Nagercoil",
      "state": "Tamil Nadu",
      "place": "Vivekananda Rock Memorial",
      "popularity": "Medium",
      "description": "Memorial, historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1592,
      "city": "Nagercoil",
      "state": "Tamil Nadu",
      "place": "Udayagiri Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1593,
      "city": "Nagpur",
      "state": "Maharashtra",
      "place": "Deekshabhoomi",
      "popularity": "High",
      "description": "Buddhist monument, significant pilgrimage site.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1594,
      "city": "Nagpur",
      "state": "Maharashtra",
      "place": "Zero Mile Stone",
      "popularity": "Medium",
      "description": "Historical landmark, central point of India.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1595,
      "city": "Nagpur",
      "state": "Maharashtra",
      "place": "Dragon Palace Temple",
      "popularity": "Medium",
      "description": "Beautiful temple, intricate architecture.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1596,
      "city": "Nagpur",
      "state": "Maharashtra",
      "place": "Raman Science Centre",
      "popularity": "Low",
      "description": "Interactive exhibits, educational experience.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1597,
      "city": "Nagpur",
      "state": "Maharashtra",
      "place": "Sitabuldi Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1598,
      "city": "Nagpur",
      "state": "Maharashtra",
      "place": "Raman Science Centre and Planetarium",
      "popularity": "Medium",
      "description": "Science museum, educational exhibits.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1599,
      "city": "Nagpur",
      "state": "Maharashtra",
      "place": "Sevagram",
      "popularity": "Medium",
      "description": "Gandhi ashram, historical site.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1600,
      "city": "Naharlagun",
      "state": "Arunachal Pradesh",
      "place": "Tara Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1601,
      "city": "Naharlagun",
      "state": "Arunachal Pradesh",
      "place": "Parshuram Kund",
      "popularity": "Medium",
      "description": "Hindu pilgrimage site, sacred pond.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1602,
      "city": "Nainital",
      "state": "Uttarakhand",
      "place": "Naini Lake",
      "popularity": "High",
      "description": "Natural lake, boating, scenic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1603,
      "city": "Nainital",
      "state": "Uttarakhand",
      "place": "Naina Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1604,
      "city": "Nainital",
      "state": "Uttarakhand",
      "place": "Snow View Point, Nainital",
      "popularity": "Medium",
      "description": "Viewpoint, panoramic vistas of Himalayas.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1605,
      "city": "Nalanda",
      "state": "Bihar",
      "place": "Nalanda University Ruins",
      "popularity": "High",
      "description": "Ancient university ruins, UNESCO World Heritage Site.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1606,
      "city": "Nalanda",
      "state": "Bihar",
      "place": "Nalanda Archaeological Museum",
      "popularity": "Medium",
      "description": "Museum, artifacts from ancient Nalanda.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1607,
      "city": "Nalanda",
      "state": "Bihar",
      "place": "Hieun Tsang Memorial Hall",
      "popularity": "Medium",
      "description": "Memorial hall, tribute to the Chinese scholar.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 1608,
      "city": "Nalgonda",
      "state": "Telangana",
      "place": "Yadagirigutta Temple",
      "popularity": "High",
      "description": "Hindu temple, pilgrimage site.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1609,
      "city": "Nalgonda",
      "state": "Telangana",
      "place": "Surendrapuri",
      "popularity": "High",
      "description": "Religious theme park, mythological sculptures.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1610,
      "city": "Nalgonda",
      "state": "Telangana",
      "place": "Kolanupaka Jain Temple",
      "popularity": "High",
      "description": "Jain temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1611,
      "city": "Nalgonda",
      "state": "Telangana",
      "place": "Pillala Marri",
      "popularity": "High",
      "description": "Old banyan tree, natural wonder.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1612,
      "city": "Nalgonda",
      "state": "Telangana",
      "place": "Panagal Temple",
      "popularity": "High",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1613,
      "city": "Nalgonda",
      "state": "Telangana",
      "place": "Bhongir Fort",
      "popularity": "High",
      "description": "Historical fort, trekking destination.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1614,
      "city": "Nalgonda",
      "state": "Telangana",
      "place": "Nagarjuna Sagar Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, biodiversity hotspot.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1615,
      "city": "Nalgonda",
      "state": "Telangana",
      "place": "Mattapally Temple",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1616,
      "city": "Namchi",
      "state": "Sikkim",
      "place": "Samdruptse Monastery",
      "popularity": "High",
      "description": "Buddhist monastery, giant statue of Guru Padmasambhava.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1617,
      "city": "Namchi",
      "state": "Sikkim",
      "place": "Char Dham Temple",
      "popularity": "High",
      "description": "Hindu pilgrimage site, replicas of four revered Indian temples.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1618,
      "city": "Namchi",
      "state": "Sikkim",
      "place": "Sai Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual sanctuary.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1619,
      "city": "Namchi",
      "state": "Sikkim",
      "place": "Namchi Mahotsav Park",
      "popularity": "Medium",
      "description": "Public park, cultural events.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 1620,
      "city": "Namchi",
      "state": "Sikkim",
      "place": "Tendong Hill",
      "popularity": "Medium",
      "description": "Hill station, trekking trails.",
      "type": "Adventure",
      "budget": 2000
    },
    {
      "Index": 1621,
      "city": "Namchi",
      "state": "Sikkim",
      "place": "Samdruptse Hill",
      "popularity": "Low",
      "description": "Scenic hill, panoramic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1622,
      "city": "Nanded",
      "state": "Maharashtra",
      "place": "Hazur Sahib Nanded",
      "popularity": "High",
      "description": "Sikh pilgrimage site, historical gurdwara.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1623,
      "city": "Nanded",
      "state": "Maharashtra",
      "place": "Kandhar Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1624,
      "city": "Nanded",
      "state": "Maharashtra",
      "place": "Sita Gufa",
      "popularity": "Medium",
      "description": "Cave temple, Hindu pilgrimage site.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1625,
      "city": "Nandigama",
      "state": "Andhra Pradesh",
      "place": "Popular Theatre",
      "popularity": "Medium",
      "description": "Movie theater, entertainment.",
      "type": "Entertainment",
      "budget": 1500
    },
    {
      "Index": 1626,
      "city": "Nandigama",
      "state": "Andhra Pradesh",
      "place": "Sivalayam",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1627,
      "city": "Nandigama",
      "state": "Andhra Pradesh",
      "place": "Mayuri Eco Park",
      "popularity": "Medium",
      "description": "Eco park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1628,
      "city": "Nandigama",
      "state": "Andhra Pradesh",
      "place": "Sri Durga Malleswara Swamy Varla Devasthanam",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1629,
      "city": "Nandigama",
      "state": "Andhra Pradesh",
      "place": "Shivalayam Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1630,
      "city": "Nandigama",
      "state": "Andhra Pradesh",
      "place": "Lord Shiva Temple, Lankapalli",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1631,
      "city": "Nandyal",
      "state": "Andhra Pradesh",
      "place": "Yaganti, Nandyal",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1632,
      "city": "Nandyal",
      "state": "Andhra Pradesh",
      "place": "Mahanandi, Nandyal",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1633,
      "city": "Nandyal",
      "state": "Andhra Pradesh",
      "place": "Ahobilam, Nandyal",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1634,
      "city": "Nangloi Jat",
      "state": "Delhi",
      "place": "Mangal Mahadev Mandir, Nangloi Jat",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1635,
      "city": "Nangloi Jat",
      "state": "Delhi",
      "place": "Mahavir Swami Mandir, Nangloi Jat",
      "popularity": "Medium",
      "description": "Jain temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1636,
      "city": "Narasaraopet",
      "state": "Andhra Pradesh",
      "place": "Kotappakonda Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1637,
      "city": "Narasaraopet",
      "state": "Andhra Pradesh",
      "place": "Lutheran Church",
      "popularity": "Medium",
      "description": "Christian church, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1638,
      "city": "Narasaraopet",
      "state": "Andhra Pradesh",
      "place": "Kanaka Durga Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1639,
      "city": "Narasaraopet",
      "state": "Andhra Pradesh",
      "place": "Chilakaluripet",
      "popularity": "Medium",
      "description": "Town, urban area.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1640,
      "city": "Narasaraopet",
      "state": "Andhra Pradesh",
      "place": "Repalle Bhimeswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1641,
      "city": "Narsapur",
      "state": "Andhra Pradesh",
      "place": "Narasapuram Market",
      "popularity": "Medium",
      "description": "Marketplace, local shopping.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1642,
      "city": "Narsipatnam",
      "state": "Andhra Pradesh",
      "place": "Sangam Village",
      "popularity": "Medium",
      "description": "Rural area, agricultural activities.",
      "type": "Village",
      "budget": 1000
    },
    {
      "Index": 1643,
      "city": "Narsipatnam",
      "state": "Andhra Pradesh",
      "place": "Pandurangapura Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1644,
      "city": "Narsipatnam",
      "state": "Andhra Pradesh",
      "place": "Sangam Jagarlamudi Kuppaiah Chetty Museum",
      "popularity": "Medium",
      "description": "Museum, historical artifacts.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 1645,
      "city": "Narsipatnam",
      "state": "Andhra Pradesh",
      "place": "Chintapalli Reservoir",
      "popularity": "Medium",
      "description": "Reservoir, scenic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1646,
      "city": "Narsipatnam",
      "state": "Andhra Pradesh",
      "place": "Ayyappa Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1647,
      "city": "Nashik",
      "state": "Maharashtra",
      "place": "Sula Vineyards",
      "popularity": "High",
      "description": "Popular vineyard, wine tasting tours.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1648,
      "city": "Nashik",
      "state": "Maharashtra",
      "place": "Saptashrungi",
      "popularity": "High",
      "description": "Holy shrine, panoramic views.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1649,
      "city": "Nashik",
      "state": "Maharashtra",
      "place": "Pandavleni Caves",
      "popularity": "Medium",
      "description": "Ancient Buddhist caves, rock-cut architecture.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1650,
      "city": "Nashik",
      "state": "Maharashtra",
      "place": "Trimbakeshwar Temple",
      "popularity": "High",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1651,
      "city": "Nashik",
      "state": "Maharashtra",
      "place": "Panchavati",
      "popularity": "Medium",
      "description": "Hindu pilgrimage site, temples.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1652,
      "city": "Nashik",
      "state": "Maharashtra",
      "place": "Saptashrungi Devi Temple",
      "popularity": "High",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1653,
      "city": "Navi Mumbai",
      "state": "Maharashtra",
      "place": "Central Park, Navi Mumbai",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1654,
      "city": "Navi Mumbai",
      "state": "Maharashtra",
      "place": "Pandavkada Falls",
      "popularity": "Medium",
      "description": "Waterfall, picnic spot.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1655,
      "city": "Navi Mumbai",
      "state": "Maharashtra",
      "place": "Karnala Bird Sanctuary",
      "popularity": "Medium",
      "description": "Birdwatching, nature trails.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1656,
      "city": "Navi Mumbai",
      "state": "Maharashtra",
      "place": "DY Patil Stadium, Navi Mumbai",
      "popularity": "Medium",
      "description": "Sports arena, events.",
      "type": "Entertainment",
      "budget": 2000
    },
    {
      "Index": 1657,
      "city": "Navi Mumbai",
      "state": "Maharashtra",
      "place": "Gadeshwar Dam",
      "popularity": "Medium",
      "description": "Scenic dam, boating.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1658,
      "city": "Navi Mumbai",
      "state": "Maharashtra",
      "place": "Belapur Mango Garden",
      "popularity": "Medium",
      "description": "Orchard, fruit tasting.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1659,
      "city": "Navi Mumbai",
      "state": "Maharashtra",
      "place": "Wonder Park, Navi Mumbai",
      "popularity": "Medium",
      "description": "Amusement park, family-friendly.",
      "type": "Entertainment",
      "budget": 2000
    },
    {
      "Index": 1660,
      "city": "Navi Mumbai",
      "state": "Maharashtra",
      "place": "Airoli Knowledge Park",
      "popularity": "Medium",
      "description": "Educational hub, research.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1661,
      "city": "Navi Mumbai",
      "state": "Maharashtra",
      "place": "Sagar Vihar Garden, Navi Mumbai",
      "popularity": "Medium",
      "description": "Waterfront garden, sea views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1662,
      "city": "Navi Mumbai",
      "state": "Maharashtra",
      "place": "Nerul Balaji Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1663,
      "city": "Navi Mumbai",
      "state": "Maharashtra",
      "place": "Bhawani Temple, Navi Mumbai",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual sanctuary.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1664,
      "city": "Navi Mumbai",
      "state": "Maharashtra",
      "place": "ITC Park, Navi Mumbai",
      "popularity": "Medium",
      "description": "Business park, commercial hub.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1665,
      "city": "Navi Mumbai",
      "state": "Maharashtra",
      "place": "Millennium Business Park",
      "popularity": "Medium",
      "description": "Business district, corporate offices.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1666,
      "city": "Navsari",
      "state": "Gujarat",
      "place": "Jalaram Temple, Navsari",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1667,
      "city": "Navsari",
      "state": "Gujarat",
      "place": "Dandi Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1668,
      "city": "Navsari",
      "state": "Gujarat",
      "place": "Wilson Hills",
      "popularity": "Medium",
      "description": "Hill station, panoramic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1669,
      "city": "Navsari",
      "state": "Gujarat",
      "place": "Wilson Hill",
      "popularity": "High",
      "description": "Hill station, panoramic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1670,
      "city": "Navsari",
      "state": "Gujarat",
      "place": "Navsari Agricultural University",
      "popularity": "Medium",
      "description": "Agricultural institution, research.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1671,
      "city": "Navsari",
      "state": "Gujarat",
      "place": "Shirshad Mata Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1672,
      "city": "Navsari",
      "state": "Gujarat",
      "place": "Son Kansari Temples",
      "popularity": "Medium",
      "description": "Hindu temples, historical significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1673,
      "city": "Neil Island",
      "state": "Andaman and Nicobar Islands",
      "place": "Laxmanpur Beach",
      "popularity": "Medium",
      "description": "Scenic beach, sunset views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1674,
      "city": "Neil Island",
      "state": "Andaman and Nicobar Islands",
      "place": "Bharatpur Beach",
      "popularity": "Medium",
      "description": "Coral reef, snorkeling, glass-bottom boats.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1675,
      "city": "Neil Island",
      "state": "Andaman and Nicobar Islands",
      "place": "Sitapur Beach",
      "popularity": "Low",
      "description": "Picturesque beach, sunrise views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1676,
      "city": "Nellore",
      "state": "Andhra Pradesh",
      "place": "Penchalakona Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious pilgrimage site.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1677,
      "city": "Nellore",
      "state": "Andhra Pradesh",
      "place": "Nelapattu Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, migratory birds.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1678,
      "city": "Nellore",
      "state": "Andhra Pradesh",
      "place": "Sri Ranganathaswamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1679,
      "city": "Nellore",
      "state": "Andhra Pradesh",
      "place": "Jonnavada Kamakshi Ammavari Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1680,
      "city": "New Delhi",
      "state": "Delhi",
      "place": "National Museum",
      "popularity": "Medium",
      "description": "Museum showcasing Indian art and artifacts.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1681,
      "city": "Neyveli",
      "state": "Tamil Nadu",
      "place": "Neyveli Lignite Corporation",
      "popularity": "Medium",
      "description": "Lignite mine, industrial area.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1682,
      "city": "Neyveli",
      "state": "Tamil Nadu",
      "place": "Jwalamukhi Amman Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1683,
      "city": "Neyveli",
      "state": "Tamil Nadu",
      "place": "Neyveli View Point",
      "popularity": "Medium",
      "description": "Viewpoint, scenic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1684,
      "city": "Nidadavole",
      "state": "Andhra Pradesh",
      "place": "Veera Venkata Satyanarayana Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1685,
      "city": "Nidadavole",
      "state": "Andhra Pradesh",
      "place": "Bhogeswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1686,
      "city": "Nidadavole",
      "state": "Andhra Pradesh",
      "place": "Sivalayam Temple, Nidadavole",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1687,
      "city": "Nidadavole",
      "state": "Andhra Pradesh",
      "place": "Markandeya Temple, Nidadavole",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1688,
      "city": "Nidadavole",
      "state": "Andhra Pradesh",
      "place": "Sri Markandeya Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1689,
      "city": "Nidadavole",
      "state": "Andhra Pradesh",
      "place": "Gowthami Ghat",
      "popularity": "Medium",
      "description": "Riverbank, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1690,
      "city": "Nizamabad",
      "state": "Telangana",
      "place": "Kanteshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1691,
      "city": "Nizamabad",
      "state": "Telangana",
      "place": "Ali Sagar Lake",
      "popularity": "Medium",
      "description": "Lake, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1692,
      "city": "Nizamabad",
      "state": "Telangana",
      "place": "Nizamabad Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1693,
      "city": "Nizamabad",
      "state": "Telangana",
      "place": "Quilla Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1694,
      "city": "Nizamabad",
      "state": "Telangana",
      "place": "Alisagar, Nizamabad",
      "popularity": "Medium",
      "description": "Lake, boating.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1695,
      "city": "Nizamabad",
      "state": "Telangana",
      "place": "Saroornagar Lake",
      "popularity": "Medium",
      "description": "Lake, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1696,
      "city": "Nizamabad",
      "state": "Telangana",
      "place": "Alisagar Reservoir",
      "popularity": "High",
      "description": "Picnic spot, boating, and gardens.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1697,
      "city": "Nizamabad",
      "state": "Telangana",
      "place": "Archaeological and Heritage Museum",
      "popularity": "Medium",
      "description": "Museum, historical artifacts.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1698,
      "city": "Nizamabad",
      "state": "Telangana",
      "place": "Pocharam Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1699,
      "city": "Nizamabad",
      "state": "Telangana",
      "place": "Dharmapuri",
      "popularity": "Medium",
      "description": "Historical site, pilgrimage destination.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1700,
      "city": "Nizamabad",
      "state": "Telangana",
      "place": "Neelakanteshwara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1701,
      "city": "Nizamabad",
      "state": "Telangana",
      "place": "Sri Raghavendra Swamy Mutt",
      "popularity": "Medium",
      "description": "Hindu mutt, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1702,
      "city": "Nizamabad",
      "state": "Telangana",
      "place": "Limbadri Gutta",
      "popularity": "Medium",
      "description": "Hilltop temple, scenic beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1703,
      "city": "North Dumdum",
      "state": "West Bengal",
      "place": "Aadhar Chandra High School Playground",
      "popularity": "Medium",
      "description": "Urban playground, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1704,
      "city": "North Dumdum",
      "state": "West Bengal",
      "place": "Indian Statistical Institute",
      "popularity": "Medium",
      "description": "Research institute, educational center.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1705,
      "city": "Nubra Valley",
      "state": "Ladakh",
      "place": "Diskit Monastery",
      "popularity": "Medium",
      "description": "Buddhist monastery, panoramic views.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1706,
      "city": "Nubra Valley",
      "state": "Ladakh",
      "place": "Hunder Sand Dunes",
      "popularity": "Medium",
      "description": "Sand dunes, camel safari.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1707,
      "city": "Nubra Valley",
      "state": "Ladakh",
      "place": "Panamik Hot Springs",
      "popularity": "Medium",
      "description": "Hot springs, therapeutic baths.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1708,
      "city": "Nuzvid",
      "state": "Andhra Pradesh",
      "place": "Nuzvid Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1709,
      "city": "Nuzvid",
      "state": "Andhra Pradesh",
      "place": "Maharaja Vijayaram Gajapathi Raj College of Engineering",
      "popularity": "Medium",
      "description": "Engineering college, educational institution.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1710,
      "city": "Ongole",
      "state": "Andhra Pradesh",
      "place": "Kothapatnam Beach",
      "popularity": "Medium",
      "description": "Scenic beach, relaxation spot.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1711,
      "city": "Ongole",
      "state": "Andhra Pradesh",
      "place": "Kashi Vishweswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1712,
      "city": "Ongole",
      "state": "Andhra Pradesh",
      "place": "Chennakesava Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1713,
      "city": "Ongole",
      "state": "Andhra Pradesh",
      "place": "Kashi Vishweshwara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1714,
      "city": "Ongole",
      "state": "Andhra Pradesh",
      "place": "Chandavaram",
      "popularity": "Medium",
      "description": "Historical site, archaeological ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1715,
      "city": "Ongole",
      "state": "Andhra Pradesh",
      "place": "Kashi Vishweshwara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1716,
      "city": "Ongole",
      "state": "Andhra Pradesh",
      "place": "Vodarevu Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1717,
      "city": "Orai",
      "state": "Uttar Pradesh",
      "place": "Garhmau Lake",
      "popularity": "Medium",
      "description": "Lake, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1718,
      "city": "Orai",
      "state": "Uttar Pradesh",
      "place": "Shri Shri Durga Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1719,
      "city": "Orai",
      "state": "Uttar Pradesh",
      "place": "Govind Sagar",
      "popularity": "Medium",
      "description": "Lake, boating.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1720,
      "city": "Orai",
      "state": "Uttar Pradesh",
      "place": "Nahar Singh Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1721,
      "city": "Osmanabad",
      "state": "Maharashtra",
      "place": "Tulja Bhavani Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1722,
      "city": "Osmanabad",
      "state": "Maharashtra",
      "place": "Naldurg Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1723,
      "city": "Osmanabad",
      "state": "Maharashtra",
      "place": "Paranda Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1724,
      "city": "Palakkad",
      "state": "Kerala",
      "place": "Silent Valley National Park",
      "popularity": "High",
      "description": "National park, biodiversity hotspot.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1725,
      "city": "Palakkad",
      "state": "Kerala",
      "place": "Palakkad Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1726,
      "city": "Palakkad",
      "state": "Kerala",
      "place": "Malampuzha Dam",
      "popularity": "Medium",
      "description": "Dam, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1727,
      "city": "Palakollu",
      "state": "Andhra Pradesh",
      "place": "Ksheerarama Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1728,
      "city": "Palakollu",
      "state": "Andhra Pradesh",
      "place": "Shrungara Ramam Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1729,
      "city": "Palakollu",
      "state": "Andhra Pradesh",
      "place": "Ksheera Ramalingeswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1730,
      "city": "Palanpur",
      "state": "Gujarat",
      "place": "Palanpur Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1731,
      "city": "Palanpur",
      "state": "Gujarat",
      "place": "Mazar-e-Saifee",
      "popularity": "Medium",
      "description": "Islamic mosque, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1732,
      "city": "Palanpur",
      "state": "Gujarat",
      "place": "Suicide Point",
      "popularity": "Medium",
      "description": "Viewpoint, panoramic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1733,
      "city": "Pali",
      "state": "Rajasthan",
      "place": "Ranakpur Jain Temple",
      "popularity": "High",
      "description": "Jain temple, intricate marble architecture.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1734,
      "city": "Pali",
      "state": "Rajasthan",
      "place": "Parshuram Mahadev Temple, Pali",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1735,
      "city": "Pali",
      "state": "Rajasthan",
      "place": "Bhoraji Ka Kund",
      "popularity": "Medium",
      "description": "Stepwell, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1736,
      "city": "Pali",
      "state": "Rajasthan",
      "place": "Parashuram Mahadev Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1737,
      "city": "Pali",
      "state": "Rajasthan",
      "place": "Nimbo Ka Nath",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1738,
      "city": "Pallavaram",
      "state": "Tamil Nadu",
      "place": "Pallavaram Perumal Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1739,
      "city": "Pallavaram",
      "state": "Tamil Nadu",
      "place": "Pallavaram Puzhal Aeri",
      "popularity": "Medium",
      "description": "Lake, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1740,
      "city": "Pallavaram",
      "state": "Tamil Nadu",
      "place": "Pallavaram Ayyappan Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1741,
      "city": "Palwal",
      "state": "Haryana",
      "place": "Kamal Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1742,
      "city": "Palwal",
      "state": "Haryana",
      "place": "Dudheshwar Nath Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1743,
      "city": "Palwal",
      "state": "Haryana",
      "place": "Satish Dhawan Space Centre",
      "popularity": "Medium",
      "description": "Space research center, educational tours.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1744,
      "city": "Panaji",
      "state": "Goa",
      "place": "Basilica of Bom Jesus",
      "popularity": "High",
      "description": "Old church, UNESCO World Heritage Site.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1745,
      "city": "Panaji",
      "state": "Goa",
      "place": "Fontainhas",
      "popularity": "High",
      "description": "Historic Latin Quarter, colorful houses.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1746,
      "city": "Panaji",
      "state": "Goa",
      "place": "Miramar Beach Goa",
      "popularity": "Medium",
      "description": "Urban beach, sunset views.",
      "type": "Beach",
      "budget": 2000
    },
    {
      "Index": 1747,
      "city": "Panchkula",
      "state": "Haryana",
      "place": "Morni Hills",
      "popularity": "Medium",
      "description": "Hill station, scenic beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1748,
      "city": "Panchkula",
      "state": "Haryana",
      "place": "Nada Sahib",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1749,
      "city": "Panchkula",
      "state": "Haryana",
      "place": "Chattbir Zoo",
      "popularity": "Medium",
      "description": "Zoo, wildlife conservation.",
      "type": "Wildlife",
      "budget": 2000
    },
    {
      "Index": 1750,
      "city": "Panipat",
      "state": "Haryana",
      "place": "Kabuli Shah Mosque",
      "popularity": "Medium",
      "description": "Historical mosque, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1751,
      "city": "Panipat",
      "state": "Haryana",
      "place": "Panipat Museum",
      "popularity": "Medium",
      "description": "Museum showcasing artifacts from battles.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1752,
      "city": "Panipat",
      "state": "Haryana",
      "place": "Devi Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1753,
      "city": "Panipat",
      "state": "Haryana",
      "place": "Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1754,
      "city": "Panipat",
      "state": "Haryana",
      "place": "Kabuli Bagh Mosque",
      "popularity": "Medium",
      "description": "Historical mosque, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1755,
      "city": "Parbhani",
      "state": "Maharashtra",
      "place": "Shri Kshetra Dnyanganga Sanctuary",
      "popularity": "High",
      "description": "Sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1756,
      "city": "Parbhani",
      "state": "Maharashtra",
      "place": "Nava Graha Temple",
      "popularity": "Medium",
      "description": "Hindu temple, astrological significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1757,
      "city": "Parbhani",
      "state": "Maharashtra",
      "place": "Jalna",
      "popularity": "Medium",
      "description": "City center, shopping and dining.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1758,
      "city": "Parbhani",
      "state": "Maharashtra",
      "place": "Khandoba Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1759,
      "city": "Parbhani",
      "state": "Maharashtra",
      "place": "Jawahar Gate",
      "popularity": "Medium",
      "description": "Historical gate, architectural significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1760,
      "city": "Parbhani",
      "state": "Maharashtra",
      "place": "Sant Janabai Temple",
      "popularity": "Medium",
      "description": "Hindu temple, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1761,
      "city": "Parbhani",
      "state": "Maharashtra",
      "place": "Pargao Lake",
      "popularity": "Medium",
      "description": "Lake, boating, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1762,
      "city": "Parbhani",
      "state": "Maharashtra",
      "place": "Bala Ganapati Temple",
      "popularity": "Low",
      "description": "Hindu temple, spiritual significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1763,
      "city": "Parbhani",
      "state": "Maharashtra",
      "place": "Dargah Hazrat Turabul Haq",
      "popularity": "High",
      "description": "Sufi shrine, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1764,
      "city": "Parbhani",
      "state": "Maharashtra",
      "place": "Jintur Naganath Temple",
      "popularity": "High",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1765,
      "city": "Pasighat",
      "state": "Arunachal Pradesh",
      "place": "Siang River",
      "popularity": "Medium",
      "description": "River, rafting, angling.",
      "type": "Adventure",
      "budget": 1000
    },
    {
      "Index": 1766,
      "city": "Patan",
      "state": "Gujarat",
      "place": "Sahastralinga Talav",
      "popularity": "High",
      "description": "Artificial lake, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1767,
      "city": "Patan",
      "state": "Gujarat",
      "place": "Panchasara Parshwanath Jain Temple",
      "popularity": "Medium",
      "description": "Jain temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1768,
      "city": "Patan",
      "state": "Gujarat",
      "place": "Patan Stepwell",
      "popularity": "Medium",
      "description": "Stepwell, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1769,
      "city": "Pathankot",
      "state": "Punjab",
      "place": "Mukteshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1770,
      "city": "Pathankot",
      "state": "Punjab",
      "place": "Ranjit Sagar Dam",
      "popularity": "Medium",
      "description": "Dam, hydroelectric power generation.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1771,
      "city": "Pathankot",
      "state": "Punjab",
      "place": "Nurpur Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1772,
      "city": "Patiala",
      "state": "Punjab",
      "place": "Baradari Gardens",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1773,
      "city": "Patiala",
      "state": "Punjab",
      "place": "Gurudwara Dukh Niwaran Sahib",
      "popularity": "Medium",
      "description": "Sikh gurdwara, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1774,
      "city": "Patiala",
      "state": "Punjab",
      "place": "Sheesh Mahal",
      "popularity": "Medium",
      "description": "Palace, mirror work.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1775,
      "city": "Patiala",
      "state": "Punjab",
      "place": "Moti Bagh Palace",
      "popularity": "Medium",
      "description": "Palace, historical significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1776,
      "city": "Patna",
      "state": "Bihar",
      "place": "Golghar, Patna",
      "popularity": "High",
      "description": "Historic granary, panoramic views of the city.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1777,
      "city": "Patna",
      "state": "Bihar",
      "place": "Patna Museum",
      "popularity": "Medium",
      "description": "Art and artifacts collection, historical exhibits.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1778,
      "city": "Patna",
      "state": "Bihar",
      "place": "Mahavir Mandir, Patna",
      "popularity": "Low",
      "description": "Famous temple, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1779,
      "city": "Patna",
      "state": "Bihar",
      "place": "Mahatma Gandhi Setu",
      "popularity": "High",
      "description": "Longest river bridge in India.",
      "type": "Infrastructure",
      "budget": 2000
    },
    {
      "Index": 1780,
      "city": "Patna",
      "state": "Bihar",
      "place": "Kumhrar",
      "popularity": "Medium",
      "description": "Archaeological site, ancient ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1781,
      "city": "Patna",
      "state": "Bihar",
      "place": "Takht Sri Patna Sahib",
      "popularity": "Medium",
      "description": "Sikh pilgrimage site, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1782,
      "city": "Patna",
      "state": "Bihar",
      "place": "Agam Kuan",
      "popularity": "Medium",
      "description": "Ancient well, archaeological site.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1783,
      "city": "Patna",
      "state": "Bihar",
      "place": "Sanjay Gandhi Jaivik Udyan",
      "popularity": "Medium",
      "description": "Zoo, botanical garden.",
      "type": "Wildlife",
      "budget": 1000
    },
    {
      "Index": 1784,
      "city": "Patna",
      "state": "Bihar",
      "place": "Revolutionary Museum",
      "popularity": "Medium",
      "description": "Museum, showcasing India's freedom struggle.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 1785,
      "city": "Patna",
      "state": "Bihar",
      "place": "Patna Sahib Gurudwara",
      "popularity": "Medium",
      "description": "Sikh pilgrimage site, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1786,
      "city": "Patna",
      "state": "Bihar",
      "place": "Eco Park, Patna",
      "popularity": "Medium",
      "description": "Public park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1787,
      "city": "Patna",
      "state": "Bihar",
      "place": "Bihar Museum",
      "popularity": "Medium",
      "description": "Museum, showcasing Bihar's heritage and culture.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 1788,
      "city": "Patna",
      "state": "Bihar",
      "place": "Srikrishna Science Centre",
      "popularity": "Medium",
      "description": "Science museum, interactive exhibits.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1789,
      "city": "Pedana",
      "state": "Andhra Pradesh",
      "place": "Sri Veeranjaneya Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1790,
      "city": "Pedana",
      "state": "Andhra Pradesh",
      "place": "Ravamma Thalli Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1791,
      "city": "Pedana",
      "state": "Andhra Pradesh",
      "place": "Pedana Market",
      "popularity": "Medium",
      "description": "Marketplace, local shopping.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1792,
      "city": "Peddapuram",
      "state": "Andhra Pradesh",
      "place": "Vishnu Temple, Peddapuram",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1793,
      "city": "Peddapuram",
      "state": "Andhra Pradesh",
      "place": "Kotipalli Someswara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1794,
      "city": "Peddapuram",
      "state": "Andhra Pradesh",
      "place": "Peddapuram Market",
      "popularity": "Medium",
      "description": "Marketplace, local shopping.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1795,
      "city": "Peddapuram",
      "state": "Andhra Pradesh",
      "place": "Peddapuram Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1796,
      "city": "Peddapuram",
      "state": "Andhra Pradesh",
      "place": "Korukonda Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1797,
      "city": "Phek",
      "state": "Nagaland",
      "place": "Glory Peak, Phek",
      "popularity": "High",
      "description": "Peak, trekking, and panoramic views.",
      "type": "Adventure",
      "budget": 2000
    },
    {
      "Index": 1798,
      "city": "Phek",
      "state": "Nagaland",
      "place": "Phek Town Park",
      "popularity": "Medium",
      "description": "Public park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1799,
      "city": "Phek",
      "state": "Nagaland",
      "place": "Khezakeno Village",
      "popularity": "High",
      "description": "Naga village, cultural immersion.",
      "type": "Village",
      "budget": 1500
    },
    {
      "Index": 1800,
      "city": "Phek",
      "state": "Nagaland",
      "place": "Zoological Park",
      "popularity": "High",
      "description": "Zoological park, wildlife conservation.",
      "type": "Wildlife",
      "budget": 2000
    },
    {
      "Index": 1801,
      "city": "Phek",
      "state": "Nagaland",
      "place": "Sungkoten Village",
      "popularity": "High",
      "description": "Naga village, traditional festivals.",
      "type": "Village",
      "budget": 1000
    },
    {
      "Index": 1802,
      "city": "Phusro",
      "state": "Jharkhand",
      "place": "Guru Gobind Singh Stadium",
      "popularity": "Medium",
      "description": "Sports stadium, athletics events.",
      "type": "Entertainment",
      "budget": 1500
    },
    {
      "Index": 1803,
      "city": "Phusro",
      "state": "Jharkhand",
      "place": "Bhuli Dam, Phusro",
      "popularity": "Medium",
      "description": "Dam, scenic views and picnics.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1804,
      "city": "Phusro",
      "state": "Jharkhand",
      "place": "Jharkhand Dham",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1805,
      "city": "Pilibhit",
      "state": "Uttar Pradesh",
      "place": "Pilibhit Tiger Reserve",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, tiger conservation.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1806,
      "city": "Pilibhit",
      "state": "Uttar Pradesh",
      "place": "Mahof Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1807,
      "city": "Pilibhit",
      "state": "Uttar Pradesh",
      "place": "Chuka Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1808,
      "city": "Pithampur",
      "state": "Madhya Pradesh",
      "place": "Bijasan Mata Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1809,
      "city": "Pithampur",
      "state": "Madhya Pradesh",
      "place": "Pipliyapala Regional Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1810,
      "city": "Pithampur",
      "state": "Madhya Pradesh",
      "place": "Mahakaleshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1811,
      "city": "Pithapuram",
      "state": "Andhra Pradesh",
      "place": "Pithapuram Market",
      "popularity": "Medium",
      "description": "Marketplace, local shopping.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1812,
      "city": "Pithapuram",
      "state": "Andhra Pradesh",
      "place": "Draksharama",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1813,
      "city": "Pithapuram",
      "state": "Andhra Pradesh",
      "place": "Pithapuram Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1814,
      "city": "Pithapuram",
      "state": "Andhra Pradesh",
      "place": "Pithapuram Kalyana Venkateswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1815,
      "city": "Pollachi",
      "state": "Tamil Nadu",
      "place": "Topslip, Pollachi",
      "popularity": "Medium",
      "description": "Forest reserve, wildlife spotting.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1816,
      "city": "Pollachi",
      "state": "Tamil Nadu",
      "place": "Valparai",
      "popularity": "Medium",
      "description": "Hill station, tea estates.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1817,
      "city": "Pollachi",
      "state": "Tamil Nadu",
      "place": "Parambikulam Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, nature trekking.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1818,
      "city": "Ponda",
      "state": "Goa",
      "place": "Shri Mangeshi Temple, Ponda",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1819,
      "city": "Ponda",
      "state": "Goa",
      "place": "Sahakari Spice Farm, Ponda",
      "popularity": "Medium",
      "description": "Spice plantation, guided tour.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1820,
      "city": "Ponda",
      "state": "Goa",
      "place": "Bhagwan Mahaveer Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, nature trekking.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1821,
      "city": "Ponda",
      "state": "Goa",
      "place": "Shri Manguesh Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1822,
      "city": "Ponda",
      "state": "Goa",
      "place": "Shri Shantadurga Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1823,
      "city": "Pondicherry",
      "state": "Puducherry",
      "place": "Promenade Beach",
      "popularity": "Medium",
      "description": "Scenic beach, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1824,
      "city": "Pondicherry",
      "state": "Puducherry",
      "place": "Auroville, Pondicherry",
      "popularity": "Medium",
      "description": "Spiritual community, meditation center.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1825,
      "city": "Pondicherry",
      "state": "Puducherry",
      "place": "Arikamedu",
      "popularity": "Medium",
      "description": "Archaeological site, ancient ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1826,
      "city": "Ponnur",
      "state": "Andhra Pradesh",
      "place": "Ponnur Anjaneya Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1827,
      "city": "Ponnur",
      "state": "Andhra Pradesh",
      "place": "Machilipatnam Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1828,
      "city": "Porbandar",
      "state": "Gujarat",
      "place": "Porbandar Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1829,
      "city": "Porbandar",
      "state": "Gujarat",
      "place": "Sudama Temple, Porbandar",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1830,
      "city": "Porbandar",
      "state": "Gujarat",
      "place": "Barda Hills Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, biodiversity hotspot.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1831,
      "city": "Porbandar",
      "state": "Gujarat",
      "place": "Rani Baug",
      "popularity": "High",
      "description": "Public garden, leisure activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1832,
      "city": "Port Blair",
      "state": "Andaman and Nicobar Islands",
      "place": "Cellular Jail, Port Blair",
      "popularity": "Medium",
      "description": "Historical jail, freedom struggle monument.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1833,
      "city": "Port Blair",
      "state": "Andaman and Nicobar Islands",
      "place": "Coruem Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1834,
      "city": "Port Blair",
      "state": "Andaman and Nicobar Islands",
      "place": "Samudrika Naval Marine Museum",
      "popularity": "Medium",
      "description": "Museum, showcasing marine life.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1835,
      "city": "Port Blair",
      "state": "Andaman and Nicobar Islands",
      "place": "Corbyn's Cove Beach",
      "popularity": "Medium",
      "description": "Popular beach, water sports.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1836,
      "city": "Port Blair",
      "state": "Andaman and Nicobar Islands",
      "place": "Anthropological Museum",
      "popularity": "Medium",
      "description": "Museum showcasing indigenous tribes.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 1837,
      "city": "Port Blair",
      "state": "Andaman and Nicobar Islands",
      "place": "Mount Harriet National Park",
      "popularity": "Medium",
      "description": "National park, trekking trails.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1838,
      "city": "Port Blair",
      "state": "Andaman and Nicobar Islands",
      "place": "Samudrika Marine Museum",
      "popularity": "Medium",
      "description": "Museum focusing on marine life.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 1839,
      "city": "Proddatur",
      "state": "Andhra Pradesh",
      "place": "Gandi Anjaneya Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1840,
      "city": "Proddatur",
      "state": "Andhra Pradesh",
      "place": "Sri Ayyappa Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1841,
      "city": "Proddatur",
      "state": "Andhra Pradesh",
      "place": "Sri Ramesh Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1842,
      "city": "Proddatur",
      "state": "Andhra Pradesh",
      "place": "Mahalingeswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1843,
      "city": "Proddatur",
      "state": "Andhra Pradesh",
      "place": "Gangamma Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1844,
      "city": "Pudukkottai",
      "state": "Tamil Nadu",
      "place": "Kudumiyanmalai",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1845,
      "city": "Pudukkottai",
      "state": "Tamil Nadu",
      "place": "Avudaiyarkovil",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1846,
      "city": "Pudukkottai",
      "state": "Tamil Nadu",
      "place": "Thirumayam Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1847,
      "city": "Pudukottai",
      "state": "Tamil Nadu",
      "place": "Adhithapaari Kovil",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1848,
      "city": "Pudukottai",
      "state": "Tamil Nadu",
      "place": "Sittanavasal Cave",
      "popularity": "Medium",
      "description": "Cave, historical significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1849,
      "city": "Pulwama",
      "state": "Jammu and Kashmir",
      "place": "Awantipora Ruins",
      "popularity": "Medium",
      "description": "Ancient temple ruins, historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1850,
      "city": "Pulwama",
      "state": "Jammu and Kashmir",
      "place": "Tarsar Lake",
      "popularity": "Medium",
      "description": "Lake, trekking, camping.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1851,
      "city": "Pune",
      "state": "Maharashtra",
      "place": "Shaniwar Wada",
      "popularity": "High",
      "description": "Historical fort, light and sound show.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1852,
      "city": "Pune",
      "state": "Maharashtra",
      "place": "Aga Khan Palace",
      "popularity": "Medium",
      "description": "Monument with historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1853,
      "city": "Pune",
      "state": "Maharashtra",
      "place": "Sinhagad Fort",
      "popularity": "Medium",
      "description": "Hill fortress, scenic views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1854,
      "city": "Pune",
      "state": "Maharashtra",
      "place": "Raja Dinkar Kelkar Museum",
      "popularity": "Medium",
      "description": "Art and historical artifacts collection.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1855,
      "city": "Puri",
      "state": "Odisha",
      "place": "Chilika Lake",
      "popularity": "Medium",
      "description": "Lagoon, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1856,
      "city": "Puri",
      "state": "Odisha",
      "place": "Puri Beach",
      "popularity": "Medium",
      "description": "Scenic beach, religious significance.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1857,
      "city": "Puri",
      "state": "Odisha",
      "place": "Sun Temple, Konark",
      "popularity": "Medium",
      "description": "Hindu temple, architectural marvel.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1858,
      "city": "Purna",
      "state": "Maharashtra",
      "place": "Karnal Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1859,
      "city": "Purna",
      "state": "Maharashtra",
      "place": "Muktabai Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1860,
      "city": "Purnia",
      "state": "Bihar",
      "place": "Navlakha Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1861,
      "city": "Purnia",
      "state": "Bihar",
      "place": "Manihari Ghat",
      "popularity": "Medium",
      "description": "Ghat on the Ganges River, scenic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1862,
      "city": "Purnia",
      "state": "Bihar",
      "place": "Jalalgarh Fort",
      "popularity": "Medium",
      "description": "Historical fort, cultural significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1863,
      "city": "Purnia",
      "state": "Bihar",
      "place": "Purnia Junction",
      "popularity": "Medium",
      "description": "Railway station, transportation hub.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1864,
      "city": "Purnia",
      "state": "Bihar",
      "place": "Rajwanshi Nagar",
      "popularity": "Medium",
      "description": "Market, local products.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1865,
      "city": "Purnia",
      "state": "Bihar",
      "place": "Dayalpur Bazar",
      "popularity": "Medium",
      "description": "Market, local products.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 1866,
      "city": "Pushkar",
      "state": "Rajasthan",
      "place": "Pushkar Lake",
      "popularity": "High",
      "description": "Holy lake, ghats, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1867,
      "city": "Pushkar",
      "state": "Rajasthan",
      "place": "Savitri Temple, Pushkar",
      "popularity": "Medium",
      "description": "Hilltop temple, panoramic views, trekking.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1868,
      "city": "Raebareli",
      "state": "Uttar Pradesh",
      "place": "Behta Bridge",
      "popularity": "Medium",
      "description": "Bridge, scenic surroundings.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1869,
      "city": "Raebareli",
      "state": "Uttar Pradesh",
      "place": "Hira Mahal, Raebareli",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1870,
      "city": "Raebareli",
      "state": "Uttar Pradesh",
      "place": "Indira Gandhi Rashtriya Smriti Upvan",
      "popularity": "Medium",
      "description": "Memorial park, botanical garden.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1871,
      "city": "Raebareli",
      "state": "Uttar Pradesh",
      "place": "Hardoi Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1872,
      "city": "Raebareli",
      "state": "Uttar Pradesh",
      "place": "Sareni Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, nature trekking.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1873,
      "city": "Raebareli",
      "state": "Uttar Pradesh",
      "place": "Bada Bhagwantpur Mela",
      "popularity": "Medium",
      "description": "Fair, religious rituals.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1874,
      "city": "Raebareli",
      "state": "Uttar Pradesh",
      "place": "Saree Point, Raebareli",
      "popularity": "Medium",
      "description": "Market, traditional clothing.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 1875,
      "city": "Raebareli",
      "state": "Uttar Pradesh",
      "place": "Raja Bhaiya Ka Bazar",
      "popularity": "Medium",
      "description": "Market, local products.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 1876,
      "city": "Raichur",
      "state": "Karnataka",
      "place": "Raichur Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1877,
      "city": "Raichur",
      "state": "Karnataka",
      "place": "Aam Talab, Raichur",
      "popularity": "Medium",
      "description": "Man-made lake, scenic spot.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1878,
      "city": "Raichur",
      "state": "Karnataka",
      "place": "Ameen Peer Dargah",
      "popularity": "Medium",
      "description": "Muslim shrine, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1879,
      "city": "Raichur",
      "state": "Karnataka",
      "place": "Manvi Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1880,
      "city": "Raiganj",
      "state": "West Bengal",
      "place": "Murshidabad Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1881,
      "city": "Raiganj",
      "state": "West Bengal",
      "place": "Bateshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1882,
      "city": "Raiganj",
      "state": "West Bengal",
      "place": "Biswanath Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1883,
      "city": "Raiganj",
      "state": "West Bengal",
      "place": "Raiganj Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1884,
      "city": "Raiganj",
      "state": "West Bengal",
      "place": "Devi Patan Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1885,
      "city": "Raiganj",
      "state": "West Bengal",
      "place": "Maharaja's Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1886,
      "city": "Raigarh",
      "state": "Chhattisgarh",
      "place": "Chakradhar Swami Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1887,
      "city": "Raigarh",
      "state": "Chhattisgarh",
      "place": "Maa Chandi Temple, Raigarh",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1888,
      "city": "Raigarh",
      "state": "Chhattisgarh",
      "place": "Ram Jharna, Raigarh",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1889,
      "city": "Raigarh",
      "state": "Chhattisgarh",
      "place": "Gomarda Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1890,
      "city": "Raigarh",
      "state": "Chhattisgarh",
      "place": "Shri Shyam Mandir, Raigarh",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1891,
      "city": "Raigarh",
      "state": "Chhattisgarh",
      "place": "Kosa Mahotsav",
      "popularity": "Medium",
      "description": "Cultural festival, traditional arts.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1892,
      "city": "Raipur",
      "state": "Chhattisgarh",
      "place": "Ghatarani Falls",
      "popularity": "Medium",
      "description": "Serene waterfall, surrounded by lush greenery.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1893,
      "city": "Raipur",
      "state": "Chhattisgarh",
      "place": "Nandan Van Zoo",
      "popularity": "Medium",
      "description": "Zoo with diverse wildlife species.",
      "type": "Wildlife",
      "budget": 2000
    },
    {
      "Index": 1894,
      "city": "Raipur",
      "state": "Chhattisgarh",
      "place": "Dandak Caves",
      "popularity": "Medium",
      "description": "Deep caves, archaeological significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1895,
      "city": "Raipur",
      "state": "Chhattisgarh",
      "place": "Ghatarani Waterfalls",
      "popularity": "High",
      "description": "Scenic waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1896,
      "city": "Raipur",
      "state": "Chhattisgarh",
      "place": "Purkhouti Muktangan",
      "popularity": "Medium",
      "description": "Ethnic museum, tribal artifacts.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 1897,
      "city": "Rajahmundry",
      "state": "Andhra Pradesh",
      "place": "Dowleswaram Barrage",
      "popularity": "Medium",
      "description": "Man-made barrage, scenic views.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1898,
      "city": "Rajahmundry",
      "state": "Andhra Pradesh",
      "place": "Kambala Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1899,
      "city": "Rajahmundry",
      "state": "Andhra Pradesh",
      "place": "Rajahmundry Bridge",
      "popularity": "Medium",
      "description": "Bridge, architectural marvel.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1900,
      "city": "Rajahmundry",
      "state": "Andhra Pradesh",
      "place": "Papi Hills",
      "popularity": "Medium",
      "description": "Hill range, scenic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1901,
      "city": "Rajahmundry",
      "state": "Andhra Pradesh",
      "place": "Rajahmundry Museum",
      "popularity": "Medium",
      "description": "Museum, historical artifacts.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 1902,
      "city": "Rajampet",
      "state": "Andhra Pradesh",
      "place": "Sri Kodandarama Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1903,
      "city": "Rajampet",
      "state": "Andhra Pradesh",
      "place": "Sri Venkateswara Temple, Vontimitta",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1904,
      "city": "Rajapalayam",
      "state": "Tamil Nadu",
      "place": "Ayyanar Falls",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1905,
      "city": "Rajapalayam",
      "state": "Tamil Nadu",
      "place": "Ayyanar Temple, Rajapalayam",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1906,
      "city": "Rajapalayam",
      "state": "Tamil Nadu",
      "place": "Shenbagathoppu Grizzled Squirrel Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, conservation.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1907,
      "city": "Rajapalayam",
      "state": "Tamil Nadu",
      "place": "Rajapalayam Dog",
      "popularity": "Medium",
      "description": "Dog breed, animal breeding.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 1908,
      "city": "Rajapalayam",
      "state": "Tamil Nadu",
      "place": "Sree Ramana Maharishi Ashram",
      "popularity": "Medium",
      "description": "Ashram, spiritual retreat.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1909,
      "city": "Rajauri",
      "state": "Jammu and Kashmir",
      "place": "Pir Panjal Range",
      "popularity": "Medium",
      "description": "Mountain range, trekking, skiing.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1910,
      "city": "Rajauri",
      "state": "Jammu and Kashmir",
      "place": "Kalish Kund",
      "popularity": "Medium",
      "description": "Holy spring, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1911,
      "city": "Rajgir",
      "state": "Bihar",
      "place": "Venu Vana",
      "popularity": "Medium",
      "description": "Landscape garden, Buddha's meditation site.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1912,
      "city": "Rajgir",
      "state": "Bihar",
      "place": "Jivakameavan Gardens",
      "popularity": "Medium",
      "description": "Landscape garden, historical significance.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1913,
      "city": "Rajkot",
      "state": "Gujarat",
      "place": "Kaba Gandhi No Delo",
      "popularity": "Medium",
      "description": "Mahatma Gandhi's childhood home.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1914,
      "city": "Rajkot",
      "state": "Gujarat",
      "place": "Watson Museum",
      "popularity": "Medium",
      "description": "Museum showcasing artifacts, history.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1915,
      "city": "Rajkot",
      "state": "Gujarat",
      "place": "Pradyuman Park",
      "popularity": "Low",
      "description": "Park with green spaces, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1916,
      "city": "Rajkot",
      "state": "Gujarat",
      "place": "Rashtriya Shala",
      "popularity": "Medium",
      "description": "Educational institution, cultural center.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1917,
      "city": "Rajkot",
      "state": "Gujarat",
      "place": "Rajkumar College",
      "popularity": "Medium",
      "description": "Educational institution, architectural beauty.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1918,
      "city": "Rajkot",
      "state": "Gujarat",
      "place": "Ishwariya Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1919,
      "city": "Rajkot",
      "state": "Gujarat",
      "place": "Jubilee Garden",
      "popularity": "Medium",
      "description": "Public garden, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1920,
      "city": "Rajnandgaon",
      "state": "Chhattisgarh",
      "place": "Khutaghat Dam",
      "popularity": "Medium",
      "description": "Dam on River Kharun, scenic surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1921,
      "city": "Rajnandgaon",
      "state": "Chhattisgarh",
      "place": "Bambleshwari Temple, Rajnandgaon",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1922,
      "city": "Rajnandgaon",
      "state": "Chhattisgarh",
      "place": "Kuleshwar Dham",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual ambiance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1923,
      "city": "Rajnandgaon",
      "state": "Chhattisgarh",
      "place": "Chandrahasini Devi Temple",
      "popularity": "High",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1924,
      "city": "Rajpur Sonarpur",
      "state": "West Bengal",
      "place": "Ashram of Loknath Baba",
      "popularity": "Medium",
      "description": "Ashram, spiritual retreat.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1925,
      "city": "Rajpur Sonarpur",
      "state": "West Bengal",
      "place": "Titan Eco Park",
      "popularity": "Medium",
      "description": "Eco park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1926,
      "city": "Rajpur Sonarpur",
      "state": "West Bengal",
      "place": "Bawali Rajbari",
      "popularity": "Medium",
      "description": "Historical palace, cultural events.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1927,
      "city": "Rajpura",
      "state": "Punjab",
      "place": "Gurudwara Shri Amb Sahib Ji",
      "popularity": "Medium",
      "description": "Sikh gurdwara, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1928,
      "city": "Rajpura",
      "state": "Punjab",
      "place": "Ancient Shiv Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1929,
      "city": "Ramagundam",
      "state": "Telangana",
      "place": "Ramagundam Dam",
      "popularity": "Medium",
      "description": "Dam, hydroelectric power generation.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1930,
      "city": "Ramagundam",
      "state": "Telangana",
      "place": "Anjaneya Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1931,
      "city": "Ramagundam",
      "state": "Telangana",
      "place": "Sri Sitaramachandra Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1932,
      "city": "Ramagundam",
      "state": "Telangana",
      "place": "Lake Godavari",
      "popularity": "High",
      "description": "Lake, boating, and recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1933,
      "city": "Ramagundam",
      "state": "Telangana",
      "place": "Gayatri Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1934,
      "city": "Ramagundam",
      "state": "Telangana",
      "place": "Peddapalli Railway Station",
      "popularity": "Medium",
      "description": "Historical site, railway heritage.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1935,
      "city": "Ramagundam",
      "state": "Telangana",
      "place": "Ramalayam",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1936,
      "city": "Ramagundam",
      "state": "Telangana",
      "place": "Sri Raja Rajeshwara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1937,
      "city": "Ramagundam",
      "state": "Telangana",
      "place": "Sri Sita Rama Temple, Ramagundam",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1938,
      "city": "Ramagundam",
      "state": "Telangana",
      "place": "Thallapally Reservoir",
      "popularity": "Medium",
      "description": "Water reservoir, boating, and fishing.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1939,
      "city": "Ramagundam",
      "state": "Telangana",
      "place": "Jyotirlinga Temple, Ramagundam",
      "popularity": "Medium",
      "description": "Hindu temple, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1940,
      "city": "Ramagundam",
      "state": "Telangana",
      "place": "Sri Laxmi Narasimha Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1941,
      "city": "Ramagundam",
      "state": "Telangana",
      "place": "Sri Seetha Ramachandra Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1942,
      "city": "Rampur",
      "state": "Uttar Pradesh",
      "place": "Nawab Ali Shahid Jama Masjid",
      "popularity": "Medium",
      "description": "Islamic mosque, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1943,
      "city": "Rampur",
      "state": "Uttar Pradesh",
      "place": "Rampur Raza Library Museum",
      "popularity": "Medium",
      "description": "Museum, showcasing historical artifacts.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1944,
      "city": "Ranchi",
      "state": "Jharkhand",
      "place": "Hundru Falls",
      "popularity": "Medium",
      "description": "Spectacular waterfall, scenic surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1945,
      "city": "Rangat",
      "state": "Andaman and Nicobar Islands",
      "place": "Amkunj Beach",
      "popularity": "Medium",
      "description": "Scenic beach, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1946,
      "city": "Rangat",
      "state": "Andaman and Nicobar Islands",
      "place": "Dhani Nallah Beach",
      "popularity": "Medium",
      "description": "Pristine beach, swimming, beachcombing.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1947,
      "city": "Rangat",
      "state": "Andaman and Nicobar Islands",
      "place": "Cuthbert Bay Beach",
      "popularity": "Medium",
      "description": "Turtle nesting site, conservation area.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1948,
      "city": "Rangat",
      "state": "Andaman and Nicobar Islands",
      "place": "Marine Interpretation Centre",
      "popularity": "Low",
      "description": "Information center about marine life.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1949,
      "city": "Raniganj",
      "state": "West Bengal",
      "place": "Beleshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1950,
      "city": "Raniganj",
      "state": "West Bengal",
      "place": "Raniganj Coalfield",
      "popularity": "Medium",
      "description": "Industrial area, coal mining.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1951,
      "city": "Raniganj",
      "state": "West Bengal",
      "place": "Sitarampur Railway Station",
      "popularity": "Medium",
      "description": "Railway station, transportation hub.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1952,
      "city": "Ratlam",
      "state": "Madhya Pradesh",
      "place": "Cactus Garden",
      "popularity": "Medium",
      "description": "Botanical garden, cactus species.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1953,
      "city": "Ratlam",
      "state": "Madhya Pradesh",
      "place": "Kedareshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1954,
      "city": "Ratlam",
      "state": "Madhya Pradesh",
      "place": "Nagchandreshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1955,
      "city": "Ratlam",
      "state": "Madhya Pradesh",
      "place": "Sailana Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1956,
      "city": "Ratlam",
      "state": "Madhya Pradesh",
      "place": "Kharmour Bird Sanctuary",
      "popularity": "Medium",
      "description": "Bird sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1957,
      "city": "Ratnagiri",
      "state": "Maharashtra",
      "place": "Ratnadurg Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1958,
      "city": "Ratnagiri",
      "state": "Maharashtra",
      "place": "Ganpatipule Beach",
      "popularity": "Medium",
      "description": "Scenic beach, water sports activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1959,
      "city": "Ratnagiri",
      "state": "Maharashtra",
      "place": "Thibaw Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1960,
      "city": "Ratnagiri",
      "state": "Maharashtra",
      "place": "Velneshwar Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1961,
      "city": "Ratnagiri",
      "state": "Maharashtra",
      "place": "Thiba Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1962,
      "city": "Ratnagiri",
      "state": "Maharashtra",
      "place": "Ratnadurga Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1963,
      "city": "Ratnagiri",
      "state": "Maharashtra",
      "place": "Ratnagiri Lighthouse",
      "popularity": "Medium",
      "description": "Lighthouse, scenic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1964,
      "city": "Ratnagiri",
      "state": "Maharashtra",
      "place": "Palshet",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1965,
      "city": "Ratnagiri",
      "state": "Maharashtra",
      "place": "Ganapatipule Beach",
      "popularity": "High",
      "description": "Scenic beach, temple nearby.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1966,
      "city": "Rayachoty",
      "state": "Andhra Pradesh",
      "place": "Rayachoti",
      "popularity": "Medium",
      "description": "Town, urban area.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1967,
      "city": "Rayachoty",
      "state": "Andhra Pradesh",
      "place": "ISKCON Temple, Rayachoti",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1968,
      "city": "Rewa",
      "state": "Madhya Pradesh",
      "place": "White Tiger Safari",
      "popularity": "Medium",
      "description": "Safari park, wildlife conservation.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1969,
      "city": "Rewa",
      "state": "Madhya Pradesh",
      "place": "Chachai Waterfall",
      "popularity": "High",
      "description": "Scenic waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1970,
      "city": "Rewa",
      "state": "Madhya Pradesh",
      "place": "Chachai Falls",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1971,
      "city": "Rewa",
      "state": "Madhya Pradesh",
      "place": "Rani Talab",
      "popularity": "Medium",
      "description": "Lake, scenic surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1972,
      "city": "Rewa",
      "state": "Madhya Pradesh",
      "place": "Keoti Falls",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1973,
      "city": "Rewa",
      "state": "Madhya Pradesh",
      "place": "Museum of Rewa",
      "popularity": "Medium",
      "description": "Museum, historical artifacts.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 1974,
      "city": "Rewa",
      "state": "Madhya Pradesh",
      "place": "Rewa Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1975,
      "city": "Rewa",
      "state": "Madhya Pradesh",
      "place": "Baghela Museum",
      "popularity": "Medium",
      "description": "Museum, historical artifacts.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1976,
      "city": "Rewari",
      "state": "Haryana",
      "place": "Bada Talab",
      "popularity": "Medium",
      "description": "Lake, boating facilities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 1977,
      "city": "Rewari",
      "state": "Haryana",
      "place": "Masani Barrage",
      "popularity": "Medium",
      "description": "Dam, scenic surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 1978,
      "city": "Rewari",
      "state": "Haryana",
      "place": "Moti Sagar Lake",
      "popularity": "Medium",
      "description": "Lake, picnic spot.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1979,
      "city": "Rewari",
      "state": "Haryana",
      "place": "Qila Rewari Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 1980,
      "city": "Rewari",
      "state": "Haryana",
      "place": "Brick Fort",
      "popularity": "Medium",
      "description": "Historical fort, ruins.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1981,
      "city": "Rishikesh",
      "state": "Uttarakhand",
      "place": "Laxman Jhula",
      "popularity": "Medium",
      "description": "Hanging bridge, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 1982,
      "city": "Rishikesh",
      "state": "Uttarakhand",
      "place": "Triveni Ghat",
      "popularity": "Medium",
      "description": "Ghat, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1983,
      "city": "Rishikesh",
      "state": "Uttarakhand",
      "place": "Neelkanth Mahadev Temple, Rishikesh",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1984,
      "city": "Robertsonpet",
      "state": "Karnataka",
      "place": "Kolar Gold Fields",
      "popularity": "Medium",
      "description": "Historical gold mining town.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 1985,
      "city": "Robertsonpet",
      "state": "Karnataka",
      "place": "Anderson Church",
      "popularity": "Medium",
      "description": "Christian church, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 1986,
      "city": "Robertsonpet",
      "state": "Karnataka",
      "place": "Roerich Art Gallery",
      "popularity": "Medium",
      "description": "Art gallery, paintings exhibition.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 1987,
      "city": "Rohtak",
      "state": "Haryana",
      "place": "Tilyar Lake",
      "popularity": "Medium",
      "description": "Lake, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1988,
      "city": "Rohtak",
      "state": "Haryana",
      "place": "Banni Khera Farm",
      "popularity": "Medium",
      "description": "Farm, agricultural activities.",
      "type": "Village",
      "budget": 1500
    },
    {
      "Index": 1989,
      "city": "Rohtak",
      "state": "Haryana",
      "place": "Shri Balaji Temple, Rohtak",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 1990,
      "city": "Rohtak",
      "state": "Haryana",
      "place": "Maharishi Dayanand University",
      "popularity": "Medium",
      "description": "University campus, educational center.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 1991,
      "city": "Rohtak",
      "state": "Haryana",
      "place": "Monkey Business Adventure Park",
      "popularity": "Medium",
      "description": "Adventure park, ziplining, paintball.",
      "type": "Entertainment",
      "budget": 1500
    },
    {
      "Index": 1992,
      "city": "Roing",
      "state": "Arunachal Pradesh",
      "place": "Mayudia Pass, Roing",
      "popularity": "High",
      "description": "Mountain pass, scenic views.",
      "type": "Adventure",
      "budget": 2000
    },
    {
      "Index": 1993,
      "city": "Roing",
      "state": "Arunachal Pradesh",
      "place": "Mehao Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, diverse flora and fauna.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 1994,
      "city": "Roorkee",
      "state": "Uttarakhand",
      "place": "Indian Institute of Technology Roorkee",
      "popularity": "Medium",
      "description": "Technical institute, educational campus.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 1995,
      "city": "Roorkee",
      "state": "Uttarakhand",
      "place": "Roorkee Cantonment",
      "popularity": "Medium",
      "description": "Military cantonment, historical significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 1996,
      "city": "Roorkee",
      "state": "Uttarakhand",
      "place": "Solani Aqueduct",
      "popularity": "Medium",
      "description": "Aqueduct, architectural beauty.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 1997,
      "city": "Roorkee",
      "state": "Uttarakhand",
      "place": "Roorkee Group Museum and Archives",
      "popularity": "Medium",
      "description": "Museum, historical artifacts.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 1998,
      "city": "Roorkee",
      "state": "Uttarakhand",
      "place": "Indian Institute of Technology (IIT) Roorkee",
      "popularity": "Medium",
      "description": "Technical institute, educational campus.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 1999,
      "city": "Rourkela",
      "state": "Odisha",
      "place": "Hanuman Vatika",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2000,
      "city": "Rourkela",
      "state": "Odisha",
      "place": "Pitamahal Dam",
      "popularity": "Medium",
      "description": "Dam on Brahmani River, scenic surroundings.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2001,
      "city": "Rourkela",
      "state": "Odisha",
      "place": "Darjeeng Picnic Spot",
      "popularity": "Medium",
      "description": "Picnic spot, natural surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2002,
      "city": "Rourkela",
      "state": "Odisha",
      "place": "Vedavyas Temple",
      "popularity": "High",
      "description": "Hindu temple, scenic surroundings.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2003,
      "city": "Rudrapur",
      "state": "Uttarakhand",
      "place": "Giri Sarovar",
      "popularity": "Medium",
      "description": "Holy lake, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2004,
      "city": "Rudrapur",
      "state": "Uttarakhand",
      "place": "Atariya Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2005,
      "city": "Sabroom",
      "state": "Tripura",
      "place": "Sabroom Beach",
      "popularity": "High",
      "description": "Beach, water sports.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2006,
      "city": "Sabroom",
      "state": "Tripura",
      "place": "Chobimura",
      "popularity": "Medium",
      "description": "Cultural site, rock carvings.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 2007,
      "city": "Sagar",
      "state": "Madhya Pradesh",
      "place": "Damoh Waterfall",
      "popularity": "Medium",
      "description": "Scenic waterfall, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2008,
      "city": "Sagar",
      "state": "Madhya Pradesh",
      "place": "Moti Mahal, Sagar",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2009,
      "city": "Sagar",
      "state": "Madhya Pradesh",
      "place": "Ken Gharial Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, gharial conservation.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2010,
      "city": "Sagar",
      "state": "Madhya Pradesh",
      "place": "Rahatgarh Waterfalls",
      "popularity": "High",
      "description": "Scenic waterfall, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2011,
      "city": "Sagar",
      "state": "Madhya Pradesh",
      "place": "Sagar Lake",
      "popularity": "Medium",
      "description": "Lake, boating and recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2012,
      "city": "Sagar",
      "state": "Madhya Pradesh",
      "place": "Jhanda Fair",
      "popularity": "Grounds",
      "description": "Fairground, religious festival.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2013,
      "city": "Saharanpur",
      "state": "Uttar Pradesh",
      "place": "Jain Temple, Shri Digambar Jain Bada Mandir",
      "popularity": "High",
      "description": "Jain temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2014,
      "city": "Saharanpur",
      "state": "Uttar Pradesh",
      "place": "Shakumbhari Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, ancient shrine.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2015,
      "city": "Saharanpur",
      "state": "Uttar Pradesh",
      "place": "Kala Kutir",
      "popularity": "Medium",
      "description": "Art gallery, cultural exhibits.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 2016,
      "city": "Saharanpur",
      "state": "Uttar Pradesh",
      "place": "Panjab University Regional Centre",
      "popularity": "Medium",
      "description": "University campus, educational facilities.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 2017,
      "city": "Saharsa",
      "state": "Bihar",
      "place": "Surya Mandir, Saharsa",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2018,
      "city": "Saharsa",
      "state": "Bihar",
      "place": "Baba Mahadev Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2019,
      "city": "Saharsa",
      "state": "Bihar",
      "place": "Patna Ghat",
      "popularity": "Medium",
      "description": "Ghat, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2020,
      "city": "Saiha",
      "state": "Mizoram",
      "place": "Saiha Zoological Park",
      "popularity": "High",
      "description": "Zoological park, wildlife conservation.",
      "type": "Wildlife",
      "budget": 1000
    },
    {
      "Index": 2021,
      "city": "Saiha",
      "state": "Mizoram",
      "place": "Saiha Lung",
      "popularity": "High",
      "description": "Lake, boating and fishing.",
      "type": "Entertainment",
      "budget": 1500
    },
    {
      "Index": 2022,
      "city": "Saiha",
      "state": "Mizoram",
      "place": "Turial Hydroelectric Project",
      "popularity": "Medium",
      "description": "Hydroelectric power project, scenic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2023,
      "city": "Saitual",
      "state": "Mizoram",
      "place": "Saitual Presbyterian Church",
      "popularity": "High",
      "description": "Church, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2024,
      "city": "Saitual",
      "state": "Mizoram",
      "place": "Saitual Lake",
      "popularity": "Medium",
      "description": "Lake, scenic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2025,
      "city": "Saitual",
      "state": "Mizoram",
      "place": "Tawi Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2026,
      "city": "Salem",
      "state": "Tamil Nadu",
      "place": "Yercaud",
      "popularity": "High",
      "description": "Hill station, scenic beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2027,
      "city": "Salem",
      "state": "Tamil Nadu",
      "place": "Kurumbapatti Zoological Park",
      "popularity": "Medium",
      "description": "Zoo with regional wildlife species.",
      "type": "Wildlife",
      "budget": 1500
    },
    {
      "Index": 2028,
      "city": "Salem",
      "state": "Tamil Nadu",
      "place": "Sri Kottai Mariamman Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2029,
      "city": "Salem",
      "state": "Tamil Nadu",
      "place": "Sri Sugavaneshwarar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2030,
      "city": "Salem",
      "state": "Tamil Nadu",
      "place": "Kailasanathar Temple, Salem",
      "popularity": "Medium",
      "description": "Hindu temple, architectural significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2031,
      "city": "Salem",
      "state": "Tamil Nadu",
      "place": "Sugavaneshwarar Temple",
      "popularity": "Low",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2032,
      "city": "Salem",
      "state": "Tamil Nadu",
      "place": "Sankagiri Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2033,
      "city": "Salem",
      "state": "Tamil Nadu",
      "place": "Mettur Dam",
      "popularity": "High",
      "description": "Large dam, hydroelectric power generation.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2034,
      "city": "Samalkot",
      "state": "Andhra Pradesh",
      "place": "Adikesava Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2035,
      "city": "Samalkot",
      "state": "Andhra Pradesh",
      "place": "Kumararama Bhimeswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2036,
      "city": "Samalkot",
      "state": "Andhra Pradesh",
      "place": "Kukkuteswara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2037,
      "city": "Samalkot",
      "state": "Andhra Pradesh",
      "place": "Kotipalli Bus Stand",
      "popularity": "Medium",
      "description": "Bus station, transportation.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 2038,
      "city": "Samba",
      "state": "Jammu and Kashmir",
      "place": "Mansar Lake",
      "popularity": "Medium",
      "description": "Lake, boating, wildlife sanctuary nearby.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2039,
      "city": "Samba",
      "state": "Jammu and Kashmir",
      "place": "Purmandal",
      "popularity": "Medium",
      "description": "Hindu pilgrimage site, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2040,
      "city": "Sambalpur",
      "state": "Odisha",
      "place": "Hirakud Dam",
      "popularity": "Medium",
      "description": "Dam, hydroelectric power generation.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2041,
      "city": "Sambalpur",
      "state": "Odisha",
      "place": "Ushakothi Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, conservation.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2042,
      "city": "Sambalpur",
      "state": "Odisha",
      "place": "Gandhi Minar",
      "popularity": "Medium",
      "description": "Memorial, honoring Mahatma Gandhi.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 2043,
      "city": "Sambalpur",
      "state": "Odisha",
      "place": "Samaleswari Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2044,
      "city": "Sambhal",
      "state": "Uttar Pradesh",
      "place": "Kalapind",
      "popularity": "Medium",
      "description": "Hindu pilgrimage site, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2045,
      "city": "Sambhal",
      "state": "Uttar Pradesh",
      "place": "Ata Muslim Tomb",
      "popularity": "Medium",
      "description": "Islamic tomb, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2046,
      "city": "Sambhal",
      "state": "Uttar Pradesh",
      "place": "Kunj Bihari Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2047,
      "city": "Sambhal",
      "state": "Uttar Pradesh",
      "place": "Kosi Kalan",
      "popularity": "Medium",
      "description": "Historical site, religious rituals.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2048,
      "city": "Sambhal",
      "state": "Uttar Pradesh",
      "place": "Shri Chakratirth Temple, Sambhal",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2049,
      "city": "Sambhal",
      "state": "Uttar Pradesh",
      "place": "Chandausi Range",
      "popularity": "Medium",
      "description": "Forest area, nature trekking.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2050,
      "city": "Sangli",
      "state": "Maharashtra",
      "place": "Ramshej Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2051,
      "city": "Sangli",
      "state": "Maharashtra",
      "place": "Kaundanyapur Nisarg Vaan",
      "popularity": "Medium",
      "description": "Nature reserve, wildlife conservation.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2052,
      "city": "Sangli",
      "state": "Maharashtra",
      "place": "Ganpati Mandir, Sangli",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2053,
      "city": "Sangli",
      "state": "Maharashtra",
      "place": "Sangli Ganpati Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2054,
      "city": "Sangli",
      "state": "Maharashtra",
      "place": "Krishna River",
      "popularity": "Medium",
      "description": "River, boating, and picnicking.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2055,
      "city": "Sangli",
      "state": "Maharashtra",
      "place": "Miraj Dargah",
      "popularity": "Medium",
      "description": "Sufi shrine, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2056,
      "city": "Sangli-Miraj",
      "state": "Maharashtra",
      "place": "Sangli Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2057,
      "city": "Sangli-Miraj",
      "state": "Maharashtra",
      "place": "Khidrapur Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2058,
      "city": "Sangli-Miraj",
      "state": "Maharashtra",
      "place": "Ganpati Temple, Sangli-Miraj",
      "popularity": "Medium",
      "description": "Hindu temple, dedicated to Lord Ganesh.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2059,
      "city": "Sasaram",
      "state": "Bihar",
      "place": "Tomb of Sher Shah Suri",
      "popularity": "High",
      "description": "Historical tomb, architectural significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2060,
      "city": "Sasaram",
      "state": "Bihar",
      "place": "Rohtasgarh Fort",
      "popularity": "High",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 2061,
      "city": "Satara",
      "state": "Maharashtra",
      "place": "Sajjangad",
      "popularity": "Medium",
      "description": "Fortress, pilgrimage site.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2062,
      "city": "Satara",
      "state": "Maharashtra",
      "place": "Kaas Plateau",
      "popularity": "High",
      "description": "Plateau, UNESCO World Heritage Site.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2063,
      "city": "Satara",
      "state": "Maharashtra",
      "place": "Thoseghar Waterfall",
      "popularity": "Medium",
      "description": "Scenic waterfall, nature trails.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2064,
      "city": "Satara",
      "state": "Maharashtra",
      "place": "Thoseghar Waterfalls",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2065,
      "city": "Satara",
      "state": "Maharashtra",
      "place": "Ajinkyatara Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2066,
      "city": "Satara",
      "state": "Maharashtra",
      "place": "Kaas Lake",
      "popularity": "Medium",
      "description": "Lake, boating.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2067,
      "city": "Satara",
      "state": "Maharashtra",
      "place": "Sajjangad Fort",
      "popularity": "Medium",
      "description": "Historical fort, religious significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2068,
      "city": "Satara",
      "state": "Maharashtra",
      "place": "Panchgani",
      "popularity": "Medium",
      "description": "Hill station, scenic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2069,
      "city": "Satara",
      "state": "Maharashtra",
      "place": "Kas Pathar",
      "popularity": "Medium",
      "description": "Flower plateau, natural beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2070,
      "city": "Satara",
      "state": "Maharashtra",
      "place": "Vajrai Waterfall",
      "popularity": "High",
      "description": "Tallest waterfall in Maharashtra.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2071,
      "city": "Sathupalli",
      "state": "Telangana",
      "place": "Chillarige Gardens",
      "popularity": "Medium",
      "description": "Garden, botanical species.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2072,
      "city": "Satna",
      "state": "Madhya Pradesh",
      "place": "Ramvan Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2073,
      "city": "Satna",
      "state": "Madhya Pradesh",
      "place": "Tulsi Museum",
      "popularity": "Medium",
      "description": "Museum showcasing artifacts and sculptures.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 2074,
      "city": "Satna",
      "state": "Madhya Pradesh",
      "place": "Maihar Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2075,
      "city": "Satna",
      "state": "Madhya Pradesh",
      "place": "Dubri Mata Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2076,
      "city": "Satna",
      "state": "Madhya Pradesh",
      "place": "Satna Cement Works",
      "popularity": "Medium",
      "description": "Industrial site, cement manufacturing.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 2077,
      "city": "Satna",
      "state": "Madhya Pradesh",
      "place": "Maihar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2078,
      "city": "Satna",
      "state": "Madhya Pradesh",
      "place": "Kala Pahad",
      "popularity": "Medium",
      "description": "Hill station, panoramic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2079,
      "city": "Satna",
      "state": "Madhya Pradesh",
      "place": "Ram Van Gaman Path",
      "popularity": "Medium",
      "description": "Pilgrimage route, associated with Lord Rama.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2080,
      "city": "Sattenapalle",
      "state": "Andhra Pradesh",
      "place": "Amaravathi Mahachaitya",
      "popularity": "Medium",
      "description": "Buddhist monument, historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2081,
      "city": "Sattenapalle",
      "state": "Andhra Pradesh",
      "place": "Palakayalu",
      "popularity": "Medium",
      "description": "Traditional food, local cuisine.",
      "type": "Culinary",
      "budget": 1500
    },
    {
      "Index": 2082,
      "city": "Satyamangalam",
      "state": "Tamil Nadu",
      "place": "Bhavanisagar Dam",
      "popularity": "Medium",
      "description": "Dam, scenic surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2083,
      "city": "Satyamangalam",
      "state": "Tamil Nadu",
      "place": "Sathyamangalam Tiger Reserve",
      "popularity": "High",
      "description": "Wildlife sanctuary, tiger conservation.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2084,
      "city": "Satyamangalam",
      "state": "Tamil Nadu",
      "place": "Sathyamangalam Forest",
      "popularity": "Medium",
      "description": "Forest reserve, trekking trails.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2085,
      "city": "Senapati",
      "state": "Manipur",
      "place": "Khonghampat Orchidarium",
      "popularity": "High",
      "description": "Orchidarium, diverse orchid species.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2086,
      "city": "Senapati",
      "state": "Manipur",
      "place": "Maram Khullen",
      "popularity": "High",
      "description": "Naga village, cultural heritage.",
      "type": "Village",
      "budget": 1000
    },
    {
      "Index": 2087,
      "city": "Senapati",
      "state": "Manipur",
      "place": "Dzuko Valley",
      "popularity": "High",
      "description": "Valley, trekking, and camping.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2088,
      "city": "Senapati",
      "state": "Manipur",
      "place": "Mao, Senapati",
      "popularity": "High",
      "description": "Town, transit point to Manipur-Nagaland border.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 2089,
      "city": "Senapati",
      "state": "Manipur",
      "place": "Song Song Waterfall",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2090,
      "city": "Senapati",
      "state": "Manipur",
      "place": "Barak River",
      "popularity": "High",
      "description": "River, scenic beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2091,
      "city": "Senapati",
      "state": "Manipur",
      "place": "Mao War Cemetery",
      "popularity": "Medium",
      "description": "War cemetery, historical significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2092,
      "city": "Senapati",
      "state": "Manipur",
      "place": "Tadubi",
      "popularity": "High",
      "description": "Town, cultural heritage.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 2093,
      "city": "Senapati",
      "state": "Manipur",
      "place": "Mao Naga Village",
      "popularity": "Medium",
      "description": "Naga village, cultural immersion.",
      "type": "Village",
      "budget": 1500
    },
    {
      "Index": 2094,
      "city": "Senapati",
      "state": "Manipur",
      "place": "Sadar Hills",
      "popularity": "High",
      "description": "Hills, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2095,
      "city": "Serchhip",
      "state": "Mizoram",
      "place": "Tuirihiau Waterfall",
      "popularity": "High",
      "description": "Scenic waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2096,
      "city": "Serchhip",
      "state": "Mizoram",
      "place": "Zobawk Sports Academy",
      "popularity": "Medium",
      "description": "Sports academy, training facilities.",
      "type": "Entertainment",
      "budget": 1500
    },
    {
      "Index": 2097,
      "city": "Serchhip",
      "state": "Mizoram",
      "place": "Tlungvel Adventure Park",
      "popularity": "Medium",
      "description": "Adventure park, ziplining.",
      "type": "Adventure",
      "budget": 2000
    },
    {
      "Index": 2098,
      "city": "Shahjahanpur",
      "state": "Uttar Pradesh",
      "place": "Jalpa Devi Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2099,
      "city": "Shahjahanpur",
      "state": "Uttar Pradesh",
      "place": "Chintaharan Hanuman Temple",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2100,
      "city": "Shahjahanpur",
      "state": "Uttar Pradesh",
      "place": "Company Garden",
      "popularity": "Medium",
      "description": "Urban park, botanical garden.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2101,
      "city": "Shahjahanpur",
      "state": "Uttar Pradesh",
      "place": "Jamma Masjid, Shahjahanpur",
      "popularity": "Medium",
      "description": "Islamic mosque, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2102,
      "city": "Shahjahanpur",
      "state": "Uttar Pradesh",
      "place": "Sri Ram Temple, Shahjahanpur",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2103,
      "city": "Shahjahanpur",
      "state": "Uttar Pradesh",
      "place": "Guru Nanak Gurudwara, Shahjahanpur",
      "popularity": "Medium",
      "description": "Sikh gurdwara, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2104,
      "city": "Shillong",
      "state": "Meghalaya",
      "place": "Umiam Lake",
      "popularity": "High",
      "description": "Scenic lake, water sports.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2105,
      "city": "Shillong",
      "state": "Meghalaya",
      "place": "Elephant Falls",
      "popularity": "High",
      "description": "Spectacular waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2106,
      "city": "Shillong",
      "state": "Meghalaya",
      "place": "Shillong Peak",
      "popularity": "High",
      "description": "Hilltop viewpoint, panoramic views.",
      "type": "Adventure",
      "budget": 2000
    },
    {
      "Index": 2107,
      "city": "Shillong",
      "state": "Meghalaya",
      "place": "Ward's Lake",
      "popularity": "Medium",
      "description": "Lake, boating, and leisure.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2108,
      "city": "Shillong",
      "state": "Meghalaya",
      "place": "Don Bosco Centre for Indigenous Cultures",
      "popularity": "High",
      "description": "Museum, cultural heritage.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 2109,
      "city": "Shillong",
      "state": "Meghalaya",
      "place": "Cathedral of Mary Help of Christians",
      "popularity": "Medium",
      "description": "Christian church, architectural beauty.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2110,
      "city": "Shillong",
      "state": "Meghalaya",
      "place": "David Scott Trail",
      "popularity": "High",
      "description": "Trekking trail, scenic hike.",
      "type": "Adventure",
      "budget": 1000
    },
    {
      "Index": 2111,
      "city": "Shimla",
      "state": "Himachal Pradesh",
      "place": "Viceregal Lodge",
      "popularity": "Medium",
      "description": "Historical building, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 2112,
      "city": "Shimla",
      "state": "Himachal Pradesh",
      "place": "Indian Institute of Advanced Study",
      "popularity": "Medium",
      "description": "Educational institution, research center.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 2113,
      "city": "Shimla",
      "state": "Himachal Pradesh",
      "place": "Kamna Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2114,
      "city": "Shimla",
      "state": "Himachal Pradesh",
      "place": "The Ridge",
      "popularity": "Medium",
      "description": "Promenade, scenic views, shopping.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 2115,
      "city": "Shimla",
      "state": "Himachal Pradesh",
      "place": "Jakhoo Temple",
      "popularity": "Medium",
      "description": "Hindu temple, Hanuman statue.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2116,
      "city": "Shimoga",
      "state": "Karnataka",
      "place": "Jog Falls",
      "popularity": "High",
      "description": "Spectacular waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2117,
      "city": "Shimoga",
      "state": "Karnataka",
      "place": "Kodachadri",
      "popularity": "High",
      "description": "Hill station, trekking trails.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2118,
      "city": "Shimoga",
      "state": "Karnataka",
      "place": "Sakrebailu Elephant Camp",
      "popularity": "Medium",
      "description": "Elephant camp, interaction with elephants.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2119,
      "city": "Shivpuri",
      "state": "Madhya Pradesh",
      "place": "Madhav National Park",
      "popularity": "Medium",
      "description": "National park, wildlife spotting.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2120,
      "city": "Shivpuri",
      "state": "Madhya Pradesh",
      "place": "Bhadaiya Kund",
      "popularity": "Medium",
      "description": "Water reservoir, picnic spot.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2121,
      "city": "Shivpuri",
      "state": "Madhya Pradesh",
      "place": "Kolar Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2122,
      "city": "Shrirampur",
      "state": "Maharashtra",
      "place": "Krishna Mandir, Shrirampur",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2123,
      "city": "Shrirampur",
      "state": "Maharashtra",
      "place": "Anjali Garden, Shrirampur",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2124,
      "city": "Siddipet",
      "state": "Telangana",
      "place": "Kondapochamma Sagar Reservoir",
      "popularity": "High",
      "description": "Water reservoir, scenic views.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2125,
      "city": "Siddipet",
      "state": "Telangana",
      "place": "Medak Church",
      "popularity": "High",
      "description": "Historical church, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2126,
      "city": "Siddipet",
      "state": "Telangana",
      "place": "Kaleshwaram Temple",
      "popularity": "High",
      "description": "Hindu temple, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2127,
      "city": "Siddipet",
      "state": "Telangana",
      "place": "Pocharam Dam and Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2128,
      "city": "Siddipet",
      "state": "Telangana",
      "place": "Ramalingeshwara Temple",
      "popularity": "High",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2129,
      "city": "Siddipet",
      "state": "Telangana",
      "place": "Kondapochamma Temple",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2130,
      "city": "Siddipet",
      "state": "Telangana",
      "place": "Sri Laxminarasimha Swamy Temple",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2131,
      "city": "Siddipet",
      "state": "Telangana",
      "place": "Srirama Temple",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2132,
      "city": "Sikar",
      "state": "Rajasthan",
      "place": "Jeen Mata Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2133,
      "city": "Sikar",
      "state": "Rajasthan",
      "place": "Sikar Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2134,
      "city": "Sikar",
      "state": "Rajasthan",
      "place": "Khatu Shyamji Temple",
      "popularity": "Medium",
      "description": "Hindu temple, dedicated to Shyam Baba.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2135,
      "city": "Sikar",
      "state": "Rajasthan",
      "place": "Salasar Balaji Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2136,
      "city": "Sikar",
      "state": "Rajasthan",
      "place": "Jeen Mata Fair",
      "popularity": "Medium",
      "description": "Religious festival, cultural significance.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 2137,
      "city": "Silchar",
      "state": "Assam",
      "place": "Silchar Airport",
      "popularity": "Low",
      "description": "Airport, transportation hub.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 2138,
      "city": "Silchar",
      "state": "Assam",
      "place": "Banskandi Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2139,
      "city": "Silchar",
      "state": "Assam",
      "place": "Maniharan Tunnel",
      "popularity": "Medium",
      "description": "Historical tunnel, architectural significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2140,
      "city": "Silchar",
      "state": "Assam",
      "place": "Kachari Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2141,
      "city": "Silchar",
      "state": "Assam",
      "place": "Bhubaneswari Temple",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual sanctuary.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2142,
      "city": "Silchar",
      "state": "Assam",
      "place": "Silchar Tea Garden",
      "popularity": "Medium",
      "description": "Tea estate, scenic beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2143,
      "city": "Siliguri",
      "state": "West Bengal",
      "place": "Jorpokhri Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2144,
      "city": "Siliguri",
      "state": "West Bengal",
      "place": "Salugara Monastery",
      "popularity": "Medium",
      "description": "Buddhist monastery, spiritual retreat.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2145,
      "city": "Siliguri",
      "state": "West Bengal",
      "place": "City Centre Mall",
      "popularity": "Medium",
      "description": "Shopping mall, entertainment complex.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 2146,
      "city": "Siliguri",
      "state": "West Bengal",
      "place": "Mahananda Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, nature trails.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2147,
      "city": "Siliguri",
      "state": "West Bengal",
      "place": "City Centre Siliguri",
      "popularity": "Medium",
      "description": "Shopping mall, entertainment complex.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 2148,
      "city": "Silvassa",
      "state": "Dadra and Nagar Haveli",
      "place": "Silvassa Vasona Lion Safari",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, lion safari.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2149,
      "city": "Silvassa",
      "state": "Dadra and Nagar Haveli",
      "place": "Tribal Cultural Museum",
      "popularity": "Medium",
      "description": "Museum showcasing tribal culture.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 2150,
      "city": "Silvassa",
      "state": "Dadra and Nagar Haveli",
      "place": "Swatik Garden",
      "popularity": "Medium",
      "description": "Lush garden, recreational area.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2151,
      "city": "Silvassa",
      "state": "Dadra and Nagar Haveli",
      "place": "Bal Udyan",
      "popularity": "Medium",
      "description": "Children's park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2152,
      "city": "Silvassa",
      "state": "Dadra and Nagar Haveli",
      "place": "Satmaliya Deer Park",
      "popularity": "Low",
      "description": "Deer park, wildlife conservation.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2153,
      "city": "Silvassa",
      "state": "Dadra and Nagar Haveli",
      "place": "Nakshatra Garden",
      "popularity": "Low",
      "description": "Scenic garden, astrology-themed.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2154,
      "city": "Silvassa",
      "state": "Dadra and Nagar Haveli",
      "place": "Vanganga Lake",
      "popularity": "Medium",
      "description": "Picturesque lake, boating, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2155,
      "city": "Silvassa",
      "state": "Dadra and Nagar Haveli",
      "place": "Khanvel Resort",
      "popularity": "Medium",
      "description": "Resort, recreational activities.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 2156,
      "city": "Singrauli",
      "state": "Madhya Pradesh",
      "place": "Rihand Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2157,
      "city": "Singrauli",
      "state": "Madhya Pradesh",
      "place": "Sasan Ultra Mega Power Project",
      "popularity": "Medium",
      "description": "Power plant, industrial area.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 2158,
      "city": "Sirsa",
      "state": "Haryana",
      "place": "Chaudhary Devi Lal Herbal Nature Park",
      "popularity": "Medium",
      "description": "Nature park, herbal garden.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2159,
      "city": "Sirsa",
      "state": "Haryana",
      "place": "Baba Sodal Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2160,
      "city": "Sirsa",
      "state": "Haryana",
      "place": "Sirsa Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2161,
      "city": "Sirsa",
      "state": "Haryana",
      "place": "Dera Sacha Sauda",
      "popularity": "Medium",
      "description": "Sikh gurdwara, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2162,
      "city": "Sirsa",
      "state": "Haryana",
      "place": "Baniya Talab",
      "popularity": "Medium",
      "description": "Water tank, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2163,
      "city": "Sitamarhi",
      "state": "Bihar",
      "place": "Sitamarhi",
      "popularity": "Medium",
      "description": "Town, urban area.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 2164,
      "city": "Sitamarhi",
      "state": "Bihar",
      "place": "Samrat Ashok Pillar",
      "popularity": "Medium",
      "description": "Historical monument, archaeological site.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2165,
      "city": "Sitamarhi",
      "state": "Bihar",
      "place": "Sarairanjan",
      "popularity": "Medium",
      "description": "Town, urban area.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 2166,
      "city": "Sitapur",
      "state": "Uttar Pradesh",
      "place": "Khajuraho Temple Complex",
      "popularity": "Medium",
      "description": "Hindu temple complex, UNESCO World Heritage Site.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2167,
      "city": "Sitapur",
      "state": "Uttar Pradesh",
      "place": "Harshavardhan Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2168,
      "city": "Sitapur",
      "state": "Uttar Pradesh",
      "place": "Chandrika Devi Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2169,
      "city": "Sivakasi",
      "state": "Tamil Nadu",
      "place": "Sri Pathira Kaliamman Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2170,
      "city": "Sivakasi",
      "state": "Tamil Nadu",
      "place": "Sri Kaliamman Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2171,
      "city": "Solapur",
      "state": "Maharashtra",
      "place": "Hipparga Lake",
      "popularity": "Medium",
      "description": "Picturesque lake, birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2172,
      "city": "Solapur",
      "state": "Maharashtra",
      "place": "Murarji Garden",
      "popularity": "Low",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2173,
      "city": "Solapur",
      "state": "Maharashtra",
      "place": "Akkalkot Swami Samarth Maharaj Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2174,
      "city": "Solapur",
      "state": "Maharashtra",
      "place": "Vijapur Narsinh Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2175,
      "city": "Solapur",
      "state": "Maharashtra",
      "place": "Bhuikot Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2176,
      "city": "Sonipat",
      "state": "Haryana",
      "place": "Murthal Dhaba",
      "popularity": "Medium",
      "description": "Restaurant, traditional Punjabi cuisine.",
      "type": "Culinary",
      "budget": 1000
    },
    {
      "Index": 2177,
      "city": "Sonipat",
      "state": "Haryana",
      "place": "Tomb of Khwaja Khizr",
      "popularity": "Medium",
      "description": "Historical tomb, pilgrimage site.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2178,
      "city": "Sonipat",
      "state": "Haryana",
      "place": "Baba Dham Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2179,
      "city": "Sonipat",
      "state": "Haryana",
      "place": "Murthal Dhabas",
      "popularity": "Medium",
      "description": "Restaurant, Punjabi cuisine.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 2180,
      "city": "Sopur",
      "state": "Jammu and Kashmir",
      "place": "Wular Lake",
      "popularity": "High",
      "description": "Lake, birdwatching, fishing.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2181,
      "city": "Sopur",
      "state": "Jammu and Kashmir",
      "place": "Ruins of Avantiswami Temple",
      "popularity": "Medium",
      "description": "Ancient Hindu temple ruins, historical significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2182,
      "city": "South Dumdum",
      "state": "West Bengal",
      "place": "Alipore Zoological Gardens",
      "popularity": "Medium",
      "description": "Zoo with diverse wildlife species.",
      "type": "Wildlife",
      "budget": 1000
    },
    {
      "Index": 2183,
      "city": "South Dumdum",
      "state": "West Bengal",
      "place": "Victoria Memorial Hall",
      "popularity": "Medium",
      "description": "Historical museum, colonial architecture.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 2184,
      "city": "Sri Ganganagar",
      "state": "Rajasthan",
      "place": "Ganga Canal",
      "popularity": "Medium",
      "description": "Canal, irrigation system.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2185,
      "city": "Sri Ganganagar",
      "state": "Rajasthan",
      "place": "Hindumalkot",
      "popularity": "Medium",
      "description": "Historical site, archaeological ruins.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2186,
      "city": "Sri Ganganagar",
      "state": "Rajasthan",
      "place": "Suratgarh Super Thermal Power Station",
      "popularity": "Medium",
      "description": "Power plant, industrial area.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 2187,
      "city": "Srikakulam",
      "state": "Andhra Pradesh",
      "place": "Arasavalli Sun Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2188,
      "city": "Srikakulam",
      "state": "Andhra Pradesh",
      "place": "Sri Kurmam Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2189,
      "city": "Srikakulam",
      "state": "Andhra Pradesh",
      "place": "Ramateertham",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2190,
      "city": "Srikakulam",
      "state": "Andhra Pradesh",
      "place": "Srikurmam Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2191,
      "city": "Srikakulam",
      "state": "Andhra Pradesh",
      "place": "Salihundam",
      "popularity": "Medium",
      "description": "Archaeological site, Buddhist stupas.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2192,
      "city": "Srikakulam",
      "state": "Andhra Pradesh",
      "place": "Kurmanathaswamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2193,
      "city": "Srikakulam",
      "state": "Andhra Pradesh",
      "place": "Sri Kurmam",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2194,
      "city": "Srikakulam",
      "state": "Andhra Pradesh",
      "place": "Srimukhalingam",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2195,
      "city": "Srikakulam",
      "state": "Andhra Pradesh",
      "place": "Kalijai Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2196,
      "city": "Srikakulam",
      "state": "Andhra Pradesh",
      "place": "Konark Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2197,
      "city": "Srinagar",
      "state": "Jammu and Kashmir",
      "place": "Dal Lake",
      "popularity": "High",
      "description": "Lake, houseboat stays, shikara rides.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2198,
      "city": "Srinagar",
      "state": "Jammu and Kashmir",
      "place": "Shalimar Bagh",
      "popularity": "Medium",
      "description": "Mughal garden, landscaped park.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2199,
      "city": "Srinagar",
      "state": "Jammu and Kashmir",
      "place": "Nishat Bagh",
      "popularity": "Medium",
      "description": "Mughal garden, terraced lawns.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2200,
      "city": "Surat",
      "state": "Gujarat",
      "place": "Dumas Beach",
      "popularity": "Medium",
      "description": "Popular beach, coastal views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2201,
      "city": "Surat",
      "state": "Gujarat",
      "place": "Sarthana Nature Park",
      "popularity": "Medium",
      "description": "Park with nature trails, butterfly park.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2202,
      "city": "Surat",
      "state": "Gujarat",
      "place": "Surat Castle",
      "popularity": "Low",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2203,
      "city": "Surat",
      "state": "Gujarat",
      "place": "Sardar Patel Museum",
      "popularity": "Medium",
      "description": "Museum, historical artifacts.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 2204,
      "city": "Surat",
      "state": "Gujarat",
      "place": "Amaazia Water Park",
      "popularity": "High",
      "description": "Water park, family entertainment.",
      "type": "Entertainment",
      "budget": 1500
    },
    {
      "Index": 2205,
      "city": "Surat",
      "state": "Gujarat",
      "place": "Gopi Talav",
      "popularity": "Medium",
      "description": "Artificial lake, boating facilities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2206,
      "city": "Surat",
      "state": "Gujarat",
      "place": "Dutch Garden",
      "popularity": "Medium",
      "description": "Garden, historical significance.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2207,
      "city": "Suryapet",
      "state": "Telangana",
      "place": "Chaya Someswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2208,
      "city": "Suryapet",
      "state": "Telangana",
      "place": "Chhaya Someswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2209,
      "city": "Suryapet",
      "state": "Telangana",
      "place": "Paladugu Lakshmi Narasimha Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2210,
      "city": "Tadepalligudem",
      "state": "Andhra Pradesh",
      "place": "Gopalakrishna Theatre",
      "popularity": "Medium",
      "description": "Movie theater, entertainment.",
      "type": "Entertainment",
      "budget": 1500
    },
    {
      "Index": 2211,
      "city": "Tadepalligudem",
      "state": "Andhra Pradesh",
      "place": "Bhimeswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2212,
      "city": "Tadepalligudem",
      "state": "Andhra Pradesh",
      "place": "Renuka Yellamma Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2213,
      "city": "Tadepalligudem",
      "state": "Andhra Pradesh",
      "place": "Tanuku",
      "popularity": "Medium",
      "description": "Town, urban area.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 2214,
      "city": "Tadepalligudem",
      "state": "Andhra Pradesh",
      "place": "Sivarama Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, nature trekking.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2215,
      "city": "Tadepalligudem",
      "state": "Andhra Pradesh",
      "place": "Sri Uma Sametha Lingeswara Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2216,
      "city": "Tadepalligudem",
      "state": "Andhra Pradesh",
      "place": "Chinchinada Bridge",
      "popularity": "Medium",
      "description": "Bridge, scenic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2217,
      "city": "Tadepalligudem",
      "state": "Andhra Pradesh",
      "place": "Sri Ramalayam",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2218,
      "city": "Tadepalligudem",
      "state": "Andhra Pradesh",
      "place": "Somaramam",
      "popularity": "Low",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2219,
      "city": "Tamenglong",
      "state": "Manipur",
      "place": "Zeilad Lake",
      "popularity": "High",
      "description": "Lake, scenic beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2220,
      "city": "Tamenglong",
      "state": "Manipur",
      "place": "Barak Waterfall",
      "popularity": "Medium",
      "description": "Waterfall, trekking destination.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2221,
      "city": "Tamenglong",
      "state": "Manipur",
      "place": "Tharon Cave",
      "popularity": "High",
      "description": "Limestone cave, spelunking.",
      "type": "Adventure",
      "budget": 1000
    },
    {
      "Index": 2222,
      "city": "Tamenglong",
      "state": "Manipur",
      "place": "Tamenglong Viewpoint",
      "popularity": "Medium",
      "description": "Scenic viewpoint, panoramic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2223,
      "city": "Tamenglong",
      "state": "Manipur",
      "place": "Tamenglong Church",
      "popularity": "Medium",
      "description": "Christian church, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2224,
      "city": "Tanuku",
      "state": "Andhra Pradesh",
      "place": "Ramalayam Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2225,
      "city": "Tanuku",
      "state": "Andhra Pradesh",
      "place": "Pedda Cheruvu",
      "popularity": "Medium",
      "description": "Lake, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2226,
      "city": "Tanuku",
      "state": "Andhra Pradesh",
      "place": "Gokul Theatre",
      "popularity": "Medium",
      "description": "Cinema hall, entertainment.",
      "type": "Entertainment",
      "budget": 2000
    },
    {
      "Index": 2227,
      "city": "Tawang",
      "state": "Arunachal Pradesh",
      "place": "Tawang Monastery",
      "popularity": "High",
      "description": "Tibetan Buddhist monastery, largest in India.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2228,
      "city": "Tawang",
      "state": "Arunachal Pradesh",
      "place": "Sela Pass",
      "popularity": "High",
      "description": "Mountain pass, snow-covered.",
      "type": "Adventure",
      "budget": 1500
    },
    {
      "Index": 2229,
      "city": "Tawang",
      "state": "Arunachal Pradesh",
      "place": "Tawang War Memorial",
      "popularity": "Medium",
      "description": "War memorial, historical significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2230,
      "city": "Tawang",
      "state": "Arunachal Pradesh",
      "place": "Pankang Teng Tso Lake",
      "popularity": "Medium",
      "description": "Lake, scenic beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2231,
      "city": "Tawang",
      "state": "Arunachal Pradesh",
      "place": "Gorichen Peak",
      "popularity": "High",
      "description": "Mountain peak, trekking.",
      "type": "Adventure",
      "budget": 1500
    },
    {
      "Index": 2232,
      "city": "Tenali",
      "state": "Andhra Pradesh",
      "place": "Tenali Rama Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2233,
      "city": "Tenali",
      "state": "Andhra Pradesh",
      "place": "Repalle",
      "popularity": "Medium",
      "description": "Town, urban area.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 2234,
      "city": "Tezpur",
      "state": "Assam",
      "place": "Agnigarh",
      "popularity": "Medium",
      "description": "Historical site, panoramic views.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 2235,
      "city": "Tezpur",
      "state": "Assam",
      "place": "Cole Park",
      "popularity": "Medium",
      "description": "Public park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2236,
      "city": "Tezpur",
      "state": "Assam",
      "place": "Kalia Bhomora Bridge",
      "popularity": "High",
      "description": "Bridge, architectural marvel.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2237,
      "city": "Tezpur",
      "state": "Assam",
      "place": "Mahabhairab Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2238,
      "city": "Tezpur",
      "state": "Assam",
      "place": "Nameri National Park",
      "popularity": "High",
      "description": "National park, wildlife sanctuary.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2239,
      "city": "Tezu",
      "state": "Arunachal Pradesh",
      "place": "Hayuliang",
      "popularity": "Medium",
      "description": "Hill station, scenic beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2240,
      "city": "Thane",
      "state": "Maharashtra",
      "place": "Upvan Lake",
      "popularity": "High",
      "description": "Scenic beauty, jogging tracks.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2241,
      "city": "Thane",
      "state": "Maharashtra",
      "place": "Tikuji-ni-Wadi",
      "popularity": "Medium",
      "description": "Amusement park, water slides.",
      "type": "Entertainment",
      "budget": 2000
    },
    {
      "Index": 2242,
      "city": "Thane",
      "state": "Maharashtra",
      "place": "Tansa Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife spotting, nature trails.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2243,
      "city": "Thane",
      "state": "Maharashtra",
      "place": "Kanheri Caves",
      "popularity": "High",
      "description": "Buddhist caves, ancient rock-cut architecture.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 2244,
      "city": "Thane",
      "state": "Maharashtra",
      "place": "Kashid Beach",
      "popularity": "Medium",
      "description": "Pristine beach, water sports.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2245,
      "city": "Thane",
      "state": "Maharashtra",
      "place": "Suraj Water Park",
      "popularity": "Medium",
      "description": "Water park, family entertainment.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 2246,
      "city": "Thanesar",
      "state": "Haryana",
      "place": "Thanesar Historical Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2247,
      "city": "Thanesar",
      "state": "Haryana",
      "place": "Prithvi Raj Memorial Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2248,
      "city": "Thanesar",
      "state": "Haryana",
      "place": "Sheikh Chilli's Tomb",
      "popularity": "Medium",
      "description": "Tomb, historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2249,
      "city": "Thanjavur",
      "state": "Tamil Nadu",
      "place": "Brihadeeswarar Temple",
      "popularity": "High",
      "description": "Hindu temple, UNESCO World Heritage Site.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2250,
      "city": "Thanjavur",
      "state": "Tamil Nadu",
      "place": "Thanjavur Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2251,
      "city": "Thanjavur",
      "state": "Tamil Nadu",
      "place": "Schwartz Church",
      "popularity": "Medium",
      "description": "Christian church, colonial architecture.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2252,
      "city": "Thanjavur",
      "state": "Tamil Nadu",
      "place": "Thanjavur Royal Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 2253,
      "city": "Thanjavur",
      "state": "Tamil Nadu",
      "place": "Saraswathi Mahal Library",
      "popularity": "Medium",
      "description": "Library, historical manuscripts.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 2254,
      "city": "Thanjavur",
      "state": "Tamil Nadu",
      "place": "Thanjavur Maratha Palace",
      "popularity": "Medium",
      "description": "Historical palace, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2255,
      "city": "Thanjavur",
      "state": "Tamil Nadu",
      "place": "Thanjavur Art Gallery",
      "popularity": "Low",
      "description": "Art gallery, traditional Tanjore paintings.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 2256,
      "city": "Thiruvananthapuram",
      "state": "Kerala",
      "place": "Padmanabhaswamy Temple",
      "popularity": "High",
      "description": "Sacred temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2257,
      "city": "Thiruvananthapuram",
      "state": "Kerala",
      "place": "Napier Museum",
      "popularity": "Medium",
      "description": "Art and historical artifacts collection.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 2258,
      "city": "Thiruvananthapuram",
      "state": "Kerala",
      "place": "Kovalam Beach",
      "popularity": "High",
      "description": "Popular beach, water sports activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2259,
      "city": "Thiruvananthapuram",
      "state": "Kerala",
      "place": "Neyyar Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, eco-tourism activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2260,
      "city": "Thiruvananthapuram",
      "state": "Kerala",
      "place": "Agasthyakoodam",
      "popularity": "Medium",
      "description": "Trekking destination, biodiversity hotspot.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2261,
      "city": "Thiruvananthapuram",
      "state": "Kerala",
      "place": "Chalai Bazaar, Kerala",
      "popularity": "Low",
      "description": "Bustling market, local products, street food.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 2262,
      "city": "Thiruvananthapuram",
      "state": "Kerala",
      "place": "Kuthiramalika Palace Museum",
      "popularity": "Medium",
      "description": "Historical palace, art and artifacts.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2263,
      "city": "Thiruvananthapuram",
      "state": "Kerala",
      "place": "Kerala Science and Technology Museum",
      "popularity": "Medium",
      "description": "Interactive science museum, exhibits.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 2264,
      "city": "Thoothukudi",
      "state": "Tamil Nadu",
      "place": "Thoothukudi Port",
      "popularity": "Medium",
      "description": "Seaport, shipping hub.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 2265,
      "city": "Thoothukudi",
      "state": "Tamil Nadu",
      "place": "Our Lady of Snows Basilica",
      "popularity": "Medium",
      "description": "Christian church, architectural beauty.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2266,
      "city": "Thoothukudi",
      "state": "Tamil Nadu",
      "place": "Tuticorin Beach",
      "popularity": "Medium",
      "description": "Scenic beach, water sports activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2267,
      "city": "Thoothukudi",
      "state": "Tamil Nadu",
      "place": "Hare Island",
      "popularity": "Medium",
      "description": "Island, scenic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2268,
      "city": "Thoothukudi",
      "state": "Tamil Nadu",
      "place": "Tuticorin Port",
      "popularity": "Medium",
      "description": "Port, industrial area.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 2269,
      "city": "Thoothukudi",
      "state": "Tamil Nadu",
      "place": "Sankara Rameshvarar Thirukovil",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2270,
      "city": "Thoubal",
      "state": "Manipur",
      "place": "Thoubal River",
      "popularity": "High",
      "description": "River, boating, and scenic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2271,
      "city": "Thoubal",
      "state": "Manipur",
      "place": "Thoubal Dam",
      "popularity": "Medium",
      "description": "Dam, picnic spot.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2272,
      "city": "Thoubal",
      "state": "Manipur",
      "place": "Ikop Lake",
      "popularity": "Medium",
      "description": "Lake, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2273,
      "city": "Thoubal",
      "state": "Manipur",
      "place": "Moirang",
      "popularity": "High",
      "description": "Historical town, Loktak Lake access.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 2274,
      "city": "Thrissur",
      "state": "Kerala",
      "place": "Chimmony Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, trekking, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2275,
      "city": "Thrissur",
      "state": "Kerala",
      "place": "Punnathur Kotta (Elephant Palace)",
      "popularity": "Medium",
      "description": "Elephant sanctuary, elephant rides.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2276,
      "city": "Thrissur",
      "state": "Kerala",
      "place": "Snehatheeram Beach",
      "popularity": "Medium",
      "description": "Pristine beach, sunset views, family-friendly.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2277,
      "city": "Thrissur",
      "state": "Kerala",
      "place": "Koodalmanikyam Temple",
      "popularity": "Medium",
      "description": "Ancient Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2278,
      "city": "Thrissur",
      "state": "Kerala",
      "place": "Dream World Water Park",
      "popularity": "High",
      "description": "Water park, slides, recreational activities.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 2279,
      "city": "Tinsukia",
      "state": "Assam",
      "place": "Tilinga Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2280,
      "city": "Tinsukia",
      "state": "Assam",
      "place": "Bell Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2281,
      "city": "Tinsukia",
      "state": "Assam",
      "place": "Digboi Oil Refinery",
      "popularity": "High",
      "description": "Oil refinery, historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2282,
      "city": "Tinsukia",
      "state": "Assam",
      "place": "Joypur Rainforest",
      "popularity": "High",
      "description": "Rainforest, biodiversity hotspot.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2283,
      "city": "Tinsukia",
      "state": "Assam",
      "place": "Shiv Dham Temple",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual sanctuary.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2284,
      "city": "Tiruchirappalli",
      "state": "Tamil Nadu",
      "place": "Rockfort Temple",
      "popularity": "High",
      "description": "Ancient temple complex, panoramic views.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2285,
      "city": "Tiruchirappalli",
      "state": "Tamil Nadu",
      "place": "Srirangam Temple",
      "popularity": "High",
      "description": "Largest functioning Hindu temple, architectural marvel.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2286,
      "city": "Tiruchirappalli",
      "state": "Tamil Nadu",
      "place": "Kallanai Dam",
      "popularity": "Medium",
      "description": "Oldest dam in the world, engineering marvel.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2287,
      "city": "Tiruchirappalli",
      "state": "Tamil Nadu",
      "place": "Jambukeswarar Temple",
      "popularity": "Medium",
      "description": "Ancient Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2288,
      "city": "Tiruchirappalli",
      "state": "Tamil Nadu",
      "place": "Kallanai Dam (Grand Anicut)",
      "popularity": "Medium",
      "description": "Historical dam, engineering marvel.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 2289,
      "city": "Tiruchirappalli",
      "state": "Tamil Nadu",
      "place": "St. Joseph's College, Tiruchirappalli",
      "popularity": "High",
      "description": "Prominent educational institution.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 2290,
      "city": "Tirunelveli",
      "state": "Tamil Nadu",
      "place": "Nellaiappar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2291,
      "city": "Tirunelveli",
      "state": "Tamil Nadu",
      "place": "Kuttralam Falls",
      "popularity": "High",
      "description": "Scenic waterfall, bathing facilities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2292,
      "city": "Tirunelveli",
      "state": "Tamil Nadu",
      "place": "Manimuthar Falls",
      "popularity": "Medium",
      "description": "Picturesque waterfall, natural beauty.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2293,
      "city": "Tirunelveli",
      "state": "Tamil Nadu",
      "place": "Courtallam Falls",
      "popularity": "Medium",
      "description": "Waterfall, natural beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2294,
      "city": "Tirunelveli",
      "state": "Tamil Nadu",
      "place": "Manimuthar Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2295,
      "city": "Tirunelveli",
      "state": "Tamil Nadu",
      "place": "Kazhugumalai",
      "popularity": "Medium",
      "description": "Historical site, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2296,
      "city": "Tirunelveli",
      "state": "Tamil Nadu",
      "place": "Kutralam Falls (Courtallam Falls)",
      "popularity": "High",
      "description": "Scenic waterfalls, pilgrimage site.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2297,
      "city": "Tirunelveli",
      "state": "Tamil Nadu",
      "place": "Kappal Matha Church",
      "popularity": "Medium",
      "description": "Christian church, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2298,
      "city": "Tirunelveli",
      "state": "Tamil Nadu",
      "place": "Papanasam Dam",
      "popularity": "Medium",
      "description": "Dam, reservoir, scenic surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2299,
      "city": "Tirunelveli",
      "state": "Tamil Nadu",
      "place": "Kayatharu Dam",
      "popularity": "Low",
      "description": "Scenic dam, picnic spot.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2300,
      "city": "Tirupati",
      "state": "Andhra Pradesh",
      "place": "Venkateswara Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2301,
      "city": "Tirupati",
      "state": "Andhra Pradesh",
      "place": "Sri Padmavathi Ammavari Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2302,
      "city": "Tiruppur",
      "state": "Tamil Nadu",
      "place": "Kumaran Memorial Statue",
      "popularity": "Medium",
      "description": "Memorial statue, cultural significance.",
      "type": "Unique",
      "budget": 1000
    },
    {
      "Index": 2303,
      "city": "Tiruppur",
      "state": "Tamil Nadu",
      "place": "Avinashiappar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2304,
      "city": "Tiruppur",
      "state": "Tamil Nadu",
      "place": "Noyyal River Dam",
      "popularity": "Medium",
      "description": "Dam on Noyyal River, scenic surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2305,
      "city": "Tiruppur",
      "state": "Tamil Nadu",
      "place": "Koolipalayam Wetlands",
      "popularity": "Medium",
      "description": "Wetland area, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2306,
      "city": "Tiruppur",
      "state": "Tamil Nadu",
      "place": "Avanashiappar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2307,
      "city": "Tiruppur",
      "state": "Tamil Nadu",
      "place": "Sivanmalai",
      "popularity": "Medium",
      "description": "Hill station, temple visit.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2308,
      "city": "Tiruppur",
      "state": "Tamil Nadu",
      "place": "Tiruppur Kumaran Memorial",
      "popularity": "Medium",
      "description": "Memorial, historical significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2309,
      "city": "Tiruppur",
      "state": "Tamil Nadu",
      "place": "Noyyal River",
      "popularity": "Medium",
      "description": "River, scenic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2310,
      "city": "Tiruppur",
      "state": "Tamil Nadu",
      "place": "Kangayam Maha Mariamman Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2311,
      "city": "Tiruppur",
      "state": "Tamil Nadu",
      "place": "Tirupur Kumaran Memorial Statue",
      "popularity": "Low",
      "description": "Memorial statue, patriotic significance.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2312,
      "city": "Tiruppur",
      "state": "Tamil Nadu",
      "place": "Tirupur Kumaran Park",
      "popularity": "Low",
      "description": "Public park, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2313,
      "city": "Tiruppur",
      "state": "Tamil Nadu",
      "place": "Uthukuli Murugan Temple",
      "popularity": "Low",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2314,
      "city": "Tiruppur",
      "state": "Tamil Nadu",
      "place": "Palani Temple",
      "popularity": "Medium",
      "description": "Popular pilgrimage site, hilltop location.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2315,
      "city": "Tiruvannamalai",
      "state": "Tamil Nadu",
      "place": "Arunachaleswarar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2316,
      "city": "Tiruvannamalai",
      "state": "Tamil Nadu",
      "place": "Ramana Ashram",
      "popularity": "Medium",
      "description": "Spiritual retreat, meditation center.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2317,
      "city": "Tiruvannamalai",
      "state": "Tamil Nadu",
      "place": "Gingee Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2318,
      "city": "Tiruvottiyur",
      "state": "Tamil Nadu",
      "place": "Tiruvottiyur Murugan Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2319,
      "city": "Tiruvottiyur",
      "state": "Tamil Nadu",
      "place": "Adhiparasakthi Siddhar Peetam",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2320,
      "city": "Tiruvottiyur",
      "state": "Tamil Nadu",
      "place": "Tiruvottiyur Beach",
      "popularity": "Medium",
      "description": "Scenic beach, relaxation spot.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2321,
      "city": "Tiruvottiyur",
      "state": "Tamil Nadu",
      "place": "Vadivudai Amman Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2322,
      "city": "Tiruvottiyur",
      "state": "Tamil Nadu",
      "place": "Thiruvottiyur Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2323,
      "city": "Tiruvottiyur",
      "state": "Tamil Nadu",
      "place": "Thiruvottriyur Theradi",
      "popularity": "Medium",
      "description": "Town, urban area.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 2324,
      "city": "Tiruvuru",
      "state": "Andhra Pradesh",
      "place": "Chintalapalli Kalanilayam",
      "popularity": "Medium",
      "description": "Event venue, cultural performances.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 2325,
      "city": "Tiruvuru",
      "state": "Andhra Pradesh",
      "place": "Tiruvuru Railway Station",
      "popularity": "Medium",
      "description": "Railway station, transportation hub.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 2326,
      "city": "Tiruvuru",
      "state": "Andhra Pradesh",
      "place": "ISKCON Tiruvuru",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2327,
      "city": "Titagarh",
      "state": "West Bengal",
      "place": "Kuthi Ghat",
      "popularity": "Medium",
      "description": "Ghat, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2328,
      "city": "Titagarh",
      "state": "West Bengal",
      "place": "Khamar Bari",
      "popularity": "Medium",
      "description": "Farmhouse, agricultural heritage.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 2329,
      "city": "Titagarh",
      "state": "West Bengal",
      "place": "Belgachia Charnockite Line",
      "popularity": "Medium",
      "description": "Historical railway line, scenic journey.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2330,
      "city": "Tonk",
      "state": "Rajasthan",
      "place": "Bisalpur Dam",
      "popularity": "Medium",
      "description": "Dam, water reservoir.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2331,
      "city": "Tonk",
      "state": "Rajasthan",
      "place": "Samri Mata Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2332,
      "city": "Tonk",
      "state": "Rajasthan",
      "place": "Shree Digamber Jain Atishaya Kshetra",
      "popularity": "N/A",
      "description": "Jain temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2333,
      "city": "Tso Moriri Lake",
      "state": "Ladakh",
      "place": "Tso Moriri Lake",
      "popularity": "High",
      "description": "Lake, birdwatching, wildlife sanctuary.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2334,
      "city": "Tso Moriri Lake",
      "state": "Ladakh",
      "place": "Korzok Monastery",
      "popularity": "Medium",
      "description": "Buddhist monastery, cultural heritage.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2335,
      "city": "Tso Moriri Lake",
      "state": "Ladakh",
      "place": "Tso Kar Lake",
      "popularity": "Medium",
      "description": "Saltwater lake, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2336,
      "city": "Tuensang",
      "state": "Nagaland",
      "place": "Sumayangtse Monastery",
      "popularity": "High",
      "description": "Buddhist monastery, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2337,
      "city": "Tuensang",
      "state": "Nagaland",
      "place": "Langpangkong Caves",
      "popularity": "Medium",
      "description": "Natural caves, geological formations.",
      "type": "Adventure",
      "budget": 2000
    },
    {
      "Index": 2338,
      "city": "Tuensang",
      "state": "Nagaland",
      "place": "Tuensang Town Park",
      "popularity": "Medium",
      "description": "Public park, leisure activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2339,
      "city": "Tuensang",
      "state": "Nagaland",
      "place": "Tuensang Village",
      "popularity": "High",
      "description": "Naga village, cultural experiences.",
      "type": "Village",
      "budget": 1500
    },
    {
      "Index": 2340,
      "city": "Tuensang",
      "state": "Nagaland",
      "place": "Chilise Mon",
      "popularity": "High",
      "description": "Naga village, traditional architecture.",
      "type": "Village",
      "budget": 2000
    },
    {
      "Index": 2341,
      "city": "Tumkur",
      "state": "Karnataka",
      "place": "Siddaganga Math",
      "popularity": "Medium",
      "description": "Hindu matha, religious and educational institution.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2342,
      "city": "Tumkur",
      "state": "Karnataka",
      "place": "Devarayanadurga",
      "popularity": "Medium",
      "description": "Hill station, trekking trails.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2343,
      "city": "Tumkur",
      "state": "Karnataka",
      "place": "Namada Chilume",
      "popularity": "Medium",
      "description": "Spring, picnic spot.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2344,
      "city": "Tuni",
      "state": "Andhra Pradesh",
      "place": "Thotapalli Reservoir",
      "popularity": "Medium",
      "description": "Reservoir, scenic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2345,
      "city": "Tuni",
      "state": "Andhra Pradesh",
      "place": "Tuni Market",
      "popularity": "Medium",
      "description": "Marketplace, local shopping.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 2346,
      "city": "Tuni",
      "state": "Andhra Pradesh",
      "place": "Sri Satyanarayana Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2347,
      "city": "Tuni",
      "state": "Andhra Pradesh",
      "place": "Kondakarla Ava ",
      "popularity": "Medium",
      "description": "Mangrove forest, birdwatching.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2348,
      "city": "Tuni",
      "state": "Andhra Pradesh",
      "place": "ISKCON Tuni",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2349,
      "city": "Tura",
      "state": "Meghalaya",
      "place": "Tura Peak",
      "popularity": "High",
      "description": "Hilltop viewpoint, panoramic views.",
      "type": "Adventure",
      "budget": 2000
    },
    {
      "Index": 2350,
      "city": "Tura",
      "state": "Meghalaya",
      "place": "Nokrek National Park",
      "popularity": "High",
      "description": "National park, biodiversity hotspot.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2351,
      "city": "Tura",
      "state": "Meghalaya",
      "place": "Siju Cave",
      "popularity": "High",
      "description": "Limestone cave, spelunking adventure.",
      "type": "Adventure",
      "budget": 1500
    },
    {
      "Index": 2352,
      "city": "Tura",
      "state": "Meghalaya",
      "place": "Balpakram National Park",
      "popularity": "High",
      "description": "National park, wildlife sanctuary.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2353,
      "city": "Tura",
      "state": "Meghalaya",
      "place": "Waterfalls in Tura",
      "popularity": "High",
      "description": "Spectacular waterfalls, natural beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2354,
      "city": "Tura",
      "state": "Meghalaya",
      "place": "Garo Hills",
      "popularity": "Medium",
      "description": "Hill range, scenic beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2355,
      "city": "Tura",
      "state": "Meghalaya",
      "place": "Garo Baptist Convention Church",
      "popularity": "Medium",
      "description": "Christian church, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2356,
      "city": "Tura",
      "state": "Meghalaya",
      "place": "Chibok Park",
      "popularity": "Medium",
      "description": "Public park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2357,
      "city": "Udaipur",
      "state": "Rajasthan",
      "place": "Lake Pichola",
      "popularity": "High",
      "description": "Artificial lake, boat rides, sunset views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2358,
      "city": "Udaipur",
      "state": "Rajasthan",
      "place": "Jag Mandir",
      "popularity": "High",
      "description": "Island palace, architectural beauty, events.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2359,
      "city": "Udaipur",
      "state": "Tripura",
      "place": "Tripura Sundari Temple",
      "popularity": "High",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2360,
      "city": "Udaipur",
      "state": "Tripura",
      "place": "Bhuvaneswari Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2361,
      "city": "Udaipur",
      "state": "Tripura",
      "place": "Radhakishore Temple",
      "popularity": "Medium",
      "description": "Hindu temple, spiritual significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2362,
      "city": "Udaipur",
      "state": "Tripura",
      "place": "Tepania Eco Park",
      "popularity": "Medium",
      "description": "Eco park, nature trails.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2363,
      "city": "Udgir",
      "state": "Maharashtra",
      "place": "Sri Someshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2364,
      "city": "Udhampur",
      "state": "Jammu and Kashmir",
      "place": "Moungri Cave Shrine",
      "popularity": "Medium",
      "description": "Hindu shrine, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2365,
      "city": "Udhampur",
      "state": "Jammu and Kashmir",
      "place": "Bagh-e-Bahu",
      "popularity": "Medium",
      "description": "Garden, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2366,
      "city": "Udhampur",
      "state": "Jammu and Kashmir",
      "place": "Krimchi Temples",
      "popularity": "Medium",
      "description": "Ancient Hindu temples, archaeological site.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 2367,
      "city": "Udhampur",
      "state": "Jammu and Kashmir",
      "place": "Moungri Cave Shrines",
      "popularity": "Medium",
      "description": "Buddhist cave shrines, religious significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2368,
      "city": "Udumalaipettai",
      "state": "Tamil Nadu",
      "place": "Chinnakallar Falls",
      "popularity": "Medium",
      "description": "Waterfall, scenic beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2369,
      "city": "Udumalaipettai",
      "state": "Tamil Nadu",
      "place": "Thirumoorthy Hills and Temple",
      "popularity": "Medium",
      "description": "Hill station, religious site.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2370,
      "city": "Udumalaipettai",
      "state": "Tamil Nadu",
      "place": "Megalithic Dolmens",
      "popularity": "Medium",
      "description": "Archaeological site, historical significance.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2371,
      "city": "Udupi",
      "state": "Karnataka",
      "place": "Sri Krishna Matha, Udupi",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2372,
      "city": "Udupi",
      "state": "Karnataka",
      "place": "Malpe Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2373,
      "city": "Udupi",
      "state": "Karnataka",
      "place": "St. Mary's Island, Udupi",
      "popularity": "Medium",
      "description": "Island, geological formations.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2374,
      "city": "Udupi",
      "state": "Karnataka",
      "place": "St. Mary's Islands",
      "popularity": "Medium",
      "description": "Islands, scenic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2375,
      "city": "Udupi",
      "state": "Karnataka",
      "place": "Kaup Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2376,
      "city": "Udupi",
      "state": "Karnataka",
      "place": "Sri Krishna Temple, Udupi",
      "popularity": "High",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2377,
      "city": "Ujjain",
      "state": "Madhya Pradesh",
      "place": "Mahakaleshwar Jyotirlinga Temple",
      "popularity": "High",
      "description": "Sacred Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2378,
      "city": "Ujjain",
      "state": "Madhya Pradesh",
      "place": "Ram Ghat",
      "popularity": "Medium",
      "description": "Holy bathing ghat, spiritual significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2379,
      "city": "Ujjain",
      "state": "Madhya Pradesh",
      "place": "Kal Bhairav Temple",
      "popularity": "Medium",
      "description": "Hindu temple, dedicated to Lord Bhairava.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2380,
      "city": "Ujjain",
      "state": "Madhya Pradesh",
      "place": "Vikram Kirti Mandir",
      "popularity": "Medium",
      "description": "Museum, historical artifacts.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 2381,
      "city": "Ujjain",
      "state": "Madhya Pradesh",
      "place": "Bade Ganeshji Ka Mandir",
      "popularity": "Medium",
      "description": "Hindu temple, dedicated to Lord Ganesha.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2382,
      "city": "Ukhrul",
      "state": "Manipur",
      "place": "Shirui Hills",
      "popularity": "High",
      "description": "Hill station, Shirui Lily habitat.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2383,
      "city": "Ukhrul",
      "state": "Manipur",
      "place": "Phangrei Picnic Spot",
      "popularity": "Medium",
      "description": "Picnic spot, scenic beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2384,
      "city": "Ukhrul",
      "state": "Manipur",
      "place": "Khangkhui Lime Caves",
      "popularity": "Medium",
      "description": "Limestone caves, spelunking.",
      "type": "Adventure",
      "budget": 1500
    },
    {
      "Index": 2385,
      "city": "Ukhrul",
      "state": "Manipur",
      "place": "Hungpung",
      "popularity": "High",
      "description": "Naga village, cultural immersion.",
      "type": "Village",
      "budget": 2000
    },
    {
      "Index": 2386,
      "city": "Ukhrul",
      "state": "Manipur",
      "place": "Kachouphung Lake",
      "popularity": "Medium",
      "description": "Lake, boating, and fishing.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2387,
      "city": "Ukhrul",
      "state": "Manipur",
      "place": "Kamjong",
      "popularity": "High",
      "description": "Town, cultural heritage.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 2388,
      "city": "Ukhrul",
      "state": "Manipur",
      "place": "Chingai",
      "popularity": "High",
      "description": "Town, historical significance.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 2389,
      "city": "Ukhrul",
      "state": "Manipur",
      "place": "Khayang",
      "popularity": "High",
      "description": "Town, cultural immersion.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 2390,
      "city": "Ukhrul",
      "state": "Manipur",
      "place": "Shirui Village",
      "popularity": "High",
      "description": "Naga village, cultural heritage.",
      "type": "Village",
      "budget": 1500
    },
    {
      "Index": 2391,
      "city": "Ukhrul",
      "state": "Manipur",
      "place": "Tolloi",
      "popularity": "High",
      "description": "Town, transit point to Myanmar border.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 2392,
      "city": "Ulhasnagar",
      "state": "Maharashtra",
      "place": "Shri Sthanakvasi Jain Sangh",
      "popularity": "Medium",
      "description": "Jain temple, spiritual discourses.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2393,
      "city": "Unnao",
      "state": "Uttar Pradesh",
      "place": "Unnao Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 2394,
      "city": "Unnao",
      "state": "Uttar Pradesh",
      "place": "Birbal Ki Kahaniyan Park",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2395,
      "city": "Vadodara",
      "state": "Gujarat",
      "place": "Laxmi Vilas Palace",
      "popularity": "High",
      "description": "Majestic palace, architecture.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2396,
      "city": "Vadodara",
      "state": "Gujarat",
      "place": "Sayaji Baug",
      "popularity": "High",
      "description": "Public garden, zoo, and museum.",
      "type": "Wildlife",
      "budget": 1500
    },
    {
      "Index": 2397,
      "city": "Vadodara",
      "state": "Gujarat",
      "place": "Vadodara Museum and Picture Gallery",
      "popularity": "Medium",
      "description": "Art and history museum, exhibits.",
      "type": "City",
      "budget": 2000
    },
    {
      "Index": 2398,
      "city": "Vadodara",
      "state": "Gujarat",
      "place": "Nazarbaug Palace",
      "popularity": "Medium",
      "description": "Historical palace, royal residence.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2399,
      "city": "Vadodara",
      "state": "Gujarat",
      "place": "Maharaja Fateh Singh Museum",
      "popularity": "Medium",
      "description": "Museum, art and artifacts collection.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 2400,
      "city": "Vadodara",
      "state": "Gujarat",
      "place": "Sursagar Lake",
      "popularity": "Medium",
      "description": "Artificial lake, boating facilities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2401,
      "city": "Vaishali",
      "state": "Bihar",
      "place": "Kolhua Archaeological Site",
      "popularity": "Medium",
      "description": "Ancient ruins, archaeological site.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2402,
      "city": "Vaishali",
      "state": "Bihar",
      "place": "Vaishali Stupa",
      "popularity": "Medium",
      "description": "Buddhist stupa, historical significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 2403,
      "city": "Vaishali",
      "state": "Bihar",
      "place": "Budha Relic Stupa",
      "popularity": "Medium",
      "description": "Stupa, relic of Buddha.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2404,
      "city": "Valparai",
      "state": "Tamil Nadu",
      "place": "Loam's View Point",
      "popularity": "Medium",
      "description": "Viewpoint, panoramic views.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2405,
      "city": "Valparai",
      "state": "Tamil Nadu",
      "place": "Sholayar Dam",
      "popularity": "Medium",
      "description": "Dam, scenic surroundings.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2406,
      "city": "Valparai",
      "state": "Tamil Nadu",
      "place": "Nirar Dam",
      "popularity": "Medium",
      "description": "Dam, natural surroundings.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2407,
      "city": "Valsad",
      "state": "Gujarat",
      "place": "Tithal Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2408,
      "city": "Valsad",
      "state": "Gujarat",
      "place": "Udvada Atash Behram",
      "popularity": "High",
      "description": "Zoroastrian fire temple, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2409,
      "city": "Valsad",
      "state": "Gujarat",
      "place": "Nilkantheshwar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2410,
      "city": "Valsad",
      "state": "Gujarat",
      "place": "Parnera Hill",
      "popularity": "Medium",
      "description": "Hill station, trekking trails.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2411,
      "city": "Valsad",
      "state": "Gujarat",
      "place": "Swaminarayan Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2412,
      "city": "Vaniyambadi",
      "state": "Tamil Nadu",
      "place": "Shenbaga Thoppu",
      "popularity": "Medium",
      "description": "Garden, botanical species.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2413,
      "city": "Vaniyambadi",
      "state": "Tamil Nadu",
      "place": "Vellore Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2414,
      "city": "Vaniyambadi",
      "state": "Tamil Nadu",
      "place": "Sri Ramalinga Sowdeswari Amman Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2415,
      "city": "Varanasi",
      "state": "Uttar Pradesh",
      "place": "Kashi Vishwanath Temple",
      "popularity": "High",
      "description": "Holiest temple, spiritual significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2416,
      "city": "Varanasi",
      "state": "Uttar Pradesh",
      "place": "Assi Ghat",
      "popularity": "Medium",
      "description": "Holy bathing ghat, cultural activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2417,
      "city": "Varanasi",
      "state": "Uttar Pradesh",
      "place": "Sarnath",
      "popularity": "High",
      "description": "Buddhist pilgrimage site, ancient ruins.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 2418,
      "city": "Varanasi",
      "state": "Uttar Pradesh",
      "place": "Dashashwamedh Ghat",
      "popularity": "High",
      "description": "Holy ghat, religious rituals, evening aarti.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2419,
      "city": "Vasco da Gama",
      "state": "Goa",
      "place": "Bogmalo Beach",
      "popularity": "Medium",
      "description": "Secluded beach, diving, and snorkeling.",
      "type": "Beach",
      "budget": 1000
    },
    {
      "Index": 2420,
      "city": "Vasco da Gama",
      "state": "Goa",
      "place": "Vasco's Municipal Market",
      "popularity": "Medium",
      "description": "Local market, fresh produce and spices.",
      "type": "City",
      "budget": 1500
    },
    {
      "Index": 2421,
      "city": "Vasco da Gama",
      "state": "Goa",
      "place": "Navy Aviation Museum",
      "popularity": "Medium",
      "description": "Museum, vintage aircraft display.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 2422,
      "city": "Vellore",
      "state": "Tamil Nadu",
      "place": "Sripuram Golden Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2423,
      "city": "Vellore",
      "state": "Tamil Nadu",
      "place": "Amirthi Zoological Park",
      "popularity": "Medium",
      "description": "Zoo, animal exhibits.",
      "type": "Wildlife",
      "budget": 1500
    },
    {
      "Index": 2424,
      "city": "Vellore",
      "state": "Tamil Nadu",
      "place": "Golden Temple, Sripuram",
      "popularity": "High",
      "description": "Spiritual complex, gold-plated temple.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2425,
      "city": "Vellore",
      "state": "Tamil Nadu",
      "place": "Jalakandeswarar Temple",
      "popularity": "Medium",
      "description": "Hindu temple, intricate carvings.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2426,
      "city": "Vellore",
      "state": "Tamil Nadu",
      "place": "Christian Medical College, Vellore",
      "popularity": "High",
      "description": "Premier medical institution.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 2427,
      "city": "Venkatagiri",
      "state": "Andhra Pradesh",
      "place": "Venkatagiri Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural beauty.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2428,
      "city": "Venkatagiri",
      "state": "Andhra Pradesh",
      "place": "Vedagiri Lakshmi Narasimha Swamy Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2429,
      "city": "Venkatagiri",
      "state": "Andhra Pradesh",
      "place": "Kondavid Fort",
      "popularity": "Medium",
      "description": "Historical fort, architectural ruins.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 2430,
      "city": "Veraval",
      "state": "Gujarat",
      "place": "Somnath Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2431,
      "city": "Veraval",
      "state": "Gujarat",
      "place": "Veraval Beach",
      "popularity": "Medium",
      "description": "Beach, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2432,
      "city": "Vidisha",
      "state": "Madhya Pradesh",
      "place": "Udayagiri Caves",
      "popularity": "Medium",
      "description": "Buddhist caves, historical site.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 2433,
      "city": "Vidisha",
      "state": "Madhya Pradesh",
      "place": "Vidisha Museum",
      "popularity": "Medium",
      "description": "Museum, historical artifacts.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 2434,
      "city": "Vidisha",
      "state": "Madhya Pradesh",
      "place": "Sanchi Stupa",
      "popularity": "Medium",
      "description": "Buddhist stupa, historical site.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2435,
      "city": "Vijayawada",
      "state": "Andhra Pradesh",
      "place": "Bhavani Island",
      "popularity": "Medium",
      "description": "Largest river island, water sports activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2436,
      "city": "Visakhapatnam",
      "state": "Andhra Pradesh",
      "place": "Ramakrishna Beach",
      "popularity": "High",
      "description": "Prominent beach, water sports activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2437,
      "city": "Visakhapatnam",
      "state": "Andhra Pradesh",
      "place": "INS Kurusura Submarine Museum",
      "popularity": "Medium",
      "description": "Submarine museum, historical exhibits.",
      "type": "City",
      "budget": 1000
    },
    {
      "Index": 2438,
      "city": "Visakhapatnam",
      "state": "Andhra Pradesh",
      "place": "Kailasagiri Hill",
      "popularity": "High",
      "description": "Panoramic views, ropeway ride.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2439,
      "city": "Visakhapatnam",
      "state": "Andhra Pradesh",
      "place": "Tenneti Park",
      "popularity": "Low",
      "description": "Park with scenic views, relaxing atmosphere.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2440,
      "city": "Vizianagaram",
      "state": "Andhra Pradesh",
      "place": "Vizianagaram Fort",
      "popularity": "Medium",
      "description": "Historical fort, panoramic views.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2441,
      "city": "Vizianagaram",
      "state": "Andhra Pradesh",
      "place": "Rama Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2442,
      "city": "Vizianagaram",
      "state": "Andhra Pradesh",
      "place": "Thotlakonda",
      "popularity": "Medium",
      "description": "Buddhist site, ancient monastery.",
      "type": "Historical",
      "budget": 2000
    },
    {
      "Index": 2443,
      "city": "Warangal",
      "state": "Telangana",
      "place": "Warangal Fort",
      "popularity": "High",
      "description": "Historical fort, architectural marvel.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2444,
      "city": "Warangal",
      "state": "Telangana",
      "place": "Thousand Pillar Temple",
      "popularity": "Medium",
      "description": "Ancient temple, intricate carvings.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2445,
      "city": "Warangal",
      "state": "Telangana",
      "place": "Bhadrakali Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2446,
      "city": "Warangal",
      "state": "Telangana",
      "place": "Ramappa Temple",
      "popularity": "High",
      "description": "Kakatiya temple, UNESCO World Heritage Site.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2447,
      "city": "Warangal",
      "state": "Telangana",
      "place": "Pakhal Lake",
      "popularity": "Medium",
      "description": "Scenic lake, boating, and birdwatching.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2448,
      "city": "Warangal",
      "state": "Telangana",
      "place": "Kakatiya Rock Garden",
      "popularity": "Medium",
      "description": "Artificial rock garden, recreational park.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2449,
      "city": "Warangal",
      "state": "Telangana",
      "place": "Kakatiya Musical Garden",
      "popularity": "Medium",
      "description": "Musical fountain park, family attraction.",
      "type": "Entertainment",
      "budget": 1000
    },
    {
      "Index": 2450,
      "city": "Warangal",
      "state": "Telangana",
      "place": "Eturnagaram Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, biodiversity hotspot.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2451,
      "city": "Warangal",
      "state": "Telangana",
      "place": "Cherial Scroll Paintings",
      "popularity": "Medium",
      "description": "Traditional art, cultural heritage.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 2452,
      "city": "Wardha",
      "state": "Maharashtra",
      "place": "Sevagram Ashram",
      "popularity": "Medium",
      "description": "Gandhi ashram, historical site.",
      "type": "Historical",
      "budget": 1000
    },
    {
      "Index": 2453,
      "city": "Wardha",
      "state": "Maharashtra",
      "place": "Vinoba Bhave Ashram",
      "popularity": "Medium",
      "description": "Ashram, spiritual retreat.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2454,
      "city": "Wardha",
      "state": "Maharashtra",
      "place": "Bor Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2455,
      "city": "Wardha",
      "state": "Maharashtra",
      "place": "Sewagram",
      "popularity": "Medium",
      "description": "Spiritual ashram, Gandhian philosophy.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2456,
      "city": "Wardha",
      "state": "Maharashtra",
      "place": "Lendi Baug",
      "popularity": "Medium",
      "description": "Garden, historical significance.",
      "type": "Historical",
      "budget": 1500
    },
    {
      "Index": 2457,
      "city": "Wardha",
      "state": "Maharashtra",
      "place": "Paramdham Ashram",
      "popularity": "Medium",
      "description": "Ashram, meditation center.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2458,
      "city": "Washim",
      "state": "Maharashtra",
      "place": "Ekvira Devi Temple",
      "popularity": "High",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 1000
    },
    {
      "Index": 2459,
      "city": "Washim",
      "state": "Maharashtra",
      "place": "Anwa Temple",
      "popularity": "Medium",
      "description": "Hindu temple, architectural beauty.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2460,
      "city": "Washim",
      "state": "Maharashtra",
      "place": "Gautala Wildlife Sanctuary",
      "popularity": "Medium",
      "description": "Wildlife sanctuary, biodiversity hotspot.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2461,
      "city": "Williamnagar",
      "state": "Meghalaya",
      "place": "Rongrenggiri Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, biodiversity hotspot.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2462,
      "city": "Williamnagar",
      "state": "Meghalaya",
      "place": "Simsang River",
      "popularity": "High",
      "description": "River, scenic beauty.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2463,
      "city": "Williamnagar",
      "state": "Meghalaya",
      "place": "Sangsama",
      "popularity": "High",
      "description": "Scenic spot, panoramic views.",
      "type": "Adventure",
      "budget": 2000
    },
    {
      "Index": 2464,
      "city": "Williamnagar",
      "state": "Meghalaya",
      "place": "Waterfalls in Williamnagar",
      "popularity": "High",
      "description": "Spectacular waterfalls, natural beauty.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2465,
      "city": "Williamnagar",
      "state": "Meghalaya",
      "place": "Musical Stones of Meghalaya",
      "popularity": "High",
      "description": "Musical site, unique natural phenomenon.",
      "type": "Unique",
      "budget": 1500
    },
    {
      "Index": 2466,
      "city": "Wokha",
      "state": "Nagaland",
      "place": "Doyang River",
      "popularity": "High",
      "description": "River, angling, and boating.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2467,
      "city": "Wokha",
      "state": "Nagaland",
      "place": "Mount Tiyi",
      "popularity": "High",
      "description": "Hill, panoramic views of Wokha.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2468,
      "city": "Wokha",
      "state": "Nagaland",
      "place": "Doyang Hydro Project",
      "popularity": "High",
      "description": "Hydroelectric power project, scenic views.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2469,
      "city": "Wokha",
      "state": "Nagaland",
      "place": "Wokha Town Park",
      "popularity": "Medium",
      "description": "Public park, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2470,
      "city": "Wokha",
      "state": "Nagaland",
      "place": "Riphyim Old Village",
      "popularity": "High",
      "description": "Naga village, cultural immersion.",
      "type": "Village",
      "budget": 1000
    },
    {
      "Index": 2471,
      "city": "Yamunanagar",
      "state": "Haryana",
      "place": "Kalesar National Park",
      "popularity": "Medium",
      "description": "National park, wildlife sanctuary.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2472,
      "city": "Yamunanagar",
      "state": "Haryana",
      "place": "Adi Badri",
      "popularity": "Medium",
      "description": "Hindu temple complex, religious significance.",
      "type": "Spiritual",
      "budget": 2000
    },
    {
      "Index": 2473,
      "city": "Yamunanagar",
      "state": "Haryana",
      "place": "Bilaspur Lake",
      "popularity": "Medium",
      "description": "Lake, boating, picnic spot.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2474,
      "city": "Yamunanagar",
      "state": "Haryana",
      "place": "Kalesar Mahadev Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2475,
      "city": "Yavatmal",
      "state": "Maharashtra",
      "place": "Anand Sagar Lake",
      "popularity": "Medium",
      "description": "Lake, recreational activities.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2476,
      "city": "Yavatmal",
      "state": "Maharashtra",
      "place": "Shivaji Garden, Yavatmal",
      "popularity": "Medium",
      "description": "Urban park, recreational activities.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2477,
      "city": "Yavatmal",
      "state": "Maharashtra",
      "place": "Ganesha Temple, Yavatmal",
      "popularity": "Medium",
      "description": "Hindu temple, religious rituals.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2478,
      "city": "Yavatmal",
      "state": "Maharashtra",
      "place": "Wan Sanctuary, Yavatmal",
      "popularity": "High",
      "description": "Wildlife sanctuary, tiger conservation.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2479,
      "city": "Yavatmal",
      "state": "Maharashtra",
      "place": "Pench Tiger Reserve",
      "popularity": "High",
      "description": "Tiger reserve, wildlife safari.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2480,
      "city": "Yavatmal",
      "state": "Maharashtra",
      "place": "Kalamb Shiv Temple",
      "popularity": "Medium",
      "description": "Hindu temple, religious significance.",
      "type": "Spiritual",
      "budget": 1500
    },
    {
      "Index": 2481,
      "city": "Ziro",
      "state": "Arunachal Pradesh",
      "place": "Ziro Valley",
      "popularity": "High",
      "description": "Valley, cultural heritage.",
      "type": "Unique",
      "budget": 2000
    },
    {
      "Index": 2482,
      "city": "Ziro",
      "state": "Arunachal Pradesh",
      "place": "Talley Valley Wildlife Sanctuary",
      "popularity": "High",
      "description": "Wildlife sanctuary, endangered species.",
      "type": "Nature",
      "budget": 1000
    },
    {
      "Index": 2483,
      "city": "Zunheboto",
      "state": "Nagaland",
      "place": "Zunheboto Town Park",
      "popularity": "Medium",
      "description": "Public park, leisure activities.",
      "type": "Nature",
      "budget": 1500
    },
    {
      "Index": 2484,
      "city": "Zunheboto",
      "state": "Nagaland",
      "place": "Ghosu Bird Sanctuary",
      "popularity": "High",
      "description": "Bird sanctuary, birdwatching.",
      "type": "Nature",
      "budget": 2000
    },
    {
      "Index": 2485,
      "city": "Zunheboto",
      "state": "Nagaland",
      "place": "Satoi Range",
      "popularity": "High",
      "description": "Mountain range, trekking trails.",
      "type": "Adventure",
      "budget": 1000
    },
    {
      "Index": 2486,
      "city": "Zunheboto",
      "state": "Nagaland",
      "place": "Satoi Village",
      "popularity": "High",
      "description": "Naga village, traditional way of life.",
      "type": "Village",
      "budget": 1500
    },
    {
      "Index": 2487,
      "city": "Zunheboto",
      "state": "Nagaland",
      "place": "Satoi Gardens",
      "popularity": "Medium",
      "description": "Gardens, scenic beauty.",
      "type": "Nature",
      "budget": 2000
    }
   ]
  
  export default destinations;
  