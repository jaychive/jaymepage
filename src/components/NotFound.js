import React from 'react';
import { Link } from 'react-router-dom';
function NotFound(props) {
  return (
    <>
      <Link to="*">
        <section id="">
          404 Error
        </section>
      </Link>
    </>
  );
}

export default NotFound;