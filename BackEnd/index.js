const simpleJsonData = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  permissions: {
    accessData: false,
    fly: true,
  },
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes",
      ],
    },
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
  ],
};

console.log(simpleJsonData.squadName);
//or
console.log(simpleJsonData["squadName"]);

console.log(simpleJsonData.permissions.accessData);
//or
console.log(simpleJsonData["permissions"]["accessData"]);

console.log(simpleJsonData.members[0]);
//or
console.log(simpleJsonData["members"][0]);

console.log(simpleJsonData.members[1].powers[2]);
//or
console.log(simpleJsonData["members"][1]["powers"][2]);
