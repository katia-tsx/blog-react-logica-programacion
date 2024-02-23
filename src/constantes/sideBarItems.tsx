import { SideBarItem } from "../components/sidebar";
import { FaHome, FaUser, FaCog } from 'react-icons/fa'; 

export const items: SideBarItem[] = [
    { name: "Inicio", link: "/inicio", icon: <FaHome /> },
    { name: "Perfil", link: "/perfil", icon: <FaUser /> },
    { name: "Configuración", link: "/configuracion", icon: <FaCog /> }
];
