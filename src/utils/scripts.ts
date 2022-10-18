import { PrismaClient } from '@prisma/client';
import { popupData, locationData } from '../../temp/popupData';

const prisma = new PrismaClient();

const popup = popupData.map((popup) => {
  return {
    name: popup.name,
    description: popup.description,
    basedIn: popup.basedIn,
    imageUrl: popup.links.imageUrl,
    instagram: popup.links.instagram,
    isHot: popup.isHot,
    orderType: popup.orderType,
  };
});

const locations = locationData.map((location) => {
  return {
    name: location.name,
    address: location.address,
    city: location.city,
    state: location.state,
    zip: location.zip,
    country: location.country,
    mapsUrl: location.mapsUrl,
  };
});

// // Create a new popup from the data array
// async function main() {
//   const user = await prisma.popup.createMany({
//     data,
//     skipDuplicates: true,
//   });
//   console.log(user);
// }

//Read all popups
// async function main() {
//   const popups = await prisma.popup.findMany();
//   console.log(popups);
// }

// Create a new popup with many events
// async function main() {
//   const popup = await prisma.popup.create({
//     data: {
//       name: 'Hot Asian Buns',
//       description: 'HANDCRAFTED STEAMED BAO',
//       imageUrl: '/hotasianbuns.jpg',
//       isHot: true,
//       instagram: 'https://www.instagram.com/hot_asian_buns/',
//       // website: 'https://www.cholodogs.com/',
//       orderType: 'First come first serve',
//       basedIn: 'Orlando',
//       // Events: {
//       //   create: [
//       //     {
//       //       date: new Date('2022-12-12 18:30:00'),
//       //       location: "GB's Bottle Shop",
//       //     },
//       //   ],
//       // },
//     },
//   });
//   console.log(`JUST ADDED: \n ${popup.name}`);
// }

//Create many popups with many events
// async function main() {
//   const popup = await prisma.popup.createMany({
//     data,
//     skipDuplicates: true,
//   });
//   console.log(`JUST ADDED: \n ${popup}`);
// }

// This will Delete a popup
// async function main() {
//   const popup = await prisma.popup.delete({
//     where: {
//       id: 'cl8hy8v8a000006vefnq6lzcc',
//     },
//   });
//   console.log('Entry deleted successfully');
// }

async function returnAllPopups() {
  const popups = await prisma.popup.findMany();
  const events = await prisma.event.findMany();
  //Print out all popups in the array
  popups.map((popup) => {
    console.log(`${popup.id}  |  ${popup.name}`);
  });
  events.map((event) => {
    console.log(
      `Popupid: ${event.popupId}  |  Eventid: ${
        event.id
      } | ${event.date.getMonth()}/${event.date.getDay()}/${event.date.getFullYear()}  | ${
        event.name
      }`
    );
  });
}

async function createEvent() {
  const event = await prisma.event.create({
    data: {
      date: new Date('2022-10-25 18:00:00'),
      // name: 'WEEN EATING CHAMPIONSHIP',
      location: {
        connect: {
          id: 'cl8yxrze50008verevd73lc9s',
        },
      },
      popup: {
        connect: {
          id: 'cl8yxxwg9000bve40upd78bo9',
        },
      },
    },
  });
  console.log(`${event.date.getDate()} Event added successfully`);
}

async function createLocation() {
  const location = await prisma.location.create({
    data: {
      name: 'Pour Choice Taphouse',
      address: '1225 N Mills Ave',
      city: 'Orlando',
      state: 'FL',
      zip: '32803',
      country: 'USA',
      mapsUrl: 'https://goo.gl/maps/uHQtYc3p4GPXJm769',
    },
  });
  console.log(location);
}

async function resetRecord() {
  await prisma.popup.delete({
    where: {
      id: 'cl8hy8v8a000706ve0emgvtlw',
    },
  });
}

async function updateEvent(eventid: string) {
  await prisma.event.update({
    where: {
      id: eventid,
    },
    data: {
      location: {
        connect: {
          id: 'cl8xacce00000ve9rjs8kmt62',
        },
      },
    },
  });

  console.log('Entry updated successfully');
}

// async function updatePopup(popupid: string) {
//   await prisma.popup.update({
//     where: {
//       id: popupid,
//     },
//     data: {
//       website: 'https://blackmagicpizza.com/',
//     },
//   });
// }

async function createAllLocations() {
  await prisma.location.createMany({
    data: locations,
    skipDuplicates: true,
  });
  console.log('Locations added successfully');
}

async function createAllPopups() {
  await prisma.popup.createMany({
    data: popup,
    skipDuplicates: true,
  });
  console.log('Popups added successfully');
}

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

// createAllLocations()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

// createAllPopups()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

// returnAllPopups()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

createLocation()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

createEvent()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// resetRecord()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

// updatePopup('cl8wnxxki0000veh0xjck9rla')
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
// //   });

// updateEvent()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

// async function assignTagsToPopup(popupid: string) {
//   await prisma.popup.update({
//     where: {
//       id: popupid,
//     },
//     data: {
//       tags: {
//         connect: [
//           {
//             id: 'cl8yy0zg10000ve14vjjrlbop',
//           },
//           // {
//           //   id: 'cl8x8q9f70000ve9rjgq0bq8j',
//           // },
//         ],
//       },
//     },
//   });
//   console.log('Tags assigned successfully');
// }
// assignTagsToPopup('cl8yxxwg90000ve40fjxgq181')
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
