import React from "react";
import DestinationData from "./DestinationData";
import "./DestinationStyle.css";

const Destination = () => {
  return (
    <div>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>
      </div>
      <DestinationData
        className="first-des"
        heading="Jammu Kashmir"
        text="Experience the enchanting beauty of Jammu and Kashmir with our
            exclusive Kashmir tour packages. Jammu and Kashmir’s romantic
            houseboats, breath-taking shikara rides, and gorgeous views of the
            morning sun will make you forget about the conventional style of
            living. However, wondrous views of sparkling lakes, mighty mountains
            and magical shikara rides are just a few of the many memories that
            our Jammu Kashmir tour packages have to offer. Dash through blankets
            of snow or marvel at the crumbling shines of Jammu, Jammu & Kashmir
            is indeed paradise on earth. Be your own knight in shining armour as
            you engage in some horseback riding along the Sheshnag Lake in the
            Jammu & Kashmir Valley. Or pluck juicy apples from gloriously green
            trees that bend with their weight. For those looking to explore this
            enchanting region, our Kashmir trip packages provide the perfect
            opportunity to experience the natural beauty and cultural richness
            of this unique destination."
        img1="https://3.imimg.com/data3/PT/JG/MY-3655873/jammu-kashmir-tour-500x500.jpg"
        img2="https://images.pexels.com/photos/12750077/pexels-photo-12750077.jpeg?cs=srgb&dl=pexels-tauseefkhaliq-12750077.jpg&fm=jpg"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Goa"
        text="Discover the vibrant charm of Goa. Goa’s sun-kissed beaches, 
        lively nightlife, and rich cultural heritage offer an unforgettable experience. 
        Relax on the pristine sands of Palolem Beach or explore the bustling streets of Panaji, where colonial architecture 
        and local markets await. Goa's lush green landscapes and serene backwaters provide a perfect backdrop for adventure 
        and relaxation alike.Immerse yourself in the region's unique blend of Indian and Portuguese cultures. 
        Enjoy water sports, savor delicious seafood, and dance the night away at beachside shacks. From the historic forts 
        of Aguada and Chapora to the tranquil spice plantations, Goa has something for everyone. Take a boat cruise along 
        the Mandovi River, visit the famous Dudhsagar Waterfalls, and explore the vibrant nightlife of Baga and Calangute. 
        Experience the magic of Goa and create memories that will last a lifetime."
        img1="https://plus.unsplash.com/premium_photo-1697729600112-434ee1c7f670?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1548604303-0f41381e7a6d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default Destination;
