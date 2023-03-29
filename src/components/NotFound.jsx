import React from 'react';
import { Link } from 'react-router-dom';
function NotFound(props) {
  return (
    <>
      <Link to="*">
        <section id="container mx-auto px-4">
          404 Error
        </section>
      </Link>
    </>
  );
}

export default NotFound;