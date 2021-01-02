import CardImage from '../card-image'
import Link from 'next/link'

export default function PostCard({
  title,
  coverImage,
  category,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
          <CardImage title={title} responsiveImage={coverImage.responsiveImage} />

          <p className="w-full text-gray-600 text-xs md:text-sm px-6">{category}</p>
          <div className="w-full font-bold text-xl text-gray-900 px-6">{title}</div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
            {excerpt}</p>
        </a>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
        <div className="flex items-center justify-between">
          <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name"
            src="http://i.pravatar.cc/300" alt="Avatar of Author" />
          <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
        </div>
      </div>
    </div>

  );
}
