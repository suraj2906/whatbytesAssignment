import Image from 'next/image'
import Link from 'next/link'

interface NavbarProps {
  userName: string
  userImage: string
}

const Navbar = ({ userName, userImage }: NavbarProps) => {
  return (
    <nav className="h-18 px-4 border-b border-gray-200 bg-white fixed w-full top-0 z-50">
      <div className="h-full flex items-center justify-between">
        {/* Company Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg" // Make sure to add your logo in the public directory
            alt="Company Logo"
            width={180}
            height={60}
            className="object-contain"
          />
        </Link>
        

        {/* User Profile */}
        <div className="flex items-center gap-3 rounded-xl mr-10 p-3 border border-gray-500">
          <div className="h-8 w-8 rounded-full overflow-hidden">
            <Image
              src={userImage}
              alt={`${userName}'s profile`}
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="text-gray-700">{userName}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 