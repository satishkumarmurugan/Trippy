import "./TripStyle.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Packages</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          heading="Kerala Package"
          text="Uncover the serene beauty of Kerala,
           often referred to as God's Own Country. 
           Kerala's lush green landscapes, tranquil backwaters, 
           and pristine beaches offer a perfect escape from the 
           hustle and bustle of everyday life. Cruise along the 
           picturesque backwaters on a traditional houseboat,
           and explore the charming villages and paddy fields 
           that dot the region.Wander through the fragrant tea 
           gardens of Munnar, relax on the golden sands of Varkala 
           Beach, and witness the majestic Athirapally Waterfalls. 
           Indulge in authentic Kerala cuisine, renowned for its rich 
           flavors and fresh ingredients, and rejuvenate with an Ayurvedic spa treatment. 
           Kerala's unique blend of natural beauty, cultural richness, 
           and warm hospitality ensures a truly unforgettable experience."
          image="https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg"
        />
        <TripData
          heading="Himachal Pradesh Package"
          text="Embark on an exhilarating journey through the picturesque landscapes 
          of Himachal Pradesh, nestled in the heart of the Himalayas. Discover the 
          serene hill stations of Shimla and Manali, where snow-capped peaks, lush valleys, 
          and colonial architecture await.
          Indulge in thrilling activities like paragliding in Bir Billing, 
          trekking in the majestic valleys of Spiti and Kinnaur,
          and exploring the ancient monasteries of Dharamshala and 
          McLeod Ganj. Experience the charm of local culture and cuisine, 
          breathe in the crisp mountain air, and unwind amidst the natural beauty of this Himalayan paradise. 
          Himachal Pradesh promises an unforgettable escape into the lap of nature."
          image="https://t4.ftcdn.net/jpg/04/70/76/19/360_F_470761995_6ru1SxTV2KCienxwZ5H2U8gZrqJH0fiI.jpg"
        />
        <TripData
          heading="Andaman & Nicobar Islands Package"
          text="Explore the pristine beauty of the Andaman & Nicobar Islands, 
          a tropical paradise known for its crystal-clear waters, 
          white sandy beaches, and lush greenery. Dive into the vibrant 
          coral reefs of Havelock Island, relax on the serene Radhanagar 
          Beach, and experience the rich marine life through snorkeling 
          and scuba diving.Visit the historic Cellular Jail in Port Blair, 
          take a scenic boat ride to Ross Island, and witness the bioluminescent waters at night. 
          The islands offer a perfect blend of adventure and relaxation, making it an 
          ideal destination for nature lovers and adventure seekers alike. 
          Enjoy the tranquil ambiance and warm hospitality of this unique archipelago for a truly unforgettable experience."
          image="https://miro.medium.com/v2/resize:fit:1400/1*71GCdeCXyEA9bxjdfigJAw.jpeg"
        />
      </div>
    </div>
  );
}

export default Trip;
