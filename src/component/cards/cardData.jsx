import MissingCard2 from "./MissingCard2";
import { HashLoader } from "react-spinners";

export const cardsData = [
  {
    name: "Rani gonday",
    age: "11y",
    address: "Jaipur",
    Supporters: "255",
    views: "50k",
    imageone:
      "https://media.istockphoto.com/id/984020348/photo/child-playing-outdoor-in-the-nature.jpg?s=612x612&w=0&k=20&c=ZfvQhe5JzflKcaJKSTGTJQFCVDR5SHmvsBPDFFt5M2U=",
  },
  {
    name: "salu sha",
    age: "8y",
    address: "Delhi",
    Supporters: "455",
    views: "50k",
    imageone:
      "https://media.istockphoto.com/id/1129356797/photo/teenage-girl-sitting-on-the-grass-outdoor-in-the-nature.webp?b=1&s=170667a&w=0&k=20&c=5_BysZGbMq6YoU-w-khTAaLhzTXg0hZs773-45mys0s=",
  },
  {
    name: "Rahul singh",
    age: "20y",
    address: "Nagpur",
    Supporters: "105",
    views: "50k",
    imageone:
      "https://media.istockphoto.com/id/1192037506/photo/young-indian-farmer-standing-and-inspecting-crops-in-paddy-field.webp?b=1&s=170667a&w=0&k=20&c=R9StnJGfVOlaOmhfADFcy0wAmlkNyCmuNmNI29-LWuc=",
  },
  {
    name: "Sakir",
    age: "56y",
    address: "Delhi",
    Supporters: "125",
    views: "20k",
    imageone:
      "https://imageones.unsplash.com/photo-1640583818579-740430212d27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHZpbGxhZ2UlMjBtZW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Raja Ram",
    age: "52y",
    address: "Varanasi",
    Supporters: "555",
    views: "70k",
    imageone:
      "https://imageones.unsplash.com/photo-1609252509102-aa73ff792667?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMHZpbGxhZ2UlMjBtZW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Malti Rana",
    age: "27y",
    address: "Nagpur",
    Supporters: "205",
    views: "30k",
    imageone:
      "https://media.istockphoto.com/id/1205299877/photo/portrait-of-confident-woman-in-sari.webp?b=1&s=170667a&w=0&k=20&c=YZfFUojp-QugKr1i7o1VGMCXm0aY30JWJLMvLrNDjvk=",
  },
  {
    name: "Golu",
    age: "1.2y",
    address: "Bangalore",
    Supporters: "325",
    views: "10k",
    imageone:
      "https://media.istockphoto.com/id/860954790/photo/nepali-baby-boy-in-playpen-village-near-annapurna-range.webp?b=1&s=170667a&w=0&k=20&c=HK_h97NUJ3OIkt2d4T-3zRulfPVSEJbuzOemqC9SLIY=",
  },
  {
    name: "Amit Singh",
    age: "24y",
    address: "Delhi",
    Supporters: "715",
    views: "50k",
    imageone :"https://imageones.unsplash.com/photo-1604177091072-b7b677a077f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ram",
    age: "19y",
    address: "Kanpur",
    Supporters: "415",
    views: "62k",
    imageone:
      "https://media.istockphoto.com/id/1141737652/photo/portrait-of-a-confident-young-man.webp?b=1&s=170667a&w=0&k=20&c=Y9fE0UrJiqEADUBx5ccBkExhSmnV5eyQ9kPMeGecGoM=",
  },
  {
    name: "Sita Devi",
    age: "48y",
    address: "Lucknow",
    Supporters: "195",
    views: "25k",
    imageone:
      "https://media.istockphoto.com/id/1145066504/photo/indian-street-vendor-woman.jpg?s=612x612&w=0&k=20&c=X6gQFpYySdhdqfxwPHoJtrIl2qO_LhxMZ2SPzsEgUe8=",
  },
  {
    name: "Gopal Sharma",
    age: "62y",
    address: "Mumbai",
    Supporters: "185",
    views: "33k",
    imageone:
      "https://media.istockphoto.com/id/872301090/photo/farmer-holding-hoe.jpg?s=612x612&w=0&k=20&c=JZ_AwyMSQWJ3x-VOs9Dz4kGtwrLO5rs_Sl2Zw7VwmSo=",
  },
  {
    name: "Krishna Patel",
    age: "25y",
    address: "Mumbai",
    Supporters: "456",
    views: "70k",
    imageone:
      "https://media.istockphoto.com/id/1284405588/photo/young-indian-farmer-in-traditional-wear.jpg?s=612x612&w=0&k=20&c=L7bbUXRLwmlFvs-WGhRjgEFhCM5LujUk_JmdFar0EvM=",
  },
  {
    name: "Radha Verma",
    age: "56y",
    address: "Jaipur",
    Supporters: "6000",
    views: "80k",
    imageone:
      "https://media.istockphoto.com/id/1145070023/photo/street-vendor-indian-woman-smiling.webp?b=1&s=170667a&w=0&k=20&c=TTRE5h-bDtkm6-O7Wc_Iv-0R4kn64JF7VgrSECvlZnM=",
  },
  {
    name: "Lakshmi Gupta",
    age: "60y",
    address: "Chennai",
    Supporters: "1200",
    views: "50k",
    imageone:
      "https://media.istockphoto.com/id/1500850775/photo/senior-rural-indian-woman-wearing-sari-standing-at-village-home.webp?b=1&s=170667a&w=0&k=20&c=xx1IxT5weHAKWYoQ8lm-p2NQtUN9iiLE-7pexlSyLFM=",
  },
  {
    name: "Ramya Singh",
    age: "29y",
    address: "Hyderabad",
    Supporters: "105",
    views: "2k",
    imageone:
      "https://media.istockphoto.com/id/2032737247/photo/young-indian-farmer-standing-in-agriculture-field-happy-indian-farmer-in-field-portrait-of.jpg?s=612x612&w=0&k=20&c=-Jpn_yRJr034AWw6DrlQkyHC6n3hVZfxco9kdDEJRCg=",
  },
  {
    name: "Shyam Kumar",
    age: "4y",
    address: "Kolkata",
    Supporters: "495",
    views: "10k",
    imageone:
      "https://media.istockphoto.com/id/1316744042/photo/indian-poor-child-playing-at-home.webp?b=1&s=170667a&w=0&k=20&c=LrbMt07ulALavbdh_Jg0vdvOuHj7ol4v6BPXTX1UERE=",
  },
  {
    name: "Anita Yadav",
    age: "57y",
    address: "Ahmedabad",
    Supporters: "803",
    views: "30k",
    imageone:
      "https://media.istockphoto.com/id/1495308547/photo/woman-talking-on-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=lyYutf0WVicwBMWJfSj0vPF5VawBY6VEmOAeAKia6VY=",
  },
];

export const addingDummyData = () => {
  return (
    <div className=" w-full py-5 gap-3 flex justify-center items-center flex-wrap  ">
      {cardsData ? (
        cardsData?.map((card, index) => (
          <MissingCard2 card={card} key={index} />
        ))
      ) : (
        <div className="w-full flex items-center blur-sm bg-slate-400 justify-center h-[100vh]">
          <HashLoader color="blue" />
        </div>
      )}
    </div>
  );
};
