import { NextPage } from 'next'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from 'react-bootstrap'
import { useRouter } from 'next/router'
import { SyntheticEvent, useState } from 'react'
import axios from 'axios'

const Register: NextPage = () => {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  const getRedirect = () => '/login'

  const register = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setSubmitting(true)

    const formdata = new FormData(e.currentTarget)
    const res = await axios.post('/api/register', Object.fromEntries(formdata))
    if (res.status === 200) {
      router.push(getRedirect())
    }
    setSubmitting(false)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="mb-4 rounded-0">
              <Card.Body className="p-4">
                <h1>Register</h1>
                <p className="text-black-50">Create your account</p>

                <form onSubmit={register}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      required
                      disabled={submitting}
                      placeholder="Email"
                      aria-label="Email"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Form.Control
                      type="password"
                      name="password"
                      required
                      disabled={submitting}
                      placeholder="Password"
                      aria-label="Password"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Form.Control
                      type="password"
                      name="password_repeat"
                      required
                      disabled={submitting}
                      placeholder="Repeat password"
                      aria-label="Repeat password"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Form.Label className="me-3">Gender</Form.Label>
                    <Form.Check
                      value="1"
                      className="me-3"
                      type="radio"
                      label="Male"
                      name="gender"
                    />
                    <Form.Check
                      value="2"
                      type="radio"
                      label="Female"
                      name="gender"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Form.Control
                      name="first_name"
                      required
                      disabled={submitting}
                      placeholder="First name"
                      aria-label="First name"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Form.Control
                      name="last_name"
                      required
                      disabled={submitting}
                      placeholder="Last name"
                      aria-label="Last name"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Form.Control
                      name="father_name"
                      required
                      disabled={submitting}
                      placeholder="Father name"
                      aria-label="Father name"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Form.Control
                      name="mather_name"
                      required
                      disabled={submitting}
                      placeholder="Mather name"
                      aria-label="Mather name"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Form.Label className="w-100">Date of birth</Form.Label>
                    <Form.Control
                      type="date"
                      name="date_of_birth"
                      required
                      disabled={submitting}
                      placeholder="Date of birth"
                      aria-label="Date of birth"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Form.Control
                      name="nid"
                      required
                      disabled={submitting}
                      placeholder="NID Number"
                      aria-label="NID Number"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Form.Control
                      name="mobile"
                      required
                      disabled={submitting}
                      placeholder="Mobile Number"
                      aria-label="Mobile Number"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Form.Control
                      name="blood_group"
                      required
                      disabled={submitting}
                      placeholder="Blood Group"
                      aria-label="Blood Group"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Form.Select name="marital_status">
                      <option value="1">Married</option>
                      <option value="2">Unmarried</option>
                    </Form.Select>
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Form.Control
                      disabled={submitting}
                      required
                      name="address"
                      as="textarea"
                      rows={3}
                      placeholder="Address"
                      aria-label="Address"
                    />
                  </InputGroup>

                  <Button
                    type="submit"
                    className="d-block w-100"
                    disabled={submitting}
                    variant="success"
                  >
                    Create Account
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register
