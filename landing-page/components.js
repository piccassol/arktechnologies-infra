// ARK Technologies Component Library
export const Button = ({ children, onClick, variant = 'primary' }) => {
  const baseClasses = 'px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105'
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700',
    secondary: 'border border-gray-600 hover:border-gray-400'
  }
  
  return (
    <button 
      className={${baseClasses} }
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export const GradientText = ({ children }) => {
  return (
    <span className="text-purple-400">
      {children}
    </span>
  )
}
