import { Tags } from '../types/popup';

export default function PopupTags({ tag }: { tag: Tags }) {
  return (
    <p className='mt-1 truncate text-sm space-x-1 py-2 text-gray-500'>
      <span
        key={tag.id}
        className='inline-block bg-gray-200 hover:bg-gray-300 hover:cursor-pointer rounded-full px-2 py-0.5 text-xs font-medium text-gray-800'
      >
        {tag.name}
      </span>
    </p>
  );
}
