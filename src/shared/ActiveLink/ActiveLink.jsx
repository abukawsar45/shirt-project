import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? 'text-blue-400' : '')}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;