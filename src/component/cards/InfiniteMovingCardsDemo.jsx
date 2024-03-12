import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../cards/InfiniteMovingCards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[22rem] w-[100vw] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
      <p className="text-4xl text-blue-500">Happy Users</p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Absolutely stellar service! Exceeded my expectations by miles. Can't recommend enough.",
    name: "Rahul",
    title: "Mumbai, India",
  },
  {
    quote:
      "Product quality was superb, arrived promptly. Will definitely be a repeat customer.",
    name: "Shyam singh",
    title: "Delhi, India",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Monukesh Singh",
    title: "Nagpur, India",
  },
  {
    quote:
      "Excellent communication, swift delivery, and top-notch packaging. A truly satisfying experience overall.",
    name: "Shivam Singh",
    title: "Rajkot, India",
  },
  {
    quote:
      "Outstanding attention to detail, evident in every aspect. Five stars without hesitation",
    name: "Akaber",
    title: "Mumbai, India",
  },
  {
    quote:
      "Impressed with the professionalism and courtesy displayed. A truly delightful transaction.",
    name: "Mohit Rai",
    title: "Varanasi, India",
  },
  {
    quote:
      "Incredible value for money, surpassed all competitors. A standout in every regard.",
    name: "Ashwani Rai",
    title: "Mirzapur, India",
  },
  {
    quote:
      "Unmatched customer support, went above and beyond to ensure satisfaction.",
    name: "Herman Melville",
    title: "Goa, India",
  },
  {
    quote:
      "Flawless transaction from start to finish. Couldn't be happier with my purchase.",
    name: "Neraj Raj",
    title: "Chandigarh, India",
  },
  {
    quote:
      "Exceptional experience, deserving of the highest praise. Thank you for setting the standard so high",
    name: "Mohit Singh",
    title: "Delhi, India",
  },
];
