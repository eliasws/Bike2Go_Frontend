export let Bikes= [
   { id : 1,
    name : "Tom Dockle",
    description: "Tolles Fahrrad!",
    maintainceStatus : 200,
    rating : 5,
    pictureId : "tom_dockle",
    category : {
        id: 1,
    type: "BIKE",
    price : 0.10, 
    name : "Normales Fahrrad"
    },
    position : {
        lat: "48.814116",
        lng: "9.210639"
    }
    },
     { id : 2,
    name : "Monkey",
    description: "Lässiges Rennrad!",
    maintainceStatus : 200,
    rating : 4,
    pictureId : "monkey",
    category : {
        id: 2,
    type: "SPORT",
    price : 0.15, 
    name : "Rennrad"
    },
     position : {
        lat: "48.817875",
        lng: "9.203982"
    }
    },
     { id : 3,
    name : "Rocky",
    description: "Ebike",
    maintainceStatus : 200,
    rating : 5,
        pictureId : "rocky",
    category : {
        id: 3,
    type: "EBIKE",
    price : 0.20, 
    name : "E-Bike"
    },
      position : {
        lat: "48.814630",
        lng: "9.212267"
    }
    },
     { id : 1,
    name : "Betty",
    description: "Outdoor Fahrrad",
    maintainceStatus : 404,
    rating : 3,
    pictureId : "monkey",
    category : {
        id: 4,
    type: "OUTDOOR",
    price : 0.10, 
    name : "Outdoor"
    },
    position : {
        lat: "48.816808",
        lng: "9.211650"
    }

    }
]