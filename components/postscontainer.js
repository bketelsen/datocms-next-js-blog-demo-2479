export default function PostsContainer({ children }) {
  return (
    <div className="flex flex-wrap justify-between pt-12 -mx-6">
      {children}
    </div>
  )
}
