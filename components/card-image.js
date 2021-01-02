import { Image } from 'react-datocms'

export default function CardImage({ title, responsiveImage }) {

  return (

    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className="h-64 w-full rounded-t pb-6"
    />

  )
}
