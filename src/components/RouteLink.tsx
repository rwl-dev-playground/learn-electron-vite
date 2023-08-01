import { Link } from "react-router-dom";

interface RouteLinkProps {
  to: string;
  children: string;
}

export const RouteLink = ({ to, children }: RouteLinkProps) => {
  return <Link to={to}>{children}</Link>;
};
