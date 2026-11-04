
const image = (name) =>
  `https://placehold.co/600x400/eaf5ee/176b43?text=${encodeURIComponent(name)}`;

export const products = [
  { id: 1, name: "Brake Pads", category: "Braking System", price: 1800, description: "Reliable braking performance.", image: "/brake-pads.jpg" },
  { id: 2, name: "Oil Filter", category: "Engine Parts", price: 650, description: "Helps keep engine oil clean.", image: "/oil-filters.jpg" },
  { id: 3, name: "Air Filter", category: "Engine Parts", price: 900, description: "Helps provide clean air to the engine.", image: "/air-filter.jpg" },
  { id: 4, name: "Spark Plugs", category: "Electrical Parts", price: 1200, description: "Supports smooth engine starting.", image: "/spark-plugs.jpg" },
  { id: 5, name: "Shock Absorber", category: "Suspension", price: 4500, description: "Helps improve ride comfort.", image: "/shock-absorber.jpg" },
  { id: 6, name: "Fuel Pump", category: "Fuel System", price: 3200, description: "Moves fuel through the fuel system.", image: "/fuel-pump.jpg" },
  { id: 7, name: "Ball Joint", category: "Suspension", price: 1500, description: "Supports suspension movement.", image:"/ball-joint.jpg" },
  { id: 8, name: "Arm Bush", category: "Suspension", price: 800, description: "Helps reduce vibration.", image: "/bushes.jpg" },
  { id: 9, name: "Radiator", category: "Cooling System", price: 6500, description: "Helps regulate engine temperature.", image: "/radiator.jpg" },
  { id: 10, name: "Water Pump", category: "Cooling System", price: 2800, description: "Circulates engine coolant.", image: "/water-pump.jpg"},
  { id: 11, name: "Clutch Plate", category: "Transmission", price: 3500, description: "Transfers engine power through the clutch.", image: "/clutch-kit.jpg" },
  { id: 12, name: "Alternator", category: "Electrical Parts", price: 7500, description: "Helps charge the vehicle battery.", image: "/alternator.jpg" },
  { id: 13, name: "Car Battery", category: "Electrical Parts", price: 9500, description: "Provides electrical starting power.", image: "/alternator.jpg" },
  { id: 14, name: "Wheel Bearing", category: "Wheels", price: 2200, description: "Supports smooth wheel rotation.", image: "/wheel-bearing.jpg"},
  { id: 15, name: "LED Headlight", category: "Lighting", price: 2500, description: "Provides vehicle lighting.", image: "/headlight.jpg" },
  { id: 16, name: "Wiper Blades", category: "Accessories", price: 700, description: "Helps clear rain from the windscreen.", image: "/wiper-blades.jpg" },
  { id: 17, name: "Tie Rod End", category: "Steering", price: 1300, description: "Connects parts of the steering system.", image: "/tie-rod-end.jpg" },
  { id: 18, name: "Brake Disc", category: "Braking System", price: 3200, description: "Works with brake pads to slow the vehicle.", image: "/brake-disc.jpg" },
  { id: 19, name: "Thermostat", category: "Cooling System", price: 1100, description: "Helps control coolant flow.", image: "/thermostat.jpg" },
  { id: 20, name: "Drive Belt", category: "Engine Parts", price: 1400, description: "Transfers rotation between engine components.", image: "/drive-belt.jpg"},
];
