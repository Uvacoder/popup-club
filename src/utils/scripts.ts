import { PrismaClient } from '@prisma/client';
import { popupData } from '../../temp/popupData';

const prisma = new PrismaClient();

const data = popupData.map((popup) => {
  return {
    name: popup.name,
    description: popup.description,
    imageUrl: popup.imageUrl,
    categories: popup.categories,
    isHot: popup.isHot,
    orderType: popup.orderType,
    basedIn: popup.basedIn,
  };
});

// Create a new popup
async function main() {
  const user = await prisma.popup.createMany({
    data: {
      name: 'Bigass Hotdogs',
      description: 'fuck you and your mustard',
      imageUrl:
        'https://i.kym-cdn.com/photos/images/original/001/879/602/b66.jpg',
      categories: ['Hotdogs', 'Bitch'],
      isHot: true,
      orderType: 'Preorder',
      basedIn: 'Orlando',
    },
  });
  console.log(user);
}

//Read all popups
// async function main() {
//   const popups = await prisma.popup.findMany();
//   console.log(popups);
// }

//Create a new popup with many events
// async function main() {
//   const popup = await prisma.popup.create({
//     data: {
//       name: 'Black Magic Pizza',
//       description: "Orlando's most exclusive pizza",
//       imageUrl:
//         'https://i.kym-cdn.com/photos/images/original/001/879/602/b66.jpg',
//       categories: ['Neapolitan', 'pizza'],
//       isHot: true,
//       orderType: 'First come first serve',
//       basedIn: 'Orlando',
//       Events: {
//         create: [
//           {
//             date: new Date('2022-12-12 18:30:00'),
//             location: "GB's Bottle Shop",
//           },
//         ],
//       },
//     },
//   });
//   console.log(`JUST ADDED: \n ${popup}`);
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
      } | ${event.date.getMonth()}/${event.date.getDay()}/${event.date.getFullYear()}  |  ${
        event.location
      } | ${event.name}`
    );
  });
}

async function createEvent() {
  const event = await prisma.event.create({
    data: {
      date: new Date('2023-1-4 18:00:00'),
      location: "Will's Pub",
      popup: {
        connect: {
          id: 'cl8hy7s8e0006r1verdqzz4n6',
        },
      },
    },
  });
  console.log(event);
}

async function resetRecord() {
  await prisma.popup.delete({
    where: {
      id: 'cl8hy8v8a000706ve0emgvtlw',
    },
  });
}

async function updatePopup(eventid: string) {
  await prisma.event.update({
    where: {
      id: eventid,
    },
    data: {
      name: 'Post-hurricane relief',
    },
  });

  console.log('Entry updated successfully');
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

returnAllPopups()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// createEvent()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

// resetRecord()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

// updatePopup('cl8hsof6l0003wwveq55d6oe6')
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
