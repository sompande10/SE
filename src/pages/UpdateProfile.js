import React from 'react'

function UpdateProfile() {
  return (
      <>
    <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      </>
  )
}

export default UpdateProfile