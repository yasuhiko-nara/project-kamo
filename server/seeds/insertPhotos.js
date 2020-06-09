exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("photos")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("photos").insert([
        {
          place: "Edogawa",
          description: "my favorite",
          url: "https://i.postimg.cc/VLgFWXHD/1.jpg",
          kamo_id: 1,
        },
        {
          place: "Maebashi",
          description: "hikkoshi",
          url: "https://i.postimg.cc/fTq9bCPn/2.jpg",
          kamo_id: 2,
        },
        {
          place: "Roppongi",
          description: "wanchan-mask",
          url: "https://i.postimg.cc/XJnJLBPk/3.jpg",
          kamo_id: 3,
        },
        {
          place: "Roppongi",
          description: "wanchan-mask",
          url: "https://i.postimg.cc/7Y5g0j0Y/7.jpg",
          kamo_id: 3,
        },
        {
          place: "Edogawa",
          description: "mini",
          url: "https://i.postimg.cc/ht9Q0njg/8.jpg",
          kamo_id: 1,
        },
        {
          place: "Edogawa",
          description: "hikkoshi",
          url: "https://i.postimg.cc/3wtRLxHM/9.jpg",
          kamo_id: 2,
        },
      ]);
    });
};

// https://postimages.org/
