import { ReactNode, useState } from 'react';

export type HeaderProps = {
    className?: string;
    items: SideBarItem[];
}

export type SideBarItem = {
    name: string,
    link: string,
    icon: ReactNode 
};

export function Sidebar({ items, className }: HeaderProps) {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    return (
        <div className={`bg-gray-200 w-20 h-screen fixed py-4 ${className}`}>
            <nav>
                <ul>
                    {items.map((value, index) => (
                        <li key={index} className="mb-4">
                            <a
                                href={value.link}
                                className={`block text-center ${selectedItem === value.name ? 'text-blue-500' : 'text-gray-800'}`}
                                onClick={() => setSelectedItem(value.name)}
                            >
                                <p className="w-6 h-6 mx-auto" >{value.icon}</p>  
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full block mx-auto"></button>
        </div>
    );
}
