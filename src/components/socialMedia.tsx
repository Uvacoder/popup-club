import { HeartIcon, ShareIcon, LinkIcon } from '@heroicons/react/solid';
import { Links } from '../types/popup';
import Image from 'next/image';

export default function SocialMedia({
  links,
  showAll,
}: {
  links: Links;
  showAll: boolean;
}) {
  const linkList = [
    { url: links.instagram, img: '/instagram.svg', isShown: true },
    { url: links.facebook, img: '/instagram.svg', isShown: showAll },
    { url: links.twitter, img: '/instagram.svg', isShown: showAll },
    { url: links.youtube, img: '/instagram.svg', isShown: showAll },
    { url: links.website, img: '/instagram.svg', isShown: showAll },
  ];

  return (
    <>
      {' '}
      {linkList.map((link) => {
        if (link.isShown) {
          return (
            <a
              target={'_blank'}
              key={link.url}
              rel={'noreferrer'}
              href={link.url}
              className='hover:cursor-pointer'
            >
              <Image
                src={'/instagram.svg'}
                width={17}
                height={17}
                className='hover:cursor-pointer'
              />
            </a>
          );
        }
      })}
      <ShareIcon fill='black' width={17} height={17} className='' />{' '}
      <HeartIcon fill='red' width={17} height={17} className='' />
    </>
  );
}
// {typeof links.instagram === 'string' ? (
//   <a
//     target={'_blank'}
//     rel={'noreferrer'}
//     href={links.instagram}
//     className='hover:cursor-pointer'
//   >
//     <Image
//       src={'/instagram.svg'}
//       width={17}
//       height={17}
//       className='hover:cursor-pointer'
//     />
//   </a>
// ) : null}
// {showAll ? (
//   <a
//     target={'_blank'}
//     rel={'noreferrer'}
//     href={links.facebook}
//     className='hover:cursor-pointer'
//   >
//     <Image
//       src={'/instagram.svg'}
//       width={17}
//       height={17}
//       className='hover:cursor-pointer'
//     />
//   </a>
// ) : null}
// {showAll ? (
//   <a
//     target={'_blank'}
//     rel={'noreferrer'}
//     href={links.twitter}
//     className='hover:cursor-pointer'
//   >
//     <Image
//       src={'/instagram.svg'}
//       width={17}
//       height={17}
//       className='hover:cursor-pointer'
//     />
//   </a>
// ) : null}
// {showAll ? (
//   <a
//     target={'_blank'}
//     rel={'noreferrer'}
//     href={links.youtube}
//     className='hover:cursor-pointer'
//   >
//     <Image
//       src={'/instagram.svg'}
//       width={17}
//       height={17}
//       className='hover:cursor-pointer'
//     />
//   </a>
// ) : null}
// {showAll ? (
//   <a
//     target={'_blank'}
//     rel={'noreferrer'}
//     href={links.website}
//     className='hover:cursor-pointer'
//   >
//     <Image
//       src={'/instagram.svg'}
//       width={17}
//       height={17}
//       className='hover:cursor-pointer'
//     />
//   </a>
// ) : null}
