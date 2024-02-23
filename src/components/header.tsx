export type HeaderProps = {
    className?: string;
    items: NavbarItem[];
}

export type NavbarItem = {
    name: string,
    link: string
};

export function Navbar({ items, className }: HeaderProps) {
    return (
        <header className="mx-10 ">
            <nav>
                <ul>
                    {items.map((value, index) => (
                        <li key={index} className="inline-block m-10 w-36 text-center ">
                            <a href={value.link} className={` ${className}`}>{value.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
