import Link from 'next/link'
import { Nav, NavDropdown } from 'react-bootstrap'

export default function HeaderFeaturedNav() {
  return (
    <Nav>
      <Nav.Item>
        <Link href="/" passHref legacyBehavior>
          <Nav.Link className="p-2">Dashboard</Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/" passHref legacyBehavior>
          <Nav.Link className="p-2">Report</Nav.Link>
        </Link>
      </Nav.Item>
      <NavDropdown title="Appointments" id="basic-nav-dropdown">
        <NavDropdown.Item href="/appointments">
          My Appointments
        </NavDropdown.Item>
        <NavDropdown.Item href="/appointments/create">
          New Appointment
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  )
}
