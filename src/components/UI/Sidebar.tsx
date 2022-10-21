import { FilmIcon, HomeIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import { Sidebar } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function SidebarMain(): JSX.Element {
  const navigate = useNavigate();

  const redirect = (path: string) => () => {
    navigate(path);
  };
  return (
    <Sidebar
      style={{
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '0',
      }}
      aria-label="Default sidebar example"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            style={{
              cursor: 'pointer',
            }}
            onClick={redirect('/')}
            icon={HomeIcon}
          >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            style={{
              cursor: 'pointer',
            }}
            onClick={redirect('/genres')}
            icon={VideoCameraIcon}
          >
            List Genre
          </Sidebar.Item>
          <Sidebar.Item
            style={{
              cursor: 'pointer',
            }}
            onClick={redirect('/movies')}
            icon={FilmIcon}
          >
            List Movie
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
