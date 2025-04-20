// Fake human identity for clone camouflage
module.exports = function randomIdentity(id) {
  const names = ["Kai", "Lena", "Zane", "Nova", "Eli"];
  const locations = ["Tokyo", "Berlin", "Toronto", "Seoul", "Amsterdam"];
  return {
    id,
    name: names[id % names.length],
    location: locations[id % locations.length],
    age: 20 + (id % 15),
    interests: ["AI", "crypto", "books", "startups", "design"]
  };
};