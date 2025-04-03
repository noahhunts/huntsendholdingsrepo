export function CastawayLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`text-3xl font-bold text-teal-600 ${className}`}>
      Castaway
      <span className="text-gray-800">CTS-One</span>
    </div>
  )
}

