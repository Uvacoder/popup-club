import { HeartIcon, ShareIcon, LinkIcon } from '@heroicons/react/solid';
import { Links } from '../types/popup';
import Image from 'next/image';
import Link from 'next/link';

export default function SocialMedia({ links }: { links: Links }) {
  return (
    <>
      {' '}
      {typeof links.instagram === 'string' ? (
        <a
          target={'_blank'}
          rel={'noreferrer'}
          href={links.instagram}
          className='hover:cursor-pointer'
        >
          <Image
            src={'/instagram.svg'}
            width={17}
            height={17}
            className='hover:cursor-pointer'
          />
        </a>
      ) : null}
      {/* {typeof links.website === 'string' ? (
        <a
          target={'_blank'}
          rel={'noreferrer'}
          href={links.website}
          className='hover:cursor-pointer'
        >
          <LinkIcon fill='black' width={17} height={17} />
        </a>
      ) : null} */}
      <ShareIcon fill='black' width={17} height={17} className='' />{' '}
      <HeartIcon fill='red' width={17} height={17} className='' />
    </>
  );
}
