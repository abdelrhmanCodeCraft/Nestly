export const locations = [
  "New York, USA",
  "Los Angeles, USA",
  "Miami, USA",
  "London, UK",
  "Paris, France",
  "Tokyo, Japan",
  "Dubai, UAE",
  "Sydney, Australia",
  "Toronto, Canada",
  "Berlin, Germany"
];

export const propertyTypes = [
  "Apartments",
  "Villas",
  "Townhouses",
  "Condos",
  "Commercial",
  "Industrial",
  "Land",
  "Farm",
  "Beach House",
  "Mountain Cabin"
];

export const pricingRanges = [
  { label: "Under $100,000", min: 0, max: 100000 },
  { label: "$100,000 - $250,000", min: 100000, max: 250000 },
  { label: "$250,000 - $500,000", min: 250000, max: 500000 },
  { label: "$500,000 - $1M", min: 500000, max: 1000000 },
  { label: "Over $1M", min: 1000000, max: 999999999 }
];

export const propertySizes = [
  { label: "Small (0-1000 sq ft)", min: 0, max: 1000 },
  { label: "Medium (1000-2500 sq ft)", min: 1000, max: 2500 },
  { label: "Large (2500-5000 sq ft)", min: 2500, max: 5000 },
  { label: "Extra Large (5000+ sq ft)", min: 5000, max: 99999 }
];

export const buildYears = [
  "Before 1900",
  "1900-1950",
  "1950-1980",
  "1980-2000",
  "2000-2010",
  "2010-2020",
  "2020-Present"
];