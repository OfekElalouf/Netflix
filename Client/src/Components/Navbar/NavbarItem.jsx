const NavbarItem = ({label, redirect}) => {
    return <div onClick={redirect} className="text-white cursor-pointer hover:text-gray-300 transition">
    
       {label} 
    </div>
}

export default NavbarItem;