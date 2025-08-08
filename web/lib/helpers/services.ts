export type Service = (typeof SERVICES)[number];

export const SERVICES = [
  {
    title: "Website Maintenance",
    slug: "web-main",
    tagline: "Comprehensive Website Maintenance Services (WAMS)",
    hero: {
      src: "web-main.jpeg",
    },
    labs: "Your website is a vital part of your business, and keeping it in top shape is essential. CO2 Labs offers reliable website maintenance solutions to ensure your site remains secure, up-to-date, and performing at its best.",
    advantages: [
      {
        title: "Regular Updates",
        description:
          "We keep your website up to date with the latest software and plugin updates to ensure compatibility and security.",
      },
      {
        title: "Security Monitoring",
        description:
          "Our team monitors your site 24/7 to detect and prevent any security threats, protecting your data and reputation.",
      },
      {
        title: "Performance Optimization",
        description:
          "We regularly analyze and optimize your site’s performance to ensure fast loading times and a seamless user experience.",
      },
      {
        title: "Content Management",
        description:
          "Need to update content or add new features? Our team is here to help with timely content updates and enhancements.",
      },
    ],
    cta: {
      text: "Partner with CO2 Labs for reliable website maintenance and enjoy peace of mind knowing your site is in expert hands. Contact us today to learn more about our services.",
      buttonText: "Get a Free Quote",
    },
  },
];
