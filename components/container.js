export default function Container({ children }) {
  return (
    <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
      <div class="mx-0 sm:mx-6">
        {children}
      </div>
    </div>
  )
}
