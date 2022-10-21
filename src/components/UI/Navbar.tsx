import { FilmIcon } from '@heroicons/react/24/solid';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';

export default function NavbarMain(): JSX.Element {
  return (
    <Navbar
      fluid
      style={{
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        color: '#3F83F8',
      }}
    >
      <Navbar.Brand href="/">
        <FilmIcon className="h-6 w-6" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Movie List</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img="https://cdn-icons-png.flaticon.com/512/149/149071.png" rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
