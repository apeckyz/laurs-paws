export const BUSINESS_INFO = {
  name: "Laur's Paws",
  owner: "Laura Evans",
  established: "2016",
  tagline: "Grooming & Walking Services",
  phone: "07446 493344",
  landline: "01872 240135",
  email: "laurajevans92@hotmail.co.uk",
  website: "www.laurs-paws.co.uk",
  instagram: "https://www.instagram.com/laurs_paws/",
  facebook: "https://www.facebook.com/LaursPaws16",
  instagramHandle: "@laurs_paws",
  facebookHandle: "@LaursPaws16",
  address: {
    line1: "17 Green Close",
    line2: "Daniel Road",
    city: "Truro",
    county: "Cornwall",
    postcode: "TR1 2DD"
  }
};

export const OPENING_TIMES = [
  { day: "Monday", hours: "09:00 - 17:00", open: true },
  { day: "Tuesday", hours: "09:00 - 17:00", open: true },
  { day: "Wednesday", hours: "09:00 - 17:00", open: true },
  { day: "Thursday", hours: "09:00 - 17:00", open: true },
  { day: "Friday", hours: "09:00 - 17:00", open: true },
  { day: "Saturday", hours: "10:00 - 16:00", open: true },
  { day: "Sunday", hours: "Closed", open: false }
];

export const SERVICES = [
  {
    id: "grooming",
    title: "Pet Grooming",
    description: "Professional grooming services to keep your pet looking and feeling their best.",
    icon: "Scissors"
  },
  {
    id: "walking",
    title: "Dog Walking",
    description: "Regular walks tailored to your dog's needs and energy levels.",
    icon: "Footprints"
  },
  {
    id: "sitting",
    title: "Pet Sitting",
    description: "Reliable care for your pets in the comfort of their own home.",
    icon: "Home"
  },
  {
    id: "cat-visits",
    title: "Cat Visits",
    description: "Dedicated visits to ensure your cat is happy, fed, and entertained.",
    icon: "Cat"
  }
];

export const GALLERY_IMAGES = {
  hero: [
    "/laur-with-dog.jpg",
    "/laur-with-dog2.jpg",
    "/laur-with-dog3.jpg",
    "/laur-with-dog5.jpg"
  ],
  beforeAfter: [
    { before: "/before-groom1.jpg", after: "/after-groom1.jpg" },
    { before: "/before-groom2.jpg", after: "/after-groom2.jpg" },
    { before: "/before-groom3.jpg", after: "/after-groom3.jpg" },
    { before: "/before-groom4.jpg", after: "/after-groom5.jpg" },
    { before: "/before-groom5.jpg", after: "/after-groom6.jpg" }
  ],
  showcase: [
    "/happy-dog.jpg",
    "/happy-dog2.jpg",
    "/happy-dog3.jpg",
    "/2groomed-brothers.jpg",
    "/2groomed-brotherstogether.jpg",
    "/closeup-dog.jpg",
    "/dog-playing.jpg"
  ]
};
