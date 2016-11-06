export let Bikes= [
   { id : 1,
    name : "Tom Dockle",
    description: "Tolles Fahrrad!",
    maintenanceStatus : 100,
    rating : 5,
    ratingCount : 100,
    pictureId : "tom_dockle",
    category : {
        id: 1,
    type: "BIKE",
    price : 1.50, 
    name : "Stadtrad"
    },
    position : {
        lat: "48.814116",
        lng: "9.210639"
    }
    },
     { id : 2,
    name : "Monkey",
    description: "Lässiges Rennrad!",
    maintenanceStatus : 100,
    rating : 4,
    ratingCount : 48,
    pictureId : "monkey",
    category : {
        id: 2,
    type: "SPORT",
    price : 4, 
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
    maintenanceStatus : 200,
    rating : 5,
    ratingCount : 29,
        pictureId : "rocky",
    category : {
        id: 3,
    type: "EBIKE",
    price : 2.50, 
    name : "E-Bike"
    },
      position : {
        lat: "48.814630",
        lng: "9.212267"
    }
    },
     { id : 4,
    name : "Betty",
    description: "Outdoor Fahrrad",
    maintenanceStatus : 300,
    rating : 3,
    ratingCount : 3,
    pictureId : "betty",
    category : {
        id: 4,
    type: "OUTDOOR",
    price : 2, 
    name : "Outdoor"
    },
    position : {
        lat: "48.816808",
        lng: "9.211650"
    }
    },
    { id : 5,
    name : "Fahrrädle",
    description: "Outdoor",
    maintenanceStatus : 100,
    rating : 4,
    ratingCount : 156,
    pictureId : "betty",
    category : {
        id: 4,
    type: "EBIKE",
    price : 2, 
    name : "E-Bike"
    },
    position : {
        lat: "48.819808",
        lng: "9.218650"
    }
    }
]