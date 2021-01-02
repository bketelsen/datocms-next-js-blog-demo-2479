import { Image } from 'react-datocms'

export default function CoverImage({ title, responsiveImage }) {
  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className="h-full w-full shadow"
    />
  )
  return (

    <div class="w-full md:w-2/3 rounded-t">
      { image}
    </div>

  )
}
